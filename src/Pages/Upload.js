import React from 'react'
import './Upload.css'
import Navbar2 from '../Components/Navbar2'
import Footer from '../Components/Footer'

function Upload() {
  return (
  <>
  <Navbar2></Navbar2>
    <div className='upload'>
        <div className='upload-sec'>
            <div className='upload-file'>
                <div className='upload-area'>Drag & Drop <br></br> Browse File</div>
                <div className='upload-btn-area'>
                    <button className='upload-btn'>Upload</button>
                </div>

            </div>
            <div className='upload-detail'>
            <span className='input-data'>
                        <label className='upload-label'>Class/Degree *</label>
                        <input type='text' className='input-sec-up' placeholder='Enter Your Email'></input>
                    </span>
                    <span className='input-data'>
                        <label className='upload-label'>Subject *</label>
                        <input type='text' className='input-sec-up' placeholder='Enter Your Email'></input>
                    </span>
                    <span className='input-data'>
                        <label className='upload-label'>Pages *</label>
                        <input type='text' className='input-sec-up' placeholder='Enter Your Email'></input>
                    </span>
                    <span className='input-data'>
                        <label className='upload-label'>Book Ref (opt)</label>
                        <input type='text' className='input-sec-up' placeholder='Enter Your Email'></input>
                    </span>
                    <span className='input-data'>
                        <label className='upload-label'>Description</label>
                        <textarea type='textarea' className='input-sec-up textarea' placeholder='Enter Your Email'></textarea>
                    </span>
            </div>
        </div>
    </div>
    <Footer></Footer>

  </>
  )
}

export default Upload