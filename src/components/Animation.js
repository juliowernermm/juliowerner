import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";
import { Stack } from "@chakra-ui/layout";

const MotionBox = motion(Stack);

export default function Animation({ children }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    if (!inView) {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <MotionBox
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 1, type: "spring", bounce: 0 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      {children}
    </MotionBox>
  );
}
