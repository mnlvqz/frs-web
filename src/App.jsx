import React from "react";
import { Canvas } from "@react-three/fiber";
import { Scroll, ScrollControls } from "@react-three/drei";
import Faces from "./components/Faces";

const App = () => {
  //const [backgroundColor, setBackgroundColor] = useState("orange");
  // orthographic
  // camera={{ fov: 45.0, zoom: 1, position: [0, 0, 50] }
  return (
    <Canvas>
      <ScrollControls pages={4} damping={0.5}>
        <Scroll>
          <Faces />
        </Scroll>
        <Scroll html></Scroll>
      </ScrollControls>
    </Canvas>
  );
};

export default App;
