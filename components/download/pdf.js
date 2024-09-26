import fs from 'fs'
import { DOWNLOAD_PDF_PATH } from '../../const'

export const downloadPath = DOWNLOAD_PDF_PATH
const savePdfIfNeeded = async (blocksWithChildren, path) => {
  const tmpPath = `${downloadPath}/${path}`
  const tmpBlock = blocksWithChildren
  
  if (!fs.existsSync(tmpPath)) {
    fs.mkdirSync(tmpPath)
  }

  tmpBlock.forEach(async (block) => {
    for (const [key, value] of Object.entries(block)) {
      await checkBlock(value, tmpPath)
    }
  })
}

const checkBlock = async (block, path) => {
  if (block.type == 'files') {
    const pdf = block.files[0]
    const tmpName = pdf.name
    const name = tmpName.replace(/ /g, '_')
    const extension = name.split('.').pop().toLowerCase();

    // 拡張子がPDFであることを確認
    if (extension !== 'pdf') {
      console.log("not pdf file")
      return ''
    }

    const url = pdf.file.url
    const blob = await getTemporaryImage(url)

    if (!blob) {
      console.log("not found blob")
      return ''
    }

    if (!isExist(path, name)) {
      const binary = (await blob.arrayBuffer())
      const buffer = Buffer.from(binary)
      await save(buffer, path, name)
    } else {
      console.log("already exist.")
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

const isExist = (path, name) => {
  return fs.existsSync(path + '/' + name)
}

const save = (binary, path, name) => {

  const maxRetries = 3
  const saveWithRetry = (attempt) => {
    
    fs.writeFile(path + '/' + name, binary, (error) => {
      if (error) {
        if (attempt < maxRetries) {
          console.log(`Error during save, attempt ${attempt + 1} of ${maxRetries}. Retrying in ${retryDelay}ms...`);
          setTimeout(() => save(attempt + 1), retryDelay);
        } else {
          console.log('Max retries reached. Error during save:');
          console.log(error);
          throw error;
        }
      } else {
        console.log('file saved successfully.');
      }
    });
  };

  saveWithRetry(0)
}

export default savePdfIfNeeded