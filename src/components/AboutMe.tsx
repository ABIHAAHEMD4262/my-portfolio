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
          I'm <span className="text-green-400 font-medium">Syeda Abiha Ahmed</span>, a
          <span className="text-green-400 font-medium"> Full-Stack AI/ML Engineer </span> from
          <span className="text-green-400 font-medium">Karachi, Pakistan</span>. I build
          production-grade AI systems that solve real business problems.
          <br /><br />
          I specialize in{" "}
          <span className="text-green-400 font-medium">AI Integration</span> (OpenAI Agents SDK, RAG systems, Qdrant vector databases),
          <span className="text-green-400 font-medium"> Full-Stack Development</span> (Next.js 16, TypeScript, FastAPI, PostgreSQL), and{" "}
          <span className="text-green-400 font-medium">Cloud & DevOps</span> (Kubernetes, Docker, HuggingFace, Vercel).
          <br /><br />
          With <span className="text-green-400 font-medium">4 completed hackathons</span> before turning 18,
          I've deployed AI chatbots with NLP CRUD operations, educational platforms with RAG assistants,
          and business automation systems to production. I transform complex problems into elegant,
          scalable solutions using modern cloud-native architectures.
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
