import {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiHtml5,
    SiCss3,
    SiTailwindcss,
    SiFigma,
    SiGit,
    SiGithub,
  } from "react-icons/si";
  import { FaLaptopCode, FaMobileAlt, FaPalette } from "react-icons/fa";
  import { FaPython } from "react-icons/fa6";
  import { SiStreamlit } from "react-icons/si";
import { JSX } from "react";
  
  export default function SkillsSection() {
    // Icon map for each technology
    const iconMap: { [key: string]: JSX.Element } = {
      "React": <SiReact className="text-blue-500" />,
      "Next.js": <SiNextdotjs className="text-black dark:text-white" />,
      "TypeScript": <SiTypescript className="text-blue-700" />,
      "HTML5": <SiHtml5 className="text-orange-600" />,
      "CSS3": <SiCss3 className="text-blue-500" />,
      "Tailwind CSS": <SiTailwindcss className="text-teal-400" />,
      "Figma": <SiFigma className="text-pink-500" />,
      "Git": <SiGit className="text-orange-500" />,
      "GitHub": <SiGithub className="text-gray-800 dark:text-gray-200" />,
      "Responsive Design": <FaMobileAlt className="text-purple-500" />,
      "UI/UX": <FaPalette className="text-pink-400" />,
      "Python":<FaPython/>,
      "Streamlit":<SiStreamlit/>
    };
  
    // Skills data
    const skills = [
      {
        category: "Frontend Development",
        technologies: ["React", "Next.js", "TypeScript", "HTML5", "CSS3", "Tailwind CSS","Python"],
      },
      {
        category: "Design & Tools",
        technologies: ["Figma", "Responsive Design", "UI/UX", "Git", "GitHub", "VS Code","Streamlit"],
      },
    ];
  
    return (
      <section className="py-16 px-4 md:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              These are the technologies and tools I specialize in to build modern, responsive web applications.
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">{skillGroup.category}</h3>
                <ul className="space-y-2">
                  {skillGroup.technologies.map((tech, techIndex) => (
                    <li key={techIndex} className="flex items-center space-x-2">
                      <span className="text-xl">{iconMap[tech] ?? <FaLaptopCode className="text-gray-500" />}</span>
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  