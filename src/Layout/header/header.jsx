import React from 'react'

import Logo from './img/logo.svg'
import searchIcon from './img/search-icon.svg'

import './header.sass'

const Header = () => {
	return (
		<div className='header'>
			<span className='logo'>
				<span>
					<img style={{ width: '184px' }} src={Logo} alt='PS market' />
				</span>
			</span>

			<div className='menu'>
				<span className='menu__link'> Latest </span>
				<span className='menu__link'> Collection </span>
				<span className='menu__link'> Deals </span>
				<span className='menu__link'> PS5 </span>
				<span className='menu__link'> Subscription </span>
				<span className='menu__link'> Browse </span>
			</div>

			<div className='menu__search'>
				<span className='menu__search-input'>
					<img src={searchIcon} alt='' />
					<input type='text' placeholder='Search' />
				</span>
			</div>
		</div>
	)
}

export default Header
