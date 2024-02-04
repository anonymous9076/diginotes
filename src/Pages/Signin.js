import React, { useState,useContext } from 'react'
import './Signin.css'
import {Link} from 'react-router-dom'
import { GetUserContext } from '../Context/UserContext'

function Signin() {
    const {signinUser} =useContext(GetUserContext)
    const [valid,setValid]=useState(false)
    const[object,setObject]=useState({
        firstname:'',
        lastname:'',
        dob:'',
        gender:'',
        institute:'',
        qualification:'',
        email:'',
        password:''
    }) ;

    const handleClick=(e)=>{
        if(object.dob&&object.firstname&&object.lastname&&object.institute&&object.qualification&&object.email&&object.password){
        e.preventDefault()
        signinUser(object)
       
        setObject({
            firstname:'',
            lastname:'',
            dob:'',
            gender:'',
            institute:'',
            qualification:'',
            email:'',
            password:''
        })
        setValid(false)
        }
        else{
            setValid(true)
        }
    }
   

    const handleInput=(e)=>{
        const value=e.target.value
        const name=e.target.name
        setObject((curr)=>{
           return({
             ...curr,
            [name]:value
        })
        })
    } 

  return (
    <div className='signin'>
       <div className='signin-cont blur'>
                <h1>Join Our Community</h1>
                <div className='signin-page'>
                <span className='sign-input-row'>
                        <label className='sign-label '>First Name *</label>
                        <input 
                        type='text'
                        value={object.firstname}
                        name='firstname' 
                        onChange={(e)=>handleInput(e)}
                        className={valid&&!object.firstname?'sign-input-sec red' :'sign-input-sec'}
                        placeholder='Enter First Name'></input>
                    </span>
                    <span className='sign-input-row'>
                        <label className='sign-label'>Last Name *</label>
                        <input 
                        type='text' 
                        value={object.lastname}
                        onChange={(e)=>handleInput(e)}
                        name='lastname'
                        className={valid&&!object.lastname?'sign-input-sec red' :'sign-input-sec'} 
                        placeholder='Enter Last Name'></input>
                    </span>
                    <span className='sign-input-row'>
                        <label className='sign-label'>DOB *</label>
                        <input 
                        type='date'
                        value={object.dob} 
                        onChange={(e)=>handleInput(e)}
                        name='dob'
                        className={valid&&!object.dob?'sign-input-sec red' :'sign-input-sec'} 
                        placeholder='Enter Your DOB '></input>
                    </span><span className='disappear'></span>
                    <span className='sign-input-row'>
                        <label className='sign-label'>Gender (opt)</label>
                        <span className='gender-section'>
                        <label className='gender-label'>Male</label>
                        <input 
                        type='radio'
                        value='male'
                        onChange={(e)=>handleInput(e)}
                        name='gender' 
                        className='gender-btn' ></input>
                        <label className='gender-label'>Female</label>
                        <input 
                        type='radio'
                        value='female'
                        onChange={(e)=>handleInput(e)}
                        name='gender' 
                        className='gender-btn' ></input>
                        </span>

                    </span><span className='disappear'></span>
                    <span className='sign-input-row'>
                        <label className='sign-label'>Institute *</label>
                        <input 
                        type='text'
                        value={object.institute}
                        onChange={(e)=>handleInput(e)}
                        name='institute' 
                        className={valid&&!object.institute?'sign-input-sec red' :'sign-input-sec'} 
                        placeholder='Enter Your Institute'></input>
                    </span>
                    <span className='sign-input-row'>
                        <label className='sign-label'>Qualification *</label>
                        <input 
                        type='text'
                        value={object.qualification}
                        onChange={(e)=>handleInput(e)}
                        name='qualification' 
                        className={valid&&!object.qualification?'sign-input-sec red' :'sign-input-sec'} 
                        placeholder='Enter Your Qualification'></input>
                    </span>
                    <span className='sign-input-row'>
                        <label className='sign-label'>E-mail *</label>
                        <input 
                        type='email' 
                        name='email'
                        value={object.email}
                        onChange={(e)=>handleInput(e)}
                        className={valid&&!object.email?'sign-input-sec red' :'sign-input-sec'} 
                        placeholder='Enter Your Email'></input>
                    </span>
                    <span className='sign-input-row'>
                        <label className='sign-label'>Password *</label>
                        <input 
                        type='password' 
                        name='password'
                        value={object.password}
                        onChange={(e)=>handleInput(e)}
                        className={valid&&!object.password?'sign-input-sec red' :'sign-input-sec'} 
                        placeholder='Enter Your Password'>  
                        </input>
                    </span><span><Link to='/login' className='link goto-sign' ><p>Already Have an Account</p> </Link></span>
                    <span className='sign-btn'>
                    <button 
                    type='submit' 
                    onClick={(e)=>handleClick(e)}
                    className='signb'>
                    Submit</button>
                    </span>
                </div>
                </div>
    </div>
  )
}

export default Signin