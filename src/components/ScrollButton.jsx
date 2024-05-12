import React, { useState, useRef } from "react";
import { useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

const ScrollButton = (props) => {
  const meshRef = useRef();
  const scroll = useScroll();
  const { width, height } = useThree((state) => state.viewport);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta;
      meshRef.current.rotation.y += delta;

      meshRef.current.scale.set(
        state.size.width * 0.0001,
        state.size.width * 0.0001,
        state.size.width * 0.0001
      );
    }
  });

  const goToSection = (section) => {
    if (scroll && scroll.el) {
      scroll.el.scrollTo({
        left: scroll.el.scrollWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <mesh
      {...props}
      ref={meshRef}
      onClick={(event) => goToSection(0.25)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
      position={[0, height * -0.45, 0]}
    >
      <icosahedronGeometry />
      <meshStandardMaterial
        wireframe={true}
        color={hovered ? "red" : "white"}
      />
    </mesh>
  );
};

export default ScrollButton;
