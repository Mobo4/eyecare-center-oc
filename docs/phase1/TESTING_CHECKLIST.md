# Phase 1 Testing Checklist
## QA Validation & Quality Assurance

---

## Document Control

**Version:** 1.0
**Last Updated:** 2025-11-20
**QA Lead:** [QA Team Lead Name]
**Testing Phase:** Pre-Production Validation
**Sign-Off Required:** Yes

---

## Testing Overview

### Purpose
This checklist ensures comprehensive quality assurance for Phase 1 of the modern website redesign before production deployment.

### Scope
- Functional testing (all features work as intended)
- Accessibility testing (WCAG 2.1 Level AA compliance)
- Performance testing (Core Web Vitals, page load times)
- Cross-browser compatibility
- Mobile responsiveness
- SEO validation
- Security review

### Testing Timeline
- **Initial Testing:** 2-3 days (parallel with development)
- **Regression Testing:** 1 day (after bug fixes)
- **Sign-off:** 1 day (final approval)
- **Total:** 4-5 days

---

## 1. Functional Testing

### 1.1 Homepage

#### Hero Section
- [ ] Headline displays correctly (no truncation, proper formatting)
- [ ] Subtitle displays correctly
- [ ] Primary CTA button visible and clickable
- [ ] Secondary CTA button (if present) visible and clickable
- [ ] Animated background renders without flickering
- [ ] Background animation respects `prefers-reduced-motion`
- [ ] Mobile layout: text readable, CTAs accessible
- [ ] Tablet layout: proper spacing, no text overlap
- [ ] Desktop layout: asymmetric design renders correctly

**Pass Criteria:** All elements render correctly across all viewport sizes

---

#### Trust Signals Component
- [ ] All 4 trust badges visible
- [ ] Numbers count up animation triggers on scroll into view
- [ ] Numbers display correctly (30+, 10,000+, 4.9★, 190+)
- [ ] Animation respects `prefers-reduced-motion` (static fallback)
- [ ] Glassmorphism effect renders (transparent background, blur)
- [ ] Icons display correctly (no missing assets)
- [ ] Mobile: vertical stack, no horizontal overflow
- [ ] Tablet: 2-column grid layout
- [ ] Desktop: 4-column horizontal layout

**Pass Criteria:** All statistics animate smoothly, layout responsive

---

#### Comprehensive Eye Care Section
- [ ] Service cards render in grid layout
- [ ] Service icons display correctly (no missing images)
- [ ] Hover effect: card lifts, shadow intensifies
- [ ] Icon scale effect on hover (subtle, not jarring)
- [ ] Service titles and descriptions readable
- [ ] "Learn More" links functional
- [ ] Progressive disclosure: initially shows 6 services
- [ ] "Show More" button reveals additional services
- [ ] "Show Less" button collapses back to 6 services
- [ ] Mobile: single column layout
- [ ] Tablet: 2-column grid
- [ ] Desktop: 3 or 4-column grid

**Pass Criteria:** All services display correctly, interactions smooth

---

#### Why Choose Us Section
- [ ] Value proposition cards visible
- [ ] Staggered animation on scroll into view
- [ ] Icons render correctly
- [ ] Text readable, proper hierarchy (title, description)
- [ ] Stats (if present) display correctly
- [ ] Hover effects appropriate (subtle, not distracting)
- [ ] Mobile: single column layout
- [ ] Tablet: 2-column grid
- [ ] Desktop: 3 or 4-column grid

**Pass Criteria:** All propositions display, animations smooth

---

### 1.2 Navigation

#### Desktop Navigation
- [ ] Logo displays correctly, links to homepage
- [ ] All main menu items visible
- [ ] Hover states display correctly (color change, underline)
- [ ] Mega menu (if implemented) opens on hover/click
- [ ] Mega menu closes properly (click outside, Escape key)
- [ ] Phone number prominently displayed, clickable
- [ ] "Book Appointment" CTA visible, properly styled
- [ ] Sticky header: appears on scroll down, smooth transition
- [ ] Compact mode: header shrinks on scroll, maintains functionality

**Pass Criteria:** All navigation elements functional, no visual glitches

---

#### Mobile Navigation
- [ ] Hamburger menu icon visible, properly aligned
- [ ] Menu opens on tap (slide-in drawer animation)
- [ ] All menu items visible in mobile drawer
- [ ] Menu items tappable (48x48px minimum touch targets)
- [ ] Menu closes on item selection
- [ ] Menu closes on outside tap
- [ ] Menu closes on "X" button tap
- [ ] Focus trap: Tab cycles within menu when open
- [ ] Escape key closes menu (keyboard users)
- [ ] No horizontal scrolling in menu
- [ ] Phone number and CTA visible in mobile menu

