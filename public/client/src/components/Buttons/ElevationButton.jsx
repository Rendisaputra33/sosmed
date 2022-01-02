import React from 'react'

export default function ElevationButton({ children, type, onClick, height, width, color, radius }) {
	return (
		<div>
			<button
				onMouseOver={e => (e.currentTarget.style.backgroundColor = 'rgba(248, 206, 80, 0.623)')}
				onMouseLeave={e => (e.currentTarget.style.backgroundColor = color)}
				onClick={onClick ? onClick : () => {}}
				style={{
					backgroundColor: color ? color : 'blue',
					height: height ? height : '40px',
					width: width ? width : '100px',
					borderRadius: radius ? radius : '20px',
				}}
				type={type}
			>
				{children}
			</button>
		</div>
	)
}
