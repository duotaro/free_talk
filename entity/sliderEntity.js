import { DOWNLOAD_IMAGE_EXTENSION, ACCESABLE_IMAGE_PATH } from "../const"


export default class SliderEntity {
    constructor(item){

        const name = item.properties["image"].files[0].name

        this.ordering =  item.properties["ordering"].number
        this.label = item.properties["title"].title[0].text.content
        this.label_en = item.properties["en"].rich_text[0].text.content
        this.image = `./${ACCESABLE_IMAGE_PATH}/slider/${name}${DOWNLOAD_IMAGE_EXTENSION}`
        
        //console.log(item.properties["image"].files[0])
    }
}
