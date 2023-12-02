import React from "react";
import Lottie from "lottie-react";
import Infinity from "../assets/videoanim1.mp4.lottie.json";

class InfinitySection extends React.Component {
  render() {
    const infinityScroll = {
      mode: "scroll",
      actions: [
        {
          visibility: [0.02],
          type: "stop",
          frames: [0],
        },
        {
          visibility: [0.03, 1.6],
          type: "seek",
          frames: [0, 300],
        },
      ],
    };

    return (
      <div className="absolute left-40 home-infinity">
        <Lottie
          animationData={Infinity}
          interactivity={infinityScroll}
          style={{ width: "80%", height: "80%" }}
        />
      </div>
    );
  }
}
export default InfinitySection;
