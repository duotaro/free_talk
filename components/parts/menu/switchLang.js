import Link from "next/link";
import { useState, useContext } from "react";
import LocaleContext from "../../context/localeContext";
import { useRouter } from 'next/router';

export default function SwitchLang({}) {
    const { locale, setLocale } = useContext(LocaleContext);
    const router = useRouter();


    const selectedValue = locale == "ja" ? "日本語" : "English"
    const handleClick = (locale) => {
        setLocale(locale)
        const currentPath = router.pathname;
        console.log("handleClick")
        console.log(currentPath)
        console.log("end handleClick")

    };

    return (
        <>
          {locale == "ja" && (
            <button className="btn btn-secondary flex items-center justify-center p-2 uppercase text-black" onClick={() => handleClick("en")}>
                English
            </button>
          )}
          {locale == "en" && (
            <button className="btn btn-secondary flex items-center justify-center p-2 uppercase text-black" onClick={() => handleClick("ja")}>
                日本語
            </button>
          )}
        </>
    );
}