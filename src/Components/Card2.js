import React, { useState } from 'react'
import './Card2.css'
import { FaDownload, FaCopy, FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaRotate } from "react-icons/fa6";
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { TiTick } from "react-icons/ti";
const Card2 = (props) => {

    const [copy, setCopy] = useState(false)
    const [rotate, setRotate] = useState(false);
    const { degree, pages, my_file, subject, author, description, deletebtn } = props
    const url = `https://digibackend.vercel.app/${my_file}`

    const handlePreview = async () => {
        const atag = document.createElement('a')
        atag.href = url
        atag.setAttribute('download', my_file)
        document.body.appendChild(atag)
        atag.click()
        atag.remove()


    }
    const handleCopy = () => {
        console.log(my_file)
        console.log(url)
        setCopy(true)
        setTimeout(() => {
            setCopy(false)
        }, 3000);
    }

    return (
        <div className='card-container'>
            <div className={rotate ? 'card2 round' : 'card2'}>
                <div className='card2-front'>
                    <div className='card-detail'>
                        <span className='bold'>: {degree} </span>
                        <span><p id='just'>: {subject}</p></span>
                        <span>: {pages} pgs</span>


                    </div>
                    <div className='card-icon'>
                        <div><FaEye
                            onClick={handlePreview}
                            title='like'>
                        </FaEye></div>
                        <div><FaDownload
                            title='download'>
                        </FaDownload></div>
                        <CopyToClipboard text={url} onCopy={handleCopy}>
                            {!copy ?
                                <div><FaCopy title='share'></FaCopy></div>
                                : <div><TiTick title='share'></TiTick></div>
                            }
                        </CopyToClipboard>

                    </div>
                    <div className='author'>
                        --{author}
                    </div>
                </div>
                <div className='card2-back'>
                    <div className='bold'>Description</div>
                    {deletebtn ?
                        <div><MdDelete title='like'></MdDelete></div>
                        : ''}

                    <div className='description-area'>{description} </div>
                </div>
                <div className='rotate-icon'>
                    <FaRotate onClick={() => (setRotate((curr) => !curr))}> </FaRotate>
                </div>
            </div>
        </div>

    )
}

export default Card2