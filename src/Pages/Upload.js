import React, { useState } from 'react'
import './Upload.css'
import Navbar2 from '../Components/Navbar2'
import Footer from '../Components/Footer'

function Upload() {
    const [obj, setObj] = useState({
        class: '',
        file: '',
        subject: '',
        description: '',
        pages: '',
        book: ''
    })
    const [feildCheck,setFeildCheck]=useState(false);

    const handleUpload = (e) => {
        e.preventDefault()
        if(obj.class && obj.subject && obj.pages && obj.file){
            console.log(obj)

            setObj({
                class: '',
                file: '',
                subject: '',
                description: '',
                pages: '',
                book: ''
            })
            setFeildCheck(false)

        }
        else{
            setFeildCheck(true)
        }
     
    }
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        const file = e.target.file;
        if (!file) {
            setObj({
                ...obj,
                [name]: value
            })
        }
        else {
            setObj({
                ...obj,
                [name]: file
            })
        }
    }

    return (
        <>
            <Navbar2></Navbar2>
            <div className='upload'>
                <div className='upload-sec'>
                    <div className='upload-file'>
                        <div className={obj.file?'upload-area green':feildCheck?'upload-area red':'upload-area'}>
                            <input 
                            type='file'  
                            onChange={(e) => handleChange(e)} 
                            name='file' 
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
                            className={obj.class?'input-sec-up green':feildCheck?'input-sec-up red':'input-sec-up'} 
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
                            className={obj.subject?'input-sec-up green':feildCheck?'input-sec-up red':'input-sec-up'} 
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
                            className={obj.pages?'input-sec-up green':feildCheck?'input-sec-up red':'input-sec-up'} 
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