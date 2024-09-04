import "../styles/globals.css";
import "../firebase/client.js"
import Script from "next/script";
import { LocaleProvider } from "../components/context/localeContext.js"

function MyApp({ Component, pageProps }) {
  return (
  <>
    <Script 
      strategy="afterInteractive" 
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" />
    <LocaleProvider>
      <Component {...pageProps} />
    </LocaleProvider>
  </>
  );
}

export default MyApp;
