import Head from "next/head";
import Layout from '../../../components/layout'
import React, { useContext } from 'react';
import LocaleContext from "../../../components/context/localeContext";
import { useLocale } from "../../../utils/locale";
import { getDatabase } from "../../../lib/notion";
import saveImageIfNeeded from "../../../components/download/index.js";
import Directors from "../../../components/parts/about/governance/directors.js";
import OrganisationFlowChart from "../../../components/parts/about/governance/chart.js";
import GovernancePolicy from "../../../components/parts/about/governance/governancePolicy.js";

export default function GovernancePage({ directors }) {
  const { locale } = useContext(LocaleContext);
  const { json, metaTitleExtension } = useLocale(locale)
  let lang = json.navigation


  return (
    <Layout>
      <Head>
        <title>{lang.governance} - {metaTitleExtension} </title>
        <meta name="description" content={`${lang.governance} - ${lang.description}`} />
      </Head>

      <div className="">
        <div className="row">
          <Directors directors={directors} />
          <OrganisationFlowChart charts=""/>
          <GovernancePolicy />
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps = async (context) => {

  // get about
  let directors = await getDirector()
  return {
    props: {
      directors: directors
    },
    revalidate: 1
  };
};

const getDirector = async () => {
  const database = await getDatabase("10ba8c0ecf8c807ba7c6c7c9128d9770")
  let props = []
  for(let item of database){
    props.push(item.properties)
  }

  await saveImageIfNeeded(props, "director")
  return database
}
