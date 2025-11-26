import Link from 'next/link';
import Image from 'next/image';
import { Star, CheckCircle, ArrowRight } from 'lucide-react';

export default function CleanHero() {
  return (
    <section className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-eyecare-blue to-eyecare-dark-blue overflow-hidden">
      {/* Background Pattern/Image Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Hero-main.webp"
          alt="Modern Eye Care Center"
          fill
          className="object-cover opacity-20 mix-blend-overlay"
          priority
        />
        {/* Subtle animated gradient orb for depth */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      </div>

      <div className="container relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 text-white">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium text-eyecare-lighter-blue">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Accepting New Patients
            </div>

            <h1 className="text-5xl lg:text-7xl font-serif font-bold leading-tight tracking-tight">
              World-Class <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
                Eye Care
              </span>
              <br />
              in Orange County
            </h1>

            <p className="text-xl text-blue-100 max-w-xl leading-relaxed font-light">
              Experience the perfect blend of advanced medical technology and compassionate, personalized care with Dr. Bonakdar.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/book-appointment"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-eyecare-blue bg-white rounded-full hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Book Appointment
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white border-2 border-white/30 rounded-full hover:bg-white/10 transition-all backdrop-blur-sm"
              >
                Explore Services
              </Link>
            </div>

            {/* Trust Indicators - White version */}
            <div className="pt-8 flex items-center gap-8 text-blue-200 text-sm font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Board Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Latest Technology</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>5-Star Rated</span>
              </div>
            </div>
          </div>

          {/* Right Column - Doctor Profile Card (5 cols) */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative bg-white p-2 rounded-2xl shadow-2xl shadow-blue-900/5 max-w-sm rotate-1 hover:rotate-0 transition-transform duration-500">
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="/images/Hero-main.webp"
                  alt="Eye Care Center of Orange County"
                  fill
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-60" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <p className="font-serif text-2xl font-bold">Dr. Bonakdar</p>
                  <p className="text-blue-100 font-medium">Lead Optometrist</p>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-slate-50">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-50 rounded-full text-eyecare-blue">
                    <Star className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-slate-900">4.9/5</p>
                    <p className="text-xs text-slate-500">Patient Rating</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
