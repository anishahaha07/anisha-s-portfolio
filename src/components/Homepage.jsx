import { React } from "react";
import { Typewriter } from "react-simple-typewriter";
import Navbar from "./Navbar";
const Homepage = () => {
  return (
    <>
      <Navbar />
      <div className='h-screen w-full flex items-center justify-center '>
        <div className='grid grid-cols'>
          <div className='text-2xl text-center font-extralight font-inconsolata'>
            cd &gt; Anisha Bhandare
          </div>
          <div className='font-inconsolata text-6xl'>Hello, World!</div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
