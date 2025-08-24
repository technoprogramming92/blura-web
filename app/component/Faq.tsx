"use client";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Faq() {
  const faqs = [
    {
      q: "What does “blüra” mean?",
      a: "The word blüra comes from the combination of two words: Blue + Aura. blüra symbolizes calm, clarity, and healing. It’s a pure feeling of sipping pure, untouched water from the Himalayas. And that’s exactly what we aim for: Water that goes beyond the ordinary.",
    },
    {
      q: "What makes blüra easy to use and reuse?",
      a: "blüra is packaged in aluminium cans that are infinitely recyclable. They are lightweight, safe to carry, and maintain the water’s natural taste without leaching or odour, making them both practical and sustainable.",
    },
    {
      q: "Why does blüra use aluminium cans instead of plastic bottles?",
      a: "Because plastic pollutes both the planet and the drinking experience. Aluminium is safer, infinitely recyclable, and keeps the water tasting pure and clean.",
    },
    {
      q: "Is blüra alkaline water?",
      a: "Yes, blüra naturally has a pH between 7 and 8, which helps neutralise acidity in the body.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(1); // 2nd accordion open by default

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLDivElement | null>(null);
  const faqRefs = useRef<HTMLDivElement[]>([]);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      // FAQ items stagger animation
      gsap.fromTo(
        faqRefs.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white py-16 px-4 sm:px-8"
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">
        {/* Left Title */}
        <div className="flex-1" ref={titleRef}>
          <h2 className="font-['Frank_Ruhl_Libre'] text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight">
            Answers, as Clear as Blüra Water
          </h2>
        </div>

        {/* Right Accordion */}
        <div className="flex-1 flex flex-col gap-4">
          {faqs.map((item, i) => (
            <div
              key={i}
              ref={(el) => {
                if (el) faqRefs.current[i] = el;
              }}
              className={`rounded-md transition overflow-hidden ${
                activeIndex === i
                  ? "bg-[#071f43] text-white"
                  : "bg-white shadow-md"
              }`}
            >
              {/* Header */}
              <button
                onClick={() => toggleAccordion(i)}
                className="w-full flex justify-between items-center px-6 py-4 text-left"
              >
                <span
                  className={`font-['Frank_Ruhl_Libre'] text-base sm:text-lg font-medium ${
                    activeIndex === i ? "text-white" : "text-black"
                  }`}
                >
                  {item.q}
                </span>
                <span className="text-xl font-bold">
                  {activeIndex === i ? "−" : "+"}
                </span>
              </button>

              {/* Body */}
              {activeIndex === i && (
                <div className="px-6 pb-4 text-sm sm:text-base opacity-80">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
