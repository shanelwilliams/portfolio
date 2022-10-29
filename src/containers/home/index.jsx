import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { Animate } from 'react-simple-animate'
import './styles.scss'

const Home = () => {
	return (
		<div>
			<section className='home' id='home'>
				<div className='home__text-wrapper'>
					<h1>
						Hello, I'm Shanel.
						<br />
						Frontend Web Developer
					</h1>
				</div>
				<Animate
					play
					duration={1.5}
					delay={1}
					start={{
						transform: 'translateY(600px)',
					}}
					end={{
						transform: 'translateX(0px)',
					}}
				>
					<div className='contact-me'>
						<div className='contact-me__buttons-wrapper'>
							<button>Hire me</button>
							<a href={'https://docs.google.com/document/d/1iSjKCjIsQGKNn1Gl6RVQyyuRPSpslIpfjKgc_sU6RNk/edit?usp=sharing'}>Download Resume</a>
						</div>
						<div className='contact-me__social-wrapper'>
							<FaLinkedin size={32} />
						</div>
					</div>
				</Animate>
			</section>
		</div>
	)
}

export default Home
