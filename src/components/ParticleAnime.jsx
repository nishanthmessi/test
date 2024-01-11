import React from 'react'
import Lottie from 'lottie-react'
import Infinity from '../assets/videoanim1.mp4.lottie.json'
import { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'

const InfinitySection = () => {
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

  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end end'],
  })

  return (
    <section
      // className='relative h-[500vh] w-[720px] z-[50] bg-white'
      className='sticky top-0 h-auto overflow-visible'
      ref={targetRef}
    >
      <motion.div
        className='absolute top-[45%]'
        style={{
          y: scrollYProgress,
        }}
      >
        <Lottie
          animationData={Infinity}
          interactivity={infinityScroll}
          style={{
            width: '80%',
            height: '80%',
            display: 'block',
            overflow: 'visible',
            objectPosition: '50% 50%',
          }}
        />
      </motion.div>
    </section>
  )
}

export default InfinitySection
