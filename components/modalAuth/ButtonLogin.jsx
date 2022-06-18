import { Button, Flex } from "@chakra-ui/react";
import { signIn} from "next-auth/react"

const ButtonLogin = () => {
  return (
    <>
      <Flex flexDirection="column" p={10}>
        <Button onClick={() => signIn("google")} marginBottom={2}>Google</Button>
        <Button onClick={() => signIn("github")}>Github</Button>
      </Flex>
    </>
  );
};

export default ButtonLogin;
