/* eslint-disable react/prop-types */
import React from 'react'
import PropTypes from 'prop-types'

import './badge.sass'

const Badge = (props) => {
	const { id, value, name: names, onDeleteFilterBadge } = props

	const deleteHandler = (identificator) => {
		onDeleteFilterBadge(identificator)
	}

	return (
		<span data-id={id} value={value} className='searchbar__badge-elem'>
			{names}
			<button type='button' onClick={() => deleteHandler(id)}>
				<svg
					className='close-btn'
					version='1.1'
					xmlns='http://www.w3.org/2000/svg'
					x='0px'
					y='0px'
					viewBox='0 0 14 14'
				>
					<path d='M10.7,4.2C11,4,11,3.6,10.7,3.3c-0.3-0.3-0.7-0.3-0.9,0L7.1,6.1L4.2,3.3C4,3,3.6,3,3.3,3.3c-0.3,0.3-0.3,0.7,0,0.9L6.1,7L3.3,9.8c-0.3,0.3-0.3,0.7,0,0.9C3.6,11,4,11,4.2,10.7l2.8-2.8l2.8,2.8c0.3,0.3,0.7,0.3,0.9,0c0.3-0.3,0.3-0.7,0-0.9L8,7L10.7,4.2z' />
				</svg>
			</button>
		</span>
	)
}

Badge.propTypes = {
	id: PropTypes.number.isRequired,
	value: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	onDeleteFilterBadge: PropTypes.func.isRequired,
}

export default Badge
