

import { NEWS_GENRES, NEWS_GENRE } from "../../../const";
import React, { useState, useCallback, useRef } from "react";
import Link from "next/link";
import TopNewsEntity from '../../../entity/newsEntity'


import React, { useContext } from "react";
import NewsDetail from "./detail";
import LocaleContext from "../../context/localeContext";
import { useLocale } from "../../../utils/locale";
import NewsEntity from "../../../entity/newsEntity";

export default function News({ newsList }) {
  // console.log(newsList)
  const { locale } = useContext(LocaleContext);
  const { json } = useLocale(locale)

  let params = []
  for(let news of newsList){
    let entity = new NewsEntity(news.detail, news.locale == "ja")
    if(news.locale == locale && entity.title[0]){
      let param = {id: news.detailId, detail:entity, newsLocale:news.locale}
      params.push(param)
    }
  }

  const handleClickTab = (genre) => {
    setCurrentTab(genre);
  };


  return (
    <section className="card p-2 m-3">
      <div className="text-center">
        <h1>{lang.title}</h1>
      </div>
      <ul className="nav nav-tabs">
        {NEWS_GENRES.map((genre) => {
            let active = genre == currentTab ? "active" : ""
            return (
            <li className="nav-item font-weight-bold" key={genre}>
                <button className={`nav-link ${active}`} nav-link aria-current="page" data-bs-target={`#${genre}`} onClick={() => handleClickTab(genre)}>{genre}</button>
            </li>
            )
        })}
      </ul>
      <div className="tab-content">
        <div className={`tab-pane ${currentTab == NEWS_GENRE.LATEST ? "active" : ""}`} id={NEWS_GENRE.LATEST}>
          <ul className="list-group list-group-flush">
            {latestList.map((item) => {
                return (
                  <li className="list-group-item" key={item.title}>
                    <a className={`text-decoration-none ${item.url ? "link-secondary" :  "text-secondary"}`} href={item.url} target="_blank">・{item.title}</a>
                  </li>
                )
            })}
            </ul>
        </div>
        <div className={`tab-pane ${currentTab == NEWS_GENRE.PARENT ? "active" : ""}`} id={NEWS_GENRE.PARENT}>
          <ul className="list-group list-group-flush">
            {parentList.map((item) => {
                return (
                  <li className="list-group-item" key={item.title}>
                    <a className={`text-decoration-none ${item.url ? "link-secondary" :  "text-secondary"}`} href={item.url} target="_blank">・{item.title}</a>
                  </li>
                )
            })}
          </ul>
        </div>
        <div className={`tab-pane ${currentTab == NEWS_GENRE.ENTRY ? "active" : ""}`} id={NEWS_GENRE.ENTRY}>
          <ul className="list-group list-group-flush">
            {entryList.map((item) => {
                return (
                  <li className="list-group-item" key={item.title}>
                    <a className={`text-decoration-none ${item.url ? "link-secondary" :  "text-secondary"}`} href={item.url} target="_blank">・{item.title}</a>
                  </li>
                )
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}