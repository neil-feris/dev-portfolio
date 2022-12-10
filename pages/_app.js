//import google font Lato
import { Lato } from "@next/font/google";

import Layout from "../components/Layout";

import Script from "next/script";

import { useRouter } from "next/router";
import { useEffect } from "react";
import * as gtag from "../lib/gtag";

const lato = Lato({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

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

        gtag('config', 'G-NZ0853WTD9', {
          page_path: window.location.pathname,
        });
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
