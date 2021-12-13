/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react'
import PropTypes from 'prop-types'
import Badge from '../../components/badge/badge'

import './searchBar.sass'

import Dropdown from '../../components/dropdown/dropdown'

const SearchBar = (props) => {
	const { dropDownData, count, genresFilterBadge, addHandler } = props

	// eslint-disable-next-line react/prop-types
	const genresBadge = genresFilterBadge?.map((genresBadgeData) => (
		<Badge {...genresBadgeData} />
	))

	return (
		<div className='searchbar'>
			<h2 className='title'>All PS5 GAMES</h2>

			<div className='select-wrapper'>
				<select id='datasort'>
					<option value='volvo'>New to Old</option>
					<option value='saab'>Old to New</option>
					<option value='opel'>Opel</option>
					<option value='audi'>Audi</option>
				</select>
			</div>

			<form className='searchbar__filter'>
				<Dropdown
					name='Genres'
					dropDownOptions={dropDownData}
					addHandler={addHandler}
				/>
				<div className='result'>{count} games</div>
			</form>

			<div className='searchbar__badge'>
				<div className='searchbar__badge-wrapper'>{genresBadge}</div>
			</div>
		</div>
	)
}

Dropdown.propTypes = {
	count: PropTypes.number.isRequired,
	addHandler: PropTypes.func.isRequired,
}

export default SearchBar
