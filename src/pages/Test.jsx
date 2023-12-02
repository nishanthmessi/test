import { useState, useRef } from "react";
import Paragraph from "../components/Paragraph";
import ParticleAnime from "../components/ParticleAnime";
import { useInView } from "framer-motion";

const Test = () => {
  const sectionRef = useRef(null);
  const section = useInView(sectionRef, { position: "fixed" });

  return (
    <>
      <div className="h-[100vh]"></div>
      <div className="flex justify-center w-full">
        <div className={`w-[50%]`}>
          <ParticleAnime />
        </div>
        <div className="w-[50%]">
          <Paragraph />
        </div>
      </div>

      <div className="h-[100vh]"></div>
    </>
  );
};

export default Test;
