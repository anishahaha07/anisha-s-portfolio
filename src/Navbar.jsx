import React from "react";

const Links = [
  { name: "HOME", link: "/" },
  { name: "PROJECTS", link: "/" },
  { name: "CONTACT ME", link: "/" },
];

const Navbar = () => {
  return (
    <div className='w-full fixed top-0 left-0 bg-transparent'>
      <div className='md:flex items-center justify-between w-full px-6 md:px-16 py-6'>
        <div className='cursor-pointer flex items-center font-bold text-2xl text-black'>
          <span className='text-3xl'>
            {" "}
            <ion-icon name='terminal-outline'></ion-icon>
          </span>
        </div>

        <ul className='md:flex md:items-center space-x-6'>
          {Links.map((link) => (
            <li key={link.name} className='text-xl'>
              <a
                href={link.link}
                className='text-gray-800 hover:text-gray-400 transition duration-500'
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
