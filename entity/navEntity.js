import { DOWNLOAD_IMAGE_EXTENSION, ACCESABLE_IMAGE_PATH } from "../const"

export class NavEntity {
    constructor(item){
        
        const name = item.properties["image"].files[0].name

        this.ordering =  item.properties["ordering"].number
        this.title = item.properties["title"].title[0].text.content
        this.label_en = item.properties["en"].rich_text[0].text.content

        this.image = `./${ACCESABLE_IMAGE_PATH}/sponsor/${name}${DOWNLOAD_IMAGE_EXTENSION}`
        this.tag = item.properties["タグ"].multi_select.name
        this.active = item.properties["active"].checkbox
        this.link = item.properties["link"].rich_text[0].text.content
        
    }
}

// export class NavEntityList {
//     constructor(database){

//         let entityList = []
//         // entity
//         for(let item of database){
//             const entity = new NavEntity(item)
//             entityList.push(entity)
//         }
        

//         console.log(entityList)

//         // groupごとにまとめる
//         // activeで絞る
//         // どうういつグループ内でgroup_mainの中にそのほかを持たせる。並び替える
//         // 並び替える


//         // const name = item.properties["image"].files[0].name

//         // this.ordering =  item.properties["ordering"].number
//         // this.title = item.properties["title"].title[0].text.content
//         // this.label_en = item.properties["en"].rich_text[0].text.content

//         // this.image = `./${ACCESABLE_IMAGE_PATH}/sponsor/${name}${DOWNLOAD_IMAGE_EXTENSION}`
//         // this.tag = item.properties["タグ"].multi_select.name
//         // this.active = item.properties["active"].checkbox
//         // this.link = item.properties["link"].rich_text[0].text.content
        
//     }
// }
