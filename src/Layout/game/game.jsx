/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { Squircle } from 'react-ios-corners'
import EsrbRating from '../../components/esrb-rating/esrbRating'
import Button from '../../components/button/button'
import blurryImage from './assets/blurry.svg'
import './game.sass'

const Game = (props) => {
	const { gameData } = props
	// eslint-disable-next-line react/destructuring-assignment
	const { history } = props.props

	const [favoriteList, setIconState] = useState(
		JSON.parse(window.localStorage.getItem('favorite')),
	)

	const [bgImageLoaded, setBGImageLoaded] = useState(false)

	const onClickGobackButton = () => {
		history.goBack()
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
		platformBadge.length = 2
		return platformBadge
	}

	const urlRegex =
		// eslint-disable-next-line no-useless-escape
		/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&=]*)/gm
	const shortUrl = gameData?.website.match(urlRegex)

	const gamePublishersName = () => {
		const title = gameData.developers.map((eachPubliser) => (
			<span key={eachPubliser.id}>{eachPubliser.name}</span>
		))
		// if (window.innerWidth <= 420) {
		// title.length = 2
		// return title
		// }
		return title
	}

	return (
		<div
			onLoad={() => {
				setBGImageLoaded(true)
			}}
			className='game-wrapper'
		>
			{gameData ? (
				<Squircle radius={32} roundness={0.17}>
					<div
						className='game-background'
						style={
							bgImageLoaded
								? {
										background: `url(${gameData.background_image}) center center/cover no-repeat`,
								  }
								: {
										backgroundImage: `url(${blurryImage}) center center/cover no-repeat`,
								  }
						}
					>
						<div className='game-nav'>
							<Button
								names='Go back'
								classes='btn-back'
								icon='back'
								onGoBack={onClickGobackButton}
								squircle
								squircleRadius={16}
							/>

							<Button
								names=''
								classes='btn-favorite'
								icon='heart'
								setFavorite={onSetFavoriteGame}
								id={gameData.id}
								squircle
								squircleRadius={16}
							/>
						</div>
						<Squircle radius={20} roundness={0.17}>
							<div className='game-description'>
								<div className='game-info'>
									<div className='game-platformlist'>
										{createPlatformBadge()}
									</div>
									<EsrbRating
										classes='game-esrbRating'
										rating={gameData.esrb_rating}
									/>
								</div>
								<div
									style={{ background: `#${gameData.dominant_color}` }}
									className='game-block'
								>
									<div className='game-block-left'>
										<div className='game-title'>{gameData.name}</div>
										<div className='game-publishers'>
											<div className='game-publishers-wrapper'>
												{gamePublishersName()}
											</div>
										</div>
									</div>
									<div className='game-block-right'>
										<Squircle radius={20} roundness={0.17}>
											<a href={gameData.website}>
												<button type='submit'>Game site</button>
											</a>
										</Squircle>
										<span> {shortUrl} </span>
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
