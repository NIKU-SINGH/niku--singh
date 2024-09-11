import Image from "next/image";
import Preloader from "./components/preLoader";
import Landing from "./components/hero";
import Navbar from "./components/navbar";
import About from "./components/about";

export default function Home() {
  return (
    <main className="">
      {/* <Preloader /> */}

      {/* Main Section layout */}
      <Navbar />
      <div className="flex flex-col py-6 px-24">
        <Landing />
        <About />
      </div>
    </main>
  );
}
