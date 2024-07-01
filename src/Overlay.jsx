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
  colors: {
    timberwolf: {
      DEFAULT: "#cdd1cb",
      100: "#282c27",
      200: "#51584e",
      300: "#798374",
      400: "#a3aba0",
      500: "#cdd1cb",
      600: "#d7dbd6",
      700: "#e1e4e0",
      800: "#ebedea",
      900: "#f5f6f5",
    },
    ash_gray: {
      DEFAULT: "#b2bdb8",
      100: "#222825",
      200: "#444f4a",
      300: "#65776f",
      400: "#8a9c94",
      500: "#b2bdb8",
      600: "#c1cac6",
      700: "#d1d8d5",
      800: "#e0e5e3",
      900: "#f0f2f1",
    },
    charcoal: {
      DEFAULT: "#324349",
      100: "#0a0d0f",
      200: "#141b1d",
      300: "#1e282c",
      400: "#28353a",
      500: "#324349",
      600: "#516d77",
      700: "#7595a1",
      800: "#a3b8c0",
      900: "#d1dce0",
    },
    moonstone: {
      DEFAULT: "#4caebd",
      100: "#0e2327",
      200: "#1d474d",
      300: "#2b6a74",
      400: "#398e9b",
      500: "#4caebd",
      600: "#70beca",
      700: "#94ced7",
      800: "#b8dfe5",
      900: "#dbeff2",
    },
    gunmetal: {
      DEFAULT: "#203845",
      100: "#060b0e",
      200: "#0d171c",
      300: "#13222a",
      400: "#1a2d38",
      500: "#203845",
      600: "#3a667e",
      700: "#5792b2",
      800: "#8fb6cc",
      900: "#c7dbe5",
    },
    saffron: {
      100: "#342804",
      200: "#685008",
      300: "#9d780c",
      400: "#d1a010",
      500: "#efbd28", // DEFAULT color
      600: "#f2cb54",
      700: "#f5d87f",
      800: "#f9e5aa",
      900: "#fcf2d4",
    },
  },
  fonts: {
    heading: `WIN95FA, sans-serif`,
    body: `WIN95FA, sans-serif`,
  },
  textStyles: {
    h1: {
      letterSpacing: "10%",
    },
  },
  components: {
    Heading: {
      baseStyle: {
        color: "timberwolf.900",
      },
    },
    Text: {
      baseStyle: {
        color: "timberwolf.800",
      },
    },
  },
});

