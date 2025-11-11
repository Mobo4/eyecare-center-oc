'use client';

import Link from 'next/link';
import { Button } from "./ui/button";
import { ArrowRight, Phone, Eye, Star, Users, Award } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import ParticleBackground from './ParticleBackground';

export default function VisualHero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
      <ParticleBackground />

      <div className="container grid lg:grid-cols-2 place-items-center gap-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        {/* Left Column - Text Content */}
        <motion.div
          className="text-center lg:text-start space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-eyecare-blue/10 rounded-full text-eyecare-blue font-semibold mb-4">
              <Eye className="w-4 h-4" />
              Expert Eye Care Since 2004
            </span>
          </motion.div>

          <motion.main
            className="text-4xl md:text-5xl lg:text-6xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <h1 className="mb-4">
              <span className="inline bg-gradient-to-r from-eyecare-blue to-eyecare-light-blue text-transparent bg-clip-text">
                Professional Eye Care
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-700">
              Specializing in{" "}
              <TypeAnimation
                sequence={[
                  'Keratoconus Treatment',
                  2000,
                  'Scleral Contact Lenses',
                  2000,
                  'Corneal Cross-Linking',
                  2000,
                  'Comprehensive Eye Exams',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                className="text-eyecare-blue font-bold"
                repeat={Infinity}
              />
            </h2>
          </motion.main>

          <motion.p
            className="text-xl text-gray-600 md:w-10/12 mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            Board-certified specialists providing cutting-edge treatment for 191 eye conditions.
            Serving 65+ Orange County cities with compassionate, personalized care.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <Button asChild size="lg" className="bg-eyecare-blue hover:bg-eyecare-dark-blue text-lg">
              <a href="tel:+19493640008" className="group">
                <Phone className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                Call (949) 364-0008
              </a>
            </Button>

            <Button asChild variant="outline" size="lg" className="border-2 border-eyecare-blue text-eyecare-blue hover:bg-eyecare-blue hover:text-white text-lg">
              <Link href="/conditions" className="group">
                Browse Conditions
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-3 justify-center lg:justify-start pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm font-medium text-eyecare-blue shadow-md border border-eyecare-blue/20">
              <Star className="w-4 h-4 fill-current" />
              4.9/5 Rating
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm font-medium text-eyecare-light-blue shadow-md border border-eyecare-light-blue/20">
              <Users className="w-4 h-4" />
              50,000+ Patients
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm font-medium text-eyecare-lighter-blue shadow-md border border-eyecare-lighter-blue/20">
              <Award className="w-4 h-4" />
              20+ Years
            </span>
          </motion.div>
        </motion.div>

        {/* Right Column - Visual Elements */}
        <motion.div
          className="relative z-10 w-full"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Tilt
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={1000}
            transitionSpeed={2000}
            scale={1.05}
            className="w-full"
          >
            <div className="relative bg-gradient-to-br from-eyecare-blue via-eyecare-light-blue to-eyecare-lighter-blue p-8 rounded-3xl shadow-2xl">
              {/* Eye Icon Illustration */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 text-center">
                <Eye className="w-32 h-32 mx-auto text-white mb-6" />
                <h3 className="text-3xl font-bold text-white mb-4">
                  Advanced Eye Care Technology
                </h3>
                <p className="text-white/90 text-lg">
                  State-of-the-art diagnostic equipment for precise diagnosis and treatment
                </p>
              </div>

              {/* Floating Stats */}
              <motion.div
                className="absolute -top-6 -left-6 bg-white p-4 rounded-xl shadow-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="text-3xl font-bold text-eyecare-blue">191</div>
                <div className="text-sm text-gray-600">Conditions Treated</div>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                <div className="text-3xl font-bold text-eyecare-light-blue">65+</div>
                <div className="text-sm text-gray-600">Cities Served</div>
              </motion.div>
            </div>
          </Tilt>

          {/* Additional decorative elements */}
          <motion.div
            className="absolute top-10 right-10 w-20 h-20 bg-eyecare-lighter-blue/20 rounded-full blur-xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-10 left-10 w-32 h-32 bg-eyecare-blue/20 rounded-full blur-xl"
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          />
        </motion.div>
      </div>
    </section>
  );
}
