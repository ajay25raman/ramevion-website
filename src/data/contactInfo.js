/**
 * RAMEVION Technologies - Official Contact & Brand Configuration
 */

export const contactInfo = {
  companyName: 'RAMEVION Technologies',
  tagline: 'Engineering the Future.',
  visionStatement: 'Born in a Village. Built for the World.',
  missionStatement: 'To help people and organizations access thoughtful, practical digital solutions through clear communication, responsible engineering, and customer-focused problem solving.',
  primaryCtaText: 'Discuss Your Project',

  // Contact Person & Verified Channels
  contactPerson: {
    name: 'Raman Kumar',
    role: 'Lead & Contact Person'
  },
  phone: {
    raw: '9117719625',
    display: '+91 91177 19625',
    tel: 'tel:+919117719625',
    whatsappUrl: 'https://wa.me/919117719625?text=Hello%20Raman,%20I%20would%20like%20to%20discuss%20a%20project%20with%20RAMEVION%20Technologies.',
    note: 'Direct project enquiry and consultation phone line'
  },
  email: {
    primary: 'ajaykumar.dev25@gmail.com',
    mailto: 'mailto:ajaykumar.dev25@gmail.com',
    note: 'Primary business and project enquiry inbox'
  },
  location: {
    area: 'Maker, Saran, Bihar – 841215, India',
    display: 'Maker, Saran, Bihar – 841215, India',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Maker%2C+Saran%2C+Bihar+841215',
    state: 'Bihar',
    district: 'Saran',
    locality: 'Maker',
    pincode: '841215',
    country: 'India',
    note: 'Service location & regional base in Maker, Saran, Bihar. Consultations and client projects delivered remotely and on-site as arranged. (No unverified corporate office claimed).'
  },
  workingHours: {
    display: 'Monday – Saturday: 9:00 AM – 6:00 PM IST',
    note: 'Inquiries answered promptly; consultation calls scheduled upon request'
  },

  // Backend form submission endpoint
  // Read from environment variable or configure directly (e.g. Formspree / Web3Forms)
  // When empty, the Contact page provides direct, verified client communication via WhatsApp, mailto, and clipboard copy.
  formEndpoint: (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_CONTACT_FORM_ENDPOINT) || '',

  inclusivityStatement: 'We welcome conversations from village-based entrepreneurs, local shops, growing enterprises, community organizations, and prospective partners across Bihar, India, and worldwide.'
};
