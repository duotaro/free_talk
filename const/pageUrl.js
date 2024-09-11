/** ドメイン */
export const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN ?? 'https://tjschool.org'
/** baseurl */
export const BASE_URL = process.env.NEXT_PUBLIC_DOMAIN ?? 'https://tjschool.org'

export const HOME_URL = {
    PAGE_KEY:"home",
    PAGE_TITLE:"ホーム",
    PAGE_URL:`${DOMAIN}/`
}
/** 学校概要 */
export const ABOUT_URL = {
    PAGE_KEY:"about",
    PAGE_TITLE:"学校概要",
    PAGE_URL:`${DOMAIN}/about/`
}
export const STAFF_URL = {
    PAGE_KEY:"staff",
    PAGE_TITLE:"職員紹介",
    PAGE_URL:`${DOMAIN}/staff/`
}
export const EVENT_URL = {
    PAGE_KEY:"event",
    PAGE_TITLE:"年間行事",
    PAGE_URL:`${DOMAIN}/event/`
}
export const SPONSORS_URL = {
    PAGE_KEY:"sponsors",
    PAGE_TITLE:"協賛者一覧",
    PAGE_URL:`${DOMAIN}/sponsors`
}
export const KANJI_URL = {
    PAGE_KEY:"kanji",
    PAGE_TITLE:"漢字検定",
    PAGE_URL:`${DOMAIN}/kanji`
}

export const ADMISSION_URL ={
    PAGE_KEY:"admissions",
    PAGE_TITLE:"入学案内",
    PAGE_URL:`${DOMAIN}/admissions/`
}
export const FAQ_URL ={
    PAGE_KEY:"faq",
    PAGE_TITLE:"よくある質問",
    PAGE_URL:`${DOMAIN}/faq/`
}
export const CONTACT_URL ={
    PAGE_KEY:"contact",
    PAGE_TITLE:"お問い合わせ",
    PAGE_URL:`${DOMAIN}/faq/`
}
export const ADULT_URL ={
    PAGE_KEY:"adultjapanese",
    PAGE_TITLE:"大人向けプログラム",
    PAGE_URL:`${DOMAIN}/adultjapanese/`
}
export const PAYMENT_URL ={
    PAGE_KEY:"payment",
    PAGE_TITLE:"オンライン決済",
    PAGE_URL:`https://tucsonhosyuko.square.site/`
}


export const URLS = {
    HOME_URL:HOME_URL,
    ABOUT_URL:ABOUT_URL,
    STAFF_URL:STAFF_URL,
    EVENT_URL:EVENT_URL,
    SPONSORS_URL:SPONSORS_URL,
    KANJI_URL:KANJI_URL,
    ADMISSION_URL:ADMISSION_URL,
    FAQ_URL:FAQ_URL,
    CONTACT_URL:CONTACT_URL,
    PAYMENT_URL:PAYMENT_URL,
    ADULT_URL:ADULT_URL
}