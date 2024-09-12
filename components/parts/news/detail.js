


import React, { useContext } from "react";
import LocaleContext from "../../context/localeContext";
import Link from "next/link";
import { useLocale } from "../../../utils/locale";
import NewsEntity from "../../../entity/newsEntity";

export default function NewsDetail({ item }) {
  const { locale } = useContext(LocaleContext);
  const { json } = useLocale(locale)

  let {id, page} = item
  let entity = new NewsEntity(page, locale == "ja")

  if(!entity.title.length){
    return <></>
  }
  return (
    <div key={entity.id} className="max-w-xd text-center lg:max-w-sm shadow-md rounded-xl bg-slate-100 p-5">
        <h3 className="text-xl font-black md:text-2xl font-bold" style={{
            minHeight: "3em",
            lineHeight: "1.5em",
            overflow: "hidden"
            }}>
            {entity.title.map((title) => {
                return title.href ? (
                    <Link href={title.href} className="link-secondary" key={title.text.content}>{title.text.content}</Link>
                ) : (
                    <span key={title.text.content}>{title.text.content}</span>
                )
            })}
        </h3>
        {entity.text && (
            <div className="pt-3 text-md mb-5 line-clamp-3 md:text-lg">
            {entity.text.map((text) => {
                return text.href ? (
                    <Link href={text.href} className="link-secondary" key={text.text.content}>{text.text.content}</Link>
                ) : (
                    <span key={text.text.content}>{text.text.content}</span>
                )
            })}
            </div>
        )}
        <Link href={`/news/${id}`} className="px-3 py-2 text-md md:text-lg transition-colors rounded-md bg-blue-600 text-white hover:bg-blue-700">
            {json.common.show_more}
        </Link>
    </div>
  );
}
