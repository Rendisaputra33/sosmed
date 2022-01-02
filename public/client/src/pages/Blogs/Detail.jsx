import React from 'react'
import { useParams } from 'react-router-dom'

export default function Detail(props) {
	const paramenters = useParams()

	React.useEffect(() => {
		console.log(paramenters)
	}, [paramenters])

	return (
		<div>
			<span>Detail Post</span>
		</div>
	)
}
