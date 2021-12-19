/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import Header from '../Layout/header/header'
import PreHeader from '../Layout/preHeader/preHeader'
import Game from '../Layout/game/game'
import Footer from '../Layout/footer/footer'

const GamePage = () => {
	const [gameData, setGameData] = useState()
	const headersList = {
		Accept: '*/*',
		'User-Agent': 'https://xmad.netlify.app/',
	}

	const fetchGameData = (gameIdentificator) => {
		const URL = `${process.env.REACT_APP_API_URL}/games/${gameIdentificator}?key=${process.env.REACT_APP_API_KEY}`

		const request = fetch(URL, {
			method: 'GET',
			headers: headersList,
			credentials: 'same-origin',
		})
		request
			.then((response) => {
				return response.json()
			})
			.then((response) => {
				setGameData(response)
			})
	}

	useEffect(() => {
		const { pathname } = window.location
		const gameId = pathname
			.match(/(?:id=\d{1,})/gm)[0]
			.split('')
			.filter((elem) => Number(elem))
			.join('')
		fetchGameData(Number(gameId))
	}, [])

	return (
		<div className='wrapper'>
			<PreHeader />
			<div className='content'>
				<Header />
				<div className='game'>
					<Game gameData={gameData} />
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default GamePage
