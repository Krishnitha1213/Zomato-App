import React from 'react';
import './Footer.css'

const Footer = (props) => {
    return(
        <footer>
            <hr/>
            <h3>
                &copy; Developer
            </h3>
            <div className='footDiv'>
                <ul>
                    <li>Contact Us</li>
                    <li>About Us</li>
                </ul>
            </div>
            <div className='footDiv'>
                <ul>
                    <li>Contact Us</li>
                    <li>About Us</li>
                </ul>
            </div>
            <div className='footDiv noborder'>
                <ul>
                    <li>Contact Us</li>
                    <li>About Us</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;