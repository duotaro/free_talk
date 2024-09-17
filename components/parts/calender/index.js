


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
    entityList.push(entity)
  }
  entityList.sort((a, b) => new Date(b.dateTime) - new Date(a.dateTime));


  


  return (
    <section className="py-8 md:py-12 lg:py-20 bg-gray-50">
      <div className="container px-6 mx-auto">
        <div className="grid items-center gap-8 md:grid-flow-col-dense md:grid-cols-2 md:gap-12">
        <h1 className="text-center">{json.calender.title}</h1>
        <ul className="list-group list-group-flush">
          {entityList.map((schedule) => {
              return (
                <CalenderDetail schedule={schedule}/>
              )
          })}
          </ul>
        </div>
      </div>
    </section>
  );
}