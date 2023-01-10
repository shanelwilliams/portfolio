import React from 'react'
import PageHeaderContent from '../../components/pageHeaderContent'
import { AiFillProject } from 'react-icons/ai'
import ImageOne from '../../img/code.avif'
import ImageTwo from '../../img/laptop.avif'
import ImageThree from '../../img/learning.avif'
import ImageFour from '../../img/mirror-image.avif'
import ImageFive from '../../img/no-bad-days.avif'
import ImageSix from '../../img/planning.avif'
import { filterOptions } from './utils'


const Portfolio = () => {
	return (
		<section id='portfolio' className='portfolio'>
			<PageHeaderContent 
      headerText = 'My Portfolio'
      icon={<AiFillProject size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {
            filterOptions.map((option) => (
              <li key={option.id}>
                {option.label}
              </li>
            ))
          }
        </ul>
      </div>
		</section>
	)
}

export default Portfolio
