


import React, { useContext } from "react";
import { Text } from "../../../../pages/news/[id]"
import LocaleContext from "../../../context/localeContext";
import { useLocale } from "../../../../utils/locale";
import { StoryEntity } from "../../../../entity/storyEntity";

export default function OurStory({ story }) {
  const { locale } = useContext(LocaleContext);
  const { json } = useLocale(locale)

  let entity = new StoryEntity(story, locale == "ja")

  return (
    <section className="py-8 md:py-12 lg:py-20 ">
      <div className="container px-6 mx-auto items-center ">
        <div className="flex flex-col ">
          <h2 className="text-2xl font-black sm:text-3xl lg:text-4xl text-center">
            {entity.title}
          </h2>
          <div className="max-w-ml mt-4 text-md font-light leading-relaxed text-gray-500 sm:text-lg lg:text-xl" style={{ whiteSpace: 'pre-wrap' }}>
            <Text text={entity.text} />
          </div>
        </div>
      </div>
    </section>
  );
}