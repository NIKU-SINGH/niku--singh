import React from "react";
import Timeline from "./Timeline";
import Time from "./Time";
import Skill from '../Skills'
import Image from "next/image";

function About() {
  return (
    <>
      <div className="flex flex-col font-Poppins items-center justify-center mt-48 mx-32">
        <h1 className="text-5xl font-Poppins text-center font-bold w-[90vw] " id="about">
          About Me
        </h1>
        <div className="flex flex-col-reverse justify-center items-center lg:flex-row m-4">
          <div className="p-4 w-[100vw]] lg:w-[85%] font-Poppinsh-[50vh]">
            <div className="flex mb-4">
              <p className="text-sm md:text-base">
                I'm a Final year NIT Jalandhar student interested in Open
                Source, Bitcoin, Blockchain, and Web technologies.{" "}
              </p>
            </div>
            <div className="flex mb-4">
              <p className="text-sm md:text-base">
                I'm a skilled Full Stack Developer with experience in building
                robust applications. I am Currently a{" "}
                <b>Google Summer Of Code &apos;23 Contributor at GitLab.</b> I
                am also <b>Linux Foundation Mnentor</b> at Hyperledger
                Foundation. In 2022, I was{" "}
                <b>LFX Mentee at Hyperledger Foundation</b> and , where I gained
                valuable experience working on real-world blockchain projects. I
                won the <b>MIT Bitcoin Expo Hackathon</b> and Quicknode track in
                the
                <b> ETHforALL web3 hackathon</b>, showcasing my innovative
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
                In my free time, I enjoy <b>reading</b> books and{" "}
                <b>watching movies</b>. Learning about{" "}
                <b>istory, Economics, Psychology and Science Fact </b> I am a
                proud Potterhead and often find inspiration in the stories and
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

        {/* Work Experience */}
        <div className="mt-32">
          <h1 className="text-5xl font-Poppins text-center font-bold mt-20">
            Work Experience.
          </h1>
          <div className=" w-[70vw]">
            {/* <Time /> */}
            <Timeline />
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-32">
          <h1 className="text-5xl font-Poppins text-center font-bold mt-20">
            Education.
          </h1>
          <div className=" w-[70vw]">
            {/* <Time /> */}
            <Timeline />
          </div>
        </div>

        {/* Skill */}
       <Skill />
        {/* Interest */}
        <div className="mt-32">
          <h1 className="text-5xl font-Poppins text-center font-bold mt-20">
            Interest.
          </h1>
        </div>
      </div>
    </>
  );
}

export default About;
