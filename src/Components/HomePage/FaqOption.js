import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function FaqOption({ heading, description }) {

    const [show, setShow] = useState(false);
    
    const handleOnClick = (e) => {
        show ? setShow(false) : setShow(true);
    }

    return (
        <div className='lg:w-[700px] border-b-2 p-2 rounded-xl'>
            <div className='text-md lg:text-lg pb-5 flex justify-between cursor-pointer' onClick={handleOnClick}>
                <div>{heading}</div>
                <div>
                    <KeyboardArrowDownIcon className={`${show && 'rotate-180'}`}/>
                </div>
            </div>
            <div className={`text-[13px] md:text-[14px] text-gray-500 ${!show && 'hidden'} ${show && 'block'}`}>{description}</div>
        </div>
    )
}

export default FaqOption