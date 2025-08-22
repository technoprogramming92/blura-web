"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function MaskCursor() {
  const maskRef = useRef<HTMLDivElement | null>(null);
  const normalSize = 20; // small bubble
  const hoverSize = 70; // enlarged bubble

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mask = maskRef.current;
    if (!mask) return;

    const prevCursor = document.documentElement.style.cursor;

    // Initial setup
    gsap.set(mask, { width: normalSize, height: normalSize, x: -100, y: -100, opacity: 1 });

    // Move cursor
    const onMove = (e: MouseEvent) => {
      gsap.to(mask, {
        x: e.clientX - parseFloat(mask.style.width) / 2,
        y: e.clientY - parseFloat(mask.style.height) / 2,
        duration: 0.15,
        ease: "power3.out",
      });
    };

    // Hover logic
    const onHover = (e: MouseEvent) => {
      const element = e.target as HTMLElement | null;

      // If hovering on buttons or inputs → show normal cursor
      if (element?.closest("button, input, textarea, select")) {
        document.documentElement.style.cursor = "auto";
        gsap.to(mask, { opacity: 0, duration: 0.2 });
        return;
      }

      // Always hide default cursor elsewhere
      document.documentElement.style.cursor = "none";
      gsap.to(mask, { opacity: 1, duration: 0.2 });

      // Enlarge on headings
      if (element && /^(H[1-6])$/.test(element.tagName)) {
        gsap.to(mask, {
          width: hoverSize,
          height: hoverSize,
          duration: 0.35, // smooth transition
          ease: "power3.out",
        });
      } else {
        gsap.to(mask, {
          width: normalSize,
          height: normalSize,
          duration: 0.35,
          ease: "power3.out",
        });
      }
    };

    // Event listeners
    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onHover);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onHover);
      document.documentElement.style.cursor = prevCursor || "";
    };
  }, []);

  return (
    <div
      ref={maskRef}
      style={{
        borderRadius: "50%",
        backgroundColor: "#F8E0BC", // your calculated color
        mixBlendMode: "difference",
      }}
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
    />
  );
}
