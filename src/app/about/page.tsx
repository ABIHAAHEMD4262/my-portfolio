import Image from "next/image";

export default function About() {
    return (
      <div className="min-h-screen py-16 px-4 md:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">About Me</h1>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <div className="aspect-square bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
                {/* Replace with your image */}
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                 <Image
                             src="/images/pictures.jpg" // ✅ This should be your uploaded image
                             alt="Abiha Ahmed"
                             width={240}
                             height={240}
                             className="rounded-lg object-cover shadow-xl ring-4"
                           />
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-2/3">
              <h2 className="text-2xl font-bold mb-4">Syeda Abiha Ahmed</h2>
              <h3 className="text-xl text-blue-600 dark:text-blue-400 mb-6">Frontend Web Developer</h3>
              
              <div className="prose dark:prose-invert max-w-none">
                <p>
                  Welcome to my portfolio! I am a passionate web developer with expertise in creating 
                  responsive, user-friendly websites and applications. I specialize in frontend 
                  development using modern technologies like React, Next.js, TypeScript, and Tailwind CSS.
                  For managing Content of website I am using Headless CMS like Sanity in E-commerce website and Blog websites. 
                </p>
                
                <p>
                  With a background in both design and development, I bring a unique perspective to 
                  projects, focusing on both aesthetics and functionality. I love solving complex 
                  problems and building intuitive user experiences.
                </p>
                
                <h4 className="text-xl font-semibold mt-8 mb-4">Education</h4>
                <ul>
                  <li><strong>Bachelor of Medicine</strong><br />Govt. Degree College for Women, North Nazimabad, Pakistan</li>
                </ul>
                
                <h4 className="text-xl font-semibold mt-8 mb-4">Experience</h4>
                <ul>
                  <li>
                    <strong>Web Developer at GIAIC</strong><br />
                    Febrauary 2024 - Present<br />
                    Responsible for developing and maintaining web applications using React, Next.js, and TypeScript.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  