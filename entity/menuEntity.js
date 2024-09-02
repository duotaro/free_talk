export class HeaderMenuEntity {
    constructor(title, link, dropdowns){
        this.title = title
        this.link = link
        this.dropdowns = dropdowns
        this.hasDropdowns = dropdowns.length > 0
    }
}

export class DropDownsEntity {
    constructor(title, link, subMenuList){
        this.title = title
        this.link = link
        this.subMenuList = subMenuList
        this.hasSubMenu = subMenuList.length > 0
    }
}

export class SubMenuEntity {
    constructor(title, link){
        this.title = title
        this.link = link
    }
}
