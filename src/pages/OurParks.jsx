import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const OurParks = () => {
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    // Animate the first text on mount
    controls1.start({ opacity: 1, y: 0 });

    // Animate the second text when in view
    if (inView) {
      controls2.start({ opacity: 1, y: 0 });
    }
  }, {});

  return (
    <div className="h-screen w-full">
      <div className="h-[20vh] w-[20vw] max-w-[300px] max-h-[150px] absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] overflow-hidden">
        <h1 className="h-[100%] top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] absolute z-10">
          Panoptic Threat Visibility
        </h1>
      </div>
    </div>
  );
};

export default OurParks;
