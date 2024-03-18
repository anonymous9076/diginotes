import React from 'react'
import './Contact.css'
import { FaInstagram, FaGithub, FaLinkedin, FaGlobeAmericas } from "react-icons/fa";
import { Link } from 'react-router-dom'

function Contact() {
  return (

    <div className='contact'>
      <div className='contact-sec1'>
        <h2>Diginotes</h2>
        <span>
          <Link className='link icon'>
            <FaInstagram id='air'></FaInstagram>
          </Link >
          <Link className='link icon'>
            <FaGithub id='air'></FaGithub>
          </Link>
          <Link className='link icon'>
            <FaLinkedin id='air'></FaLinkedin>
          </Link>
          <Link className='link icon'>
            <FaGlobeAmericas id='air'></FaGlobeAmericas>
          </Link>
        </span>
      </div>
      <div className='contact-sec2'>
        <form>
          <span className='contact-input'>
            <label>Name</label>
            <input type='text'></input>
          </span >
          <span className='contact-input'>
            <label>E-mail</label>
            <input type='text'></input>
          </span>
          <span className='contact-input'>
            <label>Mobile No.</label>
            <input type='text'></input>
          </span>
          <span className='contact-input'>
            <label>Your Queries</label>
            <input type='text'></input>
          </span>
          <span>
            <button type='submit'>{`--- >`}</button>
          </span>
        </form>

      </div>
    </div>
  )
}

export default Contact