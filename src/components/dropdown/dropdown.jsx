/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
import React, { useRef, useLayoutEffect, useEffect } from 'react'
import PropTypes from 'prop-types'
import './dropdown.sass'

const Dropdown = ({
	name,
	dropDownOptions,
	handleAddFilterBadge,
	genresFilter,
}) => {
	const dropdownRef = useRef(null)
	useLayoutEffect(() => {
		dropdownRef.current.querySelector('.dropdown-options').style.display =
			'none'
	}, [])

	const handleClick = (e) => {
		let dropDownOpen = false

		e.preventDefault()
		e.stopPropagation()

		const parent = e.target.closest('.dropdown')
		const options = parent.querySelector('.dropdown-options')
		const background = parent.querySelector('.dropdown-back')

		function handleShowDropDown() {
			parent.classList.toggle('dropdown-show')
			options.classList.toggle('dropdown-options-show')
			background.classList.toggle('dropdown-back-show')
		}

		if (e.target.classList.contains('dropdown__button') && !dropDownOpen) {
			if (!dropDownOpen) {
				handleShowDropDown()
				dropDownOpen = !dropDownOpen
			}
		}

		if (e.target.classList.contains('dropdown-back')) {
			dropDownOpen = !dropDownOpen
			handleShowDropDown()
		}
	}

	const handleCheck = (e) => {
		const { target } = e
		e.stopPropagation()

		const checkedInputs = target
			.closest('.dropdown-options')
			.querySelectorAll('input[type="checkbox"]:checked')
		const badgeArrData = []

		if (target.tagName === 'INPUT') {
			checkedInputs.forEach((input) => {
				const badge = {
					id: Number(input.id),
					value: input.value,
					name: input.getAttribute('data-text'),
				}
				badgeArrData.push(badge)
			})

			handleAddFilterBadge(badgeArrData)
		}
	}

	const checkMap = new Map()
	genresFilter.forEach((genre) => {
		if (!checkMap.has(genre.id)) {
			checkMap.set(genre.id, genre)
		}
	})

	const createCheckboxes = () => {
		return dropDownOptions
			? // eslint-disable-next-line react/prop-types
			  dropDownOptions.map((optionsData) => {
					const { name, id, slug } = optionsData

					const input = (
						<input
							type='checkbox'
							name='dropdown-group'
							value={slug}
							data-id={id}
							id={id}
							data-text={name}
							onChange={() => {}}
							checked={!!checkMap.has(id)}
						/>
					)
					return (
						<label
							key={id}
							className='options'
							htmlFor={id}
							role='presentation'
							onClick={(e) => handleCheck(e)}
						>
							{input}
							{name}
						</label>
					)
			  })
			: null
	}

	useEffect(() => {
		createCheckboxes()
	}, [genresFilter])

	return (
		<div ref={dropdownRef} className='dropdown'>
			<button
				type='button'
				onClick={(e) => handleClick(e)}
				className='dropdown__button'
			>
				{name}
			</button>
			<div className='dropdown-options'>{createCheckboxes()}</div>
			<div
				role='button'
				tabIndex='0'
				aria-label='Close'
				onClick={(e) => handleClick(e)}
				onKeyUp={handleClick}
				className='dropdown-back'
			/>
		</div>
	)
}

Dropdown.propTypes = {
	name: PropTypes.string.isRequired,
	handleAddFilterBadge: PropTypes.func.isRequired,
}

export default Dropdown
