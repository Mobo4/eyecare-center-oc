# Task List: Website Enhancement Project

## Phase 1: Critical Items (Week 1)

### Task 1.1: Create OpenGraph Image
- [ ] Design 1200x630px OG image
- [ ] Include: Logo, clinic name, phone number
- [ ] Save as `/public/og-image.jpg`
- [ ] Update layout.tsx reference
- **Estimated Time:** 2 hours
- **Priority:** P0 (Critical)

### Task 1.2: Add Clinic Photos
- [ ] Source 3-5 professional clinic photos
- [ ] Optimize images (WebP, compress)
- [ ] Create `/public/images/clinic/` directory
- [ ] Add images to About page
- [ ] Add images to homepage
- [ ] Implement Next.js Image component
- [ ] Add proper alt text
- **Estimated Time:** 4 hours
- **Priority:** P0 (Critical)

### Task 1.3: Add Doctor/Staff Photos
- [ ] Source professional headshots
- [ ] Optimize images
- [ ] Create `/public/images/doctors/` directory
- [ ] Add to About page
- [ ] Add doctor bio section
- [ ] Consider adding to homepage hero
- **Estimated Time:** 3 hours
- **Priority:** P0 (Critical)

### Task 1.4: Expand SEO Keywords
- [ ] Research additional keywords (20-30 for root)
- [ ] Add location-specific keywords
- [ ] Add condition-specific keywords
- [ ] Update `app/layout.tsx` keywords array
- [ ] Document keyword strategy
- **Estimated Time:** 3 hours
- **Priority:** P0 (Critical)

### Task 1.5: Implement Structured Data
- [ ] Create `lib/schema.ts` utility file
- [ ] Add MedicalBusiness schema (homepage)
- [ ] Add LocalBusiness schema
- [ ] Test with Google Rich Results Test
- [ ] Add to layout.tsx
- **Estimated Time:** 4 hours
- **Priority:** P0 (Critical)

## Phase 2: High Priority (Week 2)

### Task 2.1: Contact Form Backend
- [ ] Create `app/api/contact/route.ts`
- [ ] Set up email service (SendGrid/Resend)
- [ ] Add form validation
- [ ] Add spam protection
- [ ] Add success/error handling
- [ ] Update contact form component
- [ ] Test form submission
- **Estimated Time:** 6 hours
- **Priority:** P1 (High)

### Task 2.2: Image Component Implementation
- [ ] Audit all image usage
- [ ] Replace with Next.js Image component
- [ ] Add responsive image sizes
- [ ] Implement lazy loading
- [ ] Add proper alt text everywhere
- [ ] Test image optimization
- **Estimated Time:** 5 hours
- **Priority:** P1 (High)

### Task 2.3: Add Equipment/Technology Photos
- [ ] Source photos of diagnostic equipment
- [ ] Optimize images
- [ ] Create `/public/images/equipment/` directory
- [ ] Add to About page
- [ ] Add to Services sections
- **Estimated Time:** 3 hours
- **Priority:** P1 (High)

### Task 2.4: Page-Level SEO Enhancement
- [ ] Add keywords array to all page metadata
- [ ] Optimize meta descriptions (150-160 chars)
- [ ] Add canonical URLs to all pages
- [ ] Verify H1 tags on all pages
- [ ] Add breadcrumb schema
- **Estimated Time:** 6 hours
- **Priority:** P1 (High)

## Phase 3: Medium Priority (Week 3)

### Task 3.1: Add Patient Testimonials
- [ ] Source testimonials with photos
- [ ] Create testimonials component
- [ ] Add to homepage
- [ ] Add to About page
- [ ] Optimize testimonial images
- **Estimated Time:** 4 hours
- **Priority:** P2 (Medium)

### Task 3.2: Content Expansion
- [ ] Write/expand doctor bios
- [ ] Create FAQ section
- [ ] Enhance service descriptions
- [ ] Add more detailed condition descriptions
- **Estimated Time:** 6 hours
- **Priority:** P2 (Medium)

### Task 3.3: Visual Enhancements
- [ ] Add image galleries
- [ ] Improve visual hierarchy
- [ ] Add more visual interest to hero sections
- [ ] Enhance color scheme usage
- **Estimated Time:** 4 hours
- **Priority:** P2 (Medium)

## Phase 4: Nice to Have (Week 4+)

### Task 4.1: Advanced Features
- [ ] Add blog section (if needed)
- [ ] Add video content (if available)
- [ ] Add interactive elements
- [ ] Add appointment booking integration
- **Estimated Time:** 8+ hours
- **Priority:** P3 (Low)

### Task 4.2: Performance Optimization
- [ ] Image compression audit
- [ ] Code splitting improvements
- [ ] Bundle optimization
- [ ] Core Web Vitals optimization
- **Estimated Time:** 4 hours
- **Priority:** P3 (Low)

### Task 4.3: Code Cleanup
- [ ] Remove unused `page_animated.tsx`
- [ ] Clean up unused components
- [ ] Add error boundaries
- [ ] Improve TypeScript types
- **Estimated Time:** 3 hours
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

