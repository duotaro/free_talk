import Head from "next/head";
import Layout from '../../../components/layout'
import React, { useContext } from 'react';
import LocaleContext from "../../../components/context/localeContext";
import { useLocale } from "../../../utils/locale";
import Title from "../../../components/parts/text/title";
import Paragraphs from "../../../components/parts/text/paragraphs";
import Sponsor from "../../../components/parts/sponsor";
import SponsorEntity from "../../../entity/sponsorEntity";
import { getDatabase } from "../../../lib/notion";
import Donation from "../../../components/parts/contact/donation";


export default function Sponsors({ sponsors }) {
  const { locale } = useContext(LocaleContext);
  const { json, metaTitleExtension } = useLocale(locale)
  let lang = json.navigation

  let sponsorList = []

  for(let item of sponsors){
    let sponsor = new SponsorEntity(item)
    sponsorList.push(sponsor)
  }


  return (
    <Layout>
      <Head>
        <title>{lang.sponsors} - {metaTitleExtension} </title>
        <meta name="description" content={`${lang.sponsors} - ${lang.description}`} />
      </Head>

      <div className="py-5 justify-center items-center">
        <div className="w-full px-4 pb-5">
          <Title title={lang.donation} />
        
          {/* <Paragraphs text={text} maxWidth="full"/> */}
        </div>
        <section className="py-4 md:py-6 lg:py-8 ">
          <div className="container px-6 mx-auto text-center max-w-full md:max-w-3xl pb-5">
            <Sponsor sponsor={sponsorList} bg="bg-white"/>
          </div>
        </section>
        <Donation />
      </div>
    </Layout>
  );
}


export const getStaticProps = async (context) => {
  const database = await getDatabase("1e302ac5bce442b797e491aee309e7c4")
  
  return {
    props: {
      sponsors: database
    },
    revalidate: 1
  };
};
