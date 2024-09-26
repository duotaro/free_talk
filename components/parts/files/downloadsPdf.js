


import React, { useContext } from "react";

import { PhilosophyEntity } from "../../../entity/philosophyEntity";
import { useLocale } from "../../../utils/locale";
import LocaleContext from "../../context/localeContext";
import { DocumentArrowDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function PdfDownloads({ filePath, title, isNew = false }) {
  const { locale } = useContext(LocaleContext);
  const { json } = useLocale(locale)
  if(!title){
    title = json.common.download
  }
  let bg = isNew ? "bg-amber-100" : "bg-gray-100"

  return (
    <div className="">
      <Link href={filePath} target="_blank" className={`group relative flex h-96 items-end overflow-hidden rounded-lg ${bg} p-4 shadow-lg hover:border-2`}>
        <img src="/image/components/pdf.png" loading="lazy" alt={title} className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

        <div className="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
          {/* <span className="text-gray-500">Men</span> */}
          <span className="text-sm font-bold text-gray-800 lg:text-md group-hover:text-blue-500">
            {title}
            {isNew && (
              <span class="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10 ml-2">NEW!!</span>
            )}
          </span>
        </div>
      </Link>
    </div>
  );
}