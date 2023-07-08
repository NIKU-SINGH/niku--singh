import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

function index() {
  return (
    <div className="w-full">
      <div className="mt-32">
        <h1 className="text-5xl font-Poppins text-center font-bold mt-20">
          Skills.
        </h1>

        <div className="flex-col  items-center justify-center mt-20  mx-10 bg-gradient-to-r from-purple-500 via-red-500 to-orange-500 bg-opacity-80 backdrop-filter backdrop-blur-lg border border-gray-200 rounded-2xl p-4">
          <div className="relative  bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg border border-gray-200  p-6 rounded-xl">
            <Marquee
              pauseOnHover={true}
              speed={150}
              className="my-4"
            //   className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg border border-gray-200  absolute p-6 rounded-xl"
            >
              <div className="bg-gray-100 h-24 w-24 rouned-xl p-4 rounded-xl mx-4 cursor-pointer">
                <Image
                  height="1000px"
                  width="1000px"
                  src="/Gitlab.png"
                  alt="image"
                />
              </div>
              <div className="bg-gray-100 h-24 w-24 rouned-xl p-4 rounded-xl mx-4 cursor-pointer">
                <Image
                  height="1000px"
                  width="1000px"
                  src="/Gitlab.png"
                  alt="image"
                />
              </div>
              <div className="bg-gray-100 h-24 w-24 rouned-xl p-4 rounded-xl mx-4 cursor-pointer">
                <Image
                  height="1000px"
                  width="1000px"
                  src="/Gitlab.png"
                  alt="image"
                />
              </div>
              <div className="bg-gray-100 h-24 w-24 rouned-xl p-4 rounded-xl mx-4 cursor-pointer">
                <Image
                  height="1000px"
                  width="1000px"
                  src="/Gitlab.png"
                  alt="image"
                />
              </div>
            </Marquee>
            <Marquee
              pauseOnHover={true}
              speed={150}
              direction="right"
              className="my-4"
            //   className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg border border-gray-200  absolute p-6 rounded-xl"
            >
              <div className="bg-gray-100 h-24 w-24 rouned-xl p-4 rounded-xl mx-4">
                <Image
                  height="1000px"
                  width="1000px"
                  src="/Gitlab.png"
                  alt="image"
                />
              </div>
              <div className="bg-gray-100 h-24 w-24 rouned-xl p-4 rounded-xl mx-4">
                <Image
                  height="1000px"
                  width="1000px"
                  src="/Gitlab.png"
                  alt="image"
                />
              </div>
              <div className="bg-gray-100 h-24 w-24 rouned-xl p-4 rounded-xl mx-4">
                <Image
                  height="1000px"
                  width="1000px"
                  src="/Gitlab.png"
                  alt="image"
                />
              </div>
              <div className="bg-gray-100 h-24 w-24 rouned-xl p-4 rounded-xl mx-4">
                <Image
                  height="1000px"
                  width="1000px"
                  src="/Gitlab.png"
                  alt="image"
                />
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
