import React from 'react'
import './Dashboard.css'
import Navbar2 from '../Components/Navbar2'
import { FaTurnDown } from "react-icons/fa6";
import Card2 from '../Components/Card2';
import Footer from '../Components/Footer'

function Dashboard() {
    return (
        <>
            <Navbar2></Navbar2>
            <div className='dashboard'>
                <div className='blur dash-blur'>
                    <h1 className='dash-title'>Get Started With<br></br> Top Global Notes</h1>
                    <div className='dash-drop'>

                        <span className='drop-area'>
                            <select className='drop1'>
                                <option>Select your Class/Degree/Std</option>
                            </select>
                            <span className='drop-btn'><FaTurnDown></FaTurnDown></span>
                        </span>

                        <span className='drop-area'>
                            <select className='drop1'>
                                <option>Select your Class/Degree/Std</option>
                            </select>
                            <span className='drop-btn'><FaTurnDown></FaTurnDown></span>
                        </span>

                    </div>
                </div>
                
            </div>
            <div className='dash-content'>
                    <p>Available : 454 </p>
                    
                    <h1 className='s-head'>Top Global Files</h1>
                    <div className='items-container'>
                        <Card2></Card2>
                        <Card2></Card2>
                        <Card2></Card2>
                        <Card2></Card2>
                        <Card2></Card2>

                  
                </div>
                </div>
            <Footer></Footer>
        </>

    )
}

export default Dashboard