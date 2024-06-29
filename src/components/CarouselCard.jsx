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
          border="4px"
          borderColor="white"
          borderRadius="lg"
        >
          <Grid
            width="100%"
            height="100%"
            templateColumns="repeat(5, 1fr)"
            templateRows="repeat(5, 1fr)"
          >
            <GridItem colStart={1} rowStart={3} colSpan={5}>
              <Center height="100%">
                <Heading textAlign="right">{props.title}</Heading>
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
              border="4px"
              borderColor="white"
              borderRadius="lg"
            >
              <Center height="100%">
                <Stack gap={5}>
                  <Heading textAlign="left">{data[0]}</Heading>
                  <Text width="100%" textAlign="justify">
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
