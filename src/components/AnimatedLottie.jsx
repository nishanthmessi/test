import React from 'react'
import Lottie from 'lottie-react'
import Infinity from '../assets/videoanim1.mp4.lottie.json'
import { useAnimation } from 'framer-motion'

const AnimatedLottie = () => {
  const controls = useAnimation()

  const handleScroll = () => {
    const scrollY = window.scrollY

    // Adjust the animation based on scroll position
    controls.start({ opacity: 1 - scrollY / 500 })

    // You can add more animations based on scroll position if needed
  }

  const infinityScroll = {
    mode: 'scroll',
    actions: [
      {
        visibility: [0.02],
        type: 'stop',
        frames: [0],
      },
      {
        visibility: [0.03, 1.6],
        type: 'seek',
        frames: [0, 300],
      },
    ],
  }

  // Attach the scroll event listener
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return <Lottie animationData={Infinity} interactivity={infinityScroll} />
}

export default AnimatedLottie
