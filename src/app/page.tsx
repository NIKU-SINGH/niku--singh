import Image from "next/image";
import Preloader from "./components/preLoader";
import Landing from "./components/hero";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <main className="">
      {/* <Preloader /> */}

      {/* Main Section layout */}
      <div className="flex h-[100vh]">
        <Navbar />
        <Landing />
        <Navbar />
      </div>
    </main>
  );
}
