import fs from 'fs'
import { DOWNLOAD_BLOG_IMAGE_PATH, DOWNLOAD_IMAGE_EXTENSION } from '../../const'

export const downloadImagePath = DOWNLOAD_BLOG_IMAGE_PATH
export const downloadImageExtention = DOWNLOAD_IMAGE_EXTENSION

const savBlogImageIfNeeded = async (blocks, parentPageId) => {
  const tmpPath = `${downloadImagePath}/${parentPageId}`
  const tmpBlocks = blocks
  
  // try { fs.rmSync(tmpPath, { recursive: true, force: true }); }
  // catch(err) { console.error(err)}
  if (!fs.existsSync(DOWNLOAD_BLOG_IMAGE_PATH)) {
    fs.mkdirSync(DOWNLOAD_BLOG_IMAGE_PATH)
  }
  
  if (!fs.existsSync(tmpPath)) {
    fs.mkdirSync(tmpPath)
  }

  tmpBlocks.forEach(async (block) => {
    
    await checkBlock(tmpPath, block)
    if (block.has_children) {
      block.children?.forEach(async (block) => await checkBlock(block, tmpPath))
    }
    
  })
}

const checkBlock = async (path, block) => {
  

  if (block.type == 'image') {

    const image = block.image
    if(!image){
      console.log("not found image")
      return
    }

    if(image.external){
      console.log("this is external link image")
      return
    }
    const name = block.id
    const url = image.file.url
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
  fs.writeFile(path + '/' + keyName + downloadImageExtention, imageBinary, (error) => {
    if (error) {
      console.log(error)
      throw error
    }
  })
}

export default savBlogImageIfNeeded