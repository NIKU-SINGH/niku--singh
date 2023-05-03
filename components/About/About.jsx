import React from "react";
import Image from "next/image";
import Timeline from "./Timeline";
import Time from "./Time";

function About() {
  return (
    <>
      <div className="flex flex-col font-Poppins items-center justify-center mt-48 mx-32">
        <h1 className="text-5xl font-ProductSans text-center font-bold w-[90vw]">
          About Me
        </h1>
        <div className="flex flex-col-reverse justify-center items-center lg:flex-row m-4">
          <div className="p-4 w-[100vw]] lg:w-[85%] font-Poppinsh-[50vh]">
            <div className="flex mb-4">
              <p className="text-sm md:text-base">
                I'm a prefinal year NIT Jalandhar student interested in Bitcoin,
                Blockchain, and Web technologies.{" "}
              </p>
            </div>
            <div className="flex mb-4">
              <p className="text-sm md:text-base">
                I'm a skilled Full Stack Developer with experience in building
                robust applications. In 2022, I was a mentee for Hyperledger's
                LFX program, where I gained valuable experience working on
                real-world blockchain projects. I won the Quicknode track in the
                ETHforALL web3 hackathon, showcasing my innovative
                problem-solving skills.{" "}
              </p>
            </div>
            <div className="flex mb-4">
              <p className="text-sm md:text-base">
                As an active open-source contributor, I've improved the
                functionality of platforms like Gitlab and Hyperledger. 
              </p>
            </div>
            <div className="flex mb-4">
              <p className="text-sm md:text-base">
                In my free time, I enjoy reading books and watching movies. I am
                a proud Potterhead and often find inspiration in the stories and
                characters of the Harry Potter universe. Overall, I am a
                dedicated and passionate individual with a wealth of experience
                and expertise in blockchain technology and web development
              </p>
            </div>
          </div>
          <div className="h-[40vh] w-[60vw] md:h-[50vh] md:w-[40vw] sm:h-[40vh] sm:w-[50vw] relative">
            <Image
              src="/profile.svg"
              layout="fill"
              className="object-contain"
            />
          </div>
        </div>
        <h1 className="text-4xl font-Poppins text-center font-bold mt-20">
          Education
        </h1>
        <div className=" w-[70vw]">
          {/* <Time /> */}
          <Timeline />
        </div>

        <h1 className="text-4xl  font-bold mb-8">Skills</h1>
        <h1 className="text-4xl  font-bold mb-8">Interest</h1>
      </div>
    </>
  );
}

export default About;
