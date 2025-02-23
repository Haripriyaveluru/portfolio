import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-500 to-purple-600"></div>
      
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white mb-6 animate-fade-in">
              👋 Welcome to my portfolio
            </span>
            <h1 className="text-5xl font-bold mb-4 text-white animate-fade-in">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-400">Haripriya V R</span>
            </h1>
            <h2 className="text-2xl text-white/90 mb-6 animate-slide-up">
              Full Stack Developer
            </h2>
            <p className="text-white/80 mb-8 text-lg animate-slide-up delay-200 max-w-lg">
              I build exceptional digital experiences that make a difference. Transforming ideas into elegant solutions.
            </p>
            <div className="flex space-x-4 mb-8 animate-slide-up delay-300">
              <a href="https://github.com/Haripriyaveluru" target="_blank" rel="noopener noreferrer" 
                 className="p-2 bg-white/10 backdrop-blur-sm text-white rounded-full hover:bg-white/20 transform hover:scale-110 transition-all duration-300">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/haripriyaveluru2582b221a/" target="_blank" rel="noopener noreferrer"
                 className="p-2 bg-white/10 backdrop-blur-sm text-white rounded-full hover:bg-white/20 transform hover:scale-110 transition-all duration-300">
                <Linkedin size={24} />
              </a>
              <a href="mailto:velururharipriya.com"
                 className="p-2 bg-white/10 backdrop-blur-sm text-white rounded-full hover:bg-white/20 transform hover:scale-110 transition-all duration-300">
                <Mail size={24} />
              </a>
            </div>
            <div className="flex flex-wrap gap-4 animate-slide-up delay-400">
              <a
                href="/V R Haripriya Web Developer Resume.pdf"
                download
                className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transform hover:translate-y-[-2px] transition-all duration-300"
              >
                <Download size={20} className="mr-2" />
                Download Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-lg hover:bg-white/20 transform hover:translate-y-[-2px] transition-all duration-300"
              >
                Let's Talk
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center animate-fade-in delay-500">
            <div className="relative transform hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-2xl opacity-50"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-sm animate-border-pulse">
                <img
                  src="/portfolio-withoutbg-picture-haripriya.png"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;