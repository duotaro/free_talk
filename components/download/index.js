import fs from 'fs'
import { DOWNLOAD_IMAGE_EXTENSION, DOWNLOAD_IMAGE_PATH } from '../../const'

export const downloadImagePath = DOWNLOAD_IMAGE_PATH
export const downloadImageExtention = DOWNLOAD_IMAGE_EXTENSION
var savePath = downloadImagePath

/// Notion内の画像は一時ファイル扱いなので、ブロックの画像をpublic/blogImagesに保存する
/// 拡張子がjpeg, pngでわかれているとパスの取得時に判定が必要になるので、.pngで統一する
const saveImageIfNeeded = async (blocksWithChildren, path) => {
  savePath = `${downloadImagePath}/${path}`
  const tmpPath = `${downloadImagePath}/${path}`
  savePath = tmpPath
  console.log(savePath)
  
  if (!fs.existsSync(savePath)) {
    fs.mkdirSync(savePath)
  }

  blocksWithChildren.forEach(async (block) => {
    const image = block.image
    if(!image){
        return
    }
    checkBlock(block)
    if (block.has_children) {
      block.children?.forEach((block) => checkBlock(block))
    }
  })
}

const checkBlock = async (block) => {

  if (block.image.type == 'files') {
    const name = block.image.files[0].name
    const url = block.image.files[0].file.url
    const blob = await getTemporaryImage(url)

    if (!blob) {
      return ''
    }

    const extension = blob.type.replace('image/', '')

    if (!isImageExist(name)) {
      const binary = (await blob.arrayBuffer())
      const buffer = Buffer.from(binary)
      saveImage(buffer, name)
    }
  }
}

/// 一時ファイルの画像をバイナリとして取得する。ここで画像のフォーマットがわかる
const getTemporaryImage = async (url) => {
  try {
    const blob = await fetch(url).then((r) => r.blob())
    return blob
  } catch (error) {
    console.log(error)
    return null
  }
}

const isImageExist = (keyName) => {
  return fs.existsSync(savePath + '/' + keyName + downloadImageExtention)
}

const saveImage = (imageBinary, keyName) => {
  console.log(savePath + '/' + keyName + downloadImageExtention)
  fs.writeFile(savePath + '/' + keyName + downloadImageExtention, imageBinary, (error) => {
    if (error) {
      console.log(error)
      throw error
    }
  })
}

export default saveImageIfNeeded