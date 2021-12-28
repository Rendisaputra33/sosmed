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
							<h1>Welcome Blogger</h1>
							<p className="desc">
								Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
								piece of classical Latin literature from 45 BC, making it over 2000 years old.
								Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked
								up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and
								going through the cites of the word in classical literatureof BC.
							</p>
							<p className="desc">
								Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
								piece of classical Latin literature from 45 BC, making it over 2000 years old.
								Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked
								up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and
							</p>
							<ElevationButton color="rgb(255, 212, 160)" width="300px" height="45px">
								<span style={{ fontWeight: 'bold', color: 'white', fontSize: 20 }}>Join Now</span>
							</ElevationButton>
						</div>
					</section>
					<section style={{ display: 'flex', justifyContent: 'center' }}>
						<div className="card">
							<p>
								Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
								piece of classical Latin literature from 45 BC, making it over 2000 years old.
								Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked
								up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and
								going through the cites of the word in classical literature, discovered the
								undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de
							</p>
						</div>
					</section>
				</div>
			</Container>
		</div>
	)
}
