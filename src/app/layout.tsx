'use client';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState, useEffect } from 'react';
import Chatbot from '@/components/Chatbot';


export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <html lang="en">
      <head>
        <title>Syeda Abiha Ahmed | Full-Stack AI/ML Engineer | Karachi, Pakistan</title>
        <meta name="description" content="Full-Stack AI/ML Engineer specializing in production-grade AI systems, Kubernetes deployments, and RAG chatbots. 4 hackathons completed, 15,000+ lines of code. Building Next.js, FastAPI, and cloud-native applications." />
        <meta name="keywords" content="AI Engineer, Full-Stack Developer, Machine Learning, Kubernetes, RAG Chatbots, FastAPI, Next.js, TypeScript, Python, Karachi Developer, AI Automation, Cloud-Native, Vector Databases, Qdrant" />
        <meta name="author" content="Syeda Abiha Ahmed" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Syeda Abiha Ahmed - Full-Stack AI/ML Engineer" />
        <meta property="og:description" content="Building production-grade AI systems with Next.js, FastAPI, and Kubernetes. Specialized in RAG chatbots and cloud-native architectures." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://abihacode.vercel.app" />
        <meta property="og:image" content="https://abihacode.vercel.app/images/pt.jpg" />
        <meta property="og:site_name" content="Syeda Abiha Ahmed Portfolio" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Syeda Abiha Ahmed - Full-Stack AI/ML Engineer" />
        <meta name="twitter:description" content="Building production-grade AI systems with Next.js, FastAPI, and Kubernetes. 4 hackathons, 15K+ lines of code." />
        <meta name="twitter:image" content="https://abihacode.vercel.app/images/pt.jpg" />
        <meta name="twitter:creator" content="@abihaahmed" />

        {/* Additional SEO */}
        <meta name="theme-color" content="#00ff9d" />
        <link rel="canonical" href="https://abihacode.vercel.app" />
        <link rel="icon" href="/favicon.ico" />

        {/* Structured Data - JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Syeda Abiha Ahmed",
            "jobTitle": "Full-Stack AI/ML Engineer",
            "description": "Full-Stack AI/ML Engineer specializing in production-grade AI systems, Kubernetes, and RAG chatbots",
            "url": "https://abihacode.vercel.app",
            "image": "https://abihacode.vercel.app/images/pt.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Karachi",
              "addressCountry": "Pakistan"
            },
            "email": "abihaahmed413@gmail.com",
            "sameAs": [
              "https://github.com/ABIHAAHEMD4262",
              "https://www.linkedin.com/in/syeda-abiha-ahmed-9437152b5/"
            ],
            "knowsAbout": [
              "Artificial Intelligence",
              "Machine Learning",
              "Full-Stack Development",
              "Kubernetes",
              "RAG Systems",
              "Next.js",
              "FastAPI",
              "Python",
              "TypeScript"
            ]
          })}
        </script>
      </head>
      <body className="transition-colors duration-300 bg-white text-black dark:bg-gray-900 dark:text-white">
        <Header toggleDark={() => setDarkMode((prev) => !prev)} />
        <Chatbot/>
        {children}
        <Footer />

      </body>
    </html>
  );
}
