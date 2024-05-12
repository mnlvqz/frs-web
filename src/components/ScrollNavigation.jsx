import React from "react";
import ScrollButton from "./ScrollButton";
import { useThree } from "@react-three/fiber";

const ScrollNavigation = () => {
  const { width, height } = useThree((state) => state.viewport);
  return (
    <>
      <ScrollButton
        position={[width * -0.15, height * -0.45, 0]}
        section={0.0}
      />
      <ScrollButton
        position={[width * -0.05, height * -0.45, 0]}
        section={0.25}
      />
      <ScrollButton
        position={[width * 0.05, height * -0.45, 0]}
        section={0.5}
      />
      <ScrollButton
        position={[width * 0.15, height * -0.45, 0]}
        section={0.75}
      />
    </>
  );
};

export default ScrollNavigation;
