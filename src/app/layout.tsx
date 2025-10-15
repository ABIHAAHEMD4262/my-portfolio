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
      <body className="transition-colors duration-300 bg-white text-black dark:bg-gray-900 dark:text-white">
        <Header toggleDark={() => setDarkMode((prev) => !prev)} />
        <Chatbot/>
        {children}
        <Footer />
   
      </body>
    </html>
  );
}
