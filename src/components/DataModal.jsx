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
  Stack,
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
        icon={<Image src={props.previewImg} alt="image" />}
      />
      <Modal isOpen={isOpen} onClose={onClose} size="full">
        <ModalOverlay>
          <Container maxW="100%" h="100vh">
            <Slider {...slickSettings}></Slider>
          </Container>
        </ModalOverlay>

        <ModalContent bg="transparent">
          <ModalBody maxW="100%" h="100vh">
            <Container maxW="100%" h="100vh" onClick={onClose}>
              <Flex height="100%" alignItems="center" justifyContent="center">
                <Stack gap={5}>
                  <Heading fontSize={{ base: "3xl", lg: "4xl" }} color="white">
                    {props.year}
                  </Heading>
                  <Text
                    fontSize={{ base: "xl", lg: "2xl" }}
                    textAlign="justify"
                    width={{ base: "300px", lg: "400px" }}
                    color="white"
                  >
                    {props.data}
                  </Text>
                </Stack>
              </Flex>
            </Container>
          </ModalBody>
          <ModalCloseButton color="white" />
        </ModalContent>
      </Modal>
    </>
  );
};

export default DataModal;
