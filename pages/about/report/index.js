import Head from "next/head";
import Layout from '../../../components/layout'
import React, { useContext } from 'react';
import LocaleContext from "../../../components/context/localeContext";
import { useLocale } from "../../../utils/locale";
import { getDatabase } from "../../../lib/notion";
import savePdfIfNeeded from "../../../components/download/pdf.js";
import AnualReportEntity, { createPastReports } from "../../../entity/anualReportEntity.js";
import Section from "../../../components/parts/section/index.js";
import Title from "../../../components/parts/text/title.js";
import PdfDownloads from "../../../components/parts/files/downloadsPdf.js";

export default function GovernancePage({ reports }) {
  const { locale } = useContext(LocaleContext);
  const { json, metaTitleExtension } = useLocale(locale)
  let lang = json.navigation

  let resList = []
  for(const report of reports){
    const entity = new AnualReportEntity(report, locale == "ja", null)
    resList.push(entity)
  }
  let pastList = createPastReports(locale == "ja")
  const all = resList.concat(pastList);
  all.sort((a, b) => Number(b.year) - Number(a.year));

  const latest = all[0]
  const past = all.slice(1)


  return (
    <Layout>
      <Head>
        <title>{lang.report} - {metaTitleExtension} </title>
        <meta name="description" content={`${lang.report} - ${lang.description}`} />
      </Head>

      <div className="">
        <div className="row">
          <Section py="py-8 md:py-6 lg:py-10" bg='bg-gray-50'>
            <div className="container px-6 mx-auto">
              <div className="flex flex-wrap -mx-3 mb-5">
                <div className="w-full max-w-full px-3 mx-auto">
                  <div className="flex flex-col items-center text-center mb-10">
                    <Title title={lang.report} />
                  </div>
                  <div className="items-center text-center sm:mx-10 md:mx-32 lg:mx-60 my-10">
                    <PdfDownloads filePath={latest.pdf} title={latest.title} isNew="true"/>  
                  </div>
                  <hr className="border my-10 "/>
                  {/* PDFリンクセクション */}
                  <div class="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
                    {past.map((item) => {
                      return (
                        <PdfDownloads filePath={item.pdf} title={item.title} />  
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </Section>

        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps = async (context) => {

  // get about
  let reports = await getAnualReport()
  return {
    props: {
      reports: reports,
    },
    revalidate: 1
  };
};

const getAnualReport = async () => {
  const database = await getDatabase("10da8c0ecf8c80029cf8f3860f21e33f")
  let props = []
  for(let item of database){
    props.push(item.properties)
  }

  await savePdfIfNeeded(props, "anual_report")
  return database
}
