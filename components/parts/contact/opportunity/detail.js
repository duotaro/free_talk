import React, { useContext, useState } from "react";
import Image from "next/image"
import Link from "next/link"
import LocaleContext from "../../../context/localeContext";
import { useLocale } from "../../../../utils/locale";
import OpportunityEntity from "../../../../entity/opportunityEntity";
import Title from "../../text/title";
import Paragraphs from "../../text/paragraphs";
import OpportunityDetailEntity from "../../../../entity/opportunityDetailEntity";

export default function OpportunityDetail({ opportunities }) {

  const [activeTab, setActiveTab] = useState("instructor");
  const { locale } = useContext(LocaleContext);
  const { json } = useLocale(locale)

  let list = []
  for(let opportunity of opportunities){
    const entity = new OpportunityDetailEntity(opportunity, locale == "ja")
    list.push(entity)
  }
  list.sort((a, b) => a.ordering - b.ordering);



  return (
    <div>
    <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
      <ul
        className="flex flex-wrap -mb-px text-center justify-center items-center"
        role="tablist"
      >
        {list.map((item) => {
          return (
            <li className="me-2" role="presentation">
              <button
                className={`min-w-18 md:min-w-32 lg:min-w-36 inline-block p-4 border-b-2 rounded-t-lg ${
                  activeTab === item.tag
                    ? "border-blue-500 text-blue-500"
                    : "hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                }`}
                onClick={() => setActiveTab(item.tag)}
                type="button"
                role="tab"
                aria-controls={item.tag}
                aria-selected={activeTab === "instructor"}
              >
                <span className="text-sm md:text-md lg:text-lg font-bold">{item.title}</span>
              </button>
          </li>
          )
        })}
      </ul>
    </div>

    <div>
      {list.map((item) => {
        if(activeTab != item.tag){
          return
        }
          return (
            <div className="p-4 rounded-lg" id={item.tag} role="tabpanel">
              <div className="text-md text-gray-500 dark:text-gray-400">
                <Paragraphs text={item.text} />
              </div>
            </div>
          )
        })}
    </div>
  </div>
  );
}