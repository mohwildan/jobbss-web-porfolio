import { CloseIcon } from "@chakra-ui/icons";
import { Box, Button, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
import { NavbarTitle } from "./NavbarItem";
import { useSession } from "next-auth/react";
import { motion } from "framer-motion";

const NavbarMobile = ({ click, setClick }) => {
  const closeMenuMobile = () => setClick(false);
  const color = useColorModeValue(
    "var(--chakra-colors-chakra-body-bg)",
    "var(--chakra-colors-gray-800)"
  );
  const colors = useColorModeValue("biru.100", "biru.50");
  const { status } = useSession();

  return (
    <Box
      pos="absolute"
      left={click ? "0" : "-100%"}
      zIndex="1"
      top={0}
      h="100vh"
      w="100%"
      display={["flex", "flex", "none", "none"]}
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      bg={color}
      transition="0.3s"
    >
      <Icon
        position="absolute"
        onClick={closeMenuMobile}
        right="20px"
        top="20px"
        fontSize="1.5rem"
        as={CloseIcon}
      />

      {NavbarTitle.map((item) => {
        return (
          <Link href={item.href} key={item.title}>
            <Text
              mb="3rem"
              fontSize="3xl"
              as={motion.a}
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              mr="2rem"
              onClick={closeMenuMobile}
            >
              {item.title}
            </Text>
          </Link>
        );
      })}
      <Box
        display={["flex", "flex", "none", "none"]}
        justifyContent="center"
        flexDirection="column"
        w="80%"
      >
        <Button
          bg={colors}
          p="1rem"
          _hover={{ bg: "transparent" }}
          fontSize="2xl"
          mb="2rem"
          color="white"
        >
          Browser job
        </Button>
      </Box>
    </Box>
  );
};

export default NavbarMobile;
