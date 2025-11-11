import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  backgroundClass?: string;
}

export default function Hero({
  title = "Expert Eye Care",
  subtitle = "Orange County",
  description = "Comprehensive eye care services powered by cutting-edge technology and compassionate care. Board-certified specialists serving all of Orange County.",
  primaryCTA = { text: "Book Appointment", href: "/contact" },
  secondaryCTA = { text: "Browse Conditions", href: "/conditions" },
  backgroundClass = "bg-gradient-to-br from-blue-50 via-eyecare-lighter-blue/20 to-blue-50"
}: HeroProps) {
  return (
    <section className="relative bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            {title}{" "}
            <span className="text-eyecare-blue">
              {subtitle}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={primaryCTA.href}
              className="inline-flex items-center justify-center bg-eyecare-blue text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-eyecare-dark-blue hover:shadow-lg transition-all group"
            >
              {primaryCTA.text}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href={secondaryCTA.href}
              className="inline-flex items-center justify-center bg-white text-eyecare-blue border-2 border-eyecare-blue px-8 py-4 rounded-lg font-semibold text-lg hover:bg-eyecare-blue hover:text-white hover:shadow-lg transition-all"
            >
              {secondaryCTA.text}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
