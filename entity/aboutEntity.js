import { ACCESABLE_IMAGE_PATH, DOWNLOAD_IMAGE_EXTENSION } from "../const"

export class AboutEntity {
    constructor(item, isJpn){
        
        const fileName = item.properties["image"].files[0].name

        this.title = isJpn ? item.properties["title"].title[0].text.content : item.properties["en"].rich_text[0].text.content
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

        this.image = `/${ACCESABLE_IMAGE_PATH}/about/${fileName}${DOWNLOAD_IMAGE_EXTENSION}`
        this.tag = item.properties["tag"].select.name
    }
}

export const AboutEnum = {
    ABOUT : "about",
    MISSION : "mission",
    VISION : "vision"
}

export const convertAboutFromDatabase = (database, isJpn) => {
    let aboutSchool = null
    let mission = null
    let vision = null

    for(let item of database){
        let entity = new AboutEntity(item, isJpn)
    
        switch (entity.tag) {
            case AboutEnum.ABOUT:
                aboutSchool = entity
                break;
            case AboutEnum.MISSION:
                mission = entity
                break;
            case AboutEnum.VISION:
                vision = entity
                break;
            default:
              console.log(`Sorry, we are out of ${entity.tag}.`);
        } 
    }

    return {
        aboutSchool, mission, vision
    }
}