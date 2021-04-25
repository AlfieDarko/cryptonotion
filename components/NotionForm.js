import * as yup from "yup";

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  Select,
  Stack,
  Switch,
  Text,
  VStack,
  chakra,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";

import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Mixpanel } from "../mixpanel";
import copy from "copy-to-clipboard";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { yupResolver } from "@hookform/resolvers/yup";

let schema = yup.object().shape({
  exchange: yup.string().required(),
  ticker_pair_one: yup.string().required(),
  ticker_pair_two: yup.string().required(),
  is_transparent: yup.boolean().oneOf([true, false]),
  dark_mode: yup.boolean().oneOf([true, false]),
});

export const NotionForm = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [widgetUrl, setWidgetUrl] = useState();
  const onSubmit = (e) => {
    console.log(getValues(), errors);
    const {
      exchange,
      ticker_pair_one,
      ticker_pair_two,
      is_transparent,
      dark_mode,
    } = getValues();

    setIsLoading(true);
    setWidgetUrl(
      `${
        window.location.href
      }widget/${exchange}/${ticker_pair_one}${ticker_pair_two}/325/${is_transparent}/${
        dark_mode ? "dark" : "light"
      }`
    );
    copy(
      `${
        window.location.href
      }widget/${exchange}/${ticker_pair_one}${ticker_pair_two}/325/${is_transparent}/${
        dark_mode ? "dark" : "light"
      }`
    );
    Mixpanel.track("Widet Generator Button Click", true);
    setInterval(() => setIsLoading(false), 2500);
  };
  return (
    <>
      <chakra.form onSubmit={handleSubmit(onSubmit)}>
        <Box
          mb={8}
          as="section"
          bg={useColorModeValue("white", "gray.700")}
          maxWidth="3xl"
          mx="auto"
          p={{ base: "6", md: "8" }}
          rounded={{ sm: "lg" }}
          shadow={{ md: "base" }}
        >
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
              my="8"
              as="h2"
              fontSize={{ base: "4xl", md: "6xl" }}
              fontWeight="extrabold"
              letterSpacing="tight"
              lineHeight="1.2"
              bgGradient="linear(to-l, #410a75,#1F0080)"
              bgClip="text"
            >
              1) Pick A Trading Pair
            </Heading>

            <FormControl id="pick-trading-pair" display="flex" flexDir="column">
              <VStack>
                <FormLabel
                  position="absolute"
                  top="-1"
                  insetStart="2"
                  zIndex={2}
                  fontWeight="bold"
                  bg={{
                    base: useColorModeValue("white", "gray.800"),
                    md: useColorModeValue("white", "gray.700"),
                  }}
                  fontSize="sm"
                  fontWeight="bold"
                >
                  Ticker:
                </FormLabel>
                <Input
                  placeholder="BTC"
                  {...register("ticker_pair_one", {
                    required: true,
                    maxLength: 10,
                  })}
                />

                <Select
                  size="sm"
                  fontSize="sm"
                  placeholder="Select Comparison Currency"
                  {...register("ticker_pair_two", { required: true })}
                >
                  <option value="USDT">USDT</option>
                  <option value="USD">USD</option>
                  <option value="BTC">BTC</option>
                  <option value="ETH">ETH</option>
                </Select>
              </VStack>
            </FormControl>
            <Stack
              direction={{ base: "column", sm: "row" }}
              mt="10"
              justify="center"
              spacing={{ base: "3", md: "5" }}
              maxW="md"
              mx="auto"
            ></Stack>
          </Box>
        </Box>

        <Box
          mt={16}
          mb={12}
          as="section"
          bg={useColorModeValue("white", "gray.700")}
          maxWidth="3xl"
          mx="auto"
          p={{ base: "6", md: "8" }}
          rounded={{ sm: "lg" }}
          shadow={{ md: "base" }}
        >
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
              my="8"
              as="h2"
              fontSize={{ base: "4xl", md: "6xl" }}
              fontWeight="extrabold"
              letterSpacing="tight"
              lineHeight="1.2"
              bgGradient="linear(to-l, #410a75,#1F0080)"
              bgClip="text"
            >
              2) Pick An Exchange
            </Heading>

            <FormControl
              id="pick-data-provider"
              display="flex"
              flexDir="column"
            >
              <VStack>
                <FormLabel
                  position="absolute"
                  top="-1"
                  insetStart="2"
                  zIndex={2}
                  fontWeight="bold"
                  bg={{
                    base: useColorModeValue("white", "gray.800"),
                    md: useColorModeValue("white", "gray.700"),
                  }}
                  fontSize="sm"
                >
                  Data Provider:
                </FormLabel>
                <Select
                  placeholder="Select option"
                  {...register("exchange", { required: true })}
                >
                  <option default value="BINANCE">
                    Binance
                  </option>
                  <option value="COINBASE">Coinbase</option>
                  <option value="KUCOIN">Kucoin</option>
                  <option value="GEMINI">Gemini</option>
                  <option value="FTX">FTX</option>
                </Select>
              </VStack>
            </FormControl>
            <Stack
              direction={{ base: "column", sm: "row" }}
              mt="10"
              justify="center"
              spacing={{ base: "3", md: "5" }}
              maxW="md"
              mx="auto"
            ></Stack>
          </Box>
        </Box>

        <Box
          mt={16}
          mb={12}
          as="section"
          bg={useColorModeValue("white", "gray.700")}
          maxWidth="3xl"
          mx="auto"
          p={{ base: "6", md: "8" }}
          rounded={{ sm: "lg" }}
          shadow={{ md: "base" }}
        >
          <Box
            maxW="3xl"
            mx="auto"
            px={{ base: "6", lg: "8" }}
            py={{ base: "2", sm: "2" }}
            textAlign="center"
          >
            <Heading
              my="8"
              as="h2"
              fontSize={{ base: "4xl", md: "6xl" }}
              fontWeight="extrabold"
              letterSpacing="tight"
              lineHeight="1.2"
              bgGradient="linear(to-l, #c53131,#720080)"
              bgClip="text"
            >
              3) Extra Options
            </Heading>

            <FormControl id="pick-options">
              <VStack justifyContent="center">
                <HStack mb={4}>
                  <FormLabel fontWeight="bold">Dark Mode:</FormLabel>
                  <Switch size="lg" {...register("dark_mode")} />
                </HStack>{" "}
                <HStack>
                  <FormLabel fontWeight="bold">Transparent Mode:</FormLabel>
                  <Switch size="lg" {...register("is_transparent")} />
                </HStack>
              </VStack>
            </FormControl>
            <Stack
              direction={{ base: "column", sm: "row" }}
              mt="10"
              justify="center"
              spacing={{ base: "3", md: "5" }}
              maxW="md"
              mx="auto"
            >
              <Button
                // as="a"
                // href="#"
                size="lg"
                h="16"
                px="10"
                colorScheme="blue"
                fontWeight="bold"
                flex={{ md: "1" }}
                type="submit"
                isLoading={isLoading}
                bgGradient="linear(to-r, purple.300,red.200)"
              >
                {widgetUrl
                  ? "Copied to Clipboard! 📋"
                  : "Get Your Widget Link!"}
              </Button>
            </Stack>
            <Box mt={4}>
              {widgetUrl &&
                !isLoading &&
                "Now paste the link as an embed in your Notion Document!"}
            </Box>
            {widgetUrl && !isLoading && (
              <Box mt={4}>
                Or alternatively{" "}
                <Button
                  colorScheme="blue"
                  size="xs"
                  rightIcon={<ArrowForwardIcon />}
                >
                  <a href={widgetUrl}>View My Widget!</a>
                </Button>
              </Box>
            )}
          </Box>
        </Box>
      </chakra.form>
    </>
  );
};
