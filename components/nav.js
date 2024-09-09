import React, { useContext, useState } from 'react';
import { HEADER_MENU } from "../const";
import { useLocale } from "../utils/locale";
import LocaleContext from "./context/localeContext";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

export default function Nav({  }) {
  const { locale, setLocale } = useContext(LocaleContext);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { json } = useLocale(locale)
  const lang = json.navigation

  return (
    <header className="bg-blue-800 ">
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
               {item.dropdowns.length == 0 && (
                <a className="text-sm font-semibold leading-6 text-white no-underline text-gray-700 hover:text-gray-400" href={item.link}>{lang[item.key]}</a>
              )}
              {item.dropdowns.length > 0 && (
                <Popover className="relative">
                  <PopoverButton className="flex items-center gap-x-1 text-sm text-white font-semibold leading-6 hover:text-gray-400">
                    {lang[item.key]}
                    <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none " />
                  </PopoverButton>
        
                  <PopoverPanel
                    transition
                    className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
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
                              {lang[dropdown.key]}
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
                    <Disclosure as="div" className="-mx-3">
                    {item.dropdowns.length == 0 && (
                      <a className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-blue-800 hover:bg-gray-50" href={item.link}>{lang[item.key]}</a>
                    )}
                    {item.dropdowns.length > 0 && (
                      <>
                        <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-blue-800 hover:bg-gray-50">
                          {lang[item.key]}
                          <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                        </DisclosureButton>
              
                        <DisclosurePanel className="mt-2 space-y-2">
                          {item.dropdowns.map((dropdown) => (
                            <DisclosureButton
                              key={dropdown.key}
                              as="a"
                              href={dropdown.link}
                              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-blue-800 hover:bg-gray-50"
                            >
                              {lang[dropdown.key]}
                            </DisclosureButton>
                          ))}
                        </DisclosurePanel>
                      </>
                    )}
                    </Disclosure>
                  )}
              )}
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
)}


    {/* <nav className="navbar navbar-expand-lg navbar-light gnav" style={{backgroundColor:"#1D254C"}}> 
        <button className="navbar-toggler text-white " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i className="bi bi-list"></i>
        </button>
        <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
        <ul className="nav nav-pills nav-fill">
          {Object.keys(HEADER_MENU).map((key) => {
            const item = HEADER_MENU[key]
            return (
              <>
              {item.dropdowns.length == 0 && (
                <li className="nav-item" key={item.key}>
                  <a className="nav-link text-light" aria-current="page" href={item.link}>{lang[item.key]}</a>
                </li>
              )}
              {item.dropdowns.length > 0 && (
                <li className="nav-item dropdown" key={item.key}>
                  <a className="nav-link dropdown-toggle text-light" href="#" id={item.key} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  {lang[item.key]}
                  </a>
                  <ul className="dropdown-menu" aria-labelledby={item.keys}>
                    {item.dropdowns.map((dropdown) => {
                      return (
                        <li><a className="dropdown-item" href={dropdown.link}>{lang[dropdown.key]}</a></li>  
                      )
                    })}
                  </ul>
                </li>
              )}
              </>
            )
          })}

          </ul>
        </div>
  </nav> */}