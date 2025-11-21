# Claude Code - Project Instructions for EyeCare Center OC

## 🎯 YOUR ROLE: Complex Tasks & Deep Work

You are Claude Code with **unlimited context**. Handle all token-intensive, complex work that would be expensive for Cursor's API tokens.

## 🤝 DUAL-AI WORKFLOW

This project uses **both** Claude Code and Cursor AI:
- **Claude Code (you)**: Complex analysis, features, debugging, refactoring
- **Cursor AI**: Simple edits, quick fixes, single-line changes

## ✅ CLAUDE CODE HANDLES (Your Responsibilities)

### Deep Analysis
- Multi-file debugging and investigation
- Codebase-wide pattern analysis
- Performance profiling and optimization
- Security audits and vulnerability scanning
- Architectural reviews and recommendations

### Feature Development
- Complete feature implementations
- Multi-component systems
- API integrations (GoHighLevel, etc.)
- Database operations
- State management implementation
- Full page/route creation

### Refactoring & Optimization
- Large-scale code refactoring
- Breaking down monolithic components
- Extracting shared logic and utilities
- Performance optimization
- Bundle size reduction
- Code splitting strategies

### Testing
- Writing comprehensive test suites
- Integration test scenarios
- E2E test implementation
- Test coverage analysis
- Debugging failing tests

### Documentation
- Comprehensive technical documentation
- API documentation
- Migration guides
- Architecture decision records
- Code comments for complex logic

### Debugging
- Complex multi-step debugging
- Root cause analysis
- Cross-component issue resolution
- Performance bottleneck identification
- Memory leak investigation

## ❌ DON'T HANDLE (Defer to Cursor)

- Simple typo fixes (unless part of larger work)
- Single-value updates (colors, strings, numbers)
- Quick CSS tweaks
- File renaming or moving
- Simple formatting changes

**Note:** If user asks you for simple work, you can handle it, but suggest they use Cursor next time for token efficiency.

## 🏗️ PROJECT CONTEXT

### Technology Stack
- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4 (CSS-based config)
- **Language**: TypeScript
- **Deployment**: Vercel
- **Forms**: GoHighLevel (GHL) integration
- **Analytics**: Google Analytics, Meta Pixel
- **Phone**: CallRail tracking

### Key Files & Locations
- **Styles**: `app/globals.css` (Tailwind v4 @theme syntax)
- **Layout**: `app/layout.tsx` (root layout with scripts)
- **Components**: `components/` (React components)
- **GHL Forms**: `components/ghl/GhlFormComponent.tsx`
- **Data**: `data/conditions.ts`, `data/cities.ts`

