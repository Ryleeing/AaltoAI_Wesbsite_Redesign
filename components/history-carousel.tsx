"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { LearnMore } from "@/components/learn-more";

type Slide = {
  src: string;
  alt: string;
  text: string;
};

// Swap these placeholders for your real historical photos in /public.
const slides: Slide[] = [
  {
    src: "/history-1.svg",
    alt: "Students gathered on the university steps, 1950s",
    text: "This is a sample paragraph used for layout demonstration. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...(description of the current image)",
  },
  {
    src: "/history-2.svg",
    alt: "Early computing lab at the university",
    text: "Second chapter of our story. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...(description of the current image)",
  },
  {
    src: "/history-3.svg",
    alt: "First AaltoAI community meetup",
    text: "Third chapter of our story. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...(description of the current image)",
  },
];

export function HistoryCarousel() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);
  const peek = (index + 1) % slides.length;

  return (
    <section id="history" className="relative mx-auto max-w-7xl px-6 lg:px-10">
      <div className="relative">
        {/* Main card */}
        <div className="relative overflow-hidden rounded-card shadow-sm">
          {/* Slide images (cross-fade) */}
          <div className="relative aspect-[4/3] w-full sm:aspect-[16/10] lg:aspect-[16/9]">
            {slides.map((slide, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={slide.src}
                src={slide.src}
                alt={i === index ? slide.alt : ""}
                aria-hidden={i !== index}
                className={`absolute inset-0 h-full w-full object-cover grayscale transition-opacity duration-700 ${
                  i === index ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
            {/* Whitish wash, strongest where the text sits */}
            <div className="absolute inset-0 bg-gradient-to-b from-paper/90 via-paper/40 to-transparent" />
          </div>

          {/* Overlay copy */}
          <div className="absolute left-6 top-6 z-10 max-w-md sm:left-10 sm:top-10">
            <h2 className="font-serif text-5xl leading-tight sm:text-6xl lg:text-7xl">
              Our <span className="text-accent">History</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ink/80">
              {slides[index].text}
            </p>
            <LearnMore href="#history" className="mt-4" />
          </div>

          {/* Arrows */}
          <button
            onClick={prev}
            aria-label="Previous slide"
            className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full p-2 text-white/90 transition hover:bg-black/10"
          >
            <ChevronLeft className="h-10 w-10 drop-shadow" strokeWidth={1.5} />
          </button>
          <button
            onClick={next}
            aria-label="Next slide"
            className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full p-2 text-white/90 transition hover:bg-black/10"
          >
            <ChevronRight className="h-10 w-10 drop-shadow" strokeWidth={1.5} />
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-6 bg-accent" : "w-1.5 bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Peek of the next slide, off the right edge (desktop only) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 top-4 bottom-4 hidden w-14 overflow-hidden rounded-2xl opacity-70 blur-[2px] xl:block"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={slides[peek].src}
            alt=""
            className="h-full w-[60rem] max-w-none object-cover grayscale"
          />
        </div>
      </div>
    </section>
  );
}
