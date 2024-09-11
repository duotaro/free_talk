import {HeaderMenuEntity} from "../entity/menuEntity"
import {DOMAIN, URLS} from "../const/pageUrl"

export const DOWNLOAD_IMAGE_PATH = 'public/image/download'
export const ACCESABLE_IMAGE_PATH = 'image/download'
export const DOWNLOAD_IMAGE_EXTENSION = '.png'

/** ジャンル */
export const GENRE_ENUM = {
    GENRE1 : 'ai', 
    GENRE2 : 'design', 
    GENRE3 : 'management', 
    GENRE4 : 'tech'
}
/** ジャンル */
export const GENRES = [GENRE_ENUM.GENRE1, GENRE_ENUM.GENRE2, GENRE_ENUM.GENRE3, GENRE_ENUM.GENRE4]
/** ジャンル一覧 メニューなどに使用 */
export const GENRE_LIST = [
    {
        name: 'Home',
        genre: '',
        url : `${DOMAIN}`,
        src: 'https://cdn-ak.f.st-hatena.com/images/fotolife/d/duo-taro100/20230501/20230501154023.jpg',
        icon: "bi bi-house-fill"
    },
    {
        name: 'AI',
        genre: GENRE_ENUM.GENRE1,
        url : `${DOMAIN}/blog/ai/list`,
        src: 'https://cdn-ak.f.st-hatena.com/images/fotolife/d/duo-taro100/20230501/20230501154023.jpg',
        icon: "bi bi-robot"
    },
    {
        name: 'デザイン',
        genre: GENRE_ENUM.GENRE2,
        url : `${DOMAIN}/blog/design/list`,
        src: 'https://cdn-ak.f.st-hatena.com/images/fotolife/d/duo-taro100/20230501/20230501153952.jpg',
        icon: "bi bi-palette"
    },
    {
        name: 'マネジメント',
        genre: GENRE_ENUM.GENRE3,
        url : `${DOMAIN}/blog/management/list`,
        src: 'https://cdn-ak.f.st-hatena.com/images/fotolife/d/duo-taro100/20230501/20230501154006.jpg',
        icon: "bi bi-alarm"
    },
    {
        name: 'Technology',
        genre: GENRE_ENUM.GENRE4,
        url : `${DOMAIN}/blog/tech/list`,
        src: 'https://cdn-ak.f.st-hatena.com/images/fotolife/d/duo-taro100/20230501/20230501155201.jpg',
        icon: "bi bi-cpu"
    }
]
/**
 * genre title map
 */
export const GENRE_TITLE_MAP = {
    'ai' : 'AI 人工知能 CHAT-GPT',
    'design' : 'CSS デザイン Bootstrap Tailwind',
    'management' : '時間管理 タスク管理 プロジェクト管理 マネジメント',
    'tech' : '最新技術 テクノロジー Technology イノベーション',
}
/** 広告ID */
export const AD_CLIENT_ID = process.env.NEXT_PUBLIC_AD_CLIENT_ID

/** header menu */
/** 学校概要 */
const ABOUT_DROPDOWNS = [
    new HeaderMenuEntity(URLS.STAFF_URL, []),
    new HeaderMenuEntity(URLS.EVENT_URL, []),
    new HeaderMenuEntity(URLS.SPONSORS_URL, []),
    new HeaderMenuEntity(URLS.KANJI_URL, [])
]
/** 入学案内 */
const ADMISSION_DROPDOWNS = [
    new HeaderMenuEntity(URLS.ABOUT_URL, []),
    new HeaderMenuEntity(URLS.ABOUT_URL, [])
]
/** お問い合わせ */
const CONTACT_DROPDOWNS = [
    new HeaderMenuEntity(URLS.ABOUT_URL, []),
    new HeaderMenuEntity(URLS.ABOUT_URL, []),
    new HeaderMenuEntity(URLS.ABOUT_URL, [])
]
/** 大人向けプラグラム */
const ADULT_DROPDOWNS = [
    new HeaderMenuEntity(URLS.ABOUT_URL, []),
    new HeaderMenuEntity(URLS.ABOUT_URL, []),
    new HeaderMenuEntity(URLS.ABOUT_URL, [])
]
export const HEADER_MENU = {
    HOME: new HeaderMenuEntity(URLS.HOME_URL, []),
    ABOUT: new HeaderMenuEntity(URLS.ABOUT_URL, ABOUT_DROPDOWNS),
    ADMISSION: new HeaderMenuEntity(URLS.ADMISSION_URL, ADMISSION_DROPDOWNS),
    FAQ: new HeaderMenuEntity(URLS.FAQ_URL, []),
    CONTACT: new HeaderMenuEntity(URLS.CONTACT_URL, CONTACT_DROPDOWNS),
    PAYMANET: new HeaderMenuEntity(URLS.PAYMENT_URL, []),
    ADULT: new HeaderMenuEntity(URLS.ADULT_URL, ADULT_DROPDOWNS)
}

