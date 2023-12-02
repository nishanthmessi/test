import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const ScrollAnimate = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mainContainer = document.querySelector("main-container");
    const firstDiv = document.querySelector(".first-div");
    const secondDiv = document.querySelector(".second-div");

    gsap.from(firstDiv, {
      opacity: 0,
    });

    gsap.to(firstDiv, {
      opacity: 1,
      scrollTrigger: {
        trigger: firstDiv,
        start: "top center",
        end: "+=200",
        scrub: true,
        // toggleActions: "play none reverse none",
        pin: mainContainer,
      },
    });

    gsap.to(firstDiv, {
      opacity: 0,
      scrollTrigger: {
        trigger: firstDiv,
        start: "200",
        end: "+=100",
        scrub: true,
        // toggleActions: "play none reverse none",
        pin: mainContainer,
      },
    });

    gsap.from(secondDiv, {
      opacity: 0,
    });

    gsap.to(secondDiv, {
      opacity: 1,
      scrollTrigger: {
        trigger: secondDiv,
        start: "+=300",
        end: "+=400",
        scrub: true,
        // toggleActions: "play none reverse none",
        pin: mainContainer,
      },
    });

    gsap.to(secondDiv, {
      opacity: 0,
      scrollTrigger: {
        trigger: secondDiv,
        start: "top center",
        end: "+=500",
        scrub: true,
        // toggleActions: "play none reverse none",
      },
    });
  }, []);

  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   // GSAP animation timeline
  //   const tl = gsap.timeline({ defaults: { ease: "power1.inOut" } });

  //   // Animation sequence
  //   tl.to(".text1", { opacity: 0, duration: 1 }).to(
  //     ".text2",
  //     { opacity: 1, duration: 1 },
  //     "-=1"
  //   );

  //   // ScrollTrigger
  //   gsap.to(".container", {
  //     scrollTrigger: {
  //       trigger: ".container",
  //       start: "top center",
  //       end: "bottom center",
  //       scrub: 1,
  //       onUpdate: (self) => {
  //         // Update opacity dynamically based on scroll position
  //         const opacity = 0.1635 + (1 - self.progress) * (1 - 0.1635);
  //         gsap.set(".container", { opacity });
  //       },
  //     },
  //     willChange: "transform, opacity",
  //     transform:
  //       "translate3d(0px, -16.73px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
  //     transformStyle: "preserve-3d",
  //     opacity: 0.1635,
  //     duration: 1,
  //   });
  // }, []);

  return (
    <div className="bg-zinc-800 text-white">
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-6xl">Welcome to our page</h1>
      </div>

      <div className="sticky top-0 flex items-center justify-center h-[100vh] gap-40 main-container overflow-visible">
        <div className="gallery">
          <h1>Img</h1>
        </div>

        <div>
          <div className="absolute first-div">
            <h1 className="text-3xl font-bold"> {"/"} Specialisations</h1>
            <h1 className="text-5xl font-semibold my-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
              Panoptic Threat Visibility
            </h1>
            <p className="text-xl">
              See every angle, Pinpoint immediate threats
            </p>
          </div>

          <div className="absolute second-div opacity-0">
            <h1 className="text-3xl font-bold"> {"/"} Specialisations</h1>
            <h1 className="text-5xl font-semibold my-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
              Foresee attack chains. Act before they strike.
            </h1>
            <p className="text-xl">
              See every angle, Pinpoint immediate threats
            </p>
          </div>

          {/* <div className="absolute hidden details">
            <h1 className="text-3xl font-bold"> {"/"} Specialisations</h1>
            <h1 className="text-5xl font-semibold my-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
              Rapid Remediation
            </h1>
            <p className="text-xl">
              Beyond identifying. Recommending actionable fixes.
            </p>
          </div>

          <div className="absolute hidden details">
            <h1 className="text-3xl font-bold"> {"/"} Specialisations</h1>
            <h1 className="text-5xl font-semibold my-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
              Eliminating Friction
            </h1>
            <p className="text-xl">
              Seamlessly bridge Sec and DevOps teams. No more bottlenecks./
              Foster collaboration - better phrasing
            </p>
          </div> */}
        </div>
      </div>
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-6xl">Bye Bye</h1>
      </div>
    </div>
  );
};

export default ScrollAnimate;

// 1. Panoptic Threat Visibility
// See every angle, Pinpoint immediate threats
// 2. Predictive Threat Intelligence
//  Foresee attack chains. Act before they strike.
// 3. Rapid Remediation
// Beyond identifying. Recommending actionable fixes.
// 4. Eliminating Friction
//   Seamlessly bridge Sec and DevOps teams. No more bottlenecks./ Foster collaboration - better phrasing
// 5. Paving the Path to Productivity
//   Efficient, streamlined, optimal operations.
// 6. Client Success
//   Thriving in a secure cloud environment
