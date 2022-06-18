import { Image, useColorModeValue } from "@chakra-ui/react";
import { useSession, signOut } from "next-auth/react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const Profil = () => {
  const { data: sesion } = useSession();
  const color = useColorModeValue("#000", "fff");
  return (
    <>
      <Menu>
        <MenuButton  as="div">
          <Image
            h="100%"
            ml={2}
            border="1px solid"
            borderColor={color}
            src={sesion.user.image}
            rounded="100%"
            w="40px"
            cursor="pointer"
          />
        </MenuButton>
        <MenuList>
          <MenuItem>{sesion.user.name}</MenuItem>
          <MenuItem onClick={() => signOut()}>Log Out</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

export default Profil;
