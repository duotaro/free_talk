


import React, { useContext } from "react";
import { Text } from "../../../../pages/news/[id]"
import LocaleContext from "../../../context/localeContext";
import { useLocale } from "../../../../utils/locale";
import { StoryEntity } from "../../../../entity/storyEntity";
import Title from "../../text/title";
import Paragraphs from "../../text/paragraphs";

export default function OurStory({ story }) {
  const { locale } = useContext(LocaleContext);
  const { json } = useLocale(locale)

  let entity = new StoryEntity(story, locale == "ja")

  return (
    <section className="py-8 md:py-12 lg:py-20 ">
      <div className="container px-6 mx-auto items-center ">
        <div className="flex flex-col ">
          <Title title={entity.title} />
          <Paragraphs text={entity.text} />
        </div>
      </div>
    </section>
  );
}