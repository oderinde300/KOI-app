import {
  motion,
  useAnimation,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

type ScrollAnimationWrapperProps = {
  children: React.ReactNode;
};

const ScrollAnimationWrapper: React.FC<ScrollAnimationWrapperProps> = ({
  children,
}) => {
  const wrapperRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start 0.75", "start 0.2"],
  });
  const [value, setValue] = useState<number | null>(null);

  useEffect(() => {
    scrollYProgress.on("change", (e) => {
      const newVal = 1 - e;
      // console.log(newVal * 100);
      setValue(newVal);
    });
  }, []);

  // const grayscale = useTransform(scrollYProgress, [1, 0], ["100%", "0%"]);

  // console.log({ grayscale });

  return (
    <div className="relative">
      <div className="w-full absolute top-0  left-0 h-full  grayscale">
        {children}
      </div>
      <motion.div
        ref={wrapperRef}
        style={{
          opacity: scrollYProgress,
          filter: `grayscale(${value})`,
        }}
        // className="z-40 opacity-0  "
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ScrollAnimationWrapper;
