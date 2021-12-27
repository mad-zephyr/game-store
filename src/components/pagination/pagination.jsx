/* eslint-disable react/prop-types */
import React from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import query from 'query-string'
import Button from '../button/button'

import './pagination.sass'

const Pagination = (props) => {
	const { onShowMore, onLocationChange } = props
	const location = useLocation()
	const history = useHistory()

	const queryParams = query.parse(location.search)

	const changePageFunction = (params) => {
		let curPage = queryParams.page
		let incrementPage = 1

		if (Number.isNaN(Number(curPage))) {
			curPage = 1
		}

		if (params === 'increment') {
			incrementPage = Number(curPage) + 1
		}

		if (params === 'decriment' && curPage >= 2) {
			incrementPage = Number(curPage) - 1
		}

		if (Number(params) && !Number.isNaN(params)) {
			incrementPage = params
		}

		queryParams.page = incrementPage
		const locationString = query.stringify(queryParams)
		history.replace(`${location.pathname}?${locationString}`)
		onLocationChange(locationString)
	}

	const handlerForward = () => {
		changePageFunction('increment')
	}

	const handlerBackward = () => {
		changePageFunction('decriment')
	}

	const createConstBtn = () => {
		return Array(4)
			.fill('')
			.map((num, index) => {
				const identificator = index + 1
				return (
					<button
						key={identificator}
						onClick={() => changePageFunction(identificator)}
						className='btn'
						type='button'
					>
						{identificator}
					</button>
				)
			})
	}

	return (
		<div className='pagination'>
			<div className='pagination-num'>
				<button onClick={handlerBackward} className='btn' type='button'>
					{'<'}
				</button>
				{createConstBtn()}
				<button onClick={handlerForward} className='btn' type='button'>
					{'>'}
				</button>
			</div>
			<Button
				classes='btn pagination-showmore'
				names='Show more'
				type='more'
				onShowMore={onShowMore}
			/>
		</div>
	)
}

Pagination.defaultProps = {
	count: 2,
}

export default Pagination