**Pass Criteria:** Mobile navigation smooth, accessible, functional

---

### 1.3 Footer

- [ ] All footer links functional (no 404 errors)
- [ ] Social media icons display correctly
- [ ] Social media links open in new tab
- [ ] Contact information correct (phone, address)
- [ ] Copyright notice displays current year
- [ ] Accessibility statement link visible
- [ ] Privacy policy link functional
- [ ] Terms of service link functional
- [ ] Mobile: single column layout, readable
- [ ] Desktop: multi-column layout, organized

**Pass Criteria:** All footer elements functional and accessible

---

### 1.4 Forms (If Applicable in Phase 1)

#### Contact Form
- [ ] All fields display correctly (name, email, phone, message)
- [ ] Required field indicators visible (asterisks)
- [ ] Placeholder text helpful and clear
- [ ] Field labels properly associated (click label = focus field)
- [ ] Email field validates email format
- [ ] Phone field validates phone format (if applicable)
- [ ] Error messages display inline, clear instructions
- [ ] Success message displays after submission
- [ ] Form submission sends data correctly (test in staging)
- [ ] No console errors on submission
- [ ] Mobile: full-width inputs, easy to tap
- [ ] Keyboard navigation: Tab order logical

**Pass Criteria:** Form functional, validation clear, submission successful

---

### 1.5 Links & CTAs

#### Call-to-Action Buttons
- [ ] All CTA buttons visible and properly styled
- [ ] Hover states display correctly (color change, lift effect)
- [ ] Active states display correctly (pressed appearance)
- [ ] Focus states visible (keyboard navigation)
- [ ] All CTAs link to correct destinations
- [ ] External links open in new tab (if applicable)
- [ ] Phone number CTAs initiate calls on mobile
- [ ] No broken links (404 errors)

**Pass Criteria:** All CTAs functional, interactions smooth

---

## 2. Accessibility Testing (WCAG 2.1 Level AA)

### 2.1 Automated Testing

#### Tools Used
- [ ] axe DevTools browser extension
- [ ] Lighthouse accessibility audit
- [ ] WAVE browser extension

#### Test Results
- [ ] axe: 0 critical issues
- [ ] axe: 0 serious issues
- [ ] axe: < 5 moderate issues (with documented exceptions)
- [ ] Lighthouse: accessibility score ≥ 95
- [ ] WAVE: 0 errors, < 10 warnings

**Pass Criteria:** All automated tests pass with minimal warnings

---

### 2.2 Keyboard Navigation

#### Skip Navigation
- [ ] "Skip to main content" link appears on first Tab press
- [ ] Skip link focuses on main content when activated
- [ ] Skip link visually clear (not hidden)
- [ ] Skip link styled appropriately (brand colors, readable)

#### Tab Order
- [ ] Tab order is logical (left to right, top to bottom)
- [ ] All interactive elements reachable via Tab
- [ ] No keyboard traps (can always Tab out)
- [ ] Focus indicators visible on all interactive elements
- [ ] Focus indicators meet contrast requirements (3:1)

#### Keyboard Shortcuts
- [ ] Escape closes modals/menus
- [ ] Arrow keys navigate mega menu (if applicable)
- [ ] Space/Enter activate buttons
- [ ] Home key scrolls to top (if implemented)

**Pass Criteria:** Full keyboard navigation, no traps, clear focus

---

### 2.3 Screen Reader Testing

#### Tools
- [ ] NVDA (Windows) - Primary
- [ ] JAWS (Windows) - Secondary
- [ ] VoiceOver (macOS) - Tertiary
- [ ] TalkBack (Android) - Mobile

#### Test Scenarios
- [ ] Page title announced correctly
- [ ] Headings read in logical order (H1 → H2 → H3)
- [ ] Landmark regions announced (header, nav, main, footer)
- [ ] Links announce destination clearly
- [ ] Buttons announce action clearly
- [ ] Form labels read correctly
- [ ] Error messages announced (aria-live regions)
- [ ] Images have descriptive alt text
- [ ] Decorative images ignored (empty alt or aria-hidden)
- [ ] Dynamically added content announced (aria-live)

**Pass Criteria:** All content understandable via screen reader

