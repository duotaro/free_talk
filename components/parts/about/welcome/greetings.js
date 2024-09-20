


import React, { useContext } from "react";
import Image from "next/image"
import { Text } from "../../../../pages/news/[id]"
import LocaleContext from "../../../context/localeContext";
import { useLocale } from "../../../../utils/locale";
import { GreetingEntity } from "../../../../entity/greetingEntity";
import Title from "../../text/title";
import Paragraphs from "../../text/paragraphs";

export default function Greeting({ greeting }) {
  const { locale } = useContext(LocaleContext);
  const { json } = useLocale(locale)

  let entity = new GreetingEntity(greeting, locale == "ja")

  console.log(entity.text[0].text)

  return (
    <section className="py-8 md:py-12 lg:py-20 bg-gray-50">
      <div className="container mx-auto">
        <div className="flex flex-col items-center  ">
          <Title title={entity.title} />
        </div>
        <div className="grid items-center gap-8 md:grid-flow-col-dense md:grid-cols-2 md:gap-12">
            <div className="md:col-start-2">
              <Image
                src={entity.image}
                alt="Mission"
                width={500}
                height={300}
                layout="responsive"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="flex flex-col items-center  ">
                <Paragraphs text={entity.text} />
            </div>
        </div>
      </div>
    </section>
  );
}