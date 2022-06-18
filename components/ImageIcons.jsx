import { Image } from "@chakra-ui/react";
import { motion } from "framer-motion";


const ImageIcons = () => {
  return (
    <>
      <Image
      as={motion.img}
        w={["80px", "90px", "100px", "120px"]}
        position="absolute"
        left="0"
        top="-50px"
        src="/image 3.png"
      
      />
      <Image
        w={["50px", "70px", "80px", "85px"]}
        position="absolute"
        right="0"
        top="-15px"
        src="/image 2.png"
      />
      <Image
        w={["50px", "70px", "80px", "85px"]}
        position="absolute"
        right="50px"
        bottom="-80px"
        src="/image 5.png"
      />
      <Image
        w={["50px", "60px", "70px", "80px"]}
        position="absolute"
        left="50px"
        bottom="-80px"
        src="/image 4.png"
      />
    </>
  );
};

export default ImageIcons;
