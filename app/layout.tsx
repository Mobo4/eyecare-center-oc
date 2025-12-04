// Force rebuild
import type { Metadata } from "next";
import { Poppins, Playfair_Display } from 'next/font/google';
import "./globals.css";
import { generateMedicalBusinessSchema } from "@/lib/schema";
import { CONTACT_INFO } from "@/lib/contact-info";
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { GoogleAnalytics } from '@next/third-parties/google';
import CookieConsent from '@/components/Legal/CookieConsent';


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
    default: "EyeCare Center of Orange County | Number One Eyecare Practice Since 1991",
    template: "%s | Number One Eyecare Practice in Orange County Since 1991"
  },
  description: `Comprehensive eye care services in Orange County.Expert LASIK, cataract surgery, keratoconus treatment, and comprehensive eye exams.Call ${CONTACT_INFO.primaryPhone.display} `,
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
  authors: [{ name: "Dr. Alexander Bonakdar", url: "https://eyecarecenteroc.com" }],
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
        url: '/og-image.png',
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
    images: ['/og-image.png'],
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
  children: React.ReactNode; // Trigger rebuild
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
        {/* Skip Navigation Link for Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-eyecare-blue focus:text-white focus:px-4 focus:py-2 focus:rounded-md focus:shadow-lg focus:outline-none"
        >
          Skip to main content
        </a>

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T9MZNLMX"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <div id="main-content">
          {children}
        </div>



        {/* Vercel Analytics & Speed Insights for Core Web Vitals */}
        <Analytics />
        <SpeedInsights />

        {/* GHL Chat Widget - Delayed 10 seconds to prevent immediate distraction */}
        <Script
          id="ghl-widget-loader"
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="69163f6533e9926104e6ee9e"
          strategy="lazyOnload"
        />
        <Script
          id="ghl-widget-delay"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
  // Hide chat widget on initial load
  (function () {
    const style = document.createElement('style');
    style.id = 'ghl-widget-hide';
    style.textContent = '[data-widget-id="69163f6533e9926104e6ee9e"] { display: none !important; }';
    document.head.appendChild(style);

    // Show after 30 seconds
    setTimeout(function () {
      const hideStyle = document.getElementById('ghl-widget-hide');
      if (hideStyle) {
        hideStyle.remove();
      }
    }, 30000);
  })();
`,
          }}
        />

        {/* Google Tag Manager */}
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
  (function (w, d, s, l, i) {
    w[l] = w[l] || []; w[l].push({
      'gtm.start':
        new Date().getTime(), event: 'gtm.js'
    }); var f = d.getElementsByTagName(s)[0],
      j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
        'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
  })(window, document, 'script', 'dataLayer', 'GTM-T9MZNLMX');
`,
          }}
        />

        {/* Microsoft Clarity */}
        <Script
          id="clarity-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
  (function (c, l, a, r, i, t, y) {
    c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };
    t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i;
    y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
  })(window, document, "clarity", "script", "ucchukvv3r");
`
          }}
        />
        <CookieConsent />

        {/* Google Analytics */}
        <Script
          id="google-analytics-gtag"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-2KDTQ0HX77"
        />
        <Script
          id="google-analytics-inline"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'G-2KDTQ0HX77');
`,
          }}
        />

        {/* Meta Pixel Code */}
        <Script
          id="meta-pixel-inline"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
!function (f, b, e, v, n, t, s) {
  if (f.fbq) return; n = f.fbq = function () {
    n.callMethod ?
      n.callMethod.apply(n, arguments) : n.queue.push(arguments)
  };
  if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
  n.queue = []; t = b.createElement(e); t.async = !0;
  t.src = v; s = b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t, s)
}(window, document, 'script',
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
