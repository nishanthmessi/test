import React from 'react'
import Lottie from 'lottie-react'
import Infinity from '../assets/videoanim1.mp4.lottie.json'
import { motion } from 'framer-motion'

class InfinitySection extends React.Component {
  render() {
    const infinityScroll = {
      mode: 'scroll',
      actions: [
        // {
        //   visibility: [0.02],
        //   type: 'stop',
        //   frames: [0],
        // },
        {
          visibility: [0.05, 1.6],
          type: 'seek',
          frames: [0, 300],
        },
      ],
    }

    return (
      <section className='relative h-[500vh] w-[720px] z-[50] bg-white'>
        <div className='sticky top-0 z-[100]'>
          <Lottie
            animationData={Infinity}
            interactivity={infinityScroll}
            style={{
              width: '80%',
              height: '80%',
            }}
          />
        </div>
      </section>
    )
  }
}

export default InfinitySection
