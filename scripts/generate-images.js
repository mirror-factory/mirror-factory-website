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

  // 2. Create OG images using orlando-image.jpg
  console.log('Creating OG images from orlando photo...');

  // Process the base image: resize, grayscale, darken, and blur
  const processedBase = await sharp(orlandoImage)
    .resize(1200, 630, { fit: 'cover', position: 'center' })
    .grayscale()
    .modulate({ brightness: 0.4 }) // Darken to 40%
    .blur(3) // Add blur
    .toBuffer();

  // Create stacked logo overlay SVG (tall-subtitle variant)
  const logoOverlay = `
    <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      <!-- Centered Stacked Logo -->
      <g transform="translate(500, 165)">
        <!-- Icon in mint/green -->
        <g transform="translate(100, 0) scale(1.6)">
          <path d="M 3 20 L 33 50 L 3 80 L 18 80 L 48 50 L 18 20 Z" fill="#3EB489" filter="url(#glow)"/>
          <path d="M 97 20 L 67 50 L 97 80 L 82 80 L 52 50 L 82 20 Z" fill="#3EB489" filter="url(#glow)"/>
        </g>

        <!-- MIRROR text -->
        <text x="100" y="210" font-family="Inter, sans-serif" font-size="52" font-weight="bold" letter-spacing="-2" text-anchor="middle" fill="#ffffff" filter="url(#glow)">
          MIRROR
        </text>

        <!-- FACTORY text -->
        <text x="100" y="270" font-family="Inter, sans-serif" font-size="52" font-weight="bold" letter-spacing="-2" text-anchor="middle" fill="#ffffff" filter="url(#glow)">
          FACTORY
        </text>

        <!-- Subtitle -->
        <text x="100" y="310" font-family="serif" font-size="13" letter-spacing="1.5" text-anchor="middle" fill="#a1a1aa">
          Human Factors AI Research
        </text>
      </g>
    </svg>
  `;

  // Create both OG images with same design
  await sharp(processedBase)
    .composite([{
      input: Buffer.from(logoOverlay),
      top: 0,
      left: 0
    }])
    .png()
    .toFile(path.join(publicDir, 'og-brand-guide.png'));

  // Use same design for main OG image
  await sharp(processedBase)
    .composite([{
      input: Buffer.from(logoOverlay),
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
