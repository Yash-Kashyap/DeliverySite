import React, { useState } from 'react'

function Form() {

    const [pickup, setPickup] = useState('');
    const [drop, setDrop] = useState('');

    return (
        <div className='w-[300px] md:w-[450px] py-10 rounded-xl bg-indigo-40 bg-black bg-opacity-70'>
            <form className='flex flex-col items-center justify-items-center space-y-10 '>
                <div className='flex flex-col space-y-2'>
                    <label htmlFor="pickup" className='text-white'>Pickup Location <span className='text-red-500'>*</span></label>
                    <input
                        className={`px-2 sm:px-5 py-1 sm:py-2 w-[250px] md:w-[400px] text-black text-md rounded-lg sm:rounded-xl outline-0 placeholder-gray-400 placeholder:italic placeholder:text-sm`}
                        id="pickup"
                        type='text'
                        value={pickup}
                        name="pickup"
                        placeholder='Pickup location'
                        required
                        onChange={e => setPickup(e.target.value)}
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
                        required
                        onChange={e => setDrop(e.target.value)}
                    />
                </div>
                <button type='submit' className='p-2 bg-indigo-500 text-white rounded-lg hover:scale-105 duration-300'>
                    Get estimate
                </button>
            </form>
        </div>
    )
}

export default Form