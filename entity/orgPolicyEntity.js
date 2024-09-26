import { DOWNLOAD_IMAGE_EXTENSION, ACCESABLE_IMAGE_PATH, ACCESABLE_PDF_PATH } from "../const"


export default class OrgPolicyEntity {
    constructor(item, isJpn){

        const tmpPdfName = item.properties["pdf"].files[0].name
        const pdfName = tmpPdfName.replace(/ /g, '_')

        this.title = isJpn ? item.properties["title"].title[0].text.content : item.properties["en"].rich_text[0].text.content
        
        this.pdf = `/${ACCESABLE_PDF_PATH}/org_policy/${pdfName}`
    }
}
