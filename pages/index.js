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

export default function Home({ sliderList, newsList }) {
  const tagList = getCategoryList(GENRE_LIST)


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
          <section className="col-lg-8">
            <div className="row gx-4 gx-lg-5 row-cols-sm-2 row-cols-1 justify-content-center">
              {tagList.map((post) => {
                return (
                    <div className="col mb-5" key={post.name}>
                        <div className="card h-100">
                            <img className="card-img-top border-bottom img-responsive" src={post.src} alt="..." />
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bolder">{post.name}</h5>
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                  <a className="btn btn-outline-dark mt-auto link" href={`/blog/${post.genre}/list`}>記事一覧</a>
                                </div>
                            </div>
                        </div>
                    </div>
                );
              })}
            </div>
          </section>
          {/* Side widgets*/}
          <section className="col-lg-4">
            <Side />
            {/* Categories widget*/}
            <div className="card mb-4">
              <div className="card-header  bg-dark text-white">
                <i className="bi bi-tags m-1"></i>Categories
              </div>
              <div className="card-body">
                  <div className="row">
                      <div className="container">
                          <div className="row">
                            {tagList.map((tag) => {
                              return (
                                <div className="col-3" style={{width:'fit-content'}} key={tag.name}>
                                  <a href={tag.url} className="col  btn btn-outline-secondary m-1"  key={tag.name}>
                                    #{tag.name}
                                  </a>
                                </div>
                              )
                            })}
                          </div>
                      </div>
                  </div>
              </div>
            </div>
          </section>
        </div>{/* .row */}
      </div>{/* .container */}
    </Layout>
  );
}

const getCategoryList = (posts) => {

  let tagList = []
  let tagNameList = []
  
  posts.map((tag) => {
    if(tag.name == 'Home'){
      return false;
    }
    if(tagNameList.indexOf(tag.name) < 0){
      tagList.push(tag)
      tagNameList.push(tag.name)
    }
  })
  return tagList
}


export const getStaticProps = async (context) => {
  // get slider
  let sliderList = await getSlider()
  // get news
  let newsList = await getNews()

  return {
    props: {
      sliderList: sliderList,
      newsList: newsList
    },
    revalidate: 1
  };
};

/**
 * get slider info
 * @returns list [SliderEntity]
 */
const getSlider = async () => {
  const topBannerId = "b86d0a4e25044fc3b37a4829dd75b035"
  const database = await getDatabase(topBannerId)
  
  let sliderList = []
  for(const item of database) {
    if(!item){
      continue
    }
    
    sliderList.push(item)
  }

  return sliderList
}

/**
 * get latest news 
 * @returns list [SliderEntity]
 */
const getNews = async () => {
  const topNewsBannerID = "8b4e81917f2a44629dcbc850c4718520"
  const database = await getDatabase(topNewsBannerID)
  
  let newsList = []
  for(const item of database) {
    if(!item){
      continue
    }
    
    newsList.push(item)
  }

  return newsList
}