"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

type PreloaderProps = {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
};

const Preloader = ({ isLoading, setIsLoading }: PreloaderProps) => {
  const loaderContainerRef = useRef(null);
  const loader1Ref = useRef(null);
  const loader2Ref = useRef(null);
  const onesRef = useRef(null);
  const tensRef = useRef(null);
  const hundredsRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    const duration = 2; // Base duration for the progress bar and ones digit

    tl.to(loader1Ref.current, {
      width: "100%",
      duration: duration * 2,
      ease: "power2.inOut",
    });

    const animateDigit = (
      ref: React.RefObject<HTMLElement>,
      digitCount: number,
      customDuration: number
    ) => {
      const lastDigitPercentage = ((digitCount - 1) / digitCount) * 100;
      tl.to(
        ref.current,
        {
          duration: customDuration,
          y: `-${lastDigitPercentage}%`,
          ease: "power2.inOut",
        },
        0
      );
    };

    animateDigit(onesRef, 11, duration);
    animateDigit(tensRef, 11, duration * 1.5); // 1.5 times slower than ones
    animateDigit(hundredsRef, 2, duration * 2); // 2 times slower than ones

    tl.to(
      loader2Ref.current,
      {
        width: 0,
        // delay: 1.9,
        // duration: 6,
        ease: "power2.inOut",
      },
      "<"
    );

    tl.to(loaderContainerRef.current, {
      background: "none",
    //   delay: 6,
      duration: 0.1,
    });

    // Add rotate effect
    tl.to(loader1Ref.current, {
      rotate: 90,
      y: -50,
      duration: 0.5,
      ease: "power2.in",
    //   delay: 6,
    });

    tl.to(
      loader2Ref.current,
      {
        x: -75,
        y: 75,
        duration: 0.5,
      },
      "<"
    );

    tl.to(loader1Ref.current, {
      scale: 40,
      duration: 1,
      ease: "power2.inOut",
      onComplete: () => {
        setIsLoading(false);
      },
    });
  }, [setIsLoading]); // Add setIsLoading to the dependency array

  return (
    <div className="text-white font-sanFrancisco h-screen w-screen flex items-center justify-center overflow-hidden">
      <div ref={loaderContainerRef} className="h-12 w-96 bg-gray-950">
        <div ref={loader1Ref} className="bg-white w-0 h-full"></div>
        <div ref={loader2Ref} className="bg-white w-0 h-full"></div>
      </div>

      <div className="absolute bottom-10 left-10 text-9xl flex space-x-[-0.1em]">
        <div className="relative h-28 w-[0.6em] overflow-hidden">
          <div
            id="hundreds"
            ref={hundredsRef}
            className="absolute top-0 left-0"
          >
            {[0, 1].map((_, i) => (
              <div key={i} className="h-[1em] flex items-center justify-center">
                {i}
              </div>
            ))}
          </div>
        </div>
        <div className="relative h-28 w-[0.6em] overflow-hidden">
          <div id="tens" ref={tensRef} className="absolute top-0 left-0">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(
              (
                digit,
                i // Remove the extra 0
              ) => (
                <div
                  key={i}
                  className="h-[1em] flex items-center justify-center"
                >
                  {digit}
                </div>
              )
            )}
          </div>
        </div>
        <div className="relative h-28 w-[0.6em] overflow-hidden">
          <div id="ones" ref={onesRef} className="absolute top-0 left-0">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(
              (
                digit,
                i // Remove the extra 0
              ) => (
                <div
                  key={i}
                  className="h-[1em] flex items-center justify-center"
                >
                  {digit}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
