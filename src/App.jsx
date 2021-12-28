import React, { useState, useEffect } from 'react'
import {
	Route,
	Switch,
	useLocation,
	useHistory,
	Redirect,
} from 'react-router-dom'
import queryString from 'query-string'
import GamePage from './pages/gamePage'
import Layout from './Layout/Layout'
import ServerDown from './pages/serverDown'

const App = () => {
	const [appData, setAppData] = useState({})
	const [page, setPage] = useState(1)
	const [url, setUrl] = useState('/')

	const location = useLocation()
	const history = useHistory()

	const setURLforNavigation = () => {
		const pathName = location.pathname
		const query = queryString.parse(location.search)
		const urlString = Object.entries(query)
			.map((locationData) => locationData.join('='))
			.join('&')

		const locationString = `${pathName}?${urlString}`
		setUrl((prevLocation) => locationString)
		return locationString
	}

	const headersList = {
		Accept: '*/*',
		'User-Agent': 'http://rawg.io',
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
			.catch((error) => {
				history.push('/server-down')
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
			})
		setPage((prevPage) => prevPage + 1)
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
			<Route path='/server-down' component={ServerDown} />
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
