import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'ZCRUM-Jira Clone',
      description: 'A full-stack jira-clone with Next.js, Clerk, and NeonDB',
      image: '/zcrum-jira-clone.png',
      technologies: ['Next.js','ShadcnUI','Tailwind', 'Clerk', 'NeonDB'],
      github: 'https://github.com/Haripriyaveluru/JiraClone',
      live: 'https://zcrum-jira-red.vercel.app/',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management tool with real-time updates and Analysis',
      image: '/Task-alter-office.png',
      technologies: ['React.js', 'TypeScript', 'Firebase Authentication', 'FirebaseDB'],
      github: 'https://github.com/Haripriyaveluru/Task-Authorization-TheAlterOffice',
      live: 'https://task-auth-management.web.app/',
    },
    {
      title: 'Printing Service- E-commerce',
      description: "A Shopping Cart using React's Context API and useReducer",
      image: '/printing-order.png',
      technologies: ['React', 'useReducer Hook', 'Context API'],
      github: 'https://github.com/Haripriyaveluru/Printing-Order',
      
    },
    {
      title: 'Vector-shift-pro',
      description: 'A workflow automation tool with pipelines and nodes for data management',
      image: '/vector-shift-pro.png',
      technologies: ['React', 'Python', 'FastAPI'],
      github: 'https://github.com/Haripriyaveluru/vector-shift',
      
    },
    {
      title: 'Vision Board',
      description: 'An React-Native app to create and manage vision boards',
      image: '/vision-board.webp',
      technologies: ['React Native', 'TypeScript'],
      github: 'https://github.com/Haripriyaveluru/VisionBoard-ToDoList/',
      
    },
    {
      title: 'Tic - Tac - Toe',
      description: 'A simple and interactive Tic-Tac-Toe game built with React that allows two players to compete in a classic 3x3 grid.',
      image: '/tic-tac-toe.png',
      technologies: ['React', 'Bootstrap'],
      github: 'https://github.com/Haripriyaveluru/tictactoe/',
      
    },
   
    
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`hidden-${index % 2 === 0 ? 'left' : 'right'} project-card bg-white/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden`}
            >
              <div className="relative overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white text-gray-900 rounded-full hover:bg-gray-100 transform hover:scale-110 transition-all duration-300"
                    >
                      <Github size={20} />
                    </a>
                    {project.live &&
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white text-gray-900 rounded-full hover:bg-gray-100 transform hover:scale-110 transition-all duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    }
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm transform hover:scale-105 transition-transform duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects