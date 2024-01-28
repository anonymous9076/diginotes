import React, { useEffect, useState } from 'react'
import './Profile.css'
import { TiArrowForward } from "react-icons/ti";
import { FaCamera } from "react-icons/fa";

function Profile(props) {
  const{profile,handleclose}=props 

  return (
    <div className={profile? 'profile profile-show':'profile'}>
      <span className='back'> <TiArrowForward onClick={()=>handleclose(false)}></TiArrowForward></span>

        <div className='profile-img'>
          <span className='img-container'>
            <img className='user-img' src='./images/home.png' alt='...'></img>
            <span className='camera'>
              <span>
              <FaCamera></FaCamera>
              <input type='file'></input>
              </span>
            </span>
          </span>
        </div>

        <div className='user-name'>
          <h1>Tushar Kumar</h1>
        </div>
        <div className='lgout'>
           Logout
        </div>

    </div>
  )
}

export default Profile;