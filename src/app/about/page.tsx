"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen py-16 px-4 md:px-8 max-w-6xl mx-auto bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 relative">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(34,197,94,0.05)_1px,transparent_1px)] bg-[length:40px_40px] pointer-events-none"></div>

      {/* Page Title */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-12 text-center text-green-400 relative z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h1>

      {/* Main Card */}
      <motion.div
        className="relative bg-gray-800/70 backdrop-blur-xl border border-green-500/20 rounded-2xl shadow-xl p-8 md:p-12 z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="flex flex-col md:flex-row gap-10 items-start">
          {/* Profile Image */}
          <motion.div
            className="w-full md:w-1/3 flex justify-center md:justify-start"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-2 ring-green-400/40 hover:ring-green-400/70 transition-all duration-300">
              <Image
                src="/images/pt.jpg"
                alt="Syeda Abiha Ahmed"
                width={260}
                height={260}
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* About Info */}
          <div className="w-full md:w-2/3 space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-1 text-green-400">
                Syeda Abiha Ahmed
              </h2>
              <h3 className="text-xl text-green-300 mb-4">
                Front-End & AI Agents Developer
              </h3>
            </div>

            <motion.p
              className="text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              I’m a passionate developer focused on crafting modern, responsive, and intelligent
              web experiences. My expertise lies in building clean interfaces using{" "}
              <strong className="text-green-400">Next.js, TypeScript, and Tailwind CSS</strong>, while integrating{" "}
              <strong className="text-green-400">AI agents and chatbots</strong> powered by the{" "}
              <strong className="text-green-400">OpenAI Agents SDK using Python</strong>.
            </motion.p>

            <p className="text-gray-300 leading-relaxed">
              I’m currently exploring how{" "}
              <strong className="text-green-400">AI can revolutionize healthcare</strong> by
              creating automation systems and intelligent assistants. My projects blend creativity,
              design, and technology to make complex experiences feel simple and human.
            </p>

            <div>
              <h4 className="text-xl font-semibold mt-8 mb-3 text-green-400">
                🎓 Education
              </h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>FSc Pre-Medical – Completed (2023–2025)</strong>
                  <br />
                  Govt. Degree College for Women, North Nazimabad, Karachi
                </li>
                <li>
                  <strong>Certified AI, Web 3.0 & Agentic Computing (In Progress)</strong>
                  <br />
                  Governor Initiative for AI & Computing (GIAIC)
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold mt-8 mb-3 text-green-400">
                🚀 Experience
              </h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Front-End Developer Intern – Cairo, Egypt (Remote)</strong>
                  <br />
                  Worked on modern UI development using Next.js, Tailwind CSS, and TypeScript.
                </li>
                <li>
                  <strong>AI Chatbot Developer – OpenAI Agents SDK</strong>
                  <br />
                  Building intelligent conversational systems and automation workflows.
                </li>
              </ul>
            </div>

            {/* Download CV Button */}
            <motion.a
              href="/Syeda_Abiha_Ahmed_FrontEnd_AI_CV.pdf"
              download
              className="inline-block mt-10 px-7 py-3 bg-green-500 text-gray-900 rounded-xl font-semibold shadow-lg hover:bg-green-400 hover:shadow-green-500/30 transition-transform transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              📄 Download CV
            </motion.a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
