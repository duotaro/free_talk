/** ドメイン */
export const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN ?? 'https://tjschool.org'
/** baseurl */
export const BASE_URL = process.env.NEXT_PUBLIC_DOMAIN ?? 'https://tjschool.org'

export const HOME_URL = {
    PAGE_KEY:"home",
    GROUP:"home",
    ORDERING: 1,
    GROUP_ORDERING: null,
    IS_PARENT:true,
    IS_ACTIVE:true
}
/** Aboit */
export const ABOUT_URL = {
    PAGE_KEY:"about",
    GROUP:"about",
    ORDERING: 2,
    GROUP_ORDERING: null,
    IS_PARENT:true,
    IS_ACTIVE:true
}
export const WELCOME_URL = {
    PAGE_KEY:"welcome",
    GROUP:"about",
    ORDERING: null,
    GROUP_ORDERING: 1,
    IS_PARENT:false,
    IS_ACTIVE:true
}
export const MISSION_URL = {
    PAGE_KEY:"mission",
    GROUP:"about",
    ORDERING: null,
    GROUP_ORDERING: 2,
    IS_PARENT:false,
    IS_ACTIVE:true
}
export const GOVERNANCE_URL = {
    PAGE_KEY:"governance",
    GROUP:"about",
    ORDERING: null,
    GROUP_ORDERING: 3,
    IS_PARENT:false,
    IS_ACTIVE:true
}
export const STAFF_URL = {
    PAGE_KEY:"staff",
    GROUP:"about",
    ORDERING: null,
    GROUP_ORDERING: 4,
    IS_PARENT:false,
    IS_ACTIVE:false
}
export const POLICY_URL = {
    PAGE_KEY:"policy",
    GROUP:"about",
    ORDERING: null,
    GROUP_ORDERING: 5,
    IS_PARENT:false,
    IS_ACTIVE:false
}
export const REPORT_URL = {
    PAGE_KEY:"report",
    GROUP:"about",
    ORDERING: null,
    GROUP_ORDERING: 6,
    IS_PARENT:false,
    IS_ACTIVE:false
}
/** program */
export const PROGRAM_URL = {
    PAGE_KEY:"program",
    GROUP:"program",
    ORDERING: 3,
    GROUP_ORDERING: null,
    IS_PARENT:true,
    IS_ACTIVE:false
}
export const CALENDER_URL = {
    PAGE_KEY:"calendar",
    GROUP:"program",
    ORDERING: null,
    GROUP_ORDERING: 1,
    IS_PARENT:false,
    IS_ACTIVE:false
}
export const CLASS_URL = {
    PAGE_KEY:"class",
    GROUP:"program",
    ORDERING: null,
    GROUP_ORDERING: 2,
    IS_PARENT:false,
    IS_ACTIVE:false
}
export const KANJI_URL = {
    PAGE_KEY:"kanjikentei",
    GROUP:"program",
    ORDERING: null,
    GROUP_ORDERING: 3,
    IS_PARENT:false,
    IS_ACTIVE:false
}
export const CAFE_URL = {
    PAGE_KEY:"nihongocafe",
    GROUP:"program",
    ORDERING: null,
    GROUP_ORDERING: 4,
    IS_PARENT:false,
    IS_ACTIVE:false
}
export const EVENT_URL = {
    PAGE_KEY:"event",
    GROUP:"program",
    ORDERING: null,
    GROUP_ORDERING: 5,
    IS_PARENT:false,
    IS_ACTIVE:false
}

/** admissions */
export const ADMISSION_URL ={
    PAGE_KEY:"admissions",
    GROUP:"admissions",
    ORDERING: 4,
    GROUP_ORDERING: null,
    IS_PARENT:true,
    IS_ACTIVE:false
}
export const FORMS_URL ={
    PAGE_KEY:"forms",
    GROUP:"admissions",
    ORDERING: null,
    GROUP_ORDERING: 1,
    IS_PARENT:false,
    IS_ACTIVE:false
}

/** news */
export const NEWS_URL ={
    PAGE_KEY:"news",
    GROUP:"news",
    ORDERING: 5,
    GROUP_ORDERING: null,
    IS_PARENT:true,
    IS_ACTIVE:true
}

/** contact */
export const CONTACT_URL ={
    PAGE_KEY:"contact",
    GROUP:"contact",
    ORDERING: 6,
    GROUP_ORDERING: null,
    IS_PARENT:true,
    IS_ACTIVE:true
}
export const CONTACT2_URL ={
    PAGE_KEY:"contact2",
    GROUP:"contact",
    ORDERING: null,
    GROUP_ORDERING: 1,
    IS_PARENT:false,
    IS_ACTIVE:true
}
export const FAQ_URL ={
    PAGE_KEY:"faq",
    GROUP:"contact",
    ORDERING: null,
    GROUP_ORDERING: 2,
    IS_PARENT:false,
    IS_ACTIVE:false
}
export const OPPORTUNITY_URL ={
    PAGE_KEY:"opportunity",
    GROUP:"contact",
    ORDERING: null,
    GROUP_ORDERING: 3,
    IS_PARENT:false,
    IS_ACTIVE:true
}
export const DONATION_URL ={
    PAGE_KEY:"donation",
    GROUP:"contact",
    ORDERING: null,
    GROUP_ORDERING: 4,
    IS_PARENT:false,
    IS_ACTIVE:true
}

export const TUCSON_URL ={
    PAGE_KEY:"tucsonlife",
    GROUP:"contact",
    ORDERING: null,
    GROUP_ORDERING: 5,
    IS_PARENT:false,
    IS_ACTIVE:false
}

/** payment */
export const PAYMENT_URL ={
    PAGE_KEY:"payment",
    GROUP:"payment",
    ORDERING: 7,
    GROUP_ORDERING: null,
    IS_PARENT:true,
    IS_ACTIVE:true
}


export const URLS = {
    HOME_URL,
    ABOUT_URL,
    WELCOME_URL,
    MISSION_URL,
    GOVERNANCE_URL,
    STAFF_URL,
    POLICY_URL,
    REPORT_URL,
    PROGRAM_URL,
    CALENDER_URL,
    CLASS_URL,
    KANJI_URL,
    CAFE_URL,
    EVENT_URL,
    ADMISSION_URL,
    FORMS_URL,
    NEWS_URL,
    CONTACT_URL,
    CONTACT2_URL,
    FAQ_URL,
    OPPORTUNITY_URL,
    DONATION_URL,
    TUCSON_URL,
    PAYMENT_URL
}

export const createNavUrl = (item) => {
    if(item.GROUP == HOME_URL.PAGE_KEY){
        return `${DOMAIN}/`
    }

    if(item.IS_PARENT){
        return `${DOMAIN}/${item.PAGE_KEY}/`
    }
    if(item.PAGE_KEY == CONTACT2_URL.PAGE_KEY){
        return `${DOMAIN}/${item.GROUP}/`
    }
    if(item.PAGE_KEY == PAYMENT_URL.PAGE_KEY){
        return `https://tucsonhosyuko.square.site/`
    }

    return `${DOMAIN}/${item.GROUP}/${item.PAGE_KEY}/`

}