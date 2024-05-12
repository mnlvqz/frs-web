import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React from "react";
import { useRef } from "react";

const Faces = (props) => {
  const meshRef = useRef();
  const scroll = useScroll();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.scale.set(
        state.size.width * 0.001,
        state.size.width * 0.001,
        state.size.width * 0.001
      );
    }
  });

  return (
    <mesh {...props} ref={meshRef}>
      <boxGeometry />
      <meshStandardMaterial wireframe={true} color="white" />
    </mesh>
  );
};

export default Faces;
