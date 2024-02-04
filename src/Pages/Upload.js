import React, { useState } from 'react'
import './Upload.css'
import Navbar2 from '../Components/Navbar2'
import Footer from '../Components/Footer'

import axios from 'axios'

function Upload() {

    const userEmail = localStorage.getItem('email')
    const userFirstname = localStorage.getItem('firstname')
    const [obj, setObj] = useState({
        class: '',
        my_file: '',
        subject: '',
        description: '',
        pages: '',
        book: ''
    })
    const [fieldCheck, setFieldCheck] = useState(false);

    const handleUpload = async (e) => {
        e.preventDefault()
        const formdata = new FormData()
        formdata.append('class', obj.class)
        formdata.append('my_file', obj.my_file[0], obj.my_file[0].name)
        formdata.append('subject', obj.subject)
        formdata.append('book', obj.book)
        formdata.append('pages', obj.pages)
        formdata.append('description', obj.description)
        formdata.append('email', userEmail)
        formdata.append('author', userFirstname)

        if (obj.class && obj.subject && obj.pages && obj.my_file) {
            setFieldCheck(false)

            try {
                const res = await axios.post('http://localhost:8080/note/uploadNotes',
                    formdata)
                alert(res.data.msg)
            }
            catch (error) {
                alert(error)
            }

            setObj({
                class: '',
                my_file: '',
                subject: '',
                description: '',
                pages: '',
                book: ''
            })
        }
        else {
            setFieldCheck(true)
        }

    }
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        const my_file = e.target.files;
        if (!my_file) {
            setObj({
                ...obj,
                [name]: value
            })
        }
        else {
            setObj({
                ...obj,
                [name]: my_file
            })
        }
    }

    return (
        <>
            <Navbar2></Navbar2>
            <div className='upload'>
                <div className='upload-sec'>
                    <div className='upload-file' >
                        <div className={obj.my_file ? 'upload-area green' : fieldCheck ? 'upload-area red' : 'upload-area'}>
                            <input
                                type='file'
                                onChange={(e) => handleChange(e)}
                                name='my_file'
                                className='input-upload'>
                            </input>
                            Drag & Drop <br></br> Browse File
                        </div>
                        <div className='upload-btn-area'>
                            <button className='upload-btn' onClick={(e) => handleUpload(e)}>Upload</button>
                        </div>
                    </div>

                    <div className='upload-detail'>
                        <span className='input-data'>
                            <label className='upload-label'>Class/Degree *</label>
                            <input
                                type='text'
                                name='class'
                                value={obj.class}
                                onChange={(e) => handleChange(e)}
                                className={obj.class ? 'input-sec-up green' : fieldCheck ? 'input-sec-up red' : 'input-sec-up'}
                                placeholder='Enter Your Class'>
                            </input>
                        </span>
                        <span className='input-data'>
                            <label className='upload-label'>Subject *</label>
                            <input
                                type='text'
                                name='subject'
                                value={obj.subject}
                                onChange={(e) => handleChange(e)}
                                className={obj.subject ? 'input-sec-up green' : fieldCheck ? 'input-sec-up red' : 'input-sec-up'}
                                placeholder='Enter Your Subject'>

                            </input>
                        </span>
                        <span className='input-data'>
                            <label className='upload-label'>Pages *</label>
                            <input
                                type='number'
                                name='pages'
                                value={obj.pages}
                                onChange={(e) => handleChange(e)}
                                className={obj.pages ? 'input-sec-up green' : fieldCheck ? 'input-sec-up red' : 'input-sec-up'}
                                placeholder='Enter Pages'></input>
                        </span>
                        <span className='input-data'>
                            <label className='upload-label'>Book Ref (opt)</label>
                            <input
                                type='text'
                                name='book'
                                value={obj.book}
                                onChange={(e) => handleChange(e)}
                                className='input-sec-up'
                                placeholder='Enter Book Name'></input>
                        </span>
                        <span className='input-data'>
                            <label className='upload-label'>Description</label>
                            <textarea
                                type='textarea'
                                value={obj.description}
                                name='description'
                                onChange={(e) => handleChange(e)}
                                className='input-sec-up textarea'
                                placeholder='Write about this PDF notes'>
                            </textarea>
                        </span>
                    </div>
                </div>
            </div>
            <Footer></Footer>

        </>
    )
}

export default Upload