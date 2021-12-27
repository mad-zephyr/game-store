/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react'
import PropTypes from 'prop-types'
import Badge from '../badge/badge'
import Dropdown from '../dropdown/dropdown'

import './searchBar.sass'

const SearchBar = (props) => {
	const { dropDownData, count, genresFilterBadge, addHandler } = props

	// eslint-disable-next-line react/prop-types

	return (
		<div className='searchbar'>
			<h2 className='title'>All PS5 GAMES</h2>

			<div id='datasort'>
				<select>
					<option value='volvo'>New to Old</option>
					<option value='saab'>Old to New</option>
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
				<div className='searchbar__badge-wrapper'>
					{genresFilterBadge
						? genresFilterBadge.map((genresBadgeData) => (
								<Badge {...genresBadgeData} />
						  ))
						: null}
				</div>
			</div>
		</div>
	)
}

Dropdown.propTypes = {
	count: PropTypes.number,
	addHandler: PropTypes.func.isRequired,
}

export default SearchBar
