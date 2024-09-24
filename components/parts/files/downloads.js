


import React, { useContext } from "react";

import { PhilosophyEntity } from "../../../entity/philosophyEntity";
import { useLocale } from "../../../utils/locale";
import LocaleContext from "../../context/localeContext";
import { DocumentArrowDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function FileDownloads({ filePath, title }) {
  const { locale } = useContext(LocaleContext);
  const { json } = useLocale(locale)
  if(!title){
    title = json.common.download
  }

  return (
    <div className=" m-5">
      <Link href={filePath} className="inline-flex items-center px-6  hover:text-blue-700 transition-colors underline">
        <DocumentArrowDownIcon className="mr-2 w-5 h-5" />{title}
      </Link>
    </div>
  );
}