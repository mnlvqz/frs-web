import React from "react";
import { Canvas } from "@react-three/fiber";
import { ScrollControls, useScroll } from "@react-three/drei";
import Overlay from "./Overlay";

const App = () => {
  //const [backgroundColor, setBackgroundColor] = useState("orange");
  // orthographic
  // camera={{ fov: 45.0, zoom: 1, position: [0, 0, 50] }
  const data = useScroll();
  return (
    <Canvas>
      <ambientLight intensity={Math.PI * 0.5} />
      <ScrollControls horizontal={false} pages={6} damping={0.5}>
        <color attach="background" args={["#000000"]} />
        {/* <ScrollNavigation />
        <Scroll>
          <Faces />
        </Scroll> */}

        <Overlay />
      </ScrollControls>
    </Canvas>
  );
};

export default App;
