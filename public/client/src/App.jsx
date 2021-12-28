import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import NotFound from './pages/Error/404'
import Home from './pages/Home/Home'
import './assets/style.css'
import './assets/scss/index.scss'

function App() {
	React.useEffect(() => {
		document.title = 'Breaking - WEB'
	}, [])

	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<></>} />
				<Route path="/register" element={<></>} />
				<Route path="/register" element={<></>} />
				<Route path="/profile/:username" element={<></>} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
