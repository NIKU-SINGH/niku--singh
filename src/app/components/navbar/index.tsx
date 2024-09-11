import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className=" w-full py-2 px-16 flex items-center justify-between sticky top-0">
      {/* Logo or Name */}
      <div className="w-20 h-20 flex items-center justify-center">
        {/* <img src="/images/logo.svg" alt="Logo" /> */}
        <Image src="/images/logo.svg" width={50} height={50} alt="Logo" />
      </div>

      {/* Navigation Items */}
      <nav className="p-5 rounded-2xl px-10 bg-foreground backdrop-blur-md shadow-lg border-1 border-whiteGradient">
        <ul className="flex space-x-8 text-white text-sm font-normal">
          <li className="cursor-pointer hover:text-gray-300 hover:font-bold">
            About
          </li>
          <li className="cursor-pointer hover:text-gray-300 hover:font-bold">
            Experience
          </li>
          <li className="cursor-pointer hover:text-gray-300 hover:font-bold">
            Projects
          </li>
          <li className="cursor-pointer hover:text-gray-300 hover:font-bold">
            Contact
          </li>
          <li className="cursor-pointer hover:text-gray-300 hover:font-bold">
            Blog
          </li>
        </ul>
      </nav>
      <nav>{/* <p>Random button</p> */}</nav>
    </div>
  );
};

export default Navbar;
