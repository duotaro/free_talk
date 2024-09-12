import React, { useContext } from 'react';
import Head from "next/head.js";
import { useLocale } from "../utils/locale";
import { getDatabase } from "../lib/notion.js";
import Layout from '../components/layout.js'
export const databaseId = process.env.NEXT_PUBLIC_NOTION_DATABASE_ID;
import SliderList from '../components/parts/slider/index.js';
import News from '../components/parts/news/index.js';
import SponsorEntity from '../entity/sponsorEntity.js';
import { fetchGss } from '../lib/appscript.js';
//import fs from 'fs';
import LocaleContext from '../components/context/localeContext.js';
import saveImageIfNeeded from '../components/download/index.js';
import Calender from '../components/parts/calender/index.js';
import Mission from '../components/parts/mission/index.js';
import Vision from '../components/parts/vision/index.js';
import Faq from '../components/parts/faq/index.js';
import { convertAboutFromDatabase } from '../entity/aboutEntity.js';
import About from '../components/parts/about/index.js';
import { getDetailList } from '../entity/newsEntity.js';
import Sponsor from '../components/parts/sponsor/index.js';


export default function Home({ sliderList, sponsors, newsList, scheduleList, about }) {
  const { locale } = useContext(LocaleContext);
  const { json, metaTitleExtension } = useLocale(locale)
  let lang = json.navigation
  let sponsorList = []

  for(let item of sponsors){
    let sponsor = new SponsorEntity(item)
    sponsorList.push(sponsor)
  }

  let {aboutSchool, mission, vision} = convertAboutFromDatabase(about, locale == "ja")

  return (
    <Layout>
      <Head>
        <title>{metaTitleExtension}</title>
        <meta name="description" content={`${lang.home} - ${lang.description}`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="">
        <div className="row">
          <SliderList sliderList={sliderList} />  
          <News newsList={newsList} lang={json.news} />
          <About about={aboutSchool}/>
          <Mission mission={mission}/>
          <Vision vision={vision}/>
          {/* <Faq /> */}
          <Sponsor sponsor={sponsorList} />
          {/* Side widgets*/}
          {/* <section className="col-lg-4">
            <Side sponsorList={sponsorList} />
          </section> */}
       
        </div>{/* .row */}
      </div>{/* .container */}
    </Layout>
  );
}

export const getStaticProps = async (context) => {

  // get slider
  let sliderList = await getSlider()

  // get sponsor
  let sponsors = await getSponsors()

  // get news
  let newsList = await getNews()
  // 件数フィルター

  // get calender
  let scheduleList = await getCalender()

  // get about
  let about = await getAbout()
  return {
    props: {
      sliderList: sliderList,
      sponsors: sponsors,
      newsList: newsList,
      scheduleList: scheduleList,
      about: about
    },
    revalidate: 1
  };
};

/**
 * get slider info
 * @returns list [SliderEntity]
 */
const getSlider = async () => {
  const topBannerId = "f2bd94d61f7c45958755562d366af5ea"
  const database = await getDatabase(topBannerId)
  let props = []
  for(let item of database){
    props.push(item.properties)
  }
  console.log("start save image for slider")
  console.log(props)
  await saveImageIfNeeded(props, "slider")
  console.log("end save image for slider")
  return database;
 
}

/**
 * get latest news 
 * @returns list [SliderEntity]
 */
const getNews = async () => {
  const database = await getDatabase("cc0b1eb3570842ba926cc71ecaf5df4d")
  let params = await getDetailList(database)
  return params
}

const getSponsors = async () => {
  const database = await getDatabase("1e302ac5bce442b797e491aee309e7c4")
  let props = []
  for(let item of database){
    props.push(item.properties)
  }

  await saveImageIfNeeded(props, "sponsor")
  return database
}

const getCalender = async () => {
  const database = await getDatabase("8d87080f73f14e8a9e7ba934c1d928c6")
  return database
}

const getAbout = async () => {
  const database = await getDatabase("d4eb3828e74c469b9179ca7be9edb5cf")
  let props = []
  for(let item of database){
    props.push(item.properties)
  }

  await saveImageIfNeeded(props, "about")
  return database
}

export async function generateMetadata({ params }) {
  const metadata = {
    title: "Home - Arizona Gakuen School",
    description: "最新情報 What's New? - Updated On Oct 17th ★最新情報 ★ 保護者の皆様へ ★ 登録/募集のお知らせ ★最新情報 IACE Travel 様からの【補習校応援プログラム】を更新致しました。こちらからご覧ください。海外子女教育振興財団より、2021年10月20日（水）に発行される「帰国子女のための学校便覧」2022年度版のご紹介です。書籍詳細、お申込みはこちらからご確認頂けます。学校行事をアップデートしましたのでご覧下さい。海外子女教育 月刊 弊誌をアップしました。こちらの学園内限定サイトよりご覧下さい。 ★ 保護者の皆様へ 全ての生徒様の緊急連絡先の登録をお願いします！（パスワードは校長先生のメールを参照下さい）Please sign up Emergency contact information of every student. （Please confirm e-mail about password.）Amazon.comのお買物の際、Amazon smileからご購入頂くと、その一部がアリゾナ学園へ寄付されます。詳細は下記リンクから。 ★ 登録/募集のお知らせ 学校サポーター（保護者ボランティア）募集！教室での授業サポーター、校内パトロール・サポーター、式典行事サポータ。ー、アリゾナ学園コンシェルジェ等々、みんなのアリゾナ学園の活動に参加しませんか？詳しくは事務局まで。こちらのオンラインフォームからもご応募して頂けます。教員募集！教えることに興味のある方、是非一度、事務局までご連絡下さい。こちらのオンラインフォームからもご応募して頂けます。オフィシャルウェブサイト用の写真を募集しています！詳細はこちらから。Send us your child photos! Check more details here. Fry'sが主催するCommunity Rewards Program にアリゾナ学園（寄付先 : Arizona Kokusai Kyoiku",
    alternates: {
      canonical: `${pageUrl}`,
    },
    openGraph: {
      title: "Home - Arizona Gakuen School",
      description: "最新情報 What's New? - Updated On Oct 17th ★最新情報 ★ 保護者の皆様へ ★ 登録/募集のお知らせ ★最新情報 IACE Travel 様からの【補習校応援プログラム】を更新致しました。こちらからご覧ください。海外子女教育振興財団より、2021年10月20日（水）に発行される「帰国子女のための学校便覧」2022年度版のご紹介です。書籍詳細、お申込みはこちらからご確認頂けます。学校行事をアップデートしましたのでご覧下さい。海外子女教育 月刊 弊誌をアップしました。こちらの学園内限定サイトよりご覧下さい。 ★ 保護者の皆様へ 全ての生徒様の緊急連絡先の登録をお願いします！（パスワードは校長先生のメールを参照下さい）Please sign up Emergency contact information of every student. （Please confirm e-mail about password.）Amazon.comのお買物の際、Amazon smileからご購入頂くと、その一部がアリゾナ学園へ寄付されます。詳細は下記リンクから。 ★ 登録/募集のお知らせ 学校サポーター（保護者ボランティア）募集！教室での授業サポーター、校内パトロール・サポーター、式典行事サポータ。ー、アリゾナ学園コンシェルジェ等々、みんなのアリゾナ学園の活動に参加しませんか？詳しくは事務局まで。こちらのオンラインフォームからもご応募して頂けます。教員募集！教えることに興味のある方、是非一度、事務局までご連絡下さい。こちらのオンラインフォームからもご応募して頂けます。オフィシャルウェブサイト用の写真を募集しています！詳細はこちらから。Send us your child photos! Check more details here. Fry'sが主催するCommunity Rewards Program にアリゾナ学園（寄付先 : Arizona Kokusai Kyoiku",
      url: `https://example-domain.com/${pageUrl}`,
      siteName: "サイトタイトル",
      locale: "ja_JP",
      type: "website",
      images: "/opengraph-image.png",
    },
    twitter: {
      card: "summary_large_image",
      images: "/twitter-image.png",
    },
  };

  return metadata;
}


let getNewsFromGSS = async () => {
  let news = await fetchGss("news")
  let sponsors = await fetchGss("sponsors")

  return {
    news,
    sponsors
  }
}