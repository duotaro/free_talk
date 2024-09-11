import { getBlocks, getDatabase, getPage } from "../lib/notion"
import { formatDate } from "../utils/dateUtils"

export default class NewsEntity {
    constructor(item, isJapanease){
        // title
        this.title = []

        this.id = item.id
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
    }
}
const getNewsDetail = async (id) => {
    const detail = await getDatabase(id)
    // get page?
    return detail
}

export const getDetailList = async (database) => {
    let params = []
    const paramsPromises = database.map(async (page) => {
        const detailBlock = await getBlocks(page.id)

        const detailList = await getDatabase(detailBlock[0].id);
        return detailList.map((detail) => ({
            detailId: detail.id,
            detail: page,
            locale: detail.properties["locale"].title[0].plain_text,
        }));

    })
    // すべての Promise が解決するのを待つ
    const paramsArrays = await Promise.all(paramsPromises);

    return paramsArrays.flat();
}
