import { Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

const ApplicationCard = ({ ...props }) => {
  return (
    <Flex
      flexDirection="row"
      height="100%"
      alignItems="center"
      justifyContent="center"
      gap={{ base: "5", lg: "10" }}
    >
      <Image
        src={props.icon}
        alt="image"
        boxSize={{ base: "80px", lg: "60px" }}
      />
      <Stack>
        <Heading
          fontSize={{ base: "md", lg: "xl" }}
          textAlign="left"
          color="white"
        >
          {props.title}
        </Heading>
        <Text
          fontSize={{ base: "xs", lg: "sm" }}
          textAlign="justify"
          color="white"
        >
          {props.text}
        </Text>
      </Stack>
    </Flex>
  );
};

export default ApplicationCard;
