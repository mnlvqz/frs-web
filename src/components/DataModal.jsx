import {
  Center,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  IconButton,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

const DataModal = ({ ...props }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <IconButton
        onClick={onOpen}
        h="100%"
        icon={<Image src={props.imagesrc} alt="Dan Abramov" />}
      />
      <Modal isOpen={isOpen} onClose={onClose} size="full">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody padding={0}>
            <Container maxW="100%" h="100vh" bg="teal" onClick={onClose}>
              <Center h="100%" padding="20">
                <Grid
                  templateColumns={{ base: "1fr", lg: "repeat(5, 1fr)" }}
                  templateRows={{
                    base: "repeat(1, 1fr)",
                    lg: "repeat(8, 1fr)",
                  }}
                  h="100%"
                  w="100%"
                  gap={2}
                >
                  <GridItem colStart={4} rowStart={4} colSpan={2} rowSpan={5}>
                    <Flex
                      h="100%"
                      direction="column"
                      align="left"
                      justify="center"
                      textAlign={{ base: "justify", lg: "justify" }}
                    >
                      <Heading
                        color="white"
                        fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                      >
                        {props.decade}
                      </Heading>
                      <br />
                      <Text
                        fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
                        color="white"
                      >
                        {props.data}
                      </Text>
                    </Flex>
                  </GridItem>
                </Grid>
              </Center>
            </Container>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DataModal;
