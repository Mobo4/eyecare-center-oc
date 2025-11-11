import type { Metadata } from "next";
import "./globals.css";
import { generateMedicalBusinessSchema } from "@/lib/schema";

export const metadata: Metadata = {
  metadataBase: new URL('https://eyecarecenteroc.com'),
  title: {
    default: "EyeCare Center of Orange County | Expert Eye Care & LASIK Surgery",
    template: "%s | EyeCare Center OC"
  },
  description: "Comprehensive eye care services in Orange County. Expert LASIK, cataract surgery, keratoconus treatment, and comprehensive eye exams. Call (949) 364-0008",
  keywords: [
    // Primary Services
    "eye care orange county",
    "lasik surgery",
    "cataract surgery",
    "keratoconus treatment",
    "ophthalmologist",
    "eye doctor",
    "vision care",
    "dry eye treatment",
    // Location Keywords
    "eye doctor irvine",
    "eye doctor newport beach",
    "eye doctor santa ana",
    "eye doctor costa mesa",
    "eye doctor huntington beach",
    "eye doctor anaheim",
    "eye doctor tustin",
    "eye doctor orange",
    // Condition Keywords
    "glaucoma treatment",
    "macular degeneration",
    "diabetic retinopathy",
    "astigmatism correction",
    "myopia control",
    "presbyopia treatment",
    "blepharitis treatment",
    "pink eye treatment",
    // Service Keywords
    "comprehensive eye exam",
    "contact lens fitting",
    "scleral lenses",
    "corneal cross linking",
    "eye emergency",
    "pediatric optometry",
    "low vision aids",
    // Specialty Keywords
    "board certified ophthalmologist",
    "orange county eye specialist",
    "advanced eye care technology",
    "same day eye appointments",
    "emergency eye care",
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
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-CT7WS4307Z"
        />
        <script
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
        <script
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
        <noscript dangerouslySetInnerHTML={{
          __html: '<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=395306154557054&ev=PageView&noscript=1" alt="" />'
        }} />

        {/* CallRail Phone Tracking */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(){var s=document.createElement('script');
              s.type='text/javascript';s.async=true;
              s.src='https://cdn.callrail.com/companies/479856773/6582372c2e4a73e54ea1/12/swap.js';
              var x=document.getElementsByTagName('script')[0];
              x.parentNode.insertBefore(s,x);})();
            `,
          }}
        />
        {/* Structured Data - MedicalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateMedicalBusinessSchema()),
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
