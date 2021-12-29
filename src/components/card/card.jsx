/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Squircle } from 'react-ios-corners'
import blurryImage from './assets/blurry.svg'
import './card.sass'

const Card = (props) => {
	const { data } = props
	const [imageLoaded, setImageLoaded] = useState(false)
	const { background_image: bgUrl, name, rating, platforms, id } = data

	const badgePlatforms = platforms.map((badge) => {
		const { platform } = badge
		return (
			<span className='tags-elem' key={platform.id}>
				{platform.name}
			</span>
		)
	})

	badgePlatforms.length = 3

	const handlerId = (e, identificator) => {
		const { code, type } = e
		// eslint-disable-next-line no-empty
		if (code === 'Space' || type === 'click') {
		}
	}

	return (
		<Squircle
			className='card'
			radius={38}
			roundness={0.17}
			tabIndex='0'
			type='button'
			role='button'
			onLoad={() => {
				if (document.readyState === 'complete') {
					setImageLoaded(true)
				}
			}}
			onKeyUp={(e) => handlerId(e, id)}
			onClick={(e) => handlerId(e, id)}
		>
			<div className='card-wrapper'>
				<Squircle radius={32} roundness={0.17}>
					<img style={{ display: 'none' }} src={bgUrl} alt='game' />
					<Link to={`/game/${data.slug}/id=${data.id}`}>
						<div
							className='card-image'
							loading='lazy'
							style={
								imageLoaded
									? {
											background: `url(${bgUrl}) center center/cover no-repeat `,
									  }
									: {
											background: `url(${blurryImage}) center center/cover no-repeat `,
									  }
							}
							alt={name}
						/>
					</Link>
				</Squircle>
				<h3>Rating: {rating}</h3>
				<h2>{name}</h2>
				<div className='tags'>{badgePlatforms}</div>
			</div>
		</Squircle>
	)
}

export default Card
