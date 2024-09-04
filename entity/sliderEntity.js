export default class SliderEntity {
    constructor(item){
        this.ordering =  item.properties["ordering"].number
        this.label = item.properties["title"].title[0].text.content
        this.label_en = item.properties["en"].rich_text[0].text.content
        this.image = item.properties["image"].files[0].file.url
    }
}
