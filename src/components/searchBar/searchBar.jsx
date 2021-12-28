/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react'
import PropTypes from 'prop-types'
import Badge from '../badge/badge'
import Dropdown from '../dropdown/dropdown'

import './searchBar.sass'

const SearchBar = (props) => {
	const {
		dropDownData,
		genresFilterBadge,
		handleAddFilterBadge,
		data,
		onDeleteFilterBadge,
	} = props
	// eslint-disable-next-line react/prop-types

	return (
		<div className='searchbar'>
			<h2 className='title'>ALL PS5 GAMES</h2>

			<div id='datasort'>
				<select>
					<option value='new'>New to Old</option>
					<option value='old'>Old to New</option>
				</select>
			</div>

			<div className='searchbar-wrapper'>
				<div className='searchbar__filter'>
					<Dropdown
						name='Genres'
						dropDownOptions={dropDownData}
						handleAddFilterBadge={handleAddFilterBadge}
						genresFilterBadge={genresFilterBadge}
					/>
					<div className='result'>
						<span>{data?.results?.length}</span> from {data.count} games
					</div>
				</div>

				<div className='searchbar__badge'>
					<div className='searchbar__badge-wrapper'>
						{genresFilterBadge
							? genresFilterBadge.map((genresBadgeData) => (
									<Badge
										key={genresBadgeData.id}
										{...genresBadgeData}
										onDeleteFilterBadge={onDeleteFilterBadge}
									/>
							  ))
							: null}
					</div>
				</div>
			</div>
		</div>
	)
}

Dropdown.propTypes = {
	count: PropTypes.number,
	addHandler: PropTypes.func.isRequired,
	onDeleteFilterBadge: PropTypes.func.isRequired,
}

export default SearchBar
