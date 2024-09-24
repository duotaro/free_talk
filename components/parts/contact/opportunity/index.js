import React, { useContext } from "react";
import Image from "next/image"
import Link from "next/link"
import LocaleContext from "../../../context/localeContext";
import { useLocale } from "../../../../utils/locale";
import OpportunityEntity from "../../../../entity/opportunityEntity";
import Title from "../../text/title";
import Paragraphs from "../../text/paragraphs";
import CustomImage from "../../image/CustomImage";
import Section from "../../section";

export default function Opportunity({ opportunity }) {
  const { locale } = useContext(LocaleContext);
  const { json } = useLocale(locale)

  const entity = new OpportunityEntity(opportunity[0], locale == "ja")

  return (
    <Section bg="bg-slate-200">
      <div className="container px-6 mx-auto">
        <div className="grid items-center gap-8 md:grid-flow-col-dense md:grid-cols-2 md:gap-12">
            {/* <div className="relative w-full md:col-start-1 h-80 md:h-52 lg:h-72 xl:h-96">
              <Image
                src={entity.image}
                alt="Mission"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div> */}
            <CustomImage src={entity.image} alt="opportunity" addClass="md:col-start-1" />
            <div className="flex flex-col items-center ">
                <Title title={entity.title} fontSize="text-xl  sm:text-2xl lg:text-3xl"/>
                <Paragraphs text={entity.text}/>
                <Link href={`/contact/opportunity/`} className="px-6 py-3 mt-3 text-md transition-colors rounded-md bg-blue-600 text-white hover:bg-blue-700">
                    {json.common.show_more}
                </Link>
            </div>
        </div>
      </div>
    </Section>
  );
}