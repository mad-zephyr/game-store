import React, { useState, useEffect } from 'react'
import { Route, Switch, useLocation, useHistory } from 'react-router-dom'
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
				console.log(data)
				setAppData(data)
			})
	}

	const onLocationChange = (currentURL) => {
		setUrl((prevURL) => currentURL)
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
						props={props}
					/>
				)}
			/>
			<Route
				path='/game/:game/:gameId'
				render={(props) => <GamePage props={props} />}
			/>
			<Route
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
			/>
		</Switch>
	)
}

export default App
