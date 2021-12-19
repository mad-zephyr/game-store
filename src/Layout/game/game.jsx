/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { Squircle } from 'react-ios-corners'
import EsrbRating from '../../components/esrb-rating/esrbRating'
import Button from '../../components/button/button'
import './game.sass'

const Game = (props) => {
	const { gameData } = props
	console.log(gameData)

	const [favoriteList, setIconState] = useState(
		JSON.parse(window.localStorage.getItem('favorite')),
	)

	const onClickGobackButton = () => {
		window.history.back()
	}

	const onSetFavoriteGame = (identificator) => {
		function addToFav(updatedState) {
			window.localStorage.setItem('favorite', JSON.stringify(updatedState))
			setIconState(updatedState)
		}

		if (!favoriteList) {
			const favoriteListGame = []
			favoriteListGame.push(identificator)
			addToFav(favoriteListGame)
			return
		}
		const [...favoriteListGame] = favoriteList

		if (!favoriteList.includes(identificator)) {
			favoriteListGame.push(identificator)
			addToFav(favoriteListGame)
		} else {
			const index = favoriteListGame.indexOf(identificator)
			favoriteListGame.splice(index, 1)
			addToFav(favoriteListGame)
		}
	}

	const createPlatformBadge = () => {
		const platformBadge = gameData.platforms.map((eachPlatform) => {
			const { platform } = eachPlatform
			return (
				<div
					style={{ background: `#${gameData.dominant_color}` }}
					key={platform.id}
					className='game-platform'
				>
					{platform.name}
				</div>
			)
		})
		platformBadge.length = 3
		return platformBadge
	}

	return (
		<div className='game-wrapper'>
			{gameData ? (
				<Squircle radius={32} roundness={0.17}>
					<div
						className='game-background'
						style={{
							background: `url(${gameData.background_image}) center center/cover no-repeat`,
						}}
					>
						<div className='game-nav'>
							<Squircle radius={16} roundness={0.17}>
								<Button
									names='Go back'
									classes='btn-back'
									icon='back'
									onGoBack={onClickGobackButton}
								/>
							</Squircle>

							<Squircle radius={16} roundness={0.17}>
								<Button
									names=''
									classes='btn-favorite'
									icon='heart'
									setFavorite={onSetFavoriteGame}
									id={gameData.id}
								/>
							</Squircle>
						</div>
						<Squircle radius={20} roundness={0.17}>
							<div className='game-description'>
								<div className='game-info'>
									<div className='game-platformlist'>
										{createPlatformBadge()}
									</div>
									<div className='game-esrbRating'>
										<EsrbRating rating={gameData.esrb_rating} />
									</div>
								</div>
								<div
									style={{ background: `#${gameData.dominant_color}` }}
									className='game-block'
								>
									<div className='game-block-left'>
										<div className='game-title'>{gameData.name}</div>
										<div className='game-publishers'>
											{gameData.developers.map((eachPubliser) => (
												<span key={eachPubliser.id}> {eachPubliser.name}</span>
											))}
										</div>
									</div>
									<div className='game-block-right'>
										<Squircle radius={20} roundness={0.17}>
											<a href={gameData.website}>
												<button type='submit'>Game site</button>
											</a>
										</Squircle>
										<span> {gameData.website} </span>
									</div>
								</div>
							</div>
						</Squircle>
					</div>
				</Squircle>
			) : (
				<div> Loading... </div>
			)}
		</div>
	)
}

export default Game
