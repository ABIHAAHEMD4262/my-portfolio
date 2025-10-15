"use client";
import Link from "next/link";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Header({ toggleDark }: { toggleDark: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 mb-20 ${
        scrolled
          ? "backdrop-blur-lg bg-[#0f172a]/80 border-b border-[#00ff9d40] shadow-[0_0_15px_#00ff9d40]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* ✅ Logo */}
        <Link href={"/"}>
          <h1 className="text-2xl font-extrabold text-[#00ff9d] tracking-wide hover:scale-105 transition-transform">
            Abiha<span className="text-[#00f0ff]">Codes</span>
          </h1>
        </Link>

        {/* ✅ Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-white font-medium">
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/projects", label: "Projects" },
            { href: "/contact", label: "Contact" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="relative group transition-all duration-300"
            >
              <span className="group-hover:text-[#00ff9d] transition-all duration-300">
                {label}
              </span>
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#00f0ff] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={toggleDark}
            className="text-xl text-[#00ff9d] hover:text-[#00f0ff] transition-all duration-300"
            aria-label="Dark Mode Toggle"
          >
            <FaMoon className="dark:hidden" />
            <FaSun className="hidden dark:inline" />
          </button>
        </nav>

        {/* ✅ Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl text-[#00ff9d] md:hidden focus:outline-none"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* ✅ Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0f172a]/95 backdrop-blur-xl border-t border-[#00ff9d40] shadow-[0_0_25px_#00ff9d40]">
          <nav className="flex flex-col items-center gap-6 py-6 text-white font-medium">
            {[
              { href: "/", label: "Home" },
              { href: "/About", label: "About" },
              { href: "/Projects", label: "Projects" },
              { href: "/Contact", label: "Contact" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="relative group transition-all duration-300 text-lg"
              >
                <span className="group-hover:text-[#00ff9d] transition-all duration-300">
                  {label}
                </span>
                <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#00f0ff] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}

            {/* Theme Toggle (Mobile) */}
            <button
              onClick={toggleDark}
              className="text-xl text-[#00ff9d] hover:text-[#00f0ff] transition-all duration-300"
              aria-label="Dark Mode Toggle"
            >
              <FaMoon className="dark:hidden" />
              <FaSun className="hidden dark:inline" />
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
