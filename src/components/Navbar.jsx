import React, { useState } from "react";
import { FaTerminal, FaTimes, FaBars } from "react-icons/fa";

const Links = [
  { name: "HOME", link: "/" },
  { name: "PROJECTS", link: "/" },
  { name: "CONTACT ME", link: "/" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className='w-full fixed top-0 left-0 bg-transparent z-10'>
      <div className='flex items-center justify-between px-6 md:px-16 py-6'>
        {/* Logo */}
        <div className='cursor-pointer flex items-center font-bold text-2xl text-white'>
          <span className='text-3xl mr-2'>
            <FaTerminal />
          </span>
        </div>

        {/* Mobile Menu Button */}
        <div
          className='md:hidden text-3xl cursor-pointer z-20 text-black'
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-white transition-all duration-300 ease-in transform ${
            open ? "translate-y-0" : "-translate-y-full"
          } md:hidden mt-16`}
        ></div>

        <ul
          className={`md:flex md:items-center space-x-6 fixed md:static bg-white md:bg-transparent w-full left-0 md:w-auto transition-all duration-300 ease-in z-10 ${
            open
              ? "top-16 opacity-100"
              : "top-[-400px] opacity-0 md:opacity-100"
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className='text-xl p-4 md:p-0 border-b border-gray-200 md:border-0'
            >
              <a
                href={link.link}
                className='text-gray-800 hover:text-gray-400 transition duration-500 block md:inline'
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
