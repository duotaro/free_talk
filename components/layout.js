import Head from "next/head";
import Navbar from './navbar'
import Footer from './footer'
import Nav from './nav'
import AdSense from '../components/ads/ad'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta name="description" content="最新情報 What's New? - Updated On Oct 17th ★最新情報 ★ 保護者の皆様へ ★ 登録/募集のお知らせ ★最新情報 IACE Travel 様からの【補習校応援プログラム】を更新致しました。こちらからご覧ください。海外子女教育振興財団より、2021年10月20日（水）に発行される「帰国子女のための学校便覧」2022年度版のご紹介です。書籍詳細、お申込みはこちらからご確認頂けます。学校行事をアップデートしましたのでご覧下さい。海外子女教育 月刊 弊誌をアップしました。こちらの学園内限定サイトよりご覧下さい。 ★ 保護者の皆様へ 全ての生徒様の緊急連絡先の登録をお願いします！（パスワードは校長先生のメールを参照下さい）Please sign up Emergency contact information of every student. （Please confirm e-mail about password.）Amazon.comのお買物の際、Amazon smileからご購入頂くと、その一部がアリゾナ学園へ寄付されます。詳細は下記リンクから。 ★ 登録/募集のお知らせ 学校サポーター（保護者ボランティア）募集！教室での授業サポーター、校内パトロール・サポーター、式典行事サポータ。ー、アリゾナ学園コンシェルジェ等々、みんなのアリゾナ学園の活動に参加しませんか？詳しくは事務局まで。こちらのオンラインフォームからもご応募して頂けます。教員募集！教えることに興味のある方、是非一度、事務局までご連絡下さい。こちらのオンラインフォームからもご応募して頂けます。オフィシャルウェブサイト用の写真を募集しています！詳細はこちらから。Send us your child photos! Check more details here. Fry'sが主催するCommunity Rewards Program にアリゾナ学園（寄付先 : Arizona Kokusai Kyoiku" />
        <meta property="og:image"  contents="https://cdn-ak.f.st-hatena.com/images/fotolife/d/duo-taro100/20230501/20230501153944.jpg"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <AdSense />
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  )
}
