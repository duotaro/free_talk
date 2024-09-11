import "../styles/globals.css";
import "../firebase/client.js"
import Script from "next/script";
import { LocaleProvider } from "../components/context/localeContext.js"
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

export default MyApp;
