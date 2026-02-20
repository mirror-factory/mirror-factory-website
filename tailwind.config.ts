import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        mint: {
          DEFAULT: '#3EB489',
          50: '#E8F7F0',
          100: '#D1EFE1',
          200: '#A3DFC3',
          300: '#75CFA5',
          400: '#47BF87',
          500: '#3EB489',
          600: '#32906E',
          700: '#266C52',
          800: '#1A4837',
          900: '#0E241B',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
export default config
