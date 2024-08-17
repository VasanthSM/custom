import React from 'react';
import { Link } from 'react-router-dom';
import { GiCargoShip } from "react-icons/gi";

const LandingPage = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center landingPage"
    >
      <div className="">
        <Link to='/register' className="bg-blue-700 absolute top-8 right-8 text-white py-2 px-4 rounded shadow-md hover:bg-blue-500 transition">
          Sign Up
        </Link>
      </div>
      <div className="flex items-center justify-center flex-col h-full">
        <h1 className="text-white text-3xl font-bold text-center shadow-md">
           "Where every shipment meets its smoothest <br /> journey through customs."
        </h1>
        <Link to='/login' className=' mt-6 flex font-semibold text-white text-xl border-2 border- rounded-lg p-2'> Get Started <GiCargoShip  className='ml-4 h-7 w-7 text-blue-400'/></Link>
      </div>
    </div>
  );
};

export default LandingPage;
