import React from 'react';
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Eye, Heart, Users, Shield, Clock, Award } from "lucide-react";
import Link from 'next/link';
import { Button } from "./ui/button";

interface ServiceProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const serviceList: ServiceProps[] = [
  {
    title: "Keratoconus Specialists",
    description:
      "Advanced treatment options including corneal cross-linking (CXL) and specialty contact lens fittings for keratoconus patients.",
    icon: <Eye className="w-8 h-8 text-eyecare-blue" />,
  },
  {
    title: "Comprehensive Exams",
    description:
      "State-of-the-art diagnostic technology for early detection of glaucoma, cataracts, and macular degeneration.",
    icon: <Shield className="w-8 h-8 text-eyecare-light-blue" />,
  },
  {
    title: "Same-Day Emergency Care",
    description:
      "Immediate treatment for eye emergencies, infections, injuries, and sudden vision changes - call for urgent appointments.",
    icon: <Clock className="w-8 h-8 text-eyecare-lighter-blue" />,
  },
];

export default function ProfessionalServices() {
  return (
    <section className="container py-24 sm:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-b from-eyecare-blue to-eyecare-light-blue text-transparent bg-clip-text">
              Patient-Centered{" "}
            </span>
            Eye Care
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8">
            Serving Orange County with compassionate, cutting-edge eye care for over 20 years.
            Board-certified specialists you can trust.
          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title} className="border-2 hover:border-eyecare-blue transition-all hover:shadow-lg">
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-eyecare-blue/10 p-3 rounded-2xl">
                    {icon}
                  </div>
                  <div>
                    <CardTitle className="text-xl">{title}</CardTitle>
                    <CardDescription className="text-md mt-2 text-muted-foreground">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="mt-8 flex gap-4">
            <Button asChild className="bg-eyecare-blue hover:bg-eyecare-dark-blue">
              <Link href="/contact">
                Book Appointment
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-eyecare-blue text-eyecare-blue hover:bg-eyecare-blue hover:text-white">
              <Link href="/about">
                Learn More
              </Link>
            </Button>
          </div>
        </div>

        {/* Stats Card */}
        <div className="w-full max-w-md">
          <div className="bg-gradient-to-br from-eyecare-blue to-eyecare-light-blue text-white p-8 rounded-xl shadow-2xl space-y-6">
            <h3 className="text-2xl font-bold">Why Choose Us</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-white/20 rounded-lg">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-bold text-lg">Board Certified</div>
                  <div className="text-sm opacity-90">Highly trained specialists</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-white/20 rounded-lg">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-bold text-lg">50,000+ Patients</div>
                  <div className="text-sm opacity-90">Trusted throughout Orange County</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-white/20 rounded-lg">
                  <Heart className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-bold text-lg">191 Conditions</div>
                  <div className="text-sm opacity-90">Comprehensive treatment options</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-white/20 rounded-lg">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-bold text-lg">20+ Years</div>
                  <div className="text-sm opacity-90">Excellence in eye care</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
