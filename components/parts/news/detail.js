


import React, { useContext } from "react";
import LocaleContext from "../../context/localeContext";
import Link from "next/link";
import { useLocale } from "../../../utils/locale";

export default function NewsDetail({ param }) {
  const { locale } = useContext(LocaleContext);
  const { json } = useLocale(locale)

 let {id, detail, newsLocale} = param
  return (
    <div key={detail.id} className="max-w-xd text-center lg:max-w-sm">
        <h3 className="text-xl font-black md:text-2xl font-bold" style={{
            minHeight: "3em",
            lineHeight: "1.5em",
            overflow: "hidden"
            }}>
            {detail.title.map((title) => {
                return title.href ? (
                    <Link href={title.href} className="link-secondary">{title.text.content}</Link>
                ) : (
                    <span>{title.text.content}</span>
                )
            })}
        </h3>
        {detail.text && (
            <div className="pt-3 text-md mb-5 line-clamp-3 md:text-lg">
            {detail.text.map((text) => {
                return text.href ? (
                    <Link href={text.href} className="link-secondary">{text.text.content}</Link>
                ) : (
                    <span>{text.text.content}</span>
                )
            })}
            </div>
        )}
        <Link href={`/news/${newsLocale}/${id}`} className="px-3 py-2 text-md md:text-lg transition-colors rounded-md bg-blue-600 text-white hover:bg-blue-700">
            {json.common.show_more}
        </Link>
    </div>
  );
}
