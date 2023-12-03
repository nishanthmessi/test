import { useState, useRef } from 'react'
import Paragraph from '../components/Paragraph'
import ParticleAnime from '../components/ParticleAnime'
import { useInView } from 'framer-motion'
import ScrollContainer from '../components/ScrollContainer'
import AnimatedLottie from '../components/AnimatedLottie'
import ReactVideoScroll from '../components/ReactVideoScroll'

const Test = () => {
  const sectionRef = useRef(null)
  const section = useInView(sectionRef, { position: 'fixed' })

  return (
    <>
      <div className='relative h-[100vh] bg-gray-200'>
        <h1 className='absolute top-[40%] left-[40%] text-[10rem] font-bold'>
          Start
        </h1>
      </div>
      <div className='relative grid justify-center w-full grid-cols-1 md:grid-cols-2 '>
        {/* <ParticleAnime /> */}
        <ReactVideoScroll />
        <Paragraph />
      </div>
      {/* <ScrollContainer>
        <AnimatedLottie />
      </ScrollContainer> */}

      <div className='relative h-[100vh] bg-gray-200'>
        <h1 className='absolute top-[40%] left-[40%] text-[10rem] font-bold'>
          End
        </h1>
      </div>
    </>
  )
}

export default Test
