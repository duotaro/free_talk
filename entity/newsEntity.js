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
        // 今はなし　やるならダウンロード処理入れないと
        //this.image = item.properties["image"].files[0].name
    }
}

export const getNewsList = async (database) => {

    let params = []
    database.map((page) => {
        params.push({
            id: page.id,
            page:page
        })
    })

    return params;
}

export const getDetailList = async (database) => {
    let params = []
    // 詳細からテーブルビューの情報を取得する
    // databaseには親テーブルの全てが入っている
    const paramsPromises = database.map(async (page) => {
        // pageはレコードのこと（ニュース概要）
        const detailBlock = await getBlocks(page.id)
        // detailBlock[0].idはレコードID
        const detailList = await getDatabase(detailBlock[0].id);
        // つまりサイドピーク内の要素が全て取れる。jaとenがあるテーブルが取れるはず
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
