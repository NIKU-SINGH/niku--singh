"use client";

import Image from "next/image";
import Preloader from "./components/preLoader";
import Landing from "./components/hero";
import Navbar from "./components/navbar";
import About from "./components/about";
import { useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <main className="">
      {isLoading ? (
        <Preloader isLoading={isLoading} setIsLoading={setIsLoading} />
      ) : (
        <div>
          <Navbar />
          <Landing />
          <About />
        </div>
      )}
    </main>
  );
}
