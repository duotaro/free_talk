
import React, { useContext } from "react";
import Link from "next/link"
import LocaleContext from "../../context/localeContext";
import { useLocale } from "../../../utils/locale";
import SponsorDetail from "./detail";
import Section from "../section";

export default function Sponsor({ sponsor, bg = "bg-gray-50" }) {

    const { locale } = useContext(LocaleContext);
    const { json } = useLocale(locale)
    return (
      <Section py="py-2 md:py-4 lg:py-8" bg={bg}>
        <div className="container px-6 mx-auto text-center" >
          <Link href={`/contact/donation/`}>
          <h2 className="text-xl font-black sm:text-2xl lg:text-3xl">
            {json.navigation.sponsors}
          </h2>
          </Link>
          {/* {links?.length ? <Links links={links} /> : null} */}
        </div>
        <div className="container px-6 mx-auto">
          <div className="grid justify-center gap-10 pt-5 grid-cols-3">
            {sponsor.map((item) => {
                return (
                  <SponsorDetail item={item}/>
                )
            })}
            </div>
        </div>
      </Section>
    )
};