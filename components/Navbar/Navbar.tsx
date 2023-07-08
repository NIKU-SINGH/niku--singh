import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { resolvedTheme } = useTheme();
  const router = useRouter();
  var newCookie = "false";
  const [mounted, setMounted] = useState(false);
  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  document.cookie = newCookie;

  const toggleTheme = () => {
    if (resolvedTheme === "dark") setTheme("light");
    else setTheme("dark");
  };

  if (newCookie != "true") {
    document.cookie = "true";
    if (theme === "dark") {
      alert("Kripya Dark mode na chalaye, Ankho ke liye jan leva hain");
    }
  }

  return (
    <div>
      <nav className="fixed w-full top-0 z-10 shadow rounded-sm bg-white ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0 ">
              <div
                className="hidden md:block text-xl md:text-3xl font-Pacifico font-normal cursor-pointer"
                // onClick={router.push("/")}
              >
                <Link href="/" className="px-3 py-2 text-sm">
                Niku Singh.
                </Link>
              </div>
              <div className="md:hidden font-Pacifico font-normal text-xl md:text-3xl">
                Niku Singh.
              </div>
            </div>
            <div className="font-medium text-gray-700">
              <div className="hidden md:block font-Poppins">
                <div className="ml-10 flex items-baseline space-x-12">
                  <Link href="#about" className="px-3 py-2 text-sm scroll-smooth">
                    About me
                  </Link>

                  <Link
                    href="projects"
                    className=" px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Projects
                  </Link>

                  <Link
                    href="blogs"
                    className="px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Blogs
                  </Link>

                  <Link
                    href="contact"
                    className=" px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Contact Me
                  </Link>
                  <Link
                    href="cv"
                    className=" px-3 py-2 rounded-md text-sm font-medium"
                  >
                    CV
                  </Link>
                </div>
              </div>
            </div>

            <div
              className=" hidden md:block text-2xl border rounded-full border-black p-2 cursor-pointer"
              // onClick={() => setTheme({ color: resolvedTheme === 'dark'} ? 'light' : 'dark')}
              onClick={toggleTheme}
            >
              {theme == "light" ? <FiSun /> : <FiMoon />}
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-offset-2 gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-8 w-8 border-gray-900 border-solid border rounded-full p-1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-8 w-8 border-gray-900 border-solid border rounded-full p-1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <div className=" text-black block px-3 py-2 rounded-md font-medium">
                  <Link href="about">About Me</Link>
                </div>
                <div className=" text-black block px-3 py-2 rounded-md text-base font-medium">
                  <Link href="projects">Projects</Link>
                </div>
                <div className=" text-black block px-3 py-2 rounded-md text-base font-medium">
                  <Link href="blogs">Blogs</Link>
                </div>
                <div className=" text-black block px-3 py-2 rounded-md text-base font-medium">
                  <Link href="contact">Contact Me</Link>
                </div>
                <div className=" text-black block px-3 py-2 rounded-md text-base font-medium">
                  <Link href="contact">Contact us</Link>
                </div>
                <div className=" text-black block px-3 py-2 rounded-md text-base font-medium">
                  <Link href="cv">CV</Link>
                </div>
                <div className=" text-black px-3 py-2 rounded-md text-base font-medium flex justify-center items-center">
                  <Link href="contact">
                    <button className="btn btn-gray-800 rounded-full border-2 p-1 pl-2 pr-2 flex items-center">
                      Change the theme
                      <div className="text-sm border rounded-full border-black p-2 ml-4">
                        <FiSun />
                        {/* <FiMoon /> */}
                      </div>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Nav;
