import { ChakraProvider } from "@chakra-ui/react";
import Theme from "../Theme";
import { SessionProvider } from "next-auth/react";
import Loding from "../components/Loding";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <ChakraProvider theme={Theme}>
        <Loding>
          <Component {...pageProps} />
        </Loding>
      </ChakraProvider>
    </SessionProvider>
  );
}

export default MyApp;
