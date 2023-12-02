import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { NavContext  } from './context/NavContext.jsx'

const App = () => {
  const [isActive, setIsActive] = useState(false)

  return (
    <div className='bg-zinc-700'>
    <NavContext.Provider value={{isActive, setIsActive}}>
      <Outlet />
    </NavContext.Provider> 
    </div>
  )
}

export default App
