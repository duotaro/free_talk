


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
    console.log(entity.title)
    if(news.locale == locale && entity.title[0]){
      let param = {id: news.detailId, detail:entity, newsLocale:news.locale}
      params.push(param)
    }
  }

   // pagination できる？？



  return (
    <section className="py-8 md:py-12 lg:py-20 bg-white">
      <div className="container px-6 mx-auto text-center" >
        <h4 className="text-2xl font-black sm:text-4xl md:text-4xl lg:text-5xl">
          {json.news.title}
        </h4>
        {/* {links?.length ? <Links links={links} /> : null} */}
      </div>
      <div className="container px-6 mx-auto">
        <div className="grid justify-center gap-20 pt-20 lg:grid-cols-3">
          {params.map((param) => {
              return (
                <NewsDetail param={param}/>
              )
          })}
          </div>
      </div>
    </section>
  );
}