import React from 'react'
import './css/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
function Footer() {
    return (
        <>
            <footer>
                <div className='footer-top'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-3 col-sm-6 col-xs-12 segment-one'>
                                <h3>Designed</h3>
                                <p>This is Muhibullah Khan Kamali .An undergraduate student at computer system engineering.
                                Mission is to contribute in IT industry of Pakistan.
                                </p>
                            </div>
                            <div className='col-md-3 col-sm-6 col-xs-12 segment-two'>
                                <h2>EebTech</h2>
                                <ul>
                                    <li><a href='/'>Home</a></li>
                                    <li><a href='about'>About</a></li>
                                    <li><a href='services'>Services</a></li>
                                    <li><a href='contact'>Contact</a></li>
                                </ul>
                            </div>
                            <div className='col-md-3 col-sm-6 col-xs-12 segment-three'>
                                <h2>Follow Us</h2>
                                <p>Please Follow us on our Social Media Profile in order to keep updated. </p>
                                <a href='https://www.facebook.com/muheeb.kamali/'><FontAwesomeIcon icon={faFacebook} /></a>
                                <a href='https://www.linkedin.com/in/muhibullah-khan-kamali-ab05371a3/'><FontAwesomeIcon icon={faLinkedin} /></a>
                                <a href='https://twitter.com/MuheebKamali'><FontAwesomeIcon icon={faTwitter} /></a>
                                <a href='https://github.com/Muhibullah-09'><FontAwesomeIcon icon={faGithub} /></a>
                            </div>
                            <div className='col-md-3 col-sm-6 col-xs-12 segment-four'>
                                <h2>Feedback</h2>
                                <form action="">
                                    <textarea name="comment" >Enter text here...</textarea><br />
                                    <input type="submit" value='Send' />
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
                <p className='footer-bottom-text'>All Right reserved by &copy; EebTech.2020</p>
            </footer>
        </>
    )
}
export default Footer