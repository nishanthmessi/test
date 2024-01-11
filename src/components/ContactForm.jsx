import React, { useRef, useState, useEffect } from 'react'

const ContactForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [mobileNum, setMobileNum] = useState('')
  const [serviceType, setServiceType] = useState('')

  const [message, setMessage] = useState('')

  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const mobileRef = useRef(null)
  const serviceRef = useRef(null)

  console.log(nameRef)

  // Scroll action
  const scrollToName = () => {
    nameRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToEmail = () => {
    emailRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToMobile = () => {
    mobileRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToService = () => {
    serviceRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  // Ok button action
  const nameCheck = () => {
    if (name === '') {
      setMessage('This field is required')
    } else {
      scrollToEmail()
    }
  }

  const emailCheck = () => {
    if (email === '') {
      setMessage('This field is required')
    } else {
      scrollToMobile()
    }
  }

  const mobileNumCheck = () => {
    if (mobileNum === '') {
      setMessage('This field is required')
    } else {
      scrollToService()
    }
  }

  const serviceTypeCheck = () => {
    if (serviceType === '') {
      setMessage('This field is required')
    } else {
      // scrollToEmail()
    }
  }

  // Enter key press action
  const handleNameEnter = (e) => {
    if (e.key === 'Enter') {
      if (name === '') {
        setMessage('This field is required')
      } else {
        scrollToEmail()
      }
    }
  }

  const handleEmailEnter = (e) => {
    if (e.key === 'Enter') {
      if (email === '') {
        setMessage('This field is required')
      } else {
        scrollToMobile()
      }
    }
  }

  const handleMobileNumEnter = (e) => {
    if (e.key === 'Enter') {
      if (mobileNum === '') {
        setMessage('This field is required')
      } else {
        scrollToService()
      }
    }
  }

  const handleServiceEnter = (e) => {
    if (e.key === 'Enter') {
      if (serviceType === '') {
        setMessage('This field is required')
      } else {
        console.log('success')
      }
    }
  }

  return (
    <div className='fixed right-0 overflow-y-scroll h-screen bg-white w-[800px] flex flex-col z-10'>
      <div>
        <div
          className='flex flex-col justify-center items-start gap-10 h-[100vh] px-20'
          ref={nameRef}
          onKeyDown={handleNameEnter}
        >
          <label className='text-2xl'>1. Name</label>
          <input
            type='text'
            placeholder='Name'
            className='w-full text-2xl border-b border-black outline-none'
            value={name}
            onChange={(e) => (setName(e.target.value), setMessage(''))}
            // onKeyDown={handleKeyPress}
            required
          />

          {message && <p className='text-red-600'>{message}</p>}

          <div className='flex items-center gap-4'>
            <button
              className='px-4 py-2 text-white bg-zinc-900'
              onClick={nameCheck}
            >
              Ok
            </button>
            <p>Press Enter</p>
          </div>

          <div className='flex justify-end gap-4 p-10'>
            <button onClick={scrollToEmail}>down</button>
            <button>up</button>
          </div>
        </div>
      </div>

      <div>
        <div
          className='flex flex-col justify-center items-start gap-10 h-[100vh] px-20'
          ref={emailRef}
          onKeyDown={handleEmailEnter}
        >
          <label className='text-2xl'>2. Email</label>
          <input
            type='email'
            placeholder='Email'
            className='w-full text-2xl border-b border-black outline-none'
            value={email}
            onChange={(e) => (setEmail(e.target.value), setMessage(''))}
          />

          {message && <p className='text-red-600'>{message}</p>}

          <div className='flex items-center gap-4'>
            <button
              className='px-4 py-2 text-white bg-zinc-900'
              onClick={emailCheck}
            >
              Ok
            </button>
            <p>Press Enter</p>
          </div>
          <div className='flex justify-end gap-4 p-10'>
            <button onClick={scrollToMobile}>down</button>
            <button onClick={scrollToName}>up</button>
          </div>
        </div>
      </div>

      <div>
        <div
          className='flex flex-col justify-center items-start gap-10 h-[100vh] px-20'
          ref={mobileRef}
          onKeyDown={handleMobileNumEnter}
        >
          <label className='text-2xl'>3. Mobile Number</label>
          <input
            type='number'
            placeholder='mobile number'
            className='w-full text-2xl border-b border-black outline-none'
            value={mobileNum}
            onChange={(e) => (setMobileNum(e.target.value), setMessage(''))}
          />
          {message && <p className='text-red-600'>{message}</p>}

          <div className='flex items-center gap-4'>
            <button
              className='px-4 py-2 text-white bg-zinc-900'
              onClick={mobileNumCheck}
            >
              Ok
            </button>
          </div>
          <div className='flex justify-end gap-4 p-10'>
            <button onClick={scrollToService}>down</button>
            <button onClick={scrollToEmail}>up</button>
          </div>
        </div>
      </div>

      <div>
        <div
          className='flex flex-col justify-center items-start gap-10 h-[100vh] px-20'
          ref={serviceRef}
          onKeyDown={handleServiceEnter}
        >
          <label className='text-2xl'>4. Service</label>
          <input
            type='text'
            placeholder='service'
            className='w-full text-2xl border-b border-black outline-none'
            value={serviceType}
            onChange={(e) => setServiceType(e.target.value)}
          />
          <button
            className='px-4 py-2 text-white bg-zinc-900'
            onClick={serviceTypeCheck}
          >
            Ok
          </button>
          <div className='flex justify-end gap-4 p-10'>
            <button>down</button>
            <button onClick={scrollToMobile}>up</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
