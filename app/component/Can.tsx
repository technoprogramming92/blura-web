"use client";
"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Can() {
  const backCanRef = useRef<HTMLDivElement>(null);
  const frontCanRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1, ease: "power3.out" } });

    // Initial position
    gsap.set(backCanRef.current, {
      x: "-150%",
      rotation: -45,
      opacity: 0,
    });
    gsap.set(frontCanRef.current, {
      x: "150%",
      rotation: 45,
      opacity: 0,
    });

    // Animate cans into place
    tl.to(backCanRef.current, {
      x: "-55%",
      rotation: -25,
      opacity: 1,
    }).to(
      frontCanRef.current,
      {
        x: "-45%",
        rotation: 25,
        opacity: 1,
      },
      "-=0.5"
    );

    // Hover effect: move cans away
    const container = containerRef.current;
    if (container) {
      container.addEventListener("mouseenter", () => {
        gsap.to(backCanRef.current, {
          x: "-150%",
          rotation: -45,
          opacity: 0,
          duration: 0.8,
        });
        gsap.to(frontCanRef.current, {
          x: "150%",
          rotation: 45,
          opacity: 0,
          duration: 0.8,
        });
      });

      container.addEventListener("mouseleave", () => {
        gsap.to(backCanRef.current, {
          x: "-55%",
          rotation: -25,
          opacity: 1,
          duration: 0.8,
        });
        gsap.to(frontCanRef.current, {
          x: "-45%",
          rotation: 25,
          opacity: 1,
          duration: 0.8,
        });
      });
    }

    return () => {
      container?.removeEventListener("mouseenter", () => {});
      container?.removeEventListener("mouseleave", () => {});
    };
  }, []);

  return (
    <section className="w-full bg-white py-16 px-0">
      <div
        ref={containerRef}
        className="w-full max-w-[1276px]  h-[600px] h-[549px] bg-[#071f43] mx-auto flex items-center justify-center relative overflow-hidden"
      >
        {/* Back can */}
        <div
          ref={backCanRef}
          className="
            w-[280px] md:w-[340px] lg:w-[400px]
            h-[520px] md:h-[560px] lg:h-[600px]
            bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-21/VV84h7H9c8.png)]
            bg-contain bg-no-repeat absolute
            top-[50%] left-[50%]
            -translate-x-[55%] -translate-y-[50%]
            z-[3]
          "
          style={{ marginTop: "5%" }}
        />
        {/* Front can */}
        <div
          ref={frontCanRef}
          className="
            w-[280px] md:w-[340px] lg:w-[400px]
            h-[520px] md:h-[560px] lg:h-[600px]
            bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-21/VV84h7H9c8.png)]
            bg-contain bg-no-repeat absolute
            top-[50%] left-[50%]
            -translate-x-[45%] -translate-y-[50%]
            z-[4]
          "
          style={{ marginTop: "5%" }}
        />
      </div>
    </section>
  );
}
