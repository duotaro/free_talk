import fs from 'fs'
import { DOWNLOAD_IMAGE_EXTENSION, DOWNLOAD_IMAGE_PATH } from '../../const'

export const downloadImagePath = DOWNLOAD_IMAGE_PATH
export const downloadImageExtention = DOWNLOAD_IMAGE_EXTENSION
// var savePath = downloadImagePath

/// Notion内の画像は一時ファイル扱いなので、ブロックの画像をpublic/blogImagesに保存する
/// 拡張子がjpeg, pngでわかれているとパスの取得時に判定が必要になるので、.pngで統一する
const saveImageIfNeeded = async (blocksWithChildren, path) => {
  // savePath = `${downloadImagePath}/${path}`
  const tmpPath = `${downloadImagePath}/${path}`
  const tmpBlock = blocksWithChildren
  // savePath = tmpPath
  // console.log(savePath)
  console.log(blocksWithChildren)
  
  try { fs.rmSync(tmpPath, { recursive: true, force: true }); }
  catch(err) { console.error(err)}
  
  if (!fs.existsSync(tmpPath)) {
    fs.mkdirSync(tmpPath)
  }

  tmpBlock.forEach(async (block) => {
    const image = block.image
    if(!image){
      console.log("not found image")
        return
    }
    
    await checkBlock(block, tmpPath)
    if (block.has_children) {
      block.children?.forEach(async (block) => await checkBlock(block, tmpPath))
    }
  })
}

const checkBlock = async (block, path) => {

  if (block.image.type == 'files') {
    const name = block.image.files[0].name
    const url = block.image.files[0].file.url
    const blob = await getTemporaryImage(url)

    if (!blob) {
      console.log("not found blob")
      return ''
    }

    const extension = blob.type.replace('image/', '')

    if (!isImageExist(path, name)) {
      const binary = (await blob.arrayBuffer())
      const buffer = Buffer.from(binary)
      await saveImage(buffer, path, name)
    } else {
      console.log("already exist image.")
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

const isImageExist = (path, keyName) => {
  return fs.existsSync(path + '/' + keyName + downloadImageExtention)
}

const saveImage = (imageBinary, path, keyName) => {
  console.log("into saveImage")
  console.log(path + '/' + keyName + downloadImageExtention)
  fs.writeFile(path + '/' + keyName + downloadImageExtention, imageBinary, (error) => {
    if (error) {
      console.log(error)
      throw error
    }
  })
}

export default saveImageIfNeeded