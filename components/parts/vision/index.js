


import React, { useContext } from "react";
import Image from "next/image"
import Link from "next/link"
import LocaleContext from "../../context/localeContext";
import { useLocale } from "../../../utils/locale";

export default function Vision({ vision }) {
  const { locale } = useContext(LocaleContext);
  const { json } = useLocale(locale)

  return (
    <section className="py-8 md:py-12 lg:py-20 ">
      <div className="container px-6 mx-auto">
        <div className="grid items-center gap-8 md:grid-flow-col-dense md:grid-cols-2 md:gap-12">
            <div className="md:col-start-2">
              <Image
                src={vision.image}
                alt="Mission"
                width={500}
                height={300}
                layout="responsive"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="flex flex-col items-center text-center md:items-start md:text-left">
                <h2 className="text-3xl font-black sm:text-4xl lg:text-5xl">
                {vision.title}
                </h2>
                <div className="max-w-md mt-4 text-lg font-light leading-relaxed text-gray-500 sm:text-xl lg:text-2xl">
                    {vision.text}
                </div>
                {/* <Link href={`/vision/`} className="px-6 py-3 text-lg transition-colors rounded-md bg-blue-600 text-white hover:bg-blue-700">
                {json.common.show_more}
                </Link> */}
            </div>
        </div>
      </div>
    </section>
  );
}