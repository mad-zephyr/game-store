import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Body from './body/body'
import Footer from './footer/footer'
import Header from './header/header'
import PreHeader from './preHeader/preHeader'
import SearchBar from './searchBar/searchBar'

import './layout.sass'

// eslint-disable-next-line react/prop-types
const Layout = ({ data, children }) => {
	// eslint-disable-next-line react/prop-types
	const { count } = data
	const [genresFilter, setGenresFilter] = useState()

	// eslint-disable-next-line consistent-return
	const filterGenresData = () => {
		try {
			// eslint-disable-next-line react/prop-types
			const genresRaw = data?.results.map((gameData) => gameData.genres)
			const genresArr = []
			genresRaw.forEach((gameGenresList) => {
				gameGenresList.forEach((gameGenre) => {
					const { id } = gameGenre
					if (!genresArr.some((genreData) => genreData.id === id)) {
						genresArr.push(gameGenre)
					}
				})
			})
			return genresArr
		} catch (e) {
			Error(e)
		}
	}

	const handleAddFilterBadge = (props) => {
		setGenresFilter(props)
	}

	return (
		<div className='wrapper'>
			<PreHeader />
			<Body games={data}>
				<Header />
				<SearchBar
					count={count}
					addHandler={handleAddFilterBadge}
					genresFilterBadge={genresFilter}
					dropDownData={filterGenresData()}
				/>
			</Body>
			<Footer />
		</div>
	)
}

Layout.propTypes = {}

export default Layout
