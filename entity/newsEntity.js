export default class TopNewsEntity {
    constructor(item){
        this.ordering =  item.properties["ordering"].number
        this.title = item.properties["名前"].rich_text[0].text.content
        this.url = item.properties["名前"].rich_text[0].href
        this.tag = item.properties["タグ"].select.name
        this.active = item.properties["active"].checkbox
        this.lastEditedTime = item.last_edited_time
    }
}
