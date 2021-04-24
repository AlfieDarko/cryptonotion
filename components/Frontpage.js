import * as React from "react";

import {
  Box,
  Button,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import { animateScroll as scroll } from "react-scroll";

function scrollMoreDown300() {
  scroll.scrollMore(500);
}

export const Frontpage = () => {
  return (
    <>
      <Box mb={32} width="100%" height="32px">
        <Box mb={12} className="tradingview-widget-container">
          <div className="tradingview-widget-container__widget"></div>
          <script
            type="text/javascript"
            src="https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js"
            async
          >
            {JSON.stringify({
              symbols: [
                {
                  proName: "BITSTAMP:BTCUSD",
                  title: "BTC/USD",
                },
                {
                  proName: "BITSTAMP:ETHUSD",
                  title: "ETH/USD",
                },
                {
                  description: "DOT/USD",
                  proName: "BINANCE:DOTUSD",
                },
                {
                  description: "LINK/USD",
                  proName: "KRAKEN:LINKUSD",
                },
                {
                  description: "DOGE/USD",
                  proName: "BINGBON:DOGEUSDT",
                },
              ],
              showSymbolLogo: true,
              colorTheme: "light",
              isTransparent: true,
              displayMode: "regular",
              locale: "uk",
            })}
          </script>
        </Box>
      </Box>
      <Box mb={32} as="section">
        <Box
          maxW="3xl"
          mx="auto"
          px={{ base: "6", lg: "8" }}
          py={{ base: "2", sm: "2" }}
          textAlign="center"
        >
          <Text
            fontWeight="semibold"
            color={useColorModeValue("blue.600", "blue.200")}
          ></Text>
          <Heading
            my="2"
            // w=""
            mb={8}
            as="h1"
            fontSize={{ base: "4xl", md: "8xl" }}
            fontWeight="extrabold"
            letterSpacing="tight"
            lineHeight="1.2"
          >
            Notion Widgets for your{" "}
            <Box
              as="mark"
              bg="unset"
              color={useColorModeValue("blue.600", "blue.200")}
              whiteSpace="nowrap"
              bgGradient="linear(to-l, #7928CA,#FF0080)"
              bgClip="text"
            >
              Crypto Research
            </Box>
          </Heading>
          <Text fontSize="lg" maxW="xl" mx="auto" fontWeight="semibold">
            Up to date crypto price data from all the largest exchanges.{" "}
            <br></br>Never miss a dip.
          </Text>
          <Text mt={4} fontSize="lg" maxW="xl" mx="auto">
            Embed a widget in your Notion document. <b>in 30 seconds.</b>
          </Text>
          <Stack
            direction={{ base: "column", sm: "row" }}
            mt="10"
            justify="center"
            spacing={{ base: "3", md: "5" }}
            maxW="md"
            mx="auto"
          >
            <Button
              as="a"
              // href=""
              size="lg"
              h="16"
              px="10"
              colorScheme="blue"
              fontWeight="bold"
              flex={{ md: "1" }}
              bgGradient="linear(to-r, purple.500,blue.500)"
              onClick={() => scrollMoreDown300()}
            >
              Get started free
            </Button>
          </Stack>
        </Box>
      </Box>
    </>
  );
};
