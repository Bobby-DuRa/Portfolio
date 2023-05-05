import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {FcFolder} from 'react-icons/fc'

const About = () => {
  return (
    <section id="about">
      < br/> <br/>
      <h2> About Me</h2>
      <div className="container about__container">

        <div className="about__me">
          <div className="about__me-image">
               <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
                  <div className="about__cards">
                    <article className="about__card">
                      <FaAward />
                       <h5>
                        Experience
                       </h5>
                       <small> 1.5+ Years Experience</small>
                    </article>

                    <article className='about__card'>
                      <FiUsers/>
                       <h5>
                        Recent Company
                       </h5>
                       <small> Javra Software</small>
                    </article>

                    <article className='about__card'>
                      <FcFolder/>
                       <h5>
                        Projects
                       </h5>
                       <small> Completed mini projects in React JS. </small>
                    </article>
                  </div>
                    <p> As a recent graduate of Bsc.CSIT degree, I am currently working as a Software Engineer in Javra Software. 
                       I have gained few experience in web Development technologies such as HTML, CSS , JavaScript and Jquery. Through out my journey
                       I am willing to learn more about JS libraries and frameworks which made me to bring up this portfolio.
                    </p>
        </div>
      </div>
    </section>
  )
}

export default About