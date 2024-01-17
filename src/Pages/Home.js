import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import CollegeCard from '../Components/CollegeCard'
import collegelist from '../Data/collegelist'
import featureList from '../Data/features'

function Home() {
  return (
    <>
      <div className='home'>
        <div className='home-sec1'>

          <h1 className='sitename'>DIGINOTES</h1>
          <p className='slogan'>Makes study Simple and Easy</p>
          <div className='btns-area'>
            <button className='homepage-btns' type='submit'>
              <Link className='link' to='/auth'>
                Login
              </Link>
            </button>
            <button className='homepage-btns' type='submit'>
              <Link className='link' to='/auth'>
                Signin
              </Link>
            </button>
          </div>
        </div>
      </div>

      <div className='home-sec3'>

        <div className='sec3-one'>
        <div className='sec3-left'>{featureList[0].title}</div>
        <div className='sec3-right'>{featureList[0].desc}</div>
      </div>
      <div className='sec3-one'>
        <div className='sec3-right'>{featureList[1].desc}</div>
        <div className='sec3-left'>{featureList[1].title}</div>
      </div>
      <div className='sec3-one'>
        <div className='sec3-left'>{featureList[2].title}</div>
        <div className='sec3-right'>{featureList[2].desc}</div>
      </div>
      <div className='sec3-one'>
        <div className='sec3-right'>{featureList[3].desc}</div>
        <div className='sec3-left'>{featureList[3].title}</div>
      </div>
      <div className='sec3-one'>
        <div className='sec3-left'>{featureList[4].title}</div>
        <div className='sec3-right'>{featureList[4].desc}</div>
      </div>

      </div>
      <div className='home-sec2'>
        <div id='blur'>
        <h1 className='title2'>Top Institutes !</h1>
        <p className='slogan'> Who contribute with us</p>
        <div className='listofcolleges'>
          <div className='list-container'>
          {collegelist?
          collegelist.map((p,index)=>
          <div id='clgs' key={index}>
            <CollegeCard
            img={p.img}
            name={p.name}
            desc={p.desc}
            ></CollegeCard>
            </div>
          ):''}
        </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Home