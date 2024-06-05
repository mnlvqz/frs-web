import React from "react";
import { Canvas } from "@react-three/fiber";
import { Scroll, ScrollControls, useScroll } from "@react-three/drei";
import Overlay from "./Overlay";
import Carousel from "./components/Carousel";

const App = () => {
  //const [backgroundColor, setBackgroundColor] = useState("orange");
  // orthographic
  // camera={{ fov: 45.0, zoom: 1, position: [0, 0, 50] }
  const data = useScroll();
  return (
    <Canvas>
      <ambientLight intensity={Math.PI * 0.5} />
      <ScrollControls horizontal={false} pages={10} damping={0.3}>
        <color attach="background" args={["#000000"]} />
        <Scroll></Scroll>
        <Scroll html style={{ width: "100%" }}>
          <Overlay />
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
};

export default App;
