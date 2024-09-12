

import React, { useContext } from "react";
import NewsDetail from "./detail";
import LocaleContext from "../../context/localeContext";
import { useLocale } from "../../../utils/locale";
import Link from "next/link";

export default function News({ list, isTop }) {
  // console.log(newsList)
  const { locale } = useContext(LocaleContext);
  const { json } = useLocale(locale)

  var sectionClass = "md:py-2 bg-white"
  if(isTop){
    sectionClass = "py-8 md:py-12 lg:py-20 bg-white"
  }

  var divClass = "grid justify-center gap-10 pt-10 md:grid-cols-2 lg:grid-cols-3"
  if(isTop){
    divClass = "grid justify-center gap-10 pt-20 md:grid-cols-2 lg:grid-cols-3"
  }

  // 作成日順で並び替え

  // isTopなら件数フィルタ 




  return (
    <section className={sectionClass}>
      {isTop && (
      <div className="container px-6 mx-auto text-center" >
        <h4 className="text-2xl font-black sm:text-4xl md:text-4xl lg:text-5xl hover:text-zinc-700">
          <Link href={`/news`}>{json.news.title}</Link>
        </h4>
        {/* {links?.length ? <Links links={links} /> : null} */}
      </div>
      )}
      <div className="container px-6 mx-auto">
        <div className={divClass}>
          {list.map((item) => {
              return (
                // <Link href={`/testnews/${id}`}>{id}</Link>
                <NewsDetail item={item}/>
              )
          })}
          </div>
      </div>
    </section>
  );
}