const Overlay = () => {
  return (
    <ChakraProvider theme={theme}>
      <VStack px={0} py={0} spacing={0}>
        {/* Title */}
        <Box
          width="100%"
          height="calc(100vh / 4 * 4)"
          backgroundPosition="center"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          backgroundImage="/frs-web/assets/images/main/face-01.webp"
        >
          <Center height="100%">
            <Heading
              fontSize={{ base: "6xl", lg: "7xl" }}
              textShadow="4px 4px 0px #4CAEBD"
              letterSpacing={5}
            >
              Sistemas de Reconocimiento Facial
            </Heading>
          </Center>
        </Box>
        {/* Definition */}
        <Box width="100%" height="calc(100vh / 3 * 2)">
          <Stack height="100%" direction="row" spacing={0}>
            <Box
              flex="2"
              height="100%"
              backgroundPosition="center"
              backgroundSize="cover"
              backgroundRepeat="no-repeat"
              backgroundImage="/frs-web/assets/images/main/face-02.webp"
            ></Box>
            <Box flex="1" height="100%" bg="timberwolf.500">
              <Center height="100%">
                <VStack padding={10} spacing={5}>
                  <Heading
                    width="100%"
                    fontSize={{ base: "6xl", lg: "4xl" }}
                    color="gunmetal.500"
                    textShadow="4px 4px 0px #4CAEBD"
                    textAlign="left"
                  >
                    ¿Qué son?
                  </Heading>
                  <Text
                    width="100%"
                    textAlign="justify"
                    color="gunmetal.500"
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
              mainImage="/frs-web/assets/images/main/face-03.webp"
              information={[
                [
                  "1960",
                  "Los inicios de los SRF se remontan a la década de 1960. Producto de las investigaciones de Woody Bledsoe, Helen Chan Wolf y Charles Bisson se consiguió desarrollar el sistema RAND, este empleaba coordenadas introducidas por el usuario para calcular las distancias y proporciones entre los puntos de referencia y los rasgos faciales a identificar.",
                  "/frs-web/assets/images/history/sixties/button_500.png",
                ],
                [
                  "1970",
                  "Para 1970, Jay Goldstein, Leon D. Harmon, y Ann B. Lesk lograron expandir el número de rasgos identificables, características como el color del cabello o el grosor de los labios ahora podían ser identificados. En 1977 Takeo Kanade publicó “Computer Recognition of Human Faces”,  el primer libro sobre reconocimiento facial.",
                  "/frs-web/assets/images/history/seventies/button_500.png",
                ],
                [
                  "1980",
                  "La década de 1980 representó un gran periodo de avance para el desarrollode esta tecnología gracias al exponencial desarrollo de las computadoras. Lawrence Sirovich y Michael Kirby implementaron los principios del álgebra lineal para la identificación de rostros mediante el análisis de componentes principales en 1988.",
                  "/frs-web/assets/images/history/eighties/button_500.png",
                ],
                [
                  "1990",
                  "En 1991 Matthew Turk y Alex Pentland desarrollaran Eigenface, un sistema basado en vectores que empleaba visión computarizada. En 1993 la Agencia de Proyectos de Investigación Avanzados de Defensa (DARPA) y el Instituto Nacional de Estándares y Tecnología (NIST) crearon el programa Tecnología para el Reconocimiento Facial (FERET) con el fin de establecer un mercado del comercial de los SRF.",
                  "/frs-web/assets/images/history/nineties/button_500.png",
                ],
                [
                  "2000",
                  "2001 fue el año en que Paul Viola y Michael Jones desarrollaron el sistema para la detección de objetos Viola-Jones enfocado en rostros. Este sistema, hacía uso de machine learning para detectar en tiempo real las características faciales.",
                  "/frs-web/assets/images/history/thousand/button_500.png",
                ],
                [
                  "Actualidad",
                  "A partir de este punto los SRF comenzaron a ser muchomás eficientes y precisos en razón del uso de redes neuronales convolucionales e inteligencia artificial a la par del creciente poder computacional de los sistemas en los que son implementados.",
                  "/frs-web/assets/images/history/today/button_500.png",
                ],
              ]}
            />
            {/* Methods */}
            <CarouselCard
              title="¿Cómo funcionan?"
              mainImage="/frs-web/assets/images/main/face-04.webp"
              information={[
                [
                  "Locales, holísticos e híbridos",
                  "Los métodos locales, como los patrones binarios locales, se enfocan en rasgos específicos del rostro para el reconocimiento. Por otro lado, los métodos holísticos,como el análisis de componentes principales en 2D, analizan la imagen facial en su totalidad. En cambio, los métodos híbridos, como las técnicas de subespacios probabilísticos locales, combinan tanto características locales como globales del rostro.",
                  "/frs-web/assets/images/techniques/holistic/button_500.png",
                ],
                [
                  "Modelos y apariencia",
                  "Los métodos basados en la apariencia tratan una imagen como un punto en un espacio vectorial de alta dimensión y utilizan técnicas estadísticas, como PLS, para comparar la muestra con prototipos almacenados. Los sistemas basados en modelos, como los modelos de  apariencia activa, buscan modelar un rostro. Estos métodos pueden dividirse en lineales y no lineales, y las técnicas basadas en modelos pueden ser 2D o 3D.",
                  "/frs-web/assets/images/techniques/appearance/button_500.png",
                ],
                [
                  "Geometría y plantillas",
                  "Los métodos basados en la geometría, como la correspondencia elástica de grafos, examinan  los rasgos faciales locales y sus relaciones geométricas. Los métodos basados en plantillas  definen un rostro como una función que se compara con un conjunto de patrones. Estos conjuntos de plantillas pueden construirse utilizando herramientas estadísticas, como los métodos de kernel.",
                  "/frs-web/assets/images/techniques/geometry/button_500.png",
                ],
                [
                  "Correspondencia, estadística y redes neuronales",
                  "Los métodos de correspondencia de modelos representan patrones a través de modelos, píxeles, curvas o texturas. La función de reconocimiento generalmente se basa en una medida de distancia o correlación. En el enfoque estático, los patrones se describen como características mientras que el reconocimiento se realiza mediante una función discriminante. En los enfoques basados en redes neuronales, la representación de patrones puede variar pero siempre hace uso de una función de la red.",
                  "/frs-web/assets/images/techniques/neural/button_500.png",
                ],
              ]}
            />
          </Stack>
        </Box>
        <Box width="100%" height="calc(100vh / 3 * 2)">
          <Stack direction="row" width="100%" height="100%" spacing={0}>
            {/* Applications */}
            <CarouselCard
              title="¿Para qué son utilizados?"
              mainImage="/frs-web/assets/images/main/face-06.webp"
              information={[
                [
                  "Control de espacios",
                  "Los SRF se usan para gestionar el acceso a edificios y áreas restringidas, verificando identidades para mejorar la seguridad.",
                  "",
                ],
                [
                  "Gestión de datos biométricos",
                  "Recopilan y analizan características faciales para crear perfiles únicos, facilitando la administración de bases de datos de identificación y emisión de documentos.",
                ],
                [
                  "Seguridad pública y vigilancia",
                  "Permiten  identificar personas de interés en tiempo real y monitorizar multitudes, ayudando a prevenir delitos.",
                ],
                [
                  "Interfaces de usuario",
                  "Facilitan el desbloqueo de dispositivos y la autenticación de usuarios, proporcionando acceso rápido y seguro a dispositivos y aplicaciones.",
                ],
                [
                  "Mercadotecnia ",
                  "Analizan características faciales para personalizar anuncios y promociones, ajustándose a las preferencias y estados de ánimo de los usuarios.",
                ],
                [
                  "Robótica",
                  "Mejoran la interacción de robots y sistemas automatizados con humanos, permitiéndoles realizar tareas de manera más eficiente en diversos entornos.",
                ],
              ]}
            />
            {/* Concerns */}
            <CarouselCard
              title="¿Cuáles son sus implicaciones?"
              mainImage="/frs-web/assets/images/main/face-05.webp"
              information={[
                [
                  "Privacidad",
                  "El uso extensivo de SRF plantea preocupaciones sobre la privacidad de las personas, ya que implica la recopilación y almacenamiento de datos biométricos sensibles sin el consentimiento adecuado.",
                ],
                [
                  "Vulnerabilidad",
                  "Los datos faciales almacenados pueden ser vulnerables a ciberataques y accesos no autorizados, lo que podría resultar en robos de identidad o abuso de la información personal.",
                ],
                [
                  "Sesgos y discriminación",
                  "Los algoritmos de SRF pueden presentar sesgos raciales y de género, entre otros, lo que puede llevar a discriminación y errores en la identificación, impactando de forma negativa a ciertos grupos demográficos.",
                ],
                [
                  "Transparencia",
                  "A menudo las personas no son conscientes de cómo se están utilizando sus datos faciales, esto plantea problemas éticos sobre el consentimiento y la transparencia en torno al uso de esta tecnología.",
                ],
                [
                  "Vigilancia masiva",
                  "El uso de SRF en espacios públicos puede llevar a una vigilancia masiva, reduciendo la libertad individual creando entornos de monitoreo intrusivos y opresivos.",
                ],
                [
                  "Usos indebidos",
                  "Existen preocupaciones sobre el potencial uso indebido de los SRF por parte de gobiernos y empresas para fines de control social, manipulación o persecución de individuos y grupos específicos.",
                ],
                [
                  "Legislación y regulación insuficiente",
                  "La rápida adopción de SRF a menudo supera el desarrollo de marcos legales y regulaciones adecuadas. Estas lagunas que pueden ser explotadas a la par de generar incertidumbre sobre los derechos de las personas.",
                ],
              ]}
            />
          </Stack>
        </Box>
        {/* Concerns */}
        <Box width="100%" height="calc(100vh / 3 * 2)">
          <Stack height="100%" direction="row" spacing={0}>
            <Box flex="1" height="100%" bg="timberwolf.500">
              <Center height="100%">
                <VStack padding={10} spacing={5}>
                  <Heading
                    width="100%"
                    fontSize={{ base: "6xl", lg: "4xl" }}
                    color="gunmetal.500"
                    textShadow="4px 4px 0px #4CAEBD"
                    textAlign="left"
                  >
                    ¿Y el futuro?
                  </Heading>
                  <Text
                    width="100%"
                    textAlign="justify"
                    color="gunmetal.500"
                    fontSize={{ base: "lg", lg: "xl" }}
                  >
                    La integración de los SRF será cada vez más común y se
                    expandirá a nuevas industrias con diversas aplicaciones.
                    Impulsado por tecnologías como la inteligencia artificial,
                    la biotecnología, la computación en la nube y la robótica,
                    su desarrollo y optimización nos traerán nuevos beneficios.
                    Estas tecnologías mejorarán la eficiencia y capacidad del
                    reconocimiento facial, impactando áreas como la seguridad,
                    la identificación, la atención médica y la logística. Sin
                    embargo, este avance enfrenta grandes desafíos éticos y de
                    privacidad. La regulación y adopción responsable serán clave
                    para garantizar un uso seguro y respetuoso de los derechos
                    en un mundo hiperconectado y digitalizado.
                  </Text>
                </VStack>
              </Center>
            </Box>
            <Box
              flex="2"
              height="100%"
              backgroundPosition="center"
              backgroundSize="cover"
              backgroundRepeat="no-repeat"
              backgroundImage="/frs-web/assets/images/main/face-07.webp"
            ></Box>
          </Stack>
        </Box>
        <Box width="100%" height="calc(100vh / 3 * 2)">
          <Stack direction="row" width="100%" height="100%" spacing={0}>
            {/* Artwork */}
            <CarouselCard
              title="Datascopio"
              mainImage="/frs-web/assets/images/main/face-08.webp"
            />
            {/* Portfolio */}
            <CarouselCard
              title="Autor"
              mainImage="/frs-web/assets/images/main/face-09.webp"
            />
          </Stack>
        </Box>
      </VStack>
    </ChakraProvider>
  );
};

export default Overlay;