---

### 2.4 Visual Accessibility

#### Color Contrast
- [ ] Body text: ≥ 4.5:1 contrast ratio (WCAG AA)
- [ ] Heading text: ≥ 4.5:1 contrast ratio
- [ ] Large text (18pt+): ≥ 3:1 contrast ratio
- [ ] Link text: ≥ 4.5:1 contrast ratio
- [ ] Button text: ≥ 4.5:1 contrast ratio
- [ ] Focus indicators: ≥ 3:1 contrast ratio
- [ ] Icons: ≥ 3:1 contrast ratio (non-text content)

**Tool:** WebAIM Contrast Checker, axe DevTools

#### Text Resizing
- [ ] Text scales to 200% without loss of content
- [ ] Text scales to 200% without horizontal scrolling
- [ ] Layout remains functional at 200% zoom
- [ ] No text overlap at 200% zoom

#### Color Usage
- [ ] No information conveyed by color alone
- [ ] Error states use icons + text (not just red color)
- [ ] Link underlines present (not just color difference)

**Pass Criteria:** All visual elements meet WCAG AA standards

---

### 2.5 Semantic HTML

- [ ] Proper heading hierarchy (single H1, logical H2-H6)
- [ ] Semantic elements used (`<header>`, `<nav>`, `<main>`, `<footer>`, `<article>`, `<section>`)
- [ ] Lists used for list content (`<ul>`, `<ol>`, `<li>`)
- [ ] Tables used only for tabular data (not layout)
- [ ] Forms use proper elements (`<label>`, `<fieldset>`, `<legend>`)
- [ ] ARIA attributes used correctly (not overused)
- [ ] Language attribute declared (`<html lang="en">`)

**Pass Criteria:** Valid HTML5, proper semantic structure

---

## 3. Performance Testing

### 3.1 Core Web Vitals

#### Lighthouse Audit (Desktop)
- [ ] Performance score: ≥ 90
- [ ] Accessibility score: ≥ 95
- [ ] Best Practices score: ≥ 95
- [ ] SEO score: 100

#### Lighthouse Audit (Mobile)
- [ ] Performance score: ≥ 85
- [ ] Accessibility score: ≥ 95
- [ ] Best Practices score: ≥ 95
- [ ] SEO score: 100

#### Core Web Vitals Metrics
- [ ] **LCP (Largest Contentful Paint):** < 2.5s (desktop), < 3.0s (mobile)
- [ ] **FID (First Input Delay):** < 100ms (desktop), < 100ms (mobile)
- [ ] **CLS (Cumulative Layout Shift):** < 0.1 (desktop), < 0.1 (mobile)
- [ ] **INP (Interaction to Next Paint):** < 200ms (desktop), < 200ms (mobile)

**Tool:** Google PageSpeed Insights, Lighthouse CI, WebPageTest

**Pass Criteria:** All Core Web Vitals in "Good" range (green)

---

### 3.2 Page Load Performance

#### Homepage Load Times
- [ ] First Contentful Paint (FCP): < 1.5s
- [ ] Speed Index: < 3.0s
- [ ] Time to Interactive (TTI): < 3.5s
- [ ] Total Blocking Time (TBT): < 300ms
- [ ] First Byte (TTFB): < 600ms

#### Network Performance
- [ ] Total page size: < 1MB (compressed)
- [ ] JavaScript bundle: < 200KB (compressed)
- [ ] CSS bundle: < 50KB (compressed)
- [ ] Image sizes: optimized (WebP/AVIF)
- [ ] Fonts: preloaded, subset if possible

**Tool:** Chrome DevTools Network tab, WebPageTest

**Pass Criteria:** All metrics within target ranges

---

### 3.3 Resource Optimization

#### Images
- [ ] All images compressed and optimized
- [ ] Responsive images with srcset
- [ ] Lazy loading implemented for below-fold images
- [ ] Modern formats used (WebP/AVIF) with fallbacks
- [ ] Alt text provided for all images
- [ ] Image dimensions specified (prevent CLS)

#### JavaScript
- [ ] No unused JavaScript (tree-shaking effective)
- [ ] Code splitting implemented
- [ ] Third-party scripts loaded asynchronously
- [ ] No blocking scripts in `<head>`
- [ ] Service worker implemented (if applicable)

#### CSS
- [ ] Unused CSS purged (Tailwind production build)
- [ ] Critical CSS inlined (if applicable)
- [ ] No render-blocking stylesheets

