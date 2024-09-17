


import React, { useContext } from "react";
import Image from "next/image"
import LocaleContext from "../../../context/localeContext";
import { useLocale } from "../../../../utils/locale";
import { HistoryEntity } from "../../../../entity/historyEntity";
import { Text } from "../../../../pages/news/[id]"
import Title from "../../text/title";
import Paragraphs from "../../text/paragraphs";

export default function History({ history }) {
  const { locale } = useContext(LocaleContext);
  const { json } = useLocale(locale)

  let entity = new HistoryEntity(history, locale == "ja")
  
  return (
    <>
    <section className="py-8 md:py-12 lg:py-20 bg-slate-200">
      <div className="container px-6 mx-auto items-center">
        <div className="flex flex-col items-center  ">
            <Title title={entity.title} />
            <Paragraphs text={entity.text} />
        </div>
      </div>
    </section>
    <section className="py-2 md:py-4 lg:py-6 bg-slate-200">
      <div className="container px-6 mx-auto">
        <div className="grid items-center gap-8 md:grid-flow-col-dense md:grid-cols-3 md:gap-12">
            <div className="md:col-start-1">
              <Image
                src={entity.image1}
                alt="history1"
                width={500}
                height={300}
                layout="responsive"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="md:col-start-2">
              <Image
                src={entity.image2}
                alt="history2"
                width={500}
                height={300}
                layout="responsive"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="md:col-start-3">
              <Image
                src={entity.image3}
                alt="history3"
                width={500}
                height={300}
                layout="responsive"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
        </div>
      </div>
    </section>
    </>
  );
}