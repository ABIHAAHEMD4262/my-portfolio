import { Project} from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Website",
    description: "A fully responsive e-commerce website built with Next.js and integrated with a headless CMS for product management.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Sanity.io"],
    githubUrl: "https://github.com/ABIHAAHEMD4262/Hackathon_3-Template-1-.git",
    liveUrl: "https://hackathon-3-template-1.vercel.app/",
    imageUrl:"e-commerce.PNG",
    featured: true
  },
  {
    id: 2,
    title: "Admin Dashboard",
    description: "An interactive dashboard to visualize e-commerce online E-commerce bussiness with real-time data fetching.",
    technologies: ["React", "Next.js", "Sanity", "Tailwind CSS", "Typescript"],
    githubUrl: "https://github.com/ABIHAAHEMD4262/Admin-Dashboard.git",
    liveUrl: "https://admin-dashboard-roan-seven-25.vercel.app/",
    imageUrl:"admin d.PNG",
    featured: true
  },
  {
    id: 3,
    title: "Blog Website",
    description: "A social platform allowing users to share content, follow others, and engage through comments and likes.",
    technologies: ["Next.js", "TypeScript", "MongoDB", "Express", "Node.js"],
    githubUrl: "https://github.com/ABIHAAHEMD4262/Blog-Website.git",
    liveUrl: "https://blog-website-indol-eight.vercel.app/",
    imageUrl:"blog.PNG",
    featured: true
  },
  {
    id: 4,
    title: "Figma Design",
    description: "This is the UI of website.Frontend is build by Figma Design",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind.css", "Figma"],
    githubUrl: "https://github.com/ABIHAAHEMD4262/Assignment-6.git",
    liveUrl: "https://assignment-6-five-delta.vercel.app/",
    imageUrl:"figma.PNG",
    featured: false
  },
  {
    id: 5,
    title: "Password Strength Meter",
    description: "A weather forecasting app that provides real-time weather data and forecasts for locations worldwide.",
    technologies: ["Streamlit", "Python"],
    githubUrl: "https://github.com/ABIHAAHEMD4262/Password_Strength_Meter",
    liveUrl: "https://password-strength-meter-xvrupnehryx7mrbyrmswmy.streamlit.app/",
    imageUrl:"password.PNG",
    featured: false
  },
  {
    id: 6,
    title: "Unit convertor",
    description: "A simple and interactive unit conversion app built with Python and Streamlit.",
    technologies: ["Python", "Streamlit"],
    githubUrl: "https://github.com/ABIHAAHEMD4262/Unit_Convertor.git",
    liveUrl: "https://abihaahemd4262-unit-convertor-unit-convertor-jwkank.streamlit.app/",
    imageUrl:"unit.PNG",
    featured: false
  }
];
