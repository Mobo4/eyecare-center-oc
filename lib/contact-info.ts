/**
 * Centralized Contact Information
 *
 * UPDATE PHONE NUMBERS HERE AND THEY CHANGE ACROSS ALL PAGES
 *
 * All phone links automatically include the 'callrail-phone' class for call tracking.
 * This ensures CallRail can dynamically swap numbers for attribution tracking.
 */

export const CONTACT_INFO = {
  /**
   * Primary phone number for all CTAs, headers, and general contact
   * Used across: Home, About, Services, Conditions, City pages, Footer, Navigation
   *
   * IMPORTANT: This is the CallRail tracking number
   * CallRail will dynamically swap this number based on traffic source
   * All phone links have 'callrail-phone' class for tracking
   */
  primaryPhone: {
    display: '(949) 658-2372',
    href: 'tel:+19496582372',
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
    street: '801 North Tustin Ave #404',
    city: 'Santa Ana',
    state: 'CA',
    zip: '92705',
    full: '801 North Tustin Ave #404, Santa Ana, CA 92705',
  },

  /**
   * Business hours
   */
  hours: {
    weekdays: 'Monday - Friday: 9:00 AM - 6:00 PM',
    saturday: 'Saturday: 9:00 AM - 2:00 PM',
    sunday: 'Sunday: Closed',
  },
};

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
