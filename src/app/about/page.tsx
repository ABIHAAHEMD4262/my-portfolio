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
              <h3 className="text-xl text-green-300 mb-2">
                Full-Stack AI/ML Engineer
              </h3>
              <p className="text-gray-400 text-sm">
                📍 Karachi, Pakistan | 🎂 Turning 18 on Feb 21, 2026
              </p>
            </div>

            <motion.p
              className="text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              I'm a <strong className="text-green-400">Full-Stack AI/ML Engineer</strong> who builds
              production-grade systems that solve real business problems. With{" "}
              <strong className="text-green-400">4 completed hackathons</strong> before turning 18,
              I specialize in deploying AI applications on{" "}
              <strong className="text-green-400">Kubernetes</strong>, building{" "}
              <strong className="text-green-400">RAG chatbots</strong> with vector databases, and
              creating full-stack applications with{" "}
              <strong className="text-green-400">Next.js 16, TypeScript, and FastAPI</strong>.
            </motion.p>

            <p className="text-gray-300 leading-relaxed">
              I've deployed systems on{" "}
              <strong className="text-green-400">HuggingFace Spaces</strong>,{" "}
              <strong className="text-green-400">Vercel</strong>, and{" "}
              <strong className="text-green-400">Kubernetes clusters</strong> with autoscaling.
              My projects include an AI-powered task management system with NLP CRUD operations,
              an educational platform with a RAG chatbot (15,000+ lines of code), and e-commerce
              automation solutions. I transform complex problems into elegant, scalable solutions
              using modern cloud-native architectures.
            </p>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
              <div className="bg-gray-900/50 p-4 rounded-lg border border-green-500/20 text-center">
                <div className="text-3xl font-bold text-green-400">4</div>
                <div className="text-sm text-gray-400">Hackathons</div>
              </div>
              <div className="bg-gray-900/50 p-4 rounded-lg border border-green-500/20 text-center">
                <div className="text-3xl font-bold text-green-400">15K+</div>
                <div className="text-sm text-gray-400">Lines of Code</div>
              </div>
              <div className="bg-gray-900/50 p-4 rounded-lg border border-green-500/20 text-center">
                <div className="text-3xl font-bold text-green-400">5+</div>
                <div className="text-sm text-gray-400">Projects Deployed</div>
              </div>
              <div className="bg-gray-900/50 p-4 rounded-lg border border-green-500/20 text-center">
                <div className="text-3xl font-bold text-green-400">26</div>
                <div className="text-sm text-gray-400">Technologies</div>
              </div>
            </div>

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
                🚀 Experience & Projects
              </h4>
              <ul className="list-disc pl-5 space-y-3">
                <li>
                  <strong>Taskley - AI-Powered Task Management</strong>
                  <br />
                  <span className="text-gray-400 text-sm">Multi-phase evolution with Kubernetes deployment</span>
                  <br />
                  Built AI chatbot with NLP CRUD operations, FastAPI backend, PostgreSQL, Docker containerization, and Kubernetes autoscaling using OpenAI Agents SDK and MCP servers.
                </li>
                <li>
                  <strong>Humanoid Robotics Educational Platform</strong>
                  <br />
                  <span className="text-gray-400 text-sm">15,000+ lines of code | 45 commits</span>
                  <br />
                  Created comprehensive platform with RAG chatbot assistant using Qdrant vector database, Google Gemini embeddings, and FastAPI deployed on HuggingFace Spaces.
                </li>
                <li>
                  <strong>E-Commerce & Business Automation</strong>
                  <br />
                  <span className="text-gray-400 text-sm">Multiple production deployments</span>
                  <br />
                  Developed e-commerce platforms, admin dashboards, and automation systems using Next.js, TypeScript, Sanity CMS, and modern CI/CD pipelines.
                </li>
              </ul>
            </div>

            {/* Download CV Button */}
            <motion.a
              href="/Resume.pdf"
              download="Syeda_Abiha_Ahmed_FullStack_AI_ML_Resume.pdf"
              className="inline-block mt-10 px-7 py-3 bg-green-500 text-gray-900 rounded-xl font-semibold shadow-lg hover:bg-green-400 hover:shadow-green-500/30 transition-transform transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              📄 Download Resume
            </motion.a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
