/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
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

	const [genresFilter, setGenresFilter] = useState()
	const history = useHistory()
	// eslint-disable-next-line consistent-return
	const filterGenresData = () => {
		try {
			// eslint-disable-next-line react/prop-types
			const genresRaw = data.results.map((gameData) => gameData.genres)
			const genresArr = []
			genresRaw.forEach((gameGenresList) => {
				gameGenresList.forEach((gameGenre) => {
					if (!genresArr.some((genreData) => genreData.id === gameGenre.id)) {
						genresArr.push(gameGenre)
					}
				})
			})
			return genresArr
		} catch (e) {
			Error(e)
		}
	}

	const createURL = (queryName, arrData) => {
		const arr = arrData.map((filterData) => filterData.value).join(',')
		const path = history.location.pathname
		if (arr) {
			history.push(`${path}?${queryName}=${arr}`)
			onLocationChange(`${path}?${queryName}=${arr}`)
		} else {
			history.push(`${path}`)
			onLocationChange(`${path}`)
		}
	}

	const handleAddFilterBadge = (gamesType) => {
		createURL('genres', gamesType)
		setGenresFilter(gamesType)
	}

	return (
		<div className='wrapper'>
			<PreHeader />
			<div className='content'>
				<Header />
				<SearchBar
					data={data}
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
	activePage: 1,
}

Layout.propTypes = {
	activePage: PropTypes.number,
}

export default Layout
