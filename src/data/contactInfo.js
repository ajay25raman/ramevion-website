/**
 * RAMEVION Technologies - Contact, Configuration, and Local Operations
 * 
 * NOTICE FOR OWNER:
 * Replace placeholder values with verified business contact details prior to public launch.
 * Real location is regional/remote across India. No fake local branches (e.g. Patna or other cities) are invented.
 */

export const contactInfo = {
  companyName: 'RAMEVION Technologies',
  tagline: 'Engineering the Future.',
  visionStatement: 'Born in a Village. Built for the World.',
  missionStatement: 'To help people and organizations access thoughtful, practical digital solutions through clear communication, responsible engineering, and customer-focused problem solving.',
  primaryCtaText: 'Discuss Your Project',

  // Official contact channels
  email: {
    primary: 'contact@ramevion.com',
    isPlaceholder: true,
    note: 'Official business inbox (Configurable placeholder — update before launch)'
  },
  phone: {
    display: '+91 [To be configured]',
    value: '',
    isPlaceholder: true,
    note: 'Direct project enquiry hotline'
  },
  location: {
    country: 'India',
    display: 'Regional Roots • Global Outlook (All-India Remote Operations)',
    isPlaceholder: false,
    note: 'Operating virtually and regionally across India. Physical office registration will be published post-incorporation.'
  },
  workingHours: {
    display: 'Monday – Saturday: 9:00 AM – 6:00 PM IST',
    note: 'Initial consultations scheduled upon request'
  },

  // Backend form submission integration
  // When empty, the Contact page provides a direct, pre-filled "Draft in Email Client" mailto trigger and one-click email copy.
  // To receive form submissions straight to your inbox without client email apps:
  // e.g. Formspree ('https://formspree.io/f/your_form_id') or Web3Forms ('https://api.web3forms.com/submit')
  formEndpoint: '',

  inclusivityStatement: 'We welcome conversations from village-based entrepreneurs, local shops, growing enterprises, community organizations, and prospective partners across India and worldwide.'
};
