import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import Navbar from '../Components/Navbar';
import About from '../Components/About';
import Motive from'../Components/Motive';
import Career from '../Components/Career';
import Contact from '../Components/Contact';
function Home() {
  return (
    <>
      <Navbar></Navbar>
      <div className='home'>
          <div className='home-sec1'>
            <span className='box-for-riseup'>
              <h1 className='sitename'>DIGINOTES</h1>
            </span>
            <span className='box-for-riseup'>
              <p className='slogan'>Makes study Simple and Easy</p>
            </span>
            <span className='box-for-riseup'>
              <div className='btns-area'>
                  <Link className='link' to='/login'>
                <button className='homepage-btns' type='submit'>
                    Login
                </button>
                  </Link>
                  <Link className='link' to='/signin'>
                <button className='homepage-btns' type='submit'>
                    Signin
                </button>
                  </Link>
              </div>
            </span>
          </div>
          <div className='home-img'>
            <img  src='./images/home.png' alt='...'></img>
          </div>

        </div>
        <Career></Career>
      <About></About>
      <Contact></Contact>
      <Motive></Motive>
    </>

  )
}

export default Home