import React from 'react'
import './Profile.css'
import { TiArrowForward } from "react-icons/ti";
import { FaCamera } from "react-icons/fa";
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Profile(props) {

  const { profile, handleclose } = props
  const firstname = localStorage.getItem('firstname')
  const lastname = localStorage.getItem('lastname')
  const email = localStorage.getItem('email')
  const profileImg = localStorage.getItem('image')
  const navigate = useNavigate()


  const handleLogout = () => {
    localStorage.clear()
    navigate('/Login')
  }

  const handleUploadImg = async (e) => {
    const value = e.target.files[0]
    const formdata = new FormData()
    formdata.append('profileImg', value, value.name)
    formdata.append('email', email)

    try {
      const res = await axios.post('http://localhost:8080/user/uploadImg', formdata)
      const imgurl = `http://localhost:8080/${res.data}`
      localStorage.setItem('image', imgurl)
      alert('successfully updated image')
    }
    catch (err) {
      alert(err)
    }

  }

  console.log(profile)
  return (
    <div className={profile ? 'profile profile-show' : 'profile'}>
      <span className='back'> <TiArrowForward onClick={() => handleclose(false)}></TiArrowForward></span>
      <div className='profile-img'>
        <span className='img-container'>
          {profileImg ?
            <img
              className='user-img'
              src={profileImg}
              alt='...'>
            </img>
            : <img
              className='user-img'
              src='./images/home.png'
              alt='...'>
            </img>
          }
          <span className='camera'>
            <span>
              <FaCamera></FaCamera>
              <input
                type='file'
                name='profileImg'
                onChange={(e) => handleUploadImg(e)}
              ></input>
            </span>
          </span>
        </span>
      </div>

      <div className='user-name'>
        <h1>{firstname} {lastname}</h1>
      </div>
      <div className='lgout' onClick={handleLogout}>
        Logout
      </div>

    </div>
  )
}

export default Profile;