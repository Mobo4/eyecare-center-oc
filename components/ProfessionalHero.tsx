import Link from 'next/link';
import { Button } from "./ui/button";
import { ArrowRight, Phone } from 'lucide-react';

export default function ProfessionalHero() {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-eyecare-blue to-eyecare-light-blue text-transparent bg-clip-text">
              Expert Eye Care
            </span>{" "}
            for All of{" "}
          </h1>
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-eyecare-light-blue to-eyecare-lighter-blue text-transparent bg-clip-text">
              Orange County
            </span>
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Comprehensive eye care services powered by cutting-edge technology and compassionate care.
          Board-certified specialists serving 65+ Orange County cities.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button asChild className="w-full md:w-auto bg-eyecare-blue hover:bg-eyecare-dark-blue">
            <Link href="/contact">
              <Phone className="mr-2 h-5 w-5" />
              Call (949) 364-0008
            </Link>
          </Button>

          <Button asChild variant="outline" className="w-full md:w-auto border-eyecare-blue text-eyecare-blue hover:bg-eyecare-blue hover:text-white">
            <Link href="/conditions">
              Browse Conditions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>

        <div className="flex flex-wrap gap-2 justify-center lg:justify-start pt-4">
          <span className="inline-flex items-center px-4 py-2 bg-eyecare-blue/10 rounded-full text-sm font-medium text-eyecare-blue">
            20+ Years Experience
          </span>
          <span className="inline-flex items-center px-4 py-2 bg-eyecare-light-blue/10 rounded-full text-sm font-medium text-eyecare-light-blue">
            191 Conditions Treated
          </span>
          <span className="inline-flex items-center px-4 py-2 bg-eyecare-lighter-blue/10 rounded-full text-sm font-medium text-eyecare-lighter-blue">
            50,000+ Patients Served
          </span>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="z-10 space-y-6">
        <div className="bg-gradient-to-br from-eyecare-blue to-eyecare-light-blue text-white p-8 rounded-xl shadow-2xl">
          <div className="text-6xl font-bold mb-3">65+</div>
          <div className="text-xl font-semibold">Orange County Cities Served</div>
          <div className="text-sm opacity-90 mt-2">From Irvine to Newport Beach and beyond</div>
        </div>

        <div className="bg-gradient-to-br from-eyecare-light-blue to-eyecare-lighter-blue text-white p-6 rounded-xl shadow-xl">
          <div className="text-4xl font-bold mb-2">Same Day</div>
          <div className="text-lg font-semibold">Emergency Appointments</div>
          <div className="text-sm opacity-90 mt-1">Call for immediate care</div>
        </div>
      </div>
    </section>
  );
}
