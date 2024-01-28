import React, { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
function Login() {
    const [object, setObject] = useState({
        email: '',
        password: ''
    })
    const [valid, setValid] = useState(false)

    const handleclick = async (e) => {
        if (object.email && object.password) {
            console.log(object)
            try {
                const res = await axios.post('http://localhost:8080/user/login', object)
                alert(res.data)
            }
            catch (error) {
                alert("invalid username or password")
            }

            setValid(false)
            setObject({
                email: '',
                password: ''
            })
        }
        else {
            setValid(true)

        }
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setObject({
            ...object,
            [name]: value
        })
    }

    return (
        <div className='login'>
            <div className='login-cont blur'>
                <h1>Let's !  Get Started</h1>
                <div className='login-page'>
                    <span className='input-row'>
                        <label className='label'>E-mail</label>
                        <input
                            type='email'
                            className={object.email ? 'input-sec' : valid ? 'input-sec red' : 'input-sec'}
                            value={Object.email}
                            name='email'
                            onChange={(e) => handleChange(e)}
                            placeholder='Enter Your Email'></input>
                    </span>
                    <span className='input-row'>
                        <label className='label'>Password</label>
                        <input
                            type='password'
                            className={object.password ? 'input-sec' : valid ? 'input-sec red' : 'input-sec'}
                            value={Object.password}
                            name='password'
                            onChange={(e) => handleChange(e)}
                            placeholder='Enter Your Password'></input>
                    </span>
                    <p>Forget Password ?</p>
                    <Link className='link goto-sign' to='/signin'><p>Create a New Account </p></Link>
                    <div id='disabled'></div>
                    <span className='login-btn'>
                        <button
                            type='submit'
                            className='logb lb'>
                            Login with Google
                        </button>
                    </span>
                    <span className='login-btn'>
                        <button
                            type='submit'
                            className='logb lb'>
                            Login with Github
                        </button>
                    </span>
                    <span className='login-btn'>
                        <button
                            type='submit'
                            onClick={(e) => handleclick(e)}
                            className='logb log-submit'>
                            Submit
                        </button>
                    </span>

                </div>

            </div>
        </div>
    )
}

export default Login