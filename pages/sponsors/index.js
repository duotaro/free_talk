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
        <title>{lang.sponsors} - {metaTitleExtension} </title>
        <meta name="description" content={`${lang.sponsors} - ${lang.description}`} />
      </Head>

      <div className="container mt-5">
        <div className="row">
          <section className="col">
            スポンサー一覧のページ
          </section>
        </div>
      </div>
    </Layout>
  );
}