**Pass Criteria:** All resources optimized, no wasted bytes

---

## 4. Cross-Browser Compatibility

### 4.1 Desktop Browsers

#### Google Chrome (Latest)
- [ ] Homepage renders correctly
- [ ] All interactions functional
- [ ] Animations smooth
- [ ] No console errors

#### Mozilla Firefox (Latest)
- [ ] Homepage renders correctly
- [ ] All interactions functional
- [ ] Animations smooth
- [ ] No console errors

#### Safari (Latest macOS)
- [ ] Homepage renders correctly
- [ ] All interactions functional
- [ ] Animations smooth (webkit prefix if needed)
- [ ] No console errors

#### Microsoft Edge (Latest)
- [ ] Homepage renders correctly
- [ ] All interactions functional
- [ ] Animations smooth
- [ ] No console errors

**Pass Criteria:** Consistent experience across all browsers

---

### 4.2 Mobile Browsers

#### iOS Safari (iOS 15+)
- [ ] Homepage renders correctly
- [ ] Touch interactions responsive
- [ ] Animations smooth (60fps)
- [ ] No console errors
- [ ] Click-to-call functional
- [ ] Form inputs work (no keyboard issues)

#### Android Chrome (Android 10+)
- [ ] Homepage renders correctly
- [ ] Touch interactions responsive
- [ ] Animations smooth
- [ ] No console errors
- [ ] Click-to-call functional
- [ ] Form inputs work

#### Samsung Internet (Latest)
- [ ] Homepage renders correctly
- [ ] Touch interactions responsive
- [ ] Animations smooth
- [ ] No console errors

**Pass Criteria:** Consistent mobile experience, no critical bugs

---

### 4.3 Responsive Testing

#### Viewport Sizes
- [ ] **Mobile (320px):** iPhone SE, Galaxy Fold
- [ ] **Mobile (375px):** iPhone 12/13 Mini
- [ ] **Mobile (390px):** iPhone 13/14 Pro
- [ ] **Mobile (414px):** iPhone 11 Pro Max
- [ ] **Tablet (768px):** iPad
- [ ] **Tablet (834px):** iPad Air
- [ ] **Desktop (1024px):** Small laptop
- [ ] **Desktop (1280px):** Standard desktop
- [ ] **Desktop (1920px):** Large desktop

#### Responsive Checks
- [ ] No horizontal scrolling at any viewport
- [ ] Text readable without zooming
- [ ] Images scale proportionally
- [ ] Touch targets adequate size (48x48px minimum)
- [ ] Navigation accessible at all sizes
- [ ] CTAs visible and functional
- [ ] Forms usable on mobile (large inputs)

**Tool:** Chrome DevTools device emulation, BrowserStack

**Pass Criteria:** Flawless responsive behavior 320px - 1920px

---

## 5. SEO Validation

### 5.1 On-Page SEO

#### Meta Tags
- [ ] Page title present (50-60 characters)
- [ ] Page title includes primary keyword
- [ ] Meta description present (150-160 characters)
- [ ] Meta description compelling and keyword-rich
- [ ] Open Graph tags present (og:title, og:description, og:image)
- [ ] Twitter Card tags present
- [ ] Canonical URL specified
- [ ] Favicon present (multiple sizes)

#### Content SEO
- [ ] Single H1 per page with primary keyword
- [ ] Logical heading hierarchy (H1 → H2 → H3)
- [ ] Alt text for all images (descriptive, keyword-rich where appropriate)
- [ ] Internal links present (proper anchor text)
- [ ] No broken links (404 errors)
- [ ] URL structure clean and descriptive

**Tool:** Screaming Frog, Google Search Console, SEMrush

**Pass Criteria:** All on-page SEO elements optimized

---

### 5.2 Structured Data

#### Schema Markup
- [ ] LocalBusiness schema present
- [ ] MedicalBusiness schema present (if applicable)
- [ ] Organization schema present
- [ ] BreadcrumbList schema (if applicable)
- [ ] Review/Rating schema (if applicable)
- [ ] FAQ schema (if applicable)

#### Validation
- [ ] Schema validates in Google Rich Results Test
- [ ] No errors in structured data
- [ ] All required fields present
- [ ] Preview shows correctly in Rich Results Test

**Tool:** Google Rich Results Test, Schema.org Validator

**Pass Criteria:** Valid structured data, no errors

---

### 5.3 Technical SEO

