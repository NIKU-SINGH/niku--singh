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
      <div className="flex flex-col">
        {/* <Navbar /> */}
        <Landing />
        <About />
      </div>
    </main>
  );
}
