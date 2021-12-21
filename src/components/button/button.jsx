import React from 'react'
import PropTypes from 'prop-types'
import { Squircle } from 'react-ios-corners'
import './button.sass'

const iconBack = (
	<svg
		width='16'
		height='16'
		viewBox='0 0 16 16'
		xmlns='http://www.w3.org/2000/svg'
	>
		<path d='M5.86941 11.8005C5.61142 12.0632 5.18932 12.067 4.92664 11.809L1.5327 8.47563C1.40507 8.35028 1.33317 8.17889 1.33317 8C1.33317 7.82111 1.40507 7.64972 1.5327 7.52437L4.92664 4.19103C5.18932 3.93304 5.61142 3.93684 5.86941 4.19953C6.1274 4.46221 6.1236 4.88431 5.86092 5.1423L3.63004 7.33333L13.9998 7.33333C14.368 7.33333 14.6665 7.63181 14.6665 8C14.6665 8.36819 14.368 8.66667 13.9998 8.66667L3.63004 8.66667L5.86092 10.8577C6.1236 11.1157 6.1274 11.5378 5.86941 11.8005Z' />
	</svg>
)

const iconHeart = (fillRule) => {
	return (
		<svg
			width='24'
			height='24'
			viewBox='0 0 24 24'
			xmlns='http://www.w3.org/2000/svg'
			fill={fillRule}
		>
			<path d='M12 20.25C12 20.25 2.625 15 2.625 8.62501C2.62519 7.49826 3.01561 6.40635 3.72989 5.53493C4.44416 4.66351 5.4382 4.06636 6.54299 3.84501C7.64778 3.62367 8.79514 3.79179 9.78999 4.32079C10.7848 4.84979 11.5658 5.70702 12 6.74673L12 6.74673C12.4342 5.70702 13.2152 4.84979 14.21 4.32079C15.2049 3.79179 16.3522 3.62367 17.457 3.84501C18.5618 4.06636 19.5558 4.66351 20.2701 5.53493C20.9844 6.40635 21.3748 7.49826 21.375 8.62501C21.375 15 12 20.25 12 20.25Z' />
		</svg>
	)
}

const Button = (props) => {
	const {
		classes,
		names,
		onChangePage,
		activePage,
		onShowMore,
		onGoBack,
		icon,
		setFavorite,
		id,
		squircle,
	} = props

	const favoriteList = JSON.parse(window.localStorage.getItem('favorite'))
	const isFavorite = (identificator) => {
		if (favoriteList && favoriteList?.includes(identificator)) {
			return iconHeart('#D63D00')
		}
		return iconHeart('#555151')
	}

	const setIcon = () => {
		if (icon === 'back') {
			return iconBack
		}

		if (icon === 'heart') {
			return isFavorite(id)
		}
		return null
	}

	const renderBTN = () => {
		return (
			<button
				onClick={() =>
					onChangePage(names) || onShowMore() || onGoBack() || setFavorite(id)
				}
				className={
					activePage === names && classes === 'btn'
						? `${classes} active`
						: classes
				}
				type='button'
			>
				{setIcon()}
				{names}
			</button>
		)
	}

	return squircle ? (
		<Squircle radius={16} roundness={0.17}>
			{renderBTN()}
		</Squircle>
	) : (
		renderBTN()
	)
}

Button.defaultProps = {
	classes: 'btn',
	onChangePage: () => {},
	onShowMore: () => {},
	onGoBack: () => {},
	activePage: 0,
	setFavorite: () => {},
	icon: '',
	id: undefined,
	squircle: false,
}

Button.propTypes = {
	names: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
	classes: PropTypes.string,
	onChangePage: PropTypes.func,
	activePage: PropTypes.number,
	onShowMore: PropTypes.func,
	onGoBack: PropTypes.func,
	setFavorite: PropTypes.func,
	icon: PropTypes.string,
	id: PropTypes.number,
	squircle: PropTypes.bool,
}

export default Button
