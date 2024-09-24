


import React, { useContext } from "react";
import Image from "next/image"
import Link from "next/link"
import LocaleContext from "../../context/localeContext";
import { useLocale } from "../../../utils/locale";
import Title from "../text/title";
import Paragraphs from "../text/paragraphs";
import CustomImage from "../image/CustomImage";
import Section from "../section";

export default function About({ about, isTop }) {
  const { locale } = useContext(LocaleContext);
  const { json } = useLocale(locale)

  return (
    <Section bg="bg-slate-200" >
      <div className="container px-6 mx-auto">
        <div className="grid items-center gap-8 md:grid-flow-col-dense md:grid-cols-2 md:gap-12">
            <CustomImage src={about.image} alt="About" addClass="md:col-start-2" />
            <div className="flex flex-col items-center ">
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
    </Section>
  );
}