'use client';

import React from 'react';
import Link from 'next/link';
import { Eye, Stethoscope, GraduationCap, ClipboardCheck, Activity, Shield, ArrowRight } from 'lucide-react';

const ComprehensiveEyeCare = () => {
  const expertiseAreas = [
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Comprehensive Eye Exams",
      description: "Complete eye and vision care evaluations to diagnose and treat eye conditions before they become serious problems."
    },
    {
      icon: <Stethoscope className="w-6 h-6" />,
      title: "Medical Eye Conditions",
      description: "Expert diagnosis and treatment of diabetic retinopathy, macular degeneration, glaucoma, and all types of eye disease."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Urgent Eye Care",
      description: "Same-day appointments available for eye infections, injuries, sudden vision changes, and other ocular emergencies."
    },
    {
      icon: <ClipboardCheck className="w-6 h-6" />,
      title: "Surgical Co-Management",
      description: "Expert pre-operative and post-operative care for LASIK, cataract surgery, and other ocular procedures."
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Myopia Management",
      description: "Specialized protocols to slow the progression of nearsightedness in children using Ortho-K and other evidence-based methods."
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Preventive Eye Health",
      description: "Proactive eye care to maintain optimal eye and vision health throughout life with regular monitoring and treatment."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Main heading with SEO optimization */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Orange County&apos;s Leading <span className="text-eyecare-blue">Optometrist</span> & Eye Care Center
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Dr. Alexander Bonakdar, Doctor of Optometry, provides comprehensive eye exams and treats eye problems with 35+ years of clinical training. Our optometry practice specializes in diagnosing and treating all types of eye conditions, from routine vision care to complex eye disease management.
          </p>
        </div>

        {/* Expertise grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {expertiseAreas.map((area, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-eyecare-blue text-white p-2 rounded-lg mr-3">
                  {area.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{area.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{area.description}</p>
            </div>
          ))}
        </div>

        {/* Additional comprehensive information */}
        <div className="bg-gradient-to-r from-eyecare-lighter-blue/10 to-blue-50 rounded-xl p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Why Choose Our Optometrist for Your Eye Care?
              </h3>
              <div className="space-y-3 text-gray-600">
                <p className="flex items-start">
                  <span className="text-eyecare-blue font-bold mr-2">✓</span>
                  <span><strong>Medical Doctor Training:</strong> Extensive medical school background with specialized optometry education and OD degree certification.</span>
                </p>
                <p className="flex items-start">
                  <span className="text-eyecare-blue font-bold mr-2">✓</span>
                  <span><strong>Comprehensive Eye Exams:</strong> Complete eye and vision evaluations using advanced diagnostic technology to detect eye problems early.</span>
                </p>
                <p className="flex items-start">
                  <span className="text-eyecare-blue font-bold mr-2">✓</span>
                  <span><strong>Specialized Treatment:</strong> Expert care for diabetic retinopathy, contact lenses, and all types of eye conditions and eye disease.</span>
                </p>
                <p className="flex items-start">
                  <span className="text-eyecare-blue font-bold mr-2">✓</span>
                  <span><strong>Clinical Excellence:</strong> 35+ years of clinical training serving Orange County with a focus on eye health and vision care.</span>
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Common Eye Problems We Treat
              </h3>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                <div className="space-y-2">
                  <p>• Diabetic Retinopathy</p>
                  <p>• Dry Eye Syndrome</p>
                  <p>• Macular Degeneration</p>
                  <p>• Glaucoma Management</p>
                  <p>• Cataracts Evaluation</p>
                  <p>• Keratoconus Treatment</p>
                </div>
                <div className="space-y-2">
                  <p>• Contact Lens Problems</p>
                  <p>• Vision Changes</p>
                  <p>• Eye Infections</p>
                  <p>• Retinal Issues</p>
                  <p>• Eye Strain & Fatigue</p>
                  <p>• Pediatric Eye Care</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Schedule your comprehensive eye exam with Orange County&apos;s trusted optometrist.
            We accept most vision and medical insurance plans.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-appointment">
              <button className="bg-eyecare-blue hover:bg-eyecare-dark-blue text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Schedule Eye Exam
              </button>
            </Link>
            <Link href="/services">
              <button className="border-2 border-eyecare-blue text-eyecare-blue hover:bg-eyecare-blue hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Learn More About Our Services
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComprehensiveEyeCare;

