import Head from "next/head";
import Navbar from './navbar'
import Footer from './footer'
import Nav from './parts/nav/nav'
import Breadcrumb from "./parts/nav/breadcrumb";

export default function Layout({ children, breadcrumb }) {
  return (
    <>
      <Head>
        <meta name="description" content="Japan, Japanese, School, Tucson, children, class, culture, kids, language, クラス, ツーソン, 子ども, 学校, 日本, 日本語" />
        <meta name="keywords" content="Japan, Japanese, School, Tucson, children, class, culture, kids, language, クラス, ツーソン, 子ども, 学校, 日本, 日本語" />
        <meta property="og:image"  contents="https://cdn-ak.f.st-hatena.com/images/fotolife/d/duo-taro100/20230501/20230501153944.jpg"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Navbar />
        <Nav />
        {breadcrumb && ( <Breadcrumb parents={breadcrumb.parents} current={breadcrumb.current} /> )}
        <main className="">{children}</main>
        <Footer />
    </>
  )
}
