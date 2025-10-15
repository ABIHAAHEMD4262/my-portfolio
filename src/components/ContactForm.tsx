"use client";
import { useState } from "react";
import { motion } from "framer-motion";

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

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="relative bg-gradient-to-br from-gray-900 via-gray-950 to-black border border-green-500/20 shadow-lg rounded-2xl p-8 md:p-10 w-full max-w-2xl mx-auto text-gray-300 space-y-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold text-green-400 text-center mb-6">
        Get in Touch
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
  );
}
