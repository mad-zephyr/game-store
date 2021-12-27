/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react'
import './body.sass'

const Body = (props) => {
	const { children } = props

	return (
		<div className='content'>
			{children}
			<div className='gamecontainer' />
		</div>
	)
}

export default Body
