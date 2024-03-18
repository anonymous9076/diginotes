import React, { useContext, useEffect, useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import { GetUserContext } from '../Context/UserContext'
import { useNavigate } from 'react-router-dom';
import Loading from '../Components/Loading'

function Login() {
    const { loginUser, authorized, load } = useContext(GetUserContext)
    const [valid, setValid] = useState(false)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
    const [object, setObject] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = async (e) => {
        e.stopPropagation()
        e.preventDefault()
        setLoading(true)

        //if every thing write correctly 
        if (object.email && object.password) {
            setValid(false)
            loginUser(object)
            setObject({
                email: '',
                password: ''
            })
        }

        //if every thing does'nt write correctly 
        else {
            setValid(true)
            setLoading(false)
            setObject({
                email: '',
                password: ''
            })
        }
    }
    useEffect(() => {
        setLoading(load)
    }, [load])

    useEffect(() => {
        if (authorized) {
            navigate('/dashboard')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [authorized])

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
            {loading ?
                <Loading>
                </Loading> : ''
            }
            <div className='login-cont blur'>
                <h1>Let's !  Get Started</h1>
                <div className='login-page'>
                    <span className='input-row'>
                        <label className='label'>E-mail</label>
                        <input
                            type='email'
                            className={object.email ? 'input-sec' : valid ? 'input-sec red' : 'input-sec'}
                            value={object.email}
                            name='email'
                            onChange={(e) => handleChange(e)}
                            placeholder='Enter Your Email'></input>
                    </span>
                    <span className='input-row'>
                        <label className='label'>Password</label>
                        <input
                            type='password'
                            className={object.password ? 'input-sec' : valid ? 'input-sec red' : 'input-sec'}
                            value={object.password}
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
                            onClick={(e) => handleSubmit(e)}
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