


import React, { useContext } from "react";
import LocaleContext from "../../context/localeContext";
import { useLocale } from "../../../utils/locale";
import CalenderDetail from "./detail";
import { SchaduleEntity } from "../../../entity/scheduleEntity";

export default function Calender({ scheduleList }) {
  const { locale } = useContext(LocaleContext);
  const { json } = useLocale(locale)

  

  const isJpn = locale == "ja"
  let entityList = []
  for(const schedule of scheduleList){
    let entity = new SchaduleEntity(schedule, isJpn)
    console.log(entity)
    entityList.push(entity)
  }
  entityList.sort((a, b) => new Date(b.dateTime) - new Date(a.dateTime));


  


  return (
    <section className="card mb-3 p-3">
      <div className="">
        <h1 className="text-center">{json.calender.title}</h1>
        <ul className="list-group list-group-flush">
          {entityList.map((schedule) => {
              return (
                <CalenderDetail schedule={schedule}/>
              )
          })}
          </ul>
      </div>
    </section>
  );
}