import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Image,
  Input,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { motion } from "framer-motion";
import ImageIcons from "../ImageIcons";

const Hero = () => {
  const color = useColorModeValue("biru.100", "biru.50");
  return (
    <Box as="section" pt={"48"} h="100vh">
      <Flex
        position="relative"
        alignItems="center"
        flexDirection="column"
        w="100%"
        maxW="75rem"
        mx="auto"
        px="1.5rem"
        as={motion.div}
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition="0.6s linier"
      >
      <ImageIcons />
        <Text fontSize={["10px", "13px"]} color={color} mb="1.6rem">
          1000+ job listed here
        </Text>
        <Flex flexDir="column" mb="5rem">
          <Heading
            fontSize={["1.8rem", "2rem", "2.5rem", "3rem"]}
            textAlign="center"
            mb="1.6rem"
            as="h1"
          >
            Job search for people
            <br /> passionate about starup
          </Heading>
          <Text
            color="#AAABB1"
            letterSpacing="5%"
            fontSize={["1rem", "1.3rem", "1.8rem"]}
            textAlign="center"
          >
            Hireup is a job search for people with passionate. Easily & quickly
            Search <br /> thousands jobs from worldwide side scene
          </Text>
        </Flex>
        <Flex w="100%" justifyContent="center" alignItems="center">
          <Box position="relative" w={{ base: "100%", md: "80%", lg: "50%" }}>
            <Icon
              position="absolute"
              color={color}
              top="30%"
              left="5px"
              fontSize="1.5rem"
              as={AiOutlineSearch}
            />
            <Input
              borderRadius="0"
              type="text"
              placeholder="Job title or keyword"
              p="1.844rem"
            />
          </Box>
          <Button
            bg={color}
            borderRadius="0"
            p="1.844rem"
            color="#fff"
            _hover={{ bg: "#4E4FEA" }}
          >
            Search
          </Button>
        </Flex>
        <Text mt="2rem" fontSize="1rem" letterSpacing="5%">
          Partnership with{" "}
          <Box as="span" cursor="pointer" color={color}>
            Glassdoor
          </Box>{" "}
          and{" "}
          <Box as="span" cursor="pointer" color={color}>
            linkedin
          </Box>
        </Text>
      </Flex>
    </Box>
  );
};

export default Hero;
