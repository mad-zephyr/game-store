import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import logo from './img/xg-logo.svg'
import xGameLogo from './img/xgamez-logo.svg'
import user from './img/user.jpg'
import arrow from './img/arrow.svg'

import './preheader.sass'

const preHeader = () => {
	const headerMenu = useRef(null)
	const handlerOpenMenu = () => {
		if (!headerMenu.current.style.height) {
			headerMenu.current.style.height = '300px'
		} else {
			headerMenu.current.style.height = ''
		}
	}

	return (
		<div className='preheader'>
			<Link to='/' className='ps_logo'>
				<img src={logo} alt='alt' />
			</Link>
			<div className='logo'>
				<img src={xGameLogo} alt='main logo' />
			</div>

			<div
				className='header-menu-opener'
				role='button'
				tabIndex='0'
				onKeyPress={handlerOpenMenu}
				onClick={handlerOpenMenu}
			>
				<img src={arrow} alt='arrow' className='arrow' />
			</div>
			<div ref={headerMenu} className='header-menu'>
				Hello
			</div>
			<div className='user'>
				<img src={user} alt='user' />
				<span className='user-title'>User Account</span>
			</div>
		</div>
	)
}

export default preHeader
