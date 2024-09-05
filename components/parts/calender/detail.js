


import React, { useContext } from "react";
import NewsEntity from '../../../entity/newsEntity'
import LocaleContext from "../../context/localeContext";
import Link from "next/link";

export default function CalenderDetail({ schedule }) {
  const { locale } = useContext(LocaleContext);

  return (
    <section className="card p-2 m-3" key={schedule.ordering}>
        <div class="card-body">
            schedule
            {/* <h5 class="card-title">{entity.date}</h5> */}
            {/* <a className={`text-decoration-none ${entity.link ? "link-primary" :  "text-primary"}`} 
                href={entity.link}>
                <h5 class="card-title">{entity.title.map((title) => {
                    console.log(title)
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
             */}
        </div>
    </section>
  );
}