import React from 'react'
import {FaLinkedin} from 'react-icons/fa'
import {BsGithub, BsInstagram} from 'react-icons/bs'


const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="#" target='_blank'><FaLinkedin/></a>
        <a href="#" target='_blank'><BsGithub/></a>
        <a href="#" target='_blank'><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials