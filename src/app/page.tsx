"use client";

import Image from "next/image";
import Preloader from "./components/preLoader";
import Landing from "./components/hero";
import Navbar from "./components/navbar";
import About from "./components/about";
import { useState } from "react";
import Hero2 from "./components/hero/hero2";
import Logo from "./components/logo/logo";
import Work from "./components/work";
import Experience from "./components/experience";
import Skills from "./components/skills";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <main className="">
      {/* {isLoading ? (
        <Preloader isLoading={isLoading} setIsLoading={setIsLoading} />
      ) : (
        <div className="bg-red-400 flex items-center justify-center">
          <Navbar />
          <Hero2 />

        </div>
      )} */}
      <div className="flex items-center justify-center flex-col">
        {/* <Logo /> */}
        <Navbar />

        <Hero2 />
        <About />
        <Work />
        <Experience />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
