import React from 'react'

export default function ElevationButton({ children, type, onClick, height, width, color }) {
	return (
		<div>
			<button
				onClick={onClick ? onClick : () => {}}
				style={{
					backgroundColor: color ? color : 'blue',
					height: height ? height : '40px',
					width: width ? width : '100px',
				}}
				type={type}
			>
				{children}
			</button>
		</div>
	)
}
