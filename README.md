# RAMEVION Technologies — Official Website

> **“Born in a Village. Built for the World.”**  
> *Engineering the Future.*

A production-quality, responsive, and accessible company website for **RAMEVION Technologies**, built with React 19, Vite, Tailwind CSS v4, React Router DOM, and Lucide React.

---

## 🚀 Quick Start

### 1. Run Development Server
```bash
npm run dev
```
The site will be live locally at `http://localhost:5173/`.

### 2. Run Linting
```bash
npm run lint
```

### 3. Production Build
```bash
npm run build
```
Compiled production assets will be output to the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 📁 Project Architecture

```
ramevion-website/
├── public/
│   ├── favicon.svg          # Custom SVG geometric brand mark
│   └── _redirects           # SPA route redirect rules for static hosting (Netlify/Cloudflare)
├── src/
│   ├── components/
│   │   ├── BrandMark.jsx       # Reusable SVG brand emblem
│   │   ├── Footer.jsx          # Global footer with vision, links, dynamic year
│   │   ├── Navbar.jsx          # Responsive navbar with mobile drawer
│   │   ├── PageContainer.jsx   # Consistent layout wrapper
│   │   ├── PageHero.jsx        # Reusable subpage hero with breadcrumbs
│   │   ├── ProcessStep.jsx     # 5-step process visual card
│   │   ├── ProjectCard.jsx     # Concept project showcase card
│   │   ├── ProjectModal.jsx    # Interactive concept architecture modal
│   │   ├── ScrollToTop.jsx     # Route change scroll reset
│   │   ├── SectionHeading.jsx  # Reusable section heading with badges
│   │   ├── SEOHead.jsx         # Dynamic document title & meta tags
│   │   └── ServiceCard.jsx     # Reusable service capability card
│   ├── data/
│   │   ├── contactInfo.js   # Centralized placeholders for verified company contact details
│   │   ├── process.js       # 5-step engineering methodology & philosophy
│   │   ├── projects.js      # Illustrative concept prototypes & categories
│   │   ├── services.js      # 6 core digital engineering services
│   │   └── values.js        # 8 foundational core operating values
│   ├── pages/
│   │   ├── Home.jsx         # Comprehensive home page (Sections A through I)
│   │   ├── About.jsx        # Story behind vision, mission, 8 values, philosophy
│   │   ├── Services.jsx     # Detailed breakdown of all 6 services + scenario selector
│   │   ├── Portfolio.jsx    # Showcase with category filtering & concept modal
│   │   ├── Contact.jsx      # Accessible inquiry form (prototype mode) & guide
│   │   └── NotFound.jsx     # Custom 404 page with navigation fallback
│   ├── App.css              # Keyframe animations
│   ├── App.jsx              # Main router configuration & layout
│   ├── index.css            # Tailwind CSS v4 tokens, design system, theme variables
│   └── main.jsx             # React 19 root entrypoint
├── index.html               # Meta tags, Open Graph, Google fonts
├── package.json
└── vite.config.js           # Vite configuration with @tailwindcss/vite and @vitejs/plugin-react
```

---

## ⚙️ Configuration Notes for Site Owner

Before deploying to public production:
1. **Business Contact Details**: Open [`src/data/contactInfo.js`](file:///Users/ajaykumar/ramevion-website/src/data/contactInfo.js) and replace the clearly identified placeholders with your verified email address, phone number, and physical office location once registered.
2. **Contact Form Backend**: In [`src/pages/Contact.jsx`](file:///Users/ajaykumar/ramevion-website/src/pages/Contact.jsx), connect `handlePrototypeSubmit` to your live form submission service (e.g. Formspree, Resend, or your custom API endpoint).

---

## 🌐 SPA Routing on Production Hosting

This project uses HTML5 pushState routing via React Router DOM. When deploying to:
- **Netlify / Cloudflare Pages**: Handled automatically by `public/_redirects`.
- **Vercel**: Add a `vercel.json` with a rewrite rule to `/index.html`.
- **Nginx**: Add `try_files $uri $uri/ /index.html;` to your site configuration block.
