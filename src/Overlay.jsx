import {
  Box,
  Center,
  ChakraProvider,
  Container,
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
  VStack,
  extendTheme,
} from "@chakra-ui/react";
import React from "react";
import Marquee from "./components/Marquee";
import DataModal from "./components/DataModal";
import ApplicationCard from "./components/ApplicationCard";
import "@fontsource/ibm-plex-mono";

const theme = extendTheme({
  fonts: {
    heading: `'Courier Prime', monospace`,
    body: `'Courier Prime', monospace`,
  },
});

const Overlay = () => {
  return (
    <ChakraProvider theme={theme}>
      <VStack spacing={0}>
        {/* Home */}
        <Container maxW="100%" h="100vh">
          <Flex
            height="100%"
            flexDirection={{ base: "column", lg: "row" }}
            alignItems="center"
            justifyContent="center"
            gap={{ base: "5", lg: "20" }}
          >
            <Stack gap={4}>
              <Heading
                fontSize={{ base: "4xl", lg: "7xl" }}
                width={{ base: "300px", lg: "400px" }}
                color="white"
              >
                Sistemas de Reconocimiento Facial
              </Heading>
            </Stack>

            <Box width="750px" display={{ base: "none", lg: "block" }} />
          </Flex>
        </Container>

        {/* Introduction */}
        <Container maxW="100%" h="100vh">
          <Flex
            height="100%"
            flexDirection={{ base: "column", lg: "row" }}
            alignItems="center"
            justifyContent="center"
            gap={{ base: "5", lg: "20" }}
          >
            <Stack gap={4}>
              <Heading fontSize={{ base: "2xl", lg: "3xl" }} color="white">
                ¿Qué son?
              </Heading>
              <Text
                fontSize={{ base: "lg", lg: "xl" }}
                fontWeight="light"
                textAlign="left"
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

            <Box width="750px" display={{ base: "none", lg: "block" }} />
          </Flex>
        </Container>

        {/* History */}
        <Container maxW="100%" h="100vh">
          <Flex
            height="100%"
            flexDirection={{ base: "column", lg: "row-reverse" }}
            alignItems="center"
            justifyContent="center"
            gap={{ base: "10", lg: "20" }}
          >
            <Box width="750px">
              <Center>
                <Grid
                  templateColumns="repeat(3, 1fr)"
                  templateRows="repeat(3, 1fr)"
                  width={{ base: "300px", lg: "500px" }}
                  height={{ base: "300px", lg: "500px" }}
                  gap={2.5}
                >
                  <GridItem colStart={1} rowStart={1} colSpan={2} rowSpan={2}>
                    <DataModal
                      previewImg="./frs-web/assets/images/history/sixties/button_500.png"
                      backgroundImg={[
                        "./frs-web/assets/images/history/sixties/figure_01.png",
                        "./frs-web/assets/images/history/sixties/figure_02.png",
                        "./frs-web/assets/images/history/sixties/figure_03.png",
                      ]}
                      title="1960"
                      data="Los inicios de los SRF se remontan a la década de 1960. 
                  Producto de las investigaciones de Woody Bledsoe, Helen Chan Wolf y Charles Bisson 
                  se consiguió desarrollar el sistema RAND, este empleaba coordenadas introducidas por 
                  el usuario para calcular las distancias y proporciones entre los puntos de referencia y 
                  los rasgos faciales a identificar."
                    />
                  </GridItem>
                  <GridItem colStart={3} rowStart={1}>
                    <DataModal
                      previewImg="./frs-web/assets/images/history/seventies/button_500.png"
                      backgroundImg={[
                        "./frs-web/assets/images/history/seventies/figure_01.png",
                        "./frs-web/assets/images/history/seventies/figure_02.png",
                        "./frs-web/assets/images/history/seventies/figure_03.png",
                        "./frs-web/assets/images/history/seventies/figure_04.png",
                      ]}
                      title="1970"
                      data="Para 1970, Jay Goldstein, Leon D. Harmon, y Ann B. Lesk lograron expandir el número 
                  de rasgos identificables, características como el color del cabello o el grosor de los labios 
                  ahora podían ser identificados. En 1977 Takeo Kanade publicó “Computer Recognition of Human Faces”, 
                  el primer libro sobre reconocimiento facial."
                    />
                  </GridItem>
                  <GridItem colStart={3} rowStart={2}>
                    <DataModal
                      previewImg="./frs-web/assets/images/history/eighties/button_500.png"
                      backgroundImg={[
                        "./frs-web/assets/images/history/eighties/figure_01.png",
                        "./frs-web/assets/images/history/eighties/figure_02.png",
                        "./frs-web/assets/images/history/eighties/figure_03.png",
                        "./frs-web/assets/images/history/eighties/figure_04.png",
                        "./frs-web/assets/images/history/eighties/figure_05.png",
                      ]}
                      title="1980"
                      data="La década de 1980 representó un gran periodo de avance para el desarrollo
                  de esta tecnología gracias al exponencial desarrollo de las computadoras. Lawrence
                  Sirovich y Michael Kirby implementaron los principios del álgebra lineal para la
                  identificación de rostros mediante el análisis de componentes principales en 1988."
                    />
                  </GridItem>
                  <GridItem colStart={1} rowStart={3}>
                    <Center>
                      <DataModal
                        previewImg="./frs-web/assets/images/history/nineties/button_500.png"
                        backgroundImg={[
                          "./frs-web/assets/images/history/nineties/figure_01.png",
                          "./frs-web/assets/images/history/nineties/figure_02.png",
                          "./frs-web/assets/images/history/nineties/figure_03.png",
                          "./frs-web/assets/images/history/nineties/figure_04.png",
                        ]}
                        title="1990"
                        data="Este trabajo permitió que en 1991 Matthew Turk y Alex Pentland desarrollaran Eigenface, 
                  un SRF basado en vectores que empleaba visión computarizada. En 1993 la Agencia de Proyectos de 
                  Investigación Avanzados de Defensa (DARPA) y el Instituto Nacional de Estándares y Tecnología (NIST) 
                  crearon el programa Tecnología para el Reconocimiento Facial (FERET) con el fin de establecer 
                  un mercado del comercial de los SRF."
                      />
                    </Center>
                  </GridItem>
                  <GridItem colStart={2} rowStart={3}>
                    <DataModal
                      previewImg="./frs-web/assets/images/history/thousand/button_500.png"
                      backgroundImg={[
                        "./frs-web/assets/images/history/thousand/figure_01.png",
                        "./frs-web/assets/images/history/thousand/figure_02.png",
                      ]}
                      title="2000"
                      data="2001 fue el año en que Paul Viola y Michael Jones desarrollaron el sistema para la 
                  detección de objetos Viola-Jones enfocado en rostros. Este sistema, hacía uso de machine 
                  learning para detectar en tiempo real las características faciales."
                    />
                  </GridItem>
                  <GridItem colStart={3} rowStart={3}>
                    <DataModal
                      previewImg="./frs-web/assets/images/history/today/button_500.png"
                      backgroundImg={[
                        "./frs-web/assets/images/history/today/figure_01.png",
                        "./frs-web/assets/images/history/today/figure_02.png",
                      ]}
                      title="Actualidad"
                      data="A partir de este punto los SRF comenzaron a ser mucho
                  más eficientes y precisos en razón del uso de redes neuronales convolucionales e
                  inteligencia artificial a la par del creciente poder computacional de los sistemas en
                  los que son implementados."
                    />
                  </GridItem>
                </Grid>
              </Center>
            </Box>
            <Stack gap={4}>
              <Heading fontSize={{ base: "2xl", lg: "3xl" }} color="white">
                Historia
              </Heading>
              <Text
                fontSize={{ base: "lg", lg: "xl" }}
                fontWeight="light"
                textAlign={{ base: "justify", lg: "left" }}
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

        {/* Techniques */}
        <Container maxW="100%" h="100vh">
          <Flex
            height="100%"
            flexDirection={{ base: "column", lg: "row-reverse" }}
            alignItems="center"
            justifyContent="center"
            gap={{ base: "5", lg: "20" }}
          >
            <Box width="750px">
              <Center>
                <Grid
                  templateColumns="repeat(2, 1fr)"
                  templateRows="repeat(2, 1fr)"
                  width={{ base: "300px", lg: "500px" }}
                  height={{ base: "300px", lg: "500px" }}
                  gap={2.5}
                >
                  <GridItem>
                    <DataModal
                      previewImg="./frs-web/assets/images/techniques/holistic/button_500.png"
                      backgroundImg={[
                        "./frs-web/assets/images/techniques/holistic/figure_01.png",
                        "./frs-web/assets/images/techniques/holistic/figure_02.png",
                        "./frs-web/assets/images/techniques/holistic/figure_03.png",
                      ]}
                      title="Locales, holísticos e híbridos"
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
                      backgroundImg={[
                        "./frs-web/assets/images/techniques/appearance/figure_01.png",
                        "./frs-web/assets/images/techniques/appearance/figure_02.png",
                        "./frs-web/assets/images/techniques/appearance/figure_03.png",
                        "./frs-web/assets/images/techniques/appearance/figure_04.png",
                      ]}
                      title="Modelos y apariencia"
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
                      backgroundImg={[
                        "./frs-web/assets/images/techniques/geometry/figure_01.png",
                        "./frs-web/assets/images/techniques/geometry/figure_02.png",
                        "./frs-web/assets/images/techniques/geometry/figure_03.png",
                      ]}
                      title="Geometría y plantillas"
                      data="Los métodos basados en la geometría, como la correspondencia elástica de grafos, examinan 
                      los rasgos faciales locales y sus relaciones geométricas. Los métodos basados en plantillas 
                      definen un rostro como una función que se compara con un conjunto de patrones. Estos conjuntos 
                      de plantillas pueden construirse utilizando herramientas estadísticas, como los métodos de kernel."
                    />
                  </GridItem>
                  <GridItem>
                    <DataModal
                      previewImg="./frs-web/assets/images/techniques/neural/button_500.png"
                      backgroundImg={[
                        "./frs-web/assets/images/techniques/neural/figure_01.png",
                        "./frs-web/assets/images/techniques/neural/figure_02.png",
                        "./frs-web/assets/images/techniques/neural/figure_03.png",
                        "./frs-web/assets/images/techniques/neural/figure_04.png",
                      ]}
                      title="Correspondencia, estadística y redes neuronales"
                      data="Los métodos de  correspondencia de modelos representan patrones a través de modelos, píxeles, 
                      curvas o texturas. La función de reconocimiento generalmente se basa en una medida de distancia o 
                      correlación. En el enfoque estático, los patrones se describen como características mientras que el 
                      reconocimiento se realiza mediante una función discriminante. En los enfoques basados en redes neuronales, 
                      la representación de patrones puede variar pero siempre hace uso de una función de la red."
                    />
                  </GridItem>
                </Grid>
              </Center>
            </Box>
            <Stack gap={4}>
              <Heading fontSize={{ base: "2xl", lg: "3xl" }} color="white">
                Funcionamiento
              </Heading>
              <Text
                fontSize={{ base: "lg", lg: "xl" }}
                fontWeight="light"
                textAlign={{ base: "justify", lg: "left" }}
                width={{ base: "300px", lg: "400px" }}
                color="white"
              >
                Para la computación el reconocimiento facial no es una tarea
                sencilla, representa un reto con alto nivel de complejidad en
                razón de su funcionalidad y eficiencia. Por este motivo existen
                múltiples enfoques y algoritmos que abordan el problema que
                supone el identificar los rasgos faciales.
              </Text>
            </Stack>
          </Flex>
        </Container>

        {/* Applications */}
        <Container maxW="100%" h="100vh">
          <Flex
            height="100%"
            flexDirection={{ base: "column", lg: "row" }}
            alignItems="center"
            justifyContent="center"
            gap={{ base: "5", lg: "20" }}
          >
            <Stack gap={4}>
              <Heading fontSize={{ base: "2xl", lg: "3xl" }} color="white">
                Aplicaciones
              </Heading>
              <Text
                fontSize={{ base: "lg", lg: "xl" }}
                fontWeight="light"
                textAlign="left"
                width={{ base: "300px", lg: "400px" }}
                color="white"
              >
                Los SRF están presentes en nuestra cotidianidad a través
                diversas tecnologías y servicios que usamos a diario. Son una
                parte fundamental de la infraestructura moderna influyendo en
                múltiples aspectos de nuestras interacciones diarias.
              </Text>
            </Stack>

            <Box width="750px" display={{ base: "none", lg: "block" }}>
              <Grid
                templateColumns={{
                  base: "repeat(1, 1fr)",
                  lg: "repeat(1, 1fr)",
                }}
                templateRows={{ base: "repeat(6, 1fr)", lg: "repeat(6, 1fr)" }}
                width={{ base: "300px", lg: "800px" }}
                gap={4}
              >
                <GridItem>
                  <ApplicationCard
                    icon="./frs-web/assets/images/applications/security.png"
                    title="Control de espacios"
                    text="Los SRF se usan para gestionar el acceso a edificios y áreas restringidas, 
                    verificando identidades para mejorar la seguridad."
                  />
                </GridItem>
                <GridItem>
                  <ApplicationCard
                    icon="./frs-web/assets/images/applications/face-detection.png"
                    title="Gestión biométrica"
                    text="Recopilan y analizan características faciales para crear perfiles únicos, 
                    facilitando la administración de bases de datos de identificación y emisión de 
                    documentos."
                  />
                </GridItem>
                <GridItem>
                  <ApplicationCard
                    icon="./frs-web/assets/images/applications/cctv.png"
                    title="Seguridad y vigilancia"
                    text="Permiten a las fuerzas del orden identificar personas de interés en 
                    tiempo real y monitorizar multitudes, ayudando a prevenir delitos"
                  />
                </GridItem>
                <GridItem>
                  <ApplicationCard
                    icon="./frs-web/assets/images/applications/social-media.png"
                    title="Interfaces de usuario"
                    text="Facilitan el desbloqueo de dispositivos y la autenticación de usuarios, 
                    proporcionando acceso rápido y seguro a dispositivos y aplicaciones."
                  />
                </GridItem>
                <GridItem>
                  <ApplicationCard
                    icon="./frs-web/assets/images/applications/research.png"
                    title="Mercadotecnia"
                    text="Analizan características faciales para personalizar anuncios y promociones, 
                    ajustándose a las preferencias y estados de ánimo de los usuarios."
                  />
                </GridItem>
                <GridItem>
                  <ApplicationCard
                    icon="./frs-web/assets/images/applications/robot.png"
                    title="Robótica"
                    text="Mejoran la interacción de robots y sistemas automatizados con humanos, 
                    permitiéndoles realizar tareas de manera más eficiente en diversos entornos."
                  />
                </GridItem>
              </Grid>
            </Box>
          </Flex>
        </Container>

        {/* Issues */}
        <Container maxW="100%" h="100vh">
          <Flex
            height="100%"
            flexDirection={{ base: "column", lg: "row" }}
            alignItems="center"
            justifyContent="center"
            gap={{ base: "5", lg: "20" }}
          >
            <Stack gap={4}>
              <Heading fontSize={{ base: "2xl", lg: "3xl" }} color="white">
                Consideraciones
              </Heading>
              <Text
                fontSize={{ base: "lg", lg: "xl" }}
                fontWeight="light"
                textAlign="left"
                width={{ base: "300px", lg: "400px" }}
                color="white"
              >
                En la actualidad el refinamiento y la optimización de los SRF,
                además el contexto tecnológico presente, ha abierto la puerta a
                una serie de implicaciones y preocupaciones en torno a su
                implementación.
              </Text>
            </Stack>

            <Box width="750px" display={{ base: "none", lg: "block" }} />
          </Flex>
        </Container>

        {/* Future */}
        <Container maxW="100%" h="200vh">
          <Flex
            height="100%"
            flexDirection={{ base: "column", lg: "row" }}
            alignItems="center"
            justifyContent="center"
            gap={{ base: "5", lg: "20" }}
          >
            <Flex flexDirection={{ base: "column", lg: "row" }} gap={5}>
              <Stack gap={4}>
                <Heading fontSize={{ base: "2xl", lg: "3xl" }} color="white">
                  Futuro
                </Heading>
                <Flex
                  flexDirection={{ base: "column", lg: "row" }}
                  gap={{ base: "5", lg: "20" }}
                >
                  <Text
                    fontSize={{ base: "lg", lg: "xl" }}
                    fontWeight="light"
                    textAlign="left"
                    width={{ base: "300px", lg: "400px" }}
                    color="white"
                  >
                    La integración de los sistemas de reconocimiento facial será
                    cada vez más común y se expandirá hacia nuevas industrias
                    con diferentes aplicaciones. Su desarrollo, funcionalidad y
                    optimización nos brindarán nuevos beneficios en razón de la
                    consolidación de las tecnologías actuales y el surgimiento
                    de nuevas como la inteligencia artificial, el desarrollo
                    biotecnológico, la computación en la nube, la robótica,
                    entre otras.
                  </Text>
                  <Text
                    fontSize={{ base: "lg", lg: "xl" }}
                    fontWeight="light"
                    textAlign="left"
                    width={{ base: "300px", lg: "400px" }}
                    color="white"
                  >
                    Estas tecnologías potenciarán la eficiencia y la capacidad
                    del reconocimiento facial, lo que tendrá un impacto
                    significativo en aplicaciones como la seguridad, la
                    identificación, la atención médica, la logística, etc. Sin
                    embargo, el camino por delante está marcado por grandes
                    desafíos debido a sus implicaciones éticas y de privacidad.
                    La regulación y la adopción responsable serán clave para
                    garantizar que el reconocimiento facial se utilice de manera
                    segura y en favor de los derechos de las personas en un
                    mundo orientado a la hiperconectividad y la digitalización.
                  </Text>
                </Flex>
              </Stack>
            </Flex>
          </Flex>
        </Container>
      </VStack>
    </ChakraProvider>
  );
};

export default Overlay;
