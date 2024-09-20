import { DOWNLOAD_IMAGE_EXTENSION, ACCESABLE_IMAGE_PATH, ACCESABLE_PDF_PATH } from "../const"


export default class PolicyEntity {
    constructor(item, isJpn){


        const tmpName = item.properties["image"].files[0].name
        const name = tmpName.replace(/ /g, '_')

        const tmpPdfName = item.properties["pdf"].files[0].name
        const pdfName = tmpPdfName.replace(/ /g, '_')

        this.title = isJpn ? item.properties["title"].title[0].text.content : item.properties["en"].rich_text[0].text.content
        
        // if(isJpn){
        //     if(item.properties["text"].rich_text[0]){
        //         this.text = item.properties["text"].rich_text[0].text.content
        //     }
        // } else {
        //     if(item.properties["text_en"].rich_text[0]){
        //         this.text = item.properties["text_en"].rich_text[0].text.content
        //     }

        // }
        this.image = `/${ACCESABLE_IMAGE_PATH}/policy/${name}${DOWNLOAD_IMAGE_EXTENSION}`
        this.pdf = `/${ACCESABLE_PDF_PATH}/policy/${pdfName}`
    }
}
