import React from "react";
import { motion } from "framer-motion";
import { Heading } from "@chakra-ui/react";

const marqueeVariants = {
  animate: {
    x: [1280, -1035],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 16,
        ease: "linear",
      },
    },
  },
};

const Marquee = () => {
  return (
    <div>
      <div className="marquee">
        {/* 3. Using framer motion */}
        <motion.div
          className="track"
          variants={marqueeVariants}
          animate="animate"
        >
          <Heading
            maxW="100%"
            noOfLines={1}
            overflowX="hidden"
            whiteSpace="nowrap"
            text-tram
            color="white"
            fontSize={{
              base: "35px",
              sm: "55px",
              md: "150px",
              lg: "85px",
              xl: "100px",
              "2xl": "150px",
            }}
          >
            Sistemas de Reconocimiento Facial Sistemas de Reconocimiento Facial
            Sistemas de Reconocimiento Facial Sistemas de Reconocimiento Facial
          </Heading>
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;
