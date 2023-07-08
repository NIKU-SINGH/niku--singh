import Image from "next/image";
import React from "react";
import {
  FaLinkedinIn,
  FaTwitter,
  FaGithub,
  FaStackOverflow,
} from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import Link from "next/link";

function Hero() {
  return (
    <>
      <div className="mt-28  flex items-center justify-center flex-col text-center font-Poppins">
        <p className="text-xl font-normal">Hi! I am</p>
        <h1 className="text-3xl md:text-6xl font-semibold md:mb-4">Niku Singh.</h1>
        <h1 className="text-3xl md:text-6xl font-semibold  text-gray-600 mb-4 ">
          I Build Things for the Web.
        </h1>
        <div className="flex-col items-center text-center w-[80%] xs:w-[90%] lg:w-[50%] mb-4 p-4">
          <p className="text-sm md:text-lg flex items-center justify-center">
            Blockchain enthusiast turned web wizard, coding history, economics,
            and Bitcoin into webpages
          </p>
          <p> while predicting football scores like a psychological economist!            </p>
        </div>
        <button className="bg-black hover:bg-gray-600 text-white text-xs md:text-sm font-normal py-2 px-6 rounded-full h-10 w-36 md:h-12 md:w-40 mb-4">
          <Link href="https://drive.google.com/file/d/1ZMq1iNr-NBmlBHgTV4smF9HqyrzgRz6e/view?usp=drive_link">
            Resume
          </Link>
        </button>
        <div className="flex justify-evenly mb-4 w-32 md:w-60">
          <Link href="https://github.com/NIKU-SINGH">
            <FaGithub className=" h-6 w-6 md:h-10 dark:text-black bg-white rounded-full md:w-10 cursor-pointer hover:text-gray-600" />
          </Link>
          <div className="h-6 w-6 md:h-10 md:w-10 bg-black  hover:bg-gray-600 rounded-full flex justify-center items-center text-white cursor-pointer">
            <Link href="https://twitter.com/Niku_Singh_">
              <FaTwitter className="h-4 w-4 md:h-5 md:w-5" />
            </Link>
          </div>
          <div className="h-6 w-6 md:h-10 md:w-10 bg-black hover:bg-gray-600 rounded-full flex justify-center items-center text-white cursor-pointer">
            <Link href="https://www.linkedin.com/in/niku-singh/">
              <FaLinkedinIn className="h-4 w-4 md:h-5 md:w-5" />
            </Link>
          </div>
          <div className="h-6 w-6 md:h-10 md:w-10 bg-black hover:bg-gray-600 rounded-full flex justify-center items-center text-white cursor-pointer">
            <Link href="https://stackoverflow.com/users/20343109/niku-singh?tab=profile">
              <FaStackOverflow className="h-4 w-4 md:h-5 md:w-5" />
            </Link>
          </div>
        </div>
        <div className="relative h-3/4 bg-red- rounded-3xl mx-10">
          <img
            src="/hero02.svg"
            // height="400px"
            // width="1000px"
            className=" top-0 left-0 z-0 w-full h-2/3 rounded-2xl"
          />
          {/* <Image src="/rocket.svg" height="380px" width="300px" className='absolute top-0 left-0 z-10' /> */}
        </div>
        
      </div>
    </>
  );
}

export default Hero;
