


import React, { useContext, useState } from "react";
import LocaleContext from "../../context/localeContext";
import {
    Popover,
    PopoverButton,
    PopoverPanel,
  } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useLocale } from "../../../utils/locale";

export default function PopoverDetail({ item }) {
  const { locale } = useContext(LocaleContext);
  const { json } = useLocale(locale)
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
    {item.dropdowns.length == 0 && (
        <a className="text-sm font-semibold leading-6 text-white no-underline text-gray-700 hover:text-gray-400" href={item.link}>{json.navigation[item.key]}</a>
    )}
    {item.dropdowns.length > 0 && (
        <Popover className="relative">
            <PopoverButton 
                onMouseEnter={() => setIsHovered(true)}   // ホバー開始時に呼ばれる
                onMouseLeave={() => setIsHovered(false)} // ホバー終了時に呼ばれる
                className="flex items-center gap-x-1 text-sm text-white font-semibold leading-6 hover:text-gray-400">
            {json.navigation[item.key]}
            <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none " />
            </PopoverButton>

            <PopoverPanel
            transition
            className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            style={{
                display: isHovered ? 'block' : 'none',
            }}
            >
            <div className="p-4">
                {item.dropdowns.map((dropdown) => {
                return (
                    <div
                    key={dropdown.key}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                    {/* <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <dropdown.icon aria-hidden="true" className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                    </div> */}
                    <div className="flex-auto">
                        <a href={dropdown.link} className="block font-semibold ">
                        {json.navigation[dropdown.key]}
                        <span className="absolute inset-0" />
                        </a>
                        {/* <p className="mt-1 text-gray-600">{item.description}</p> */}
                    </div>
                    </div>
                )
                })}
            </div>
            </PopoverPanel>
        </Popover>
    )}
    </>
  );
}
