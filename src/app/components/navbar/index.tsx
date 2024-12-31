"use client";
import React, { useState, useEffect, useRef } from "react";
import { Menu, Tally2, X } from "lucide-react";
import Logo from "../logo/logo";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
  { label: "Blog", href: "#blog" },
];

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY < lastScrollY || window.scrollY < 10) {
          setShow(true);
        } else {
          setShow(false);
        }
        setLastScrollY(window.scrollY);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target as Node)
      ) {
        setIsDrawerOpen(false);
      }
    };

    window.addEventListener("scroll", controlNavbar);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [lastScrollY]);

  return (
    <>
      <div className="fixed top-5 left-0 w-full px-4 md:px-16 flex items-center justify-between z-50">
        {/* Logo - Always visible */}
        <div className="fixed top-5 left-4 md:left-16 z-50">
          <Logo />
        </div>

        {/* Navigation Items - Hidden on mobile */}
        <nav
          className={`hidden md:block border border-white/10 shadow-lg py-6 px-10 rounded-full bg-foreground/80 backdrop-blur-md mx-auto transition-transform duration-300 ${
            !show ? "-translate-y-32" : ""
          }`}
        >
          <ul className="flex space-x-10 text-white text-sm font-normal">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="cursor-pointer hover:text-gray-300 transition-colors duration-200 hover:font-bold"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact Button - Always visible */}
        <div className="fixed top-5 right-4 md:right-16 z-50">
          <button
            onClick={toggleDrawer}
            className="flex items-center space-x-2 text-white hover:text-gray-300 transition-colors duration-200"
          >
            <span className="font-generalSans text-xl font-medium">
              Contact
            </span>
            <Menu />
          </button>
        </div>
      </div>

      {/* Side Drawer */}
      <div
        ref={drawerRef}
        className={`fixed top-0 right-0 h-full w-full md:w-[400px] bg-foreground/95 backdrop-blur-md z-50 transform transition-transform duration-300 ease-in-out ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-8">
          <button
            onClick={toggleDrawer}
            className="absolute top-6 right-6 text-white hover:text-gray-300"
          >
            <X size={24} />
          </button>

          {/* Mobile Navigation */}
          <div className="md:hidden mt-16">
            <ul className="space-y-6 text-white">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-lg hover:text-gray-300 transition-colors duration-200"
                    onClick={toggleDrawer}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Form */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-6">Get in touch</h2>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-3 bg-background/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-white/30"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 bg-background/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-white/30"
                />
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full p-3 bg-background/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-white/30"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-white text-foreground font-medium rounded-lg hover:bg-gray-200 transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={toggleDrawer}
        />
      )}
    </>
  );
};

export default Navbar;
