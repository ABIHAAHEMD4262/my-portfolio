"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-10 border-t border-green-500/20">
      {/* Animated background lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(transparent_95%,rgba(34,197,94,0.1)_100%)] bg-[length:100%_40px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0">
        
        {/* Left Section */}
        <motion.p 
          className="text-gray-400 text-sm"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          © {new Date().getFullYear()} <span className="text-green-400 font-semibold">AbihaCodes</span>. All rights reserved.
        </motion.p>

        {/* Social Icons */}
        <div className="flex space-x-6">
          <motion.div
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Link
              href="https://www.linkedin.com/in/abiha-ahmed-9437152b5/"
              target="_blank"
              className="text-gray-400 hover:text-green-400 transition-colors"
            >
              <FaLinkedin className="w-6 h-6" />
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Link
              href="https://github.com/ABIHAAHEMD4262"
              target="_blank"
              className="text-gray-400 hover:text-green-400 transition-colors"
            >
              <FaGithub className="w-6 h-6" />
            </Link>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
