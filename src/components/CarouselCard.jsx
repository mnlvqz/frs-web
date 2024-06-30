import {
  Box,
  Center,
  Container,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselCard = (props) => {
  const slickSettings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
    adaptiveHeight: true,
    vertical: false,
  };

  return (
    <Box
      width="50%"
      height="100vh"
      paddingLeft={props.pl}
      paddingRight={props.pr}
    >
      <Slider {...slickSettings}>
        <Box
          width="100%"
          height="calc(100vh / 3 * 2)"
          backgroundPosition="center"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          backgroundImage={props.mainImage}
        >
          <Grid
            width="100%"
            height="100%"
            templateColumns="repeat(5, 1fr)"
            templateRows="repeat(5, 1fr)"
          >
            <GridItem colStart={1} rowStart={5} colSpan={5}>
              <Center height="100%">
                <Heading
                  textAlign="left"
                  fontSize={{ base: "2xl", lg: "4xl" }}
                  textShadow="4px 4px 0px #4CAEBD"
                  width="100%"
                  padding={10}
                >
                  {props.title}
                </Heading>
              </Center>
            </GridItem>
          </Grid>
        </Box>

        {props.information &&
          props.information.length > 0 &&
          props.information.map((data, index) => (
            <Box
              key={index}
              width="100%"
              height="calc(100vh / 3 * 2)"
              bg="blue.100"
              padding={10}
              backgroundPosition="center"
              backgroundSize="cover"
              backgroundRepeat="no-repeat"
              backgroundImage={data[2]}
            >
              <Center height="100%">
                <Stack gap={5} bg="moonstone.A">
                  <Heading
                    textAlign="left"
                    fontSize={{ base: "2xl", lg: "4xl" }}
                    color="timberwolf.500"
                  >
                    {data[0]}
                  </Heading>
                  <Text
                    width="100%"
                    textAlign="justify"
                    fontSize={{ base: "lg", lg: "2xl" }}
                    color="timberwolf.500"
                  >
                    {data[1]}
                  </Text>
                </Stack>
              </Center>
            </Box>
          ))}
      </Slider>
    </Box>
  );
};

export default CarouselCard;
