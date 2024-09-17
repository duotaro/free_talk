import { ACCESABLE_IMAGE_PATH, DOWNLOAD_IMAGE_EXTENSION } from "../const"

export class GreetingEntity {
    constructor(item, isJpn){
        //const fileName = item.properties["image"].files[0].name

        const tmpName = item.properties["image"].files[0].name
        const fileName = tmpName.replace(/ /g, '_')
        //const fileName = item.properties["image"].files[0].name

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

        this.image = `/${ACCESABLE_IMAGE_PATH}/greeting/${fileName}${DOWNLOAD_IMAGE_EXTENSION}`
    }
}
