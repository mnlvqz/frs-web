import {
  AbsoluteCenter,
  Box,
  Center,
  ChakraProvider,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Spacer,
  Stack,
  Text,
  VStack,
  Wrap,
  WrapItem,
  extendTheme,
} from "@chakra-ui/react";
import React from "react";
import CarouselCard from "./components/CarouselCard";
import "@fontsource/win95fa";

const theme = extendTheme({
  fonts: {
    heading: `WIN95FA, sans-serif`,
    body: `WIN95FA, sans-serif`,
  },
  components: {
    Heading: {
      baseStyle: {
        color: "gray.200",
      },
    },
    Text: {
      baseStyle: {
        color: "gray.200",
      },
    },
  },
});

const Overlay = () => {
  return (
    <ChakraProvider theme={theme}>
      <VStack px={32} py={10} spacing={10}>
        {/* Title */}
        <Box
          width="100%"
          height="100vh"
          border="4px"
          borderColor="white"
          backgroundPosition="center"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          backgroundImage="/frs-web/assets/images/main/cover.webp"
        >
          <Center height="100%">
            <Heading fontSize={{ base: "6xl", lg: "6xl" }} color="white">
              Sistemas de Reconocimiento Facial
            </Heading>
          </Center>
        </Box>
        {/* Definition */}
        <Box
          width="100%"
          height="calc(100vh / 3 * 2)"
          border="4px"
          borderColor="white"
          borderRadius="lg"
        >
          <Stack height="100%" direction="row" spacing={0}>
            <Box flex="2" height="100%"></Box>
            <Box flex="1" height="100%" bg="gray.700">
              <Center height="100%">
                <VStack padding={10} spacing={5}>
                  <Heading width="100%" textAlign="left">
                    ¿Qué son?
                  </Heading>
                  <Text
                    width="100%"
                    textAlign="justify"
                    fontSize={{ base: "lg", lg: "2xl" }}
                  >
                    Los Sistemas de Reconocimiento Facial (SRF) son una
                    tecnología biométrica que utiliza técnicas y algoritmos de
                    visión computarizada para analizar rasgos faciales,
                    comparándolos con bases de datos además de modelos
                    preestablecidos, con el fin de identificar o verificar la
                    identidad de las personas
                  </Text>
                </VStack>
              </Center>
            </Box>
          </Stack>
        </Box>
        <Box width="100%" height="calc(100vh / 3 * 2)">
          <Stack direction="row" width="100%" height="100%" spacing={0}>
            {/* History */}
            <CarouselCard
              title="¿Cuál es su historia?"
              information={[
                [
                  "1960",
                  "Los inicios de los SRF se remontan a la década de 1960. Producto de las investigaciones de Woody Bledsoe, Helen Chan Wolf y Charles Bisson se consiguió desarrollar el sistema RAND, este empleaba coordenadas introducidas por el usuario para calcular las distancias y proporciones entre los puntos de referencia y los rasgos faciales a identificar.",
                  "./frs-web/assets/images/history/sixties/button_500.png",
                ],
                [
                  "1970",
                  "Para 1970, Jay Goldstein, Leon D. Harmon, y Ann B. Lesk lograron expandir el número de rasgos identificables, características como el color del cabello o el grosor de los labios ahora podían ser identificados. En 1977 Takeo Kanade publicó “Computer Recognition of Human Faces”,  el primer libro sobre reconocimiento facial.",
                  "./frs-web/assets/images/history/seventies/button_500.png",
                ],
                [
                  "1980",
                  "La década de 1980 representó un gran periodo de avance para el desarrollode esta tecnología gracias al exponencial desarrollo de las computadoras. Lawrence Sirovich y Michael Kirby implementaron los principios del álgebra lineal para la identificación de rostros mediante el análisis de componentes principales en 1988.",
                  "./frs-web/assets/images/history/eighties/button_500.png",
                ],
                [
                  "1990",
                  "Este trabajo permitió que en 1991 Matthew Turk y Alex Pentland desarrollaran Eigenface, un SRF basado en vectores que empleaba visión computarizada. En 1993 la Agencia de Proyectos de Investigación Avanzados de Defensa (DARPA) y el Instituto Nacional de Estándares y Tecnología (NIST) crearon el programa Tecnología para el Reconocimiento Facial (FERET) con el fin de establecer un mercado del comercial de los SRF.",
                  "./frs-web/assets/images/history/nineties/button_500.png",
                ],
                [
                  "2000",
                  "2001 fue el año en que Paul Viola y Michael Jones desarrollaron el sistema para la detección de objetos Viola-Jones enfocado en rostros. Este sistema, hacía uso de machine learning para detectar en tiempo real las características faciales.",
                  "./frs-web/assets/images/history/thousand/button_500.png",
                ],
                [
                  "Actualidad",
                  "A partir de este punto los SRF comenzaron a ser muchomás eficientes y precisos en razón del uso de redes neuronales convolucionales e inteligencia artificial a la par del creciente poder computacional de los sistemas en los que son implementados.",
                  "./frs-web/assets/images/history/today/button_500.png",
                ],
              ]}
              pr="5"
            />
            {/* Methods */}
            <CarouselCard
              title="¿Cómo funcionan?"
              information={[
                [
                  "Locales, holísticos e híbridos",
                  "Los métodos locales, como los patrones binarios locales, se enfocan en rasgos específicos del rostro para el reconocimiento. Por otro lado, los métodos holísticos,como el análisis de componentes principales en 2D, analizan la imagen facial en su totalidad. En cambio, los métodos híbridos, como las técnicas de subespacios probabilísticos locales, combinan tanto características locales como globales del rostro.",
                ],
                [
                  "Modelos y apariencia",
                  "Los métodos basados en la apariencia tratan una imagen como un punto en un espacio vectorial de alta dimensión y utilizan técnicas estadísticas, como PLS, para comparar la muestra con prototipos almacenados. Los sistemas basados en modelos, como los modelos de  apariencia activa, buscan modelar un rostro. Estos métodos pueden dividirse en lineales y no lineales, y las técnicas basadas en modelos pueden ser 2D o 3D.",
                ],
                [
                  "Geometría y plantillas",

                  "Los métodos basados en la geometría, como la correspondencia elástica de grafos, examinan  los rasgos faciales locales y sus relaciones geométricas. Los métodos basados en plantillas  definen un rostro como una función que se compara con un conjunto de patrones. Estos conjuntos de plantillas pueden construirse utilizando herramientas estadísticas, como los métodos de kernel.",
                ],
                [
                  "Correspondencia, estadística y redes neuronales",
                  "Los métodos de correspondencia de modelos representan patrones a través de modelos, píxeles, curvas o texturas. La función de reconocimiento generalmente se basa en una medida de distancia o correlación. En el enfoque estático, los patrones se describen como características mientras que el reconocimiento se realiza mediante una función discriminante. En los enfoques basados en redes neuronales, la representación de patrones puede variar pero siempre hace uso de una función de la red.",
                ],
              ]}
              pl="5"
            />
          </Stack>
        </Box>
        <Box width="100%" height="calc(100vh / 3 * 2)">
          <Stack direction="row" width="100%" height="100%" spacing={0}>
            {/* Applications */}
            <CarouselCard
              title="¿En dónde son utilizados?"
              mainImage=""
              information={[
                [
                  "1960",
                  "Los inicios de los SRF se remontan a la década de 1960. Producto de las investigaciones de Woody Bledsoe, Helen Chan Wolf y Charles Bisson se consiguió desarrollar el sistema RAND, este empleaba coordenadas introducidas por el usuario para calcular las distancias y proporciones entre los puntos de referencia y los rasgos faciales a identificar.",
                  "",
                ],
                [
                  "1970",
                  "Para 1970, Jay Goldstein, Leon D. Harmon, y Ann B. Lesk lograron expandir el número de rasgos identificables, características como el color del cabello o el grosor de los labios ahora podían ser identificados. En 1977 Takeo Kanade publicó “Computer Recognition of Human Faces”,  el primer libro sobre reconocimiento facial.",
                ],
                [
                  "1980",
                  "La década de 1980 representó un gran periodo de avance para el desarrollode esta tecnología gracias al exponencial desarrollo de las computadoras. Lawrence Sirovich y Michael Kirby implementaron los principios del álgebra lineal para la identificación de rostros mediante el análisis de componentes principales en 1988.",
                ],
                [
                  "1990",
                  "Este trabajo permitió que en 1991 Matthew Turk y Alex Pentland desarrollaran Eigenface, un SRF basado en vectores que empleaba visión computarizada. En 1993 la Agencia de Proyectos de Investigación Avanzados de Defensa (DARPA) y el Instituto Nacional de Estándares y Tecnología (NIST) crearon el programa Tecnología para el Reconocimiento Facial (FERET) con el fin de establecer un mercado del comercial de los SRF.",
                ],
                [
                  "2000",
                  "2001 fue el año en que Paul Viola y Michael Jones desarrollaron el sistema para la detección de objetos Viola-Jones enfocado en rostros. Este sistema, hacía uso de machine learning para detectar en tiempo real las características faciales.",
                ],
                [
                  "Actualidad",
                  "A partir de este punto los SRF comenzaron a ser muchomás eficientes y precisos en razón del uso de redes neuronales convolucionales e inteligencia artificial a la par del creciente poder computacional de los sistemas en los que son implementados.",
                ],
              ]}
              pr="5"
            />
            {/* Concerns */}
            <CarouselCard
              title="
                    ¿Cuáles son sus implicaciones?"
              information={[
                [
                  "1960",
                  "Los inicios de los SRF se remontan a la década de 1960. Producto de las investigaciones de Woody Bledsoe, Helen Chan Wolf y Charles Bisson se consiguió desarrollar el sistema RAND, este empleaba coordenadas introducidas por el usuario para calcular las distancias y proporciones entre los puntos de referencia y los rasgos faciales a identificar.",
                ],
                [
                  "1970",
                  "Para 1970, Jay Goldstein, Leon D. Harmon, y Ann B. Lesk lograron expandir el número de rasgos identificables, características como el color del cabello o el grosor de los labios ahora podían ser identificados. En 1977 Takeo Kanade publicó “Computer Recognition of Human Faces”,  el primer libro sobre reconocimiento facial.",
                ],
                [
                  "1980",
                  "La década de 1980 representó un gran periodo de avance para el desarrollode esta tecnología gracias al exponencial desarrollo de las computadoras. Lawrence Sirovich y Michael Kirby implementaron los principios del álgebra lineal para la identificación de rostros mediante el análisis de componentes principales en 1988.",
                ],
                [
                  "1990",
                  "Este trabajo permitió que en 1991 Matthew Turk y Alex Pentland desarrollaran Eigenface, un SRF basado en vectores que empleaba visión computarizada. En 1993 la Agencia de Proyectos de Investigación Avanzados de Defensa (DARPA) y el Instituto Nacional de Estándares y Tecnología (NIST) crearon el programa Tecnología para el Reconocimiento Facial (FERET) con el fin de establecer un mercado del comercial de los SRF.",
                ],
                [
                  "2000",
                  "2001 fue el año en que Paul Viola y Michael Jones desarrollaron el sistema para la detección de objetos Viola-Jones enfocado en rostros. Este sistema, hacía uso de machine learning para detectar en tiempo real las características faciales.",
                ],
                [
                  "Actualidad",
                  "A partir de este punto los SRF comenzaron a ser muchomás eficientes y precisos en razón del uso de redes neuronales convolucionales e inteligencia artificial a la par del creciente poder computacional de los sistemas en los que son implementados.",
                ],
              ]}
              pl="5"
            />
          </Stack>
        </Box>
        {/* Concerns */}
        <Box
          width="100%"
          height="calc(100vh / 3 * 2)"
          border="4px"
          borderColor="white"
          borderRadius="lg"
        >
          <Stack height="100%" direction="row" spacing={0}>
            <Box flex="1" height="100%" bg="gray.700">
              <Center height="100%">
                <VStack padding={10} spacing={5}>
                  <Heading width="100%" textAlign="left">
                    ¿Cuáles son sus implicaciones?
                  </Heading>
                  <Text width="100%" textAlign="justify">
                    Los Sistemas de Reconocimiento Facial (SRF) son una
                    tecnología biométrica que utiliza técnicas y algoritmos de
                    visión computarizada para analizar rasgos faciales,
                    comparándolos con bases de datos además de modelos
                    preestablecidos, con el fin de identificar o verificar la
                    identidad de las personas
                  </Text>
                </VStack>
              </Center>
            </Box>
            <Box flex="2" height="100%" bg="white"></Box>
          </Stack>
        </Box>
        <Box width="100%" height="calc(100vh / 3 * 2)">
          <Stack direction="row" width="100%" height="100%" spacing={0}>
            {/* Artwork */}
            <CarouselCard title="Obra" pr="5" />
            {/* Portfolio */}
            <CarouselCard title="Artista" pl="5" />
          </Stack>
        </Box>
      </VStack>
    </ChakraProvider>
  );
};

export default Overlay;
