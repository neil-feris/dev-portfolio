//import google font Lato
import { Lato } from "@next/font/google";

import Layout from "../components/Layout";

import Script from "next/script";

const lato = Lato({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-NZ0853WTD9"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-NZ0853WTD9');
        `}
      </Script>
      <Layout>
        <main className={lato.className}>
          <Component {...pageProps} />
        </main>
      </Layout>
    </>
  );
}

export default MyApp;
