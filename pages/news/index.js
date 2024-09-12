import Head from "next/head";
import Layout from '../../components/layout'
import { META_ABOUT_TITLE, META_ABOUT_DESCRIPTION } from "../../const/meta";
import { getDatabase } from "../../lib/notion";
import { useLocale } from "../../utils/locale";
import NewsEntity, { getNewsList } from "../../entity/newsEntity";
import Link from "next/link";
import NewsDetail from "../../components/parts/news/detail";
import News from "../../components/parts/news";

export const databaseId = process.env.NEXT_PUBLIC_NOTION_DATABASE_ID;

export default function NewsPage({ list }) {
  
  return (
    <Layout>
      <Head>
        <title>{META_ABOUT_TITLE}</title>
        <meta name="description" content="TechnologyとConvenienceを組み合わせた造語。​ITがもたらす便利なものを紹介します。最近はAI関連の記事が多いです。ChatGPT / Google Bard / OpenAI GPT / Replika" />
      </Head>
      <News list={list} isTop={false}/>
      
      {/* <div className="container px-6 mx-auto">
        <div className="grid justify-center gap-20 pt-20 lg:grid-cols-3">
          {list.map((item) => {
              return (
                // <Link href={`/testnews/${id}`}>{id}</Link>
                <NewsDetail item={item}/>
              )
          })}
          </div>
      </div> */}
    </Layout>
  );
}

export const getStaticProps = async (context) => {

  // get news
  let list = await getNews()

  return {
    props: {
      list: list
    },
    revalidate: 1
  };
};

/**
 * get latest news 
 * @returns list [SliderEntity]
 */
const getNews = async () => {
  const database = await getDatabase("cc0b1eb3570842ba926cc71ecaf5df4d")
  let list = await getNewsList(database)
  return list
}