import Head from "next/head";
import Layout from '../../components/layout'
import DeployButton from "../../components/parts/button/DeployButton";


export default function Admin({  }) {

  return (
    <Layout>
      <Head>
        <title>管理者ページ</title>
      </Head>
      <div className="container mt-5">
        <div>
          <h1>本番反映</h1>
          <DeployButton />
        </div>
      </div>
    </Layout>
  );
}