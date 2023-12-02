import React, { useState } from 'react'
import InnerNav from '../pages/InnerNav'
import { Link } from 'react-router-dom'
import ContactForm from './ContactForm'

const Navbar = () => {
  const [isActive, setIsActive] = useState(false)
  const [contactActive, setContactActive] = useState(false)

  return (
    <>
      <nav className='absolute flex gap-10 right-0 m-8'>
        <button className='text-white' onClick={() => setContactActive(!contactActive)}>Get Started</button>
        <Link className=' bg-orange-600 rounded-xl text-white p-3' to='/inner-nav'>Menu</Link>
      </nav>
      { contactActive && <ContactForm/> }
      
    </>
  )
}

export default Navbar
