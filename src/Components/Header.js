import React, { useState } from 'react'
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

function Header() {

  const [status, setStatus] = useState(false);

  const handleOnClick = () => {
    (status ? setStatus(false) : setStatus(true));
  }

  return (
    <div className='h-[60px] w-screen bg-black text-white absolute top-0 z-20'>

      <div className='sm:hidden flex justify-end'>

        <div className='m-5 cursor-pointer' onClick={handleOnClick}>
          <MenuIcon />
        </div>

        {status ? (
          <ul className='mt-11 p-3 flex flex-col justify-center space-y-5 absolute z-20 bg-black bg-opacity-90 rounded-lg right-5'>
            <li className='hover:text-indigo-300 cursor-pointer'><Link to="/">Home</Link></li>
            <li className='hover:text-indigo-300 cursor-pointer'><Link to="/about">About us</Link></li>
            <li className='hover:text-indigo-300 cursor-pointer'><Link to="/service">Services</Link></li>
            <li className='hover:text-indigo-300 cursor-pointer'><Link to="/courier">Courier Service</Link></li>
          </ul>
        ) : (
          <div></div>
        )}

      </div>

      <ul className='h-[60px] flex items-center justify-center space-x-5 md:space-x-10 hidden sm:flex'>
        <li className='hover:text-indigo-300 cursor-pointer'><Link to="/">Home</Link></li>
        <li className='hover:text-indigo-300 cursor-pointer'><Link to="/about">About us</Link></li>
        <li className='hover:text-indigo-300 cursor-pointer'><Link to="/service">Services</Link></li>
        <li className='hover:text-indigo-300 cursor-pointer'><Link to="/courier">Courier Service</Link></li>
      </ul>
    </div>
  )
}

export default Header