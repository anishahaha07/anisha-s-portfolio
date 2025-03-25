import React from "react";
import Navbar from "./Navbar";
const Homepage = () => {
  return (
    <>
      <Navbar />
      <div className='w-full bg-anisha bg-myBg h-screen'>
        <div className='grid grid-cols-2'>
          <div className='flex flex-col'>
            <div className='top-1/5 absolute min-h-screen px-4 md:px-20'>
              <div className='text-white text-3xl md:text-6xl font-light font-inconsolata w-full md:text-left'>
                Hello, World!
              </div>
              <div className='font-inconsolata font-light text-2xl py-5 '>
                {" "}
                cd > Anisha Bhandare
              </div>
            </div>
          </div>
          <div className='flex flex-col'>
            <div className=' '></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
