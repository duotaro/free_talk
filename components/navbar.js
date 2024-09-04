import Link from "next/link";
import React, { useContext } from 'react';
import { useLocale } from "../utils/locale";
import SwitchLang from "./parts/menu/switchLang";
import LocaleContext from "./context/localeContext";

export default function Navigation({  }) {
  const { locale, setLocale } = useContext(LocaleContext);
  const { json } = useLocale(locale)

  const logoSrc = `/image/logo-${locale}.png`

  let textClass = "text-secondary me-auto mb-2 mb-lg-0 ms-lg-4"
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container px-4 px-lg-5">
            {/* <Link href={`/`} className="navbar-brand ml-3 "><img src={logoSrc} className=""/></Link> */}
            <Link href={`/`} className="navbar-brand ml-3">{json.navigation.title}</Link>
            {/* <p className={textClass}><small>{lang.sub_title}</small></p> */}
            <div className="text-right">
              <SwitchLang currentLocale={locale} />
           </div>
        </div>
    </nav>
  );
}