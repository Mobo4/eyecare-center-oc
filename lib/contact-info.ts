/**
 * Centralized Contact Information
 *
 * UPDATE PHONE NUMBERS HERE AND THEY CHANGE ACROSS ALL PAGES
 *
 * All phone links automatically include the 'callrail-phone' class for call tracking.
 * This ensures CallRail can dynamically swap numbers for attribution tracking.
 */

export const CONTACT_INFO = {
  name: 'Optometric Eyecare Center of Orange County',
  /**
   * Primary phone number for all CTAs, headers, and general contact
   * Used across: Home, About, Services, Conditions, City pages, Footer, Navigation
   *
   * IMPORTANT: This is the CallRail tracking number
   * CallRail will dynamically swap this number based on traffic source
   * All phone links have 'callrail-phone' class for tracking
   */
  primaryPhone: {
    display: '(949) 364-0008',
    href: 'tel:+19493640008',
  },

  /**
   * Secondary phone number (if needed for specific locations/services)
   * Currently not in use - keeping for future flexibility
   */
  secondaryPhone: {
    display: '(714) 558-1182',
    href: 'tel:+17145581182',
  },

  /**
   * Business email
   */
  email: {
    display: 'info@eyecarecenteroc.com',
    href: 'mailto:info@eyecarecenteroc.com',
  },

  /**
   * Physical address
   */
  address: {
    street: '801 N Tustin Ave # 404',
    city: 'Santa Ana',
    state: 'CA',
    zip: '92705',
    full: '801 N Tustin Ave # 404, Santa Ana, CA 92705',
  },

  /**
   * Business hours
   */
  hours: {
    weekdays: 'Monday - Friday: 9:00 AM - 6:00 PM',
    saturday: 'Saturday: 9:00 AM - 2:00 PM',
    sunday: 'Sunday: Closed',
  },

  /**
   * Geolocation for Schema and Maps
   */
  geo: {
    latitude: 33.758810,
    longitude: -117.836090,
    googleMapsUrl: "https://maps.app.goo.gl/your-link-here", // TODO: Update with real link
  },

  /**
   * Social Media Profiles for "sameAs" schema
   */
  social: {
    facebook: "https://www.facebook.com/EyeCareCenterOfOrangeCounty/",
    instagram: "https://www.instagram.com/eyecarecenteroc/",
    yelp: "https://www.yelp.com/biz/eyecare-center-of-orange-county-santa-ana",
    youtube: "https://www.youtube.com/@eyecarecenteroforangecount952",
  },

  /**
   * Payment Options
   */
  paymentAccepted: ["Cash", "Credit Card", "VSP", "Medical Insurance", "CareCredit"],
  currenciesAccepted: "USD",
  priceRange: "$$",

  /**
   * Opening Hours in Schema.org format
   */
  openingHoursSpecification: [
    {
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00"
    },
    {
      dayOfWeek: ["Saturday"],
      opens: "09:00",
      closes: "14:00"
    }
  ]
};

export const SERVICE_AREAS = [
  // Central Orange County
  "Santa Ana", "Tustin", "Orange", "Villa Park", "Garden Grove", "Westminster", "Fountain Valley", "North Tustin",

  // South Orange County
  "Irvine", "Newport Beach", "Costa Mesa", "Lake Forest", "Mission Viejo", "Laguna Hills", "Laguna Woods",
  "Aliso Viejo", "Laguna Beach", "Laguna Niguel", "Dana Point", "San Juan Capistrano", "San Clemente",
  "Rancho Santa Margarita", "Ladera Ranch", "Coto de Caza", "Las Flores",

  // North Orange County
  "Anaheim", "Fullerton", "Placentia", "Yorba Linda", "Brea", "La Habra", "Buena Park", "Cypress",
  "Stanton", "Los Alamitos", "Seal Beach", "La Palma", "Rossmoor", "Midway City", "Huntington Beach",

  // Nearby Cities (<30 miles)
  "Long Beach", "Cerritos", "Lakewood", "Artesia", "Bellflower", "Norwalk", "La Mirada", "Whittier",
  "La Habra Heights", "Diamond Bar", "Chino", "Chino Hills", "Corona"
];

/**
 * Helper function to get phone for specific page type
 * Currently all pages use primary phone for consistency
 *
 * @param pageType - Type of page requesting phone number
 * @returns Phone object with display and href properties
 */
export function getPhoneForPage(
  pageType: 'condition' | 'location' | 'service' | 'general' = 'general'
) {
  // All pages use primary phone for consistency
  // If you need different numbers per page type, customize this logic
  return CONTACT_INFO.primaryPhone;
}
