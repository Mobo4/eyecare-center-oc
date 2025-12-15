/**
 * FILE: app/doctors/[doctor-slug]/page.tsx
 * PURPOSE: Dynamic doctor biography page with E-E-A-T compliance and Physician schema
 * AUTHOR: Claude Code
 * CREATED: 2025-11-21
 *
 * CONTEXT: Critical for Google's E-E-A-T signals. Establishes expertise
 * and authority for all medical content on the site.
 */

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BookAppointmentCTA, MedicalDisclaimer } from '@/components/shared';
import { getDoctorBySlug, getAllDoctors } from '@/data/doctors';
import { getPhysicianJsonLd } from '@/lib/schema/physician';
import { CONTACT_INFO } from '@/lib/contact-info';
import {
  GraduationCap,
  Award,
  Users,
  Star,
  MapPin,
  Phone,
  Calendar,
  CheckCircle,
  Quote,
  BookOpen,
  Mic,
  Trophy
} from 'lucide-react';

interface Props {
  params: Promise<{ 'doctor-slug': string }>;
}

export async function generateStaticParams() {
  const doctors = getAllDoctors();
  return doctors.map(doctor => ({
    'doctor-slug': doctor.slug
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const doctor = getDoctorBySlug(resolvedParams['doctor-slug']);

  if (!doctor) {
    return { title: 'Doctor Not Found' };
  }

  const title = `Dr. ${doctor.name}, ${doctor.credentials} | ${doctor.title} | Orange County`;
  const description = `Meet Dr. ${doctor.name}, ${doctor.title} with ${doctor.yearsExperience}+ years of experience. Specializing in ${doctor.specialties.slice(0, 3).join(', ')}. Serving Orange County, CA.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'profile',
      images: [{ url: doctor.photo, alt: `Dr. ${doctor.name}` }]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description
    }
  };
}

export default async function DoctorPage({ params }: Props) {
  const resolvedParams = await params;
  const doctor = getDoctorBySlug(resolvedParams['doctor-slug']);

  if (!doctor) {
    notFound();
  }

  const physicianSchema = getPhysicianJsonLd(doctor);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: physicianSchema }}
      />
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-eyecare-lighter-blue/20 to-blue-50 py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              {/* Photo Column */}
              <div className="lg:col-span-1">
                <div className="relative">
                  <div className="aspect-[3/4] relative rounded-xl overflow-hidden shadow-xl bg-gray-200">
                    <Image
                      src={doctor.photo}
                      alt={`Dr. ${doctor.name}, ${doctor.credentials}`}
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  {/* Rating Badge */}
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-full px-4 py-2 shadow-lg flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    <span className="font-bold text-gray-900">{doctor.averageRating}</span>
                    <span className="text-sm text-gray-500">({doctor.reviewCount} reviews)</span>
                  </div>
                </div>
              </div>

              {/* Info Column */}
              <div className="lg:col-span-2">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                  Dr. {doctor.name}, {doctor.credentials}
                </h1>
                <p className="text-xl text-eyecare-blue font-medium mb-4">{doctor.title}</p>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-2xl font-bold text-eyecare-blue">{doctor.yearsExperience}+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-2xl font-bold text-eyecare-blue">{doctor.proceduresPerformed?.toLocaleString() || '50,000'}+</div>
                    <div className="text-sm text-gray-600">Patients Treated</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-2xl font-bold text-eyecare-blue">{doctor.specialties.length}</div>
                    <div className="text-sm text-gray-600">Specialties</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center gap-1">
                      <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      <span className="text-2xl font-bold text-eyecare-blue">{doctor.averageRating}</span>
                    </div>
                    <div className="text-sm text-gray-600">Patient Rating</div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={CONTACT_INFO.primaryPhone.href}
                    className="callrail-phone inline-flex items-center justify-center bg-eyecare-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-eyecare-dark-blue transition-all"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    {CONTACT_INFO.primaryPhone.display}
                  </a>
                  <Link
                    href="/book-appointment"
                    className="inline-flex items-center justify-center bg-white text-eyecare-blue border-2 border-eyecare-blue px-6 py-3 rounded-lg font-semibold hover:bg-eyecare-blue hover:text-white transition-all"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Appointment
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Biography Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About Dr. {doctor.name}</h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  {doctor.bio.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="mb-4">{paragraph}</p>
                  ))}
                </div>

                {/* Philosophy Quote */}
                <div className="mt-8 bg-eyecare-blue/5 border-l-4 border-eyecare-blue p-6 rounded-r-lg">
                  <Quote className="w-8 h-8 text-eyecare-blue/30 mb-2" />
                  <p className="text-lg italic text-gray-700">{doctor.philosophy}</p>
                  <p className="mt-2 font-semibold text-eyecare-blue">— Dr. {doctor.name}</p>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                {/* Education */}
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <GraduationCap className="w-6 h-6 text-eyecare-blue" />
                    <h3 className="text-lg font-bold text-gray-900">Education</h3>
                  </div>
                  <ul className="space-y-3">
                    <li>
                      <p className="font-medium text-gray-900">Optometry Degree</p>
                      <p className="text-sm text-gray-600">{doctor.medicalSchool}</p>
                    </li>
                    {doctor.fellowships?.map((fellowship, idx) => (
                      <li key={idx}>
                        <p className="font-medium text-gray-900">Fellowship</p>
                        <p className="text-sm text-gray-600">{fellowship}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Certifications */}
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Award className="w-6 h-6 text-eyecare-blue" />
                    <h3 className="text-lg font-bold text-gray-900">Board Certifications</h3>
                  </div>
                  <ul className="space-y-2">
                    {doctor.boardCertifications.map((cert, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{cert}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Professional Memberships */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Users className="w-6 h-6 text-eyecare-blue" />
                    <h3 className="text-lg font-bold text-gray-900">Professional Memberships</h3>
                  </div>
                  <ul className="space-y-2">
                    {doctor.professionalMemberships.map((membership, idx) => (
                      <li key={idx} className="text-sm text-gray-700">
                        {membership}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specialties Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Areas of Expertise</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {doctor.specialties.map((specialty, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow"
                >
                  <p className="font-medium text-gray-900">{specialty}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Publications, Seminars, Awards Section */}
        {(doctor.publications || doctor.seminars || doctor.awards) && (
          <section className="py-12 bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Publications */}
                {doctor.publications && doctor.publications.length > 0 && (
                  <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-blue-100 p-2 rounded-lg">
                        <BookOpen className="w-6 h-6 text-eyecare-blue" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Publications</h3>
                    </div>
                    <ul className="space-y-3">
                      {doctor.publications.map((pub, idx) => (
                        <li key={idx} className="text-sm text-gray-700 leading-relaxed pl-2 border-l-2 border-blue-200">
                          {pub}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Seminars */}
                {doctor.seminars && doctor.seminars.length > 0 && (
                  <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-purple-100 p-2 rounded-lg">
                        <Mic className="w-6 h-6 text-purple-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Speaking</h3>
                    </div>
                    <ul className="space-y-3">
                      {doctor.seminars.map((seminar, idx) => (
                        <li key={idx} className="text-sm text-gray-700 leading-relaxed pl-2 border-l-2 border-purple-200">
                          {seminar}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Awards */}
                {doctor.awards && doctor.awards.length > 0 && (
                  <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-yellow-100 p-2 rounded-lg">
                        <Trophy className="w-6 h-6 text-yellow-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Awards</h3>
                    </div>
                    <ul className="space-y-3">
                      {doctor.awards.map((award, idx) => (
                        <li key={idx} className="text-sm text-gray-700 leading-relaxed pl-2 border-l-2 border-yellow-200">
                          {award}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              </div>
            </div>
          </section>
        )}

        {/* Location Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Practice Location</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-eyecare-blue flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-gray-900">EyeCare Center of Orange County</p>
                  <p className="text-gray-700">{CONTACT_INFO.address.full}</p>
                  <div className="mt-4 space-y-1 text-sm text-gray-600">
                    <p>{CONTACT_INFO.hours.weekdays}</p>
                    <p>{CONTACT_INFO.hours.saturday}</p>
                    <p>{CONTACT_INFO.hours.sunday}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <BookAppointmentCTA />
          </div>
        </section>

        {/* Medical Disclaimer */}
        <section className="py-8 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <MedicalDisclaimer variant="compact" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
