import React from 'react';
import Header from '../Header';
import Form from './Form';
// import Form from '../ServicePage/Form';

function CourierService() {
    return (
        <div className='bg-indigo-100 h-screen bg-opacity-40 pt-24 relative overflow-x-hidden'>
            <div className=''>
                <Header />
            </div>
            <div className='mx-10 lg:mx-36'>
                <div className='font-bold text-[25px] md:text-[30px] md:text-[40px] text-indigo-700 mb-2'>Delivery Informations <hr className='bg-indigo-800 h-[5px] outline-0 rounded-xl' /></div>
                
                <div className='h-[600px] flex flex-col items-center justify-center rounded-xl' style={{
                    backgroundImage: `url('https://cdn.pixabay.com/photo/2022/07/13/12/22/cyclist-7319215_1280.jpg')`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center',
                }}>
                    <div className=''>
                        <Form />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CourierService