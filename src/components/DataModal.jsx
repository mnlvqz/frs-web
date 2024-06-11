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
    speed: 8000,
    autoplaySpeed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: "linear",
    adaptiveHeight: true,
  };
  const { isOpen, onOpen, onClose } = useDisclosure();

  console.log(props);

  return (
    <>
      <IconButton
        onClick={onOpen}
        h="100%"
        icon={<Image src={props.previewImg} alt="image" />}
      />
      <Modal isOpen={isOpen} onClose={onClose} size="full">
        <ModalOverlay>
          <Container maxW="100%" h="100vh" padding={0}>
            <Slider {...slickSettings}>
              {props.backgroundImg &&
                props.backgroundImg.length > 0 &&
                props.backgroundImg.map((image, index) => (
                  <Image
                    objectFit="cover"
                    width="100%"
                    height="100vh"
                    key={index}
                    src={image}
                    alt={`image-${index}`}
                  />
                ))}
            </Slider>
          </Container>
        </ModalOverlay>

        <ModalContent bg="transparent">
          <ModalBody maxW="100%" h="100vh">
            <Container onClick={onClose} maxW="100%" h="100vh">
              <Flex height="100%" alignItems="center" justifyContent="center">
                <Stack gap={5} padding={10} bg="rgba(0, 0, 0, 0.5)">
                  <Heading
                    width={{ base: "300px", lg: "400px" }}
                    fontSize={{ base: "3xl", lg: "5xl" }}
                    color="white"
                  >
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
