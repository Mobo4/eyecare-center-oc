import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GhlFormComponent from '@/components/ghl/GhlFormComponent'; // Use the GHL form component
import { CONTACT_INFO } from '@/lib/contact-info';

export const metadata: Metadata = {
  title: 'Book an Appointment | EyeCare Center of Orange County',
  description: 'Easily schedule your appointment online with EyeCare Center of Orange County. Select a time that works for you and book your visit instantly.',
  keywords: [
    'book eye exam orange county',
    'schedule eye doctor appointment',
    'online appointment booking',
    'eye care appointment santa ana',
  ],
};

export default function BookAppointmentPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[400px] md:h-[500px] overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/contact-hero.png"
              alt="Book Appointment"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
          </div>
          <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
            <div className="max-w-2xl text-center mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Book Your Appointment Online
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Fill out the form below to request an appointment. Our team will confirm your booking and answer any questions you may have.
              </p>
            </div>
          </div>
        </section>

        {/* GHL Form Embed */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-50 p-4 sm:p-8 rounded-lg shadow-md">
              <GhlFormComponent
                formId="a2vv3ztdBH5WpJ5iGfVj"
                containerId="ghl-booking-form-container"
              />
            </div>
            <div className="mt-8 text-center text-gray-600">
              <p>If you have any questions or prefer to book by phone, please call us at <a href={CONTACT_INFO.primaryPhone.href} className="callrail-phone text-eyecare-blue font-semibold hover:underline">{CONTACT_INFO.primaryPhone.display}</a>.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
