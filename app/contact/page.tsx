import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | EyeCare Center of Orange County',
  description: 'Schedule your appointment at EyeCare Center of Orange County. Call (949) 364-0008 or book online. Convenient locations across Orange County.',
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
    description: 'Schedule your appointment today. Call (949) 364-0008 or book online.',
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
                Experience exceptional eye care at EyeCare Center of Orange County. We're here to help you achieve and maintain optimal vision health.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-eyecare-blue/20 mb-4">
                  <Phone className="w-8 h-8 text-eyecare-blue" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
                <a href="tel:+19493640008" className="text-lg text-eyecare-blue hover:underline">
                  (949) 364-0008
                </a>
                <p className="text-gray-600 mt-2">Monday - Friday: 8am - 6pm</p>
                <p className="text-gray-600">Saturday: 9am - 2pm</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-eyecare-light-blue/20 mb-4">
                  <Mail className="w-8 h-8 text-eyecare-light-blue" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
                <a href="mailto:eyecarecenteroc@gmail.com" className="text-lg text-eyecare-blue hover:underline">
                  eyecarecenteroc@gmail.com
                </a>
                <p className="text-gray-600 mt-2">We'll respond within 24 hours</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-eyecare-lighter-blue/20 mb-4">
                  <MapPin className="w-8 h-8 text-eyecare-lighter-blue" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Us</h3>
                <p className="text-lg text-gray-700">Santa Ana, CA</p>
                <p className="text-gray-600 mt-2">Serving all of Orange County</p>
              </div>
            </div>

            {/* Contact Form and Info */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <ContactForm />

              {/* Office Information */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Office Information</h2>

                <div className="space-y-6">
                  <div className="bg-white border border-gray-200 p-6 rounded-lg">
                    <div className="flex items-start gap-4">
                      <Clock className="w-6 h-6 text-eyecare-blue flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-gray-900 mb-3">Office Hours</h3>
                        <div className="space-y-2 text-gray-600">
                          <div className="flex justify-between">
                            <span>Monday - Friday:</span>
                            <span className="font-semibold">8:00 AM - 6:00 PM</span>
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
                        <h3 className="font-bold text-gray-900 mb-3">Service Areas</h3>
                        <p className="text-gray-600 mb-3">
                          We proudly serve patients throughout Orange County, including:
                        </p>
                        <div className="grid grid-cols-2 gap-2 text-gray-600 text-sm">
                          <div>Irvine</div>
                          <div>Newport Beach</div>
                          <div>Costa Mesa</div>
                          <div>Santa Ana</div>
                          <div>Anaheim</div>
                          <div>Tustin</div>
                          <div>Orange</div>
                          <div>Fountain Valley</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-eyecare-blue to-eyecare-light-blue text-white p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-3">Emergency Eye Care</h3>
                    <p className="mb-4">
                      If you're experiencing an eye emergency, please call us immediately at:
                    </p>
                    <a
                      href="tel:+19493640008"
                      className="inline-block bg-white text-eyecare-blue px-6 py-3 rounded-md font-semibold hover:shadow-lg transition-all"
                    >
                      (949) 364-0008
                    </a>
                    <p className="mt-4 text-sm text-white/90">
                      For after-hours emergencies, leave a message and our on-call provider will return your call promptly.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 p-6 rounded-lg">
                    <h3 className="font-bold text-gray-900 mb-3">What to Bring</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <span className="text-eyecare-blue mt-1">•</span>
                        <span>Insurance card and photo ID</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-eyecare-blue mt-1">•</span>
                        <span>List of current medications</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-eyecare-blue mt-1">•</span>
                        <span>Current eyeglasses or contact lenses</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-eyecare-blue mt-1">•</span>
                        <span>Medical history and previous eye records (if available)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Insurance Information */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Insurance & Payment Options
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We accept most major insurance plans and offer flexible payment options
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Insurance Accepted</h3>
                <p className="text-gray-600 mb-4">
                  We accept most major vision and medical insurance plans. Please call our office to verify your specific coverage.
                </p>
                <a href="tel:+19493640008" className="text-eyecare-blue font-semibold hover:underline">
                  Verify Insurance →
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Payment Plans</h3>
                <p className="text-gray-600 mb-4">
                  We offer flexible payment plans for procedures and treatments not covered by insurance.
                </p>
                <a href="tel:+19493640008" className="text-eyecare-blue font-semibold hover:underline">
                  Learn More →
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Self-Pay Options</h3>
                <p className="text-gray-600 mb-4">
                  Cash, credit cards, and HSA/FSA cards accepted. Competitive self-pay rates available.
                </p>
                <a href="tel:+19493640008" className="text-eyecare-blue font-semibold hover:underline">
                  Get Pricing →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-eyecare-blue to-eyecare-light-blue text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Schedule Your Visit?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Our friendly staff is here to help you book your appointment
            </p>
            <a
              href="tel:+19493640008"
              className="inline-block bg-white text-eyecare-blue px-8 py-4 rounded-md font-semibold text-lg hover:shadow-xl transition-all"
            >
              Call (949) 364-0008 Now
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
