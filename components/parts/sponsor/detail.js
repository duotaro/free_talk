


import React, { useContext } from "react";
import LocaleContext from "../../context/localeContext";
import Link from "next/link";
import { useLocale } from "../../../utils/locale";

export default function SponsorDetail({ item }) {
  const { locale } = useContext(LocaleContext);
  const { json } = useLocale(locale)

  return (
    <div key={item.ordering} className="max-w-20 mx-auto text-center lg:max-w-32">
        <a href={item.link} target="_blank" rel="noopener noreferrer"><img src={item.image} /></a>
    </div>
  );
}
