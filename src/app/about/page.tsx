import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: { absolute: "About Syeda Abiha Ahmed | Full-Stack AI Developer Pakistan" },
  description:
    "Learn about Syeda Abiha Ahmed, a Full-Stack AI Developer from Karachi, Pakistan — RAG chatbots, FastAPI, Next.js, Kubernetes, and OpenAI expert.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Syeda Abiha Ahmed | Full-Stack AI Developer Pakistan",
    description:
      "Learn about Syeda Abiha Ahmed, a Full-Stack AI Developer from Karachi, Pakistan — RAG chatbots, FastAPI, Next.js, Kubernetes, and OpenAI expert.",
    url: "https://abihacode.vercel.app/about",
  },
  twitter: {
    title: "About Syeda Abiha Ahmed | Full-Stack AI Developer Pakistan",
    description:
      "Learn about Syeda Abiha Ahmed, a Full-Stack AI Developer from Karachi, Pakistan — RAG chatbots, FastAPI, Next.js, Kubernetes, and OpenAI expert.",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
