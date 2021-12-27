/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useState, useEffect, useLocation } from 'react'
import { Squircle } from 'react-ios-corners'
import Header from '../components/header/header'
import PreHeader from '../components/preHeader/preHeader'
import Game from '../Layout/game/game'
import DescritpionGame from '../components/gameTextDescription/gameTextDescription'
import Footer from '../components/footer/footer'
import GameSpecs from '../components/gameSpecs/gameSpecs'

const GamePage = (props) => {
	const { match } = props.props
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

	return gameData ? (
		<div className='wrapper'>
			<PreHeader />
			<Squircle className='squircle' radius={0} roundness={0.17}>
				<div className='content'>
					<Header />
					<div className='game'>
						<Game gameData={gameData} props={props.props} />
						<GameSpecs gameData={gameData} />
						<DescritpionGame gameData={gameData} />
					</div>
				</div>
			</Squircle>
			<Footer />
		</div>
	) : (
		<> Loading... </>
	)
}

export default GamePage
