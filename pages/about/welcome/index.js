import Head from "next/head";
import Layout from '../../../components/layout'
import React, { useContext } from 'react';
import LocaleContext from "../../../components/context/localeContext";
import { useLocale } from "../../../utils/locale";
import { getDatabase } from "../../../lib/notion";
import Greeting from "../../../components/parts/about/welcome/greetings";
import OurStory from "../../../components/parts/about/welcome/our_story";
import History from "../../../components/parts/about/welcome/history";
import saveImageIfNeeded from "../../../components/download";

export default function AboutPage({ welcome }) {
  const { locale } = useContext(LocaleContext);
  const { json, metaTitleExtension } = useLocale(locale)
  let lang = json.navigation

  let {greeting, story, history} = welcome

  return (
    <Layout>
      <Head>
        <title>{lang.welcome} - {metaTitleExtension} </title>
        <meta name="description" content={`${lang.welcome} - ${lang.description}`} />
      </Head>

      <div className="">
        <div className="row">
          <Greeting greeting={greeting} />
          <OurStory story={story} />
          <History history={history} />
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps = async (context) => {

  // get about
  let welcome = await getWelcome()
  return {
    props: {
      welcome: welcome
    },
    revalidate: 1
  };
};

const getWelcome = async () => {
  const greeting = await getDatabase("5ceb6b37e4584fa39fb78161869d885f")
  const story = await getDatabase("02ed913f2ebe4151b0235d91a9306403")
  const history = await getDatabase("15c93b4fe6154400902a623b20c6fe49")

  let props = []
  for(let item of greeting){
    props.push(item.properties)
  }

  await saveImageIfNeeded(props, "greeting")

  let props2 = []
  for(let item of history){
    props2.push(item.properties)
  }
  await saveImageIfNeeded(props2, "history")

  return {
    "greeting": greeting[0],
    "story": story[0],
    "history": history[0],
  }
}
