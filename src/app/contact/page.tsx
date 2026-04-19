import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: { absolute: "Contact Syeda Abiha Ahmed | Hire AI Developer Pakistan" },
  description:
    "Hire Syeda Abiha Ahmed, an AI Developer from Karachi, Pakistan. Available for RAG chatbots, Next.js, FastAPI freelance projects and collaboration.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Syeda Abiha Ahmed | Hire AI Developer Pakistan",
    description:
      "Hire Syeda Abiha Ahmed, an AI Developer from Karachi, Pakistan. Available for RAG chatbots, Next.js, FastAPI freelance projects and collaboration.",
    url: "https://abihacode.vercel.app/contact",
  },
  twitter: {
    title: "Contact Syeda Abiha Ahmed | Hire AI Developer Pakistan",
    description:
      "Hire Syeda Abiha Ahmed, an AI Developer from Karachi, Pakistan. Available for RAG chatbots, Next.js, FastAPI freelance projects and collaboration.",
  },
};

export default function Contact() {
  return (
    <main className="max-w-3xl mx-auto py-16 px-4">
      <ContactForm />
    </main>
  );
}
