import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/bobby-dura-b677261a2/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Bobby-DuRa" target="_blank">< BsGithub/></a>
    </div>
  )
}

export default HeaderSocial