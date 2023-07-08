import React from 'react';


const MyPage = () => {
  return (
    <div className="pt-14">

      <div className='relative'>
        <div className='flex bg-black hidden md:flex'>
          <div>
            <img src="https://dailytimes.com.pk/assets/uploads/2022/10/25/Stock-delivery-bikes-food-Dubai_17767fc03a6_large.jpg" alt="" className='md:w-[870px] md:h-[600px] opacity-60' />
          </div>
          <div>
            <img src="https://images.pexels.com/photos/6169660/pexels-photo-6169660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='md:w-[870px] md:h-[600px] opacity-60' />
          </div>
        </div>

        <div className="text-center font-bold text-gray-700 md:text-indigo-100 drop-shadow-2xl pt-14 md:pt-0 md:absolute bottom-10 md:w-[500px] md:left-[150px] lg:left-[400px] xl:left-[500px] 2xl:left-[600px]">
          <h1>Best pickup and drop packages service in Pune</h1>
          <h3>Say goodbye to the stress of sending packages with our pickup and drop service.</h3>
        </div>
      </div>

    </div>
  );
};

export default MyPage;
