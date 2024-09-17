import { HEADER_MENU } from "../../../const"
import { useLocale } from "../../../utils/locale";
import React, { useContext } from 'react';
import LocaleContext from "../../context/localeContext";
import Link from "next/link";
import { AcademicCapIcon, HomeIcon } from "@heroicons/react/24/outline";
import { createNavUrl } from "../../../const/pageUrl";
import { BuildingLibraryIcon, EnvelopeIcon, NewspaperIcon } from "@heroicons/react/20/solid";
import Title from "../text/title";

export default function Prepare({ groupKey }) {
    const { locale } = useContext(LocaleContext);
    const { json } = useLocale(locale)
    let group = []
    if(groupKey){
        HEADER_MENU.map((item) => {
            if(item.GROUP == groupKey){
                group = item.dropdowns
            }
        })
    } else {

        HEADER_MENU.map((item) => {
            if(item.parent.IS_PARENT && item.GROUP != "payment"){
                group.push(item.parent)
            }
        })
    }
    const title = groupKey ? json.navigation[groupKey] : json.navigation.prepare

    return (
        <section className="py-8 md:py-12 lg:py-20 ">
          <div className="container px-6 mx-auto">
            <Title title={title} />
            <div className="grid items-center justify-center md:grid-cols-2 lg:grid-cols-3 md:gap-4 lg:gap-5">
              {group.map((item) => {
                return (
                <Link href={createNavUrl(item)}  class="max-w-sm w-full bg-gray-100 hover:bg-gray-200 shadow-md rounded-lg overflow-hidden" key={item.PAGE_KEY}>
                    
                  <div class="p-4">
                    <div class="flex items-center justify-center mb-4">
                        <div className="">
                        {createIcon(item.PAGE_KEY)}
                        </div>
                    </div>
                    <h2 class="text-center text-2xl font-semibold text-gray-800 mb-2">{json.navigation[item.PAGE_KEY]}</h2>
                  </div>
                </Link>
                )
              })}
            </div>
          </div>
        </section>
    )
};


const createIcon = (key) => {
    switch(key){
        case "home":
            return ( <HomeIcon aria-hidden="true" className="h-20 w-20"/>)
        case "about":
            return ( <BuildingLibraryIcon aria-hidden="true" className="h-20 w-20"/>)
        case "welcome":
            return ( <AcademicCapIcon aria-hidden="true" className="h-20 w-20"/>)
        case "news":
            return ( <NewspaperIcon aria-hidden="true" className="h-20 w-20"/>)
        case "contact":
            return ( <EnvelopeIcon aria-hidden="true" className="h-20 w-20"/>)
    }

}