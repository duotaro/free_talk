import { ACCESABLE_IMAGE_PATH, DOWNLOAD_IMAGE_EXTENSION } from "../const"

export class DirectorsEntity {
    constructor(item, isJpn){
        //const fileName = item.properties["image"].files[0].name

        const tmpName = item.properties["image"].files[0].name
        const fileName = tmpName.replace(/ /g, '_')

        this.name = isJpn ? item.properties["name"].title[0].text.content : item.properties["en"].rich_text[0].text.content
        this.positions = null
        if(isJpn){
            if(item.properties["position"].multi_select[0]){
                this.positions = item.properties["position"].multi_select
            }
        } else {
            if(item.properties["position_en"].multi_select[0]){
                this.positions = item.properties["position_en"].multi_select
            }
        }

        this.image = `/${ACCESABLE_IMAGE_PATH}/director/${fileName}${DOWNLOAD_IMAGE_EXTENSION}`

    }
}
