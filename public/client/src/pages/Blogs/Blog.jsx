import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import blogAction from '../../store/actions/blogAction'
import string from '../../utils/string'
import Spiner from '../../components/Loaders/Spiner'
import ElevationButton from '../../components/Buttons/ElevationButton'

export default function Blog(props) {
	//
	const dispatch = useDispatch()
	const post = useSelector(state => state.post)
	const [loading, setLoading] = React.useState(false)

	React.useEffect(() => {
		setLoading(true)
		dispatch(blogAction.getPosts()).then(res => {
			setLoading(false)
		})
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<React.Fragment>
			{loading && <Spiner loading={loading} />}
			<div className="container">
				<div style={{ padding: 30 }}>
					<div style={{ margin: 1 }}>
						<div className="grid-container grid-row-3">
							<div>
								<ul>
									{[...new Array(12).keys()].map((it, i) => {
										return (
											<li key={i} style={{ marginBottom: 20 }}>
												<i className="fas fa-home"></i> Front End
											</li>
										)
									})}
								</ul>
							</div>
							<div className="grid-container grid-row-1">
								<div className="card">
									<div className="grid-container grid-row-2">
										<div className="inputs">
											<input type="text" placeholder="search article by title or tags" />
										</div>
										<ElevationButton radius={10} color={'antiquewhite'}>
											<i className="fas fa-search" style={{ fontSize: 16 }}></i>
										</ElevationButton>
									</div>
								</div>
								{post.posts &&
									post.posts.map((item, index) => (
										<div className="card card-hover" key={index}>
											<h3 className="title" style={{ fontWeight: '600', marginBottom: 16 }}>
												{item.title}
											</h3>
											<p style={{ fontSize: 14 }}>
												{string.truncateString(item.descryption, 250, true)}
											</p>
										</div>
									))}
							</div>
							<div>
								<div></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}
