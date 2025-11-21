# Quick Debug Checklist - Graphics Loading Issue

## 🎯 What to Check Right Now

### 1. Open Browser DevTools
```
Press F12 or Cmd+Option+I (Mac) or Ctrl+Shift+I (Windows)
```

### 2. Check Console Tab
Look for any of these errors:

**❌ Hydration Mismatch**:
```
Warning: Text content does not match server-rendered HTML.
Warning: Expected server HTML to contain...
Error: Hydration failed because...
```

**❌ Script Errors**:
```
Failed to load resource: callrail
Failed to load resource: leadconnectorhq
TypeError: Cannot read property...
```

**❌ CSS/Resource Errors**:
```
404 Not Found: /globals.css
Failed to load resource: font
```

### 3. Check Network Tab
- Are there any RED (failed) requests?
- Is everything loading successfully?
- Check the waterfall - what loads when?

---

## 🔬 Quick Test #1: Disable CallRail

**In Cursor IDE**:

1. Open `app/layout.tsx`
2. Find lines 196-201
3. Comment them out:

```tsx
{/* TEMPORARILY DISABLED FOR TESTING
        <Script
          id="callrail-swap"
          strategy="afterInteractive"
          src="https://cdn.callrail.com/companies/479856773/6582372c2e4a73e54ea1/12/swap.js"
        />
*/}
```

4. Save file
5. Reload browser (Cmd+R or Ctrl+R)
6. **Do graphics stay?**
   - ✅ YES → CallRail is the problem!
   - ❌ NO → Try next test

---

## 🔬 Quick Test #2: Disable GHL Chat Widget

**In Cursor IDE**:

1. Still in `app/layout.tsx`
2. Find lines 148-155
3. Comment them out:

```tsx
{/* TEMPORARILY DISABLED FOR TESTING
        <Script
          id="ghl-widget-loader"
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="69163f6533e9926104e6ee9e"
          strategy="afterInteractive"
        />
*/}
```

4. Save and reload
5. **Do graphics stay?**

---

## 🔬 Quick Test #3: Check Hero Component

**In Cursor IDE**:

1. Open `components/Hero.tsx`
2. Check if there's any client-side-only code
3. Look for `window`, `document`, `localStorage`

**Quick Fix Test**: Try removing `'use client'` temporarily:

```tsx
// 'use client';  // <-- Comment this out

import React from 'react';
// rest of file...
```

Save, reload, test.

---

## 📸 Screenshot Analysis

**Based on the screenshot you mentioned**:

### What We See
- "No graphics" - could mean:
  - Images not loading
  - CSS not applying
  - Components not rendering
  - Animations not working

### What to Document
1. Take screenshot of INITIAL load (before graphics disappear)
2. Take screenshot AFTER graphics disappear
3. Share both with Claude Code

---

## 🎯 Most Likely Culprits (Based on Code Review)

### 1. CallRail Script (80% Probability)
**Why**: It's known to modify DOM after page load
**Fix**: Load it later or differently

### 2. GHL Chat Widget (15% Probability)
**Why**: Injects elements into DOM
**Fix**: Lazy load it

### 3. Font Loading (5% Probability)
**Why**: "swap" strategy can cause flash
**Fix**: Change to "optional"

---

## ✅ Quick Win Fixes to Try

### Fix A: Delay All Scripts
Change ALL scripts from `afterInteractive` to `lazyOnload`:

```tsx
strategy="lazyOnload"  // Instead of "afterInteractive"
```

### Fix B: Add Hydration Suppression
In `app/page.tsx`, wrap main content:

```tsx
<main className="min-h-screen" suppressHydrationWarning>
  {/* existing content */}
</main>
```

### Fix C: Use Dynamic Import for Hero
In `app/page.tsx`:

```tsx
import dynamic from 'next/dynamic';

const Hero = dynamic(() => import('@/components/Hero'), {
  ssr: true,  // Keep SSR but reload client-side
});
```

---

## 🚀 Collaborative Workflow

### Cursor User (You) Does:
1. Open DevTools console
2. Copy/paste any error messages
3. Try the quick tests above
4. Share results with Claude Code

### Claude Code Does:
1. Analyze error messages
2. Propose specific fixes
3. Monitor results
4. Iterate until fixed

---

## 📝 Report Template

**After testing, report back**:

```
TEST RESULTS:

Console Errors:
[paste errors here]

Test 1 (CallRail disabled):
- Graphics persist: YES/NO
- New errors: [list]

Test 2 (GHL disabled):
- Graphics persist: YES/NO
- New errors: [list]

Test 3 (Hero changes):
- Graphics persist: YES/NO
- New errors: [list]

Screenshots:
[attach if possible]
```

---

**🎯 Let's find this bug! Share your test results and we'll fix it fast.**
