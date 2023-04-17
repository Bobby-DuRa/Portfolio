import React from 'react'
import CV from '../../assets/cv.pdf'
const Cta = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'> Download CV</a>
        <a href="" className='btn btn-primary'> Lets talk</a>
    </div>
  )
}

export default Cta