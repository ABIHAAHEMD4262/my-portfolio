"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutPage() {
  return (
    <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-200 min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(transparent_95%,rgba(34,197,94,0.08)_100%)] bg-[length:100%_40px]"></div>
      </div>

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-6 text-green-400"
        >
          About Me
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed"
        >
          I’m <span className="text-green-400 font-medium">Abiha Ahmed</span>, a passionate 
          <span className="text-green-400 font-medium"> Frontend Developer </span> and 
          <span className="text-green-400 font-medium"> UI Designer</span> with a keen eye for 
          creating elegant and functional digital experiences. My expertise includes 
          <span className="text-green-400 font-medium"> React, Next.js, TypeScript, Tailwind CSS,</span> and 
          design tools like <span className="text-green-400 font-medium">Figma</span>.  
          <br /><br />
          I also work with modern AI automation tools like 
          <span className="text-green-400 font-medium"> OpenAI Agents SDK </span> and 
          <span className="text-green-400 font-medium"> n8n </span>, bridging creativity with intelligence. 
          My focus is on crafting visually engaging, responsive interfaces that bring ideas to life — blending design precision with technical excellence.
        </motion.p>

        {/* Divider line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="w-32 h-[2px] bg-green-400 mx-auto my-8"
        ></motion.div>

        {/* Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <Link
            href="/contact"
            className="inline-block bg-green-500 hover:bg-green-400 text-black font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-300"
          >
            Let’s Connect
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
