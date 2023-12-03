import React, { useEffect, useRef } from 'react'
import Infinity from '../assets/white_bg_scroll_anim_60fps_4.mp4'

const ReactVideoScroll = () => {
  const videoRef = useRef(null)
  const scrollSectionRef = useRef(null)

  useEffect(() => {
    const playbackConst = 475

    function scrollPlay() {
      if (videoRef.current) {
        const frameNumber = window.scrollY / playbackConst
        videoRef.current.currentTime = frameNumber
      }

      window.requestAnimationFrame(scrollPlay)
    }

    window.requestAnimationFrame(scrollPlay)
  }, [])

  // useEffect(() => {
  //   const video = videoRef.current

  //   video.addEventListener('loadedmetadata', () => {
  //     const { duration } = video
  //     const playbackConst = 475
  //     const scrollSection = scrollSectionRef.current
  //     console.log('scrollSection', videoRef.current.duration)
  //     if (videoRef?.current) {
  //       scrollSection.style.height = Math.floor(duration) * playbackConst + 'px'
  //     }
  //     console.log(duration) // Output: video duration in seconds
  //   })

  //   return () => {
  //     video.removeEventListener('loadedmetadata', () => {})
  //   }
  // }, [])

  return (
    <div className='relative h-[500vh]' ref={scrollSectionRef}>
      <video
        ref={videoRef}
        id='v0'
        className='sticky mt-[100px] ml-[100px] top-[20%] left-0 w-[100%] h-[60vh]'
        preload='preload'
      >
        <source type='video/mp4' src={Infinity}></source>
      </video>
      {/* <div ref={scrollSectionRef} id='scrollSection' className='block'></div> */}
    </div>
  )
}

export default ReactVideoScroll
