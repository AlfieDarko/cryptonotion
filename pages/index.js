import {
  Box,
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";

import { Frontpage } from "../components/Frontpage";
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/no-danger */
import Head from "next/head";
import { NotionForm } from "../components/NotionForm";
import React from "react";

// import styles from "../styles/Home.module.css";

const SendBTC = () => {
  return (
    <Popover placement="top-start">
      <PopoverTrigger>
        <Button colorScheme="green" size="sm">
          Send Some BTC
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeader fontWeight="semibold">BTC Wallet QR</PopoverHeader>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody>
          <img src="/BTCWalletQR.png" />
          Public Address: <b>bc1q0zzkt46ns07pp5slccf6cdmvfl83urqvp7akc0</b>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

const SendERC20 = () => {
  return (
    <Popover placement="top-start">
      <PopoverTrigger>
        <Button colorScheme="blue" size="sm">
          Send Some ERC-20
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeader fontWeight="semibold">ERC-20 Wallet QR</PopoverHeader>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody>
          <img src="/ERCWalletQR.png" />
          Public Address: <b>0x52Ad0ba59f7aaD966079671e1F4cCa2dDCE0A2a5</b>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
export default function Home() {
  return (
    <div>
      <Frontpage />
      <NotionForm />
      <footer>
        <Box mb={2} display="flex" justifyContent="center">
          <Text fontWeight="semibold" fontSize="xs" textAlign="center">
            Bullishly Made by{" "}
            <a href="https://twitter.com/alfonzomillions">@AlfonzoMillions</a>.
          </Text>
        </Box>
        <Box mb={8} textAlign="center">
          <Text fontWeight="semibold" fontSize="xs" mb={4}>
            If this helped you out, feel free to send beer money! 🍻
          </Text>
          <SendBTC /> || <SendERC20 />
        </Box>
      </footer>
    </div>
  );
}

// ['BINANCE', 'KUCOIN', 'FTX', 'GEMINI', 'BYBIT', 'BITMEX']
