 "use client"

import { useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Preloader = () => {
  useEffect(() => {
    const logo = document.getElementById("logo");
    const preloader = document.getElementById("preloader");

    if (logo && preloader) {
      // Create the explosion effect
      gsap.to(logo, {
        duration: 1,
        scale: 5,
        rotation: 720,
        opacity: 0,
        ease: "power4.out",
        onComplete: () => {
          // Reassemble the logo
          gsap.to(logo, {
            duration: 1,
            scale: 1,
            rotation: 0,
            opacity: 1,
            ease: "power4.in",
            onComplete: () => {
              // Fade out preloader
              gsap.to(preloader, {
                duration: 0.5,
                opacity: 0,
                display: "none",
              });
            },
          });
        },
      });
    }
  }, []); // Empty dependency array ensures this runs only once after component mounts

  return (
    <div id="preloader">
      <div id="logo">{/* Your logo or symbol here */}</div>
    </div>
  );
};

export default Preloader;
