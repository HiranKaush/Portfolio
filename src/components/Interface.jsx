import React from 'react'
import About from './About';
import Skills from './Skills';
import Contact from './Contact';


const Interface = () => {
  return (
    <div className='flex flex-col items-center w-screen'>
        <About />
        <Skills />
         
       
        <Contact />
    </div>
  )
}

export default Interface