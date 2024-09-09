


import React, { useContext } from "react";
import NewsDetail from "./detail";
import LocaleContext from "../../context/localeContext";
import { useLocale } from "../../../utils/locale";

export default function News({ newsList }) {
  const { locale } = useContext(LocaleContext);
  const { json } = useLocale(locale)

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
          {newsList.map((item) => {
              return (
                <NewsDetail news={item}/>
              )
          })}
          </div>
      </div>
    </section>
  );
}