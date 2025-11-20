import Link from 'next/link';
import { Button } from "./ui/button";
import { Phone, Eye, Star, Users, Award } from 'lucide-react';

export default function CleanHero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] -z-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #1e40af 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container grid lg:grid-cols-2 place-items-center gap-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        {/* Left Column - Text Content */}
        <div className="text-center lg:text-start space-y-6">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-eyecare-blue/10 rounded-full text-eyecare-blue font-semibold mb-4">
              <Eye className="w-4 h-4" />
              Expert Eye Care Since 2004
            </span>
          </div>

          <main className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <h1 className="mb-4">
              <span className="inline bg-gradient-to-r from-eyecare-blue to-eyecare-light-blue text-transparent bg-clip-text">
                Professional Eye Care
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-700">
              Specializing in Keratoconus, Scleral Lenses & Comprehensive Eye Exams
            </h2>
          </main>

          <p className="text-xl text-gray-600 md:w-10/12 mx-auto lg:mx-0">
            Board-certified specialists providing cutting-edge treatment for 191 eye conditions.
            Serving 65+ Orange County cities with compassionate, personalized care.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button asChild size="lg" className="bg-eyecare-blue hover:bg-eyecare-dark-blue text-lg">
              <a href="tel:+19493640008" className="group">
                <Phone className="mr-2 h-5 w-5" />
                Call (949) 364-0008
              </a>
            </Button>

            <Button asChild variant="outline" size="lg" className="border-2 border-eyecare-blue text-eyecare-blue hover:bg-eyecare-blue hover:text-white text-lg">
              <Link href="/conditions">
                Browse Conditions
              </Link>
            </Button>
          </div>

          <div className="flex flex-wrap gap-3 justify-center lg:justify-start pt-4">
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
          </div>
        </div>

        {/* Right Column - Visual Card */}
        <div className="relative z-10 w-full">
          <div className="relative bg-gradient-to-br from-eyecare-blue via-eyecare-light-blue to-eyecare-lighter-blue p-8 rounded-3xl shadow-2xl">
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
            <div className="absolute -top-6 -left-6 bg-white p-4 rounded-xl shadow-xl">
              <div className="text-3xl font-bold text-eyecare-blue">191</div>
              <div className="text-sm text-gray-600">Conditions Treated</div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl">
              <div className="text-3xl font-bold text-eyecare-light-blue">65+</div>
              <div className="text-sm text-gray-600">Cities Served</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
