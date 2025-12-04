# PRD: Clinical Atlas Image Integration & Wills Eye Manual Expansion

## 1. Executive Summary
**Objective:** Enhance the "Conditions" section of the EyeCare Center of Orange County website by integrating high-quality clinical images ("Atlas Images") and ensuring comprehensive coverage of all Wills Eye Manual diagnoses.
**Goals:**
*   **SEO Dominance:** Leverage unique clinical imagery and detailed metadata to rank for specific long-tail medical queries (e.g., "posterior subcapsular cataract image").
*   **User Experience:** Provide a "high-end," mobile-responsive visual learning experience for patients.
*   **Authority:** Establish the site as a comprehensive medical resource by covering all Wills Eye Manual conditions.

## 2. Content Strategy & Data Architecture

### 2.1. Wills Eye Manual Completeness Audit
*   **Goal:** Ensure every condition in the Wills Eye Manual is represented on the site.
*   **Action:** Compare current `data/conditions-full.ts` against the full Wills Eye Manual list.
*   **Gap Filling:** Create new condition pages for missing diagnoses.

### 2.2. Intelligent Image Mapping (The "Fallback" Logic)
We will implement a hierarchical mapping system to handle the granularity of clinical images vs. patient-friendly pages.

*   **Direct Match:** If we have a page for "Posterior Polar Cataract" and an image named `posterior-polar-cataract.jpg`, they match 1:1.
*   **Parent Fallback:** If we have an image for "Posterior Polar Cataract" but *no specific page* for it, the image must automatically map to the **"Cataract"** (Parent) page.
*   **Metadata Enrichment:**
    *   **Title:** "Posterior Polar Cataract" (Specific)
    *   **Alt Text:** "Clinical view of posterior polar cataract showing opacity on the back surface of the lens."
    *   **Context:** Displayed under a "Types of Cataracts" or "Clinical Examples" section on the parent page.

### 2.3. Data Schema Update
Update the `Condition` interface in `lib/schema/types.ts` to support galleries:

```typescript
interface ClinicalImage {
  url: string;
  title: string;          // e.g., "Posterior Polar Cataract"
  alt: string;            // SEO optimized description
  description?: string;   // Patient-friendly explanation
  category?: string;      // e.g., "Severe", "Post-Op", "Diagram"
}

interface Condition {
  // ... existing fields
  galleryImages?: ClinicalImage[];
}
```

## 3. UI/UX Design Requirements

### 3.1. Aesthetic Guidelines
*   **Style:** "High-End Medical," Clean, Trustworthy.
*   **Visuals:** Glassmorphism effects, subtle drop shadows, rounded corners (Apple-esque).
*   **Mobile Experience:** Touch-optimized swipeable carousel. **Critical:** No layout shifts or tiny tap targets.

### 3.2. The "Clinical Gallery" Component
A new React component `ClinicalGallery.tsx` will be created.

*   **Thumbnail Strip / Carousel:**
    *   **Desktop:** A sleek grid or horizontal strip of high-res thumbnails.
    *   **Mobile:** A smooth horizontal scroll (carousel) with "snap" physics.
*   **Lightbox (Full Screen View):**
    *   Clicking an image opens a full-screen modal.
    *   Black/Dark dimmed background for focus.
    *   High-resolution image zoom.
    *   **Caption/Metadata overlay:** Shows the specific diagnosis name (e.g., "Posterior Polar Cataract") to educate the patient.

## 4. Technical Implementation Plan

### Phase 1: Data Preparation (Scripting)
1.  **Move Images:** Move `atlas_images/` to `public/images/atlas/`.
2.  **Mapping Script:** Write a Python script (`scripts/map_atlas_images.py`) to:
    *   Scan all images.
    *   Fuzzy match filenames against Condition Names and Keywords.
    *   Generate a `data/image-map.json` linking images to Condition Slugs.
    *   *Crucial:* Implement the "Parent Fallback" logic here.

### Phase 2: Component Development
1.  Build `ClinicalGallery` component using Tailwind CSS and Framer Motion (for smooth animations).
2.  Integrate `fslightbox-react` or similar for the full-screen experience.

### Phase 3: Page Integration
1.  Update `app/conditions/[condition-slug]/page.tsx`.
2.  Inject the `ClinicalGallery` component into the page layout (likely after the "Overview" or "Symptoms" section).
3.  Pass the mapped images to the component.

### Phase 4: SEO Optimization
1.  **Schema Markup:** Add `ImageObject` schema to the page's JSON-LD.
2.  **Sitemap:** Ensure images are included in the `sitemap.xml` (image sitemap extension).

## 5. Success Metrics
*   **Coverage:** % of Wills Eye Manual conditions present on the site.
*   **Visual Density:** % of condition pages with at least 1 clinical image.
*   **Engagement:** Increase in "Time on Page" for condition pages.
*   **Traffic:** Increase in organic traffic from Google Images.
