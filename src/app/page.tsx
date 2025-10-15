"use client";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import SkillsSection from "@/components/SkillSection";
import Hero from "@/components/Hero";
import { projects } from "../../data/projects";
import { motion } from "framer-motion";
import AboutSection from "@/components/AboutMe";

export default function Home() {
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);

  return (
    <main className="min-h-screen bg-[#0f172a] text-white">

      <Hero />
     <AboutSection/>
      {/* 🌌 Featured Projects Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        {/* Animated Background Lines */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(163,255,26,0.1)_0%,transparent_70%)] z-0"></div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(163,255,26,0.1)_1px,transparent_1px),linear-gradient(rgba(163,255,26,0.1)_1px,transparent_1px)] bg-[size:40px_40px] opacity-10"></div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-[#a3ff1a] to-[#72d60f] text-transparent bg-clip-text"
          >
            Featured Projects
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-gray-400 max-w-2xl mx-auto mb-16"
          >
            A showcase of my best work, where I combined creativity with precision — blending code, design, and innovation.
          </motion.p>

          {/* Projects Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.2 },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {featuredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>

          {/* View All Projects Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-16"
          >
            <Link
              href="/projects"
              className="relative inline-block px-8 py-3 font-semibold rounded-full bg-gradient-to-r from-[#a3ff1a] to-[#72d60f] text-black transition-all hover:shadow-[0_0_20px_#a3ff1a]"
            >
              View All Projects
            </Link>
          </motion.div>
        </div>
      </section>

      <SkillsSection />
    </main>
  );
}
