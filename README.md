# EyeCare Center of Orange County

Complete Next.js 16 website for EyeCare Center of Orange County featuring comprehensive medical content for 190 eye conditions and 65 Orange County cities.

## 🌟 Features

- **190 Eye Conditions**: Comprehensive medical content with symptoms, treatments, and SEO optimization
- **65 Orange County Cities**: Demographic data and localized content
- **Enhanced Graphics**: Particle animations and subtle background patterns
- **SEO Optimized**: Meta tags, OpenGraph, and structured data for all pages
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Professional UI**: Gradient backgrounds, Lucide icons, smooth animations

## 📊 Content Overview

### Eye Conditions
- Corneal Diseases (Keratoconus, etc.)
- Retinal Diseases (Macular Degeneration, etc.)
- Vision Impairments (Cataracts, etc.)
- Chronic Conditions (Dry Eye, Glaucoma, etc.)
- Systemic Disease Effects
- Eye Trauma
- Rare Genetic/Metabolic Conditions
- Inflammatory/Autoimmune Conditions
- Optic Nerve Disorders

### Cities Covered
All major Orange County cities including Irvine, Newport Beach, Costa Mesa, Huntington Beach, Santa Ana, Anaheim, and 59 more.

## 🚀 Quick Start

### Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
eyecare-center-oc/
├── app/                  # Next.js app directory
│   ├── page.tsx         # Homepage
│   ├── conditions/      # Condition pages
│   └── cities/          # City pages
├── components/          # React components
│   ├── CleanHero.tsx   # Hero section with particles
│   ├── SimpleParticles.tsx  # Particle animation
│   └── ui/             # UI components
├── data/               # Content data
│   ├── conditions-full.ts   # 190 conditions
│   └── cities.ts       # 65 cities
├── public/             # Static assets
└── lib/                # Utilities
```

## 🎨 Visual Features

### Animated Background
- 200 particles with variable opacity (20-60%)
- Random movement patterns
- Variable sizes (1-3px)
- Subtle dot pattern background (40px grid)

### Design System
- **Primary Blue**: `#1e40af` (eyecare-blue)
- **Light Blue**: `#3b82f6` (eyecare-light-blue)
- **Lighter Blue**: `#60a5fa` (eyecare-lighter-blue)

## 🔧 Technologies

- **Framework**: Next.js 16 with Turbopack
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: @tsparticles/react
- **TypeScript**: Full type safety

## 📦 Deployment

### Vercel (Recommended)

1. Connect GitHub repository to Vercel
2. Configure environment variables (if any)
3. Deploy from `main` branch for production
4. Use `development` branch for preview deployments

### Manual Deployment

```bash
# Build
npm run build

# The output will be in the .next directory
# Deploy .next directory to your hosting provider
```

## 🔗 Links

- **GitHub**: https://github.com/Mobo4/eyecare-center-oc
- **Local Dev**: http://localhost:8500

## 📝 Content Management

### Adding New Conditions
Edit `data/conditions-full.ts` and add new condition objects:

```typescript
{
  name: "Condition Name",
  slug: "condition-slug",
  category: "Category",
  description: "150-200 word description...",
  symptoms: ["Symptom 1", "Symptom 2", ...],
  treatments: ["Treatment 1", "Treatment 2", ...],
  seoTitle: "SEO Title",
  seoDescription: "SEO Description with phone (949) 364-0008"
}
```

### Adding New Cities
Edit `data/cities.ts` and add new city objects.

## 🎯 SEO Optimization

- All pages have unique meta titles and descriptions
- OpenGraph tags for social sharing
- Structured data for medical content
- Phone number: (949) 364-0008 included in SEO

## 📧 Contact

EyeCare Center of Orange County
Phone: (949) 364-0008

---

🤖 **Generated with [Claude Code](https://claude.com/claude-code)**

Co-Authored-By: Claude <noreply@anthropic.com>
