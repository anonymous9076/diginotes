import React from 'react'
import './Login.css'
import {Link} from 'react-router-dom'
function Login() {
    return (
        <div className='login'>
            <div className='login-blur-cont'>
                <h1>Let's !  Get Started</h1>
                <div className='login-page'>
                    <span className='input-row'>
                        <label className='label'>E-mail</label>
                        <input type='email' className='input-sec' placeholder='Enter Your Email'></input>
                    </span>
                    <span className='input-row'>
                        <label className='label'>Password</label>
                        <input type='password' className='input-sec' placeholder='Enter Your Password'></input>
                    </span>
                    <p>Forget Password ?</p>
                    <Link className='link goto-sign' to='/signin'><p>Create a New Account </p></Link>
                    <div id='disabled'></div>
                    <span className='login-btn'>
                    <button type='submit' className='logb lb'>Login with Google</button>
                    </span>
                    <span className='login-btn'>
                    <button type='submit' className='logb lb'>Login with Github</button>
                    </span>
                    <span className='login-btn'>
                    <button type='submit' className='logb '>Submit</button>
                    </span>

                </div>

            </div>
        </div>
    )
}

export default Login