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
import SponsorRequest from "../../../components/parts/sponsor/request";
import HowToDonate from "../../../components/parts/sponsor/howto";


export default function Sponsors({ sponsors, donation, howto }) {
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
        </div>
        <section className="py-4 md:py-6 lg:py-8 ">
          <div className="container px-6 mx-auto text-center max-w-full md:max-w-3xl pb-5">
            <Sponsor sponsor={sponsorList} bg="bg-white"/>
          </div>
        </section>
        <SponsorRequest request={donation} />
        <HowToDonate howto={howto} />
      </div>
    </Layout>
  );
}


export const getStaticProps = async (context) => {
  const database = await getDatabase("1e302ac5bce442b797e491aee309e7c4")
  const donation = await getDatabase("10ca8c0ecf8c8039a51bdd38f640a34e")
  const howto = await getDatabase("10ca8c0ecf8c8081a8a0e9a9a6166cc1")
  
  return {
    props: {
      sponsors: database,
      donation: donation[0],
      howto: howto
    },
    revalidate: 1
  };
};
