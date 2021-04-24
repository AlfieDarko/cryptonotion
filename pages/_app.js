import "../styles/globals.css";

import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
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
