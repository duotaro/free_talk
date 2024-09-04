import "../styles/globals.css";
import "../firebase/client.js"
import Script from "next/script";
import * as gtag from "../lib/gtag";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { LocaleProvider } from "../components/context/localeContext.js"

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouterChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouterChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouterChange);
    };
  }, [router.events]);

  return (
  <>
    <LocaleProvider>
      <Component {...pageProps} />
    </LocaleProvider>
  </>
  );
}

export default MyApp;
