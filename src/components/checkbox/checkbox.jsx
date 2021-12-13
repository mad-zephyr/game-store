import React from 'react';


const Checkbox = () => {
	return (
		<div className="checkbox"> 
			<div className="checkbox-wrapper"> 
				<input type="checkbox" name="" id="PS4" /> 
				<label htmlFor="PS4"> ps4 </label>
			</div> 
			<div className="checkbox-wrapper">
				<input type="checkbox" name="" id="PS5" />
				<label htmlFor="PS5"> PS5 </label>
			</div> 
		</div>
	)
}

export default Checkbox
