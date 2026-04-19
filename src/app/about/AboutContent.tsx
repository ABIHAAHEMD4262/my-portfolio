"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, duration = 1500) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            setCount(Math.floor(progress * target));
            if (progress < 1) requestAnimationFrame(tick);
            else setCount(target);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref };
}

function StatCard({ value, suffix, label }: { value: number; suffix?: string; label: string }) {
  const { count, ref } = useCountUp(value);
  return (
    <div ref={ref} className="bg-gray-900/50 p-4 rounded-lg border border-green-500/20 text-center">
      <div className="text-3xl font-bold text-green-400">
        {count}{suffix}
      </div>
      <div className="text-sm text-gray-400">{label}</div>
    </div>
  );
}

export default function AboutContent() {
  return (
    <div className="min-h-screen py-16 px-4 md:px-8 max-w-6xl mx-auto bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 relative">
      <div className="absolute inset-0 bg-[radial-gradient(rgba(34,197,94,0.05)_1px,transparent_1px)] bg-[length:40px_40px] pointer-events-none"></div>

      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-12 text-center text-green-400 relative z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h1>

      <motion.div
        className="relative bg-gray-800/70 backdrop-blur-xl border border-green-500/20 rounded-2xl shadow-xl p-8 md:p-12 z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="flex flex-col gap-10 items-start">
          <div className="w-full space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-1 text-green-400">Syeda Abiha Ahmed</h2>
              <h3 className="text-xl text-green-300 mb-2">Full-Stack AI/ML Engineer</h3>
              <p className="text-gray-400 text-sm">🎂 18 years old | 📍 Karachi, Pakistan</p>
            </div>

            <motion.p
              className="text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              I'm a <strong className="text-green-400">Full-Stack AI/ML Engineer</strong> who builds
              production-grade systems that solve real business problems. With{" "}
              <strong className="text-green-400">4 completed hackathons</strong> by age 18,
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
              automation solutions.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
              <StatCard value={4} label="Hackathons" />
              <StatCard value={15} suffix="K+" label="Lines of Code" />
              <StatCard value={5} suffix="+" label="Projects Deployed" />
              <StatCard value={26} label="Technologies" />
            </div>

            <div>
              <h4 className="text-xl font-semibold mt-8 mb-3 text-green-400">🎓 Education</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>FSc Pre-Medical – Completed (2023–2025)</strong><br />
                  Govt. Degree College for Women, North Nazimabad, Karachi
                </li>
                <li>
                  <strong>Certified AI, Web 3.0 & Agentic Computing (In Progress)</strong><br />
                  Governor Initiative for AI & Computing (GIAIC)
                </li>
                <li>
                  <strong>B.Sc Cardiac Perfusion Technology (2026–Present)</strong><br />
                  Dow University of Health Sciences, DIMT, Karachi
                </li>
                <li>
                  <strong>Certified Agentic AI Architect Program (In Progress)</strong><br />
                  Panaversity — Learning OpenClaw, Claude Code, Claude Agent SDK
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold mt-8 mb-3 text-green-400">🚀 Experience & Projects</h4>
              <ul className="list-disc pl-5 space-y-3">
                <li>
                  <strong>Taskley - AI-Powered Task Management</strong><br />
                  <span className="text-gray-400 text-sm">Multi-phase evolution with Kubernetes deployment</span><br />
                  Built AI chatbot with NLP CRUD operations, FastAPI backend, PostgreSQL, Docker containerization, and Kubernetes autoscaling using OpenAI Agents SDK and MCP servers.
                </li>
                <li>
                  <strong>Humanoid Robotics Educational Platform</strong><br />
                  <span className="text-gray-400 text-sm">15,000+ lines of code | 45 commits</span><br />
                  Created comprehensive platform with RAG chatbot assistant using Qdrant vector database, Google Gemini embeddings, and FastAPI deployed on HuggingFace Spaces.
                </li>
                <li>
                  <strong>E-Commerce & Business Automation</strong><br />
                  <span className="text-gray-400 text-sm">Multiple production deployments</span><br />
                  Developed e-commerce platforms, admin dashboards, and automation systems using Next.js, TypeScript, Sanity CMS, and modern CI/CD pipelines.
                </li>
              </ul>
            </div>

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
