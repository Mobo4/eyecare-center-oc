/**
 * OpenGraph Image Generator
 * Creates a 1200x630px social media preview image
 * 
 * Usage:
 * 1. Install dependencies: npm install canvas
 * 2. Run: node scripts/create-og-image.js
 * 3. Output: public/og-image.jpg
 */

const fs = require('fs');
const path = require('path');

// Check if we're running this script
if (require.main === module) {
  console.log('╔═══════════════════════════════════════════════════════════╗');
  console.log('║           OpenGraph Image Generator                      ║');
  console.log('╚═══════════════════════════════════════════════════════════╝\n');
  
  console.log('To generate the OG image, you have two options:\n');
  
  console.log('Option 1: Automated (Requires node-canvas)');
  console.log('  1. Install canvas: npm install canvas');
  console.log('  2. Uncomment the canvas code below');
  console.log('  3. Run: node scripts/create-og-image.js\n');
  
  console.log('Option 2: Manual (Recommended for quick setup)');
  console.log('  1. Open scripts/generate-og-image.html in your browser');
  console.log('  2. Take a screenshot (Cmd+Shift+4 on Mac)');
  console.log('  3. Save as public/og-image.jpg');
  console.log('  4. Optimize the image to be under 1MB\n');
  
  console.log('Option 3: Use online tools');
  console.log('  • Canva: https://www.canva.com/ (1200x630px template)');
  console.log('  • Figma: https://www.figma.com/ (Export at 1200x630px)');
  console.log('  • Photopea: https://www.photopea.com/ (Free Photoshop alternative)\n');
  
  console.log('Design Specifications:');
  console.log('  • Size: 1200x630px (1.91:1 aspect ratio)');
  console.log('  • Format: JPEG or PNG');
  console.log('  • File size: Under 1MB');
  console.log('  • Colors: Blue gradient (#1e3a8a → #3b82f6)');
  console.log('  • Logo: public/logo.png');
  console.log('  • Clinic Name: "Optometric EyeCare Center of Orange County"');
  console.log('  • Phone: (949) 364-0008');
  console.log('  • Tagline: "Comprehensive Eye Care & Vision Solutions"\n');
  
  const outputPath = path.join(__dirname, '../public/og-image.jpg');
  if (fs.existsSync(outputPath)) {
    console.log('✓ OG image already exists at:', outputPath);
    const stats = fs.statSync(outputPath);
    const fileSizeInMB = stats.size / (1024 * 1024);
    console.log(`  File size: ${fileSizeInMB.toFixed(2)} MB`);
    
    if (fileSizeInMB > 1) {
      console.log('  ⚠️  Warning: File size exceeds 1MB. Consider optimizing.');
    }
  } else {
    console.log('✗ OG image not found. Please create it using one of the options above.\n');
  }
}

// Uncomment below to use automated generation with node-canvas
// (Requires: npm install canvas)

/*
const { createCanvas, loadImage } = require('canvas');

async function generateOGImage() {
  const width = 1200;
  const height = 630;
  
  // Create canvas
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');
  
  // Background gradient
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, '#1e3a8a');
  gradient.addColorStop(0.5, '#2563eb');
  gradient.addColorStop(1, '#3b82f6');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
  
  // Add decorative circles
  ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
  ctx.beginPath();
  ctx.arc(1000, 100, 200, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(100, 530, 150, 0, Math.PI * 2);
  ctx.fill();
  
  // Load and draw logo
  try {
    const logo = await loadImage(path.join(__dirname, '../public/logo.png'));
    const logoSize = 180;
    ctx.drawImage(logo, (width - logoSize) / 2, 80, logoSize, logoSize);
  } catch (error) {
    console.error('Error loading logo:', error);
  }
  
  // Text styling
  ctx.textAlign = 'center';
  ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
  ctx.shadowBlur = 10;
  
  // "Optometric" text
  ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
  ctx.font = 'bold 24px -apple-system, BlinkMacSystemFont, sans-serif';
  ctx.fillText('Optometric', width / 2, 300);
  
  // Main clinic name
  ctx.font = 'bold 52px -apple-system, BlinkMacSystemFont, sans-serif';
  ctx.fillStyle = 'white';
  ctx.fillText('EyeCare Center', width / 2, 355);
  ctx.fillText('of Orange County', width / 2, 415);
  
  // Tagline
  ctx.font = '28px -apple-system, BlinkMacSystemFont, sans-serif';
  ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
  ctx.fillText('Comprehensive Eye Care & Vision Solutions', width / 2, 465);
  
  // Phone number background
  ctx.shadowBlur = 15;
  ctx.fillStyle = 'white';
  ctx.fillRect(390, 490, 420, 70, 35);
  
  // Phone number text
  ctx.shadowBlur = 0;
  ctx.fillStyle = '#1e3a8a';
  ctx.font = 'bold 38px -apple-system, BlinkMacSystemFont, sans-serif';
  ctx.fillText('(949) 364-0008', width / 2, 540);
  
  // Location
  ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
  ctx.font = '22px -apple-system, BlinkMacSystemFont, sans-serif';
  ctx.fillText('Santa Ana, California', width / 2, 590);
  
  // Save to file
  const outputPath = path.join(__dirname, '../public/og-image.jpg');
  const buffer = canvas.toBuffer('image/jpeg', { quality: 0.92 });
  fs.writeFileSync(outputPath, buffer);
  
  console.log('✓ OpenGraph image generated successfully!');
  console.log('  Location:', outputPath);
  console.log('  Size:', (buffer.length / 1024).toFixed(2), 'KB');
}

// Run if this is the main module
if (require.main === module) {
  generateOGImage().catch(console.error);
}
*/

module.exports = { /* Add exports if needed */ };

