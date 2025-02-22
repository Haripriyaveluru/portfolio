import React from 'react';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'Vcreatech Labs Pvt Ltd - MMRFIC',
      position: 'MERN Stack developer Intern',
      period: 'Mar, 2024 - Sep, 2024',
      description: 'Architected and developed full stack web applications for the organization using MERN stack',
    },
    {
      company: 'Cognizant Technological Solutions',
      position: 'Program Analyst Intern',
      period: 'Mar,2022 - Jan,2023',
      description: 'Configured and Customized the ServiceNow platform according to organization needs(ITSM)',
    },
   
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Professional Summary</h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 pb-12 last:pb-0">
              {index !== experiences.length - 1 && (
                <div className="absolute left-3 top-0 h-full w-px bg-blue-200"></div>
              )}
              <div className="absolute left-0 top-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                <Briefcase size={14} className="text-white" />
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md ml-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold">{exp.position}</h3>
                  <span className="text-gray-500 text-sm">{exp.period}</span>
                </div>
                <p className="text-blue-600 font-medium mb-2">{exp.company}</p>
                <p className="text-gray-600">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;