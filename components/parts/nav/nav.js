import React, { useContext, useState, useEffect } from 'react';
import { HEADER_MENU } from "../../../const";
import Link from "next/link"
import { useLocale } from "../../../utils/locale";
import LocaleContext from "../../context/localeContext";
import next from 'next';
// import {
//   Dialog,
//   DialogPanel,
//   Disclosure,
//   DisclosureButton,
//   DisclosurePanel,
//   Popover,
//   PopoverButton,
//   PopoverGroup,
//   PopoverPanel,
// } from '@headlessui/react'
// import {
//   Bars3Icon,
//   XMarkIcon,
// } from '@heroicons/react/24/outline'
// import { NavEntityList } from '../../../entity/navEntity';
// import PopoverDetail from './popoverDetail';
// import DisclosureDetail from './disclosureDetail';

export default function Nav({  }) {
  const { locale, setLocale } = useContext(LocaleContext);
  
  // const [posts, setPosts] = useState([]);
  // const [loading, setLoading] = useState(true);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { json } = useLocale(locale)
  const lang = json.navigation

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     let response = null
  //     try {
  //       response = await fetch('/api/getLayout');
  //       console.log(response)

        
  //     } catch (error) {
  //       console.error('Error fetching posts:', error);
  //     } finally {
  //       if(response){
  //         const list = new NavEntityList(response)
  //         const data = await response.json();

  //         console.log("===========")
  //         console.log(data)
  //         console.log("===========")
  //         setPosts(data);
  //       }
  //       setLoading(false);
  //     }
  //   };

  //   fetchPosts();
  // }, []);

  const [isHovered, setIsHovered] = useState(false)
  const [isOpen, setIsOpen] = useState(false);
  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
    className="flex-no-wrap relative flex w-full items-center justify-between py-2 shadow-dark-mild dark:bg-neutral-700 lg:flex-wrap lg:justify-start lg:py-4 bg-blue-800"
  >
    <div className="flex w-full flex-wrap items-center justify-between px-3">
      <button
        className="block border-0 bg-transparent px-2 text-black/50 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
        type="button"
        onClick={toggleNav}
        aria-controls="navbarSupportedContent1"
        aria-expanded={isOpen}
        aria-label="Toggle navigation"
      >
        <span className="[&>svg]:w-7 [&>svg]:stroke-black/50 dark:[&>svg]:stroke-neutral-200">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </button>

      <div
        className={`!visible ${isOpen ? 'flex' : 'hidden'} flex-grow basis-[100%] items-center lg:!flex lg:basis-auto `}
        id="navbarSupportedContent1"
      >
        <ul className="list-style-none flex flex-col items-center justify-center lg:flex-row lg:justify-center lg:ps-0">
          <li className="mb-4 lg:mb-0 lg:pe-2">
            <Link href="#" className="text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2">
                Dashboard
            </Link>
          </li>
          <li className="mb-4 lg:mb-0 lg:pe-2">
              <Link href="#" className="text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2">
                Team
              </Link>
          </li>
          <li className="mb-4 lg:mb-0 lg:pe-2">
              <Link href="#" className="text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2">
                Projects
              </Link>
          </li>
        </ul>
      </div>

    </div>
  </nav>
  )
}


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
{/* 
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
</header>*/}