import React from 'react'
import PageHeaderContent from '../../components/pageHeaderContent'
import { BsInfoCircleFill } from 'react-icons/bs'
import { DiApple, DiAndroid } from 'react-icons/di'
import { FaDev, FaDatabase } from 'react-icons/fa'
import { Animate } from 'react-simple-animate'
import { personalData } from './utils'
import './styles.scss'

const About = () => {
	return (
		<section className='about' id='about'>
			<PageHeaderContent
				headerText='About me'
				icon={<BsInfoCircleFill size={40} />}
			/>

			<div className='about__content'>
				<div className='about__content__personalWrapper'>
					<Animate
						play
						duration={1}
						delay={0}
						start={{
							transform: 'translateX(-800px)',
						}}
						end={{
							transform: 'translateX(0px)',
						}}
					>
						<h3 className='developerContent'>Front-End Developer</h3>
						<p>
							I am actively seeking a career as a Front-End Developer. I have
							worked as a warehouse associate for many years, but in May 2021
							was giving an opportunity to learn coding through Amazon's Career
							Choice. It turned out to be perfect timing since I had started my
							maternity leave the week I started class at Kenzie Academy. I had
							my second daughter three weeks into class and it was the only week
							I had missed. I graduated in November 2021 with an Associate
							Front-End Development Certificate.
							<br />
							<br />
							In January 2022 I received a position with Kenzie Academy as a
							Software Engineering Coach, where I have been able to build on my
							knowledge of JavaScript, HTML, and CSS. It has also been a
							fantastic opportunity to work with my peers as well as other
							learners going through Kenzie Academy's other programs. I am
							someone that loves to learn and I love to code.
						</p>
					</Animate>
					<Animate
						play
						duration={1}
						delay={0}
						start={{
							transform: 'translateX(500px)',
						}}
						end={{
							transform: 'translateX(0px)',
						}}
					>
						<h3 className='personalContent'>Personal Information</h3>
						<ul>
							{personalData.map((item, key) => (
								<li key={key}>
									<span className='title'>{item.label}</span>
									<span className='value'>{item.value}</span>
								</li>
							))}
						</ul>
					</Animate>
				</div>
				<div className='about__content__servicesWrapper'>
					<Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: 'translateX(500px)',
          }}
          end={{
            transform: 'translateX(0px)',
          }}
          >
						<div className='about__content__servicesWrapper__innerContent'>
							<div>
								<DiApple size={60} color='var(--selected-theme-main-color)' />
							</div>
							<div>
								<FaDatabase
									size={60}
									color='var(--selected-theme-main-color)'
								/>
							</div>
							<div>
								<DiAndroid size={60} color='var(--selected-theme-main-color)' />
							</div>
							<div>
								<FaDev size={60} color='var(--selected-theme-main-color)' />
							</div>
						</div>
					</Animate>
				</div>
			</div>
		</section>
	)
}

export default About
