import Head from "next/head";
import Layout from '../../../components/layout'
import LocaleContext from "../../../components/context/localeContext";
import { useLocale } from "../../../utils/locale";
import { getDatabase } from "../../../lib/notion";
import { useContext } from "react";

export default function ContactOpportunityPage({ opportunities }) {
  const { locale } = useContext(LocaleContext);
  const { json, metaTitleExtension } = useLocale(locale)
  let lang = json.navigation

  console.log(opportunities)

  return (
    <Layout>
      <Head>
        <title>{lang.contact} - {metaTitleExtension} </title>
        <meta name="description" content={`${lang.contact} - ${lang.description}`} />
      </Head>

      <div className="container mt-5">
        <div className="row">
          スタッフ募集 (デザイン浮かばん。AIに聞く)
          {opportunities.map((opportunity) => {
            return (
              <>
               <p>{opportunity.properties["title"].title[0].text.content}</p>
              </>
            )
          })}
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps = async (context) => {
  // get news
  let database = await getDatabase("102a8c0ecf8c80089b21d14aec9edd22")
  
  return {
    props: {
      opportunities: database
    },
    revalidate: 1
  };
};

