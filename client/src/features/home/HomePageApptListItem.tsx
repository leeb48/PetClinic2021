import {
  Avatar,
  Box,
  Button,
  Center,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

const HomePageApptListItem = () => {
  return (
    <Center py={6}>
      <Box
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"lg"}
        p={6}
        textAlign={"center"}
      >
        <Heading fontSize={"2xl"} fontFamily={"body"}>
          Veterinarian Name
        </Heading>
        <Text fontSize={20} fontWeight={600} color={"gray.200"} mb={4}>
          3:40PM with Owner / Pet Name
        </Text>
        <Text
          textAlign={"center"}
          color={useColorModeValue("gray.600", "gray.300")}
          px={3}
        >
          Reason for visiting. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Libero placeat dicta eligendi ipsa quae laborum!
        </Text>

        <Stack mt={8} direction={"row"} spacing={4}>
          <Button
            flex={1}
            fontSize={"sm"}
            rounded={"full"}
            _focus={{
              bg: "gray.500",
            }}
          >
            Message
          </Button>
          <Button
            flex={1}
            fontSize={"sm"}
            rounded={"full"}
            bg={"blue.400"}
            color={"white"}
            boxShadow={
              "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
            }
            _hover={{
              bg: "blue.500",
            }}
            _focus={{
              bg: "blue.500",
            }}
          >
            View Appointment
          </Button>
        </Stack>
      </Box>
    </Center>
  );
};

export default HomePageApptListItem;
