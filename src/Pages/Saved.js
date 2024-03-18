import React, { useContext, useEffect } from 'react'
import './Saved.css'
import Card2 from '../Components/Card2'
import Navbar2 from '../Components/Navbar2'
import Footer from '../Components/Footer'
import Loading from '../Components/Loading'
import { GetDataContext } from '../Context/NotesContext'
function Saved() {

    const {allnotes, myUploads,myUploadedNotes } = useContext(GetDataContext)

        useEffect(() => {
            myUploadedNotes()
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [allnotes])
    return (
        <>
            <Navbar2></Navbar2>
            {!myUploads?<Loading></Loading>:''}
            <div className='saved'>
                <div className='upload-body'>
                    <h1 className='s-head'>My Uploaded Files</h1>
                    <div className='items-container'>
                        {myUploads.map((p) =>
                            <Card2
                                key={p._id}
                                deletebtn={true}
                                degree={p.class}
                                my_file={p.my_file}
                                subject={p.subject}
                                description={p.description}
                                pages={p.pages}
                                book={p.book}
                                author={p.author}
                            ></Card2>
                        )}
                    </div>
                </div>

            </div>
            <Footer></Footer>
        </>
    )
}

export default Saved