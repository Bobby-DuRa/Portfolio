import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/weathersite.JPG'
import IMG2 from '../../assets/restaurant.PNG'
import IMG3 from '../../assets/todo.JPG'
import IMG4 from '../../assets/accordian.JPG'
import IMG5 from '../../assets/portfolio.JPG'



const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Weeather Site',
    github: 'https://github.com/Bobby-DuRa/WeatherSite'
  
  },
  {
    id: 2,
    image: IMG2,
    title: 'Restaurant',
    github: 'https://github.com/Bobby-DuRa/Restaurant_withReactHook'
    
  },
  {
    id: 3,
    image: IMG3,
    title: 'Todo List',
    github: 'https://github.com/Bobby-DuRa/TodoList-Reacthook'
    
  },
  {
    id: 4,
    image: IMG4,
    title: 'Accordian',
    github: 'https://github.com/Bobby-DuRa/Accordion-ReactHook'
    
  },
  {
    id: 5,
    image: IMG5,
    title: 'portfolio',
    github: 'https://github.com/Bobby-DuRa/Portfolio'
    
  }

]
const Portfolio = () => {
  return (
    <section id="portfolio">
      <br/>       
      <br/>       
      <h2> Github Projects </h2>
      <div className="container portfolio__container">
      
   {
    data.map(({id,image,title,github,demo})=>{
      return(
        <article className='portfolio__item'>
        <div className="portfolio__item-image">
        <img src={image} alt={title} />
        </div>
        <h3> {title} </h3>
        <div className="portfolio__item-cta">
            <a href={github} className='btn' target='_blank'>Github </a>
        </div>
        </article>
      )
    })
   }

   

    
      </div>
    </section>
  )
}

export default Portfolio