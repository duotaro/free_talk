import Head from "next/head";
import Navbar from './navbar'
import Footer from './footer'
import Nav from './nav'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'

export default function Layout({ children }) {
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
        <main>{children}</main>
        <Footer />
    </>
  )
}
