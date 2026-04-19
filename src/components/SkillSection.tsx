"use client";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiFigma,
  SiGit,
  SiGithub,
  SiPython,
  SiFastapi,
  SiPostgresql,
  SiDocker,
  SiKubernetes,
  SiVercel,
  SiOpenai,
  SiNodedotjs,
} from "react-icons/si";
import { FaMobileAlt, FaPalette, FaDatabase, FaCloud } from "react-icons/fa";
import { motion } from "framer-motion";
import { RiFlowChart } from "react-icons/ri"; // for n8n
import { GiArtificialIntelligence } from "react-icons/gi"; // for Agents SDK
import { JSX } from "react";
import { BsRobot } from "react-icons/bs";
import { TbBrandGoogleBigQuery } from "react-icons/tb"; // for Gemini
import { SiGooglegemini } from "react-icons/si";


export default function SkillsSection() {
  // Icon map for each technology
  const iconMap: { [key: string]: JSX.Element } = {
    React: <SiReact className="text-[#61dafb]" />,
    "Next.js": <SiNextdotjs className="text-white" />,
    TypeScript: <SiTypescript className="text-[#3178c6]" />,
    HTML5: <SiHtml5 className="text-[#e34f26]" />,
    CSS3: <SiCss3 className="text-[#264de4]" />,
    "Tailwind CSS": <SiTailwindcss className="text-[#38bdf8]" />,
    Figma: <SiFigma className="text-[#f24e1e]" />,
    Git: <SiGit className="text-[#f1502f]" />,
    GitHub: <SiGithub className="text-gray-200" />,
    "Responsive Design": <FaMobileAlt className="text-[#a3ff1a]" />,
    "UI/UX": <FaPalette className="text-pink-400" />,
    Python: <SiPython className="text-[#f7cb3f]" />,
    "FastAPI": <SiFastapi className="text-[#009688]" />,
    "Node.js": <SiNodedotjs className="text-[#339933]" />,
    "PostgreSQL": <SiPostgresql className="text-[#336791]" />,
    "Neon": <FaDatabase className="text-[#a3ff1a]" />,
    "SQLModel": <FaDatabase className="text-[#009688]" />,
    "OpenAI Agents SDK": <SiOpenai className="text-[#a3ff1a]" />,
    "RAG Systems": <GiArtificialIntelligence className="text-[#a3ff1a]" />,
    "Qdrant": <FaDatabase className="text-purple-400" />,
    "Google Gemini": <SiGooglegemini className="text-blue-400" />,
    "MCP Servers": <BsRobot className="text-[#a3ff1a]" />,
    
    "Docker": <SiDocker className="text-[#2496ED]" />,
    "Kubernetes": <SiKubernetes className="text-[#326CE5]" />,
    "Vercel": <SiVercel className="text-white" />,
    "HuggingFace": <FaCloud className="text-yellow-400" />,
    "CI/CD": <GiArtificialIntelligence className="text-green-400" />,
  };

  // Skills data
  const skills = [
    {
      category: "Frontend Development",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "HTML5",
        "CSS3",
      ],
    },
    {
      category: "Backend Development",
      technologies: [
        "FastAPI",
        "Python",
        "Node.js",
        "PostgreSQL",
        "Neon",
        "SQLModel",
      ],
    },
    {
      category: "AI/ML Integration",
      technologies: [
        "OpenAI Agents SDK",
        "RAG Systems",
        "Qdrant",
        "Google Gemini",
        "MCP Servers",
        "OpenAI API",
        "API Integration"
      ],
    },
    {
      category: "Cloud & DevOps",
      technologies: [
        "Docker",
        "Kubernetes",
        "Vercel",
        "HuggingFace",
        "CI/CD",
        "Git",
      ],
    },
    {
      category: "Design & Tools",
      technologies: ["Figma", "Responsive Design", "UI/UX", "GitHub"],
    },
  ];

  return (
    <section className="relative py-24 px-6 bg-[#0f172a] text-white overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(163,255,26,0.05)_0%,transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(163,255,26,0.1)_1px,transparent_1px),linear-gradient(rgba(163,255,26,0.1)_1px,transparent_1px)] bg-[size:40px_40px] opacity-10"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-[#a3ff1a] to-[#72d60f] text-transparent bg-clip-text"
        >
          Skills & Expertise
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-gray-300 max-w-2xl mx-auto mb-16"
        >
          The technologies and tools I use to build powerful, modern, and intelligent application.
        </motion.p>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {skills.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="relative group bg-[#141e36]/60 backdrop-blur-md rounded-2xl border border-[#1f2937] hover:border-[#a3ff1a]/40 transition-all duration-300 p-8 shadow-[0_0_10px_rgba(163,255,26,0.05)] hover:shadow-[0_0_25px_rgba(163,255,26,0.2)]"
            >
              <h3 className="text-2xl font-semibold mb-6 text-[#a3ff1a]">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="flex items-center gap-2 bg-gray-900 border border-gray-700 hover:border-[#a3ff1a]/50 hover:bg-gray-800 text-gray-200 hover:text-white text-sm font-medium px-3 py-1.5 rounded-full transition-all duration-200"
                  >
                    {iconMap[tech] && (
                      <span className="text-base leading-none">{iconMap[tech]}</span>
                    )}
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
