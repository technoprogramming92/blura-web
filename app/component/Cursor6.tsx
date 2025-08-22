"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const currentTargetRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const noHover = window.matchMedia(
      "(hover: none), (pointer: coarse)"
    ).matches;
    if (noHover) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    const prevCursor = document.documentElement.style.cursor;
    document.documentElement.style.cursor = "none";

    // Initial setup
    gsap.set(cursor, {
      x: -9999,
      y: -9999,
      scale: 0.6,
      transformOrigin: "50% 50%",
      backgroundColor: "#071f43", // Dark blue
    });

    const onMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX - 20,
        y: e.clientY - 20,
        duration: 0.12,
        ease: "power3.out",
      });
    };

    const onOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest(
        "button, a, [data-hover-effect]"
      );
      if (!target || target === currentTargetRef.current) return;

      currentTargetRef.current = target as HTMLElement;

      gsap.killTweensOf(cursor);
      gsap.to(cursor, {
        scale: 1.2,
        duration: 0.18,
        ease: "power3.out",
      });

      gsap.to(target, {
        color: "#ffffff", // Text turns white for better contrast
        duration: 0.22,
      });
    };

    const onOut = (e: MouseEvent) => {
      const related = e.relatedTarget as Node | null;
      const current = currentTargetRef.current;
      if (!current) return;
      if (related && current.contains(related)) return;

      gsap.to(current, {
        color: "#071f43", // Back to original color
        duration: 0.22,
      });

      currentTargetRef.current = null;

      gsap.to(cursor, {
        scale: 0.6,
        duration: 0.18,
      });
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      document.documentElement.style.cursor = prevCursor || "";
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{ width: 40, height: 40 }}
      className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-[#071f43] mix-blend-difference"
    />
  );
}
