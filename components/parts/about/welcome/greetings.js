


import React, { useContext } from "react";
import Image from "next/image"
import { Text } from "../../../../pages/news/[id]"
import LocaleContext from "../../../context/localeContext";
import { useLocale } from "../../../../utils/locale";
import { GreetingEntity } from "../../../../entity/greetingEntity";

export default function Greeting({ greeting }) {
  const { locale } = useContext(LocaleContext);
  const { json } = useLocale(locale)

  let entity = new GreetingEntity(greeting, locale == "ja")

  return (
    <section className="py-8 md:py-12 lg:py-20 bg-gray-50">
      <div className="container px-6 mx-auto">
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
                <h2 className="text-2xl font-black sm:text-3xl lg:text-4xl text-center">
                {entity.title}
                </h2>
                <div className="max-w-md mt-4 text-md font-light leading-relaxed text-gray-500 sm:text-lg lg:text-xl" style={{ whiteSpace: 'pre-wrap' }}>
                    <Text text={entity.text} />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}