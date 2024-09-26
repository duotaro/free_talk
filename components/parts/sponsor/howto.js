


import React, { useContext, useState } from "react";
import LocaleContext from "../../context/localeContext";
import Link from "next/link";
import { useLocale } from "../../../utils/locale";
import Section from "../section";
import Paragraphs from "../text/paragraphs";

export default function HowToDonate({ howto }) {
  const { locale } = useContext(LocaleContext);
  const { json } = useLocale(locale)
  const isJpn = locale == "ja"

  const [activeTab, setActiveTab] = useState("donations");

  let resList = []
  for(let item of howto){
    let res = {
        ordering: null,
        title: "",
        text: "",
        btnLabel: null,
        btnLink: null,
        tag: null
    }
    res.ordering = item.properties["ordering"].number
    res.title = isJpn ? item.properties["title"].title[0].text.content : item.properties["en"].rich_text[0].text.content
    res.text = isJpn ? item.properties["text"].rich_text : item.properties["text_en"].rich_text

    res.tag =  item.properties["tag"].select.name
    if(isJpn){
        if(item.properties["btn_label"].rich_text[0]){
            res.btnLabel = item.properties["btn_label"].rich_text[0].text.content
            res.btnLink = item.properties["btn_link"].url
        }
    } else {
        if(item.properties["btn_labe_en"].rich_text[0]){
            res.btnLabel = item.properties["btn_label_en"].rich_text[0].text.content
            res.btnLink = item.properties["btn_link"].url
        } 
    }
    resList.push(res)
  }    

  resList.sort((a, b) => a.ordering - b.ordering);

  return (
    
    <Section py="py-8 md:py-12 lg:py-20" bg="bg-gray-100">
    <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
      <ul
        className="flex flex-wrap -mb-px text-center justify-center items-center"
        role="tablist"
      >
        {resList.map((item) => {
          return (
            <li className="me-2" role="presentation">
              <button
                className={`min-w-18 md:min-w-32 lg:min-w-36 inline-block p-4 border-b-2 rounded-t-lg ${
                  activeTab === item.tag
                    ? "border-blue-500 text-blue-500"
                    : "hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                }`}
                onClick={() => setActiveTab(item.tag)}
                type="button"
                role="tab"
                aria-controls={item.tag}
                aria-selected={activeTab === "donations"}
              >
                <span className="text-sm md:text-md lg:text-lg font-bold">{item.title}</span>
              </button>
          </li>
          )
        })}
      </ul>
    </div>

    <div>
      {resList.map((item) => {
        if(activeTab != item.tag){
          return
        }
          return (
            <div className="p-4 rounded-lg" id={item.tag} role="tabpanel">
              <div className="text-md text-gray-500 dark:text-gray-400">
                <Paragraphs text={item.text} />
              </div>
            </div>
          )
        })}
    </div>
  </Section>
  );
}
