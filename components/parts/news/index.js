

import { NEWS_GENRES, NEWS_GENRE } from "../../../const";
import React, { useState, useCallback, useRef } from "react";
import Link from "next/link";
import TopNewsEntity from '../../../entity/newsEntity'

export default function News({ newsList }) {
  const [currentTab, setCurrentTab] = useState(NEWS_GENRE.LATEST)
  let resList = []
  let latestList = []
  let parentList = []
  let entryList = []
  for(let item of newsList) {
    let res = new TopNewsEntity(item)
    resList.push(res)
    if(res.tag == NEWS_GENRE.LATEST){
        latestList.push(res)
    }else if(res.tag == NEWS_GENRE.PARENT){
        parentList.push(res)
    }else if(res.tag == NEWS_GENRE.ENTRY){
        entryList.push(res)
    }
  }

  const handleClickTab = (genre) => {
    setCurrentTab(genre);
  };


  return (
    <section className="card p-2 m-3">
      <div className="text-center">
        <h1>最新情報</h1>
        <p>What's New? - Updated On Oct 17th</p>
      </div>
      <ul className="nav nav-tabs">
        {NEWS_GENRES.map((genre) => {
            let active = genre == currentTab ? "active" : ""
            return (
            <li className="nav-item font-weight-bold">
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
                  <li className="list-group-item">
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
                  <li className="list-group-item">
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
                  <li className="list-group-item">
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