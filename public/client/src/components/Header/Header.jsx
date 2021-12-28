import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from '../../assets/images/logo.svg'
import './header.css'

export default function Header() {
	// location
	const location = useLocation()
	//
	const [show, setShow] = React.useState(false)

	// make effect
	React.useEffect(() => {
		// make when scroll add box shadow to navbar
		window.addEventListener('scroll', navBarEffect)
		// make when window resize add box shadow to navbar
		return () => window.removeEventListener('scroll', navBarEffect)
	}, [])

	// make useeffect for location
	React.useEffect(() => {
		setShow(location.pathname === '/login' || location.pathname === '/register')
	}, [location])

	const navBarEffect = () => {
		const navbar = document.querySelector('nav')
		if (window.scrollY > 50) {
			navbar.classList.add('navbar-active')
		} else {
			navbar.classList.remove('navbar-active')
		}
	}

	return (
		<nav style={{ display: !show ? 'flex' : 'none' }}>
			<ul style={{ marginLeft: 20 }}>
				{/* container */}
				<div style={{ display: 'flex' }}>
					{/* logo */}
					<div className="logo">
						<img src={Logo} alt="logo" />
					</div>
					{/* item */}
					<Link style={{ textDecoration: 'none', color: 'inherit' }} to="/">
						<li>Home</li>
					</Link>
					<Link style={{ textDecoration: 'none', color: 'inherit' }} to="/about">
						<li>About</li>
					</Link>
					<Link style={{ textDecoration: 'none', color: 'inherit' }} to="/projects">
						<li>Project</li>
					</Link>
					<Link style={{ textDecoration: 'none', color: 'inherit' }} to="/contact">
						<li>Contact</li>
					</Link>
					{/* end item */}
				</div>
			</ul>
			<ul style={{ marginRight: 20 }}>
				<li style={{ backgroundColor: 'antiquewhite' }}>Login</li>
			</ul>
			<ul className="toogle">
				<div className="toogle">
					<i className="fas fa-bars" style={{ fontSize: 20 }}></i>
				</div>
			</ul>
		</nav>
	)
}
