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
} from "react-icons/si";
import { FaMobileAlt, FaPalette } from "react-icons/fa";
import { motion } from "framer-motion";
import { RiFlowChart } from "react-icons/ri"; // for n8n
import { GiArtificialIntelligence } from "react-icons/gi"; // for Agents SDK
import { JSX } from "react";
import { BsRobot } from "react-icons/bs";


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
    "OpenAI Agents SDK": <GiArtificialIntelligence className="text-[#a3ff1a]" />,
    "N8n": <RiFlowChart className="text-[#ff6b00]" />,
    "Prompt Engineering": <BsRobot className="text-[#a3ff1a]" />,

  };

  // Skills data
  const skills = [
    {
      category: "Frontend Development",
      technologies: [
        "Next.js",
        "TypeScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
      ],
    },
    {
      category: "AI & Automation",
      technologies: ["OpenAI Agents SDK", "N8n","Python","Prompt Engineering"],
    },
    {
      category: "Design & Tools",
      technologies: ["Figma", "Responsive Design", "UI/UX", "Git", "GitHub"],
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
          className="text-gray-400 max-w-2xl mx-auto mb-16"
        >
          The technologies and tools I use to build powerful, modern, and intelligent application.
        </motion.p>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <ul className="space-y-4">
                {group.technologies.map((tech, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <span className="text-2xl">{iconMap[tech]}</span>
                    <span className="text-gray-300 hover:text-white transition">
                      {tech}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
