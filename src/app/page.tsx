import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import SkillsSection from '@/components/SkillSection';
import { projects } from '../../data/projects';
import Link from 'next/link';

export default function Home() {
  // Showing only featured projects on homepage
  const featuredProjects = projects.filter(project => project.featured).slice(0, 3);
  
  return (
    <main className="min-h-screen">
      <Hero />
      
      {/* Featured Projects Section */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Check out some of my recent work that showcases my skills in web development and design.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            href="/projects" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 border border-transparent rounded-md font-semibold text-white hover:bg-blue-700 transition duration-150 ease-in-out"
          >
            View All Projects
          </Link>
        </div>
      </section>
      
      <SkillsSection />
    </main>
  );
}