- [ ] robots.txt present and correct
- [ ] sitemap.xml present and submitted to Search Console
- [ ] HTTPS enabled (SSL certificate valid)
- [ ] No mixed content warnings (HTTP resources on HTTPS page)
- [ ] Proper redirects (301 for permanent, 302 for temporary)
- [ ] Page speed optimized (Core Web Vitals green)
- [ ] Mobile-friendly (Google Mobile-Friendly Test passes)
- [ ] No duplicate content issues

**Tool:** Google Search Console, Screaming Frog, GTmetrix

**Pass Criteria:** Technical SEO checklist 100% complete

---

## 6. Security Review

### 6.1 Basic Security Checks

- [ ] HTTPS enforced (HTTP redirects to HTTPS)
- [ ] SSL certificate valid (not expired)
- [ ] No mixed content warnings
- [ ] Form submissions use HTTPS
- [ ] No sensitive data in URLs (passwords, tokens)
- [ ] No inline JavaScript (CSP-friendly)
- [ ] External links use rel="noopener noreferrer" (when appropriate)
- [ ] No hardcoded API keys or credentials in client code

**Pass Criteria:** No security vulnerabilities identified

---

### 6.2 Privacy & Compliance

- [ ] Privacy policy link present and functional
- [ ] Cookie consent banner (if cookies used)
- [ ] GDPR compliance (if applicable)
- [ ] CCPA compliance (if applicable)
- [ ] No tracking without consent
- [ ] Analytics anonymizes IP addresses (if applicable)

**Pass Criteria:** Privacy and compliance requirements met

---

## 7. Content Validation

### 7.1 Copy & Content

- [ ] No spelling errors
- [ ] No grammar errors
- [ ] No placeholder text ("Lorem ipsum", "Coming soon")
- [ ] All phone numbers correct (CallRail tracking number)
- [ ] All addresses correct
- [ ] All email addresses functional
- [ ] All social media links correct
- [ ] Tone and voice consistent (professional, friendly)
- [ ] Medical terminology accurate

**Tool:** Grammarly, Hemingway Editor, manual review

**Pass Criteria:** Professional, error-free content

---

### 7.2 Brand Consistency

- [ ] Logo correct and high-quality
- [ ] Brand colors consistent throughout
- [ ] Typography consistent (font families, sizes, weights)
- [ ] Imagery style consistent (photography vs. illustrations)
- [ ] Tone of voice consistent (CTAs, microcopy)
- [ ] Value propositions clear and compelling

**Pass Criteria:** Consistent brand experience

---

## 8. Analytics & Tracking

### 8.1 Google Analytics 4

- [ ] GA4 tracking code installed
- [ ] GA4 tracking code fires on page load
- [ ] Page views tracked correctly
- [ ] Custom events configured (CTA clicks, phone clicks, form submissions)
- [ ] Custom events firing correctly
- [ ] No tracking on admin/preview pages

**Tool:** Google Tag Assistant, GA4 DebugView

**Pass Criteria:** All analytics tracking functional

---

### 8.2 CallRail Phone Tracking

- [ ] CallRail tracking number displayed correctly
- [ ] CallRail script loaded correctly
- [ ] Call tracking working (test with real call if possible)
- [ ] Call source attribution working

**Pass Criteria:** Phone tracking operational

---

### 8.3 Heatmap & Session Recording

- [ ] Hotjar/Microsoft Clarity script installed (if applicable)
- [ ] Heatmaps recording correctly
- [ ] Session recordings capturing (sample rate appropriate)
- [ ] No PII captured in recordings
- [ ] Privacy policy updated with heatmap/recording disclosure

**Pass Criteria:** Heatmap and recording tools functional, privacy-compliant

---

## 9. User Acceptance Testing (UAT)

### 9.1 Stakeholder Review

- [ ] Client/Project Manager reviewed homepage
- [ ] Client approved design and layout
- [ ] Client approved content and copy
- [ ] Client tested on their devices (desktop, mobile)
- [ ] Client provided sign-off for deployment

**Pass Criteria:** Client approval obtained

---

### 9.2 Real User Testing (Optional)

- [ ] 5-10 users tested website (task-based scenarios)
- [ ] Users could complete primary tasks (find service, book appointment)
- [ ] Users provided positive feedback on design
- [ ] No critical usability issues identified
- [ ] Any issues documented and addressed

**Pass Criteria:** Positive user feedback, no blockers

---

## 10. Regression Testing (Post-Bug-Fix)

### 10.1 Re-Test Fixed Bugs

