/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'
import { Squircle } from 'react-ios-corners'
import './card.sass'

const Card = (props) => {
	const { data, onClickGameCard } = props
	const { background_image: bgUrl, name, rating, platforms, id } = data

	const badgePlatforms = platforms.map((badge) => {
		const { platform } = badge
		return (
			<span className='tags-elem' key={platform.id}>
				{platform.name}
			</span>
		)
	})
	const handlerId = (e, identificator) => {
		const { code, type } = e
		// eslint-disable-next-line no-empty
		if (code === 'Space' || type === 'click') {
		}
	}

	badgePlatforms.length = 3

	return (
		<div
			tabIndex='0'
			type='button'
			role='button'
			onKeyUp={(e) => handlerId(e, id)}
			onClick={(e) => handlerId(e, id)}
			className='card'
		>
			<Squircle radius={32} roundness={0.17}>
				<Link to={`/game/${data.slug}/id=${data.id}`}>
					<div
						className='card-image'
						loading='lazy'
						style={{
							background: `url(${bgUrl})`,
							backgroundPosition: 'center',
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat',
						}}
						alt={name}
					/>
				</Link>
			</Squircle>
			<h3>Rating: {rating}</h3>
			<h2>{name}</h2>
			<div className='tags'>{badgePlatforms}</div>
		</div>
	)
}

export default Card
