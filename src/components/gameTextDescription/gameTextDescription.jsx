/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import React from 'react'
import PropTypes from 'prop-types'
import './gameTextDescription.sass'

function replaceCharacter(string) {
	return string
		.replace(/(<p>)|(<br \/>)|(<\/p>)|(<\/h3>)|(<h3>)/gm, '')
		.replace(/(?:&#39;)/gm, `'`)
		.replace(/(?:&quot;)/gm, `"`)
		.replace(/(?:&amp;)/gm, `&`)
}

const DescritpionGame = ({ gameData }) => {
	const { description } = gameData

	const text = description.split('\n').map((string) => {
		return string
			.replace(/(<p>)|(<br \/>)|(<\/p>)|(<\/h3>)|(<h3>)/gm, '')
			.replace(/(?:&#39;)/gm, `'`)
			.replace(/(?:&quot;)/gm, `"`)
			.replace(/(?:&amp;)/gm, `&`)
	})

	const title = text[0].split(' ').splice(0, 4).join(' ').concat(' ...')

	const createHtml = () => {
		return text.map((string, index) => {
			const newString = replaceCharacter(string)

			if (string.toUpperCase() === string) {
				return (
					<div key={index} className='game-text-title'>
						{replaceCharacter(newString)}
					</div>
				)
			}
			return (
				<div key={index} className='game-text-paragraph'>
					{newString}
				</div>
			)
		})
	}

	return (
		<div className='game-text'>
			<div className='game-text-left'>
				{createHtml().length > 0 ? title : ''}
			</div>
			<div className='game-text-rigth'>{createHtml()}</div>
		</div>
	)
}

DescritpionGame.defaultProps = {
	description: '',
}

DescritpionGame.propTypes = {
	description: PropTypes.string,
}

export default DescritpionGame
