/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import './global/style.sass'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root'),
)
