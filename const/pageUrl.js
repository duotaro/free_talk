/** ドメイン */
export const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN ?? 'https://arizonagakuenschool.org'
/** baseurl */
export const BASE_URL = process.env.NEXT_PUBLIC_DOMAIN ?? 'https://arizonagakuenschool.org'

export const HOME_URL = {
    PAGE_TITLE:"ホーム",
    PAGE_URL:`${DOMAIN}/`
}
export const ABOUT_URL = {
    PAGE_TITLE:"アリゾナ学園について",
    PAGE_URL:`${DOMAIN}/about/`
}
export const MESSAGE_URL ={
    PAGE_TITLE:"校長メッセージ",
    PAGE_URL:`${DOMAIN}/principal-message/`
    }
export const GENERAL_URL ={
    PAGE_TITLE:"学園概要",
    PAGE_URL:`${DOMAIN}/general-info/`
    }

export const URLS = {
    HOME_URL:HOME_URL,
    ABOUT_URL:ABOUT_URL,
    MESSAGE_URL:MESSAGE_URL,
    GENERAL_URL:GENERAL_URL
}