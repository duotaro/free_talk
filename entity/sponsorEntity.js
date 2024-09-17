import { DOWNLOAD_IMAGE_EXTENSION, ACCESABLE_IMAGE_PATH } from "../const"

export default class SponsorEntity {
    constructor(item){
        
        //const name = item.properties["image"].files[0].name


        const tmpName = item.properties["image"].files[0].name
        const name = tmpName.replace(/ /g, '_')

        this.ordering =  item.properties["ordering"].number
        this.title = item.properties["title"].title[0].text.content
        this.label_en = item.properties["en"].rich_text[0].text.content

        this.image = `/${ACCESABLE_IMAGE_PATH}/sponsor/${name}${DOWNLOAD_IMAGE_EXTENSION}`
        this.tag = item.properties["タグ"].multi_select.name
        this.active = item.properties["active"].checkbox
        this.link = item.properties["link"].rich_text[0].text.content
        
    }
}
