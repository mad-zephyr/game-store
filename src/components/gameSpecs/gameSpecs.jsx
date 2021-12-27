import React from 'react'
import PropTypes from 'prop-types'
import { compareAsc, format } from 'date-fns'
import { Squircle } from 'react-ios-corners'

import './gameSpecs.sass'

const GameSpecs = ({ gameData }) => {
	// eslint-disable-next-line camelcase
	const {
		playtime,
		metacritic,
		released,
		platforms,
		genres,
		// eslint-disable-next-line camelcase
		esrb_rating,
		developers,
		publishers,
	} = gameData

	const releasedDate = format(new Date(released), 'do MMM uuuu')

	const createDescr = (subtitle, data, aditionalDescription = '') => {
		let arrData = []

		if (Array.isArray(data)) {
			arrData = data.map((tag) => {
				const { platform } = tag
				return platform ? (
					<span key={platform.id} className='title'>
						{platform.name}
					</span>
				) : (
					<span key={tag.id} className='title'>
						{tag.name}
					</span>
				)
			})
		}

		return Array.isArray(data) ? (
			<div className='block'>
				<span className='subtitle'> {subtitle}</span>
				{arrData}
			</div>
		) : (
			<div className='block'>
				<div className='subtitle'> {subtitle}</div>
				<span className='title'>
					{data} {aditionalDescription}
				</span>
			</div>
		)
	}

	const playtimeDescr = createDescr('Playtime', playtime, 'hours')
	const metaScore = createDescr('Metascore', metacritic)
	const releasedDescr = createDescr('Released Date', releasedDate)
	const parentPlatforms = createDescr('Platforms', platforms)
	const gameDevelopers = createDescr('Developers', developers)
	const genre = createDescr('Genre', genres)
	const gamePublishers = createDescr('Publishers', publishers)
	const ageRating = (
		<div className='block'>
			<div className='subtitle'> Age rating </div>
			<div className='title'>{esrb_rating.name}</div>
		</div>
	)

	return (
		<Squircle radius={24} roundness={0.17}>
			<div className='game-specification'>
				<div className='game-specification-wrapper'>
					<div className='left'>
						{playtimeDescr} {metaScore} {ageRating} {releasedDescr}
					</div>
					<div className='right'>
						{parentPlatforms} {genre} {gameDevelopers} {gamePublishers}
					</div>
				</div>
			</div>
		</Squircle>
	)
}

GameSpecs.propTypes = {
	// eslint-disable-next-line react/forbid-prop-types
	gameData: PropTypes.object.isRequired,
}
export default GameSpecs
