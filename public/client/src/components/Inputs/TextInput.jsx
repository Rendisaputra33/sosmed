import React from 'react'

export default function TextInput({ type, value, changeValue, name, hint }) {
	return (
		<div className="inputs">
			<input
				type={type}
				placeholder={hint ? hint : ''}
				value={value}
				onChange={changeValue}
				name={name}
				autoComplete="off"
			/>
		</div>
	)
}
