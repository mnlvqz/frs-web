import React from "react";
import { Canvas } from "@react-three/fiber";
import { ScrollControls } from "@react-three/drei";

const App = () => {
  //const [backgroundColor, setBackgroundColor] = useState("orange");
  // orthographic
  // camera={{ fov: 45.0, zoom: 1, position: [0, 0, 50] }
  return (
    <Canvas
      orthographic
      camera={{ fov: 45.0, zoom: 100, position: [0, 0, 50] }}
    >
      {/*       <ambientLight intensity={Math.PI * 0.5} />
      <spotLight
        position={[0, 1, 1]}
        angle={0.8}
        penumbra={0.5}
        decay={0}
        intensity={Math.PI * 50}
      /> */}

      <pointLight position={[0, 0, 5]} decay={0} intensity={Math.PI} />
      <ScrollControls damping={0.25} pages={7}></ScrollControls>
    </Canvas>
  );
};

export default App;
