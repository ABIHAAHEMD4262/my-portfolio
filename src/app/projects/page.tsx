import ProjectCard from '../../components/ProjectCard';
import { projects } from '../../../data/projects';

export default function Projects() {
  return (
    <div className="min-h-screen py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold mb-8">My Projects</h1>
      
      <div className="mb-12">
        <p className="text-gray-600 dark:text-gray-300 max-w-3xl">
          Browse through my portfolio of web development and design projects. Each project showcases 
          different aspects of my skills and expertise.
        </p>
      </div>
      
      {/* Project Filters - Can be enhanced with client components for actual filtering */}
      <div className="flex flex-wrap gap-3 mb-12">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md">Frontend Projects</button>
       
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
