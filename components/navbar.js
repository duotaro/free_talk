import Link from "next/link";
import { useLocale } from "../utils/locale";
import SwitchLang from "./parts/menu/switchLang";

export default function Navigation({  }) {
  const { locale, json } = useLocale()
  const lang = json.navigation

  let textClass = "text-secondary me-auto mb-2 mb-lg-0 ms-lg-4"
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container px-4 px-lg-5">
            <img src="/image/logo.png" width="80" className="mr-3 d-none d-md-block"/>
            <Link href={`/`} className="navbar-brand ml-3">{lang.title}</Link>
            {/* <p className={textClass}><small>{lang.sub_title}</small></p> */}
            <div className="text-right">
              <SwitchLang currentLocale={locale} />
           </div>
        </div>
    </nav>
  );
}