import React from 'react'

function DeliveryOptions({source,title}) {
    return (
        <div className='flex flex-col items-center w-[105px] cursor-pointer hover:scale-110 duration-300'>
            <div className='bg-indigo-100 rounded-xl'>
                <img src={source} alt="" className='w-[80px]' />
            </div>
            <div className='pt-2 text-[13px] text-center h-[20px]'>{title}</div>
        </div>
    )
}

export default DeliveryOptions