import React from 'react'
import FaqOption from './FaqOption'
import data from './Data'

function FAQ() {

  return (
    <div className='w-screen px-5 md:px-16 mt-16 flex flex-col lg:flex-row justify-center lg:space-x-10 space-y-10 lg:space-y-0'>
      <div className='lg:w-[500px]'>
        <div className='text-[30px] md:text-[50px] text-indigo-800 font-bold'>FAQ's</div>
        <div className='text-[14px] md:text-[17px] text-gray-700'>We have recieved several questions for you to get to know us more closely, about what we provide and more.</div>
      </div>
      <div className='space-y-5'>
        {
          data.map((data,index) => (
            <FaqOption key={index} heading={data.heading} description={data.description} />
          ))
        }
      </div>
    </div>
  )
}

export default FAQ