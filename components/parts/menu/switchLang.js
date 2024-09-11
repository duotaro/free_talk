import Link from "next/link";
import { useState, useContext } from "react";
import LocaleContext from "../../context/localeContext";

export default function SwitchLang({}) {
    const { locale, setLocale } = useContext(LocaleContext);


    const selectedValue = locale == "ja" ? "日本語" : "English"
    const handleClick = (locale) => {
        setLocale(locale)
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