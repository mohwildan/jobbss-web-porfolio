import { useState } from "react";
import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";

import { NavbarTitle } from "./NavbarItem";
import NavbarMobile from "./NavbarMobile";
import RightNavbar from "./RightNavbar";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const color = useColorModeValue("biru.100", "biru.50");
  const shadow = useColorModeValue("rgba(0, 0, 0, 0.1)", "rgba(255, 255, 255, 0.1)")
   const bgColor = useColorModeValue(
    "var(--chakra-colors-chakra-body-bg)",
    "var(--chakra-colors-gray-800)"
  );

  return (
    <Box
      w="100%"
      h="77px"
      pos="fixed"
      top={0}
      left={0}
      display="flex"
      alignItems="center"
      boxShadow={`0px 1px 0px 1px ${shadow}`}
      bg={bgColor}
      zIndex={99}
      justifyContent="center"
    >
      <Flex
        alignItems="center"
        justify="space-between"
        w="100%"
        maxW="75rem"
        mx="auto"
        px="1.5rem"
      >
        <Link href="/">
          <Text
            as="a"
            fontWeight={700}
            color={color}
            fontSize={["1rem", "1.3rem", "1.5rem"]}
            letterSpacing="1px"
            cursor="pointer"
          >
            Jobbss.
          </Text>
        </Link>
        <Box>
          <Flex alignItems="center">
            {NavbarTitle.map((item) => {
              return (
                <Link href={item.href} key={item.title}>
                  <Text
                    fontSize={["2rem", "1rem"]}
                    fontWeight="normal"
                    mr="0.8rem"
                    cursor="pointer"
                    position="relative"
                    display={["none", "none", "block", "block"]}
                    _before={{
                      content: "''",
                      pos: "absolute",
                      bg: "biru.50",
                      w: "0",
                      h: "3px",
                      bottom: "-30px",
                    }}
                    _hover={{ _before: { w: "100%", transition: "0.3s" } }}
                  >
                    {item.title}
                  </Text>
                </Link>
              );
            })}
          </Flex>
        </Box>
        <NavbarMobile click={click} setClick={setClick} />
        <RightNavbar click={click} setClick={setClick} />
      </Flex>
    </Box>
  );
};

export default Navbar;
