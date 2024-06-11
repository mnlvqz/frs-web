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
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DataModal = ({ ...props }) => {
  const slickSettings = {
    fade: false,
    dots: false,
    arrows: false,
    infinite: true,
    speed: 4000,
    autoplaySpeed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: "linear",
    adaptiveHeight: true,
  };
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton
        onClick={onOpen}
        h="100%"
        icon={<Image src={props.btnimage} alt="image" boxSize="256px" />}
      />
      <Modal isOpen={isOpen} onClose={onClose} size="full">
        <ModalOverlay>
          <Slider {...slickSettings}></Slider>
        </ModalOverlay>

        <ModalContent bg="transparent">
          <ModalBody padding={0}>
            <Container maxW="100%" h="100vh" onClick={onClose} padding={0}>
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
                        {props.year}
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

          <ModalCloseButton color="white" />
        </ModalContent>
      </Modal>
    </>
  );
};

export default DataModal;
