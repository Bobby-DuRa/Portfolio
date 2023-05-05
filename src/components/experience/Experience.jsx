import React from 'react'
import './experience.css'
import {BsCheckCircle} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <br /> <br/>
      <h2> Skills</h2>
      <div className="container experience__container">
         <div className="experience__frontend">
            <h3> FrontEnd Development </h3>
            <div className="experience__content">
              <article className='experience__details'>
                    < BsCheckCircle className='experience__details-icon' />
                    <div>
                     <h4> HTML5 </h4>
                     </div>
              </article>

              <article className='experience__details'>
                    < BsCheckCircle className='experience__details-icon' />
                    <div> 
                     <h4> CSS </h4>
                     </div>
              </article>

              <article className='experience__details'>
                  < BsCheckCircle  className='experience__details-icon'/>
                  <div>
                      <h4> JavaScript </h4>
                      </div>
              </article>

              <article className='experience__details'>
                 < BsCheckCircle className='experience__details-icon' />
                 <div> 
                 <h4> AJAX</h4>
                </div>
              </article>

              <article className='experience__details'>
                < BsCheckCircle className='experience__details-icon'/>
                <div>
                  <h4> JQuery </h4>
                </div>
              </article>

              <article className='experience__details'>
                  < BsCheckCircle className='experience__details-icon'/>
                  <div>
                        <h4> React JS</h4>
                        </div>
              </article>
            </div>
         </div>


         <div className="experience__backend">
         <h3> Backend Development </h3>
            <div className="experience__content">
              <article className='experience__details'>
                    < BsCheckCircle className='experience__details-icon'/>
                    <div>
                     <h4> Progress 4GL </h4>
                     <small className='text-light'> Experienced </small>
                     </div>
              </article>

              <article className='experience__details'>
                    < BsCheckCircle className='experience__details-icon'/>
                    <div>
                     <h4> Java</h4>
                     <small className='text-light'> Experienced </small>
                     </div>
              </article>

            

              
            </div>
         </div>

      </div>
    </section >
  )
}

export default Experience