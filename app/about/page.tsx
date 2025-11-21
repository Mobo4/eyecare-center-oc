import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Award, Heart, Eye, Users, Clock, Shield, Star } from 'lucide-react';
import { generateBreadcrumbSchema } from '@/lib/schema';
import Script from 'next/script';
import Testimonials from '@/components/Testimonials';
import { CONTACT_INFO } from '@/lib/contact-info';

export const metadata: Metadata = {
  title: 'About Dr. Bonakdar & Our Team | EyeCare Center of Orange County',
  description: 'Meet Dr. Bonakdar and the expert team at EyeCare Center of Orange County. Learn about our 35+ years of experience and our commitment to patient care.',
  keywords: [
    'about eye care center orange county',
    'Dr. Bonakdar',
    'Bascom Palmer Eye Institute',
    'board certified ophthalmologist',
    'orange county ophthalmologist',
    'eye care specialists',
    '35+ years experience eye care',
    'experienced eye doctors',
    'patient centered care',
    'advanced diagnostic technology',
    'pediatric eye care orange county'
  ],
  openGraph: {
    title: 'About Dr. Bonakdar & Our Team | EyeCare Center of Orange County',
    description: 'With over 35 years of experience and training from the renowned Bascom Palmer Eye Institute, our team provides expert, compassionate eye care.',
    type: 'website',
  },
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://eyecarecenteroc.com' },
    { name: 'About Us', url: 'https://eyecarecenteroc.com/about' },
  ]);

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-eyecare-lighter-blue/20 to-blue-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                A Legacy of Excellence in Orange County
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-4">
                For over 30 years, EyeCare Center of Orange County has been a pillar of vision health in the community. Our founder's journey began with a commitment to excellence, training at the #1 ranked Bascom Palmer Eye Institute.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed">
                This foundation of elite training and a passion for patient care has shaped our practice, allowing us to help over 10,000 patients achieve and maintain clear, healthy vision.
              </p>
            </div>
          </div>
        </section>

        {/* Our Modern Facility */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our State-of-the-Art Facility
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience comprehensive eye care in a welcoming, modern environment equipped with the latest diagnostic technology
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <Image
                  src="/images/clinic/IMG_3999.JPG"
                  alt="EyeCare Center of Orange County - Modern waiting room and reception area"
                  width={800}
                  height={600}
                  className="rounded-lg shadow-lg"
                  priority
                />
              </div>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-eyecare-blue text-white">
                      <Shield className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Comfortable Environment</h3>
                    <p className="text-gray-600">
                      Our welcoming reception and waiting areas are designed for your comfort, with modern amenities and a calming atmosphere.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-eyecare-blue text-white">
                      <Eye className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Advanced Equipment</h3>
                    <p className="text-gray-600">
                      We invest in the latest diagnostic and treatment technology to provide you with the most accurate diagnoses and effective treatments.
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
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Staff</h3>
                    <p className="text-gray-600">
                      Our professional team is dedicated to providing exceptional service and making your visit as comfortable as possible.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Dr. Bonakdar Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
              <div className="md:col-span-1">
                <Image
                  src="/images/doctors/drbonakdar.png"
                  alt="Dr. Bonakdar - Board Certified Ophthalmologist specializing in Keratoconus and Corneal Disease"
                  width={500}
                  height={500}
                  className="rounded-lg shadow-md"
                />
              </div>
              <div className="md:col-span-2">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Meet Dr. Bonakdar
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  With a distinguished career spanning over three decades, Dr. Bonakdar is a board-certified ophthalmologist recognized for his clinical expertise and compassionate approach to patient care. His commitment to providing the highest standard of vision care is rooted in his world-class training at the prestigious <strong>Bascom Palmer Eye Institute</strong>, consistently ranked as the nation's leading eye hospital.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Dr. Bonakdar specializes in complex eye conditions, including advanced cataract surgery, LASIK, and the management of corneal diseases like Keratoconus. He believes in empowering patients through education, ensuring they understand their diagnosis and are actively involved in their treatment decisions. His dedication has earned the trust of thousands of patients and the respect of his peers throughout Orange County.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 px-4 py-2 bg-eyecare-blue/10 rounded-full text-eyecare-blue font-semibold">
                    <Award className="w-5 h-5" />
                    30+ Years Experience
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-eyecare-blue/10 rounded-full text-eyecare-blue font-semibold">
                    <Users className="w-5 h-5" />
                    10,000+ Patients Helped
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-eyecare-blue/10 rounded-full text-eyecare-blue font-semibold">
                    <Star className="w-5 h-5" />
                    Trained at Bascom Palmer
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission & Values */}
        <section className="py-16 bg-gray-50">
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
                  Three decades of experience treating the full spectrum of eye conditions with proven, evidence-based approaches.
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

        <Testimonials />

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
                href={CONTACT_INFO.primaryPhone.href}
                className="callrail-phone bg-white text-eyecare-blue px-8 py-4 rounded-md font-semibold text-lg hover:shadow-xl transition-all"
              >
                Call {CONTACT_INFO.primaryPhone.display}
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
