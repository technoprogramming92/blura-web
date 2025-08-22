"use client";

import React from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export default function AnimatedText({ text, className }: AnimatedTextProps) {
  return (
    <h1 className={className}>
      {text.split("").map((char, i) => (
        <span
          key={i}
          data-hover-effect
          className="inline-block transition-transform duration-200"
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h1>
  );
}
