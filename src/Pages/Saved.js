import React from 'react'
import './Saved.css'
import Card2 from '../Components/Card2'
import Navbar2 from '../Components/Navbar2'
import Footer from '../Components/Footer'
function Saved() {
    return (
        <>
            <Navbar2></Navbar2>
            <div className='saved'>
                <div className=' saved-body'>
                    <h1 className='s-head'>Saved Files</h1>
                    <div className='items-container'>
                        <Card2></Card2>
                        <Card2></Card2>
                        <Card2></Card2>
                    </div>
                </div>
                <div className='upload-body'>
                    <h1 className='s-head'>Upload Files</h1>
                    <div className='items-container'>
                        <Card2></Card2>
                        <Card2></Card2>
                        <Card2></Card2>
                        <Card2></Card2>
                        <Card2></Card2>

                    </div>
                </div>

            </div>
            <Footer></Footer>
        </>
    )
}

export default Saved