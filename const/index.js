import {DOMAIN, URLS} from "../const/pageUrl"

export const DOWNLOAD_IMAGE_PATH = 'public/image/download'
export const DOWNLOAD_PDF_PATH = 'public/pdf/download'
export const ACCESABLE_IMAGE_PATH = 'image/download'
export const ACCESABLE_PDF_PATH = 'pdf/download'
export const DOWNLOAD_BLOG_IMAGE_PATH = 'public/image/download/blog'
export const ACCESABLE_BLOG_IMAGE_PATH = 'image/download/blog'
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
const createHeaderMenu = () => {
    let urlList = []
    Object.values(URLS).map((val) => {
        urlList.push(val)
    })
    // 1. IS_ACTIVEがtrueのアイテムのみをフィルタリング
    const activeItems = urlList.filter(item => item.IS_ACTIVE);
    // 2. GROUPでグルーピング
    const groupedItems = activeItems.reduce((acc, item) => {
        const group = item.GROUP;
        
        if (!acc[group]) {
            acc[group] = {
                parent: null,
                dropdowns: []
            };
        }
        
        if (item.IS_PARENT) {
            acc[group].parent = item;
        } else {
            acc[group].dropdowns.push(item);
        }
        
        return acc;
    }, {});

    // 3. 各グループ内でdropdownsをGROUP_ORDERINGでソート
    for (const group in groupedItems) {
        groupedItems[group].dropdowns.sort((a, b) => (a.GROUP_ORDERING || Infinity) - (b.GROUP_ORDERING || Infinity));
    }

    // 4. 結果を配列に変換
    const resultArray = Object.keys(groupedItems).map(group => ({
        GROUP: group,
        ...groupedItems[group]
    }));
    return resultArray
}

export const HEADER_MENU = createHeaderMenu()
export const HEADER_MENU_ALL = createHeaderMenu()