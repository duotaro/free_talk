import Head from "next/head";
import Layout from '../../components/layout'
import React, { useContext } from 'react';
import LocaleContext from "../../components/context/localeContext";
import { useLocale } from "../../utils/locale";


export default function Sponsors({  }) {
  const { locale } = useContext(LocaleContext);
  const { json, metaTitleExtension } = useLocale(locale)
  let lang = json.navigation

  return (
    <Layout>
      <Head>
        <title>{lang.staff} - {metaTitleExtension} </title>
        <meta name="description" content={`${lang.staff} - ${lang.description}`} />
      </Head>

      <div className="container">
        <div className="row">
          <section className="col">
            職員紹介のページ
          </section>
        </div>
      </div>
    </Layout>
  );
}