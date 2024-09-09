


import React, { useContext } from "react";
import NewsEntity from '../../../entity/newsEntity'
import LocaleContext from "../../context/localeContext";
import Link from "next/link";

export default function NewsDetail({ news }) {
  const { locale } = useContext(LocaleContext);
  
  let entity = new NewsEntity(news, locale == "ja")
  if(!entity.title.length){
    return (<></>)
  }

  return (
    <div key={entity.id} className="max-w-xd text-center lg:max-w-sm">
        <h3 className="text-2xl font-bold">
            {entity.title.map((title) => {
                return title.href ? (
                    <Link href={title.href} className="link-secondary">{title.text.content}</Link>
                ) : (
                    <span>{title.text.content}</span>
                )
            })}
        </h3>
        {entity.text && (
            <div className="pt-2 text-lg">
            {entity.text.map((text) => {
                return text.href ? (
                    <Link href={text.href} className="link-secondary">{text.text.content}</Link>
                ) : (
                    <span>{text.text.content}</span>
                )
            })}
            </div>
        )}
    </div>
  );
}

{/* <section className="py-8 md:py-12 lg:py-20" key={entity.ordering}>
<div className="container px-6 mx-auto">
  <h5 class="card-title">{entity.date}</h5>
    <a className={`text-decoration-none ${entity.link ? "link-primary" :  "text-primary"}`} 
        href={entity.link}>
        <h5 class="card-title">{entity.title.map((title) => {
            return title.href ? (
                <Link href={title.href} className="link-secondary">{title.text.content}</Link>
            ) : (
                <span>{title.text.content}</span>
            )
        })}</h5>
    </a>
    <div class="card-text">
        {entity.text.map((text) => {
            return text.href ? (
                <Link href={text.href} className="link-secondary">{text.text.content}</Link>
            ) : (
                <span>{text.text.content}</span>
            )
        })}
    </div>
</div>
</section> */}