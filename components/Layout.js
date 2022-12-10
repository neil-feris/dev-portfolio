// layout for all pages
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "./Header";
import Footer from "./Footer";

import Script from "next/script";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <meta charset="UTF-8" />
        <title>Neil Feris Portfolio</title>
        <meta name="portfolio" content="Neil Feris Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/apple-touch-icon.png" />
      </Head>
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
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}
