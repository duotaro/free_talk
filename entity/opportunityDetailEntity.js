import { DOWNLOAD_IMAGE_EXTENSION, ACCESABLE_IMAGE_PATH } from "../const"


export default class OpportunityDetailEntity {
    constructor(item, isJpn){
        this.ordering =  item.properties["ordering"].number
        this.title = isJpn ? item.properties["title"].title[0].text.content : item.properties["en"].rich_text[0].text.content
        
        if(isJpn){
            if(item.properties["text"].rich_text[0]){
                this.text = item.properties["text"].rich_text
            }
        } else {
            if(item.properties["text_en"].rich_text[0]){
                this.text = item.properties["text_en"].rich_text
            }

        }

        this.tag =  item.properties["tag"].multi_select[0].name
    }
}
