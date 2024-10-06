"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navRef = useRef(null);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY < lastScrollY) {
          // if scroll up show the navbar
          setShow(true);
        } else {
          // if scroll down hide the navbar
          setShow(false);
        }
        // remember current page location to use in the next move
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  useEffect(() => {
    gsap.to(navRef.current, {
      y: show ? 0 : -100,
      duration: 0.3,
      ease: "power2.out"
    });
  }, [show]);

  return (
    <div className="w-full py-2 px-16 flex items-center justify-between fixed top-0 font-sanFrancisco">
      {/* Logo or Name */}
      <div className="w-20 h-20 flex items-center justify-center">
        {/* <Image src="/images/logo.svg" width={50} height={50} alt="Logo" /> */}
      </div>

      {/* Navigation Items */}
      <nav
        ref={navRef}
        className="border border-white/10 shadow-lg py-6 px-10 rounded-full bg-foreground backdrop-blur-md border-1 "
      >
        <ul className="flex space-x-10 text-white text-sm font-normal">
          <li className="cursor-pointer hover:text-gray-300 hover:font-bold">
            About
          </li>
          <li className="cursor-pointer hover:text-gray-300 hover:font-bold">
            Experience
          </li>
          <li className="cursor-pointer hover:text-gray-300 hover:font-bold">
            Projects
          </li>
          <li className="cursor-pointer hover:text-gray-300 hover:font-bold">
            Contact
          </li>
          <li className="cursor-pointer hover:text-gray-300 hover:font-bold">
            Blog
          </li>
        </ul>
      </nav>
      <nav>{/* <p>Random button</p> */}</nav>
    </div>
  );
};

export default Navbar;
