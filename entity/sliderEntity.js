export default class SliderEntity {
    constructor(item){
        

        this.ordering =  item.properties["ordering"].number
        this.title = item.properties["名前"].title[0].text.content
        this.subTitle = item.properties["subTitle"].rich_text[0].text.content
        this.tag = item.properties["タグ"].select.name
        if(item.properties["description"].rich_text[0]){
            this.description = item.properties["description"].rich_text[0].text.content
        } else {
            this.description = null
        }
        this.pageUrl = item.properties["pageUrl"].url
        this.linkLabel = item.properties["linkLabel"].rich_text[0].text.content
        this.image = item.properties["image"].url
    }
}
