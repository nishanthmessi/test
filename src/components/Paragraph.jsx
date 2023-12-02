import { stylesWithCssVar } from "../utils/motion";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import ParticleAnime from "./ParticleAnime";

const Paragraph = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });

  const text1Opacity = useTransform(
    scrollYProgress,
    [0.05, 0.15, 0.25],
    [0, 1, 0]
  );
  const text1Y = useTransform(
    scrollYProgress,
    [0.05, 0.15, 0.25],
    ["30px", "0px", "-30px"]
  );

  const text2Opacity = useTransform(
    scrollYProgress,
    [0.25, 0.3, 0.35],
    [0, 1, 0]
  );
  const text2Y = useTransform(
    scrollYProgress,
    [0.25, 0.3, 0.35],
    ["30px", "0px", "-30px"]
  );

  const text3Opacity = useTransform(
    scrollYProgress,
    [0.35, 0.4, 0.45],
    [0, 1, 0]
  );
  const text3Y = useTransform(
    scrollYProgress,
    [0.35, 0.4, 0.45],
    ["30px", "0px", "-30px"]
  );

  const text4Opacity = useTransform(
    scrollYProgress,
    [0.45, 0.5, 0.55],
    [0, 1, 0]
  );
  const text4Y = useTransform(
    scrollYProgress,
    [0.45, 0.5, 0.55],
    ["30px", "0px", "-30px"]
  );

  const text5Opacity = useTransform(
    scrollYProgress,
    [0.55, 0.6, 0.65],
    [0, 1, 0]
  );
  const text5Y = useTransform(
    scrollYProgress,
    [0.55, 0.6, 0.65],
    ["30px", "0px", "-30px"]
  );

  const text6Opacity = useTransform(
    scrollYProgress,
    [0.65, 0.7, 0.75],
    [0, 1, 0]
  );
  const text6Y = useTransform(
    scrollYProgress,
    [0.65, 0.7, 0.75],
    ["30px", "0px", "-30px"]
  );

  return (
    <>
      <section
        ref={targetRef}
        className="flex h-[500vh] flex-col items-center justify-start bg-white">
        <div className="sticky top-[16.7vh] h-[66.8vh] px-16 text-2xl leading-[1] text-[#2E308E] w-[45rem]">
          {/* <motion.div className="relative h-full w-[50rem]">
          
        </motion.div> */}
          <motion.p
            style={{
              opacity: text1Opacity,
              y: text1Y,
            }}
            className="absolute left-0 translate-y-centered-offset top-[45%] text-[42px]">
            <span>Panoptic</span>
            <br />
            <span>Attack Visibility</span>
            <br />
            <span className="text-black text-base font-mulish mt-[12px]">
              See every angle, Pinpoint immediate threats
            </span>
          </motion.p>
          <motion.p
            style={{
              opacity: text2Opacity,
              y: text2Y,
            }}
            className="absolute left-0 translate-y-centered-offset top-[45%] text-[42px]">
            <span>Predictive</span>
            <br />
            <span> Threat Intelligence</span>
            <br />
            <p className="text-black text-base font-mulish mt-[12px]">
              Foresee attack chains. Act before they strike.
            </p>
          </motion.p>
          <motion.p
            style={{
              opacity: text3Opacity,
              y: text3Y,
            }}
            className="absolute left-0 translate-y-centered-offset top-[45%] text-[42px]">
            <span>Eliminating</span>
            <br />
            <span>Friction</span>
            <br />
            <p className="text-black text-base font-mulish mt-[12px]">
              Beyond identifying. Recommending actionable fixes.
            </p>
          </motion.p>
          <motion.p
            style={{
              opacity: text4Opacity,
              y: text4Y,
            }}
            className="absolute left-0 translate-y-centered-offset top-[45%] text-[42px]">
            <span>Rapid</span>
            <br />
            <span>Remediation</span>
            <br />
            <p className="text-black text-base font-mulish mt-[12px]">
              <span> Seamlessly bridge Sec and DevOps teams.</span>
              <br />
              <span>
                No more bottlenecks. Foster collaboration - better phrasing
              </span>
            </p>
          </motion.p>
          <motion.p
            style={{
              opacity: text5Opacity,
              y: text5Y,
            }}
            className="absolute left-0 translate-y-centered-offset top-[45%] text-[42px]">
            <span>Paving the Path</span>
            <br />
            <span>to Productivity</span>
            <br />
            <p className="text-black text-base font-mulish mt-[12px]">
              Efficient, streamlined, optimal operations.
            </p>
          </motion.p>
          <motion.p
            style={{
              opacity: text6Opacity,
              y: text6Y,
            }}
            className="absolute left-0 translate-y-centered-offset top-[45%] text-[42px]">
            <span>Client Success</span>
            <br />
            <p className="text-black text-base font-mulish mt-[12px]">
              Thriving in a secure cloud environment
            </p>
          </motion.p>
        </div>
      </section>
    </>
  );
};

export default Paragraph;
