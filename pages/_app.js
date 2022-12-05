//import google font Lato
import { Lato } from "@next/font/google";

const lato = Lato({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <main className={lato.className}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
