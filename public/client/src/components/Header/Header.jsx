import React from 'react'
import './header.css'

export default function Header() {
	return (
		<nav>
			<ul>
				<div style={{ display: 'flex' }}>
					<li>Home</li>
					<li>About</li>
					<li>Project</li>
					<li>Contact</li>
				</div>
			</ul>
			<ul>
				<li>Item 1</li>
			</ul>
		</nav>
	)
}
