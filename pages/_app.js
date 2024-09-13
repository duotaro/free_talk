import "../styles/globals.css";
import "../firebase/client.js"
import Script from "next/script";
import { LocaleProvider } from "../components/context/localeContext.js"
import { getDatabase } from "../lib/notion.js";
import Layout from "../components/layout.js";
// import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  
//  useEffect(() => {
//     require("bootstrap/dist/js/bootstrap.bundle.min.js");
//   }, []);

  return (
  <>
    <LocaleProvider> 
      <Component {...pageProps} />
    </LocaleProvider>
  </>
  );
}

// MyApp.getInitialProps = async (appContext) => {
//   // ページコンポーネントが持つgetInitialPropsも呼び出します
//   const appProps = await App.getInitialProps(appContext);

//   // 共通データの取得
//   const sponsor = await getSponsors()
//   const commonData = {
//     sponsor
//   }

//   return { ...appProps, pageProps: { ...appProps.pageProps, commonData } };
// };

const getSponsors = async () => {
  const database = await getDatabase("1e302ac5bce442b797e491aee309e7c4")
  let props = []
  for(let item of database){
    props.push(item.properties)
  }

  await saveImageIfNeeded(props, "sponsor")
  return database
}

export default MyApp;
