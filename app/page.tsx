import Link from "next/link";
import OrganizationSchema from '@/components/Schema/OrganizationSchema';
import Hero from '@/components/Hero';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CleanHero from "@/components/CleanHero";
import Top6Services from "@/components/Top6Services";
import TrustSignals from "@/components/TrustSignals";
import ComprehensiveEyeCare from "@/components/ComprehensiveEyeCare";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProfessionalServices from "@/components/ProfessionalServices";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import DiagnosisTool from "@/components/DiagnosisTool";
import { Eye, MapPin, ArrowRight, Activity, Brain, Droplets, Sun, Phone } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/contact-info';
import ExitIntentPopup from '@/components/ExitIntentPopup';

const conditions = [
  { name: "Keratoconus", slug: "keratoconus", category: "Corneal Disease", icon: Eye, color: "bg-blue-50 text-blue-600" },
  { name: "Cataracts", slug: "cataracts", category: "Vision Impairment", icon: Sun, color: "bg-blue-50 text-blue-600" },
  { name: "Dry Eye Syndrome", slug: "dry-eye", category: "Chronic Condition", icon: Droplets, color: "bg-blue-50 text-blue-600" },
  { name: "Glaucoma", slug: "glaucoma", category: "Vision Threat", icon: Activity, color: "bg-blue-50 text-blue-600" },
  { name: "Macular Degeneration", slug: "macular-degeneration", category: "Retinal Disease", icon: Brain, color: "bg-blue-50 text-blue-600" },
  { name: "Diabetic Retinopathy", slug: "diabetic-retinopathy", category: "Retinal Disease", icon: Activity, color: "bg-blue-50 text-blue-600" },
];

import { cities as allCities } from '@/data/cities';

// Select top cities for the homepage (e.g., top 6 by population or strategic importance)
const cities = [
  allCities.find(c => c.slug === 'irvine'),
  allCities.find(c => c.slug === 'newport-beach'),
  allCities.find(c => c.slug === 'long-beach'), // New major city
  allCities.find(c => c.slug === 'anaheim'),
  allCities.find(c => c.slug === 'santa-ana'),
  allCities.find(c => c.slug === 'corona'), // New major city
].filter(Boolean).map(c => ({
  name: c!.name,
  slug: c!.slug,
  count: `${c!.population} residents`
}));

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white" suppressHydrationWarning>
      <Header />
      <OrganizationSchema />

      <OrganizationSchema />

      <Hero
        title="World-Class Eye Care in Orange County"
        subtitle="Experience vision care that goes beyond the ordinary. Dr. Alexander Bonakdar combines 35+ years of expertise with cutting-edge technology for comprehensive eye health."
        imageSrc="/images/home-hero.webp"
        imageAlt="Dr. Alexander Bonakdar performing an eye exam"
        ctaText="Book Your Exam"
        ctaLink="/contact"
        priority={true}
      />

      <section className="py-12 bg-white relative z-20 md:-mt-20 px-4">
        <div className="container mx-auto">
          <DiagnosisTool />
        </div>
      </section>

      <TrustSignals className="py-16 bg-white" />

      <Top6Services />

      <ComprehensiveEyeCare />

      <WhyChooseUs />



      <Testimonials />

      <Faq />

      {/* Conditions Section - Clean Medical Style */}
      <section className="py-24 bg-eyecare-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-eyecare-navy mb-6">
              Eye Conditions We Treat
            </h2>
            <p className="text-xl text-eyecare-light-navy max-w-3xl mx-auto">
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
                  className="group bg-white border border-eyecare-blue/5 rounded-2xl p-8 hover:shadow-xl hover:border-eyecare-blue/20 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl ${condition.color}`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <span className="px-3 py-1 bg-eyecare-warm rounded-full text-xs font-semibold text-eyecare-light-navy border border-eyecare-blue/5">
                      {condition.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-eyecare-navy mb-3 group-hover:text-eyecare-blue transition-colors">
                    {condition.name}
                  </h3>

                  <p className="text-eyecare-light-navy mb-4 leading-relaxed">
                    Expert treatment and care for {condition.name.toLowerCase()}. Learn about symptoms, causes, and treatment options.
                  </p>

                  <div className="flex items-center text-eyecare-blue font-semibold group-hover:translate-x-2 transition-transform">
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
              className="inline-flex items-center px-8 py-4 bg-eyecare-blue hover:bg-eyecare-dark-blue text-white font-semibold rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View All 191 Eye Conditions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Cities Section - Clean Style */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-eyecare-navy mb-6">
              Serving Orange County Communities
            </h2>
            <p className="text-xl text-eyecare-light-navy max-w-3xl mx-auto">
              Expert eye care in your neighborhood with convenient locations across Orange County
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/locations/${city.slug}`}
                className="group bg-eyecare-warm rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border border-transparent hover:border-eyecare-blue/20"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-white rounded-xl text-eyecare-blue shadow-sm">
                    <MapPin className="w-8 h-8" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-eyecare-navy mb-2 group-hover:text-eyecare-blue transition-colors">
                  {city.name}
                </h3>

                <p className="text-eyecare-light-navy mb-4">
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
              className="inline-flex items-center px-8 py-4 border-2 border-eyecare-blue text-eyecare-blue hover:bg-eyecare-blue hover:text-white font-semibold rounded-full text-lg transition-all duration-300"
            >
              View All 65 Cities We Serve
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section - Medical Blue */}
      <section className="py-24 bg-eyecare-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ready to Improve Your Vision?
          </h2>

          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Schedule your comprehensive eye exam today with Orange County's trusted eye care specialists
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href={CONTACT_INFO.primaryPhone.href}
              className="callrail-phone inline-flex items-center justify-center bg-white text-eyecare-blue px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call {CONTACT_INFO.primaryPhone.display}
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

      <ExitIntentPopup
        title="Get Expert Eye Care in Orange County"
        description="Don't struggle with vision issues any longer. Dr. Alexander Bonakdar has 35+ years of experience providing comprehensive eye care and specialized treatments."
        imageSrc="/images/hero-background.png"
        benefits={[
          'Same-day appointments available',
          'Most insurance plans accepted',
          'Advanced diagnostic technology',
          'Experienced specialist care'
        ]}
        ctaText="Schedule Free Consultation"
      />
      <Footer />
    </main>
  );
}
