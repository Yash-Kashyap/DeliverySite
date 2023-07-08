import React from 'react'

function Facilities({ source, title, description }) {
    return (
        <div className='w-[300px] h-[300px] p-5 bg-white flex flex-col items-center rounded-xl shadow-[0px_0px_10px_0px_rgba(0,0,0,0.3)]'>
            <div className='w-[110px] h-[100px]'><img src={source} alt="" /></div>
            <div className='text-2xl mt-3'>{title}</div>
            <div className='text-[13px] text-gray-600 py-5'>{description}</div>
        </div>
    )
}

export default Facilities