


import React, { useContext } from "react";
import NewsDetail from "./detail";
import LocaleContext from "../../context/localeContext";
import { useLocale } from "../../../utils/locale";
import CalenderDetail from "./detail";

export default function Calender({ scheduleList }) {
  const { locale } = useContext(LocaleContext);
  const { json } = useLocale(locale)

  return (
    <section className="card p-2 mb-3">
      <div className="">
        <h1 className="text-center">{json.calender.title}</h1>
        <ul className="list-group list-group-flush">
          {scheduleList.map((schedule) => {
              return (
                <CalenderDetail schedule={schedule}/>
              )
          })}
          </ul>
      </div>
    </section>
  );
}