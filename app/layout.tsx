import type { Metadata } from "next";
import { Poppins, Playfair_Display } from 'next/font/google';
import "./globals.css";
import { generateMedicalBusinessSchema } from "@/lib/schema";
import { CONTACT_INFO } from "@/lib/contact-info";
import Script from 'next/script';

// Configure fonts to match live site
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'block', // Changed from 'swap' to prevent FOIT/FOUT
  preload: true,
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
  display: 'block', // Changed from 'swap' to prevent FOIT/FOUT
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://eyecarecenteroc.com'),
  title: {
    default: "EyeCare Center of Orange County | Expert Eye Care & LASIK Surgery",
    template: "%s | EyeCare Center OC"
  },
  description: `Comprehensive eye care services in Orange County. Expert LASIK, cataract surgery, keratoconus treatment, and comprehensive eye exams. Call ${CONTACT_INFO.primaryPhone.display}`,
  keywords: [
    // --- Primary Keywords ---
    "eye care orange county",
    "ophthalmologist orange county",
    "eye doctor orange county",
    "lasik orange county",
    "cataract surgery orange county",
    "keratoconus treatment",
    "vision correction",
    "eye surgery",
    
    // --- Location-Specific Keywords ---
    "eye doctor irvine",
    "lasik irvine",
    "eye doctor newport beach",
    "cataract surgery newport beach",
    "eye doctor santa ana",
    "eye doctor costa mesa",
    "eye doctor huntington beach",
    "eye doctor anaheim",
    "eye doctor tustin",
    "eye doctor orange",
    "eye doctor mission viejo",
    "eye doctor laguna beach",

    // --- Condition-Specific Keywords ---
    "glaucoma treatment",
    "macular degeneration treatment",
    "diabetic retinopathy treatment",
    "dry eye treatment",
    "astigmatism correction",
    "myopia control",
    "presbyopia treatment",
    "blepharitis treatment",
    "corneal disease",
    "floaters",
    
    // --- Service & Treatment Keywords ---
    "comprehensive eye exam",
    "contact lens fitting",
    "scleral lenses",
    "corneal cross linking",
    "refractive lens exchange",
    "premium iols",

    // --- Specialty & Long-Tail Keywords ---
    "board certified ophthalmologist",
    "orange county eye specialist",
    "advanced eye care technology",
    "emergency eye care",
    "pediatric eye care",
    "low vision aids",
    "top eye surgeon orange county"
  ],
  authors: [{ name: "Dr. Bonakdar", url: "https://eyecarecenteroc.com" }],
  creator: "EyeCare Center of Orange County",
  publisher: "EyeCare Center of Orange County",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://eyecarecenteroc.com',
    siteName: 'EyeCare Center of Orange County',
    title: 'EyeCare Center of Orange County | Expert Eye Care & LASIK Surgery',
    description: 'Comprehensive eye care services in Orange County. Expert LASIK, cataract surgery, and comprehensive eye exams.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'EyeCare Center of Orange County',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EyeCare Center of Orange County',
    description: 'Comprehensive eye care services in Orange County',
    images: ['/og-image.jpg'],
  },
  verification: {
    other: {
      'ahrefs-site-verification': 'LShXYY/0KA2USu/Xq4sV7A',
    },
  },
  alternates: {
    canonical: 'https://eyecarecenteroc.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data - MedicalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateMedicalBusinessSchema()),
          }}
        />
      </head>
      <body className={`${poppins.variable} ${playfair.variable} antialiased`}>
        {children}

        {/* GHL Chat Widget - Load after page is interactive */}
        <Script
          id="ghl-widget-loader"
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="69163f6533e9926104e6ee9e"
          strategy="lazyOnload"
        />

        {/* Google Analytics */}
        <Script
          id="google-analytics-gtag"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-CT7WS4307Z"
        />
        <Script
          id="google-analytics-inline"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-CT7WS4307Z');
            `,
          }}
        />

        {/* Meta Pixel Code */}
        <Script
          id="meta-pixel-inline"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '395306154557054');
              fbq('track', 'PageView');
            `,
          }}
        />

        {/* CallRail Phone Tracking - Load after page is fully loaded */}
        <Script
          id="callrail-swap"
          strategy="lazyOnload"
          src="https://cdn.callrail.com/companies/479856773/6582372c2e4a73e54ea1/12/swap.js"
        />
      </body>
    </html>
  );
}
