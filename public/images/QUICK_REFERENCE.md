# Quick Reference Guide - Image Paths & Usage

**Last Updated:** November 21, 2025

---

## Hero Backgrounds (Priority Loading)

```tsx
// Use for: Above-fold hero sections, landing pages
// Loading: priority={true}, sizes="100vw"

"/images/hero/hero-background-modern-eyecare-orange-county.png"
Alt: "Modern eyecare facility in Orange County with advanced diagnostic equipment and comfortable patient consultation areas"

"/images/hero/hero-background-optometry-clinic-california.png"
Alt: "Professional optometry clinic in California featuring comprehensive eye care services and experienced eye doctors"

"/images/hero/hero-background-vision-center-oc.png"
Alt: "Vision center in Orange County offering specialized eye care treatments including LASIK, keratoconus management, and dry eye therapy"
```

---

## Trust Signal Badges (Lazy Loading)

```tsx
// Use for: Statistics section, social proof, homepage badges
// Loading: loading="lazy", width={300}, height={300}

"/images/trust-signals/patients-treated-10000-eyecare-center-orange-county.png"
Alt: "Over 10,000 patients successfully treated at EyeCare Center of Orange County since 1990"
Display: "10,000+ Patients Treated"

"/images/trust-signals/experience-35-years-optometry-california.png"
Alt: "35 years of professional optometry experience serving Orange County and California communities"
Display: "35 Years Experience"

"/images/trust-signals/five-star-rating-google-reviews-eyecare.png"
Alt: "5-star Google reviews from satisfied patients at EyeCare Center of Orange County"
Display: "5-Star Google Rating"
```

---

## Service & Treatment Images (Lazy Loading)

```tsx
// Use for: Service cards, treatment pages, specialty services
// Loading: loading="lazy", responsive sizes

"/images/services/lasik-laser-eye-surgery-orange-county.png"
Service: LASIK Surgery
Alt: "LASIK laser eye surgery consultation at EyeCare Center Orange County - bladefree vision correction"

"/images/services/orthokeratology-overnight-vision-correction.png"
Service: Orthokeratology (Ortho-K)
Alt: "Orthokeratology overnight vision correction lenses for myopia control and nearsightedness treatment"

"/images/services/scleral-contact-lenses-keratoconus.png"
Service: Scleral Contact Lenses
Alt: "Custom scleral contact lenses for keratoconus and irregular cornea treatment at EyeCare Center OC"

"/images/services/corneal-crosslinking-keratoconus-treatment.png"
Service: Corneal Crosslinking (CXL)
Alt: "Corneal crosslinking procedure for keratoconus treatment - strengthening cornea to halt disease progression"

"/images/services/dry-eye-treatment-therapy-orange-county.png"
Service: Dry Eye Treatment
Alt: "Comprehensive dry eye treatment and therapy at Orange County eye care center with advanced diagnostic technology"

"/images/services/dry-eye-management-advanced-treatment.jpeg"
Service: Advanced Dry Eye Management
Alt: "Advanced dry eye management with IPL therapy and meibomian gland expression for chronic dry eye relief"

"/images/services/keratoconus-specialist-treatment-oc.png"
Service: Keratoconus Specialist
Alt: "Keratoconus specialist in Orange County providing comprehensive treatment including scleral lenses and crosslinking"

"/images/services/eyecare-professional-consultation-ai-generated.jpeg"
Service: Professional Consultation
Alt: "Professional eyecare consultation with experienced optometrist discussing vision correction options"
Note: AI-generated image

"/images/services/optometry-patient-care-ai-generated.jpeg"
Service: Patient Care
Alt: "Compassionate optometry patient care with advanced diagnostic equipment and personalized treatment plans"
Note: AI-generated image
```

---

## Copy-Paste Code Templates

