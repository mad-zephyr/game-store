import React from 'react'
import PropTypes from 'prop-types'
import teen from './icons/T.svg'
import everyOne10 from './icons/E10plus.svg'
import mature from './icons/M.svg'
import ratignPending from './icons/RP.svg'
import AdultsOnly from './icons/AO.svg'

const EsrbRating = (props) => {
	const { rating } = props
	console.log(props)

	const createRatingImage = (ratingIdentefication) => {
		if (ratingIdentefication === 2) {
			return <img src={everyOne10} alt={rating?.name} srcSet={everyOne10} />
		}
		if (ratingIdentefication === 3) {
			return <img src={teen} alt={rating?.name} srcSet={teen} />
		}
		if (ratingIdentefication === 4) {
			return <img src={mature} alt={rating?.name} srcSet={mature} />
		}
		if (ratingIdentefication === 5) {
			return <img src={AdultsOnly} alt={rating?.name} srcSet={AdultsOnly} />
		}

		return <img src={ratignPending} alt={rating?.name} />
	}
	return createRatingImage(rating?.id)
}

EsrbRating.defaultProps = {
	id: 9,
	name: 'rating pending',
}

EsrbRating.propTypes = {
	id: PropTypes.number,
	name: PropTypes.string,
}

export default EsrbRating
