"use client"
import { Project } from "../../types";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      className="relative group bg-gray-800/60 border border-green-500/20 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:border-green-400/40 hover:shadow-green-500/30 hover:shadow-2xl"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Image Section */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={`/images/${project.imageUrl}`}
          alt={`${project.title} preview`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-80"></div>
      </div>

      {/* Project Info */}
      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-bold text-green-400 group-hover:text-green-300 transition-colors duration-300">
          {project.title}
        </h3>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium bg-green-500/10 text-green-300 border border-green-400/20 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <p className="text-gray-300 leading-relaxed text-sm md:text-base">
          {project.description}
        </p>

        {/* Buttons */}
        <div className="flex space-x-4 mt-4">
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-gray-900 text-green-400 border border-green-500/30 hover:bg-green-500 hover:text-gray-900 transition-all duration-300"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.48 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.84 9.504.5.092.68-.217.68-.483 0-.237-.008-.868-.013-1.703-2.78.605-3.37-1.343-3.37-1.343-.45-1.158-1.11-1.466-1.11-1.466-.91-.62.07-.608.07-.608 1 .07 1.53 1.032 1.53 1.032.89 1.53 2.34 1.088 2.91.832.09-.647.35-1.088.63-1.338-2.22-.253-4.55-1.113-4.55-4.951 0-1.093.39-1.988 1.03-2.688-.1-.253-.45-1.272.1-2.65 0 0 .84-.27 2.75 1.026A9.56 9.56 0 0112 6.844c.85.004 1.7.115 2.5.337 1.91-1.296 2.75-1.027 2.75-1.027.54 1.379.2 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.34 4.695-4.57 4.943.36.309.68.92.68 1.855 0 1.338-.01 2.419-.01 2.747 0 .268.18.58.68.482A10.02 10.02 0 0022 12.017C22 6.484 17.52 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              GitHub
            </Link>
          )}

          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-green-500 text-gray-900 hover:bg-green-400 transition-all duration-300"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              Live Demo
            </Link>
          )}
        </div>
      </div>

      {/* Glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-t from-green-500/10 to-transparent pointer-events-none"></div>
    </motion.div>
  );
}
