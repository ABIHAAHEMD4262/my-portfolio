import Header from '../components/Header';
import Footer from '../components/Footer';
import { Lilita_One } from 'next/font/google';
import type { Metadata } from 'next/dist/lib/metadata/types/metadata-interface';
import './globals.css';

const lilita = Lilita_One({subsets:["latin"],weight:"400"});


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
      <body className={`${lilita.className} flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white`}>
        <Header/>
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}