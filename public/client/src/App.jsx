import Header from './components/Header/Header'
import React from 'react'
import './assets/style.css'

function App() {
	React.useEffect(() => {
		document.title = 'Sosmed - WEB'
	}, [])

	return (
		<div className="App">
			<Header />
		</div>
	)
}

export default App
