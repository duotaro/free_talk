import { DOWNLOAD_IMAGE_EXTENSION, ACCESABLE_IMAGE_PATH } from "../const"

export default class OrganisationFlowChartEntity {
    constructor(item, isJpn){


        const tmpNameJpn = item.properties["image"].files[0].name
        const nameJpn = tmpNameJpn.replace(/ /g, '_')
        const tmpNameEn = item.properties["image_en"].files[0] ? item.properties["image_en"].files[0].name : item.properties["image"].files[0].name
        const nameEn = tmpNameEn.replace(/ /g, '_')

        this.title = isJpn ? item.properties["title"].title[0].text.content : item.properties["en"].rich_text[0].text.content
        
        if(isJpn){
            if(item.properties["text"].rich_text[0]){
                this.text = item.properties["text"].rich_text
            }
            this.image = `/${ACCESABLE_IMAGE_PATH}/org_chart/${nameJpn}${DOWNLOAD_IMAGE_EXTENSION}`
        } else {
            if(item.properties["text_en"].rich_text[0]){
                this.text = item.properties["text_en"].rich_text
            }
            this.image = `/${ACCESABLE_IMAGE_PATH}/org_chart/${nameEn}${DOWNLOAD_IMAGE_EXTENSION}`
        }
        
    }
}
