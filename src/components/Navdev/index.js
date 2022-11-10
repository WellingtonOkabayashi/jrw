import React, { useState } from 'react'
import { Nav } from './style'
import { FaBars, FaTimes } from 'react-icons/fa'
import { ReactSVG } from 'react-svg'
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
              <i className="log">
                <ReactSVG src="jrw_logo.svg" />
              </i>
              {/* {Logo} */}
              <span>Dev</span>
            </div>

            <ul>
              <li className="link">
                <a href="/jrw/#/" className="menu" onClick={handleClick}>
                  Home
                </a>
              </li>
              <li className="link">
                <a
                  href="/jrw/#/translate"
                  className="logomenu"
                  onClick={handleClick}
                >
                  {Logo}
                  <span>Translate</span>
                </a>
              </li>
              <li className="link">
                <a href="/jrw/#/lab" className="logomenu" onClick={handleClick}>
                  {Logo}
                  <span>Lab</span>
                </a>
              </li>
              <li className="link">
                <a href="/jrw/#/dev" className="logomenu" onClick={handleClick}>
                  {Logo}
                  <span>Dev</span>
                </a>
              </li>

              <li className="link">
                <a href="/jrw/#/contato" className="menu" onClick={handleClick}>
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
