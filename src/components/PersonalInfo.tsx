import React from 'react';
import { Phone, Mail, MapPin, Calendar } from 'lucide-react';

const PersonalInfo = () => {
  const info = [
    {
      icon: <Phone size={24} />,
      label: 'Phone',
      value: '+91 63602 17301',
      href: 'tel:+916360217301'
    },
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'velururharipriya@gmail.com',
      href: 'mailto:velururharipriya@gmail.com'
    },
    {
      icon: <MapPin size={24} />,
      label: 'Location',
      value: 'Bengaluru, India',
      href: null
    },
    
  ];

  return (
    <section id="personal-info" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Information</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {info.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.label}</h3>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-gray-600">{item.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalInfo;