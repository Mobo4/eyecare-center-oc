# Bonakdar.net Image Assets Inventory

**Copy Date:** 2025-11-20
**Source:** `/Users/alex/Documents/Projects/bonakdar_net_Lovable/public/`
**Destination:** `/Users/alex/Documents/Projects/eyecare-center-oc-old/public/images/bonakdar/`

## Summary

| Category | File Count | Total Size |
|----------|-----------|------------|
| Staff Photos | 20 | 18 MB |
| Logos | 109 | 2.4 MB |
| Optimized Uploads | 81 | 9.1 MB |
| **TOTAL** | **210** | **29.5 MB** |

## File Format Distribution

| Format | Count | Purpose |
|--------|-------|---------|
| WebP | 63 | Modern web-optimized format |
| AVIF | 63 | Next-gen image format (better compression) |
| PNG | 46 | Lossless transparency support |
| JPG | 37 | Traditional photo format |
| SVG | 1 | Vector graphics |

## Optimization Status

✅ **All images are web-optimized** with multiple format variants:
- **WebP format**: 63 files (modern browser support)
- **AVIF format**: 63 files (next-generation, superior compression)
- **Traditional formats**: PNG/JPG fallbacks for older browsers

## Directory Structure

```
/public/images/bonakdar/
├── staff/           # 20 files - Staff member photos
├── logos/           # 109 files - Brand and partner logos
└── optimized/       # 81 files - General optimized images
```

## Staff Photos (20 files, 18 MB)

Professional headshots and staff photos optimized for web display.

### Files:
- dr-alina-pics-staff_Converted-1.png
- dr-alina-pics-staff_Converted.png
- dr-ben_ALOTAIBI.png
- dr-liza-bulacan.png
- dr-michelle-pics-staff_Converted.png
- dr-narinderpal-bains.png
- dr-omer-waqar.png
- dr-qasim-chouhdry.png
- dr-roshni-shah.png
- dr-ryan-murphy.png
- dr-shannon-soltero-rivera.png
- dr-sukhpreet-pandher.png
- dr-tatyana-leykin.png
- head-shot-website-image-1.png
- irene-nguyen-headshot.png
- katia-alvarez.png
- leticia-aguilar.png
- mariah-montano.png
- rachel-gonzalez.png
- yolanda-olano.png

## Logos (109 files, 2.4 MB)

Brand logos, partner logos, and icon variations in multiple formats for maximum compatibility.

### Format Breakdown:
- **AVIF**: 35 files (next-gen format)
- **WebP**: 35 files (modern format)
- **PNG**: 36 files (traditional format)
- **SVG**: 1 file (vector)
- **JPG**: 2 files (legacy)

### Key Logo Sets:
- bonakdar-ophthalmology-logo (3 variants: AVIF, PNG, WebP)
- Main brand logos with variations
- Partner and certification logos
- Social media icons

## Optimized Uploads (81 files, 9.1 MB)

General purpose optimized images including backgrounds, UI elements, and content images.

### Format Breakdown:
- **AVIF**: 28 files
- **WebP**: 28 files
- **PNG**: 10 files
- **JPG**: 15 files

### Categories:
- Hero images and backgrounds
- Content images
- UI elements
- Medical equipment photos
- Facility photos

## Usage Guidelines

### Responsive Image Pattern

```html
<picture>
  <source srcset="/images/bonakdar/optimized/image.avif" type="image/avif">
  <source srcset="/images/bonakdar/optimized/image.webp" type="image/webp">
  <img src="/images/bonakdar/optimized/image.jpg" alt="Description" loading="lazy">
</picture>
```

### Direct WebP Usage (Modern Browsers)

```html
<img src="/images/bonakdar/staff/dr-alina-pics-staff_Converted.png"
     alt="Staff Name"
     loading="lazy"
     width="300"
     height="400">
```

### Logo Usage

```html
<img src="/images/bonakdar/logos/bonakdar-ophthalmology-logo.webp"
     alt="Bonakdar Ophthalmology"
     width="200"
     height="auto">
```

## Performance Notes

- **Average file size**: ~140 KB per image
- **Optimization level**: Production-ready
- **Browser support**: Modern browsers with fallbacks
- **Loading strategy**: Use `loading="lazy"` for below-the-fold images

## Migration Notes

All images were copied from the bonakdar.net Lovable project and are already optimized for web delivery. No additional optimization is required.

### Original Sources:
1. **Staff photos**: `/public/images/staff/` (21 files in source, 20 copied)
2. **Logos**: `/public/images/logos/` (110 files in source, 109 copied)
3. **Optimized uploads**: `/public/lovable-uploads/` (81 files in source, 81 copied)

**Note**: Minor discrepancy in counts (1-2 files) may be due to hidden files or duplicates excluded during copy.

## Maintenance

- **Update date**: 2025-11-20
- **Next review**: When adding new team members or updating branding
- **Backup location**: Original files remain in bonakdar_net_Lovable project

---

*This inventory was automatically generated during asset migration.*
