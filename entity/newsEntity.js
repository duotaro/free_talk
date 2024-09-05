import { formatDate } from "../utils/dateUtils"

export default class NewsEntity {
    constructor(item, isJapanease){
        this.ordering =  item.properties["ordering"].number
        // title
        this.title = []
        if(isJapanease && item.properties["title"].title[0]){
            this.title = item.properties["title"].title
        }
        if(!isJapanease && item.properties["en"].rich_text[0]){
            this.title = item.properties["en"].rich_text
        }
        
        // 
        this.date = formatDate(item.properties["date"].rich_text[0].text.content, isJapanease ? "ja" : "en")
        this.text = []
        if(isJapanease && item.properties["text"].rich_text[0]){
            this.text = item.properties["text"].rich_text
        }
        if(!isJapanease && item.properties["text_en"].rich_text[0]){
            this.text = item.properties["text_en"].rich_text
        }
        if(item.properties["link"].rich_text[0]){
            this.link = item.properties["link"].rich_text[0].text.content
        }
    }
}
