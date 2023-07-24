import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <ul className='permalinks'>
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">SkillSet</a></li>
          <li><a href="">Portfolio</a></li>
          <li><a href="">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="">Instagram</a>
        <a href="">Linkedin</a>
        <a href="">Twitter</a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Carlos Martins. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer