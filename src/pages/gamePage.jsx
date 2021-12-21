/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import Header from '../Layout/header/header'
import PreHeader from '../Layout/preHeader/preHeader'
import Game from '../Layout/game/game'
import Footer from '../Layout/footer/footer'

const GamePage = (props) => {
	const { match } = props.props
	console.log(props.props)
	const { gameId } = match.params
	const id = gameId.match(/\d/gi).join('')

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
		fetchGameData(Number(id))
	}, [])

	return (
		<div className='wrapper'>
			<PreHeader />
			<div className='content'>
				<Header />
				<div className='game'>
					<Game gameData={gameData} props={props.props} />
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default GamePage
