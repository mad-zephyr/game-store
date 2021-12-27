/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Body from './body/body'
import Footer from '../components/footer/footer'
import Header from '../components/header/header'
import PreHeader from '../components/preHeader/preHeader'
import SearchBar from '../components/searchBar/searchBar'
import Card from '../components/card/card'
import Pagination from '../components/pagination/pagination'

import './layout.sass'
import './body/body.sass'

// eslint-disable-next-line react/prop-types
const Layout = (props) => {
	// eslint-disable-next-line react/prop-types
	const {
		data,
		children,
		onLocationChange,
		onChangePage,
		activePage,
		onShowMore,
		onClickGameCard,
	} = props
	const { count } = data
	const [genresFilter, setGenresFilter] = useState()

	// eslint-disable-next-line consistent-return
	const filterGenresData = () => {
		try {
			// eslint-disable-next-line react/prop-types
			const genresRaw = data.results.map((gameData) => gameData.genres)
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

	const handleAddFilterBadge = (gamesType) => {
		setGenresFilter(gamesType)
	}

	return (
		<div className='wrapper'>
			<PreHeader />
			<div className='content'>
				<Header />
				<SearchBar
					count={count}
					addHandler={handleAddFilterBadge}
					genresFilterBadge={genresFilter}
					dropDownData={filterGenresData()}
				/>
				<div className='gamecontainer'>
					{data.results
						? data.results.map((games) => (
								<Card
									key={games.id}
									data={games}
									onClickGameCard={onClickGameCard}
								/>
						  ))
						: null}
				</div>
				<Pagination
					onLocationChange={onLocationChange}
					activePage={activePage}
					onChangePage={onChangePage}
					onShowMore={onShowMore}
				/>
			</div>
			<Footer />
		</div>
	)
}

Layout.defaultProps = {
	count: 0,
	activePage: 1,
}

Layout.propTypes = {
	count: PropTypes.number,
	activePage: PropTypes.number,
}

export default Layout
