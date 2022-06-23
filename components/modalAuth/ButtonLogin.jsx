import { Button, Flex, Image } from "@chakra-ui/react";
import { signIn} from "next-auth/react"
// import googleLogin from '/goggle-login.png'

const ButtonLogin = () => {
  return (
    <>
      <Flex flexDirection="column" p={10}>
        <Button onClick={() => signIn("google")} marginBottom={2}><Image marginEnd={3} src="/goggle-login.png" w="2rem" h="2rem"/>Google</Button>
        <Button onClick={() => signIn("github")}><Image marginEnd={3} src="/github-login.png" w="2rem" h="2rem"/>Github</Button>
      </Flex>
    </>
  );
};

export default ButtonLogin;
