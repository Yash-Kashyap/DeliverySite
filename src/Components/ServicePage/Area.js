import React from 'react';
import Form from './Form';


const Area = () => {
  return (
    <div className='mt-20 flex flex-col justify-center items-center'>

      <div className='text-indigo-800 text-2xl py-5'>Estimate your cost of Delivery <hr className='bg-indigo-800 h-[5px] outline-0 rounded-xl' /></div>

      <div className='flex justify-center'>
        <Form />
      </div>

      {/* <div className='text-2xl text-center pb-5 text-indigo-800'>Services we provide</div>


      <div className='m-auto px-5 py-2 bg-white w-[300px] md:w-[600px] m-auto rounded-xl shadow-[0px_0px_10px_0px_rgba(0,0,0,0.3)]'>
        <div className='mt-5 cursor-default'>
          <span>City : </span><span className='font-bold'>Pune</span>
        </div>
        <div className='py-5 md:py-0'>
          <div className='h-auto md:h-[200px] flex flex-col md:flex-row items-center space-y-10 md:space-y-0 md:space-x-12 max-w-min m-auto'>
            <DeliveryOptions source="https://d3apkeya39jz4k.cloudfront.net/2_wheelers_274869b2af_7262e4dde4.webp" title="Two Wheelers" />
            <DeliveryOptions source="https://d3apkeya39jz4k.cloudfront.net/trucks_293a94a860_cc4b2d6d06.webp" title="Trucks" />
            <Link to='/courier'><DeliveryOptions source="https://d3apkeya39jz4k.cloudfront.net/all_india_courier_service_3b0f4df07f.webp" title="Courier Service" /></Link>
          </div>
        </div>
      </div> */}

    </div>
  )
}

export default Area