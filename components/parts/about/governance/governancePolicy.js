
import Link from 'next/link';
import { DocumentArrowDownIcon } from '@heroicons/react/24/outline';
import FileDownloads from '../../files/downloads';

export default function GovernancePolicy({}) {
  return (
    <section className="py-8 md:py-6 lg:py-10 bg-gray-100">
    <div className="container mx-auto">
      {/* 規約ページのヘッダ */}
      <h1 className="text-3xl font-bold text-center mb-8">組織規約ダウンロード</h1>
      
      {/* 規約の説明 */}
      {/* <p className="text-center text-gray-600 mb-12">
        こちらのページから、弊社の規約をダウンロードできます。以下のリンクからPDFファイルをダウンロードしてください。
        <br />デザイン浮かばん
      </p> */}

      {/* PDFリンクセクション */}
      <div className="grid max-w-2xl mx-auto text-center">

        <FileDownloads filePath={"/path/to/terms1.pdf"} title="Bylaw(リンクは無効)" />

        <FileDownloads filePath={"/path/to/terms1.pdf"} title="Article of Organization(リンクは無効)" />

        <FileDownloads filePath={"/path/to/terms1.pdf"} title="Conflict of Interest Policy(リンクは無効)" />

      </div>
    </div>
    </section>
  );
}
