import React, { useState } from 'react'
import './Card2.css'
import { FaSave, FaDownload, FaShareAlt, } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
// import { MdDelete,AiFillLike } from "react-icons/md";
import { FaRotate } from "react-icons/fa6";
function Card2() {
    const [rotate,setRotate]=useState(false)
    return (
        <div className='card-container'>
            <div className={rotate?'card2 round':'card2'}>
                <div className='card2-front'>
                   <div className='card-detail'>
                    <span className='bold'>: BCA sem3 and bba sem4 in one </span>
                    <span><p id='just'>: English</p></span>
                    <span>: 456 pgs</span>
                  
                  
                   </div>
                   <div className='card-icon'>
                    <div><FaSave title='saved'></FaSave></div>
                    <div><FaShareAlt title='share'></FaShareAlt></div>
                    <div><AiOutlineLike title='like'></AiOutlineLike></div>

                   </div>
                   <div className='author'>
                    --tushar
                   </div>
                </div>
                <div className='card2-back'>
                    <div className='bold'>Description</div>
                    <div><FaDownload title='download'></FaDownload></div>
                    <div className='description-area'>lore fg rt fdgf fdjk jkdfkhgjhdfjg jkfghkjdfhg fhghfjd hj </div>
                </div>
                <div className='rotate-icon'>
                <FaRotate  onClick={()=>(setRotate((curr)=>!curr))}> </FaRotate>
                </div>
            </div>
        </div>

    )
}

export default Card2