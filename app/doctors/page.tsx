/**
 * FILE: app/doctors/page.tsx
 * PURPOSE: Doctors listing page for E-E-A-T compliance
 * AUTHOR: Claude Code
 * CREATED: 2025-11-21
 */

import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BookAppointmentCTA } from '@/components/shared';
import { getAllDoctors } from '@/data/doctors';
import { Star, Award, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Doctors | EyeCare Center of Orange County',
  description: 'Meet our experienced eye care specialists. Dr. Hani Bonakdar has 35+ years of experience treating keratoconus, dry eye, and complex vision conditions in Orange County.',
};

export default function DoctorsPage() {
  const doctors = getAllDoctors();

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-eyecare-lighter-blue/20 to-blue-50 py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Meet Our Eye Care Specialists
              </h1>
              <p className="text-xl text-gray-600">
                Our team of experienced optometrists and specialists are dedicated to providing
                the highest quality eye care in Orange County. With decades of combined experience,
                we offer expert treatment for a wide range of vision conditions.
              </p>
            </div>
          </div>
        </section>

        {/* Doctors Grid */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {doctors.map((doctor) => (
                <Link
                  key={doctor.slug}
                  href={`/doctors/${doctor.slug}`}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden group"
                >
                  {/* Photo */}
                  <div className="aspect-[4/3] relative bg-gray-200">
                    <Image
                      src={doctor.photo}
                      alt={`Dr. ${doctor.name}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>

                  {/* Info */}
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-gray-900 group-hover:text-eyecare-blue transition-colors">
                      Dr. {doctor.name}, {doctor.credentials}
                    </h2>
                    <p className="text-eyecare-blue font-medium mb-3">{doctor.title}</p>

                    {/* Stats */}
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        <span className="font-medium">{doctor.averageRating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Award className="w-4 h-4 text-gray-400" />
                        <span>{doctor.yearsExperience}+ yrs</span>
                      </div>
                    </div>

                    {/* Specialties Preview */}
                    <div className="flex flex-wrap gap-2">
                      {doctor.specialties.slice(0, 3).map((specialty, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                        >
                          {specialty}
                        </span>
                      ))}
                      {doctor.specialties.length > 3 && (
                        <span className="px-2 py-1 bg-eyecare-blue/10 text-eyecare-blue text-xs rounded">
                          +{doctor.specialties.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <BookAppointmentCTA />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
