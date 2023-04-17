import React from 'react'
import CTA from './Cta'
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocial'
import './header.css'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5> Hello I'm</h5>
        <h1> Dura </h1>
       <h5 className="text_light"> Developer </h5>
        <CTA />
         <HeaderSocial />
        <div className="me">
           <img src={ME} alt="me" />
           
        </div>
        <a href="" className='scroll_down'> Scroll Down </a>
      </div>
    </header>
  )
}

export default Header