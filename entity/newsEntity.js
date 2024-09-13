import { ACCESABLE_IMAGE_PATH, DOWNLOAD_IMAGE_EXTENSION } from "../const"
import { getDatabase } from "../lib/notion"
import { formatDate } from "../utils/dateUtils"

export default class NewsEntity {
    constructor(item, isJapanease){
        if(!item){
            return
        }
        // title
        this.title = []

        this.id = item.id
        if(isJapanease && item.properties["title"].title[0]){
            this.title = item.properties["title"].title
        }
        if(!isJapanease && item.properties["en"].rich_text[0]){
            this.title = item.properties["en"].rich_text
        }
        this.rawDate = item.properties["date"].start
        this.date = new Date(item.properties["date"].start).toLocaleString(
            isJapanease ? "ja" : "en",
            {
              month: "short",
              day: "2-digit",
              year: "numeric",
            }
          );
        this.text = []
        if(isJapanease && item.properties["text"].rich_text[0]){
            this.text = item.properties["text"].rich_text
        }
        if(!isJapanease && item.properties["text_en"].rich_text[0]){
            this.text = item.properties["text_en"].rich_text
        }
        // 今はなし　やるならダウンロード処理入れないと
        if(item.properties["image"].files[0]){
            const name = item.properties["image"].files[0].name
            this.image = `./${ACCESABLE_IMAGE_PATH}/news/${name}${DOWNLOAD_IMAGE_EXTENSION}`
        }
        
    }
}

export const getNewsList = async (database, limit = null) => {

    // 並び替え
    const sortedDatabase = database.sort((a, b) => new Date(b.created_time) - new Date(a.created_time));

    let limitedDatabase = sortedDatabase
    if(limit){
        limitedDatabase = sortedDatabase.slice(0, limit);    
    }
    let params = []
    limitedDatabase.map((page) => {
        params.push({
            id: page.id,
            page:page
        })
    })

    return params;
}

export const getNewsFromNotion = async () => {
    let id = process.env.NEXT_PUBLIC_NOTION_NEWS_DATABASE_ID
    const database = await getDatabase(id)
    return database
}
