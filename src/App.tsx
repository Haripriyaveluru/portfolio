import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import PersonalInfo from './components/PersonalInfo';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.hidden-left, .hidden-right').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen relative">
      {/* Main gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-600 via-indigo-500 to-purple-600 -z-10"></div>
      
      {/* Decorative Elements */}
      <div className="fixed inset-0 -z-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        <Header />
        <Hero />
        <div className="bg-white/10 backdrop-blur-md">
          <About />
        </div>
        <div className="bg-white/5 backdrop-blur-md">
          <Skills />
        </div>
        <div className="bg-white/10 backdrop-blur-md">
          <Projects />
        </div>
        <div className="bg-white/5 backdrop-blur-md">
          <Experience />
        </div>
        <div className="bg-white/10 backdrop-blur-md">
          <PersonalInfo />
        </div>
        <div className="bg-white/5 backdrop-blur-md">
          <Contact />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App