import React, { useContext } from "react";
import Image from "next/image"
import Link from "next/link"
import LocaleContext from "../../../context/localeContext";
import { useLocale } from "../../../../utils/locale";
import OpportunityEntity from "../../../../entity/opportunityEntity";
import Title from "../../text/title";
import Paragraphs from "../../text/paragraphs";
import CustomImage from "../../image/CustomImage";

export default function Donation({ donation }) {
  const { locale } = useContext(LocaleContext);
  const { json } = useLocale(locale)

  //const entity = new OpportunityEntity(opportunity[0], locale == "ja")

  return (
    <>
      <section className="py-8 md:py-12 lg:py-20 bg-slate-50">
        <div className="container px-6 mx-auto">
          <div className="flex flex-col items-center mb-5 ">
            <Title title="募金活動・寄付のお願い" />
          </div>
          <div className="grid items-center gap-8">
            <div className="flex flex-col items-center ">
              <Paragraphs text="本校は手作りの小さな学校ですので、地域の皆様の助けが大きな力となります。特に現地では入手しにくい日本語の本や辞書、日本文化伝承に役立つもの（折り紙、カルタ、鯉のぼり等）、また学校用品等の寄付を随時受け付けています。ご協力お願い致します。
​現在ミニ図書館運営のために必要なキャリーオンサイズのスーツケースとウィンドウズ搭載のノートパソコンを探しています。不要のものをお持ちの方は補習校への寄付をご検討下さい。" maxWidth="full"/>
            </div>
          </div>
        </div>
      </section>
      <section className="py-8 md:py-12 lg:py-20 bg-gray-100">
        <div className="container px-6 mx-auto ">
          <div className="flex flex-col items-center mb-5 ">
            <Title title="協賛方法" />
          </div>
          <div className="grid items-center gap-8">
            <div className="">
            ツーソン補習校で一生懸命日本語を学ぶ子供たちのためのよりよい環境作りのために、本校のもたらす教育的、文化的価値を理解いただいた上で、ご協賛いただけるツーソン地域にお住まいの方々、企業、団体を募集しています。協賛していただいた方々には御礼広告をさせていただきます。一口20ドルと、お手軽にご協賛していただけます。協賛方法等、詳しくはこちらからご覧ください。ご協力よろしくお願い致します。
            </div>
            <div className="">
            航空券の購入で学校を支援
旅行会社アムネットを通して日本への航空券を購入すると、学校に寄付が入ります。もちろん格安航空券でも！ご購入の際に、ツーソン日本語補習校の関係者ですと言っくていただくだけです。https://www.amnet-usa.com
            </div>
          </div>
        </div>
      </section>
    </>
  );
}