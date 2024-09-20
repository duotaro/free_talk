
import Link from 'next/link';
import { DocumentArrowDownIcon } from '@heroicons/react/24/outline';

export default function GovernancePolicy({}) {
  return (
    <section className="py-8 md:py-6 lg:py-10 bg-gray-100">
    <div className="container mx-auto">
      {/* 規約ページのヘッダ */}
      <h1 className="text-3xl font-bold text-center mb-8">組織規約ダウンロード</h1>
      
      {/* 規約の説明 */}
      <p className="text-center text-gray-600 mb-12">
        こちらのページから、弊社の規約をダウンロードできます。以下のリンクからPDFファイルをダウンロードしてください。
        <br />デザイン浮かばん
      </p>

      {/* PDFリンクセクション */}
      <div className="grid gap-3 max-w-2xl mx-auto">
        {/* PDF1 */}
        <div className="text-left">
          <Link href="/path/to/terms1.pdf" className="inline-flex items-center px-6  hover:text-blue-700 transition-colors">
            <DocumentArrowDownIcon className="mr-2 w-5 h-5 text-red" />Bylaw(リンクは無効)
          </Link>
        </div>

        {/* PDF2 */}
        <div className="text-left">
          <Link href="/path/to/terms1.pdf" className="inline-flex items-center px-6  hover:text-blue-700 transition-colors">
            <DocumentArrowDownIcon className="mr-2 w-5 h-5" />Article of Organization(リンクは無効)
          </Link>
        </div>

        {/* PDF3 */}
        <div className="text-left">
          <Link href="/path/to/terms1.pdf" className="inline-flex items-center px-6 hover:text-blue-700 transition-colors">
            <DocumentArrowDownIcon className="mr-2 w-5 h-5" />Conflict of Interest Policy(リンクは無効)
          </Link>
        </div>
      </div>
    </div>
    </section>
  );
}
