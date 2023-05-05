import React from 'react'
import CTA from './Cta'
import ME from '../../assets/bg.png'
import HeaderSocial from './HeaderSocial'
import './header.css'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Namaste! It's me</h5>
        <h1> Bobby Dura </h1>
       <h5 className="text_light"> Software Engineer</h5>
        <CTA />
         <HeaderSocial />
        <div className="me">
           <img src={ME} alt="me" />
           
        </div>
      </div>
    </header>
  )
}

export default Header