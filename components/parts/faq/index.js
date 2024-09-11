
import React, { useContext } from "react";
import LocaleContext from "../../context/localeContext";
import { useLocale } from "../../../utils/locale";

export default function Faq({ }) {
  const { locale } = useContext(LocaleContext);
  const { json } = useLocale(locale)

  const faqList = []

  faqList.push({
    "title": "Move weight here just either attorney?",
    "answer": "Officier journal personnage maintenant. Métier arracher cou secours voler air. Maintenant parole prévenir creuser froid distinguer affaire rocher."
  })
  faqList.push({
    "title": "MPass role air campaign up gas service.",
    "answer": "Time have local give cover mission. Throw where size size relationship. Her year wife. Stock type ten tough plant. Catch wear various. Section follow charge side member."
  })
  faqList.push({
    "title": "Trial successful really various party show?",
    "answer": "Capital four individual ball head gun. Development purpose radio report. Find feel attorney practice."
  })
  faqList.push({
    "title": "Trial successful really various party show?",
    "answer": "Capital four individual ball head gun. Development purpose radio report. Find feel attorney practice."
  })

  return (
    <section className="py-8 md:py-12 lg:py-20 bg-gray-50">
      <div className="container px-6 mx-auto text-center" >
        <h3 className="text-2xl font-black sm:text-4xl md:text-4xl lg:text-5xl">
            {json.navigation.faq}
        </h3>
      </div>
      <div className="container px-6 mx-auto">
        {faqList.length > 0 && (
          <div className="grid gap-8 pt-10 md:py-20 md:gap-12 lg:gap-20 md:grid-cols-2">
            {faqList.map((faq) => (
              <div key={faq.title}>
                <h3 className="text-xl font-semibold md:text-2xl">
                  {faq.title}
                </h3>
                <div className="mt-2 leading-relaxed">{faq.answer}</div>
              </div>
            ))}
          </div>
        )}
      </div>
      </section>
  )
}
