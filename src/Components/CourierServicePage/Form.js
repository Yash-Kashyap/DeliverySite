import React, { useState } from 'react';
import axios from 'axios';

function Form() {

    const [pickup, setPickup] = useState('');
    const [drop, setDrop] = useState('');
    const [number, setNumber] = useState('');
    const [name, setName] = useState('');

    function handleSubmit(e){
        e.preventDefault(); 
        const formData = {
          pickup,
          drop,
          number,
          name
        };

        console.log(e,formData);      

          axios.post('http://localhost:5000/user/submit',formData).then(response => {

            console.log(response.data);
            setPickup('');
            setDrop('');
            setNumber('');
            setName('');
            // Handle the response as needed
          })
          .catch(error => {
            console.error(error);
            // Handle the error as needed
          });

      };

    return (
        <div className='w-[300px] md:w-[450px] py-10 rounded-xl bg-indigo-40 bg-black bg-opacity-60'>
            <form className='flex flex-col items-center justify-items-center space-y-7 '>
                <div className='flex flex-col space-y-2'>
                    <label htmlFor="pickup" className='text-white'>Pickup Location <span className='text-red-500'>*</span></label>
                    <input
                        className={`px-2 sm:px-5 py-1 sm:py-2 w-[250px] md:w-[400px] text-black text-md rounded-lg sm:rounded-xl outline-0 placeholder-gray-400 placeholder:italic placeholder:text-sm`}
                        id="pickup"
                        type='text'
                        value={pickup}
                        name="pickup"
                        placeholder='Pickup location'
                        onChange={e => setPickup(e.target.value)}
                        required
                    />
                </div>

                <div className='flex flex-col space-y-2'>
                    <label htmlFor="drop" className='text-white'>Drop Location <span className='text-red-500'>*</span></label>
                    <input
                        className={`px-2 sm:px-5 py-1 sm:py-2 w-[250px] md:w-[400px] text-black text-md rounded-lg sm:rounded-xl outline-0 placeholder-gray-400 placeholder:italic placeholder:text-sm`}
                        id="drop"
                        type='text'
                        value={drop}
                        name="drop"
                        placeholder='Drop location'
                        onChange={e => setDrop(e.target.value)}
                        required
                    />
                </div>
                
                <div className='flex flex-col space-y-2'>
                    <label htmlFor="phone" className='text-white'>Phone Number <span className='text-red-500'>*</span></label>
                    <input
                        className={`px-2 sm:px-5 py-1 sm:py-2 w-[250px] md:w-[400px] text-black text-md rounded-lg sm:rounded-xl outline-0 placeholder-gray-400 placeholder:italic placeholder:text-sm`}
                        id="phone"
                        type='number'
                        value={number}
                        name="phone"
                        placeholder='Phone number'
                        onChange={e => setNumber(e.target.value)}
                        required
                    />
                </div>
                
                <div className='flex flex-col space-y-2'>
                    <label htmlFor="name" className='text-white'>Name <span className='text-red-500'>*</span></label>
                    <input
                        className={`px-2 sm:px-5 py-1 sm:py-2 w-[250px] md:w-[400px] text-black text-md rounded-lg sm:rounded-xl outline-0 placeholder-gray-400 placeholder:italic placeholder:text-sm`}
                        id="name"
                        type='text'
                        value={name}
                        name="name"
                        placeholder='Enter your name'
                        onChange={e => setName(e.target.value)}
                        required
                    />
                </div>
                <input type='submit' onClick={handleSubmit} className='p-2 bg-indigo-500 text-white rounded-lg hover:scale-105 duration-300'/>
            </form>
        </div>
    )
}

export default Form


