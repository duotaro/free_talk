import Head from "next/head";
import Layout from '../../components/layout'
import React, { useContext } from 'react';
import LocaleContext from "../../components/context/localeContext";
import { useLocale } from "../../utils/locale";


export default function Event({  }) {
  const { locale } = useContext(LocaleContext);
  const { json, metaTitleExtension } = useLocale(locale)
  let lang = json.navigation

  return (
    <Layout>
      <Head>
        <title>{lang.event} - {metaTitleExtension} </title>
        <meta name="description" content={`${lang.event} - ${lang.description}`} />
      </Head>

      <div className="container mt-5">
        <div className="row">
          <section className="col">
            イベントのページ
          </section>
        </div>
      </div>
    </Layout>
  );
}