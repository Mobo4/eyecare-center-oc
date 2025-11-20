# Task List: Website Enhancement Project

## Phase 1: Critical Items (Week 1)

### Task 1.1: Create OpenGraph Image
- [ ] **Awaiting Asset:** Design 1200x630px OG image
- [ ] **Awaiting Asset:** Save as `/public/og-image.jpg`
- [x] Update layout.tsx reference
- **Priority:** P0 (Critical)

### Task 1.2: Add Clinic Photos
- [ ] **Awaiting Assets:** Source 3-5 professional clinic photos
- [x] Add main clinic photo to homepage
- [ ] Add images to About page
- [x] Implement Next.js Image component
- **Priority:** P0 (Critical)

### Task 1.3: Add Doctor/Staff Photos
- [ ] **Awaiting Assets:** Source professional headshots
- [x] Add Dr. Bonakdar's photo to About page
- [ ] Add doctor bio section
- **Priority:** P0 (Critical)

### Task 1.4: Expand SEO Keywords
- [x] Research and add additional keywords
- [x] Update `app/layout.tsx` keywords array
- **Priority:** P0 (Critical)

### Task 1.5: Implement Structured Data
- [x] Update `lib/schema.ts` utility file
- [x] Add MedicalBusiness schema to homepage
- [x] Add LocalBusiness schema with accurate data
- **Priority:** P0 (Critical)

## Phase 2: High Priority (Week 2)

### Task 2.1: Contact Form Backend
- [x] Integrate form with GoHighLevel CRM
- [x] Remove unused API route `app/api/contact/route.ts`
- **Priority:** P1 (High)

### Task 2.2: Image Component Implementation
- [x] Audit all image usage
- [x] Confirmed site uses Next.js Image component
- **Priority:** P1 (High)

### Task 2.3: Add Equipment/Technology Photos
- [ ] **Awaiting Assets:** Source photos of diagnostic equipment
- [ ] Add to About page or new "Technology" section
- **Priority:** P1 (High)

### Task 2.4: Page-Level SEO Enhancement
- [x] Add keywords array to all page metadata
- [x] Optimize meta descriptions
- [x] Add canonical URLs to all pages
- [x] Add breadcrumb schema
- **Priority:** P1 (High)

## Phase 3: Medium Priority (Week 3)

### Task 3.1: Add Patient Testimonials
- [x] Create testimonials component
- [x] Add to homepage
- [x] Add to About page
- [ ] **Awaiting Assets:** Add testimonial images
- **Priority:** P2 (Medium)

### Task 3.2: Content Expansion
- [ ] Write/expand doctor bios
- [x] Create FAQ section and add to homepage
- [ ] Enhance service descriptions
- **Priority:** P2 (Medium)

### Task 3.3: Visual Enhancements
- [ ] **Awaiting Assets:** Add image galleries
- [x] Improve visual hierarchy on homepage
- [x] Enhance hero section design
- **Priority:** P2 (Medium)

## Phase 4: Nice to Have (Week 4+)

### Task 4.1: Advanced Features
- [ ] Add blog section (if needed)
- [ ] Add video content (if available)
- [ ] Add appointment booking integration
- **Priority:** P3 (Low)

### Task 4.2: Performance Optimization
- [x] Confirmed automatic image optimization (AVIF/WebP)
- [ ] Code splitting improvements
- [ ] Bundle optimization
- **Priority:** P3 (Low)

### Task 4.3: Code Cleanup
- [x] Remove unused `page_animated.tsx`
- [x] Clean up 8 unused components
- [ ] Add error boundaries
- [ ] Improve TypeScript types
- **Priority:** P3 (Low)

## Summary

### Total Estimated Time
- **Phase 1 (Critical):** 16 hours
- **Phase 2 (High):** 20 hours
- **Phase 3 (Medium):** 14 hours
- **Phase 4 (Nice to Have):** 15+ hours
- **Total:** 65+ hours

### Priority Breakdown
- **P0 (Critical):** 5 tasks, 16 hours
- **P1 (High):** 4 tasks, 20 hours
- **P2 (Medium):** 3 tasks, 14 hours
- **P3 (Low):** 3 tasks, 15+ hours

### Dependencies
- Task 1.2 depends on image assets being available
- Task 1.3 depends on doctor photos being available
- Task 2.1 requires email service API key
- Task 2.2 should be done after all images are added
- Task 2.4 can be done in parallel with other tasks

## Notes
- Image assets need to be sourced/provided by client
- Some tasks can be done in parallel
- Testing should be done after each phase
- Performance monitoring should be continuous

