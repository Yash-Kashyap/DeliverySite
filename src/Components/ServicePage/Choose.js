import React from 'react'

const Choose = () => {
  return (
    <div className='my-[100px]'>
      <div className='text-xl md:text-2xl text-center pb-5 text-indigo-800'><h3>Why Choose Porter Pickup & Delivery Services?</h3></div>
      
      <div className='flex flex-col flex-wra p-5 w-[400px] mdw-[700px] lg:w-[1000px] m-auto space-y-10 bg-white rounded-xl'>

        <div className='flex flex-col lg:flex-row justify-between lg:space-x-10 space-y-10 lg:space-y-0 m-auto'>
          <div className='w-[300px] lg:w-[400px]'>
            <div className='text-lg'>Get Anything Delivered</div>
            <div className='text-sm text-gray-700'>Be it a pen or multiple documents, send anything up to 20 kg anywhere across the city</div>
          </div>

          <div className='w-[300px] lg:w-[400px]'>
            <div className='text-lg'>Door-to-door Services</div>
            <div className='text-sm text-gray-700'>Enjoy on-demand pickup & delivery services at your doorstep</div>
          </div>
        </div>

        <div className='flex flex-col lg:flex-row justify-between lg:space-x-10 space-y-10 lg:space-y-0 m-auto'>
          <div className='w-[300px] lg:w-[400px]'>
            <div className='text-lg'>Get Instant Deliveries</div>
            <div className='text-sm text-gray-700'>Get your documents, laptops, lunch boxes, forgotten keys or other small packages picked up and delivered instantly</div>
          </div>

          <div className='w-[300px] lg:w-[400px]'>
            <div className='text-lg'>Reliable Same-day Delivery</div>
            <div className='text-sm text-gray-700'>Book two-wheeler delivery services online and get same-day delivery</div>
          </div>
       </div>

      </div>
       
    </div>
  )
}

export default Choose
