import React from 'react'
import Header from '../Header'

function AboutPage() {
    return (
        <div className='bg-indigo-100 bg-opacity-40 pt-24 relative overflow-x-hidden'>
            <div className=''>
                <Header />
            </div>
            <div className='px-5 md:px-36 space-y-10 lg:w-[1500px] m-auto'>

                <div className='space-y-10'>
                    <div className='font-bold text-[30px] md:text-[40px] text-indigo-700'>About Us <hr className='bg-indigo-800 h-[5px] outline-0 rounded-xl' /></div>
                    <div className='flex flex-col lg:flex-row flex-col-reverse justify-between'>
                        <div className='lg:w-[700px] lg:mr-10 text-[14px] text-gray-500 space-y-5 leading-relaxed'>
                            <div>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quod fugit, ducimus iure nostrum numquam expedita temporibus quam laborum nulla reprehenderit. Nostrum earum perferendis cum error commodi consequatur eveniet ab! Officia odio dolores hic exercitationem eligendi, quaerat laboriosam rerum ad placeat fugiat nobis sit ratione dolorum. Expedita debitis neque modi magni provident deleniti eveniet hic odio, quam deserunt quas! Perspiciatis, quia? Dicta eaque quam corrupti quibusdam quisquam amet minima sint? Facere, voluptas? Excepturi, qui sed, numquam aspernatur reiciendis modi quo veniam quasi aut expedita corporis dolorem placeat hic maxime fugit perspiciatis! Dolore at iure in eum qui mollitia. Esse, commodi.
                            </div>

                            <div>
                                Obcaecati molestias consequatur cupiditate neque ipsum. Totam ipsam quod cupiditate exercitationem iure aliquid veritatis nostrum voluptatum molestiae odio aut quam sit, amet, unde quas, facilis possimus delectus libero! Iure itaque dolor voluptates velit quaerat omnis nam odit consequuntur? Facilis culpa consequatur in molestiae officia rem quia hic unde, sint voluptatum corrupti doloribus tempore reprehenderit sit debitis ad aspernatur delectus quod illo vitae quasi. Rem hic nisi enim accusantium optio? Recusandae iusto omnis autem consectetur sunt explicabo, minima nostrum fugiat nam totam quis possimus veniam natus error dolore placeat ipsum repudiandae quae quia neque.
                            </div>
                        </div>
                        <div className='mb-10 lg:mb-0 lg:w-[800px]'>
                            <img src="https://www.ontime360.com/blog/image.axd?picture=/2022/4-26-2022/Essential_Features_Blog_Post_Image.jpg" alt="" className='rounded-xl' />
                        </div>
                    </div>
                </div>
                <div className='space-y-10'>
                    <div className='font-bold text-[30px] md:text-[40px] text-indigo-700'>Our Mission <hr className='bg-indigo-800 h-[5px] outline-0 rounded-xl' /></div>
                    <div className='flex flex-col lg:flex-row flex-col-reverse justify-between'>
                        <div className='mb-10 lg:mb-0 lg:mr-10 lg:w-[800px]'>
                            <img src="https://www.delhivery.com/wp-content/uploads/2021/07/our-mission.jpg" alt="" className='rounded-xl' />
                        </div>
                        <div className='mb-10 lg:mb-0 lg:w-[700px] text-[14px] text-gray-500 space-y-5 leading-relaxed'>
                            <div>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quod fugit, ducimus iure nostrum numquam expedita temporibus quam laborum nulla reprehenderit. Nostrum earum perferendis cum error commodi consequatur eveniet ab! Officia odio dolores hic exercitationem eligendi, quaerat laboriosam rerum ad placeat fugiat nobis sit ratione dolorum. Expedita debitis neque modi magni provident deleniti eveniet hic odio, quam deserunt quas! Perspiciatis, quia? Dicta eaque quam corrupti quibusdam quisquam amet minima sint? Facere, voluptas? Excepturi, qui sed, numquam aspernatur reiciendis modi quo veniam quasi aut expedita corporis dolorem placeat hic maxime fugit perspiciatis! Dolore at iure in eum qui mollitia. Esse, commodi.
                            </div>
                        </div>
                    </div>
                </div>

                <div className='px-5 text-center font-bold text-gray-600'>Moving a billion dreams ahead, one delivery at a time. Pursuing an unsaid promise to deliver anything, anywhere, anytime with the collaborative efforts of our driver - partners.</div>
            </div>
            <div className='h-[100px]'></div>
        </div>
    )
}

export default AboutPage