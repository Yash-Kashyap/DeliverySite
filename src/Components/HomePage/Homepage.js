import React from 'react'
import Header from '../Header';
import deliveryMan from '../Images/deliveryMan.jpg';
import fastDelivery from '../Images/fastDelivery.png'
import safePackaging from '../Images/safePackaging.png'
import tracking from '../Images/tracking.png'
import AboutSection from './AboutSection';
import Facilities from './Facilities';
import FAQ from './FAQ.js';

function Homepage() {

    return (
        <div className='overflow-x-hidden relative'>

            <div className=''>
                <Header />
            </div>

            <div className='bg-indigo-100 bg-opacity-40 flex flex-col items-center pb-10 overflow-x-hidden'>

                <div className='flex flex-col items-center justify-center w-screen h-screen' style={{
                    backgroundImage: `url(${deliveryMan})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center',
                }}>
                    
                    <div className="flex justify-between w-screen h-screen bg-black bg-opacity-80 xl:bg-opacity-20">
                        <div className='xl:w-[800px]'></div>
                        <div className='flex flex-col justify-center m-auto'>
                            <div className='text-indigo-500 xl:text-indigo-800 text-[40px] md:text-[80px] text-center font-bold'>
                                <div className=''>Business delivery </div>
                                <div className=''>you can trust </div>
                            </div>
                            <div className='my-10 text-gray-400 xl:text-white text-[30px] md:text-[40px] text-center font-bold'>
                                <div className=''>Delivery hai?</div>
                                <div className=''>#HoJayega!</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='my-20 text-center'>
                    <div className='text-[30px] md:text-[50px] font-bold text-indigo-800'>What do you get with us?</div>
                    <div className='text-gray-500 text-sm md:text-md mt-5 mb-12'>Connect with us to get the following advantages and facilities</div>
                    <div className='flex flex-col lg:flex-row items-center space-y-5 lg:space-y-0 lg:space-x-10'>
                        <Facilities source={fastDelivery} title="Fast Delivery" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste magni enim hic ullam amet reiciendis earum adipisci, totam quidem fugiat." />
                        <Facilities source={safePackaging} title="Safe Packaging" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste magni enim hic ullam amet reiciendis earum adipisci, totam quidem fugiat." />
                        <Facilities source={tracking} title="Live Tracking" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste magni enim hic ullam amet reiciendis earum adipisci, totam quidem fugiat." />
                    </div>
                </div>


                <div className='mt-15 mb-20 p-10 w-screen bg-white'>
                    <AboutSection />
                </div>

                <div className='lg:w-[500px] px-5 text-center text-gray-600'>Moving a billion dreams ahead, one delivery at a time. Pursuing an unsaid promise to deliver anything, anywhere, anytime with the collaborative efforts of our driver - partners.</div>

                <div className=''>
                    <FAQ />
                </div>

                <div className='h-[100px]'></div>

            </div>
        </div>
    )
}

export default Homepage