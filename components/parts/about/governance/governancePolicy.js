
import React, { useContext } from "react";
import LocaleContext from "../../../context/localeContext";
import { useLocale } from "../../../../utils/locale";
import FileDownloads from '../../files/downloads';
import Section from '../../section';
import Title from "../../text/title";
import Paragraphs from "../../text/paragraphs";
import OrgPolicyEntity from "../../../../entity/orgPolicyEntity";

export default function GovernancePolicy({ orgPolicys }) {
  const { locale } = useContext(LocaleContext);
  const { json } = useLocale(locale)
  const lang = json.bylaws

  let list = []
  for(let policy of orgPolicys){
    const entity = new OrgPolicyEntity(policy, locale == "ja")
    list.push(entity)
  }

  console.log(list)
  
  return (
    <Section py="py-8 md:py-6 lg:py-10" bg='bg-gray-100'>
      <div className="container px-6 mx-auto">
        <div className="flex flex-wrap -mx-3 mb-5">
          <div className="w-full max-w-full px-3 mx-auto">
          
            <div className="flex flex-col items-center text-center mb-10">
              <Title title={lang.title} />
            </div>
            {/* PDFリンクセクション */}
            <div className="grid max-w-2xl mx-auto text-center">
              {list.map((item) => {
                return (
                  <FileDownloads filePath={item.pdf} title={item.title} />  
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
