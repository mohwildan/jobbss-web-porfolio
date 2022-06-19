import {
  Button,
  Icon,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { BsThreeDots } from "react-icons/bs";

const DeleteToltip = ({ id, handleDelete, email }) => {
  const { data: session } = useSession();

  return (
    <>
      <Popover>
        <PopoverTrigger>
          <Button
            
            _active={{ bg: "transparent" }}
            bg="transparent"
            _hover={{ bg: "transparent" }}
          >
            <Icon as={BsThreeDots} />
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>Are you sure you want to Delete?</PopoverHeader>
          <PopoverBody>
            {session?.user.email === email ? (
              <Button onClick={() => handleDelete(id)} bg="red.700" _hover={{ bg: "red.600" }} color="white">
                Delete
              </Button>
            ): (
              <Button  bg="blue.700" _hover={{ bg: "blue.600" }} color="white">
                Follow
              </Button>
            )}
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default DeleteToltip;
