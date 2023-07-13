import React from 'react'
import './NavBar.css'
import {AiOutlineUser}from 'react-icons/ai'
import {AiOutlineHome} from 'react-icons/ai'
import {BiMessageAltCheck} from 'react-icons/bi'
import {BiMessageAltDetail} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'



const NavBar = () => {
  return (
    <nav>
      <a href="#" target='_blank'><AiOutlineHome/></a>
      <a href="#" target='_blank'><AiOutlineUser/></a>
      <a href="#" target='_blank'><BiMessageAltCheck/></a>
      <a href="#" target='_blank'><RiServiceLine/></a>
      <a href="#" target='_blank'><BiMessageAltDetail/></a>
    </nav>
  )
}

export default NavBar