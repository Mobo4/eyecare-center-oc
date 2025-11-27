# Local SEO Setup Guide for EyeCare Center OC

## Current Status

### Sitemap Verification ✅
- **Total Pages Generated:** 3,271 static pages
- **Conditions:** 269 (with ICD codes from Wills Eye Manual)
- **Cities:** 71 Orange County locations
- **Sitemap URL:** https://eyecarecenteroc.com/sitemap.xml

### NAP (Name, Address, Phone) - FIXED ✅
```
Name:    EyeCare Center of Orange County
Address: 801 North Tustin Ave #404, Santa Ana, CA 92705
Phone:   (949) 364-0008
Email:   info@eyecarecenteroc.com
Website: https://eyecarecenteroc.com
```

---

## PART 1: Directory Listings (Priority Order)

### Tier 1: CRITICAL (Do First - Free)

#### 1. Google Business Profile (Most Important)
**URL:** https://business.google.com/

**Steps:**
1. Go to https://business.google.com/
2. Search for "EyeCare Center of Orange County"
3. If listed, claim it. If not, create new listing
4. Verify via postcard, phone, or email
5. Complete ALL fields:
   - Business name (exact match)
   - Address (exact match)
   - Phone (949) 364-0008
   - Website: https://eyecarecenteroc.com
   - Categories: "Optometrist", "Eye Care Center", "Contact Lenses Supplier"
   - Hours: Mon-Thu 9am-5:30pm, Fri 9am-5pm, Sat 9am-1pm
   - Services: List all services
   - Photos: Add office photos, staff photos
   - Posts: Weekly posts about eye health

**Crawl Submission:**
1. Go to Google Search Console: https://search.google.com/search-console/
2. Add property: https://eyecarecenteroc.com
3. Submit sitemap: https://eyecarecenteroc.com/sitemap.xml
4. Request indexing for key pages

#### 2. Apple Maps / Apple Business Connect
**URL:** https://businessconnect.apple.com/

**Steps:**
1. Sign in with Apple ID
2. Search for your business
3. Claim or create listing
4. Verify ownership
5. Add:
   - Business name (exact match)
   - Address
   - Phone: (949) 364-0008
   - Website
   - Categories
   - Photos
   - Hours

**Why Important:**
- Apple Maps is default on iPhones (60%+ of smartphones)
- Siri uses Apple Maps for directions
- Apple CarPlay uses Apple Maps

#### 3. Bing Places for Business
**URL:** https://www.bingplaces.com/

**Steps:**
1. Sign in with Microsoft account
2. Import from Google Business Profile OR create new
3. Verify via phone/postcard
4. Ensure NAP matches exactly

**Crawl Submission:**
1. Go to Bing Webmaster Tools: https://www.bing.com/webmasters/
2. Add site: https://eyecarecenteroc.com
3. Submit sitemap: https://eyecarecenteroc.com/sitemap.xml

### Tier 2: Healthcare Directories (Free - Important for Medical)

#### 4. Healthgrades
**URL:** https://update.healthgrades.com/

- Claim Dr. Bonakdar's profile
- Add practice information
- Ensure phone matches: (949) 364-0008
- Add specialties, insurance accepted

#### 5. Zocdoc
**URL:** https://www.zocdoc.com/join

- Create provider profile
- Enable online booking
- Sync with your appointment system
- Add insurance list

#### 6. WebMD Physician Directory
**URL:** https://doctor.webmd.com/

- Claim provider listing
- Complete profile
- Add credentials

#### 7. Vitals
**URL:** https://www.vitals.com/about/doctors

- Claim profile
- Verify credentials
- Add practice info

### Tier 3: General Directories (Free)

#### 8. Yelp for Business
**URL:** https://biz.yelp.com/

**Steps:**
1. Claim business page
2. Complete all information
3. Respond to reviews
4. Add photos
5. **Important:** Do NOT pay for Yelp ads (controversial ROI)

#### 9. Facebook Business Page
**URL:** https://business.facebook.com/

- Create/claim page
- Add all NAP information
- Link to website
- Enable messaging

#### 10. NextDoor Business
**URL:** https://business.nextdoor.com/

- Claim local business page
- Great for neighborhood visibility
- Free local recommendations

