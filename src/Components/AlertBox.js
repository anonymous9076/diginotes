import React from 'react'
import './AlertBox.css'

function AlertBox() {
  return (
    <div className='alert-container'>
        <div className='alert-box'>
            <h1>Hi there</h1>
            <div className='alert-btn'>
                <button type='submit'> OK</button>
            </div>
        </div>
    </div>
  )
}

export default AlertBox