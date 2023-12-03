import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { NavContext } from './context/NavContext.jsx'
import Lenis from '@studio-freight/lenis'

const App = () => {
  const [isActive, setIsActive] = useState(false)

  const lenis = new Lenis()

  lenis.on('scroll', (e) => {
    console.log(e)
  })

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)

  return (
    <div className='bg-white'>
      <NavContext.Provider value={{ isActive, setIsActive }}>
        <Outlet />
      </NavContext.Provider>
    </div>
  )
}

export default App
