"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";

const Preloader = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const preloader = document.getElementById("preloader");
    // Animate the number count
    gsap.to(
      {},
      {
        duration: 3,
        ease: "power4.out",
        onUpdate: function () {
          const newCount = Math.round(this.progress() * 100);
          setCount(newCount);
        },
        onComplete: () => {
          // Fade out preloader
          gsap.to(preloader, {
            duration: 0.5,
            opacity: 0,
            display: "none",
          });
        },
      }
    );
  }, []);

  return (
    <div
      id="preloader"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontSize: "3rem",
        backgroundColor: "#000",
        color: "#fff",
      }}
    >
      {count}%
    </div>
  );
};

export default Preloader;
