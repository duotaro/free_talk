/** ドメイン */
export const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN ?? 'https://tjschool.org'
/** baseurl */
export const BASE_URL = process.env.NEXT_PUBLIC_DOMAIN ?? 'https://tjschool.org'

export const HOME_URL = {
    PAGE_KEY:"home",
    PAGE_TITLE:"ホーム",
    PAGE_URL:`${DOMAIN}/`
}
export const ABOUT_URL = {
    PAGE_KEY:"about",
    PAGE_TITLE:"学校概要",
    PAGE_URL:`${DOMAIN}/about/`
}
export const MESSAGE_URL ={
    PAGE_KEY:"admissions",
    PAGE_TITLE:"入学案内",
    PAGE_URL:`${DOMAIN}/admissions/`
    }
export const GENERAL_URL ={
    PAGE_KEY:"faq",
    PAGE_TITLE:"よくある質問",
    PAGE_URL:`${DOMAIN}/faq/`
    }

export const URLS = {
    HOME_URL:HOME_URL,
    ABOUT_URL:ABOUT_URL,
    MESSAGE_URL:MESSAGE_URL,
    GENERAL_URL:GENERAL_URL
}