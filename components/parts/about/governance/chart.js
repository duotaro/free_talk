


import React, { useContext } from "react";
import Image from "next/image"
import Link from "next/link"
import LocaleContext from "../../../context/localeContext";
import { useLocale } from "../../../../utils/locale";
import Title from "../../text/title";
import Paragraphs from "../../text/paragraphs";
import CustomImage from "../../image/CustomImage";

export default function OrganisationFlowChart({ charts }) {
  const { locale } = useContext(LocaleContext);
  const { json } = useLocale(locale)
  const lang = json.chart

  return (
    <section className="py-8 md:py-6 lg:py-10 ">
      <div className="container px-6 mx-auto">
        <div className="flex flex-wrap -mx-3 mb-5">
          <div className="w-full max-w-full px-3 mx-auto">
          
            <div className="flex flex-col items-center text-center mb-10">
              {/* <h1 className="mb-2 text-[1.75rem] font-semibold text-dark">{lang.title}</h1> */}
              <Title title={lang.title} />
              {/* <span className="text-[1.15rem] font-medium text-muted">{lang.description}</span> */}
              <Paragraphs text={lang.description} />
            </div>
            <div className="px-6 mx-auto md:w-3/4 h-auto">
              {/* <CustomImage src="/image/blog/image1.jpeg" alt="Chart" /> */}
              <Image
                src="/image/blog/image1.jpeg"
                alt="Chart"
                width={800} // 元画像の幅
                height={600} // 元画像の高さ
                layout="responsive" // 親要素に合わせてリサイズ
                objectFit="contain" // または 'contain' など
                className="rounded-lg"
              />
            </div>
          </div>  
        </div>
      </div>
    </section>
  );
}