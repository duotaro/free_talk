
import React, { useContext } from "react";
import Link from "next/link"
import LocaleContext from "../../context/localeContext";
import { useLocale } from "../../../utils/locale";
import SponsorDetail from "./detail";

export default function Sponsor({ sponsor, bg = "bg-gray-50" }) {

    const { locale } = useContext(LocaleContext);
    const { json } = useLocale(locale)
    return (
      <section className={`py-2 md:py-4 lg:py-8 ${bg} px-10`}>
        <div className="container px-6 mx-auto text-center" >
          <h2 className="text-xl font-black sm:text-2xl lg:text-3xl">
            {json.navigation.sponsors}
          </h2>
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
      </section>
    )
};