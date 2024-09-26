


import React, { useContext } from "react";
import LocaleContext from "../../context/localeContext";
import { useLocale } from "../../../utils/locale";
import Section from "../section";
import Title from "../text/title";
import Paragraphs from "../text/paragraphs";

export default function SponsorRequest({ request }) {
  const { locale } = useContext(LocaleContext);
  const { json } = useLocale(locale)

  const title = locale == "ja" ? request.properties["title"].title[0].text.content : request.properties["en"].rich_text[0].text.content
  const text = locale == "ja" ? request.properties["text"].rich_text[0].text.content : request.properties["text_en"].rich_text[0].text.content

  return (
    <Section py="py-8 md:py-12 lg:py-20" bg="bg-slate-50">
        <div className="container px-6 mx-auto">
          <div className="flex flex-col items-center mb-5 ">
            <Title title={title} />
          </div>
          <div className="grid items-center gap-8">
            <div className="flex flex-col items-center ">
              <Paragraphs text={text} maxWidth="full"/>
            </div>
          </div>
        </div>
    </Section>
  );
}
