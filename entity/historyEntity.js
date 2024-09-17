import { ACCESABLE_IMAGE_PATH, DOWNLOAD_IMAGE_EXTENSION } from "../const"

export class HistoryEntity {
    constructor(item, isJpn){
        
        const fileName1 = item.properties["image1"].files[0].name
        const fileName2 = item.properties["image2"].files[0].name
        const fileName3 = item.properties["image3"].files[0].name

        this.title = isJpn ? item.properties["title"].title[0].text.content : item.properties["en"].rich_text[0].text.content
        this.text = null
        if(isJpn){
            if(item.properties["text"].rich_text[0]){
                this.text = item.properties["text"].rich_text
            }
        } else {
            if(item.properties["text_en"].rich_text[0]){
                this.text = item.properties["text_en"].rich_text
            }
        }

        this.image1 = `/${ACCESABLE_IMAGE_PATH}/history/${fileName1}${DOWNLOAD_IMAGE_EXTENSION}`
        this.image2 = `/${ACCESABLE_IMAGE_PATH}/history/${fileName2}${DOWNLOAD_IMAGE_EXTENSION}`
        this.image3 = `/${ACCESABLE_IMAGE_PATH}/history/${fileName3}${DOWNLOAD_IMAGE_EXTENSION}`
    }
}
