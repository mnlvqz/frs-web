import React, { useState, useRef } from "react";
import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const ScrollButton = (props) => {
  const meshRef = useRef();
  const scroll = useScroll();
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta;
      meshRef.current.rotation.y += delta;

      meshRef.current.scale.set(
        state.size.width * 0.00005,
        state.size.width * 0.00005,
        state.size.width * 0.00005
      );
    }
  });

  const goToSection = () => {
    if (scroll && scroll.el) {
      scroll.el.scrollTo({
        left: scroll.el.scrollWidth * props.section,
        behavior: "smooth",
      });
    }
  };

  return (
    <mesh
      {...props}
      ref={meshRef}
      onClick={(event) => goToSection()}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <icosahedronGeometry />
      <meshStandardMaterial
        wireframe={false}
        color={hovered ? "red" : "white"}
      />
    </mesh>
  );
};

export default ScrollButton;
