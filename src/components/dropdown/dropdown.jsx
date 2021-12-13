import React, {useRef, useLayoutEffect} from 'react';
import './dropdown.sass'

const Dropdown = () => {
	
	const dropdownRef = useRef(null)
 
	useLayoutEffect(() => {
		const width = dropdownRef.current.offsetWidth  
		dropdownRef.current.style.width = `${width+5}px`
		dropdownRef.current.querySelector('.dropdown-options').style.display = 'none'
	}, [])

	const handleClick = (e) => {
		e.preventDefault()
		const parent = e.target.closest('.dropdown') 
		const options = parent.querySelector('.dropdown-options')
 
		options.classList.toggle('dropdown-options-show')
		parent.classList.toggle('dropdown-show')
	}


	return (
		<div ref={dropdownRef} className='dropdown' >
			<button
				onClick={(e) => handleClick(e)}
				className="dropdown__button">
				Genre
			</button>
			<div className="dropdown-options" >

				<label className="options">
					<input type="checkbox" name="dropdown-group" value="Selection 2"/>
					Selection Two
				</label>

				<label className="options">
					<input type="checkbox" name="dropdown-group" value="Selection 2"/>
					Selection Two
				</label>

				<label className="options">
					<input type="checkbox" name="dropdown-group" value="Selection 2"/>
					Selection Two
				</label>

				<label className="options">
					<input type="checkbox" name="dropdown-group" value="Selection 2"/>
					Selection Two
				</label>

				<label className="options">
					<input type="checkbox" name="dropdown-group" value="Selection 2"/>
					Selection Two
				</label>

				<label className="options">
					<input type="checkbox" name="dropdown-group" value="Selection 2"/>
					Selection Two
				</label> 
			</div>
		</div>
	)
}

export default Dropdown