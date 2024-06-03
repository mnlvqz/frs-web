import {
  ChakraProvider,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  extendTheme,
} from "@chakra-ui/react";
import { Scroll } from "@react-three/drei";
import React from "react";
import Marquee from "./components/Marquee";

const theme = extendTheme({});

const Overlay = () => {
  return (
    <Scroll html style={{ width: "100%" }}>
      <ChakraProvider theme={theme}>
        <Container
          maxW="100%"
          h="100vh"
          display="flex"
          justifyContent="center"
          alignItems="center"
          style={{
            position: "absolute",
            top: `0vh`,
            left: "0vw",
          }}
        >
          <Marquee />
        </Container>
        <Container
          maxW="100%"
          h="100vh"
          display="flex"
          justifyContent="center"
          alignItems="center"
          padding="4"
          style={{
            position: "absolute",
            top: `100vh`,
            left: "0vw",
          }}
        >
          <Grid templateColumns="repeat(2, 1fr)" h="100%" w="100%" gap={6}>
            <GridItem padding="5">
              <Flex
                h="100%"
                direction="column"
                align="left"
                justify="center"
                textAlign="right"
              >
                <Heading
                  color="white"
                  fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                >
                  ¿Qué son los Sistemas de Reconocimiento Facial?
                </Heading>
                <br />
                <Text fontSize={{ base: "md", lg: "lg" }} color="white">
                  Los Sistemas de Reconocimiento Facial (SRF) son una tecnología
                  biométrica que utiliza técnicas y algoritmos de visión
                  computarizada para analizar rasgos faciales, comparándolos con
                  bases de datos y modelos preestablecidos, con el fin de
                  identificar o verificar la identidad de las personas.
                </Text>
                <Text fontSize={{ base: "md", lg: "lg" }} color="white">
                  ¿Sabías qué el Sistema de INTERPOL de reconocimiento facial
                  (IFRS) cuenta con registros faciales de más de 179 países?
                </Text>
              </Flex>
            </GridItem>
            <GridItem bg="white"></GridItem>
          </Grid>
        </Container>
        <Container
          maxW="100%"
          h="100vh"
          display="flex"
          justifyContent="center"
          alignItems="center"
          padding="4"
          style={{
            position: "absolute",
            top: `200vh`,
            left: "0vw",
          }}
        >
          <Grid templateColumns="repeat(2, 1fr)" h="100%" w="100%" gap={6}>
            <GridItem bg="white"></GridItem>
            <GridItem padding="5">
              <Flex
                h="100%"
                direction="column"
                align="left"
                justify="center"
                textAlign="left"
              >
                <Heading
                  color="white"
                  fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                >
                  ¿Cuándo surgieron?
                </Heading>
                <br /> <br />
                <Text fontSize={{ base: "md", lg: "lg" }} color="white">
                  Los inicios de los SRF se remontan a la década de 1960.
                  Producto de las investigaciones de Woody Bledsoe, Helen Chan
                  Wolf y Charles Bisson se consiguió desarrollar el sistema
                  RAND, este empleaba coordenadas introducidas por el usuario
                  para calcular las distancias y proporciones entre los puntos
                  de referencia y los rasgos faciales a identificar.
                  <br /> <br />
                  Para 1970, Jay Goldstein, Leon D. Harmon, y Ann B. Lesk
                  lograron expandir el número de rasgos identificables,
                  características como el color del cabello o el grosor de los
                  labios ahora podían ser identificados. En 1977 Takeo Kanade
                  publicó “Computer Recognition of Human Faces”, el primer libro
                  sobre reconocimiento facial. <br /> <br />
                  La década de 1980 representó un gran periodo de avance para el
                  desarrollo de esta tecnología gracias al exponencial
                  desarrollo de las computadoras. Lawrence Sirovich y Michael
                  Kirby implementaron los principios del álgebra lineal para la
                  identificación de rostros mediante el análisis de componentes
                  principales en 1988.
                </Text>
              </Flex>
            </GridItem>
          </Grid>
        </Container>
        <Container
          maxW="100%"
          h="100vh"
          display="flex"
          justifyContent="center"
          alignItems="center"
          padding="4"
          style={{
            position: "absolute",
            top: `300vh`,
            left: "0vw",
          }}
        >
          <Grid templateColumns="repeat(2, 1fr)" h="100%" w="100%" gap={6}>
            <GridItem bg="white"></GridItem>
            <GridItem padding="5">
              <Flex
                h="100%"
                direction="column"
                align="left"
                justify="center"
                textAlign="left"
              >
                <Text fontSize={{ base: "md", lg: "lg" }} color="white">
                  Estos trabajos permitieron que en 1991 Matthew Turk y Alex
                  Pentland desarrolláran Eigenface, un SRF basado en vectores
                  que empleaba visión computarizada.
                  <br /> <br />
                  En 1993 la Agencia de Proyectos de Investigación Avanzados de
                  Defensa (DARPA) y el Instituto Nacional de Estándares y
                  Tecnología (NIST) crearon el programa Tecnología para el
                  Reconocimiento Facial (FERET) con el fin de establecer un
                  mercado del comercial de los SRF.
                  <br /> <br />
                  2001 fue el año en que Paul Viola y Michael Jones
                  desarrollaron el sistema para la detección de objetos
                  Viola-Jones enfocado en rostros. Este sistema, hacía uso de
                  machine learning para detectar en tiempo real las
                  características faciales. <br /> <br />A partir de este punto
                  los SRF comenzaron a ser mucho más eficientes y precisos en
                  razón del uso de redes neuronales convolucionales e
                  inteligencia artificial a la par del creciente poder
                  computacional de los sistemas en los que son implementados.
                </Text>
              </Flex>
            </GridItem>
          </Grid>
        </Container>
      </ChakraProvider>
    </Scroll>
  );
};

export default Overlay;