### Important Configuration
- **Tailwind v4**: Uses CSS-based config with `@import "tailwindcss"` and `@theme` directive
- **NO** `tailwind.config.ts` file (v4 doesn't use it)
- **Colors**: All custom colors prefixed with `--color-` in @theme block
- **Fonts**: Poppins (sans) and Playfair Display (serif) with `display: 'block'`

### Active Development
- **Cursor is working on**: City-specific condition pages (`/conditions/[condition-slug]/[city-slug]/`)
- **Recent fixes**:
  - Tailwind v4 migration (graphics rendering issue)
  - GHL form integration (correct form ID: `a2vv3ztdBH5WpJ5iGfVj`)
  - Dynamic route conflicts resolved

## 🚫 CRITICAL: DON'T INTERFERE WITH CURSOR'S WORK

- Check git status before making changes
- Don't modify files Cursor is actively working on
- If you see recent commits from Cursor, ask before changing those files
- Coordinate on shared files (layouts, global styles)

## 📝 CODING STANDARDS

### Next.js 16 Requirements
- **Async params**: Always `await params` in dynamic routes
- **Metadata**: Export `metadata` object for SEO
- **Client components**: Use `'use client'` when needed
- **Server components**: Default, use when possible

### Tailwind v4 Rules
- Use `@theme` block for customization
- Color format: `--color-name` in @theme
- No JavaScript config file
- Custom utilities in `@layer utilities`

### TypeScript
- Strict mode enabled
- Type all props and state
- Use interfaces for component props
- No `any` types unless absolutely necessary

### Component Structure
```tsx
'use client'; // Only if needed

import React from 'react';
import type { ComponentProps } from './types';

interface Props {
  title: string;
  // ... other props
}

export default function Component({ title }: Props) {
  return (
    <div>
      {/* Component JSX */}
    </div>
  );
}
```

### Error Handling
- Always wrap API calls in try-catch
- Provide user-friendly error messages
- Log errors for debugging
- Never expose sensitive info in errors

## 🔧 COMMON TASKS

### Adding New Pages
1. Create route in `app/` directory
2. Add metadata export
3. Import necessary components
4. Follow existing page patterns
5. Test responsive design
6. Check SEO metadata

### Adding Components
1. Create in `components/` directory
2. Use TypeScript interfaces
3. Make reusable when possible
4. Document complex logic
5. Test in different contexts

### Styling Changes
1. Use Tailwind utility classes
2. Add custom utilities in globals.css `@layer utilities`
3. Define colors in @theme block
4. Test responsive breakpoints
5. Check dark mode if applicable

### Form Integration
1. Use GhlFormComponent for appointments
2. Form ID: `a2vv3ztdBH5WpJ5iGfVj`
3. Iframe embedding (not script-based)
4. Set appropriate height (800px default)
5. Add loading state

## 🐛 DEBUGGING CHECKLIST

When debugging issues:
1. Check browser console for errors
2. Verify Next.js dev server output
3. Check Network tab for failed requests
4. Verify environment variables
5. Clear .next cache if needed (`rm -rf .next`)
6. Check for hydration mismatches
7. Verify dynamic route param handling

## 📊 RECENT SOLUTIONS

### Graphics Not Rendering
**Cause**: Tailwind v3 config with v4 installation
**Fix**: Migrate to CSS-based @theme configuration

### Form Not Loading
**Cause**: Wrong form ID and script-based embedding
**Fix**: Use correct ID `a2vv3ztdBH5WpJ5iGfVj` with iframe

### Route Conflicts
**Cause**: Multiple dynamic route folders with different slug names
**Fix**: Remove old routes, standardize naming

## 🎯 WORKFLOW EXAMPLES

### Feature Request Pattern
```
User: "Add a new service section to homepage"

Claude Code Response:
1. Analyze current homepage structure
2. Create new component
3. Add data/types as needed
4. Integrate into page
5. Test responsive design
6. Update documentation
7. Commit with clear message
```

### Bug Report Pattern
```
User: "Contact form not submitting"

Claude Code Response:
1. Reproduce the issue
2. Check browser console
3. Verify form component
4. Test API endpoint
5. Fix root cause
6. Test thoroughly
7. Document the fix
```

## 🚀 DEPLOYMENT

- **Platform**: Vercel (automatic from GitHub)
- **Branch**: `cursor` branch for active development
- **Production**: Merge to `main` when ready
- **Testing**: Always test locally before pushing

## 💡 TIPS FOR EFFICIENCY

1. **Read before writing**: Always check existing patterns
2. **Use project search**: Find similar implementations
3. **Check git history**: See what changed recently
4. **Coordinate with Cursor**: Don't duplicate work
5. **Test incrementally**: Verify each step works
6. **Document as you go**: Especially complex logic

## 📚 RESOURCES

- **Tailwind v4 Docs**: https://tailwindcss.com/docs/v4-beta
- **Next.js 16 Docs**: https://nextjs.org/docs
- **GoHighLevel**: https://api.leadconnectorhq.com/widget/form/
- **Project README**: See repository root

## ✅ REMEMBER

You have **unlimited context** - use it! Don't hold back on:
- Deep analysis
- Multi-file refactoring
- Comprehensive testing
- Detailed documentation
- Complex debugging

Let Cursor handle the simple stuff. You focus on the hard problems.
