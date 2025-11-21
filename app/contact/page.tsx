import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GhlFormComponent from '@/components/ghl/GhlFormComponent'; // Use the new GHL component
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/contact-info';

export const metadata: Metadata = {
  title: 'Contact Us | EyeCare Center of Orange County',
  description: `Schedule your appointment at EyeCare Center of Orange County. Call ${CONTACT_INFO.primaryPhone.display} or book online. Convenient locations across Orange County.`,
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
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-eyecare-lighter-blue/20 to-blue-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Schedule Your Appointment
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
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
