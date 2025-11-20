# Tracking & Analytics Configuration

## Overview
This document details all tracking, analytics, and conversion tracking implementations for EyeCare Center of Orange County.

---

## 📞 Phone Tracking - CallRail

### Configuration
- **Provider**: CallRail
- **Company ID**: 479856773
- **Tracking Pool ID**: 6582372c2e4a73e54ea1
- **Script Location**: `app/layout.tsx` (lines 180-185)

### Implementation
```javascript
<Script
  id="callrail-swap"
  strategy="afterInteractive"
  src="https://cdn.callrail.com/companies/479856773/6582372c2e4a73e54ea1/12/swap.js"
/>
```

### How It Works
1. CallRail script loads after page becomes interactive
2. Automatically swaps phone numbers with tracking numbers based on visitor source
3. Tracks all phone calls and attributes them to marketing channels

### Phone Numbers
- **Primary Display**: (949) 364-0008
- **Secondary Display**: (714) 558-1182
- **Tel Links**: 
  - `tel:+19493640008`
  - `tel:+17145581182`

### CSS Class for Tracking
Add `callrail-phone` class to any phone number element:
```html
<a href="tel:+19493640008" className="callrail-phone">
  (949) 364-0008
</a>
```

### Locations Implemented
- ✅ Header (Navigation.tsx)
- ✅ Footer (Footer.tsx)
- ✅ Mobile Sticky Button (Footer.tsx)
- ✅ Contact Page (contact/page.tsx)

---

## 📊 Google Analytics 4

### Configuration
- **Property ID**: G-CT7WS4307Z
- **Script Location**: `app/layout.tsx` (lines 142-158)

### Implementation
```javascript
// Load gtag.js
<Script
  id="google-analytics-gtag"
  strategy="afterInteractive"
  src="https://www.googletagmanager.com/gtag/js?id=G-CT7WS4307Z"
/>

// Initialize GA4
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
```

### Tracked Events
- Page views (automatic)
- User engagement (automatic)
- Scroll depth (automatic)
- Outbound link clicks (automatic)

### Custom Events to Consider
```javascript
// Appointment button clicks
gtag('event', 'appointment_click', {
  'event_category': 'engagement',
  'event_label': 'Book Appointment CTA'
});

// Phone number clicks
gtag('event', 'phone_click', {
  'event_category': 'engagement',
  'event_label': 'Phone Number Click'
});

// Form submissions (GHL handles this)
gtag('event', 'form_submission', {
  'event_category': 'conversion',
  'event_label': 'Contact Form'
});
```

---

## 📘 Meta (Facebook) Pixel

### Configuration
- **Pixel ID**: 395306154557054
- **Script Location**: `app/layout.tsx` (lines 160-178)

### Implementation
```javascript
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
```

### Standard Events
- `PageView` - Tracked automatically on every page
- `Lead` - Track form submissions
- `Contact` - Track when contact info is clicked
- `Schedule` - Track appointment booking clicks

### Custom Conversion Events
```javascript
// Form submission
fbq('track', 'Lead', {
  content_name: 'Contact Form',
  content_category: 'Contact'
});

// Phone click
fbq('track', 'Contact', {
  content_name: 'Phone Click',
  content_category: 'Phone'
});

// Appointment booking
fbq('track', 'Schedule', {
  content_name: 'Book Appointment',
  content_category: 'Appointment'
});
```

---

## 💬 GoHighLevel (GHL) Integration

### Configuration
- **Widget ID**: 69163f6533e9926104e6ee9e
- **Contact Form ID**: NyAQq2ovWZij4fSauNmu
- **Script Location**: `app/layout.tsx` (lines 132-139)

### Chat Widget Implementation
```javascript
<Script
  id="ghl-widget-loader"
  src="https://widgets.leadconnectorhq.com/loader.js"
  data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
  data-widget-id="69163f6533e9926104e6ee9e"
  strategy="afterInteractive"
/>
```

### Contact Form Implementation
```javascript
// In contact/page.tsx
<GhlFormComponent 
  formId="NyAQq2ovWZij4fSauNmu"
  containerId="ghl-form-container"
/>
```

### Features
- ✅ Live chat widget on all pages
- ✅ Embedded contact form on contact page
- ✅ Lead capture and CRM integration
- ✅ Email notifications
- ✅ SMS notifications
- ✅ Automated follow-ups

---

## 🔍 SEO & Search Console

### Google Search Console
- **Verification Tag**: (Add if available)
- **Property URL**: https://eyecarecenteroc.com

### Ahrefs Verification
- **Verification Code**: LShXYY/0KA2USu/Xq4sV7A
- **Location**: `app/layout.tsx` metadata

### Sitemap
- **URL**: https://eyecarecenteroc.com/sitemap.xml
- **Generated**: Yes (`app/sitemap.ts`)
- **Updates**: Automatic on build

