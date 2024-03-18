import React from 'react'
import './About.css'
import { FaInstagram,FaGithub,FaLinkedin,FaGlobeAmericas } from "react-icons/fa";
import {Link } from 'react-router-dom' 

function About() {
  return (
    <div className='about'>
        <div className='about-sec1'>
            <img src='./images/img.png' alt='...'></img>
            <h2>Tushar Kumar</h2>
            <p>Web Developer</p>
        </div>
        <div className='about-sec2'>
            <h1>About Me</h1>
            <p>Outcome-focused web developer with good experience seeking a challenging position
                to leverage my expertise in front-end and back-end development. Committed to
                staying up-to-date with emerging web technologies and dedicated to delivering high-
                quality, responsive, and scalable web solutions that meet client needs</p>
            <span>
            <Link className='link icon'>
            <FaInstagram id='ai'></FaInstagram>
          </Link >
          <Link className='link icon'>
            <FaGithub id='ai'></FaGithub>
          </Link>
          <Link className='link icon'>
            <FaLinkedin id='ai'></FaLinkedin>
          </Link>
          <Link className='link icon'>
            <FaGlobeAmericas id='ai'></FaGlobeAmericas>
          </Link>
            </span>
        </div>
    </div>
  )
}

export default About