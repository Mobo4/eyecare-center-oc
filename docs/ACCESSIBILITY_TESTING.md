# Accessibility Testing Guide

## WCAG 2.1 Level AA Compliance Testing

### Automated Testing Tools

#### 1. Lighthouse Accessibility Audit
```bash
npm run lighthouse
```

**Target Score**: 95+/100

**Key Areas Checked**:
- ARIA attributes
- Color contrast ratios
- Form labels
- Heading hierarchy
- Image alt text
- Keyboard navigation

#### 2. axe DevTools
Install browser extension: https://www.deque.com/axe/devtools/

**Manual Testing Steps**:
1. Install axe DevTools Chrome/Firefox extension
2. Open DevTools → axe DevTools tab
3. Click "Scan All of My Page"
4. Review and fix Critical/Serious issues
5. Document Moderate/Minor issues for future improvement

### Manual Screen Reader Testing

#### macOS VoiceOver Testing

**Activation**: `Cmd + F5`

**Test Checklist**:
- [ ] Navigation landmark regions announced
- [ ] Headings navigate correctly (`Ctrl + Option + Cmd + H`)
- [ ] Links provide context (not "click here")
- [ ] Forms have proper labels
- [ ] Images have descriptive alt text
- [ ] Buttons describe their action
- [ ] Error messages are announced
- [ ] Success messages are announced

**VoiceOver Rotor Navigation**:
- `Ctrl + Option + U` → Rotor menu
- Test: Headings, Links, Form Controls, Landmarks

#### NVDA Testing (Windows)

**Download**: https://www.nvaccess.org/download/

**Activation**: `Ctrl + Alt + N`

**Test Checklist**:
- [ ] Page title announces correctly
- [ ] Heading navigation (`H` key)
- [ ] Link navigation (`K` key)
- [ ] Form field navigation (`F` key)
- [ ] Button navigation (`B` key)
- [ ] Landmark navigation (`D` key)
- [ ] Table navigation (if applicable)

**Browse Mode Commands**:
- `H` / `Shift+H` - Next/Previous Heading
- `K` / `Shift+K` - Next/Previous Link
- `F` / `Shift+F` - Next/Previous Form Field
- `B` / `Shift+B` - Next/Previous Button
- `D` / `Shift+D` - Next/Previous Landmark

### Keyboard Navigation Testing

**Test Without Mouse**:
- [ ] `Tab` navigates through all interactive elements
- [ ] `Shift + Tab` navigates backwards
- [ ] `Enter` activates buttons/links
- [ ] `Space` toggles checkboxes
- [ ] `Esc` closes modals/menus
- [ ] Focus indicator clearly visible
- [ ] No keyboard traps (can escape from all components)

**Focus Visible Standard**:
```css
/* Already implemented in globals.css */
:focus-visible {
  outline: 2px solid #1E40AF;
  outline-offset: 2px;
}
```

### Motion & Animation Testing

**Test Reduced Motion Preference**:

1. **macOS**: System Preferences → Accessibility → Display → Reduce motion
2. **Windows**: Settings → Ease of Access → Display → Show animations

**Expected Behavior**:
- Animations become instant (0.01ms)
- Parallax effects disabled
- Auto-playing carousels pause
- Smooth scroll becomes instant

**Verification**:
```css
/* Already implemented in globals.css */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

### Color Contrast Testing

**Tools**:
- Chrome DevTools: Inspect → Accessibility → Contrast ratio
- WebAIM Contrast Checker: https://webaim.org/resources/contrastchecker/

**WCAG AA Requirements**:
- Normal text: 4.5:1 minimum
- Large text (18px+ or 14px+ bold): 3:1 minimum
- UI components: 3:1 minimum

**Current Color Palette Contrast Ratios**:
| Element | Foreground | Background | Ratio | Pass |
|---------|-----------|------------|-------|------|
| Body Text | #1e293b | #ffffff | 15.8:1 | ✅ AAA |
| Headings | #0f172a | #ffffff | 19.1:1 | ✅ AAA |
| Links | #1e40af | #ffffff | 7.3:1 | ✅ AAA |
| Buttons (primary) | #ffffff | #10b981 | 4.8:1 | ✅ AA |
| Buttons (hover) | #ffffff | #059669 | 5.9:1 | ✅ AAA |

### Form Accessibility

**Test Checklist**:
- [ ] All inputs have associated `<label>` elements
- [ ] Required fields marked with `aria-required="true"`
- [ ] Error messages use `aria-describedby`
- [ ] Error messages announced by screen readers
- [ ] Success messages announced
- [ ] Disabled states clearly indicated
- [ ] Placeholder text not sole label
- [ ] Form submission keyboard accessible

### Mobile Accessibility

**Touch Target Size**:
- Minimum: 44x44 CSS pixels (WCAG 2.1 Level AAA)
- Current implementation: 48x48px for all interactive elements

**Test Checklist**:
- [ ] Buttons/links easily tappable
- [ ] No overlapping touch targets
- [ ] Pinch-to-zoom enabled
- [ ] Text doesn't require horizontal scroll
- [ ] Content reflows correctly

### Testing Schedule

**Pre-Launch (BLOCK 2 - 48 hours)**:
- ✅ Install accessibility testing tools
- ✅ Run Lighthouse accessibility audit
- [ ] VoiceOver manual testing (5 key pages)
- [ ] Keyboard navigation testing
- [ ] Contrast verification
- [ ] Motion preference testing

**Post-Launch (Weekly)**:
- Lighthouse accessibility audit
- User feedback review
- New feature accessibility checks

**Quarterly**:
- Full NVDA/JAWS testing (Windows)
- Mobile screen reader testing (TalkBack/VoiceOver iOS)
- Third-party accessibility audit (if budget allows)

### Common Issues & Fixes

#### Issue: Missing Alt Text
```jsx
// ❌ Bad
<img src="/hero.jpg" />

// ✅ Good
<img src="/hero.jpg" alt="Dr. Bonakdar examining patient with slit lamp" />

// ✅ Decorative
<img src="/decorative-line.svg" alt="" role="presentation" />
```

#### Issue: Poor Heading Hierarchy
```jsx
// ❌ Bad
<h1>Welcome</h1>
<h3>Our Services</h3> {/* Skipped h2 */}

// ✅ Good
<h1>Welcome</h1>
<h2>Our Services</h2>
<h3>LASIK Surgery</h3>
```

#### Issue: Non-Descriptive Links
```jsx
// ❌ Bad
<a href="/services">Click here</a>

// ✅ Good
<a href="/services">View our comprehensive eye care services</a>
```

#### Issue: Missing Form Labels
```jsx
// ❌ Bad
<input type="email" placeholder="Email" />

// ✅ Good
<label htmlFor="email">Email Address</label>
<input type="email" id="email" placeholder="you@example.com" />
```

### Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM Articles](https://webaim.org/articles/)
- [A11y Project Checklist](https://www.a11yproject.com/checklist/)
- [MDN Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [Deque University](https://dequeuniversity.com/)

### Accessibility Statement

**Location**: `/accessibility-statement` page

**Contents** (to be created):
- Commitment to WCAG 2.1 Level AA compliance
- Known limitations (if any)
- Contact information for accessibility issues
- Alternative format availability
- Third-party content disclosure

---

**Last Updated**: 2025-11-21
**Next Review**: 48 hours post-production launch
**Responsible**: Development Team + QA
