import {
  Center,
  ChakraProvider,
  Container,
  Flex,
  Grid,
  GridItem,
  Text,
  VStack,
  extendTheme,
} from "@chakra-ui/react";
import React from "react";
import Marquee from "./components/Marquee";
import DataModal from "./components/DataModal";

const theme = extendTheme({});

const Overlay = () => {
  return (
    <ChakraProvider theme={theme}>
      <VStack spacing={0}>
        {/* Home */}
        <Container maxW="100%" h="100vh" bg="teal">
          <Center h="100%">
            <Marquee />
          </Center>
        </Container>

        {/* Introduction */}
        <Container maxW="100%" h="100vh" padding={50} bg="salmon">
          <Center h="100%">
            <Flex
              h="100%"
              direction="column"
              align="left"
              justify="center"
              textAlign={{ base: "justify", lg: "justify" }}
            >
              <br />
              <Text
                fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
                color="white"
              >
                Los Sistemas de Reconocimiento Facial (SRF) son una tecnología
                biométrica que utiliza técnicas y algoritmos de visión
                computarizada para analizar rasgos faciales, comparándolos con
                bases de datos además de modelos preestablecidos, con el fin de
                identificar o verificar la identidad de las personas.
              </Text>
            </Flex>
          </Center>
        </Container>

        {/* History */}
        <Container maxW="100%" padding={10} bg="orange">
          <Grid
            templateColumns={{ base: "1fr", lg: "repeat(5, 1fr)" }}
            templateRows={{ base: "repeat(2, r1fr)", lg: "repeat(1, r1fr)" }}
            gap={5}
          >
            <GridItem colSpan={2}>
              <Center h="100%">
                <Flex
                  h="100%"
                  direction="column"
                  align="left"
                  justify="center"
                  textAlign={{ base: "justify", lg: "justify" }}
                >
                  <br />
                  <Text
                    fontSize={{ base: "xl", md: "xl", lg: "2xl" }}
                    color="white"
                    padding={10}
                  >
                    Los Sistemas de Reconocimiento Facial (SRF) son una
                    tecnología biométrica que utiliza técnicas y algoritmos de
                    visión computarizada para analizar rasgos faciales,
                    comparándolos con bases de datos además de modelos
                    preestablecidos, con el fin de identificar o verificar la
                    identidad de las personas.
                  </Text>
                </Flex>
              </Center>
            </GridItem>
            <GridItem colSpan={3}>
              <Center h="100%">
                <Grid
                  templateColumns={{ base: "1fr", lg: "repeat(3, 1fr)" }}
                  templateRows={{
                    base: "repeat(1, 1fr)",
                    lg: "repeat(2, 1fr)",
                  }}
                  gap={5}
                  padding={10}
                >
                  <GridItem>
                    <DataModal
                      imagesrc="https://bit.ly/dan-abramov"
                      decade="1960"
                      data="Los inicios de los SRF se remontan a la década de 1960. 
                  Producto de las investigaciones de Woody Bledsoe, Helen Chan Wolf y Charles Bisson 
                  se consiguió desarrollar el sistema RAND, este empleaba coordenadas introducidas por 
                  el usuario para calcular las distancias y proporciones entre los puntos de referencia y 
                  los rasgos faciales a identificar."
                    />
                  </GridItem>
                  <GridItem>
                    <DataModal
                      imagesrc="https://bit.ly/dan-abramov"
                      decade="1970"
                      data="Para 1970, Jay Goldstein, Leon D. Harmon, y Ann B. Lesk lograron expandir el número 
                  de rasgos identificables, características como el color del cabello o el grosor de los labios 
                  ahora podían ser identificados.En 1977 Takeo Kanade publicó “Computer Recognition of Human Faces”, 
                  el primer libro sobre reconocimiento facial."
                    />
                  </GridItem>
                  <GridItem>
                    <DataModal
                      imagesrc="https://bit.ly/dan-abramov"
                      decade="1980"
                      data="La década de 1980 representó un gran periodo de avance para el desarrollo
                  de esta tecnología gracias al exponencial desarrollo de las computadoras. Lawrence
                  Sirovich y Michael Kirby implementaron los principios del álgebra lineal para la
                  identificación de rostros mediante el análisis de componentes principales en 1988."
                    />
                  </GridItem>
                  <GridItem>
                    <DataModal
                      imagesrc="https://bit.ly/dan-abramov"
                      decade="1990"
                      data="Este trabajo permitió que en 1991 Matthew Turk y Alex Pentland desarrollaran Eigenface, 
                  un SRF basado en vectores que empleaba visión computarizada. En 1993 la Agencia de Proyectos de 
                  Investigación Avanzados de Defensa (DARPA) y el Instituto Nacional de Estándares y Tecnología (NIST) 
                  crearon el programa Tecnología para el Reconocimiento Facial (FERET) con el fin de establecer 
                  un mercado del comercial de los SRF."
                    />
                  </GridItem>
                  <GridItem>
                    <DataModal
                      imagesrc="https://bit.ly/dan-abramov"
                      decade="2000"
                      data="2001 fue el año en que Paul Viola y Michael Jones desarrollaron el sistema para la 
                  detección de objetos Viola-Jones enfocado en rostros. Este sistema, hacía uso de machine 
                  learning para detectar en tiempo real las características faciales."
                    />
                  </GridItem>
                  <GridItem>
                    <DataModal
                      imagesrc="https://bit.ly/dan-abramov"
                      decade="Hoy"
                      data="A partir de este punto los SRF comenzaron a ser mucho
                  más eficientes y precisos en razón del uso de redes neuronales convolucionales e
                  inteligencia artificial a la par del creciente poder computacional de los sistemas en
                  los que son implementados."
                    />
                  </GridItem>
                </Grid>
              </Center>
            </GridItem>
          </Grid>
        </Container>

        {/* Techniques */}
        <Container maxW="100%" padding={10} bg="purple">
          <Grid
            templateColumns={{ base: "1fr", lg: "repeat(5, 1fr)" }}
            templateRows={{ base: "repeat(2, r1fr)", lg: "repeat(1, r1fr)" }}
            gap={5}
          >
            <GridItem colSpan={3}>
              <Center h="100%">
                <Grid
                  templateColumns={{ base: "1fr", lg: "repeat(3, 1fr)" }}
                  templateRows={{
                    base: "repeat(1, 1fr)",
                    lg: "repeat(2, 1fr)",
                  }}
                  gap={5}
                  padding={10}
                >
                  <GridItem>
                    <DataModal
                      imagesrc="https://bit.ly/dan-abramov"
                      decade="1960"
                      data="Los inicios de los SRF se remontan a la década de 1960. 
                  Producto de las investigaciones de Woody Bledsoe, Helen Chan Wolf y Charles Bisson 
                  se consiguió desarrollar el sistema RAND, este empleaba coordenadas introducidas por 
                  el usuario para calcular las distancias y proporciones entre los puntos de referencia y 
                  los rasgos faciales a identificar."
                    />
                  </GridItem>
                  <GridItem>
                    <DataModal
                      imagesrc="https://bit.ly/dan-abramov"
                      decade="1970"
                      data="Para 1970, Jay Goldstein, Leon D. Harmon, y Ann B. Lesk lograron expandir el número 
                  de rasgos identificables, características como el color del cabello o el grosor de los labios 
                  ahora podían ser identificados.En 1977 Takeo Kanade publicó “Computer Recognition of Human Faces”, 
                  el primer libro sobre reconocimiento facial."
                    />
                  </GridItem>
                  <GridItem>
                    <DataModal
                      imagesrc="https://bit.ly/dan-abramov"
                      decade="1980"
                      data="La década de 1980 representó un gran periodo de avance para el desarrollo
                  de esta tecnología gracias al exponencial desarrollo de las computadoras. Lawrence
                  Sirovich y Michael Kirby implementaron los principios del álgebra lineal para la
                  identificación de rostros mediante el análisis de componentes principales en 1988."
                    />
                  </GridItem>
                  <GridItem>
                    <DataModal
                      imagesrc="https://bit.ly/dan-abramov"
                      decade="1990"
                      data="Este trabajo permitió que en 1991 Matthew Turk y Alex Pentland desarrollaran Eigenface, 
                  un SRF basado en vectores que empleaba visión computarizada. En 1993 la Agencia de Proyectos de 
                  Investigación Avanzados de Defensa (DARPA) y el Instituto Nacional de Estándares y Tecnología (NIST) 
                  crearon el programa Tecnología para el Reconocimiento Facial (FERET) con el fin de establecer 
                  un mercado del comercial de los SRF."
                    />
                  </GridItem>
                  <GridItem>
                    <DataModal
                      imagesrc="https://bit.ly/dan-abramov"
                      decade="2000"
                      data="2001 fue el año en que Paul Viola y Michael Jones desarrollaron el sistema para la 
                  detección de objetos Viola-Jones enfocado en rostros. Este sistema, hacía uso de machine 
                  learning para detectar en tiempo real las características faciales."
                    />
                  </GridItem>
                  <GridItem>
                    <DataModal
                      imagesrc="https://bit.ly/dan-abramov"
                      decade="Hoy"
                      data="A partir de este punto los SRF comenzaron a ser mucho
                  más eficientes y precisos en razón del uso de redes neuronales convolucionales e
                  inteligencia artificial a la par del creciente poder computacional de los sistemas en
                  los que son implementados."
                    />
                  </GridItem>
                </Grid>
              </Center>
            </GridItem>
            <GridItem colSpan={2}>
              <Center h="100%">
                <Flex
                  h="100%"
                  direction="column"
                  align="left"
                  justify="center"
                  textAlign={{ base: "justify", lg: "justify" }}
                >
                  <br />
                  <Text
                    fontSize={{ base: "xl", md: "xl", lg: "2xl" }}
                    color="white"
                    padding={10}
                  >
                    Para la computación el reconocimiento facial no es una tarea
                    sencilla, representa un reto con alto nivel de complejidad
                    en razón de su funcionalidad y eficiencia. Por este motivo
                    existen múltiples enfoques y algoritmos que abordan el
                    problema que supone el identificar los rasgos faciales.
                  </Text>
                </Flex>
              </Center>
            </GridItem>
          </Grid>
        </Container>
      </VStack>
    </ChakraProvider>
  );
};

export default Overlay;
