import "./globals.css";
import type { Metadata } from "next";
import ClientLayout from "@/components/ClientLayout";

export const metadata: Metadata = {
  title: {
    default: "Syeda Abiha Ahmed | AI/ML Engineer | Karachi Pakistan",
    template: "%s | Syeda Abiha Ahmed",
  },
  description:
    "Full-Stack AI/ML Engineer specializing in RAG chatbots, Next.js, FastAPI, and Kubernetes. Based in Karachi, Pakistan. Available for freelance projects.",
  keywords: [
    "AI engineer Pakistan",
    "RAG chatbot developer",
    "Next.js developer Karachi",
    "FastAPI developer",
    "Full stack AI developer",
    "freelance AI developer Pakistan",
    "Kubernetes developer",
    "machine learning engineer Pakistan",
    "Syeda Abiha Ahmed",
  ],
  authors: [{ name: "Syeda Abiha Ahmed", url: "https://abihacode.vercel.app" }],
  creator: "Syeda Abiha Ahmed",
  metadataBase: new URL("https://abihacode.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Syeda Abiha Ahmed | AI/ML Engineer | Karachi Pakistan",
    description:
      "Full-Stack AI/ML Engineer specializing in RAG chatbots, Next.js, FastAPI, and Kubernetes. Based in Karachi, Pakistan. Available for freelance projects.",
    url: "https://abihacode.vercel.app",
    siteName: "Syeda Abiha Ahmed Portfolio",
    images: [
      {
        url: "/images/pt.jpg",
        width: 1200,
        height: 630,
        alt: "Syeda Abiha Ahmed – Full-Stack AI/ML Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Syeda Abiha Ahmed | AI/ML Engineer | Karachi Pakistan",
    description:
      "Full-Stack AI/ML Engineer specializing in RAG chatbots, Next.js, FastAPI, and Kubernetes. Based in Karachi, Pakistan. Available for freelance projects.",
    images: ["/images/pt.jpg"],
    creator: "@abihaahmed",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
  themeColor: "#00ff9d",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://abihacode.vercel.app/#person",
      name: "Syeda Abiha Ahmed",
      jobTitle: "Full-Stack AI/ML Engineer",
      description:
        "Full-Stack AI/ML Engineer specializing in RAG chatbots, Next.js, FastAPI, and Kubernetes. Based in Karachi, Pakistan.",
      url: "https://abihacode.vercel.app",
      image: "https://abihacode.vercel.app/images/pt.jpg",
      email: "abihaahmed413@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Karachi",
        addressCountry: "Pakistan",
      },
      sameAs: [
        "https://github.com/ABIHAAHEMD4262",
        "https://www.linkedin.com/in/syeda-abiha-ahmed-9437152b5?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      ],
      knowsAbout: ["RAG Systems", "Next.js", "FastAPI", "Kubernetes", "OpenAI", "Python"],
    },
    {
      "@type": "WebSite",
      "@id": "https://abihacode.vercel.app/#website",
      name: "Syeda Abiha Ahmed Portfolio",
      url: "https://abihacode.vercel.app",
      author: { "@id": "https://abihacode.vercel.app/#person" },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://abihacode.vercel.app/projects?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://abihacodes-portfolio-chatbot.hf.space" />
        <link rel="dns-prefetch" href="https://abihacodes-portfolio-chatbot.hf.space" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <ClientLayout>{children}</ClientLayout>
    </html>
  );
}
