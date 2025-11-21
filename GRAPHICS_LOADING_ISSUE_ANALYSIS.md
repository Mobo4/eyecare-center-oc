# Graphics Loading Issue - Analysis & Investigation

**Issue**: Site shows graphics correctly on initial load, then reverts to showing no graphics after page hydration.

**Date**: November 20, 2025
**Status**: 🔍 Under Investigation
**Severity**: HIGH - Affects user experience

---

## 🎯 Problem Description

### Observed Behavior
1. **Initial Page Load**: ✅ Graphics, styles, and components display correctly
2. **Post-Hydration**: ❌ Graphics disappear, styles may break
3. **Result**: User sees broken/incomplete page

### Likely Root Cause
This is a **classic Next.js hydration mismatch** issue where:
- Server-side rendered HTML shows correctly initially
- Client-side React takes over and re-renders differently
- Mismatch causes React to throw away server HTML and re-render
- Graphics/styles disappear during this process

---

## 🔍 Technical Analysis

### Project Setup
- **Framework**: Next.js 15.x (App Router)
- **Styling**: Tailwind CSS
- **Fonts**: Google Fonts (Poppins, Playfair Display)
- **Third-party Scripts**:
  - GoHighLevel Chat Widget
  - Google Analytics
  - Meta Pixel
  - CallRail Phone Tracking

### Current Architecture

```
app/
├── layout.tsx (Root layout with fonts + scripts)
├── page.tsx (Homepage with components)
├── globals.css (Tailwind + custom animations)
└── components/
    ├── Hero.tsx ('use client' - client component)
    ├── Header.tsx
    ├── Footer.tsx
    └── [other components]
```

---

## 🚨 Potential Causes (Prioritized)

### 1. **Client-Side Script Interference** (HIGH PROBABILITY)
**Scripts that could cause issues**:
- CallRail Phone Tracking (modifies DOM for phone number swap)
- GoHighLevel Chat Widget (injects UI elements)
- Meta Pixel / Google Analytics (tracking scripts)

**Why**: These scripts run after page load and may:
- Modify DOM elements
- Change CSS classes
- Inject/remove elements
- Trigger re-renders

**Evidence**:
```tsx
// From layout.tsx line 196-201
<Script
  id="callrail-swap"
  strategy="afterInteractive"
  src="https://cdn.callrail.com/companies/479856773/6582372c2e4a73e54ea1/12/swap.js"
/>
```

CallRail is known to swap phone numbers in the DOM, which can trigger hydration mismatches.

### 2. **Hydration Mismatch from 'use client' Components** (MEDIUM PROBABILITY)
**Affected Components**:
- `Hero.tsx` (line 1: `'use client'`)
- Potentially other components using client-side features

**Why**: If server renders one thing and client expects different:
- Different timestamps
- Conditional rendering based on client-side state
- Browser-only APIs called during render

### 3. **CSS Animation Timing Issues** (LOW-MEDIUM PROBABILITY)
**Custom animations defined**:
```css
/* globals.css - blob animation */
.animate-blob {
  animation: blob 7s infinite;
}
```

**Why**: If CSS isn't fully loaded before hydration, animations may break.

### 4. **Font Loading Race Condition** (LOW PROBABILITY)
**Google Fonts Configuration**:
```tsx
const poppins = Poppins({
  display: 'swap',  // <-- This could cause FOIT/FOUT
});
```

**Why**: `display: 'swap'` means text is invisible until font loads, then swaps.

---

## 🔬 Diagnostic Steps

### Step 1: Check Browser Console
**Look for**:
- ❌ Hydration errors: "Text content does not match server-rendered HTML"
- ❌ Script errors from CallRail, GHL, etc.
- ❌ Failed resource loads (CSS, fonts, images)
- ❌ React warnings about DOM mismatches

**How**: Open browser DevTools (F12) → Console tab

### Step 2: Check Network Tab
**Look for**:
- 📊 Failed requests (404, 500 errors)
- ⏱️ Slow loading resources blocking hydration
- 🔄 Resource load order issues

### Step 3: Disable Third-Party Scripts
**Test by temporarily commenting out**:
```tsx
// Temporarily disable to test
// <Script id="callrail-swap" ... />
// <Script id="ghl-widget-loader" ... />
```

Reload and see if graphics persist.

