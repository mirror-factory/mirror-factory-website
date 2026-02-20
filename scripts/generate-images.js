const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
const orlandoImage = path.join(__dirname, '..', 'orlando-image.jpg');

async function generateImages() {
  console.log('Generating images...');

  // 1. Create favicon (mint icon on transparent background)
  console.log('Creating favicon...');
  const faviconSvg = `
    <svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <rect width="512" height="512" fill="transparent"/>
      <g transform="translate(256, 256)">
        <circle cx="0" cy="0" r="140" fill="none" stroke="#3EB489" stroke-width="6" opacity="0.3"/>
        <circle cx="0" cy="0" r="105" fill="none" stroke="#3EB489" stroke-width="7" opacity="0.5"/>
        <circle cx="0" cy="0" r="70" fill="none" stroke="#3EB489" stroke-width="8" opacity="0.8"/>
        <circle cx="0" cy="0" r="16" fill="#3EB489"/>
        <line x1="0" y1="-150" x2="0" y2="150" stroke="#3EB489" stroke-width="6" opacity="0.6"/>
        <line x1="-80" y1="-35" x2="80" y2="-35" stroke="#3EB489" stroke-width="5" opacity="0.4"/>
        <line x1="-80" y1="0" x2="80" y2="0" stroke="#3EB489" stroke-width="5" opacity="0.4"/>
        <line x1="-80" y1="35" x2="80" y2="35" stroke="#3EB489" stroke-width="5" opacity="0.4"/>
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
          <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      <!-- Logo Icon -->
      <g transform="translate(600, 250)">
        <circle cx="0" cy="0" r="60" fill="none" stroke="#ffffff" stroke-width="2.5" opacity="0.2"/>
        <circle cx="0" cy="0" r="45" fill="none" stroke="#ffffff" stroke-width="3" opacity="0.4"/>
        <circle cx="0" cy="0" r="30" fill="none" stroke="#ffffff" stroke-width="3.5" opacity="0.7"/>
        <circle cx="0" cy="0" r="6" fill="#ffffff" filter="url(#glow)"/>
        <line x1="0" y1="-65" x2="0" y2="65" stroke="#ffffff" stroke-width="2.5" opacity="0.5"/>
        <line x1="-35" y1="-15" x2="35" y2="-15" stroke="#ffffff" stroke-width="2" opacity="0.3"/>
        <line x1="-35" y1="0" x2="35" y2="0" stroke="#ffffff" stroke-width="2" opacity="0.3"/>
        <line x1="-35" y1="15" x2="35" y2="15" stroke="#ffffff" stroke-width="2" opacity="0.3"/>
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
        <filter id="glow">
          <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
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

      <!-- Logo Icon -->
      <g transform="translate(200, 200)">
        <circle cx="0" cy="0" r="50" fill="none" stroke="#ffffff" stroke-width="2.5" opacity="0.2"/>
        <circle cx="0" cy="0" r="38" fill="none" stroke="#ffffff" stroke-width="3" opacity="0.4"/>
        <circle cx="0" cy="0" r="25" fill="none" stroke="#ffffff" stroke-width="3.5" opacity="0.7"/>
        <circle cx="0" cy="0" r="5" fill="#ffffff" filter="url(#glow)"/>
        <line x1="0" y1="-55" x2="0" y2="55" stroke="#ffffff" stroke-width="2.5" opacity="0.5"/>
        <line x1="-30" y1="-13" x2="30" y2="-13" stroke="#ffffff" stroke-width="2" opacity="0.3"/>
        <line x1="-30" y1="0" x2="30" y2="0" stroke="#ffffff" stroke-width="2" opacity="0.3"/>
        <line x1="-30" y1="13" x2="30" y2="13" stroke="#ffffff" stroke-width="2" opacity="0.3"/>
      </g>

      <!-- Main Text -->
      <text x="200" y="330" font-family="serif" font-size="56" font-weight="500" fill="#ffffff" text-anchor="middle" filter="url(#glow)">
        Mirror Factory
      </text>
      <text x="200" y="370" font-family="sans-serif" font-size="16" letter-spacing="3" fill="#a1a1aa" text-anchor="middle">
        HUMAN FACTORS AI RESEARCH
      </text>

      <!-- Tagline -->
      <text x="700" y="280" font-family="serif" font-size="40" font-weight="300" fill="#ffffff" text-anchor="middle">
        <tspan x="700" dy="0">Intelligence</tspan>
      </text>
      <text x="700" y="340" font-family="serif" font-size="48" font-weight="500" fill="url(#mintGradient)" text-anchor="middle" font-style="italic" filter="url(#glow)">
        Requires
      </text>
      <text x="700" y="400" font-family="serif" font-size="40" font-weight="300" fill="#ffffff" text-anchor="middle">
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
