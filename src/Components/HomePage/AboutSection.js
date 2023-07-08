import React from 'react'
import { Link } from 'react-router-dom'

function AboutSection() {
    return (
        <div className='flex flex-col lg:flex-row items-center lg:space-x-20 justify-evenly'>
            <div className=''>
                <img src="https://www.ontime360.com/blog/image.axd?picture=/2022/4-26-2022/Essential_Features_Blog_Post_Image.jpg" alt="" className='w-[600px] rounded-xl' />
            </div>
            <div className='lg:w-[700px] py-5'>
                <div className='text-[30px] md:text-[50px] text-indigo-800'>
                    About Us
                    <hr className='bg-indigo-800 h-[5px] outline-0 rounded-xl' />
                </div>
                <div className='text-[13px] md:text-[14px] leading-loose text-gray-600 py-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, autem. Tempore sunt ea alias commodi iusto optio earum aliquam repudiandae voluptas omnis quas voluptates hic, recusandae accusantium culpa labore maiores a! Modi aspernatur perferendis voluptatibus laudantium saepe velit dignissimos sapiente iste, magni asperiores quam mollitia soluta dicta. Distinctio, voluptate sed. Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum alias, eveniet sit rerum sapiente placeat perferendis, iusto laborum laboriosam iste obcaecati dolor, voluptatum ducimus reiciendis repellendus fugit modi. Quas, cumque.</div>
                <Link to="/about">
                    <div className='max-w-max p-2 bg-indigo-200 rounded-lg cursor-pointer hover:underline'>
                        Read more
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default AboutSection