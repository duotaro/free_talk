import Head from "next/head";
import Layout from '../../components/layout'
import React, { useContext } from 'react';
import LocaleContext from "../../components/context/localeContext";
import { useLocale } from "../../utils/locale";
import About from "../../components/parts/about";
import { getDatabase } from "../../lib/notion";
import { convertAboutFromDatabase } from "../../entity/aboutEntity";

export default function AboutPage({ about }) {
  const { locale } = useContext(LocaleContext);
  const { json, metaTitleExtension } = useLocale(locale)
  let lang = json.navigation

  let {aboutSchool} = convertAboutFromDatabase(about, locale == "ja")


  return (
    <Layout>
      <Head>
        <title>{lang.about} - {metaTitleExtension} </title>
        <meta name="description" content={`${lang.about} - ${lang.description}`} />
      </Head>

      <div className="">
        <div className="row">
          <About about={aboutSchool} isTop={false}/>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps = async (context) => {

  // get about
  let about = await getAbout()
  return {
    props: {
      about: about
    },
    revalidate: 1
  };
};

const getAbout = async () => {
  const database = await getDatabase("d4eb3828e74c469b9179ca7be9edb5cf")


  return database
}
