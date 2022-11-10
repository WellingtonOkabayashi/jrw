import React, { useState } from 'react'
import { Nav } from './style'
import { FaBars, FaTimes } from 'react-icons/fa'
import { ReactSVG } from 'react-svg'
import Logomarca from '../Logo'

export default function Navbar() {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  const Logo = process.env.REACT_APP_NAME_LOGO || 'not available'
  return (
    <Nav>
      <header className="header">
        <nav
          className={click ? 'navigation-menu active' : 'navigation-menu'}
          id="navigation-menu"
        >
          <div className="header-align">
            <div className="logo">
              <Logomarca />
              <i className="log">
                <ReactSVG src="../public/jrw_logo.svg" />
              </i>
              {/* {Logo} */}
              <span>Services</span>
            </div>

            <ul>
              <li className="link">
                <a href="/#/" className="menu" onClick={handleClick}>
                  Home
                </a>
              </li>
              <li className="link">
                <a
                  href="/#/translate"
                  className="logomenu"
                  onClick={handleClick}
                >
                  {Logo}
                  <span>Translate</span>
                </a>
              </li>
              <li className="link">
                <a href="/#/lab" className="logomenu" onClick={handleClick}>
                  {Logo}
                  <span>Lab</span>
                </a>
              </li>
              <li className="link">
                <a href="/#/dev" className="logomenu" onClick={handleClick}>
                  {process.env.REACT_APP_NAME_LOGO || 'not available'}
                  <span>Dev</span>
                </a>
              </li>

              <li className="link">
                <a href="/#/contato" className="menu" onClick={handleClick}>
                  Contato
                </a>
              </li>
            </ul>
            <div className="hamb_open" onClick={handleClick}>
              <FaBars />
            </div>
            <div className="hamb_close" onClick={handleClick}>
              <FaTimes />
            </div>
          </div>
        </nav>
      </header>
    </Nav>
  )
}
