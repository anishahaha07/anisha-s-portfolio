import React from "react";
import Navbar from "./Navbar";
const Homepage = () => {
  return (
    <>
      <Navbar />
      <div className='w-full bg-gray-400 h-screen'>
        <div className='flex left-0 top-1/5 absolute min-h-screen bg-gray-400 px-4 md:px-20'>
          <div className='text-white text-2xl md:text-4xl font-inconsolata md:text-left'>
            Hello, World!
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
