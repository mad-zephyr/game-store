import React, { useState, useEffect } from 'react'
import Layout from './Layout/Layout'

const App = () => {
	const [appData, setAppData] = useState({})

	useEffect(() => {
		async function fetchData() {
			const headersList = {
				Accept: '*/*',
				'User-Agent': 'https://xmad.netlify.app/',
			}
			const URL = `${process.env.REACT_APP_API_URL}/games?key=${process.env.REACT_APP_API_KEY}&platforms=187`
			// const URL = `${process.env.REACT_APP_API_URL}/platforms?key=${process.env.REACT_APP_API_KEY}`

			const request = await fetch(URL, {
				method: 'GET',
				headers: headersList,
			})
			const response = await request.json()
			setAppData(response)
		}
		fetchData()
	}, [])

	return <Layout data={appData} />
}

export default App
