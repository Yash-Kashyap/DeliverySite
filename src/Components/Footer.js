import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className='bg-black pt-5 md:h-[300px] text-white flex flex-col items-center sm:items-start sm:flex-row justify-evenly'>
            <div className="mb-10 sm:mb-0 w-[180px] md:w-[200px] lg:w-[300px]">
                <h3 className='text-2xl mb-5 text-indigo-200'>Company</h3>
                {/* <img src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png" alt="Company Logo" className='w-[100px]' /> */}
                <div className='text-[13px] font-light'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</div>

            </div>

            <div className="my-5 sm:my-0 w-[180px] md:w-[200px] lg:w-[300px]">
                <h3 className='text-[13px] md:text-[15px] md:text-xl mb-3 text-indigo-200'>Customer Service</h3>
                <ul className='text-[11px] md:text-[14px] leading-8 text-neutral-300 max-w-[150px]'>
                    <li className='cursor-pointer'><Link to='/'>Home</Link></li>
                    <li className='cursor-pointer'><Link to='/about'>About Us</Link></li>
                    <li className='cursor-pointer'><Link to='/service'>Services</Link></li>
                    <li className='cursor-pointer'><Link to='/courier'>Courier Service</Link></li>
                </ul>
            </div>

            <div className='my-5 sm:my-0 w-[180px] md:w-[200px] lg:w-[300px]'>
                <h3 className='text-[13px] md:text-[15px] md:text-xl mb-3 text-indigo-200'>Contact Information</h3>
                <p className='text-[11px] md:text-[14px] my-4 text-neutral-300'>Address: 123 Main Street, City, State</p>
                <p className='text-[11px] md:text-[14px] my-4 text-neutral-300'>Phone: (+91) 1234567890</p>
                <p className='text-[11px] md:text-[14px] my-4 text-neutral-300'>Email: info@company.com</p>
            </div>

        </footer>
    );
};

export default Footer;
