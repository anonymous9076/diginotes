import React from 'react'
import './Footer.css'
import { FaLinkedinIn,FaInstagram,FaGlobe,FaGithub,FaLocationDot,FaMobileScreenButton } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

function Footer() {
    return (
        <div className='footer'>
            <div className='footer-blur'>
                <div className='footer-contact'>
                    <span>
                    <h2>Contact us</h2>
                    <ul>
                        <li><FaLocationDot ></FaLocationDot> : Batala, Punjab</li>
                        <li><FaMobileScreenButton ></FaMobileScreenButton> : +91 82648-29755</li>
                        <li><HiOutlineMail ></HiOutlineMail> : tushar32234@gmail.com</li>
                    </ul>
                    </span>
                </div>
                <div className='footer-social'>
                    <div className='inner-social'>
                        <h2>Follow us</h2>
                        <span id='icon-body'>
                            <span className='foot-icons-container'>
                                <FaGithub className='foot-icon'></FaGithub>
                                <FaGlobe className='foot-icon'></FaGlobe>
                                <FaInstagram className='foot-icon'></FaInstagram>
                                <FaLinkedinIn className='foot-icon'></FaLinkedinIn>
                            </span>
                        </span>
                    </div>
                </div>
                <div className='footer-list1'>
                    <ul>
                        <li> Home</li>
                        <li> About</li>
                        <li> Career</li>
                        <li> Feedback</li>
                        <li> Troubleshoot</li>
                    </ul>
                </div>
                <div className='footer-list1'>
                    <ul>
                        <li> Dashboard</li>
                        <li> Profile</li>
                        <li> Saved</li>
                        <li> Upload</li>
                        <li> Logout</li>
                    </ul>
                </div>

            </div>

        </div>
    )
}

export default Footer