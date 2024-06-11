import {
  Center,
  ChakraProvider,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Stack,
  Text,
  VStack,
  extendTheme,
} from "@chakra-ui/react";
import React from "react";
import Marquee from "./components/Marquee";
import DataModal from "./components/DataModal";
import Carousel from "./components/Carousel";

const theme = extendTheme({});

const Overlay = () => {
  return (
    <ChakraProvider theme={theme}>
      <VStack spacing={0}>
        {/* Home */}
        <Container maxW="100%" h="100vh" padding={10} bg="teal">
          <Center h="100%">
            <Marquee />
          </Center>
        </Container>

        {/* Introduction */}
        <Container maxW="100%" h="100vh" padding={10} bg="salmon">
          <Flex height="100%" alignItems="center" justifyContent="center">
            <Stack gap={5}>
              <Heading fontSize={{ base: "3xl", lg: "4xl" }} color="white">
                ¿Qué son?
              </Heading>
              <Text
                fontSize={{ base: "xl", lg: "2xl" }}
                textAlign="justify"
                width={{ base: "300px", lg: "400px" }}
                color="white"
              >
                Los Sistemas de Reconocimiento Facial (SRF) son una tecnología
                biométrica que utiliza técnicas y algoritmos de visión
                computarizada para analizar rasgos faciales, comparándolos con
                bases de datos además de modelos preestablecidos, con el fin de
                identificar o verificar la identidad de las personas.
              </Text>
            </Stack>
          </Flex>
        </Container>

        {/* History */}
        <Container
          maxW="100%"
          h={{ base: "none", lg: "100vh" }}
          padding={10}
          bg="orange"
        >
          <Flex
            flexDirection={{ base: "column", lg: "row" }}
            height="100%"
            alignItems="center"
            justifyContent="center"
            gap={{ base: "10", lg: "20" }}
          >
            <Stack gap={5}>
              <Heading fontSize={{ base: "3xl", lg: "4xl" }} color="white">
                ¿Cuál es su historia?
              </Heading>
              <Text
                fontSize={{ base: "xl", lg: "2xl" }}
                textAlign="justify"
                width={{ base: "300px", lg: "400px" }}
                color="white"
              >
                Los Sistemas de Reconocimiento Facial (SRF) son una tecnología
                biométrica que utiliza técnicas y algoritmos de visión
                computarizada para analizar rasgos faciales, comparándolos con
                bases de datos además de modelos preestablecidos, con el fin de
                identificar o verificar la identidad de las personas.
              </Text>
            </Stack>
            <Grid
              templateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
              templateRows={{ base: "repeat(2, 1fr)", lg: "repeat(2, 1fr)" }}
              width={{ base: "300px", lg: "800px" }}
              gap={5}
            >
              <GridItem>
                <DataModal
                  previewImg="./frs-web/assets/images/history/sixties/button_500.png"
                  backgroundImg={[
                    "./frs-web/assets/images/history/sixties/figure_01.png",
                    "./frs-web/assets/images/history/sixties/figure_02.png",
                    "./frs-web/assets/images/history/sixties/figure_03.png",
                  ]}
                  year="1960"
                  data="Los inicios de los SRF se remontan a la década de 1960. 
                  Producto de las investigaciones de Woody Bledsoe, Helen Chan Wolf y Charles Bisson 
                  se consiguió desarrollar el sistema RAND, este empleaba coordenadas introducidas por 
                  el usuario para calcular las distancias y proporciones entre los puntos de referencia y 
                  los rasgos faciales a identificar."
                />
              </GridItem>
              <GridItem>
                <DataModal
                  previewImg="./frs-web/assets/images/history/seventies/button_500.png"
                  backgroundImg={[
                    "./frs-web/assets/images/history/seventies/figure_01.png",
                    "./frs-web/assets/images/history/seventies/figure_02.png",
                    "./frs-web/assets/images/history/seventies/figure_03.png",
                    "./frs-web/assets/images/history/seventies/figure_04.png",
                  ]}
                  year="1970"
                  data="Para 1970, Jay Goldstein, Leon D. Harmon, y Ann B. Lesk lograron expandir el número 
                  de rasgos identificables, características como el color del cabello o el grosor de los labios 
                  ahora podían ser identificados.En 1977 Takeo Kanade publicó “Computer Recognition of Human Faces”, 
                  el primer libro sobre reconocimiento facial."
                />
              </GridItem>
              <GridItem>
                <DataModal
                  previewImg="./frs-web/assets/images/history/eighties/button_500.png"
                  backgroundImg={[
                    "./frs-web/assets/images/history/eighties/figure_01.png",
                    "./frs-web/assets/images/history/eighties/figure_02.png",
                    "./frs-web/assets/images/history/eighties/figure_03.png",
                    "./frs-web/assets/images/history/eighties/figure_04.png",
                    "./frs-web/assets/images/history/eighties/figure_05.png",
                  ]}
                  year="1980"
                  data="La década de 1980 representó un gran periodo de avance para el desarrollo
                  de esta tecnología gracias al exponencial desarrollo de las computadoras. Lawrence
                  Sirovich y Michael Kirby implementaron los principios del álgebra lineal para la
                  identificación de rostros mediante el análisis de componentes principales en 1988."
                />
              </GridItem>
              <GridItem>
                <DataModal
                  previewImg="./frs-web/assets/images/history/nineties/button_500.png"
                  backgroundImg={[
                    "./frs-web/assets/images/history/nineties/figure_01.png",
                    "./frs-web/assets/images/history/nineties/figure_02.png",
                    "./frs-web/assets/images/history/nineties/figure_03.png",
                    "./frs-web/assets/images/history/nineties/figure_04.png",
                  ]}
                  year="1990"
                  data="Este trabajo permitió que en 1991 Matthew Turk y Alex Pentland desarrollaran Eigenface, 
                  un SRF basado en vectores que empleaba visión computarizada. En 1993 la Agencia de Proyectos de 
                  Investigación Avanzados de Defensa (DARPA) y el Instituto Nacional de Estándares y Tecnología (NIST) 
                  crearon el programa Tecnología para el Reconocimiento Facial (FERET) con el fin de establecer 
                  un mercado del comercial de los SRF."
                />
              </GridItem>
              <GridItem>
                <DataModal
                  previewImg="./frs-web/assets/images/history/thousand/button_500.png"
                  backgroundImg={[
                    "./frs-web/assets/images/history/thousand/figure_01.png",
                    "./frs-web/assets/images/history/thousand/figure_02.png",
                  ]}
                  year="2000"
                  data="2001 fue el año en que Paul Viola y Michael Jones desarrollaron el sistema para la 
                  detección de objetos Viola-Jones enfocado en rostros. Este sistema, hacía uso de machine 
                  learning para detectar en tiempo real las características faciales."
                />
              </GridItem>
              <GridItem>
                <DataModal
                  previewImg="./frs-web/assets/images/history/today/button_500.png"
                  backgroundImg={[
                    "./frs-web/assets/images/history/today/figure_01.png",
                    "./frs-web/assets/images/history/today/figure_02.png",
                  ]}
                  year="Hoy"
                  data="A partir de este punto los SRF comenzaron a ser mucho
                  más eficientes y precisos en razón del uso de redes neuronales convolucionales e
                  inteligencia artificial a la par del creciente poder computacional de los sistemas en
                  los que son implementados."
                />
              </GridItem>
            </Grid>
          </Flex>
        </Container>

        {/* Techniques */}
        <Container maxW="100%" h="100vh" padding={10} bg="pink">
          <Grid
            templateColumns={{ base: "1fr", lg: "repeat(5, 1fr)" }}
            templateRows={{ base: "repeat(2, r1fr)", lg: "repeat(1, r1fr)" }}
            gap={5}
          >
            <GridItem colSpan={3}>
              <Center h="100%">
                <Grid
                  templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}
                  templateRows={{
                    base: "repeat(1, 1fr)",
                    lg: "repeat(2, 1fr)",
                  }}
                  gap={5}
                  padding={10}
                >
                  <GridItem>
                    <DataModal
                      previewImg="./frs-web/assets/images/techniques/holistic/button_500.png"
                      year="Locales, holísticos e híbridos"
                      data="Los métodos locales, como los patrones binarios locales, se enfocan en rasgos 
                      específicos del rostro para el reconocimiento. Por otro lado, los métodos holísticos, 
                      como el análisis de componentes principales en 2D, analizan la imagen facial en su totalidad. 
                      En cambio, los métodos híbridos, como las técnicas de subespacios probabilísticos locales, 
                      combinan tanto características locales como globales del rostro."
                    />
                  </GridItem>
                  <GridItem>
                    <DataModal
                      previewImg="./frs-web/assets/images/techniques/appearance/button_500.png"
                      year="Modelos y apariencia"
                      data="Los métodos basados en la apariencia tratan una imagen como un punto en un espacio 
                      vectorial de alta dimensión y utilizan técnicas estadísticas, como PLS, para comparar la 
                      muestra con prototipos almacenados. Los sistemas basados en modelos, como los modelos de 
                      apariencia activa, buscan modelar un rostro. Estos métodos pueden dividirse en lineales y no 
                      lineales, y las técnicas basadas en modelos pueden ser 2D o 3D."
                    />
                  </GridItem>
                  <GridItem>
                    <DataModal
                      previewImg="./frs-web/assets/images/techniques/geometry/button_500.png"
                      year="Geometría y plantillas"
                      data="Los métodos basados en la geometría, como la correspondencia elástica de grafos, examinan 
                      los rasgos faciales locales y sus relaciones geométricas. Los métodos basados en plantillas 
                      definen un rostro como una función que se compara con un conjunto de patrones. Estos conjuntos 
                      de plantillas pueden construirse utilizando herramientas estadísticas, como los métodos de kernel."
                    />
                  </GridItem>
                  <GridItem>
                    <DataModal
                      previewImg="./frs-web/assets/images/techniques/neural/button_500.png"
                      year="Correspondencias, estadísticos y redes neuronales"
                      data="Los métodos de  correspondencia de modelos representan patrones a través de modelos, píxeles, 
                      curvas o texturas. La función de reconocimiento generalmente se basa en una medida de distancia o 
                      correlación. En el enfoque estático, los patrones se describen como características mientras que el 
                      reconocimiento se realiza mediante una función discriminante. En los enfoques basados en redes neuronales, 
                      la representación de patrones puede variar pero siempre hace uso de una función de la red."
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

        {/* Home */}
        <Container maxW="100%" h="100vh" padding={0}>
          <Grid
            templateColumns={{ base: "1fr", lg: "repeat(5, 1fr)" }}
            templateRows={{ base: "repeat(2, r1fr)", lg: "repeat(1, r1fr)" }}
            gap={5}
          >
            TEST
          </Grid>
        </Container>
      </VStack>
    </ChakraProvider>
  );
};

export default Overlay;
