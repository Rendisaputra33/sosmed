import React from 'react'

export default function Spiner({ loading }) {
	return (
		<div
			style={{
				display: loading ? 'flex' : 'none',
				position: 'absolute',
				zIndex: 10,
				backgroundColor: 'rgba(61, 61, 60, 0.836)',
				alignItems: 'center',
				justifyContent: 'center',
				flexDirection: 'column',
				width: '100%',
				height: '100%',
			}}
		>
			<span className="loader"></span>
			<span style={{ color: 'rgba(231, 231, 229, 0.87)', fontWeight: 'bold' }}>Loading...</span>
		</div>
	)
}
