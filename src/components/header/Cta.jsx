import React from 'react'
import CV from '../../assets/cv.pdf'
const Cta = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download My CV</a>
        <a href="#contact" className='btn '> Contact Me </a>
    </div>
  )
}

export default Cta