- [ ] All logged bugs re-tested and verified as fixed
- [ ] No new bugs introduced by fixes
- [ ] Critical flows re-tested end-to-end
- [ ] Performance re-tested (no regression)
- [ ] Accessibility re-tested (no new violations)

**Pass Criteria:** All bugs resolved, no regressions

---

## 11. Final Sign-Off

### 11.1 Pre-Deployment Checklist

- [ ] All functional tests passed
- [ ] All accessibility tests passed
- [ ] All performance tests passed
- [ ] All cross-browser tests passed
- [ ] All SEO validation passed
- [ ] All security checks passed
- [ ] All content validated
- [ ] All analytics/tracking functional
- [ ] Client sign-off obtained
- [ ] Deployment plan reviewed and approved

**Pass Criteria:** 100% checklist completion

---

### 11.2 Sign-Off Signatures

**QA Lead:**
- Name: ____________________________
- Date: ____________________________
- Signature: ________________________

**Project Manager:**
- Name: ____________________________
- Date: ____________________________
- Signature: ________________________

**Technical Architect:**
- Name: ____________________________
- Date: ____________________________
- Signature: ________________________

---

## 12. Known Issues & Exceptions

### Documented Issues (Non-Blocking)

| Issue ID | Description | Severity | Workaround | Planned Fix |
|----------|-------------|----------|------------|-------------|
| TBD-001 | [Example: Minor animation stutter on low-end Android] | Low | [None needed] | [Phase 2] |

**Note:** No critical or high-severity issues should remain for production deployment.

---

## 13. Testing Tools Reference

### Automated Testing
- **axe DevTools:** https://www.deque.com/axe/devtools/
- **Lighthouse:** Chrome DevTools → Lighthouse tab
- **WAVE:** https://wave.webaim.org/extension/

### Performance Testing
- **Google PageSpeed Insights:** https://pagespeed.web.dev/
- **WebPageTest:** https://www.webpagetest.org/
- **GTmetrix:** https://gtmetrix.com/

### Accessibility Testing
- **NVDA:** https://www.nvaccess.org/download/
- **WebAIM Contrast Checker:** https://webaim.org/resources/contrastchecker/
- **WCAG Checklist:** https://www.a11yproject.com/checklist/

### SEO Testing
- **Google Rich Results Test:** https://search.google.com/test/rich-results
- **Schema.org Validator:** https://validator.schema.org/
- **Google Search Console:** https://search.google.com/search-console/

### Browser Testing
- **BrowserStack:** https://www.browserstack.com/
- **Chrome DevTools:** Built-in Chrome browser
- **Safari Web Inspector:** Built-in Safari browser

---

## 14. Testing Timeline

### Week 1: Parallel Testing (During Development)
- Days 1-2: Functional testing
- Days 2-3: Accessibility testing
- Days 3-4: Performance testing
- Days 4-5: Cross-browser testing

### Week 2: Integration Testing
- Days 1-2: End-to-end testing
- Days 2-3: Regression testing (after bug fixes)
- Days 3-4: UAT with stakeholders
- Days 4-5: Final sign-off preparation

**Total Testing Duration:** 10 business days (can run parallel with development)

---

## 15. Bug Reporting Template

**For any bugs discovered during testing:**

```markdown
## Bug Report: [Bug ID]

**Title:** [Brief description]
**Severity:** [Critical / High / Medium / Low]
**Browser/Device:** [Chrome 120 / iPhone 14 Pro Safari / etc.]
**URL:** [Specific page where bug occurs]

**Steps to Reproduce:**
1. [Step 1]
2. [Step 2]
3. [Step 3]

**Expected Behavior:**
[What should happen]

**Actual Behavior:**
[What actually happens]

**Screenshot/Video:**
[Attach evidence]

**Console Errors:**
[Copy any console errors]

**Notes:**
[Additional context]

**Assigned To:** [Developer name]
**Due Date:** [Target fix date]
**Status:** [Open / In Progress / Fixed / Closed]
```

---

## Contact & Support

**QA Lead:** [Name] - [Email] - [Phone]
**Project Manager:** [Name] - [Email] - [Phone]
**Technical Lead:** [Name] - [Email] - [Phone]

**Slack Channel:** #eyecare-center-oc-qa
**Bug Tracking:** [Jira/GitHub Issues/Linear]

---

**🤖 Generated with [Claude Code](https://claude.com/claude-code)**

**Co-Authored-By:** Claude <noreply@anthropic.com>
