import React from 'react'
import './Header.css'
import CTA from './CTA'
import Me from '../../assets/Meu projeto.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
          <h5>Hello I'm</h5>
          <h1>Carlos Martins</h1>
          <h5 className='text-light'>Junior  Fullstack  Developer</h5>
          <CTA/>
          <HeaderSocials/>
          <a href="#contact" className='scrool__down'> Scrool Down</a>
          <div className="me">
            <img src={Me} alt="foto de perfil" />
          </div>
      </div>
    </header>
  )
}

export default Header