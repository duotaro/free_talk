export class HeaderMenuEntity {
    constructor(pageItem, dropdowns, isActive){
        this.key = pageItem.PAGE_KEY
        this.title = pageItem.PAGE_TITLE
        this.link = pageItem.PAGE_URL
        this.dropdowns = dropdowns
        this.hasDropdowns = dropdowns.length > 0
        this.isActive
    }
}
