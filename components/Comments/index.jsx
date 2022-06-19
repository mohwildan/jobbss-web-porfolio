import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Image,
  Input,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
import DeleteToltip from "./DeleteToltip";

const Comments = ({ data }) => {
  const [comments, setComments] = useState("");
  const { data: session, status } = useSession();
  const color = useColorModeValue("#000", "fff");
  const bgColor = useColorModeValue("biru.100", "biru.50");
  const router = useRouter();

  const refres = () => {
    router.replace(router.asPath);
  };

  const handleSumbit = async (e) => {
    e.preventDefault();
    await fetch("api/comments/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: session.user.name,
        email: session.user.email,
        img: session.user.image,
        comments: comments,
      }),
    }).then(() => {
      setComments("");
      refres();
    });
  };
  const handleDelete = async (id) => {
    await fetch(`api/comments/${id}`, {
      method: "DELETE",
    }).then(() => {
      refres();
    });
  };

  return (
    <Box as="section" pt={{base:"12rem", md:"8rem"}}>
      <Flex w="100%" mx="auto" maxW="75rem" flexDir="column" px="1.5rem">
        <form onSubmit={handleSumbit}>
          <Flex flexDir="column">
            <Flex alignItems="center">
              <Image
                src={
                  status === "authenticated"
                    ? session.user.image
                    : "https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
                }
                h="100%"
                border="1px solid"
                borderColor={color}
                rounded="100%"
                w="53px"
                cursor="pointer"
                marginEnd={2}
              />
              <Input
                type="text"
                border="none"
                filter="drop-shadow(1px 3px 4px rgba(0, 0, 0, 0.25))"
                borderBottom="1px solid #A7A7A7"
                onChange={(e) => setComments(e.target.value)}
                disabled={status === "unauthenticated"}
              />
            </Flex>
            <Button
              alignSelf="flex-end"
              bg={bgColor}
              color="white"
              p="1rem 2rem"
              _hover={{ bg: "#4E4FEA" }}
              fontSize={["0.8rem", "0.8rem", "1rem"]}
              my={2}
              type="submit"
              disabled={comments === ""}
            >
              Send
            </Button>
          </Flex>
        </form>

        <Box mt="1rem">
          {data.map((item) => {
            return (
              <Box key={item.id} mb="1.1rem">
                <Flex alignItems="center">
                  <Image
                    src={item.img}
                    h="40px"
                    border="1px solid"
                    borderColor={color}
                    rounded="100%"
                    w="40px"
                    cursor="pointer"
                    marginEnd={3}
                  />
                  <Box mt={2}>
                    <Flex alignItems="center">
                      <Heading
                        as="h4"
                        fontSize={{ md: "0.9rem", lg: "1rem" }}
                        marginEnd={3}
                      >
                        {item.name}
                      </Heading>
                      <DeleteToltip  email={item.email} handleDelete={handleDelete} id={item.id} />
                      <Text
                        color="#AAABB1"
                        fontSize="0.8 rem"
                        fontWeight="400"
                        letterSpacing="5%"
                      >
                        {new Date(item.createAt).toLocaleDateString()}
                      </Text>
                    </Flex>
                    <Box>
                      <Text
                        color="#AAABB1"
                        fontSize="0.7rem"
                        fontWeight="400"
                        letterSpacing="5%"
                      >
                        {item.email}
                      </Text>
                      <Text
                        fontWeight="400"
                        fontSize={{ base: "0.8rem", lg: "1rem" }}
                      >
                        {item.comments}
                      </Text>
                    </Box>
                  </Box>
                </Flex>
              </Box>
            );
          })}
        </Box>
      </Flex>
    </Box>
  );
};

export default Comments;
