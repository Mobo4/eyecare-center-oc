import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CleanHero from "@/components/CleanHero";
import ProfessionalFeatures from "@/components/ProfessionalFeatures";
import ProfessionalServices from "@/components/ProfessionalServices";
import { Eye, MapPin, ArrowRight, Activity, Brain, Droplets, Sun, Phone } from 'lucide-react';

const conditions = [
  { name: "Keratoconus", slug: "keratoconus", category: "Corneal Disease", icon: Eye, color: "from-blue-500 to-blue-600" },
  { name: "Cataracts", slug: "cataracts", category: "Vision Impairment", icon: Sun, color: "from-amber-500 to-amber-600" },
  { name: "Dry Eye Syndrome", slug: "dry-eye", category: "Chronic Condition", icon: Droplets, color: "from-cyan-500 to-cyan-600" },
  { name: "Glaucoma", slug: "glaucoma", category: "Vision Threat", icon: Activity, color: "from-red-500 to-red-600" },
  { name: "Macular Degeneration", slug: "macular-degeneration", category: "Retinal Disease", icon: Brain, color: "from-purple-500 to-purple-600" },
  { name: "Diabetic Retinopathy", slug: "diabetic-retinopathy", category: "Retinal Disease", icon: Activity, color: "from-pink-500 to-pink-600" },
];

const cities = [
  { name: "Irvine", slug: "irvine", count: "15,000+ patients" },
  { name: "Newport Beach", slug: "newport-beach", count: "12,000+ patients" },
  { name: "Costa Mesa", slug: "costa-mesa", count: "8,000+ patients" },
  { name: "Huntington Beach", slug: "huntington-beach", count: "7,000+ patients" },
  { name: "Santa Ana", slug: "santa-ana", count: "5,000+ patients" },
  { name: "Anaheim", slug: "anaheim", count: "3,000+ patients" },
];

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />

      <CleanHero />

      <ProfessionalFeatures />

      <ProfessionalServices />

      {/* Conditions Section - Simplified */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Eye Conditions We{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 text-transparent bg-clip-text">
                Expertly Treat
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced diagnosis and treatment for all eye conditions with cutting-edge technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {conditions.map((condition) => {
              const IconComponent = condition.icon;
              return (
                <Link
                  key={condition.slug}
                  href={`/conditions/${condition.slug}`}
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 bg-gradient-to-br ${condition.color} rounded-xl`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs font-semibold text-white/80 border border-white/20">
                      {condition.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                    {condition.name}
                  </h3>

                  <p className="text-gray-300 mb-4 leading-relaxed">
                    Expert treatment and care for {condition.name.toLowerCase()}. Learn about symptoms, causes, and treatment options.
                  </p>

                  <div className="flex items-center text-cyan-400 font-semibold group-hover:translate-x-2 transition-transform">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="text-center">
            <Link
              href="/conditions"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View All 191 Eye Conditions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Cities Section - Simplified */}
      <section className="py-24 bg-gradient-to-br from-white via-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Serving{" "}
              <span className="bg-gradient-to-r from-eyecare-blue via-blue-600 to-purple-600 text-transparent bg-clip-text">
                Orange County
              </span>
              {" "}Communities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert eye care in your neighborhood with convenient locations across Orange County
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/locations/${city.slug}`}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-eyecare-blue"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-gradient-to-br from-eyecare-blue/10 to-purple-600/10 rounded-xl group-hover:from-eyecare-blue/20 group-hover:to-purple-600/20 transition-all">
                    <MapPin className="w-8 h-8 text-eyecare-blue" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-eyecare-blue transition-colors">
                  {city.name}
                </h3>

                <p className="text-gray-600 mb-4">
                  {city.count}
                </p>

                <div className="flex items-center text-eyecare-blue font-semibold group-hover:translate-x-2 transition-transform">
                  View Location Details
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/locations"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-eyecare-blue to-purple-600 hover:from-eyecare-dark-blue hover:to-purple-700 text-white font-semibold rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View All 65 Cities We Serve
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-eyecare-blue via-blue-600 to-purple-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Improve Your Vision?
          </h2>

          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Schedule your comprehensive eye exam today with Orange County's trusted eye care specialists
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="tel:+19493640008"
              className="inline-flex items-center justify-center bg-white text-eyecare-blue px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call (949) 364-0008
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-eyecare-blue hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Book Online
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
