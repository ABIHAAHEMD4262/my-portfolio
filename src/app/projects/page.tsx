import type { Metadata } from "next";
import ProjectsContent from "./ProjectsContent";

export const metadata: Metadata = {
  title: { absolute: "Projects | RAG Chatbots, Next.js Apps | Syeda Abiha Ahmed" },
  description:
    "Explore AI/ML projects by Syeda Abiha Ahmed — RAG chatbots, Next.js apps, FastAPI backends, and Kubernetes deployments from Karachi, Pakistan.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects | RAG Chatbots, Next.js Apps | Syeda Abiha Ahmed",
    description:
      "Explore AI/ML projects by Syeda Abiha Ahmed — RAG chatbots, Next.js apps, FastAPI backends, and Kubernetes deployments from Karachi, Pakistan.",
    url: "https://abihacode.vercel.app/projects",
  },
  twitter: {
    title: "Projects | RAG Chatbots, Next.js Apps | Syeda Abiha Ahmed",
    description:
      "Explore AI/ML projects by Syeda Abiha Ahmed — RAG chatbots, Next.js apps, FastAPI backends, and Kubernetes deployments from Karachi, Pakistan.",
  },
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}
