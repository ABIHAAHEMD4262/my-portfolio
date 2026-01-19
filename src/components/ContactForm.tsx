"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const formData = Object.fromEntries(new FormData(e.currentTarget));
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus("sent");
      e.currentTarget.reset();
    } else {
      setStatus("error");
    }
  }

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/ABIHAAHEMD4262", label: "GitHub" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/syeda-abiha-ahmed-9437152b5/", label: "LinkedIn" },
    { icon: FaEnvelope, href: "mailto:abihaahmed413@gmail.com", label: "Email" },
 
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Header */}
      <motion.div
        className="text-center space-y-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold text-green-400">Let's Work Together</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Have a project in mind or want to discuss AI automation for your business?
          I'm available for freelance projects starting February 2026.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="relative bg-gradient-to-br from-gray-900 via-gray-950 to-black border border-green-500/20 shadow-lg rounded-2xl p-8 text-gray-300 space-y-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-green-400 mb-6">
            Send a Message
          </h2>

      <input
        name="name"
        required
        placeholder="Your Name"
        className="w-full px-4 py-3 bg-gray-800 text-gray-200 rounded-lg border border-green-500/30 focus:border-green-400 focus:ring-2 focus:ring-green-500/50 outline-none transition-all"
      />

      <input
        name="email"
        type="email"
        required
        placeholder="Your Email"
        className="w-full px-4 py-3 bg-gray-800 text-gray-200 rounded-lg border border-green-500/30 focus:border-green-400 focus:ring-2 focus:ring-green-500/50 outline-none transition-all"
      />

      <textarea
        name="message"
        required
        rows={5}
        placeholder="Your Message"
        className="w-full px-4 py-3 bg-gray-800 text-gray-200 rounded-lg border border-green-500/30 focus:border-green-400 focus:ring-2 focus:ring-green-500/50 outline-none transition-all resize-none"
      ></textarea>

      <motion.button
        type="submit"
        disabled={status === "sending"}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full py-3 bg-green-500 text-black font-semibold rounded-lg shadow-md hover:bg-green-400 transition-colors duration-300 disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </motion.button>

          {status === "sent" && (
            <p className="text-green-400 text-center font-medium">✅ Message sent successfully!</p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-center font-medium">❌ Failed to send message. Try again.</p>
          )}
        </motion.form>

        {/* Info & Social Links */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Quick Info */}
          <div className="bg-gradient-to-br from-gray-900 via-gray-950 to-black border border-green-500/20 rounded-2xl p-8 space-y-6">
            <h3 className="text-2xl font-bold text-green-400">Quick Info</h3>

            <div className="space-y-4">
              <div>
                <h4 className="text-sm text-gray-400 mb-1">Location</h4>
                <p className="text-gray-200">📍 Karachi, Pakistan</p>
              </div>

              <div>
                <h4 className="text-sm text-gray-400 mb-1">Availability</h4>
                <p className="text-gray-200">🟢 Available from Feb 21, 2026</p>
              </div>

              <div>
                <h4 className="text-sm text-gray-400 mb-1">Response Time</h4>
                <p className="text-gray-200">⚡ Usually within 24 hours</p>
              </div>

              <div>
                <h4 className="text-sm text-gray-400 mb-1">Services</h4>
                <ul className="text-gray-200 space-y-1 text-sm">
                  <li>• AI-Powered Applications</li>
                  <li>• Full-Stack Development</li>
                  <li>• E-Commerce Automation</li>
                  <li>• Cloud-Native Deployment</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-gradient-to-br from-gray-900 via-gray-950 to-black border border-green-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-green-400 mb-6">Connect With Me</h3>
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 p-4 bg-gray-800/50 rounded-lg border border-green-500/20 hover:border-green-400/50 hover:bg-gray-800 transition-all group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="text-2xl text-green-400 group-hover:text-green-300 transition-colors" />
                  <span className="text-gray-200 group-hover:text-white transition-colors">{social.label}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-green-500/10 via-gray-950 to-black border border-green-500/30 rounded-2xl p-8 text-center">
            <p className="text-gray-300 mb-4">
              Looking for AI automation for your business?
            </p>
            <p className="text-green-400 font-semibold text-lg">
              Let's build something amazing together! 🚀
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
