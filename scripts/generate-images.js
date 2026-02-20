const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
const orlandoImage = path.join(__dirname, '..', 'orlando-image.jpg');

async function generateImages() {
  console.log('Generating images...');

  // 1. Create favicon (black square with mint chevron logo)
  console.log('Creating favicon...');
  const faviconSvg = `
    <svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <rect width="512" height="512" fill="#000000"/>
      <g transform="translate(156, 156) scale(2)">
        <path d="M 3 20 L 33 50 L 3 80 L 18 80 L 48 50 L 18 20 Z" fill="#3EB489"/>
        <path d="M 97 20 L 67 50 L 97 80 L 82 80 L 52 50 L 82 20 Z" fill="#3EB489"/>
      </g>
    </svg>
  `;

  await sharp(Buffer.from(faviconSvg))
    .resize(512, 512)
    .png()
    .toFile(path.join(publicDir, 'favicon.png'));

  await sharp(Buffer.from(faviconSvg))
    .resize(180, 180)
    .png()
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));

  // 2. Create OG image for brand guide using orlando-image.jpg
  console.log('Creating brand guide OG image from orlando photo...');

  // Process the base image: resize, grayscale, darken
  const processedBase = await sharp(orlandoImage)
    .resize(1200, 630, { fit: 'cover', position: 'center' })
    .grayscale()
    .modulate({ brightness: 0.4 }) // Darken to 40%
    .toBuffer();

  // Create logo overlay SVG
  const logoOverlay = `
    <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      <!-- Mirror Factory Chevron Logo -->
      <g transform="translate(490, 180) scale(1.8)">
        <path d="M 3 20 L 33 50 L 3 80 L 18 80 L 48 50 L 18 20 Z" fill="#ffffff" filter="url(#glow)"/>
        <path d="M 97 20 L 67 50 L 97 80 L 82 80 L 52 50 L 82 20 Z" fill="#ffffff" filter="url(#glow)"/>
      </g>

      <!-- Text -->
      <text x="600" y="380" font-family="serif" font-size="68" font-weight="600" fill="#ffffff" text-anchor="middle" filter="url(#glow)">
        Mirror Factory
      </text>
      <text x="600" y="425" font-family="sans-serif" font-size="18" letter-spacing="3" fill="#a1a1aa" text-anchor="middle">
        BRAND GUIDE
      </text>
    </svg>
  `;

  // Composite the logo on top of the darkened photo
  await sharp(processedBase)
    .composite([{
      input: Buffer.from(logoOverlay),
      top: 0,
      left: 0
    }])
    .png()
    .toFile(path.join(publicDir, 'og-brand-guide.png'));

  // 3. Create main OG image (similar style)
  console.log('Creating main OG image...');

  const processedMain = await sharp(orlandoImage)
    .resize(1200, 630, { fit: 'cover', position: 'center' })
    .grayscale()
    .modulate({ brightness: 0.35 })
    .toBuffer();

  const mainOverlay = `
    <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="glow2">
          <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <linearGradient id="mintGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#3EB489;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#2d8a6b;stop-opacity:1" />
        </linearGradient>
      </defs>

      <!-- Mirror Factory Chevron Logo -->
      <g transform="translate(90, 150) scale(1.4)">
        <path d="M 3 20 L 33 50 L 3 80 L 18 80 L 48 50 L 18 20 Z" fill="#ffffff" filter="url(#glow2)"/>
        <path d="M 97 20 L 67 50 L 97 80 L 82 80 L 52 50 L 82 20 Z" fill="#ffffff" filter="url(#glow2)"/>
      </g>

      <!-- Main Text -->
      <text x="200" y="330" font-family="serif" font-size="56" font-weight="500" fill="#ffffff" text-anchor="middle" filter="url(#glow2)">
        Mirror Factory
      </text>
      <text x="200" y="370" font-family="sans-serif" font-size="16" letter-spacing="3" fill="#a1a1aa" text-anchor="middle">
        HUMAN FACTORS AI RESEARCH
      </text>

      <!-- Tagline -->
      <text x="750" y="280" font-family="serif" font-size="40" font-weight="300" fill="#ffffff" text-anchor="middle">
        <tspan x="750" dy="0">Intelligence</tspan>
      </text>
      <text x="750" y="340" font-family="serif" font-size="48" font-weight="500" fill="url(#mintGradient)" text-anchor="middle" font-style="italic" filter="url(#glow2)">
        Requires
      </text>
      <text x="750" y="400" font-family="serif" font-size="40" font-weight="300" fill="#ffffff" text-anchor="middle">
        Reflection.
      </text>
    </svg>
  `;

  await sharp(processedMain)
    .composite([{
      input: Buffer.from(mainOverlay),
      top: 0,
      left: 0
    }])
    .png()
    .toFile(path.join(publicDir, 'og-image.png'));

  console.log('✓ All images generated successfully!');
  console.log('  - favicon.png');
  console.log('  - apple-touch-icon.png');
  console.log('  - og-brand-guide.png');
  console.log('  - og-image.png');
}

generateImages().catch(console.error);
