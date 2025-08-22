"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function HeroImageGSAP() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const img = imgRef.current;
    if (!wrap || !img) return;

    // Disable on touch devices (optional)
    const noHover = window.matchMedia(
      "(hover: none), (pointer: coarse)"
    ).matches;
    if (noHover) return;

    const ctx = gsap.context(() => {
      gsap.set(img, { transformOrigin: "center top", willChange: "transform" });

      const tl = gsap
        .timeline({
          paused: true,
          defaults: { duration: 0.6, ease: "power2.out" },
        })
        // adjust scale / y to taste
        .to(img, { scale: 1.25, y: 16 }, 0);

      const enter = () => tl.play();
      const leave = () => tl.reverse();
      wrap.addEventListener("mouseenter", enter);
      wrap.addEventListener("mouseleave", leave);

      return () => {
        wrap.removeEventListener("mouseenter", enter);
        wrap.removeEventListener("mouseleave", leave);
      };
    }, wrap);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={wrapRef}
      className="order-2 lg:order-2 w-full lg:w-[560px] h-[400px] lg:h-[634px] 
                 overflow-hidden lg:self-end lg:translate-y-12 z-0"
    >
      <img
        ref={imgRef}
        src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-21/NE1XZKpKVi.png"
        alt="Hero Image"
        className="w-full h-full object-cover block"
      />
    </div>
  );
}
