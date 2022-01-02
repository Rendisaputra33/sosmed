import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import NotFound from './pages/Error/404'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import './assets/style.css'
import './assets/scss/index.scss'
import Blog from './pages/Blogs/Blog'
import Detail from './pages/Blogs/Detail'
import Profile from './pages/Profile/Profile'

function App() {
	React.useEffect(() => {
		document.title = 'Breaking - WEB'
	}, [])

	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<></>} />
				<Route path="/register" element={<></>} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/blogs" element={<Blog />} />
				<Route path="/blogs/:blog_id" element={<Detail />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
