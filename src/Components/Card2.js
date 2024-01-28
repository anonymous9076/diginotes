import React, { useState } from 'react'
import './Card2.css'
import { FaSave, FaDownload, FaShareAlt, } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaRotate } from "react-icons/fa6";

const  Card2 =(props)=> {

    const [rotate,setRotate]=useState(false);
   const {degree ,file, pages,subject,book,description}=props

    return (
        <div className='card-container'>
            <div className={rotate?'card2 round':'card2'}>
                <div className='card2-front'>
                   <div className='card-detail'>
                    <span className='bold'>: {degree} </span>
                    <span><p id='just'>: {subject}</p></span>
                    <span>: {pages} pgs</span>
                  
                  
                   </div>
                   <div className='card-icon'>
                    <div><FaSave title='saved'></FaSave></div>
                    <div><FaShareAlt title='share'></FaShareAlt></div>
                    {/* <div><MdDelete title='like'></MdDelete></div> */}

                   </div>
                   <div className='author'>
                    --{book}
                   </div>
                </div>
                <div className='card2-back'>
                    <div className='bold'>Description</div>
                    <div><FaDownload title='download'></FaDownload></div>
                    <div className='description-area'>{description} </div>
                </div>
                <div className='rotate-icon'>
                <FaRotate  onClick={()=>(setRotate((curr)=>!curr))}> </FaRotate>
                </div>
            </div>
        </div>

    )
}

export default Card2