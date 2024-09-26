import Head from "next/head";
import Layout from '../../../components/layout'
import LocaleContext from "../../../components/context/localeContext";
import { useLocale } from "../../../utils/locale";
import { getDatabase } from "../../../lib/notion";
import { useContext } from "react";
import OpportunityDetail from "../../../components/parts/contact/opportunity/detail";
import OpportunityEntity from "../../../entity/opportunityEntity";
import Paragraphs from "../../../components/parts/text/paragraphs";
import Title from "../../../components/parts/text/title";
import Section from "../../../components/parts/section";

export default function ContactOpportunityPage({ opportunities, general }) {
  const { locale } = useContext(LocaleContext);
  const { json, metaTitleExtension } = useLocale(locale)
  let lang = json.navigation

  console.log(general)
  const title = locale == "ja" ? general.properties["title"].title[0].text.content : general.properties["en"].rich_text[0].text.content
  let text = ""
  if(locale == "ja"){
    if(general.properties["text"].rich_text[0]){
        text = general.properties["text"].rich_text[0].text.content
    }
} else {
    if(general.properties["text_en"].rich_text[0]){
        text = general.properties["text_en"].rich_text[0].text.content
    }

}

  return (
    <Layout>
      <Head>
        <title>{lang.opportunity} - {metaTitleExtension} </title>
        <meta name="description" content={`${lang.opportunity} - ${lang.description}`} />
      </Head>

      <div className="">
        <Section py="py-2 md:py-4 lg:py-6" px="px-0 md:px-20 lg:px-28 xl:px-40">
          <div className="container px-6 mx-auto justify-center m-4">
            <div className="flex flex-col w-full px-4 justify-center items-center mb-5">
              <Title title={title} />
              <Paragraphs text={text} maxWidth="full"/>
            </div>
            <OpportunityDetail opportunities={opportunities}/>
          </div>
        </Section>
      </div>
    </Layout>
  );
}

export const getStaticProps = async (context) => {
  // get news
  const database = await getDatabase("102a8c0ecf8c80089b21d14aec9edd22")

  const general = await getDatabase("d9037016a0524f08adecdbab0c7302b7")
  
  return {
    props: {
      opportunities: database,
      general: general[0]
    },
    revalidate: 1
  };
};

