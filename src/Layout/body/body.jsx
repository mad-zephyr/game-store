/* eslint-disable react/prop-types */
import React from 'react'
import Card from '../../components/card/card'
import './body.sass'

const Body = (props) => {
	const {
		children,
		games: { results },
	} = props

	const gameCards = results?.map((data) => <Card key={data.id} data={data} />)

	return (
		<div className='content'>
			{children}
			<div className='gamecontainer'>{gameCards}</div>
		</div>
	)
}

export default Body
