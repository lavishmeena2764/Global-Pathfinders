import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

const Tagline = () => {
    return (
        <div className="flex flex-col items-center justify-center h-fit bg-gray-200 pb-24 text-center p-6">
            <h1 className="text-5xl italic font-bold">
                <span className="text-gray-800">Your journey, </span>
                <span className="text-blue-500">our guidance</span>
            </h1>
            <a href='/contact' className='hover:no-underline'>
            <button className="mt-8 px-6 py-3 border-2 border-blue-500 text-blue-500 font-semibold rounded-md flex items-center hover:bg-blue-500 hover:text-white transition duration-300">
                Book a Consultation
                <FaCalendarAlt className="ml-2" />
            </button>
             </a>
        </div>
    );
};

export default Tagline;