### Tier 4: Data Aggregators (Feed to 100+ sites)

These services push your NAP to many directories at once:

| Service | Cost | Directories |
|---------|------|-------------|
| **Data Axle** (InfoUSA) | Free claim | 70+ sites |
| **Localeze/Neustar** | Free claim | 100+ sites |
| **Factual** | Free claim | 65+ sites |
| **Foursquare** | Free claim | Various apps |

**Data Axle:** https://www.dataaxle.com/
**Localeze:** https://www.neustarlocaleze.biz/
**Foursquare:** https://business.foursquare.com/

---

## PART 2: Submit Site for Crawling

### Google Search Console (Priority 1)

**URL:** https://search.google.com/search-console/

**Setup Steps:**
1. Add property → URL prefix → https://eyecarecenteroc.com
2. Verify via:
   - HTML file upload (recommended)
   - DNS record
   - Google Analytics
   - Google Tag Manager (you have GTM-T9MZNLMX)

**Submit Sitemap:**
1. Go to Sitemaps section
2. Enter: sitemap.xml
3. Click Submit
4. Should show 3,271+ URLs discovered

**Request Indexing for Key Pages:**
1. URL Inspection tool
2. Enter URL (e.g., /conditions/keratoconus)
3. Click "Request Indexing"
4. Do this for top 20-30 pages

**Priority Pages to Index:**
```
https://eyecarecenteroc.com/
https://eyecarecenteroc.com/conditions
https://eyecarecenteroc.com/conditions/keratoconus
https://eyecarecenteroc.com/conditions/dry-eye
https://eyecarecenteroc.com/conditions/cataracts
https://eyecarecenteroc.com/conditions/glaucoma
https://eyecarecenteroc.com/conditions/macular-degeneration
https://eyecarecenteroc.com/services/keratoconus-treatment
https://eyecarecenteroc.com/services/dry-eye-specialist
https://eyecarecenteroc.com/services/scleral-lens-fitting
https://eyecarecenteroc.com/services/ortho-k
https://eyecarecenteroc.com/about
https://eyecarecenteroc.com/doctors
https://eyecarecenteroc.com/book-appointment
```

### Bing Webmaster Tools (Priority 2)

**URL:** https://www.bing.com/webmasters/

**Setup:**
1. Import from Google Search Console (easiest)
2. Or add site manually
3. Submit sitemap: sitemap.xml
4. Bing also powers Yahoo, DuckDuckGo, and Alexa

### IndexNow (Instant Indexing - Optional)

IndexNow notifies search engines immediately when content changes.

**Supported by:** Bing, Yandex, Seznam, Naver

**How to Use:**
1. Generate API key at https://www.indexnow.org/
2. Add to Next.js (can implement if needed)
3. Automatically pings when pages update

---

## PART 3: Fix Citation Mismatches

### Step 1: Audit Current Citations (Free Tools)

**Moz Local Free Check:**
https://moz.com/local/search
- Enter business name and zip code
- See where you're listed
- Identify inconsistencies

**BrightLocal Free Audit:**
https://www.brightlocal.com/local-search-results-checker/
- Check how you appear in Google
- Find duplicate listings

**Whitespark Free Scan:**
https://whitespark.ca/local-citation-finder/
- Find existing citations
- Identify missing opportunities

### Step 2: Fix Inconsistencies

**Common Issues to Fix:**

| Issue | Problem | Fix |
|-------|---------|-----|
| Phone mismatch | Old number listed | Update to (949) 364-0008 |
| Address variations | Suite vs #404 | Standardize to "#404" |
| Name variations | "Eyecare Center" vs "EyeCare Center" | Use "EyeCare Center of Orange County" |
| Duplicate listings | Multiple GMB profiles | Merge or delete extras |
| Old location | Wrong address | Update everywhere |

**Manual Fix Process:**
1. Google your business name + city
2. Click through first 3 pages of results
3. For each directory listing found:
   - Claim if possible
   - Update NAP to match exactly
   - Remove duplicates

### Step 3: Priority Directories to Check/Fix

Check these sites first for consistency:

