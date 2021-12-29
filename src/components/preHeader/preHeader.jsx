import React from 'react'
import { Link } from 'react-router-dom'
import logo from './img/xg-logo.svg'

import xGamezLogo from './img/xgamez-logo.svg'
import user from './img/user.jpg'
import arrow from './img/arrow.svg'
import './preheader.sass'

const preHeader = () => {
	return (
		<div className='preheader'>
			<Link to='/' className='ps_logo'>
				<img src={logo} alt='alt' />
			</Link>
			<div className='logo'>
				<img src={xGamezLogo} alt='sony logo' />
			</div>

			<img src={arrow} alt='arrow' className='arrow' />
			<div className='user'>
				<img src={user} alt='user' />
				<span className='user-title'>Prikkodko</span>
			</div>
		</div>
	)
}

export default preHeader
