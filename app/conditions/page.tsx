import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { conditions } from '@/data/conditions-full';
import { Search, Eye } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Eye Conditions We Treat | EyeCare Center OC',
  description: 'Comprehensive treatment for 191 eye conditions including keratoconus, cataracts, glaucoma, macular degeneration, and more. Expert care in Orange County.',
  keywords: [
    'eye conditions orange county',
    'eye disease treatment',
    'keratoconus treatment',
    'cataract treatment',
    'glaucoma treatment',
    'macular degeneration',
    'diabetic retinopathy',
    'dry eye syndrome',
    'eye condition specialist',
    'comprehensive eye care',
  ],
  openGraph: {
    title: 'Eye Conditions We Treat | EyeCare Center OC',
    description: 'Expert treatment for over 191 eye conditions. Board-certified specialists in Orange County.',
    type: 'website',
  },
};

// Group conditions by category
function groupByCategory() {
  const grouped: { [key: string]: typeof conditions } = {};
  conditions.forEach((condition) => {
    if (!grouped[condition.category]) {
      grouped[condition.category] = [];
    }
    grouped[condition.category].push(condition);
  });
  return grouped;
}

export default function ConditionsPage() {
  const groupedConditions = groupByCategory();
  const categories = Object.keys(groupedConditions).sort();

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-eyecare-lighter-blue/20 to-blue-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="flex items-center gap-2 mb-4">
                <Eye className="w-8 h-8 text-eyecare-blue" />
                <span className="text-lg font-semibold text-eyecare-blue">Comprehensive Care</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Eye Conditions We Treat
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Expert diagnosis and treatment for over 191 eye conditions. Our board-certified specialists use the latest technology and proven treatments to preserve and enhance your vision.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="tel:+19493640008"
                  className="inline-flex items-center justify-center bg-eyecare-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-eyecare-dark-blue transition-all"
                >
                  Call (949) 364-0008
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-white text-eyecare-blue border-2 border-eyecare-blue px-6 py-3 rounded-lg font-semibold hover:bg-eyecare-blue hover:text-white transition-all"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-8 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search conditions..."
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-eyecare-blue focus:border-transparent"
                  id="conditionSearch"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Conditions by Category */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {categories.map((category) => (
              <div key={category} className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-eyecare-blue">
                  {category}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {groupedConditions[category].map((condition) => (
                    <Link
                      key={condition.slug}
                      href={`/conditions/${condition.slug}`}
                      className="bg-white rounded-lg p-6 shadow-md hover:shadow-2xl transition-all group"
                    >
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-eyecare-blue transition">
                        {condition.name}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {condition.description}
                      </p>
                      <div className="text-eyecare-blue font-semibold group-hover:translate-x-2 transition-transform inline-block">
                        Learn More →
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            {/* Expanding Notice */}
            <div className="mt-12 text-center bg-gradient-to-r from-eyecare-blue to-eyecare-light-blue rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-3">
                Can't Find Your Condition?
              </h3>
              <p className="text-lg mb-6 text-white/90">
                We treat over 191 eye conditions. Our database is constantly expanding. Contact us to discuss your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+19493640008"
                  className="inline-flex items-center justify-center bg-white text-eyecare-blue px-8 py-3 rounded-lg font-semibold hover:shadow-xl transition-all"
                >
                  Call Us
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-eyecare-blue transition-all"
                >
                  Send Message
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Get Treatment?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Schedule your comprehensive eye exam with our specialists today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+19493640008"
                className="inline-flex items-center justify-center bg-gradient-to-r from-eyecare-blue to-eyecare-light-blue text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all"
              >
                Call (949) 364-0008
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-white text-eyecare-blue border-2 border-eyecare-blue px-8 py-4 rounded-lg font-semibold text-lg hover:bg-eyecare-blue hover:text-white transition-all"
              >
                Book Online
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Simple search functionality */}
      <script dangerouslySetInnerHTML={{
        __html: `
          document.getElementById('conditionSearch')?.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            const cards = document.querySelectorAll('a[href^="/conditions/"]');
            cards.forEach(card => {
              const text = card.textContent.toLowerCase();
              card.style.display = text.includes(searchTerm) ? '' : 'none';
            });
          });
        `
      }} />
    </>
  );
}
