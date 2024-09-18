


import React, { useContext } from "react";
import LocaleContext from "../../../context/localeContext";
import Title from "../../text/title";
import Paragraphs from "../../text/paragraphs";
import { PhilosophyEntity } from "../../../../entity/philosophyEntity";

export default function Philosophy({ philosophy }) {
  const { locale } = useContext(LocaleContext);

  let entity = new PhilosophyEntity(philosophy, locale == "ja")

  return (
    <section className="py-8 md:py-12 lg:py-20 bg-gray-50">
      <div className="container px-6 mx-auto items-center ">
        <div className="flex flex-col ">
          <Title title={entity.title} />
          <Paragraphs text={entity.text} />
        </div>
      </div>
    </section>
  );
}