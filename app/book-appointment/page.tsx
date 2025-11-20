import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GhlCalendarComponent from '@/components/ghl/GhlCalendarComponent'; // Use the GHL calendar component

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
        <section className="bg-gradient-to-br from-blue-50 via-eyecare-lighter-blue/20 to-blue-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl text-center mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Book Your Appointment Online
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Select a convenient date and time for your visit. Our online scheduling system makes it easy to book your next appointment with our expert team.
              </p>
            </div>
          </div>
        </section>

        {/* GHL Calendar Embed */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-50 p-4 sm:p-8 rounded-lg shadow-md">
              <GhlCalendarComponent
                calendarId="YOUR_GHL_CALENDAR_ID" // Placeholder - needs actual calendar ID
                containerId="ghl-calendar-container"
              />
            </div>
            <div className="mt-8 text-center text-gray-600">
              <p>If you have any questions or prefer to book by phone, please call us at <a href="tel:+17145581182" className="text-eyecare-blue font-semibold hover:underline">(714) 558-1182</a>.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
