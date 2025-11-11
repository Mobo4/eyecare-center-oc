'use client';

import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Eye, Heart, Users, Shield, Clock, Award, CheckCircle, Star } from "lucide-react";
import Link from 'next/link';
import { Button } from "./ui/button";
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

interface ServiceProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const serviceList: ServiceProps[] = [
  {
    title: "Keratoconus Specialists",
    description: "Advanced treatment options including corneal cross-linking (CXL) and specialty contact lens fittings for keratoconus patients.",
    icon: <Eye className="w-8 h-8 text-eyecare-blue" />,
  },
  {
    title: "Comprehensive Exams",
    description: "State-of-the-art diagnostic technology for early detection of glaucoma, cataracts, and macular degeneration.",
    icon: <Shield className="w-8 h-8 text-eyecare-light-blue" />,
  },
  {
    title: "Same-Day Emergency Care",
    description: "Immediate treatment for eye emergencies, infections, injuries, and sudden vision changes - call for urgent appointments.",
    icon: <Clock className="w-8 h-8 text-eyecare-lighter-blue" />,
  },
];

const whyChooseUs = [
  { icon: <Award className="w-6 h-6" />, title: "Board Certified", description: "Highly trained specialists" },
  { icon: <Users className="w-6 h-6" />, title: "50,000+ Patients", description: "Trusted throughout Orange County" },
  { icon: <Heart className="w-6 h-6" />, title: "191 Conditions", description: "Comprehensive treatment options" },
  { icon: <Shield className="w-6 h-6" />, title: "20+ Years", description: "Excellence in eye care" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function VisualServices() {
  return (
    <section className="relative py-24 sm:py-32 bg-gradient-to-br from-white via-gray-50 to-blue-50/30 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-10 w-96 h-96 bg-eyecare-lighter-blue/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-eyecare-blue via-eyecare-light-blue to-eyecare-lighter-blue text-transparent bg-clip-text">
                Patient-Centered{" "}
              </span>
              Eye Care
            </motion.h2>

            <motion.p
              className="text-gray-600 text-xl mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Serving Orange County with compassionate, cutting-edge eye care for over 20 years.
              Board-certified specialists you can trust.
            </motion.p>

            <motion.div
              className="space-y-6 mb-10"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {serviceList.map(({ icon, title, description }: ServiceProps) => (
                <motion.div key={title} variants={itemVariants}>
                  <Tilt
                    tiltMaxAngleX={3}
                    tiltMaxAngleY={3}
                    perspective={1000}
                    transitionSpeed={2000}
                  >
                    <Card className="border-2 border-transparent hover:border-eyecare-blue transition-all duration-300 bg-white/90 backdrop-blur-sm hover:shadow-xl group">
                      <CardHeader className="flex flex-row items-start gap-4 p-6">
                        <motion.div
                          className="p-3 bg-gradient-to-br from-eyecare-blue/10 to-eyecare-light-blue/10 rounded-2xl"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {icon}
                        </motion.div>
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-2 group-hover:text-eyecare-blue transition-colors">
                            {title}
                          </CardTitle>
                          <CardDescription className="text-base text-gray-600">
                            {description}
                          </CardDescription>
                        </div>
                      </CardHeader>
                    </Card>
                  </Tilt>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <Button asChild size="lg" className="bg-gradient-to-r from-eyecare-blue to-eyecare-light-blue hover:from-eyecare-dark-blue hover:to-eyecare-blue text-lg shadow-lg hover:shadow-xl transition-all">
                <Link href="/contact">
                  <CheckCircle className="mr-2 h-5 w-5" />
                  Book Appointment
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-eyecare-blue text-eyecare-blue hover:bg-eyecare-blue hover:text-white text-lg shadow-md hover:shadow-lg transition-all">
                <Link href="/about">
                  Learn More
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual Stats Card */}
          <motion.div
            className="w-full"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Tilt
              tiltMaxAngleX={8}
              tiltMaxAngleY={8}
              perspective={1000}
              transitionSpeed={2000}
              scale={1.02}
            >
              <div className="relative bg-gradient-to-br from-eyecare-blue via-eyecare-light-blue to-eyecare-lighter-blue text-white p-10 rounded-3xl shadow-2xl overflow-hidden">
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: 'radial-gradient(circle, white 2px, transparent 2px)',
                      backgroundSize: '30px 30px'
                    }}
                    animate={{ backgroundPosition: ['0px 0px', '30px 30px'] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                </div>

                <div className="relative z-10">
                  <motion.h3
                    className="text-3xl font-bold mb-8 flex items-center gap-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <Star className="w-8 h-8" />
                    Why Choose Us
                  </motion.h3>

                  <div className="space-y-6">
                    {whyChooseUs.map((item, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        whileHover={{ scale: 1.03, x: 5 }}
                      >
                        <div className="p-2 bg-white/20 rounded-lg flex-shrink-0">
                          {item.icon}
                        </div>
                        <div>
                          <div className="font-bold text-xl mb-1">{item.title}</div>
                          <div className="text-sm opacity-90">{item.description}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Floating decorative elements */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-xl"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute -bottom-6 -left-6 w-32 h-32 bg-white/10 rounded-full blur-xl"
                    animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                  />
                </div>
              </div>
            </Tilt>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
