


import React, { useContext } from "react";
import Image from "next/image"
import Link from "next/link"
import LocaleContext from "../../../context/localeContext";
import { useLocale } from "../../../../utils/locale";
import Title from "../../text/title";
import Paragraphs from "../../text/paragraphs";
import CustomImage from "../../image/CustomImage";
import { DirectorsEntity } from "../../../../entity/directorsEntity";
import Section from "../../section";

export default function Directors({ directors }) {
  const { locale } = useContext(LocaleContext);
  const { json } = useLocale(locale)
  const lang = json.director

  return (
    <Section py="py-8 md:py-6 lg:py-10" bg="bg-gray-50">
      <div className="container px-6 mx-auto">
        <div className="flex flex-wrap -mx-3 mb-5">
          <div className="w-full max-w-full px-3  mx-auto">
            <div className="relative flex-[1_auto] flex flex-col break-words min-w-0  m-5">
              <div className="flex-auto block py-8 px-9">
                <div>
                  <div className="flex flex-col items-center text-center mb-10">
                    {/* <h1 className="mb-2 text-[1.75rem] font-semibold text-dark">{lang.title}</h1> */}
                    <Title title={lang.title} />
                    {/* <span className="text-[1.15rem] font-medium text-muted">{lang.description}</span> */}
                    <Paragraphs text={lang.description} />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full">
                    {directors.map((director) => {
                      let entity = new DirectorsEntity(director)
                      return (
                        <div className="flex flex-col text-center">
                          <div className="inline-block mb-4 relative shrink-0 rounded-[.95rem]">
                            <Image className="inline-block shrink-0 rounded-[.95rem] w-[150px] h-[150px]" width={150} height={150} src={entity.image} alt={entity.name} />
                          </div>
                          <div className="text-center">
                            <a href="javascript:void(0)" className="text-dark font-semibold hover:text-primary text-[1.25rem] transition-colors duration-200 ease-in-out">{entity.name}</a>
                            {entity.positions.map((position) => {
                              return (
                                <span className="block font-medium text-muted">{position.name}</span>
                              )
                            })}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}