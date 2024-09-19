


import React, { useContext } from "react";
import Image from "next/image"
import Link from "next/link"
import LocaleContext from "../../context/localeContext";
import { useLocale } from "../../../utils/locale";
import Title from "../text/title";
import Paragraphs from "../text/paragraphs";
import CustomImage from "../image/CustomImage";

export default function About({ about, isTop }) {
  const { locale } = useContext(LocaleContext);
  const { json } = useLocale(locale)

  return (
    <section className="py-8 md:py-12 lg:py-20 bg-slate-300">
      <div className="container px-6 mx-auto">
        <div className="grid items-center gap-8 md:grid-flow-col-dense md:grid-cols-2 md:gap-12">
            {/* <div className="md:col-start-2">
              <Image
                src={about.image}
                alt="Mission"
                width={500}
                height={300}
                layout="responsive"
                objectFit="cover"
                className="rounded-lg"
              />
            </div> */}
            <CustomImage src={about.image} alt="About" addClass="md:col-start-2" />
            <div className="flex flex-col items-center text-center ">
                <Title title={about.title} />
                <Paragraphs text={about.text} />
                { isTop && (
                  <Link href={`/about/welcome/`} className="p-6 py-3 mt-3 rounded-md bg-blue-600 hover:bg-blue-700 mt-4 text-md transition-colors text-white max-w-sm">
                      {json.common.show_more}
                  </Link>
                )}
            </div>
        </div>
      </div>
    </section>
  );
}