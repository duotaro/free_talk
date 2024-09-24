


import React, { useContext } from "react";
import LocaleContext from "../../../context/localeContext";
import Title from "../../text/title";
import Paragraphs from "../../text/paragraphs";
import { PhilosophyEntity } from "../../../../entity/philosophyEntity";
import Section from "../../section";

export default function Philosophy({ philosophy }) {
  const { locale } = useContext(LocaleContext);

  let entity = new PhilosophyEntity(philosophy, locale == "ja")

  return (
    <Section bg="bg-gray-50">
      <div className="container px-6 mx-auto ">
        <div className="grid items-center gap-8">
          <div className="flex flex-col items-center ">
            <Title title={entity.title} />
            <Paragraphs text={entity.text} maxWidth="full"/>
          </div>
        </div>
      </div>
    </Section>
  );
}