import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Navbar from "./Navbar";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <div className='h-screen w-full bg-[#0d1117] text-[#c9d1d9] flex items-center justify-center'>
        <div className='flex flex-col items-center text-center space-y-4'>
          <div className='text-2xl font-light font-inconsolata'>
            cd &gt;Anisha Bhandare
          </div>

          <div className='font-inconsolata text-6xl'>Hello, World!</div>

          <div className='text-green-400 font-inconsolata text-3xl'>
            I am
            <span>
              <Typewriter
                words={[
                  " a Full-Stack Developer",
                  " an Open-Source Enthusiast",
                  " an aspiring SDE",
                  " a Student",
                ]}
                loop={0}
                cursor
                cursorStyle='|'
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
