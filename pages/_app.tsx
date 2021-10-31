import "@/css/global/Global.css";

// Colors
import "@/css/global/colors/ColorVariables.css";
import "@/css/global/colors/BackgroundColorClasses.css";
import "@/css/global/colors/ColorClasses.css";

// Fonts
import "@/css/global/fonts/FontVariables.css";
import "@/css/global/fonts/FontClasses.css";

import Head from "next/head";

import { AppProps } from "next/app";

const META_DESCRIPTION =
  "A tool for easily find PDAs (program derived addresses)";

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Solana PDA Finder</title>
        <meta name="description" content={META_DESCRIPTION} />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
