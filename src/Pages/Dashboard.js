import React, { useContext, useState, useEffect } from 'react'
import './Dashboard.css'
import Navbar2 from '../Components/Navbar2'
import { FaTurnDown } from "react-icons/fa6";
import Card2 from '../Components/Card2';
import Footer from '../Components/Footer'
import { GetDataContext } from '../Context/IndexContext'
import axios from 'axios';

function Dashboard() {
     
    const {notes,isLoading}= useContext(GetDataContext)
    const [degree,setDegree] = useState('')
    const [subject,setSubject] = useState('')
    
    const specificNotes=async()=>{
        try{
           await axios('http://localhost:8080/notes/',degree,subject)
        }
        catch(error){
            // alert(error)
        }
    }
    useEffect(()=>{
        specificNotes();
    },[degree,subject])
    return (
        <>
            <Navbar2></Navbar2>
            <div className='dashboard'>
                <div className='blur dash-blur'>
                    <h1 className='dash-title'>Get Started With<br></br> Top Global Notes</h1>
                    <div className='dash-drop'>

                        <span className='drop-area'>
                                    
                            <select className='drop1' onChange={(e)=>setDegree(e.target.value)}>
                                <option value='' >Select your Class/Degree/Std</option>
                                {notes?notes.map((p,index)=>
                                    <option 
                                    key={index}
                                    value={p.class}>
                                    {p.class}
                                    </option>
                                ):''}
                            </select>
                            <span className='drop-btn'><FaTurnDown></FaTurnDown></span>
                        </span>

                        <span className='drop-area'>
                            <select className='drop1' onChange={(e)=>setSubject(e.target.value)}>
                                <option>Select your Course/Subject</option>
                                {notes?notes.map((p,index)=>
                                    <option 
                                    key={index}
                                    value={p.subject}>
                                    {p.subject}
                                    </option>
                                ):''}
                            </select>
                            <span className='drop-btn'><FaTurnDown></FaTurnDown></span>
                        </span>

                    </div>
                </div>

            </div>
            <div className='dash-content'>
                {isLoading ? 
                <h1 className='s-head '>please Wait</h1>
                : <>
                <p>Available : {notes.length} </p>

                <h1 className='s-head'>Top Global Files</h1>
                <div className='items-container'>
                    {notes.map((p)=>
                        <Card2
                            key={p._id}
                            degree={p.class}
                            file={p.file}
                            subject={p.subject}
                            description={p.description}
                            pages={p.pages}
                            book={p.book}
                        ></Card2>
                    )}
                </div>
                </> }
            </div>
            <Footer></Footer>
        </>

    )
}

export default Dashboard