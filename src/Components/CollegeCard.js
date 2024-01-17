import React from 'react'
import './CollegeCard.css'


function CollegeCard(props) {
  const {img,desc}=props
  return (
    <div  className='collegecard'>
        <img className='clg-img' src={img} alt='...'></img>
        <p className='clg-desc'>{desc}</p>
    </div>
  )
}

export default CollegeCard