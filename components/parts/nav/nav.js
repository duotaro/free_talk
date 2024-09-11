import React, { useContext, useState } from 'react';
import { HEADER_MENU } from "../../../const";
import { useLocale } from "../../../utils/locale";
import LocaleContext from "../../context/localeContext";
import {
  Dialog,
  DialogPanel,
  PopoverGroup
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline'
import PopoverDetail from './popoverDetail';
import DisclosureDetail from './disclosureDetail';

export default function Nav({ }) {
  const { locale } = useContext(LocaleContext);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-blue-800">
    <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
  
      <div className="flex lg:hidden">
        <button
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white hover:text-gray-400"
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon aria-hidden="true" className="h-6 w-6" />
        </button>
      </div>
      <PopoverGroup className="hidden lg:flex lg:gap-x-12">
        {Object.keys(HEADER_MENU).map((key) => {
            const item = HEADER_MENU[key]
            return (
              <>
               <PopoverDetail item={item}/>
              </>
            )}
        )}
      </PopoverGroup>
    </nav>
    <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
      <div className="fixed inset-0 z-10" />
      <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
  
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="-m-2.5 rounded-md p-2.5 text-blue-800"
          >
            <span className="sr-only">Close menu</span>
            <XMarkIcon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              
              {Object.keys(HEADER_MENU).map((key) => {
                  const item = HEADER_MENU[key]
                  return (
                    <DisclosureDetail item={item} />
                  )}
              )}
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
  )
}