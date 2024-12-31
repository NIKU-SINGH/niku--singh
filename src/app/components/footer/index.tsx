import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Github, Twitter, Linkedin, Gitlab } from "lucide-react";
interface SocialLink {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface NavLink {
  name: string;
  href: string;
}

const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    href: "https://github.com",
    icon: Github,
  },
  {
    name: "Twitter",
    href: "https://twitter.com",
    icon: Twitter,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: Linkedin,
  },
  {
    name: "GitLab",
    href: "https://gitlab.com",
    icon: Gitlab,
  },
];

const navLinks: NavLink[] = [
  { name: "About", href: "/about" },
  { name: "Features", href: "/features" },
  { name: "Works", href: "/works" },
  { name: "Support", href: "/support" },
  { name: "Help", href: "/help" },
];

const Footer: React.FC = () => {
  return (
    <footer className="block bg-gray-900 w-full">
      <div className="py-16 md:py-20 mx-auto w-full max-w-7xl px-5 md:px-10 font-monumentExtended">
        <div className="sm:flex-row flex justify-between flex-col">
          <h2 className="font-bold text-3xl md:text-5xl w-full max-w-xl text-white">
            Lightning fast Next.js Dev made easy
          </h2>
          <div className="mt-8 md:mt-0">
            <div className="mb-4 flex max-w-72 items-start justify-start">
              <Image
                src="/images/map-pin.svg"
                alt="Location pin"
                width={24}
                height={24}
                className="mr-3"
              />
              <p className="text-gray-400 text-sm sm:text-base">
                8502 Preston Rd. Inglewood, Maine 98380, USA
              </p>
            </div>
            <div className="mb-4 flex max-w-72 items-start justify-start">
              <Image
                src="/images/envelope.svg"
                alt="Email"
                width={24}
                height={24}
                className="mr-3"
              />
              <p className="text-gray-400 text-sm sm:text-base">
                support@company.co
              </p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mt-8">
          {socialLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" />
            </Link>
          ))}
        </div>

        <div className="mb-14 w-full border-b border-gray-800 mt-16"></div>

        <div className="md:flex-row flex justify-between sm:items-center sm:flex-col items-start flex-col-reverse">
          <nav className="font-semibold mb-4 sm:mb-0 py-1 text-center sm:text-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="inline-block font-normal text-gray-400 transition hover:text-blue-500 sm:pr-6 lg:pr-12 py-1.5 sm:py-2 pr-6"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <p className="text-gray-400 text-sm sm:text-base">
            © {new Date().getFullYear()} Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
