# Mirror Factory Website

A modern Next.js website for Mirror Factory - a human-centered research laboratory and product studio exploring the profound connection between people and artificial intelligence.

## Features

- ✨ Beautiful, animated landing page with custom SVG illustrations
- 🎨 Comprehensive style guide showcasing the brand identity
- 🌓 Dark/Light mode toggle
- 📱 Fully responsive design
- ⚡ Built with Next.js 14 and TypeScript
- 🎭 Custom animations and transitions
- 🎯 12-column grid system with visual dividers

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: Playfair Display, Inter, JetBrains Mono

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or pnpm package manager

### Installation

1. Install dependencies:

```bash
npm install
# or
pnpm install
```

2. Run the development server:

```bash
npm run dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
mirror-factory-website/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles and animations
│   └── style-guide/
│       └── page.tsx        # Style guide page
├── components/
│   ├── BrandLogo.tsx       # Animated brand logo component
│   └── SVGComponents.tsx   # Custom SVG illustrations
├── public/                 # Static assets
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## Pages

### Home Page (`/`)
The main landing page featuring:
- Hero section with the brand tagline
- "Who We Are" section with the Symmetry Mirror illustration
- "Methodology" section showcasing three research pillars
- "Active Initiatives" highlighting current projects
- Footer with social links

### Style Guide (`/style-guide`)
A comprehensive design system documentation including:
- Brand logo variations
- Color palette with copy-to-clipboard functionality
- Typography specimens
- SVG illustration library
- UI component examples
- Grid system demonstration
- Animation samples

## Brand Colors

- **Mint Primary**: `#3EB489` - Main brand color
- **Mint Light**: `#75CFA5` - Lighter accent
- **Mint Dark**: `#32906E` - Darker accent
- **Sky Blue**: `#38BDF8` - Secondary accent

## Typography

- **Serif**: Playfair Display - Used for headings and emphasis
- **Sans**: Inter - Used for body text and UI elements
- **Mono**: JetBrains Mono - Used for labels and technical content

## Custom Animations

All animations are defined in `app/globals.css`:
- Logo breathing animation
- Symmetry mirror movement
- Sieve drop effect
- Thought weaver path drawing
- Environmental sync radar
- Contextual layers sequential glow
- Shared context packet travel

## Building for Production

```bash
npm run build
npm start
```

## Development

To add new features or modify existing ones:

1. **Components**: Add reusable components to the `/components` directory
2. **Pages**: Add new pages to the `/app` directory
3. **Styles**: Global styles and animations go in `/app/globals.css`
4. **Tailwind**: Extend the Tailwind config in `tailwind.config.ts`

## License

© 2026 Mirror Factory. All rights reserved.

## Contact

- Twitter: [Link to Twitter]
- GitHub: [Link to GitHub]
- Email: [Contact Email]
