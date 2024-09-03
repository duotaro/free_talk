import React, { Fragment } from 'react';
import Head from "next/head.js";
import Link from "next/link.js";
import { getDatabase } from "../lib/notion.js";
import Layout from '../components/layout.js'
export const databaseId = process.env.NEXT_PUBLIC_NOTION_DATABASE_ID;
import { GENRE_LIST, NEWS_GENRES } from "../const/index.js";
import Side from '../components/parts/widget/side.js'
import SliderList from '../components/parts/slider/index.js';
import News from '../components/parts/news/index.js';
import ContentEntity from '../entity/contentEntity.js';
import { fetchGss } from '../lib/appscript.js';


export const Text = ({ text }) => {
  if (!text) {
    return null;
  }
  return text.map((value) => {
    const {
      annotations: { bold, code, color, italic, strikethrough, underline },
      text,
    } = value;
    return (
      <span
        className={[
          bold ? styles.bold : "",
          code ? styles.code : "",
          italic ? styles.italic : "",
          strikethrough ? styles.strikethrough : "",
          underline ? styles.underline : "",
        ].join(" ")}
        style={color !== "default" ? { color } : {}}
        key={text.content}
      >
        {text.link ? <a href={text.link.url}>{text.content}</a> : text.content}
      </span>
    );
  });
};

export default function Home({ sliderList, newsList, contentList }) {

  let mainContent = []
  
  for(let item of contentList){
    let content = new ContentEntity(item)
    mainContent.push(content)
  }
  mainContent.sort((a, b) => a.ordering - b.ordering);

  return (
    <Layout>
      <Head>
        <title>Techvenience - トップ -</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mt-5">
        {/* Slider */}
        <SliderList sliderList={sliderList}></SliderList>
        {/* Slider */}
        <News newsList={newsList}></News>
        <div className="row">
        <section className="col-lg-12">
        <div className="row gx-4 gx-lg-5 row-cols-sm-2 row-cols-1 justify-content-center">
          {mainContent.map((item) => {
            return (
              <div className="col mb-3">
                {item.mainLink && (
                  <a className="card h-100 text-decoration-none"  href={item.mainLink}>
                    <div className="card-body p-4">
                        <div className="text-center">
                            <p className="fw-bolder">{item.contentText}</p>
                        </div>
                        <div className="text-center">
                          <img className="p-3 w-50" src={item.image1} alt="..." />
                        </div>
                    </div>
                  </a>
                )}
                {!item.mainLink && (
                  <div className="card h-100 text-decoration-none"  href={item.mainLink}>
                    <div className="card-body p-4">
                        <div className="text-center">
                        <p className="fw-bolder">{item.contentText}</p>
                        </div>
                        <div className="text-center">
                          <a href={item.image1Link}><img className="p-3 w-50" src={item.image1} alt="..." /></a>
                          </div>
                        <div className="text-center">
                          <a href={item.image2Link}><img className="p-3 w-50" src={item.image2} alt="..." /></a>
                        </div>
                        <div className="text-center">
                          <a href={item.image3Link}><img className="p-3 w-50" src={item.image3} alt="..." /></a>
                        </div>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
          </div>
          </section>
       
        </div>{/* .row */}
      </div>{/* .container */}
    </Layout>
  );
}

export const getStaticProps = async (context) => {
  // get slider
  let sliderList = await getSlider()
  // get news
  let newsList = await getNews()
  // get content
  let contentList = await getContent()



  getNewsFromGSS()
  return {
    props: {
      sliderList: sliderList,
      newsList: newsList,
      contentList: contentList
    },
    revalidate: 1
  };
};

/**
 * get slider info
 * @returns list [SliderEntity]
 */
const getSlider = async () => {
  const topBannerId = "110fbaeb5f264e91a12487969cc4c214"
  const database = await getDatabase(topBannerId)
  return database
}

/**
 * get latest news 
 * @returns list [SliderEntity]
 */
const getNews = async () => {
  const topNewsBannerID = "e48122663a9641bc8c786a16694dd364"
  const database = await getDatabase(topNewsBannerID)
  return database
}

const getContent = async () => {
  const topContentId = "15f19797da4c4a958182b8d7971d17d4"
  const database = await getDatabase(topContentId)
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
  console.log("===================================")
  console.log(news)
  console.log("===================================")
}