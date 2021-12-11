import React from 'react' 

import Logo from './img/playstation-store-logo.png'
import searchIcon from './img/search-icon.svg'

import './header.sass'

const Header = () => { 
  return (
    <div className="header">

      <a href="/" className="logo">
        <span>
          <img style={{width:'184px'}} src={Logo} alt="PS market"/>
        </span> 
      </a>

      <div className="menu">
        <a href="/" className="menu__link"> Latest</a>
        <a href="/" className="menu__link"> Collection</a>
        <a href="/" className="menu__link"> Deals</a>
        <a href="/" className="menu__link"> PS5</a>
        <a href="/" className="menu__link"> Subscription</a>
        <a href="/" className="menu__link"> Browse</a>
      </div>

      <form  className="menu__search">
        <span className="menu__search-input">
          <img  src={searchIcon} alt="" />
          <input type="text" placeholder="Search"/>
        </span>
      </form>
    
    </div>
  )
}

export default Header