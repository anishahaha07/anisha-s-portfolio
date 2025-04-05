import React, { useState } from "react";
import { FaTerminal, FaTimes, FaBars } from "react-icons/fa";

const Links = [
  { name: "HOME", link: "/" },
  { name: "ABOUT ME", link: "/" },
  { name: "PROJECTS", link: "/" },
  { name: "CONTACT", link: "/" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className='w-full fixed top-0 left-0 bg-[#0d1117]/80 backdrop-blur-md shadow-md z-10'>
      <div className='flex items-center justify-between px-6 md:px-16 py-6'>
        {/* Logo */}
        <div className='cursor-pointer flex items-center font-bold text-2xl text-[#10b981] font-inconsolata'>
          <span className='text-3xl mr-2'>
            <FaTerminal />
          </span>
        </div>

        {/* Mobile Menu Button */}
        <div
          className='md:hidden text-3xl cursor-pointer z-20 text-[#10b981]'
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </div>

        {/* Mobile Menu BG */}
        <div
          className={`fixed inset-0 bg-[#0d1117] transition-all duration-300 ease-in transform ${
            open ? "translate-y-0" : "-translate-y-full"
          } md:hidden mt-16`}
        ></div>

        {/* Nav Links */}
        <ul
          className={`md:flex md:items-center md:space-x-6 fixed md:static bg-[#0d1117] md:bg-transparent w-full left-0 md:w-auto transition-all duration-300 ease-in z-10 ${
            open
              ? "top-16 opacity-100"
              : "top-[-400px] opacity-0 md:opacity-100"
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className='text-xl p-4 md:p-0 border-b border-gray-700 md:border-0 font-inconsolata'
            >
              <a
                href={link.link}
                className='text-[#c9d1d9] hover:text-[#10b981] hover:drop-shadow-[0_0_6px_#10b981] transition duration-300 block md:inline'
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
