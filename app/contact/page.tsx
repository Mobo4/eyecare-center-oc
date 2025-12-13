import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GhlFormComponent from '@/components/ghl/GhlFormComponent'; // Use the new GHL component
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/contact-info';
import { generateLocalBusinessSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Contact Us | EyeCare Center of Orange County',
  description: 'Schedule your appointment today. Located in Orange County, we offer comprehensive eye exams and specialty contact lens fittings. Call or book online.',
  alternates: {
    canonical: 'https://eyecarecenteroc.com/contact',
  },
  keywords: [
    'contact eye doctor orange county',
    'schedule eye exam',
    'book appointment orange county',
    'eye care appointment',
    'eye doctor santa ana',
    'eye care center contact',
    'appointment booking',
    'eye exam scheduling',
  ],
  openGraph: {
    title: 'Contact Us | EyeCare Center of Orange County',
    description: `Schedule your appointment today. Call ${CONTACT_INFO.primaryPhone.display} or book online.`,
    type: 'website',
  },
};

export default function ContactPage() {
  const businessSchema = generateLocalBusinessSchema();

  return (
    <>
      <JsonLd data={businessSchema} />
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[400px] md:h-[500px] overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/contact-hero.png"
              alt="Contact EyeCare Center"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
          </div>
          <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Schedule Your Appointment
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                We're here to help you achieve and maintain optimal vision health. Fill out the form below or call us to schedule your visit.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* GHL Contact Form */}
              <div className="bg-gray-50 p-8 rounded-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Request an Appointment</h2>
                <GhlFormComponent
                  formId="a2vv3ztdBH5WpJ5iGfVj"
                  containerId="ghl-form-container"
                />
              </div>

              {/* Office Information */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Office Information</h2>
                <div className="space-y-6">
                  <div className="bg-white border border-gray-200 p-6 rounded-lg">
                    <div className="flex items-start gap-4">
                      <Phone className="w-6 h-6 text-eyecare-blue flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">Call Us Directly</h3>
                        <a href={CONTACT_INFO.primaryPhone.href} className="callrail-phone text-lg text-eyecare-blue hover:underline">
                          {CONTACT_INFO.primaryPhone.display}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white border border-gray-200 p-6 rounded-lg">
                    <div className="flex items-start gap-4">
                      <Clock className="w-6 h-6 text-eyecare-blue flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-gray-900 mb-3">Office Hours</h3>
                        <div className="space-y-2 text-gray-600">
                          <div className="flex justify-between">
                            <span>Monday - Thursday:</span>
                            <span className="font-semibold">9:00 AM - 6:00 PM</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Friday:</span>
                            <span className="font-semibold">9:00 AM - 5:00 PM</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Saturday:</span>
                            <span className="font-semibold">9:00 AM - 2:00 PM</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Sunday:</span>
                            <span className="font-semibold">Closed</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white border border-gray-200 p-6 rounded-lg">
                    <div className="flex items-start gap-4">
                      <MapPin className="w-6 h-6 text-eyecare-blue flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">Our Location</h3>
                        <p className="text-gray-700">801 North Tustin Ave #404</p>
                        <p className="text-gray-700">Santa Ana, CA 92705</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
