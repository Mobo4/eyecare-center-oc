'use client';

import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Eye, Glasses, Microscope, Heart, Shield, Users, Star, Award, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: FeatureProps[] = [
  {
    title: "Comprehensive Eye Exams",
    description: "State-of-the-art diagnostic technology to detect eye conditions early and preserve your vision for years to come.",
    icon: <Eye className="w-12 h-12 text-eyecare-blue" />,
  },
  {
    title: "Contact Lens Fitting",
    description: "Expert fitting for all lens types including scleral, RGP, and specialty lenses for keratoconus and irregular corneas.",
    icon: <Glasses className="w-12 h-12 text-eyecare-light-blue" />,
  },
  {
    title: "Advanced Treatment",
    description: "Cutting-edge treatments for glaucoma, cataracts, macular degeneration, and 191 other eye conditions.",
    icon: <Microscope className="w-12 h-12 text-eyecare-lighter-blue" />,
  },
];

const serviceList: string[] = [
  "Keratoconus Specialists",
  "Corneal Disease",
  "Glaucoma Management",
  "Cataract Care",
  "Dry Eye Treatment",
  "Diabetic Eye Care",
  "Emergency Services",
  "Pediatric Optometry",
  "LASIK Consultation",
  "Low Vision Aids",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function VisualFeatures() {
  return (
    <section className="relative py-24 sm:py-32 bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-eyecare-blue/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-eyecare-light-blue/5 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        />
      </div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center space-y-4 mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-5xl font-bold">
            Comprehensive{" "}
            <span className="bg-gradient-to-r from-eyecare-blue via-eyecare-light-blue to-eyecare-lighter-blue text-transparent bg-clip-text">
              Eye Care Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Board-certified specialists providing comprehensive care for all your vision needs
          </p>
        </motion.div>

        {/* Animated service badges */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {serviceList.map((service: string, index: number) => (
            <motion.div key={service} variants={itemVariants}>
              <Badge
                className="text-sm px-4 py-2 bg-gradient-to-r from-eyecare-blue/10 to-eyecare-light-blue/10 text-eyecare-blue hover:bg-gradient-to-r hover:from-eyecare-blue hover:to-eyecare-light-blue hover:text-white transition-all duration-300 cursor-pointer border border-eyecare-blue/20 hover:shadow-lg"
              >
                {service}
              </Badge>
            </motion.div>
          ))}
        </motion.div>

        {/* Feature cards with 3D tilt */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map(({ title, description, icon }: FeatureProps, index: number) => (
            <motion.div key={title} variants={itemVariants}>
              <Tilt
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                perspective={1000}
                transitionSpeed={2000}
                scale={1.02}
              >
                <Card className="h-full border-2 border-transparent hover:border-eyecare-blue transition-all duration-300 bg-white/80 backdrop-blur-sm hover:shadow-2xl group">
                  <CardHeader>
                    <motion.div
                      className="mb-4 p-4 bg-gradient-to-br from-eyecare-blue/10 to-eyecare-light-blue/10 rounded-2xl w-fit"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {icon}
                    </motion.div>
                    <CardTitle className="text-2xl group-hover:text-eyecare-blue transition-colors">
                      {title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-600">
                    {description}
                  </CardContent>
                </Card>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated stats card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative bg-gradient-to-br from-eyecare-blue via-eyecare-light-blue to-eyecare-lighter-blue text-white p-12 rounded-3xl shadow-2xl max-w-5xl mx-auto overflow-hidden">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                backgroundSize: '40px 40px'
              }} />
            </div>

            <div className="relative z-10">
              <motion.h3
                className="text-3xl font-bold mb-3 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Trusted by 50,000+ Orange County Patients
              </motion.h3>
              <motion.p
                className="text-lg mb-10 opacity-90 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Join thousands of satisfied patients who trust us with their vision care
              </motion.p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { icon: <Star className="w-8 h-8" />, value: "4.9/5", label: "Patient Rating", delay: 0.4 },
                  { icon: <Award className="w-8 h-8" />, value: "20+", label: "Years Experience", delay: 0.5 },
                  { icon: <Heart className="w-8 h-8" />, value: "191", label: "Conditions Treated", delay: 0.6 },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: stat.delay }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="flex justify-center mb-3">
                      <div className="p-3 bg-white/20 rounded-full">
                        {stat.icon}
                      </div>
                    </div>
                    <div className="text-5xl font-bold mb-2">{stat.value}</div>
                    <div className="text-sm opacity-90">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
