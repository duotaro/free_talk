


import React, { useContext } from "react";
import Image from "next/image"
import LocaleContext from "../../../context/localeContext";
import { useLocale } from "../../../../utils/locale";
import Title from "../../text/title";
import Paragraphs from "../../text/paragraphs";
import CustomImage from "../../image/CustomImage";

export default function Vision({ vision }) {
  const { locale } = useContext(LocaleContext);
  const { json } = useLocale(locale)

  return (
    <section className="py-8 md:py-12 lg:py-20 ">
      <div className="container px-6 mx-auto">
        <div className="grid items-center gap-8 md:grid-flow-col-dense md:grid-cols-2 md:gap-12">
            {/* <div className="md:col-start-2">
              <Image
                src={vision.image}
                alt="Mission"
                width={500}
                height={300}
                layout="responsive"
                objectFit="cover"
                className="rounded-lg"
              />
            </div> */}
            <CustomImage src={vision.image} alt="Vision" addClass="md:col-start-2" />
            <div className="flex flex-col items-center ">
                <Title title={vision.title} />
                <Paragraphs text={vision.text} />
            </div>
        </div>
      </div>
    </section>
  );
}