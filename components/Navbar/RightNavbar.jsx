import { MoonIcon, SunIcon,HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Icon,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

import { motion } from "framer-motion";
import ModalButton from "../modalAuth/Modal";
import Profil from "./Profil";

const RightNavbar = ({click, setClick}) => {
  const colorToggle = useColorModeValue("blackAlpha.800", "white");
  

  const { colorMode, toggleColorMode } = useColorMode();
  
  return (
    <Flex alignItems="center">
      <Flex alignItems="center" cursor="pointer" onClick={toggleColorMode}>
        <Button
          as={motion.button}
          whileTap={{ y: -50, opacity: 0 }}
          exit={{ y: 0, opaciy: 1 }}
        >
          {colorMode === "dark" ? <MoonIcon /> : <SunIcon />}
        </Button>
      </Flex>
      <Flex
        ml="1rem"
        flexDir="column"
        display={["flex", "flex", "none", "none"]}
        onClick={() => setClick(!click)}
      >
       <Icon as={HamburgerIcon} fontSize="2.3rem"/>
      </Flex>
      <Box display="flex">
        <ModalButton />        
      </Box>
    </Flex>
  );
};

export default RightNavbar;
