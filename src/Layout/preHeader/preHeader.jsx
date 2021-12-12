import React from 'react'
import logo from './img/logo.svg'
import sony from './img/Sony_logo.svg'
import user from './img/user.jpg'
import arrow from './img/arrow.svg'
import './preheader.sass'

const preHeader = () => {
  return (
    <div className="preheader">
      <div className="ps_logo">
         <img  src={logo} alt="alt"/>
      </div> 
      <div className="sony">
        <img src={sony} alt="sony logo" />
      </div>

      <img src={arrow} alt="arrow" className="arrow" />
      <div className='user'>
        <img src={user} alt='user'/>
        <span className='user-title'>Prikkodko</span>
      </div>

    </div>
  )
}

export default preHeader

