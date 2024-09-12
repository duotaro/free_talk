import { DOWNLOAD_IMAGE_EXTENSION, ACCESABLE_IMAGE_PATH } from "../const"


export default class OpportunityEntity {
    constructor(item, isJpn){

        const name = item.properties["image"].files[0].name

        this.title = isJpn ? item.properties["title"].title[0].text.content : item.properties["en"].rich_text[0].text.content
        
        if(isJpn){
            if(item.properties["text"].rich_text[0]){
                this.text = item.properties["text"].rich_text[0].text.content
            }
        } else {
            if(item.properties["text_en"].rich_text[0]){
                this.text = item.properties["text_en"].rich_text[0].text.content
            }

        }
        this.image = `/${ACCESABLE_IMAGE_PATH}/opportunity/${name}${DOWNLOAD_IMAGE_EXTENSION}`
    }
}
