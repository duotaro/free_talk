


import React, { useContext } from "react";
import Image from "next/image"
import Link from "next/link"
import LocaleContext from "../../../context/localeContext";
import { useLocale } from "../../../../utils/locale";
import Title from "../../text/title";
import Paragraphs from "../../text/paragraphs";
import CustomImage from "../../image/CustomImage";
import Section from "../../section";

export default function Mission({ mission }) {
  const { locale } = useContext(LocaleContext);
  const { json } = useLocale(locale)

  return (
    <Section bg="bg-gray-50">
      <div className="container px-6 mx-auto">
        <div className="grid items-center gap-8 md:grid-flow-col-dense md:grid-cols-2 md:gap-12">
            <CustomImage src={mission.image} alt="Mission" addClass="md:col-start-1" />
            <div className="flex flex-col items-center text-center ">
                <Title title={mission.title} />
                <Paragraphs text={mission.text} />
            </div>
        </div>
      </div>
    </Section>
  );
}