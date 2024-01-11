import React, { useState } from 'react'
import InnerNav from '../pages/InnerNav'
import { Link } from 'react-router-dom'
import ContactForm from './ContactForm'

const Navbar = () => {
  const [isActive, setIsActive] = useState(false)
  const [contactActive, setContactActive] = useState(false)

  return (
    <>
      <nav className='absolute right-0 flex gap-10 m-8'>
        <button className='' onClick={() => setContactActive(!contactActive)}>
          Get Started
        </button>
        <Link
          className='p-3 text-white bg-orange-600  rounded-xl'
          to='/inner-nav'
        >
          Menu
        </Link>
      </nav>
      {contactActive && <ContactForm />}
    </>
  )
}

export default Navbar
