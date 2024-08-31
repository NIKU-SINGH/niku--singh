import Image from "next/image";
import Preloader from "./components/preLoader";

export default function Home() {
  return (
    <main className="">
      <Preloader />
      <h1 className="font-sanFrancisco font-bold text-8xl">
        This is Niku Singh
      </h1>
    </main>
  );
}
