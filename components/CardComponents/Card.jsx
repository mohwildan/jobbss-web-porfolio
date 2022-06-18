import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { CardList } from "./CardList";

const Card = () => {
  return (
    <Flex
      w="100%"
      alignItems="center"
      flexDir={{ base: "column", md: "row", lg: "row" }}
      justifyContent="center"
      mt="4rem"
      cursor="pointer"
    >
      {CardList.map((item, i) => {
        return (
          <Box
            mr={{ base: 0, md: "2rem", lg: "2rem" }}
            mb={{ base: "1rem" }}
            w={{ base: "100%", md: "20rem" }}
            h="15rem"
            bg="biru.50"
            key={i}
            p="0.5rem"
            borderRadius="base"
            color="white"
            _hover={{bg: "biru.100"}}
            transition="0.3s"
          >
            <Flex justifyContent="space-between">
              <Flex alignItems="center">
                <Image
                  marginEnd={3}
                  rounded="100%"
                  w={i === 2 ? "2rem" : "3rem"}
                  src={item.img}
                />
                <Flex flexDir="column">
                  <Heading as="h4" fontWeight={600} fontSize="1rem">
                    {item.name}
                  </Heading>
                  <Text fontSize="0.7rem">{item.time}</Text>
                </Flex>
              </Flex>
              <Button size={{base: "md" , md:"xs"}} bg="#E1C60B">{item.job}</Button>
            </Flex>
            <Flex alignItems="center" justifyContent="center" flexDir="column" mt="1rem">
              <Heading
                as="h3"
                fontWeight="400"
                fontSize={{ base: "1.5rem", md: "1.3rem", lg: "1.5rem" }}
                textAlign="center"
              >
                {item.status}
              </Heading>
              <Box w="80%" bg="#D9D9D9" h={3} mt="1.5rem" borderRadius="5px">
                  <Box h="100%" w={item.bar} bg="#33CE6E" borderRadius="5px"></Box>
                  <Text textAlign="center" fontSize="0.8rem" mt="1.3rem">{item.appline}</Text>
              </Box>
            </Flex>
          </Box>
        );
      })}
    </Flex>
  );
};

export default Card;
