


import React, { useContext } from "react";
import Image from "next/image"
import Link from "next/link"
import LocaleContext from "../../../context/localeContext";
import { useLocale } from "../../../../utils/locale";
import Title from "../../text/title";
import Paragraphs from "../../text/paragraphs";
import CustomImage from "../../image/CustomImage";

export default function Directors({ director }) {
  const { locale } = useContext(LocaleContext);
  const { json } = useLocale(locale)
  const lang = json.director

  return (
    <section className="py-8 md:py-6 lg:py-10 bg-gray-50">
      <div className="container px-6 mx-auto">
        <div className="flex flex-wrap -mx-3 mb-5">
          <div className="w-full max-w-full px-3  mx-auto">
            <div className="relative flex-[1_auto] flex flex-col break-words min-w-0  m-5">
              <div className="flex-auto block py-8 px-9">
                <div>
                  <div className="flex flex-col items-center text-center mb-10">
                    {/* <h1 className="mb-2 text-[1.75rem] font-semibold text-dark">{lang.title}</h1> */}
                    <Title title={lang.title} />
                    {/* <span className="text-[1.15rem] font-medium text-muted">{lang.description}</span> */}
                    <Paragraphs text={lang.description} />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 w-full">
                    <div className="flex flex-col text-center">
                      <div className="inline-block mb-4 relative shrink-0 rounded-[.95rem]">
                        <img className="inline-block shrink-0 rounded-[.95rem] w-[150px] h-[150px]" src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/avatars/avatar11.jpg" alt="avarat image" />
                      </div>
                      <div className="text-center">
                        <a href="javascript:void(0)" className="text-dark font-semibold hover:text-primary text-[1.25rem] transition-colors duration-200 ease-in-out">Samantha Reynolds</a>
                        <span className="block font-medium text-muted">Marketing Manager</span>
                      </div>
                    </div>
                    <div className="flex flex-col text-center">
                      <div className="inline-block mb-4 relative shrink-0 rounded-[.95rem]">
                        <img className="inline-block shrink-0 rounded-[.95rem] w-[150px] h-[150px]" src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/avatars/avatar2.jpg" alt="avarat image" />
                      </div>
                      <div className="text-center">
                        <a href="javascript:void(0)" className="text-dark font-semibold hover:text-primary text-[1.25rem] transition-colors duration-200 ease-in-out">Benjamin Martinez</a>
                        <span className="block font-medium text-muted">Sales Executive</span>
                      </div>
                    </div>
                    <div className="flex flex-col text-center">
                      <div className="inline-block mb-4 relative shrink-0 rounded-[.95rem]">
                        <img className="inline-block shrink-0 rounded-[.95rem] w-[150px] h-[150px]" src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/avatars/avatar5.jpg" alt="avarat image" />
                      </div>
                      <div className="text-center">
                        <a href="javascript:void(0)" className="text-dark font-semibold hover:text-primary text-[1.25rem] transition-colors duration-200 ease-in-out">Emily Turner</a>
                        <span className="block font-medium text-muted">Customer Support</span>
                      </div>
                    </div>
                    <div className="flex flex-col text-center">
                      <div className="inline-block mb-4 relative shrink-0 rounded-[.95rem]">
                        <img className="inline-block shrink-0 rounded-[.95rem] w-[150px] h-[150px]" src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/avatars/avatar24.jpg" alt="avarat image" />
                      </div>
                      <div className="text-center">
                        <a href="javascript:void(0)" className="text-dark font-semibold hover:text-primary text-[1.25rem] transition-colors duration-200 ease-in-out">Jason Anderson</a>
                        <span className="block font-medium text-muted">Development Engineer</span>
                      </div>
                    </div>
                    <div className="flex flex-col text-center">
                      <div className="inline-block mb-4 relative shrink-0 rounded-[.95rem]">
                        <img className="inline-block shrink-0 rounded-[.95rem] w-[150px] h-[150px]" src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/avatars/avatar23.jpg" alt="avarat image" />
                      </div>
                      <div className="text-center">
                        <a href="javascript:void(0)" className="text-dark font-semibold hover:text-primary text-[1.25rem] transition-colors duration-200 ease-in-out">Olivia Carter</a>
                        <span className="block font-medium text-muted">Creative Director</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}