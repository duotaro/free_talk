export default class ContentEntity {
    constructor(item){
        this.ordering =  item.properties["ordering"].number
        this.title = item.properties["title"].title[0].text.content
        this.contentText = item.properties["contentText"].rich_text[0].text.content
        this.image1 = item.properties["image1"].files[0].file.url
        if(item.properties["image2"].files[0]){
            this.image2 = item.properties["image2"].files[0].file.url
        }
        if(item.properties["image3"].files[0]){
            this.image3 = item.properties["image3"].files[0].file.url
        }

        this.image1Link = item.properties["image1Link"].rich_text[0].text.content
        this.mainLink = this.image1Link
        if(item.properties["image2Link"].rich_text[0]){
            this.image2Link = item.properties["image2Link"].rich_text[0].text.content
            this.mainLink = undefined
        }
        if(item.properties["image3Link"].rich_text[0]){
            this.image2Link = item.properties["image3Link"].rich_text[0].text.content
            this.mainLink = undefined
        }

        
    }
}
