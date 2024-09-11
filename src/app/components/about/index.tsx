import React from "react";
import Image from "next/image";

function About() {
  return (
    <div className="flex flex-col items-center justify-center m-14 font-monumentExtended space-y-4">
      <h1 className="text-6xl font-monumentExtended font-bold w-full">
        About Me
      </h1>
      <div className="flex flex-col justify-center lg:flex-row">
        <div className="w-full lg:w-4/5">
          <div className="flex mb-4">
            <p className="text-sm font-regular">
              Hello! My name is Brittany and I enjoy creating things that live
              on the internet. My interest in web development started back in
              2012 when I decided to try editing custom Tumblr themes — turns
              out hacking together a custom reblog button taught me a lot about
              HTML & CSS!
            </p>
          </div>
          <div className="flex mb-4">
            <p className="text-sm md:text-base">
              Fast-forward to today, and I`&apos;`ve had the privilege of
              working at an advertising agency, a start-up, a huge corporation,
              and a student-led design studio. My main focus these days is
              building accessible, inclusive products and digital experiences at
              Statement for a variety of clients.
            </p>
          </div>
          <div className="flex mb-4">
            <p className="text-sm md:text-base">
              I also recently launched a course that covers everything you need
              to build a web app with the Spotify API using Node & React.
            </p>
          </div>
          <div className="flex mb-4">
            <p className="text-sm md:text-base">
              Here are a few technologies I ve been working with recently:
            </p>
          </div>
        </div>
        <div className="h-[40vh] w-[60vw] md:h-[50vh] md:w-[40vw] sm:h-[40vh] sm:w-[50vw] relative">
          <Image
            src="/images/profile.svg"
            layout="fill"
            objectFit="contain"
            alt="Profile"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
