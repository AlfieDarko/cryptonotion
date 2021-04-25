import "../styles/globals.css";

import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import { Mixpanel } from "../mixpanel";

function MyApp({ Component, pageProps }) {
  Mixpanel.track("Application initiated", true);

  return (
    <>
      <ChakraProvider>
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>

        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
