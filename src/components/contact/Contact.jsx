
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import React, { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wkqtwdh', 'template_x49068h', form.current, 'qRDQSX-mJIT19RLe-');
    e.target.reset();
  };
  return (
    <section id='contact'>
      <br /> <br />
      <h2> Contact Me </h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail  className='contact__option-icon'/>
            <h4> Email </h4>
            <h5> Bobbydura10@gmail.com </h5>
            <a href="mailto:bobbydura10@gmail.com" target='__blank'>
              Send a mail
            </a>
          </article>

        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Full Name' required />
          <input type="email" name="email" placeholder='Your email' required />
          <textarea name="message" rows="4" placeholder='Your message' required></textarea>
          <button type='submit' className='btn btn-primary' id="submitbtn"> Send message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact