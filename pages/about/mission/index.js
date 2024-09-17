import Head from "next/head";
import Layout from '../../../components/layout'
import React, { useContext } from 'react';
import LocaleContext from "../../../components/context/localeContext";
import { useLocale } from "../../../utils/locale";
import { getDatabase } from "../../../lib/notion";
import saveImageIfNeeded from "../../../components/download/index.js";
import { convertAboutFromDatabase } from "../../../entity/aboutEntity";
import Mission from "../../../components/parts/mission/index.js";

export default function MissionPage({ about }) {
  const { locale } = useContext(LocaleContext);
  const { json, metaTitleExtension } = useLocale(locale)
  let lang = json.navigation

  let {mission} = convertAboutFromDatabase(about, locale == "ja")


  return (
    <Layout>
      <Head>
        <title>{lang.about} - {metaTitleExtension} </title>
        <meta name="description" content={`${lang.about} - ${lang.description}`} />
      </Head>

      <div className="">
        <div className="row">
          <Mission mission={mission} />
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
  let props = []
  for(let item of database){
    props.push(item.properties)
  }

  await saveImageIfNeeded(props, "about")
  return database
}
