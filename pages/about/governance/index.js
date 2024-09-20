import Head from "next/head";
import Layout from '../../../components/layout'
import React, { useContext } from 'react';
import LocaleContext from "../../../components/context/localeContext";
import { useLocale } from "../../../utils/locale";
import { getDatabase } from "../../../lib/notion";
import saveImageIfNeeded from "../../../components/download/index.js";
import { convertAboutFromDatabase } from "../../../entity/aboutEntity";
import Mission from "../../../components/parts/about/mission/mission.js";
import Philosophy from "../../../components/parts/about/mission/philosophy.js";
import Policy from "../../../components/parts/about/mission/policy.js";
import Vision from "../../../components/parts/about/mission/vision.js";
import Directors from "../../../components/parts/about/governance/directors.js";
import OrganisationFlowChart from "../../../components/parts/about/governance/chart.js";
import GovernancePolicy from "../../../components/parts/about/governance/governancePolicy.js";

export default function GovernancePage({ about, philosophy, policy }) {
  const { locale } = useContext(LocaleContext);
  const { json, metaTitleExtension } = useLocale(locale)
  let lang = json.navigation

  let {mission, vision} = convertAboutFromDatabase(about, locale == "ja")


  return (
    <Layout>
      <Head>
        <title>{lang.governance} - {metaTitleExtension} </title>
        <meta name="description" content={`${lang.governance} - ${lang.description}`} />
      </Head>

      <div className="">
        <div className="row">
          <Directors directors="" />
          <OrganisationFlowChart charts=""/>
          <GovernancePolicy />
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps = async (context) => {

  // get about
  let about = await getAbout()
  let philosophy = await getPhilosophy()
  let policy = await getPolicy()
  return {
    props: {
      about: about,
      philosophy: philosophy,
      policy: policy
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

const getPhilosophy = async () => {
  const database = await getDatabase("f40ad3a82b894969a6a1b0ee0bfcb0cf")
  return database
}

const getPolicy = async () => {
  const database = await getDatabase("105a8c0ecf8c8082a456dd95fd87d0c2")
  let props = []
  for(let item of database){
    props.push(item.properties)
  }
  await saveImageIfNeeded(props, "policy")
  // pdf download
  return database
}
