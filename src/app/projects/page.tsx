"use client";
import { motion } from "framer-motion";
import ProjectCard from "../../components/ProjectCard";
import { projects } from "../../../data/projects";

export default function Projects() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black py-20 px-6 md:px-10 overflow-hidden">
      {/* Animated background glow */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.3)_0%,transparent_70%)] blur-3xl"></div>

      <motion.div
        className="relative max-w-7xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-green-400 mb-6">
          My Projects
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed text-lg">
          Browse through my portfolio of web development and design projects.
          Each project showcases different aspects of my skills and expertise.
        </p>
      </motion.div>

    

      {/* Projects Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </div>
  );
}
