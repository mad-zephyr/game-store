import React, { useState, useEffect } from 'react'
import Layout from '../Layout/Layout'

const App = () => {
	const [appData, setAppData] = useState({})
	const [page, setPage] = useState(1)
	const [onPageResults, setOnPageResults] = useState(20)
	const [platform, setPlatform] = useState(187)

	const [url, setUrl] = useState(
		`${process.env.REACT_APP_API_URL}/games?
		key=${process.env.REACT_APP_API_KEY}
		&page=${page}
		&page_size=${onPageResults}
		&platforms=${platform}`,
	)

	const [nextUrl, setNexttUrl] = useState(page + 1)

	const headersList = {
		Accept: '*/*',
		'User-Agent': 'https://xmad.netlify.app/',
	}

	async function fetchData(requestUrl) {
		const request = await fetch(requestUrl, {
			method: 'GET',
			headers: headersList,
		})
		setAppData(await request.json())
	}

	async function fetchMoreData(requestUrl) {
		const request = await fetch(requestUrl, {
			method: 'GET',
			headers: headersList,
		})
		const fetchetData = await request.json()
		const uppdatedData = {}
		uppdatedData.results = [...[...appData.results, ...fetchetData.results]]
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
		// window.scrollTo({
		// top: 0,
		// left: 0,
		// behavior: 'smooth',
		// })
	}

	useEffect(() => {
		fetchData(url)
	}, [url])

	return (
		<Layout
			onChangePage={onSwitchPage}
			data={appData}
			activePage={page}
			onShowMore={onShowMore}
		/>
	)
}

export default App
