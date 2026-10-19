export const projectsData = [
  {
    id: 'local-business-website',
    title: 'Local Business Showcase & Catalog',
    category: 'Web Solutions',
    type: 'Concept Project',
    tagline: 'Empowering local retail and service providers with an accessible online storefront.',
    featured: true,
    description: 'A responsive, high-performance website architecture designed for regional merchants to showcase daily inventories, operating hours, and direct inquiry channels without costly subscription fees.',
    problem: 'Local shop owners and artisanal producers often struggle with complex e-commerce platforms that charge steep commissions and require high technical maintenance. Most customers simply need a fast, mobile-friendly way to see current stock, verify location, and send direct WhatsApp or phone inquiries.',
    solution: 'A lightweight static-first web catalog with zero-latency search, localized language toggles, interactive map directions, and direct customer contact hooks, deployable at minimal hosting cost.',
    technologies: ['React', 'Tailwind CSS', 'Vite', 'Lucide Icons', 'Web Share API'],
    highlights: [
      'Loads in under 1 second on low-bandwidth mobile connections',
      'Accessible color scheme complying with WCAG 2.1 AA standards',
      'Zero-database static product catalog updateable via simple spreadsheets',
      'One-tap local calling and messaging integration'
    ],
    demoInterface: {
      accentColor: '#3B82F6',
      badgeText: 'Retail & Commerce Concept',
      features: ['Live Item Filtering', 'Instant WhatsApp Ordering', 'Store Hours Widget', 'Multi-Language Ready']
    }
  },
  {
    id: 'education-management-app',
    title: 'Rural & Regional School Management App',
    category: 'Mobile Concepts',
    type: 'Concept Project',
    tagline: 'Bridging communication between teachers, parents, and community schools.',
    featured: true,
    description: 'A mobile-first application concept built to track student attendance, share homework notifications, and facilitate parent-teacher communication in regions with intermittent network connectivity.',
    problem: 'Community schools and rural coaching centers frequently depend on lost paper notices and chaotic messaging groups. Parents with varying degrees of smartphone literacy miss critical academic dates and fee announcements.',
    solution: 'A clear, high-contrast mobile interface with audio notification support, offline data caching for teachers in classrooms with spotty signals, and simplified attendance roll calls.',
    technologies: ['React', 'Progressive Web App (PWA)', 'IndexedDB', 'Tailwind CSS'],
    highlights: [
      'Offline-first architecture: attendance synchronizes automatically when network restores',
      'Simple iconographic navigation for multilingual and first-time smartphone users',
      'Direct SMS and push broadcast capability for critical school announcements',
      'Role-based views for Headmasters, Teachers, and Guardians'
    ],
    demoInterface: {
      accentColor: '#10B981',
      badgeText: 'Education Concept',
      features: ['1-Tap Attendance', 'Notice Board', 'Offline Sync Engine', 'SMS Notification Bridge']
    }
  },
  {
    id: 'inventory-dashboard',
    title: 'Small Business Inventory & Stock Tracker',
    category: 'Business Tools',
    type: 'Concept Project',
    tagline: 'Streamlining stock movements and alert thresholds for growing distributors.',
    featured: true,
    description: 'A streamlined web dashboard concept allowing small warehouse operators and trade distributors to monitor stock levels, receive low-inventory alerts, and generate printable packing slips.',
    problem: 'Small trading businesses lose thousands of rupees annually due to stockouts and overstocking because they rely on fragmented notebooks or complicated ERPs designed for multinational conglomerates.',
    solution: 'A focused, browser-based management dashboard emphasizing fast barcode/SKU entry, automatic minimum-level warnings, and clear supplier purchase order histories.',
    technologies: ['React', 'Tailwind CSS', 'Chart.js / Canvas', 'Local Storage', 'Lucide Icons'],
    highlights: [
      'Keyboard-optimized fast entry mode for rapid checkout and stock counting',
      'Automated visual warning tags for goods reaching critical threshold levels',
      'One-click export to clean CSV and PDF formats for tax and audit compliance',
      'Clean tabular data views with multi-column sorting and filtering'
    ],
    demoInterface: {
      accentColor: '#F59E0B',
      badgeText: 'Enterprise Workflow Concept',
      features: ['SKU Barcode Helper', 'Threshold Warning System', 'One-Click PDF Invoicing', 'Supplier Directory']
    }
  },
  {
    id: 'appointment-booking-platform',
    title: 'Healthcare & Clinic Appointment Platform',
    category: 'Web Solutions',
    type: 'Concept Project',
    tagline: 'Eliminating waiting-room chaos with structured token queues.',
    featured: true,
    description: 'An accessible booking system concept designed for regional clinics, diagnostic labs, and professional consultants to organize patient appointments and live token queues.',
    problem: 'Patients traveling from distant villages to sub-district health clinics often endure 4 to 6 hours in overcrowded waiting halls without knowing when the doctor will attend to them.',
    solution: 'A transparent digital token booking system with real-time queue status displays that patients can check on their mobile phones before leaving home.',
    technologies: ['React', 'Tailwind CSS', 'Vite', 'WebSockets Ready', 'Lucide Icons'],
    highlights: [
      'Live token countdown showing estimated arrival time and current serving number',
      'Doctor schedule management with holiday and emergency slot locks',
      'No complex password required: simple phone number verification',
      'High-contrast waiting room TV display mode'
    ],
    demoInterface: {
      accentColor: '#06B6D4',
      badgeText: 'Healthcare Workflow Concept',
      features: ['Live Queue Token View', 'Doctor Slot Manager', 'Instant SMS Confirmation', 'TV Lobby Mode']
    }
  },
  {
    id: 'rural-producer-directory',
    title: 'Agri-Producer & Artisan Cooperative Directory',
    category: 'Business Tools',
    type: 'Concept Project',
    tagline: 'Connecting village producers directly to bulk buyers and urban markets.',
    featured: false,
    description: 'A platform concept engineered for farmer-producer groups (FPOs) and craft clusters to present verified harvest calendars, product quality grades, and collective delivery logistics.',
    problem: 'Smallholder farmers and rural artisans receive only a fraction of their produce’s true value because they lack direct digital visibility to wholesale markets and institutional purchasers.',
    solution: 'A verified cooperative directory displaying seasonal produce availability, organic certifications, cooperative leadership contacts, and bulk freight options.',
    technologies: ['React', 'Tailwind CSS', 'Vite', 'Responsive Grid', 'Lucide Icons'],
    highlights: [
      'Seasonal harvest forecasting calendar with batch status tracking',
      'Inspection report and laboratory certification document viewer',
      'Direct contact linkage to cooperative representatives without middlemen',
      'Optimized for rapid browsing on mobile networks'
    ],
    demoInterface: {
      accentColor: '#8B5CF6',
      badgeText: 'Cooperative Network Concept',
      features: ['Harvest Calendar', 'Producer Profiles', 'Bulk Inquiry Generator', 'Logistic Route Maps']
    }
  }
];

export const projectCategories = ['All', 'Web Solutions', 'Mobile Concepts', 'Business Tools'];
