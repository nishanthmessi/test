import React from 'react'
import { Link } from 'react-router-dom'
import { NavContext } from '../context/NavContext' 

const NavOurParks = () => {
  const  {setIsActive} = useContext(NavContext)


  return (
    <>
    <div>
      <div>Senara</div>
      <Link to='/home' onClick={() => setIsActive(false)}>close</Link>
    </div>
    
    <div className='flex flex-col items-center text-8xl'>
      <div className='flex gap-20 mb-20'>
      
      
      <Link to='/inner-nav'>back</Link>
      </div>
      
      <h1>Our Parks</h1>
      <p>Park 1</p>
      <p>Park 2</p>
    </div>
    </>
  )
}

export default NavOurParks
