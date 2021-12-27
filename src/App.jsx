import React, { useState, useEffect } from 'react'
import { Route, Switch, useLocation, Redirect } from 'react-router-dom'
import queryString from 'query-string'
import GamePage from './pages/gamePage'
import Layout from './Layout/Layout'

const App = () => {
	const [appData, setAppData] = useState({})
	const [page, setPage] = useState(1)

	const location = useLocation()
	const pathName = '/games'
	const query = queryString.parse(location.search)
	const urlString = queryString.stringify(query)

	const setURLforNavigation = () => {
		const updatedUrlString = `${pathName}?${urlString}`
		return updatedUrlString
	}
	const licationURL = setURLforNavigation()

	const [url, setUrl] = useState(licationURL)

	const headersList = {
		Accept: '*/*',
		'User-Agent': 'http://www.some-newsite.app',
	}

	function fetchData() {
		const requestURL = `${
			process.env.REACT_APP_API_URL
		}${setURLforNavigation()}&key=${process.env.REACT_APP_API_KEY}`

		const request = fetch(requestURL, {
			method: 'GET',
			headers: headersList,
			credentials: 'same-origin',
		})

		request
			.then((data) => data.json())
			.then((data) => {
				setAppData(data)
			})
	}

	const onLocationChange = (currentURL) => {
		setUrl((prevURL) => currentURL)
	}

	function fetchMoreData() {
		const request = fetch(appData.next, {
			method: 'GET',
			headers: headersList,

			credentials: 'same-origin',
		})

		request
			.then((dataGame) => dataGame.json())
			.then((dataGame) => {
				return {
					...dataGame,
					results: [...[...appData.results, ...dataGame.results]],
					next: dataGame.next,
				}
			})
			.then((dataGame) => {
				const unicGameDataResult = new Set()
				dataGame.results.forEach((eachGameData) => {
					if (unicGameDataResult.has(eachGameData.id)) {
						unicGameDataResult.add(eachGameData)
					}
				})
				setAppData(dataGame)
				return dataGame
			})

		setPage((prevPage) => prevPage + 1)
		// setAppData(uppdatedData)
	}

	const onShowMore = () => {
		fetchMoreData()
	}

	useEffect(() => {
		fetchData()
	}, [url])

	return (
		<Switch>
			<Route
				path='/games'
				exact
				render={(props) => (
					<Layout
						data={appData}
						activePage={page}
						onLocationChange={onLocationChange}
						onShowMore={onShowMore}
						props={props}
					/>
				)}
			/>
			<Route
				path='/game/:game/:gameId'
				render={(props) => <GamePage props={props} />}
			/>
			<Redirect to='/games' />
			{/* <Route
				path='/'
				exact
				render={(props) => (
					<Layout
						data={appData}
						onLocationChange={onLocationChange}
						activePage={page}
						props={props}
					/>
				)}
			/> */}
		</Switch>
	)
}

export default App
