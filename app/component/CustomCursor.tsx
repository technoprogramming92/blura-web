"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const currentTargetRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Don't enable on touch / coarse pointer devices
    if (typeof window === "undefined") return;
    const noHover = window.matchMedia(
      "(hover: none), (pointer: coarse)"
    ).matches;
    if (noHover) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    // hide native cursor (will restore on cleanup)
    const prevCursor = document.documentElement.style.cursor;
    document.documentElement.style.cursor = "none";

    // initial positioning off-screen
    gsap.set(cursor, {
      x: -9999,
      y: -9999,
      scale: 1,
      transformOrigin: "50% 50%",
    });

    // move cursor with slight smoothing
    const onMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX - 20,
        y: e.clientY - 20,
        duration: 0.12,
        ease: "power3.out",
      });
    };

    // when entering an interactive element
    const onOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest(
        "button, a, [data-hover-effect]"
      ) as HTMLElement | null;
      if (!target || target === currentTargetRef.current) return;

      // store original color and display so we can restore later
      const computed = getComputedStyle(target);
      (target as any).__origColor = computed.color;
      (target as any).__origDisplay = computed.display;

      // if inline, change to inline-block so transform works cleanly
      if (computed.display === "inline") {
        (target as any).__didChangeDisplay = true;
        target.style.display = "inline-block";
      } else {
        (target as any).__didChangeDisplay = false;
      }

      currentTargetRef.current = target;

      // animate target (scale + color)
      gsap.killTweensOf(target);
      gsap.to(target, {
        scale: 1.08,
        color: "#071f43",
        duration: 0.22,
        ease: "power3.out",
      });
      // enlarge cursor and add semi-transparent fill
      gsap.to(cursor, {
        scale: 1.6,
        backgroundColor: "rgba(7,34,67,0.18)",
        borderColor: "rgba(7,34,67,0.8)",
        duration: 0.18,
      });
    };

    // when leaving interactive element
    const onOut = (e: MouseEvent) => {
      // Use relatedTarget logic to avoid flicker when moving between children
      const related = e.relatedTarget as Node | null;
      const current = currentTargetRef.current;
      if (!current) return;

      // if still inside the same element, ignore
      if (related && current.contains(related)) return;

      // restore target styles
      const origColor = (current as any).__origColor || "";
      gsap.to(current, {
        scale: 1,
        color: origColor,
        duration: 0.18,
        ease: "power3.out",
      });

      // restore display if we changed it
      if ((current as any).__didChangeDisplay) {
        // delay a tick so transform finishes
        setTimeout(() => {
          current.style.display = (current as any).__origDisplay || "";
        }, 220);
      }

      currentTargetRef.current = null;

      // restore cursor
      gsap.to(cursor, {
        scale: 1,
        backgroundColor: "transparent",
        borderColor: "rgba(7,34,67,0.6)",
        duration: 0.18,
      });
    };

    // listeners
    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    // cleanup
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      document.documentElement.style.cursor = prevCursor || "";
    };
  }, []);

  return (
    // small, visible ball; pointer-events-none so it does not block clicks
    <div
      ref={cursorRef}
      style={{ width: 40, height: 40 }}
      className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border border-[rgba(7,34,67,0.6)] bg-transparent"
    />
  );
}
