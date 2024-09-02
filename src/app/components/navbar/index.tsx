import React from "react";
import { FaHome, FaInfoCircle, FaUsers, FaCog, FaUserCircle } from "react-icons/fa"; // Import icons from react-icons

const Navbar = () => {
  return (
    <div className=" w-24 h-full bg-gray-800 text-white flex flex-col items-center py-4 space-y-4">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-12 h-12 flex items-center justify-center hover:bg-gray-700 rounded-full transition duration-300">
          <FaHome size={24} />
        </div>
        <div className="w-12 h-12 flex items-center justify-center hover:bg-gray-700 rounded-full transition duration-300">
          <FaInfoCircle size={24} />
        </div>
        <div className="w-12 h-12 flex items-center justify-center hover:bg-gray-700 rounded-full transition duration-300">
          <FaUsers size={24} />
        </div>
        <div className="w-12 h-12 flex items-center justify-center hover:bg-gray-700 rounded-full transition duration-300">
          <FaCog size={24} />
        </div>
      </div>
      <div className="mt-auto w-12 h-12 flex items-center justify-center hover:bg-gray-700 rounded-full transition duration-300">
        {/* You can add a user avatar or other icon here */}
        <FaUserCircle size={24} />
      </div>
    </div>
  );
};

export default Navbar;
