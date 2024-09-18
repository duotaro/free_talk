import { ACCESABLE_IMAGE_PATH, DOWNLOAD_IMAGE_EXTENSION } from "../const"

export class PhilosophyEntity {
    constructor(item, isJpn){
        
        this.title = isJpn ? item.properties["title"].title[0].text.content : this.text = item.properties["en"].rich_text[0].text.content
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
    }
}
