import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { NavContext } from '../context/NavContext' 

const InnerNav = () => {
  const {isActive, setIsActive} = useContext(NavContext)

  return (
    <nav className='flex justify-center'>
      <ul className='flex flex-col text-8xl'>
        <Link to='/home' className='text-gray-400 mb-20'>close</Link>
        <li>What We Provide</li>
        <li onClick={() => setIsActive(true)}>Our Parks { '>' }</li>
        <li>About Us</li>
        <li>ESG</li>
      </ul>

      <div className= {isActive ? 'absolute flex flex-col items-center text-8xl bg-white w-[100%] h-screen' : 'hidden'}>
        <div className='flex justify-between mb-20 w-full px-20'>
            <button onClick={() => setIsActive(false)} >back</button>
            <button>
                <Link to='/home' onClick={() => setIsActive(false)}>close</Link>
            </button>
        </div>
        
        <h1>Our Parks</h1>
        <p>Park 1</p>
        <p>Park 2</p>
      </div>
    </nav>
  )
}

export default InnerNav
