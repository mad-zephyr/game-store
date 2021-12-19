/* eslint-disable react/prop-types */
import React from 'react'
import PropTypes from 'prop-types'
import Button from '../button/button'

import './pagination.sass'

const Pagination = (props) => {
	const { count, onChangePage, activePage, onShowMore } = props

	return (
		<div className='pagination'>
			<div className='pagination-num'>
				{Array(8)
					.fill('')
					.map((num, index) => (
						// eslint-disable-next-line react/no-array-index-key
						<Button
							onChangePage={onChangePage}
							classes='btn'
							activePage={activePage}
							// eslint-disable-next-line react/no-array-index-key
							key={index}
							names={index + 1}
						/>
					))}
			</div>
			<Button
				classes='btn pagination-showmore'
				names='Show more'
				type='more'
				onShowMore={onShowMore}
			/>
		</div>
	)
}

Pagination.defaultProps = {
	count: 2,
}

Pagination.propTypes = {
	count: PropTypes.number,
}

export default Pagination
