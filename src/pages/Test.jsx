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
        <h1 className='absolute top-[40%] left-[40%] text-[24rem] leading-10 tracking-wider'>
          Leo Das
        </h1>
      </div>
      <div className='relative overflow-visible'>
        <div className='h-[700vh]'>
          {/* <div className='sticky top-0 flex justify-center h-screen overflow-visible'> */}
          <div className='relative mx-auto z-[1] w-[100%] flex'>
            <div className=' w-[60%]'>
              {/* <ReactVideoScroll /> */}

              <ParticleAnime />
            </div>
            <div className='w-[40%] relative overflow-visible'>
              <Paragraph />
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
      {/* <div className='relative grid justify-center w-full grid-cols-1 md:grid-cols-2 '>
        <ReactVideoScroll />
        <Paragraph />
      </div> */}

      <div className='relative h-[100vh] bg-gray-200'>
        <h1 className='absolute top-[40%] left-[40%] text-[10rem] font-bold'>
          End
        </h1>
      </div>
    </>
  )
}

export default Test
