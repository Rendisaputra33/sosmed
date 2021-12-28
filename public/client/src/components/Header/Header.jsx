import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

export default function Header() {
	// make effect
	React.useEffect(() => {
		// make when scroll add box shadow to navbar
		window.addEventListener('scroll', navBarEffect)
		// make when window resize add box shadow to navbar
		return () => window.removeEventListener('scroll', navBarEffect)
	}, [])

	const navBarEffect = () => {
		const navbar = document.querySelector('nav')
		if (window.scrollY > 100) {
			navbar.classList.add('navbar-active')
		} else {
			navbar.classList.remove('navbar-active')
		}
	}

	return (
		<nav>
			<ul style={{ marginLeft: 20 }}>
				<div style={{ display: 'flex' }}>
					<Link style={{ textDecoration: 'none', color: 'inherit' }} to="/">
						<li>Logo</li>
					</Link>
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
				</div>
			</ul>
			<ul style={{ marginRight: 20 }}>
				<li style={{ backgroundColor: 'antiquewhite' }}>Login</li>
			</ul>
		</nav>
	)
}
