import { chakra, shouldForwardProp } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: (props) => {
    return shouldForwardProp(props) || props === "transition";
  },
});

const Sections = ({ children, delay = 0 }) => {
  return (
    <StyledDiv
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </StyledDiv>
  );
};

export default Sections;
