import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './assets/style.css'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'

function App() {
	React.useEffect(() => {
		document.title = 'Breaking - WEB'
	}, [])

	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
