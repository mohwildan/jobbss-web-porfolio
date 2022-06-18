import { useColorModeValue } from "@chakra-ui/react";



export const colorModeValue = () => {
  const color = useColorModeValue("biru.100", "biru.50");
  return color
}

