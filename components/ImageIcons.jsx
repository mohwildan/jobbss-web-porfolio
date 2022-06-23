import { Image } from "@chakra-ui/react";
import ImageSetylde from "./animations/Image";

const ImageIcons = () => {
  return (
    <>
      <ImageSetylde delay={1}>
        <Image
          w={["80px", "90px", "100px", "120px"]}
          position="absolute"
          left="0"
          top="-50px"
          src="/image 3.png"
        />
      </ImageSetylde>
      <ImageSetylde delay={2}>
        <Image
          w={["50px", "70px", "80px", "85px"]}
          position="absolute"
          right="0"
          top="-15px"
          src="/image 2.png"
        />
      </ImageSetylde>
      <ImageSetylde delay={1.5}>
        <Image
          w={["50px", "70px", "80px", "85px"]}
          position="absolute"
          right="50px"
          bottom="-80px"
          src="/image 5.png"
        />
      </ImageSetylde>
      <ImageSetylde delay={2.5}>
        <Image
          w={["50px", "60px", "70px", "80px"]}
          position="absolute"
          left="50px"
          bottom="-80px"
          src="/image 4.png"
        />
      </ImageSetylde>
    </>
  );
};

export default ImageIcons;
