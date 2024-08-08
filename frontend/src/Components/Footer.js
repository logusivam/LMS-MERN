import React from 'react'
import './Footer.css'

import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TelegramIcon from '@material-ui/icons/Telegram';
import InstagramIcon from '@material-ui/icons/Instagram';

function Footer() {
    return (
        <div className='footer'>
            <div>
                <div className='footer-data'>
                    <div className="contact-details">
                        <h1>Contact Us</h1>
                        <p>Librarian</p>
                        <p>Government School</p>
                        <p>Chennai</p>
                        <p>Tamil Nadu</p>
                        <p>India</p>
                        <p><b>Email:</b>lsm@gmail.com</p>
                    </div>
                    <div className='usefull-links'>
                        <h1>Usefull Links</h1>
                        <a href='#home'>Buy Books</a>
                        <a href='#home'>Visit Store</a>
                        <a href='#home'>Prices</a>
                        <a href='#home'>Offers</a>
                    </div>
                    <div className='librarian-details'>
                        <h1>Librarian</h1>
                        <p>Loganathan G P</p>
                        <p>Education</p>
                        <p>Contact: +91 6385744752</p>
                    </div>
                </div>
                <div className="contact-social" >
                    <a href='https://twitter.com/logusivam26' className='social-icon'><TwitterIcon style={{ fontSize: 40,color:"rgb(283,83,75)"}} /></a>
                    <a href='https://www.linkedin.com/in/loganathan26/' className='social-icon'><LinkedInIcon style={{ fontSize: 40,color:"rgb(283,83,75)"}} /></a>
                    <a href='#home' className='social-icon'><TelegramIcon style={{ fontSize: 40,color:"rgb(283,83,75)"}} /></a>
                    <a href='#home' className='social-icon'><InstagramIcon style={{ fontSize: 40,color:"rgb(283,83,75)"}} /></a>
                </div>
            </div>
            <div className='copyright-details'>
                <p className='footer-copyright'>&#169; 2024 copyright all right reserved<br /><span>Designed with ❤️ by Loganathan G P</span></p>
            </div>
        </div>
    )
}

export default Footer