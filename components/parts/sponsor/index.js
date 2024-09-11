
import React, { useContext } from "react";
import Link from "next/link"
import LocaleContext from "../../context/localeContext";
import { useLocale } from "../../../utils/locale";
import SponsorDetail from "./detail";

export default function Sponsor({ sponsor }) {

    // console.log(newsList)
    const { locale } = useContext(LocaleContext);
    const { json } = useLocale(locale)
    return (
      <section className="py-8 md:py-12 lg:py-20 bg-gray-50">
        <div className="container px-6 mx-auto text-center" >
          <h4 className="text-2xl font-black sm:text-4xl md:text-4xl lg:text-5xl">
            {json.navigation.sponsors}
          </h4>
          {/* {links?.length ? <Links links={links} /> : null} */}
        </div>
        <div className="container px-6 mx-auto">
          <div className="grid justify-center gap-10 pt-10 grid-cols-3">
            {sponsor.map((item) => {
                return (
                  <SponsorDetail item={item}/>
                )
            })}
            </div>
        </div>
      </section>
    )
};