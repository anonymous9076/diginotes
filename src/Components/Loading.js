import React from 'react'
import './Loading.css'
import { ClassicSpinner } from "react-spinners-kit";

function Loading(props) {
    return (
        <div className='loading'>
            <span className='icon'>
                <ClassicSpinner size={50}
                    color="white"
                    loading={true}>
                </ClassicSpinner>
            </span>
        </div>
    )
}

export default Loading