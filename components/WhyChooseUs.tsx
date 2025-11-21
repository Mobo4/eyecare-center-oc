'use client';

import React from 'react';
import Link from 'next/link';
import { Lightbulb, Users, Heart, Award, Microscope, Handshake, ArrowRight } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Medical Expertise",
      description: "35+ years of clinical training with advanced optometry and medical school education for comprehensive eye care."
    },
    {
      icon: <Microscope className="w-8 h-8" />,
      title: "Advanced Technology",
      description: "State-of-the-art diagnostic equipment for early detection and treatment of all eye conditions and diseases."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Personalized Treatment",
      description: "Customized care plans tailored to your specific eye health needs and vision goals."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Compassionate Care",
      description: "Patient-focused approach with attention to detail and dedication to your eye health and comfort."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovative Solutions",
      description: "Latest treatments and techniques for keratoconus, dry eye, contact lenses, and vision correction."
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Long-term Relationships",
      description: "Building lasting partnerships with patients through consistent, quality eye care and vision services."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-white to-eyecare-lighter-blue/30 relative overflow-hidden">
      <AnimatedBackground colorScheme="blue" numberOfCircles={15} />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="text-eyecare-blue">Our Practice</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            Experience the difference of comprehensive, patient-centered eye care with Orange County&apos;s trusted optometry experts.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-start gap-4">
                <div className="text-eyecare-blue flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link 
            href="/book-appointment"
            className="inline-flex items-center bg-eyecare-blue hover:bg-eyecare-dark-blue text-white px-8 py-3 rounded-md text-lg font-medium transition-all hover:scale-105 transform duration-300"
          >
            Schedule Your Appointment
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

