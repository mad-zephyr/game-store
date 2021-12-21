import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import GamePage from './pages/gamePage'

import Layout from './Layout/Layout'

const App = () => {
	const [appData, setAppData] = useState({})
	const [page, setPage] = useState(1)
	const [gameData, setGameData] = useState()
	const onPageResults = 20
	const [platform, setPlatform] = useState(187)
	const [path, setPath] = useState('/')
	const [nextUrl, setNexttUrl] = useState(page + 1)

	const [url, setUrl] = useState(
		`${process.env.REACT_APP_API_URL}/games?
		key=${process.env.REACT_APP_API_KEY}
		&page=${page}
		&page_size=${onPageResults}
		&platforms=187`,
	)

	const headersList = {
		Accept: '*/*',
		'User-Agent': 'https://xmad.netlify.app/',
	}

	async function fetchData(requestUrl) {
		const request = await fetch(requestUrl, {
			method: 'GET',
			headers: headersList,
			credentials: 'same-origin',
		})
		setAppData(await request.json())
	}

	async function fetchMoreData(requestUrl) {
		const request = await fetch(requestUrl, {
			method: 'GET',
			headers: headersList,
			credentials: 'same-origin',
		})
		const fetchetData = await request.json()
		const uppdatedData = {
			...fetchetData,
			results: [...[...appData.results, ...fetchetData.results]],
		}
		setPage((prevPage) => prevPage + 1)
		setAppData(uppdatedData)
	}

	const onShowMore = () => {
		setNexttUrl(page + 1)
		const URL = `${process.env.REACT_APP_API_URL}/games?key=${process.env.REACT_APP_API_KEY}&page=${nextUrl}&page_size=${onPageResults}&platforms=${platform}`
		fetchMoreData(URL)
	}

	const onSwitchPage = (num) => {
		setPage(num)
		setUrl(
			(prevUrl) =>
				`${process.env.REACT_APP_API_URL}/games?key=${process.env.REACT_APP_API_KEY}&page=${num}&page_size=${onPageResults}&platforms=${platform}`,
		)
	}

	useEffect(() => {
		fetchData(url)
	}, [url])

	return (
		<Switch>
			<Route
				path='/'
				exact
				render={(props) => (
					<Layout
						onChangePage={onSwitchPage}
						data={appData}
						activePage={page}
						onShowMore={onShowMore}
						props={props}
					/>
				)}
			/>
			<Route
				path='/game/:gameName/:gameId'
				render={(props) => (
					<GamePage onChangePage={onSwitchPage} data={gameData} props={props} />
				)}
			/>
		</Switch>
	)
}

export default App
