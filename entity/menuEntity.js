export class HeaderMenuEntity {
    constructor(pageItem, dropdowns){
        this.key = pageItem.PAGE_KEY
        this.title = pageItem.PAGE_TITLE
        this.link = pageItem.PAGE_URL
        this.dropdowns = dropdowns
        this.hasDropdowns = dropdowns.length > 0
    }
}
