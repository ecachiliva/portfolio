import React, { useRef } from 'react';
import './contact.css';
import Walmart from '../../assets/walmart.png';
import Adobe from '../../assets/adobe.png';
import Microsoft from '../../assets/microsoft.png';
import Facebook from '../../assets/facebook.png';

import FacebookIcon from '../../assets/facebook-icon.png';
import TwitterIcon from '../../assets/twitter.png';
import YouTubeIcon from '../../assets/youtube.png';
import InstagramIcon from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';


    export const Contact = () => {
        const form = useRef();
        const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_exe8b6o', 'template_a5t8gar', form.current, {publicKey: 'qECRMHltOEqR5OnLv',})
            .then(() => {
                console.log('SUCCESS!');
                e.target.reset();
                alert('Email Sent !')
                    }, (error) => {
                        console.log('FAILED...', error.text);
                    },
                );
    };


  return (
    <section id="contactPage">
        <div id="clients">
            <h1 className="contactPageTitle">My clients</h1>
            <p className="clientsDesc">
                I have had the opportunity to work with a diverse group of companies.
                some of the notable companies I have wroked wuth includes
            </p>
            <div className="clientsImgs">
                <img src={Walmart}   alt="Client" className="clientsImg" />
                <img src={Adobe}     alt="Client" className="clientsImg" />
                <img src={Microsoft} alt="Client" className="clientsImg" />
                <img src={Facebook}  alt="Client" className="clientsImg" />
            </div>
        </div>
        <div id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc"> Please fill out the form below to discuss any work opportunities</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder="Your Name" name='your_name' />
                <input type="email" className="email" placeholder="Your Email" name='your_email' />
                <textarea name="message" placeholder='Your Message' rows={5} className='msg' ></textarea>
                <button type="submit" value="Send" className='submitBtn'>Submit</button>
                <div className="links">
                    <img src= {FacebookIcon} alt="Facebook" className="link" />
                    <img src= {TwitterIcon} alt="Twitter" className="link" />
                    <img src= {YouTubeIcon} alt="YouTube" className="link" />
                    <img src= {InstagramIcon} alt="Instagram" className="link" />
                </div>
            </form>
        </div>
    </section>
  );
} 

export default Contact;