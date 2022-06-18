import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Card from "../CardComponents/Card";

const PopulerJobs = () => {
  return (
    <Box as="section" h="100vh" pt="8rem">
      <Flex
        alignItems="center"
        flexDirection="column"
        w="100%"
        maxW="75rem"
        mx="auto"
        px="1.5rem"
        as={motion.div}
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring" }}
      >
        <Flex flexDir="column" alignItems="center">
          <Heading
            as="h2"
            letterSpacing="5%"
            fontWeight={400}
            fontSize={[ "1.5rem", "2rem", "2.5rem"]}
            mb="1.6rem"
          >
            Explore popule jobs
          </Heading>
          <Text
            textAlign="center"
            color="#AAABB1"
            letterSpacing="5%"
            fontSize={["1rem", "1.3rem", "1.8rem"]}
          >
            Hireup is a free-of-charge community platfrom tailared to <br /> the
            needs of growth starup
          </Text>
        </Flex>
        <Card />
      </Flex>
    </Box>
  );
};

export default PopulerJobs;
