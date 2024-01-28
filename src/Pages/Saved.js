import React, { useState } from 'react'
import './Saved.css'
import Card2 from '../Components/Card2'
import Navbar2 from '../Components/Navbar2'
import Footer from '../Components/Footer'
function Saved() {
    const [dummy,setDummy]=useState([
        {
            class: 'BCA',
            file: 'yoyo',
            subject: 'Python',
            description: 'its handmade notes from unimex book',
            pages: '34',
            book: 'Unimex'
        }
    ])
    return (
        <>
            <Navbar2></Navbar2>
            <div className='saved'>
                <div className=' saved-body'>
                    <h1 className='s-head'>My Saved Files</h1>
                    <div className='items-container'>
                        {dummy.map((p)=>
                        <Card2
                          degree= {p.class}
                          file= {p.file}
                          subject= {p.subject}
                          description= {p.description}
                          pages= {p.pages}
                          book= {p.book}
                        ></Card2>
                        )}
                    </div>
                </div>
                <div className='upload-body'>
                    <h1 className='s-head'>My Uploaded Files</h1>
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