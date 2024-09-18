


import React, { useContext } from "react";

import { PhilosophyEntity } from "../../../entity/philosophyEntity";
import { useLocale } from "../../../utils/locale";
import LocaleContext from "../../context/localeContext";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

export default function FileDownloads({ filePath, title }) {
  const { locale } = useContext(LocaleContext);
  const { json } = useLocale(locale)
  if(!title){
    title = json.common.download
  }

  return (
    
    <a
      href={filePath}
      download
      className="flex px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition mt-5"
    >
      <ArrowDownTrayIcon className="w-5 h-5 m-1 "/>{title}
    </a>
  );
}