"use client";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <body className="transition-colors duration-300 bg-white text-black dark:bg-gray-900 dark:text-white">
      <Header toggleDark={() => setDarkMode((prev) => !prev)} />
      <Chatbot />
      {children}
      <Footer />
    </body>
  );
}
