import Header from '../components/Header';
import Footer from '../components/Footer';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next/dist/lib/metadata/types/metadata-interface';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });


export const metadata: Metadata = {
  title: 'AbihaCodes - Web Developer & UI/UX Designer',
  description: 'Portfolio website showcasing web development and design work using Next.js, TypeScript, and Tailwind CSS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white`}>
        <Header/>
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}