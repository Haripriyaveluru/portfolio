import React from 'react';
import { Code2, Rocket, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              I'm a passionate <b>Full Stack Developer</b> with a  knack for crafting seamless, user-friendly experiences. I specialize in building dynamic and responsive applications, blending <b>front-end</b> aesthetics with <b>back-end</b> efficiency.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or improving my knowledge through reading.
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-2">
                  <Code2 className="text-blue-600" size={24} />
                </div>
                <p className="font-semibold">Clean Code</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-2">
                  <Rocket className="text-blue-600" size={24} />
                </div>
                <p className="font-semibold">Innovation</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-2">
                  <Users className="text-blue-600" size={24} />
                </div>
                <p className="font-semibold">Teamwork</p>
              </div>
            </div>
          </div>
          <div className="relative">
           <img
              src="/4782178.jpg"
              alt="Working on laptop"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;