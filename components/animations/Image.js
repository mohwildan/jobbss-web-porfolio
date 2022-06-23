import { chakra, shouldForwardProp } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

const StyledImage = chakra(motion.div, {
  shouldForwardProp: (props) => {
    return shouldForwardProp(props) || props === "transition";
  },
});

const ImageSetylde = ({ children, delay = 0 }) => {
  return (
    <StyledImage
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </StyledImage>
  );
};

export default ImageSetylde;
