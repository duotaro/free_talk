import React, { useContext } from "react";
import LocaleContext from "../../context/localeContext";
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel
  } from '@headlessui/react'
import { ChevronDownIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid'
import { useLocale } from "../../../utils/locale";
import { createNavUrl, PAYMENT_URL } from "../../../const/pageUrl";
// モバイル用
export default function DisclosureDetail({ item }) {
  const { locale } = useContext(LocaleContext);
  const { json } = useLocale(locale)
  let parent = item.parent 
  let parentLink = createNavUrl(parent)
  let parentKey = parent.PAGE_KEY
  let parentTitle = json.navigation[parentKey]

  return (
    
    <Disclosure as="div" className="-mx-3">
    {item.dropdowns.length == 0 && (
      <a className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-blue-800 hover:bg-gray-50" href={parentLink}>{parentTitle}</a>
    )}
    {item.dropdowns.length > 0 && (
      <>
        <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-blue-800 hover:bg-gray-50">
          {parentTitle}
          <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
        </DisclosureButton>

        <DisclosurePanel className="mt-2 space-y-2">
          {item.dropdowns.map((dropdown) => (
            <DisclosureButton
              key={dropdown.PAGE_KEY}
              as="a"
              href={createNavUrl(dropdown)}
              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-blue-800 hover:bg-gray-50"
            >
              {json.navigation[dropdown.PAGE_KEY]}
            </DisclosureButton>
          ))}
        </DisclosurePanel>
      </>
    )}
    </Disclosure>
  );
}
