


import React, { useContext } from "react";
import Image from "next/image"
import Link from "next/link"
import LocaleContext from "../../context/localeContext";
import { useLocale } from "../../../utils/locale";

export default function Mission({ mission }) {
  const { locale } = useContext(LocaleContext);
  const { json } = useLocale(locale)

  return (
    <section className="py-8 md:py-12 lg:py-20 bg-gray-50">
      <div className="container px-6 mx-auto">
        <div className="grid items-center gap-8 md:grid-flow-col-dense md:grid-cols-2 md:gap-12">
            <div className="md:col-start-1">
              <Image
                src={mission.image}
                alt="Mission"
                width={500}
                height={300}
                layout="responsive"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="flex flex-col items-center text-center ">
            <h2 className="text-2xl font-black sm:text-3xl lg:text-4xl">
                {mission.title}
                </h2>
                <div className="max-w-md mt-4 text-md font-light leading-relaxed text-gray-500 sm:text-lg lg:text-xl">
                    {mission.text}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}