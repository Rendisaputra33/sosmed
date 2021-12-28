import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './store'
import * as Redux from 'react-redux'

ReactDOM.render(
	<React.StrictMode>
		<Redux.Provider store={store}>
			<App />
		</Redux.Provider>
	</React.StrictMode>,
	document.getElementById('root')
)