### Hero Background
```tsx
<Image
  src="/images/hero/hero-background-modern-eyecare-orange-county.png"
  alt="Modern eyecare facility in Orange County with advanced diagnostic equipment"
  title="EyeCare Center of Orange County | Modern Optometry"
  fill
  priority
  quality={90}
  className="object-cover"
  sizes="100vw"
/>
```

### Trust Badge
```tsx
<Image
  src="/images/trust-signals/patients-treated-10000-eyecare-center-orange-county.png"
  alt="Over 10,000 patients treated at EyeCare Center Orange County"
  title="10,000+ Patients Treated | Trusted Since 1990"
  width={300}
  height={300}
  loading="lazy"
  quality={85}
/>
```

### Service Card
```tsx
<Image
  src="/images/services/lasik-laser-eye-surgery-orange-county.png"
  alt="LASIK laser eye surgery at EyeCare Center Orange County"
  title="LASIK Surgery Orange County | Bladefree Vision Correction"
  width={800}
  height={450}
  loading="lazy"
  quality={85}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
```

---

## File Naming Pattern Reference

```
Format: {category}-{description}-{keywords}-{location}.{ext}

Examples:
✅ hero-background-modern-eyecare-orange-county.png
✅ patients-treated-10000-eyecare-center-orange-county.png
✅ lasik-laser-eye-surgery-orange-county.png

❌ Hero Background 1.png
❌ 10k patients_treated.png
❌ Lasik.png
```

---

## Alt Text Guidelines

- **Length:** 100-125 characters optimal
- **Include:** What's shown + context + location
- **Avoid:** "Image of", "Picture of"
- **Keywords:** Natural inclusion, not stuffing

**Good Examples:**
✅ "Modern eyecare facility in Orange County with advanced diagnostic equipment and comfortable patient consultation areas"
✅ "LASIK laser eye surgery consultation at EyeCare Center Orange County - bladefree vision correction"

**Bad Examples:**
❌ "Image of eyecare center"
❌ "LASIK Orange County OC California eye surgery laser vision correction bladefree" (keyword stuffing)

---

## Loading Strategy Quick Reference

| Image Type | Priority | Loading | Sizes |
|------------|----------|---------|-------|
| Hero backgrounds | `true` | eager | `100vw` |
| Trust signals | `false` | lazy | Fixed width |
| Service cards | `false` | lazy | Responsive |
| Gallery images | `false` | lazy | Responsive |

---

## Common Sizes Configuration

```tsx
// Full viewport width (hero)
sizes="100vw"

// Responsive grid (3 columns)
sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

// Two column layout
sizes="(max-width: 768px) 100vw, 50vw"

// Fixed width (badges)
width={300} height={300}
```

---

## Optimization Checklist

Quick checklist for every image implementation:

- [ ] Import `Image` from `'next/image'`
- [ ] Use correct path from `/images/` directory
- [ ] Add descriptive alt text (100-125 chars)
- [ ] Add title attribute with brand + keywords
- [ ] Set priority for above-fold images
- [ ] Use lazy loading for below-fold images
- [ ] Configure responsive sizes
- [ ] Set appropriate quality (90 hero, 85 general)
- [ ] Add CSS classes for styling
- [ ] Test on mobile/tablet/desktop

---

## Next Steps Reminder

1. **Convert to AVIF format** - 88% file size reduction
2. **Measure dimensions** - Add exact width/height
3. **Generate blur placeholders** - Progressive loading
4. **Update components** - Replace old image references
5. **Run Lighthouse** - Verify improvements

---

## Documentation Files

📄 **IMAGE_METADATA.md** - Complete metadata for all images
📄 **NEXTJS_IMAGE_USAGE_GUIDE.md** - Implementation examples & patterns
📄 **ORGANIZATION_SUMMARY.md** - Full project summary
📄 **QUICK_REFERENCE.md** - This file

---

**For detailed implementation examples, see:** `NEXTJS_IMAGE_USAGE_GUIDE.md`
**For complete metadata, see:** `IMAGE_METADATA.md`
**For project summary, see:** `ORGANIZATION_SUMMARY.md`