---

## 📱 Social Media Integration

### OpenGraph Tags
```typescript
openGraph: {
  type: 'website',
  locale: 'en_US',
  url: 'https://eyecarecenteroc.com',
  siteName: 'EyeCare Center of Orange County',
  title: 'EyeCare Center of Orange County | Expert Eye Care & LASIK Surgery',
  description: 'Comprehensive eye care services in Orange County.',
  images: [{
    url: '/og-image.jpg',
    width: 1200,
    height: 630,
    alt: 'EyeCare Center of Orange County',
  }],
}
```

### Twitter Cards
```typescript
twitter: {
  card: 'summary_large_image',
  title: 'EyeCare Center of Orange County',
  description: 'Comprehensive eye care services in Orange County',
  images: ['/og-image.jpg'],
}
```

---

## 🎯 Conversion Tracking Setup

### Goals to Track

1. **Phone Calls** (CallRail)
   - Track all phone clicks
   - Attribute to traffic source
   - Record call duration and outcome

2. **Form Submissions** (GHL)
   - Contact form submissions
   - Appointment requests
   - Email inquiries

3. **Chat Conversations** (GHL)
   - Chat widget interactions
   - Live chat sessions
   - Automated responses

4. **Page Engagement** (GA4)
   - Time on page
   - Scroll depth
   - Bounce rate
   - Exit pages

### Event Tracking Code Examples

#### Track CTA Button Clicks
```typescript
<button
  onClick={() => {
    // Google Analytics
    if (typeof gtag !== 'undefined') {
      gtag('event', 'cta_click', {
        'event_category': 'engagement',
        'event_label': 'Book Appointment Button'
      });
    }
    
    // Facebook Pixel
    if (typeof fbq !== 'undefined') {
      fbq('track', 'Schedule', {
        content_name: 'Book Appointment CTA'
      });
    }
  }}
>
  Book Appointment
</button>
```

#### Track Outbound Links
```typescript
<a
  href="https://external-site.com"
  onClick={() => {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'outbound_link', {
        'event_category': 'outbound',
        'event_label': 'External Link'
      });
    }
  }}
>
  External Link
</a>
```

---

## 🧪 Testing & Verification

### Facebook Pixel Testing
1. Install Facebook Pixel Helper extension
2. Visit site and verify pixel fires
3. Check Events Manager for data
4. Test conversion events

**Tool**: [Facebook Pixel Helper](https://chrome.google.com/webstore/detail/facebook-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc)

### Google Analytics Testing
1. Use Google Analytics Debugger
2. Check Real-Time reports
3. Verify page views and events
4. Test custom events

**Tool**: [Google Analytics Debugger](https://chrome.google.com/webstore/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna)

### CallRail Testing
1. Visit site from different sources
2. Check phone number swaps
3. Make test calls
4. Verify call tracking in dashboard

**Dashboard**: https://app.callrail.com/

### Social Media Preview Testing
1. **Facebook**: https://developers.facebook.com/tools/debug/
2. **Twitter**: https://cards-dev.twitter.com/validator
3. **LinkedIn**: https://www.linkedin.com/post-inspector/

---

## 📈 Performance Monitoring

### Core Web Vitals
- Monitor through Google Search Console
- Track in Google Analytics
- Use PageSpeed Insights

### Loading Strategy
All tracking scripts use `strategy="afterInteractive"`:
- Scripts load after page becomes interactive
- Doesn't block initial page render
- Optimizes Core Web Vitals scores

---

## 🔒 Privacy & Compliance

### GDPR Considerations
- Cookie consent may be required for EU visitors
- Consider implementing a cookie banner
- Provide opt-out mechanisms

### CCPA Considerations
- California privacy law compliance
- Provide privacy policy link
- Allow users to opt out of tracking

### Privacy Policy
- **Location**: `/privacy-policy`
- **Updated**: Recently created
- **Includes**: Data collection, cookies, third-party services

---

## 📝 Next Steps

### Recommended Additions

1. **Google Tag Manager**
   - Centralize all tracking codes
   - Easier tag management
   - Better testing capabilities

2. **Hotjar or Microsoft Clarity**
   - Heatmaps
   - Session recordings
   - User behavior insights

3. **Custom Event Tracking**
   - Add more granular event tracking
   - Track specific user actions
   - Measure micro-conversions

4. **A/B Testing**
   - Test different CTAs
   - Optimize conversion rates
   - Data-driven design decisions

---

## 📞 Contact Information

**Clinic Phone Numbers**:
- Primary: (949) 364-0008
- Secondary: (714) 558-1182

**Website**: https://eyecarecenteroc.com

**Email**: eyecarecenteroc@gmail.com

---

*Last Updated: November 18, 2025*

