import React from 'react'
import Container from '../../components/Container/Container'
import Hero from '../../assets/images/hero.svg'
import ElevationButton from '../../components/Buttons/ElevationButton'
// import Blob from '../../assets/images/blob.svg'

export default function Home() {
	return (
		<div className="app">
			<Container>
				<div className="column">
					<section className="hero">
						<div className="wraper-hero">
							<div>
								<img src={Hero} alt="hero" />
							</div>
						</div>
						<div className="desc">
							<h1 style={{ marginBottom: 5, fontSize: 44, fontWeight: 'bolder' }}>
								Welcome Programer
							</h1>

							<h1 style={{ marginBottom: 30, fontSize: 40 }}>
								Get interesting articles about the world of programming
							</h1>
							<p className="desc" style={{ marginBottom: 40 }}>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio culpa placeat
								voluptatem? Nesciunt ut odit enim numquam deleniti neque accusamus ratione delectus,
								vero, voluptates dolorem, praesentium illo eos alias eius.
							</p>

							<ElevationButton color="rgb(255, 212, 160)" width="300px">
								<span style={{ fontWeight: 'bold', color: 'white', fontSize: 20 }}>Join Now</span>
							</ElevationButton>
						</div>
					</section>
				</div>
			</Container>
		</div>
	)
}
