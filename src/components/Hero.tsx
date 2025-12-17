"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const titles = ["AI Agents Developer", "Chatbot Developer", "Frontend Developer","Prompt Engineer"];
  const [currentTitle, setCurrentTitle] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  // Typing effect logic
  useEffect(() => {
    if (index === titles.length) return;

    if (subIndex === titles[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1000);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % titles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 50 : 150, parseInt(`${Math.random() * 350}`)));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#1e293b] flex items-center justify-center px-6 overflow-hidden relative">
      {/* ✅ Animated Background Grid */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="w-full h-full bg-[radial-gradient(circle,_#00ff9d20_1px,_transparent_1px)] [background-size:30px_30px] animate-gridMove"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#020617]/80"></div>
      </div>

      {/* ✅ Floating Neon Lines */}
      <div className="absolute w-[1px] h-full bg-gradient-to-b from-transparent via-[#00f0ff60] to-transparent left-1/3 animate-lineMove"></div>
      <div className="absolute w-[1px] h-full bg-gradient-to-b from-transparent via-[#00ff9d60] to-transparent right-1/3 animate-lineMoveSlow"></div>

      {/* ✅ Hero Content */}
      <section className="relative text-center text-white flex flex-col items-center z-10">
        {/* Profile Image */}
        <div className="relative z-10 mb-8 animate-fade-in">
          <Image
            src="/images/pt.jpg"
            alt="Abiha Ahmed"
            width={230}
            height={230}
            className="rounded-full object-cover shadow-[0_0_40px_#00ff9d80]"
          />
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-5xl font-extrabold z-10 mb-3 tracking-wide animate-slide-up">
          Hi, I'm <span className="text-[#00ff9d]">Syeda Abiha Ahmed</span>
        </h1>

        {/* Typing animation */}
        <h2 className="text-2xl md:text-3xl font-semibold text-[#00f0ff] h-10 animate-typewriter">
          {currentTitle || titles[index].substring(0, subIndex)}|
        </h2>

        {/* Description */}
        <p className="text-gray-300 max-w-2xl mt-6 text-lg animate-fade-in-delay">
          Building intelligent and visually striking digital experiences powered by AI and modern front-end tech.
        </p>

        {/* Buttons */}
        <div className="flex gap-5 mt-10 z-10 animate-slide-up">
          <Link
            href="/Resume.pdf"
            download
            className="bg-[#00ff9d] text-black px-8 py-3 rounded-full font-semibold hover:bg-[#00e58a] transition-all shadow-[0_0_20px_#00ff9d80]"
          >
            Download CV
          </Link>
          <Link href={"/contact"}>
          <button className="border border-[#00f0ff] px-8 py-3 rounded-full font-semibold hover:bg-[#00f0ff] hover:text-black transition-all shadow-[0_0_20px_#00f0ff60]">
            Contact Me
          </button>
          </Link>
          
        </div>
      </section>
    </main>
  );
}
