/* eslint-disable no-shadow */
import React, { useRef, useLayoutEffect } from 'react'
import PropTypes from 'prop-types'
import './dropdown.sass'

// eslint-disable-next-line react/prop-types
const Dropdown = ({ name, dropDownOptions, addHandler }) => {
	const dropdownRef = useRef(null)

	useLayoutEffect(() => {
		dropdownRef.current.querySelector('.dropdown-options').style.display =
			'none'
	}, [])

	const handleClick = (e) => {
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

		function chekcAllCheckbox() {
			const checkboxesIputs = parent.querySelectorAll('[name="dropdown-group"]')
			const checked = []
			checkboxesIputs?.forEach((input) => {
				if (input.checked) {
					const id = input.getAttribute('data-id')
					const value = input.getAttribute('value')
					const name = input.closest('.options').textContent
					checked.push({ id, value, name })
				}
			})
			addHandler(checked)
		}

		if (e.target.classList.contains('dropdown__button')) {
			handleShowDropDown()
			chekcAllCheckbox()
		}

		if (e.target.classList.contains('dropdown-back')) {
			handleShowDropDown()
			chekcAllCheckbox()
		}
	}

	function createCheckboxes() {
		// eslint-disable-next-line react/prop-types
		return dropDownOptions?.map((optionsData) => {
			const { name, id, slug } = optionsData
			return (
				<label key={id} className='options' htmlFor={id}>
					<input
						type='checkbox'
						name='dropdown-group'
						value={slug}
						data-id={id}
						id={id}
					/>
					{name}
				</label>
			)
		})
	}

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
				role='none'
				onClick={(e) => handleClick(e)}
				onKeyUp={handleClick}
				className='dropdown-back'
			/>
		</div>
	)
}

Dropdown.propTypes = {
	name: PropTypes.string.isRequired,
	addHandler: PropTypes.func.isRequired,
}

export default Dropdown
