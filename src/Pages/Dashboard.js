import React, { useContext, useEffect, useState } from 'react'
import './Dashboard.css'
import Navbar2 from '../Components/Navbar2'
import { FaTurnDown } from "react-icons/fa6";
import Card2 from '../Components/Card2';
import Footer from '../Components/Footer'
import { GetDataContext } from '../Context/NotesContext'
// import AlertBox from '../Components/AlertBox'

function Dashboard() {

    const { allnotes, isLoading,filternotes, getSpecificNote } = useContext(GetDataContext)

    const [degree, setDegree] = useState('')
    const [subject, setSubject] = useState('')
    
    useEffect(()=>{
       getSpecificNote(degree,subject)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[degree,subject])

    return (
        <>
            {/* <AlertBox></AlertBox> */}

            <Navbar2></Navbar2>
            <div className='dashboard'>
                <div className='blur dash-blur'>
                    <h1 className='dash-title'>Get Started With<br></br> Top Global Notes</h1>
                    <div className='dash-drop'>

                        <span className='drop-area'>

                            <select className='drop1' onChange={(e) =>setDegree(e.target.value)}>
                                <option value='' >Select your Class/Degree/Std</option>
                                {allnotes ? allnotes.map((p, index) =>
                                    <option
                                        key={index}
                                        value={p.class}>
                                        {p.class}
                                    </option>
                                ) : ''}
                            </select>
                            <span className='drop-btn'><FaTurnDown></FaTurnDown></span>
                        </span>

                        <span className='drop-area'>
                            <select className='drop1' onChange={(e) => setSubject(e.target.value)}>
                                <option value=''>Select your Course/Subject</option>
                                {allnotes ? allnotes.map((p, index) =>
                                    <option
                                        key={index}
                                        value={p.subject}>
                                        {p.subject}
                                    </option>
                                ) : ''}
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
                        <p>Available : {filternotes.length} </p>

                        <h1 className='s-head'>Top Global Files</h1>
                        <div className='items-container'>
                            {filternotes?filternotes.map((p) =>
                                <Card2
                                    key={p._id}
                                    deletebtn={false}
                                    degree={p.class}
                                    my_file={p.my_file}
                                    subject={p.subject}
                                    description={p.description}
                                    pages={p.pages}
                                    book={p.book}
                                    author= {p.author}
                                ></Card2>
                            ):'NO DATA FOUND'}
                        </div>
                    </>}
            </div>
            <Footer></Footer>
        </>

    )
}

export default Dashboard