### Step 4: Check for Client-Only Rendering Issues
**In Hero.tsx and other 'use client' components**:
- Look for `window`, `document`, `localStorage` usage during render
- Check for Date/Time that might differ between server/client
- Verify conditional rendering doesn't differ server vs client

---

## 🛠️ Recommended Fixes (In Order of Priority)

### Fix 1: Suppress Hydration Warnings (Quick Test)
**Purpose**: Identify if hydration mismatch is the issue

```tsx
// Add to components with potential mismatches
<div suppressHydrationWarning>
  {/* Content that might differ */}
</div>
```

**⚠️ This is diagnostic only - not a permanent fix!**

### Fix 2: Delay Third-Party Scripts
**Change script loading strategy**:
```tsx
// Instead of "afterInteractive", use "lazyOnload"
<Script
  id="callrail-swap"
  strategy="lazyOnload"  // <-- Changed
  src="https://cdn.callrail.com/companies/479856773/6582372c2e4a73e54ea1/12/swap.js"
/>
```

### Fix 3: Use Dynamic Imports for Client Components
**For components that must be client-side only**:
```tsx
import dynamic from 'next/dynamic';

const Hero = dynamic(() => import('@/components/Hero'), {
  ssr: false,  // Disable server-side rendering
  loading: () => <div>Loading...</div>
});
```

### Fix 4: Fix Font Display Strategy
**Change from 'swap' to 'optional'**:
```tsx
const poppins = Poppins({
  display: 'optional',  // Prevents FOIT/FOUT
  // ...
});
```

### Fix 5: Add CSS Critical Path
**Ensure Tailwind loads before hydration**:
```tsx
// In layout.tsx <head>
<link rel="preload" href="/globals.css" as="style" />
```

---

## 🧪 Testing Protocol

### Test Sequence
1. **Baseline Test**: Load page, observe graphics disappear
2. **Console Check**: Document all errors/warnings
3. **Disable Scripts**: Comment out each script individually
4. **Test After Each Change**: Verify graphics persist
5. **Re-enable One by One**: Find the culprit script

### Success Criteria
✅ Graphics remain visible after page fully loads
✅ No hydration errors in console
✅ No layout shifts or flashing
✅ All functionality works (phone tracking, chat, analytics)

---

## 📋 Action Items for Claude Code & Cursor Collaboration

### Claude Code Tasks (Strategic)
- [ ] Analyze console errors from browser
- [ ] Create test version with scripts disabled
- [ ] Document findings in this file
- [ ] Propose comprehensive fix strategy

### Cursor Tasks (Implementation)
- [ ] Make code changes to test fixes
- [ ] Test each fix incrementally
- [ ] Verify graphics persist
- [ ] Commit working fix

### Shared Tasks
- [ ] Monitor browser console together
- [ ] Test different scenarios (cold load, refresh, navigation)
- [ ] Document final solution

---

## 🔧 Implementation Plan

### Phase 1: Diagnosis (Now)
1. Open site in browser
2. Open DevTools console
3. Document all errors/warnings
4. Take screenshots of before/after

### Phase 2: Isolation (Next)
1. Comment out CallRail script
2. Test - do graphics persist?
3. If yes, CallRail is the culprit
4. If no, try next script

### Phase 3: Fix (After Diagnosis)
1. Implement appropriate fix from list above
2. Test thoroughly
3. Re-enable scripts with proper loading strategy
4. Verify all functionality works

### Phase 4: Verification (Final)
1. Test on multiple browsers
2. Test on mobile devices
3. Verify analytics/tracking still works
4. Deploy to production

---

## 📊 Current Status

**Investigation Phase**: ✅ Complete
**Diagnosis Phase**: 🔄 In Progress
**Fix Phase**: ⏳ Pending
**Testing Phase**: ⏳ Pending

---

## 💡 Next Steps

**Immediate Action Required**:
1. **User/Cursor**: Open browser DevTools and share console errors
2. **Claude Code**: Analyze error messages
3. **Both**: Test script disabling hypothesis
4. **Cursor**: Implement fix based on findings

---

## 📝 Notes

### Observations
- Server is running on port 8500 (not standard 3000)
- Multiple third-party scripts loaded
- Hero component uses 'use client' directive
- Custom CSS animations may interact with hydration

### Questions to Answer
1. Are there console errors? What do they say?
2. Does disabling CallRail fix the issue?
3. Are images actually missing or just CSS?
4. Does it happen on all pages or just homepage?

---

**🚀 Ready to debug! Share console errors and let's fix this together.**
