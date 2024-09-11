import { formatDateForCalander, formatDateForHHmm } from "../utils/dateUtils"

export class SchaduleEntity {
    constructor(item, isJpn){
        this.dateTime = item.properties["日付"].date.start
        this.start = formatDateForHHmm(item.properties["日付"].date.start, isJpn)
        this.end = formatDateForHHmm(item.properties["日付"].date.end, isJpn)
        // 日付はstart基準
        this.date = formatDateForCalander(item.properties["日付"].date.start, isJpn)
        this.year = this.date.year
        this.month = this.date.month
        this.day = this.date.day
        this.dayName = this.date.dayName

        
        
        this.title = isJpn ? item.properties["title"].rich_text[0].text.content : item.properties["en"].rich_text[0].text.content
        this.text = null
        if(isJpn){
            if(item.properties["text"].rich_text[0]){
                this.text = item.properties["text"].rich_text[0].text.content
            }
        } else {
            if(item.properties["text_en"].rich_text[0]){
                this.text = item.properties["text_en"].rich_text[0].text.content
            }
        }
        this.link = item.properties["link"].url
        this.location = item.properties["location"].rich_text[0].text.content


            console.log(this)

    }
}
