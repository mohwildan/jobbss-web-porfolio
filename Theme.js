import { extendTheme } from "@chakra-ui/react";


const config = {
  initialColorMode: "dark",
};

const breakpoints = {
  mm: "700px",
};

const colors = {
  biru: {
    50: "#7172D4",
    100: "#3536B9",
  },
};

const Theme = extendTheme({ config, breakpoints, colors });

export default Theme;
