import React from 'react'
import './Signin.css'
import {Link} from 'react-router-dom'

function Signin() {
  return (
    <div className='signin'>
       <div className='signin-blur-cont'>
                <h1>Join Our Community</h1>
                <div className='signin-page'>
                <span className='sign-input-row'>
                        <label className='sign-label'>First Name</label>
                        <input type='text' className='sign-input-sec' placeholder='Enter First Name'></input>
                    </span>
                    <span className='sign-input-row'>
                        <label className='sign-label'>Last Name</label>
                        <input type='text' className='sign-input-sec' placeholder='Enter Last Name'></input>
                    </span>
                    <span className='sign-input-row'>
                        <label className='sign-label'>DOB</label>
                        <input type='date' className='sign-input-sec' placeholder='Enter Your DOB '></input>
                    </span><span className='disappear'></span>
                    <span className='sign-input-row'>
                        <label className='sign-label'>Gender</label>
                        <span className='gender-section'>
                        <label className='gender-label'>Male</label>
                        <input type='radio' name='gender' className='gender-btn' ></input>
                        <label className='gender-label'>Female</label>
                        <input type='radio' name='gender' className='gender-btn' ></input>
                        </span>

                    </span><span className='disappear'></span>
                    <span className='sign-input-row'>
                        <label className='sign-label'>institute</label>
                        <input type='text' className='sign-input-sec' placeholder='Enter Your Institute'></input>
                    </span>
                    <span className='sign-input-row'>
                        <label className='sign-label'>Qualification</label>
                        <input type='text' className='sign-input-sec' placeholder='Enter Your Qualification'></input>
                    </span>
                    <span className='sign-input-row'>
                        <label className='sign-label'>E-mail</label>
                        <input type='email' className='sign-input-sec' placeholder='Enter Your Email'></input>
                    </span>
                    <span className='sign-input-row'>
                        <label className='sign-label'>Password</label>
                        <input type='password' className='sign-input-sec' placeholder='Enter Your Password'></input>
                    </span><span><Link to='/login' className='link goto-sign' ><p>Already Have an Account</p> </Link></span>
                    <span className='sign-btn'>
                    <button type='submit' className='signb'>Submit</button>
                    </span>
                </div>
                </div>
    </div>
  )
}

export default Signin