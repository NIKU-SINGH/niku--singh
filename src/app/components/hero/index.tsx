import React from "react";
import ScheduleButton from "../button/Schedule";
import { FaGithub, FaGitlab, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { BsGitlab } from "react-icons/bs";
import { TbBrandGithubFilled } from "react-icons/tb";

function Index() {
  return (
    <div className="flex items-center justify-center w-full h-screen ">
      <div className="flex flex-col items-center space-x-4">
        <h1 className="text-[6rem] font-bold font-monumentExtended text-white">
          We make Impossible
        </h1>
        <h1 className="text-[6rem] font-bold font-monumentExtended text-transparent text-stroke text-stroke-2 text-stroke-white">
          Possible
        </h1>
      </div>

      <div className="h-full bg-red-400 flex items-center flex-col gap-4">
        {/* Social Icons */}

        <div className="flex flex-col gap-4 fixed right-10 bottom-32">
          <div className="bg-white rounded-full p-2">
            <FaTwitter className="text-black" size={24} />
          </div>
          <div className="bg-white rounded-full p-2">
            <BsGitlab className="text-black" size={24} />
          </div>
          <div className="bg-white rounded-full p-2">
            <TbBrandGithubFilled className="text-black" size={24} />
          </div>
          <div className="bg-white rounded-full p-2">
            <FaLinkedinIn className="text-black" size={24} />
          </div>
        </div>
      </div>

      <ScheduleButton />
    </div>
  );
}

export default Index;
