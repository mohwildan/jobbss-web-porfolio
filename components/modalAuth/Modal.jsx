import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { useSession, signOut } from "next-auth/react";
import React from "react";
import Profil from "../Navbar/Profil";
import ButtonLogin from "./ButtonLogin";

const ModalButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const color = useColorModeValue("biru.100", "biru.50");
  const { status } = useSession();
  return (
    <>
      <Button
        bg="transparent"
        fontWeight="medium"
        _hover={{ bg: "transparent" }}
        fontSize={["0.8rem", "0.8rem", "1rem"]}
        display={["none", "none", "flex", "flex"]}
      >
        Browser job
      </Button>

      {status === "authenticated" ? (
       <Profil />
      ) : (
        <Button
          bg={color}
          color="white"
          p="1rem 2rem"
          _hover={{ bg: "#4E4FEA" }}
          fontSize={["0.8rem", "0.8rem", "1rem"]}
          onClick={onOpen}
          mx={2}
        >
          Login
        </Button>
      )}
       

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Login</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ButtonLogin />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalButton;
