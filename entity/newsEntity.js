export default class NewsEntity {
    constructor(item){
        this.ordering =  item.properties["ordering"].number
        this.title = item.properties["名前"].title[0].text.content
        this.url = item.properties["名前"].title[0].href
        this.tag = item.properties["タグ"].multi_select[0].name
        this.active = item.properties["active"].checkbox
        this.lastEditedTime = item.last_edited_time

        console.log(this)
    }
}
