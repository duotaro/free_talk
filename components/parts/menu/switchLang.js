import Link from "next/link";
import { useState, useContext } from "react";
import LocaleContext from "../../context/localeContext";
import { useRouter } from 'next/router';
import {
  GlobeAltIcon
} from '@heroicons/react/24/outline'
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

    let buttonClass = "flex items-center justify-center p-2 uppercase text-black hover:text-gray-600 transition duration-300 ease-in-out"
    return (
        <>
          {locale == "ja" && (
            <button className={buttonClass} onClick={() => handleClick("en")}>
                <GlobeAltIcon aria-hidden="true" className="h-6 w-6 mr-1"/>
                <span>EN</span>
            </button>
          )}
          {locale == "en" && (
            <button className={buttonClass} onClick={() => handleClick("ja")}>
                <GlobeAltIcon aria-hidden="true" className="h-6 w-6 mr-1"/>
                <span>JA</span>
            </button>
          )}
        </>
    );
}