1. ✅ Google Business Profile
2. ✅ Apple Maps
3. ✅ Bing Places
4. ✅ Yelp
5. ✅ Facebook
6. ✅ Healthgrades
7. ✅ Zocdoc
8. ✅ Yellow Pages (yp.com)
9. ✅ Superpages
10. ✅ Citysearch
11. ✅ Manta
12. ✅ BBB
13. ✅ Angi (Angie's List)
14. ✅ Thumbtack

---

## PART 4: Verify Keywords Are Real

### Medical Accuracy Verification ✅

All conditions in the database are sourced from:
- **Wills Eye Manual** (standard ophthalmology reference)
- **ICD-10 Codes** included where applicable
- **Real medical terminology**

**Sample Verified Conditions:**
| Condition | ICD Code | Category |
|-----------|----------|----------|
| Diabetic Retinopathy | E11-3 | Diabetic & Systemic |
| Keratoconus | H18-6 | Cornea |
| Allergic Conjunctivitis | H10-45 | Conjunctiva |
| Chalazion/Hordeolum | H00-19 | Eyelid Conditions |
| Blepharitis/Meibomitis | H01-009 | Eyelid Conditions |

### Sitemap URL Breakdown

```
Static Pages:           12
Condition Pages:       269  (all real medical conditions)
City Pages:             71  (all real OC cities/neighborhoods)
Service Pages:          17
Service + City:      1,224  (17 services × 72 locations)
Condition + City:    1,698  (limited subset for crawl efficiency)
─────────────────────────
TOTAL:              ~3,271  pages
```

---

## PART 5: Quick Action Checklist

### This Week (Critical)

- [ ] **Day 1:** Claim/verify Google Business Profile
- [ ] **Day 1:** Submit sitemap to Google Search Console
- [ ] **Day 2:** Claim Apple Business Connect
- [ ] **Day 2:** Submit to Bing Webmaster Tools
- [ ] **Day 3:** Claim Healthgrades, Zocdoc profiles
- [ ] **Day 4:** Claim Yelp business page
- [ ] **Day 5:** Run Moz Local free audit

### This Month (Important)

- [ ] Complete all Tier 2 healthcare directories
- [ ] Fix any NAP inconsistencies found in audit
- [ ] Request indexing for top 30 pages in GSC
- [ ] Add photos to Google Business Profile
- [ ] Set up Google Business Profile posts (weekly)

### Ongoing (Maintenance)

- [ ] Respond to all Google reviews within 24 hours
- [ ] Post weekly on Google Business Profile
- [ ] Monitor Search Console for crawl errors
- [ ] Update hours for holidays
- [ ] Add new photos monthly

---

## PART 6: Tracking Progress

### Google Search Console Metrics to Watch

| Metric | Target | Check Frequency |
|--------|--------|-----------------|
| Pages Indexed | 3,000+ | Weekly |
| Impressions | Growing | Weekly |
| Click-through Rate | >3% | Monthly |
| Crawl Errors | 0 | Weekly |
| Core Web Vitals | All Green | Monthly |

### Local Pack Ranking

Check ranking for key terms:
- "eye doctor near me" + [city name]
- "optometrist [city name]"
- "keratoconus treatment orange county"
- "dry eye specialist near me"

Use incognito mode or BrightLocal's free checker.

---

## Tools Reference

### Free Tools
| Tool | URL | Purpose |
|------|-----|---------|
| Google Search Console | search.google.com/search-console | Crawling, indexing |
| Google Business Profile | business.google.com | Local listing |
| Bing Webmaster Tools | bing.com/webmasters | Bing indexing |
| Apple Business Connect | businessconnect.apple.com | Apple Maps |
| Moz Local Check | moz.com/local/search | Citation audit |
| PageSpeed Insights | pagespeed.web.dev | Performance |

### Paid Tools (If Needed Later)
| Tool | Cost | When to Use |
|------|------|-------------|
| Moz Local | $14/mo | If 10+ citation errors |
| BrightLocal | $29/mo | For ongoing monitoring |
| Whitespark | $33/mo | For citation building |

---

## Questions?

For technical issues with the website, sitemap, or schema markup, these are configured in:
- `app/sitemap.ts` - Sitemap generation
- `lib/schema.ts` - Structured data
- `lib/contact-info.ts` - NAP information
- `lib/schema/local-business.ts` - LocalBusiness schema

Last Updated: November 2025
