import Head from "next/head";
import Layout from '../../components/layout'
import { getDatabase } from "../../lib/notion";
import { useLocale } from "../../utils/locale";
import LocaleContext from "../../components/context/localeContext";
import React, { useContext } from 'react';
import News from "../../components/parts/news";
import { getNewsList } from "../../entity/newsEntity";

export const databaseId = process.env.NEXT_PUBLIC_NOTION_DATABASE_ID;

export default function NewsPage({ list }) {
  const { locale } = useContext(LocaleContext);
  const { json, metaTitleExtension } = useLocale(locale)
  let lang = json.navigation

  let breadcrumb = {
    parents: [],
    current: lang.news
  }
  
  return (
    <Layout breadcrumb={breadcrumb}>
      <Head>
        <title>{lang.news} - {metaTitleExtension} </title>
        <meta name="description" content={`${lang.about} - ${lang.description}`} />
      </Head>
      <News list={list} isTop={false}/>
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