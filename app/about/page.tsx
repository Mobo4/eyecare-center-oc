import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Award, Heart, Eye, Users, Clock, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | EyeCare Center of Orange County',
  description: 'Learn about EyeCare Center of Orange County - Over 20 years of expert eye care, advanced technology, and compassionate service. Meet our team of board-certified specialists.',
  keywords: [
    'about eye care center orange county',
    'eye doctor team',
    'board certified ophthalmologist',
    'eye care specialists',
    'orange county eye care history',
    'eye care technology',
    'experienced eye doctors',
    'patient centered care',
  ],
  openGraph: {
    title: 'About Us | EyeCare Center of Orange County',
    description: 'Over 20 years of expert eye care in Orange County. Board-certified specialists, advanced technology, and compassionate service.',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-eyecare-lighter-blue/20 to-blue-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About EyeCare Center of Orange County
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-4">
                For over 20 years, we've been dedicated to providing exceptional eye care services to the Orange County community. Our commitment to excellence, advanced technology, and compassionate care has helped over 50,000 patients achieve and maintain optimal vision health.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed">
                Led by board-certified specialists, our team combines extensive experience with cutting-edge technology to deliver comprehensive eye care services for patients of all ages.
              </p>
            </div>
          </div>
        </section>

        {/* Our Mission & Values */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Mission & Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're committed to preserving and enhancing your vision through personalized, comprehensive eye care
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-eyecare-blue/20 mb-4">
                  <Heart className="w-8 h-8 text-eyecare-blue" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Patient-Centered Care</h3>
                <p className="text-gray-600">
                  Every patient receives personalized attention and treatment plans tailored to their unique vision needs and lifestyle.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-eyecare-light-blue/20 mb-4">
                  <Award className="w-8 h-8 text-eyecare-light-blue" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Clinical Excellence</h3>
                <p className="text-gray-600">
                  Our board-certified specialists stay at the forefront of eye care through continuous education and advanced training.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-eyecare-lighter-blue/20 mb-4">
                  <Shield className="w-8 h-8 text-eyecare-lighter-blue" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Trusted Expertise</h3>
                <p className="text-gray-600">
                  Two decades of experience treating the full spectrum of eye conditions with proven, evidence-based approaches.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What Sets Us Apart */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                What Sets Us Apart
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the difference of comprehensive, technology-driven eye care
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-eyecare-blue text-white">
                    <Eye className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Advanced Diagnostic Technology</h3>
                  <p className="text-gray-600">
                    State-of-the-art equipment including OCT imaging, corneal topography, and visual field testing for precise diagnosis and treatment planning.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-eyecare-blue text-white">
                    <Users className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Comprehensive Care for All Ages</h3>
                  <p className="text-gray-600">
                    From pediatric vision screenings to age-related eye disease management, we provide expert care for patients at every stage of life.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-eyecare-blue text-white">
                    <Clock className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Convenient Care</h3>
                  <p className="text-gray-600">
                    Flexible scheduling, extended hours, and multiple locations across Orange County make quality eye care accessible when you need it.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-eyecare-blue text-white">
                    <Heart className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Patient Education</h3>
                  <p className="text-gray-600">
                    We empower our patients with knowledge about their eye health, treatment options, and preventive care strategies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Expertise */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Areas of Expertise
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive treatment for over 191 eye conditions and vision disorders
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-eyecare-lighter-blue/20 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Corneal Diseases</h3>
                <p className="text-gray-600 text-sm">Keratoconus, corneal dystrophies, infections</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-eyecare-lighter-blue/20 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Retinal Conditions</h3>
                <p className="text-gray-600 text-sm">Macular degeneration, diabetic retinopathy, retinal tears</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-eyecare-lighter-blue/20 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Glaucoma</h3>
                <p className="text-gray-600 text-sm">Early detection, medical and surgical management</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-eyecare-lighter-blue/20 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Cataracts</h3>
                <p className="text-gray-600 text-sm">Advanced surgery with premium lens implants</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-eyecare-lighter-blue/20 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Refractive Errors</h3>
                <p className="text-gray-600 text-sm">Myopia, hyperopia, astigmatism, presbyopia</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-eyecare-lighter-blue/20 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Dry Eye Disease</h3>
                <p className="text-gray-600 text-sm">Advanced diagnostics and treatment options</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-eyecare-lighter-blue/20 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Pediatric Eye Care</h3>
                <p className="text-gray-600 text-sm">Comprehensive exams, amblyopia, strabismus</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-eyecare-lighter-blue/20 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Contact Lenses</h3>
                <p className="text-gray-600 text-sm">Standard and specialty lens fittings</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-eyecare-blue to-eyecare-light-blue text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Experience the Difference
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join over 50,000 satisfied patients who trust us with their vision
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+19493640008"
                className="bg-white text-eyecare-blue px-8 py-4 rounded-md font-semibold text-lg hover:shadow-xl transition-all"
              >
                Call (949) 364-0008
              </a>
              <Link
                href="/contact"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-white hover:text-eyecare-blue transition-all"
              >
                Schedule Appointment
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
