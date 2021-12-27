import React from 'react'
import PropTypes from 'prop-types'

import teen from './icons/T.svg'
import everyOne10 from './icons/E10plus.svg'
import mature from './icons/M.svg'
import ratignPending from './icons/RP.svg'
import AdultsOnly from './icons/adults-only.svg'

const ratingESRB = {
	teen,
	everyOne10,
	mature,
	ratignPending,
	AdultsOnly,
}

const EsrbRating = (props) => {
	const { rating, classes } = props

	return (
		<img
			className={classes}
			src={ratingESRB[rating?.slug] || AdultsOnly}
			alt={rating?.name}
			srcSet={ratingESRB[rating?.slug]}
		/>
	)
}

EsrbRating.defaultProps = {
	rating: {
		id: 2,
		name: 'ratignPending',
		slug: 'ratignPending',
	},
}

EsrbRating.propTypes = {
	rating: PropTypes.shape({
		id: PropTypes.number,
		slug: PropTypes.string,
		name: PropTypes.string,
	}),
	classes: PropTypes.string.isRequired,
}

export default EsrbRating
