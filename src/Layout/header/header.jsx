import React from 'react' 

import Logo from './img/playstation-store-logo.png'
import searchIcon from './img/search-icon.svg'

import './header.sass'

const Header = () => { 
  return (
    <div className="header">

      <span className="logo">
        <a>
          <img style={{width:'184px'}} src={Logo} alt="PS market"/>
        </a> 
      </span>

      <div className="menu">
        <a className="menu__link"> Latest</a>
        <a className="menu__link"> Collection</a>
        <a className="menu__link"> Deals</a>
        <a className="menu__link"> PS5</a>
        <a className="menu__link"> Subscription</a>
        <a className="menu__link"> Browse</a>
      </div>

      <div  className="menu__search">
        <span className="menu__search-input">
          <img  src={searchIcon} alt="" />
          <input type="text" placeholder="Search"/>
        </span>
      </div>
    
    </div>
  )
}

export default Header