'use client'

import { useState } from 'react'
import { Moon, Sun, ArrowRight, Twitter, Github, Mail, Check, Copy } from 'lucide-react'
import { BrandLogo } from '@/components/BrandLogo'
import {
  SymmetryMirrorSVG,
  TheSieveSVG,
  ThoughtWeaverSVG,
  EnvironmentalSyncSVG,
  ContextualLayersSVG,
  SharedContextSVG,
} from '@/components/SVGComponents'
import Link from 'next/link'

export default function StyleGuidePage() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [copiedColor, setCopiedColor] = useState<string | null>(null)

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text)
    setCopiedColor(label)
    setTimeout(() => setCopiedColor(null), 2000)
  }

  const colors = [
    { name: 'Mint Primary', hex: '#3EB489', variable: 'mint-500' },
    { name: 'Mint Light', hex: '#75CFA5', variable: 'mint-300' },
    { name: 'Mint Dark', hex: '#32906E', variable: 'mint-600' },
    { name: 'Sky Blue', hex: '#38BDF8', variable: 'sky-400' },
  ]

  const backgroundColors = [
    { name: 'Dark Background', hex: '#09090b', variable: 'zinc-950' },
    { name: 'Light Background', hex: '#fafafa', variable: 'zinc-50' },
    { name: 'Dark Border', hex: 'rgba(39,39,42,0.5)', variable: 'zinc-800/50' },
    { name: 'Light Border', hex: '#e4e4e7', variable: 'zinc-200' },
  ]

  return (
    <div className={`min-h-screen w-full transition-colors duration-700 font-sans ${isDarkMode ? 'bg-[#09090b] text-zinc-50 dark' : 'bg-[#fafafa] text-zinc-900'}`}>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-8 py-4 md:py-5 backdrop-blur-md bg-white/5 dark:bg-black/20 border-b border-zinc-200 dark:border-zinc-800/80 transition-colors">
        <Link href="/" className="flex items-center gap-2 md:gap-3">
          <BrandLogo className="w-7 h-7 md:w-8 md:h-8 animate-logo-intro" />
          <span className="font-sans font-bold text-lg md:text-xl tracking-tighter leading-none pt-1 flex gap-1 md:gap-1.5">
            <span className="animate-word-1 inline-block">Mirror</span>
            <span className="animate-word-2 inline-block">Factory</span>
          </span>
        </Link>

        <div className="flex items-center gap-4 md:gap-6">
          <span className="text-xs font-mono uppercase tracking-widest opacity-40 hidden sm:block border-r border-zinc-300 dark:border-zinc-700 pr-6">Style Guide</span>
          <button onClick={() => setIsDarkMode(!isDarkMode)} className="p-2 rounded-full border border-zinc-200 dark:border-zinc-800 hover:border-[#3EB489] dark:hover:border-[#3EB489] transition-all group">
            {isDarkMode ? <Sun size={16} className="group-hover:text-[#3EB489] transition-colors" /> : <Moon size={16} className="group-hover:text-[#3EB489] transition-colors" />}
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-32 pb-20 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-6 opacity-60">
            <span className="w-2 h-2 rounded-full mint-bg animate-pulse"/>
            <span className="text-xs font-mono uppercase tracking-widest">Brand Guidelines</span>
          </div>
          <h1 className="font-serif text-6xl md:text-7xl font-medium mb-6 tracking-tight">
            Style <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3EB489] to-teal-700 italic">Guide</span>
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 font-light max-w-2xl">
            Visual identity, typography, color palette, and component library for the Mirror Factory brand.
          </p>
        </div>

        {/* Brand Logo Section */}
        <section className="mb-24">
          <h2 className="font-serif text-4xl font-medium mb-8">Brand Logo</h2>
          <div className="border border-zinc-200 dark:border-zinc-800/50 p-12 rounded-lg bg-white/5 dark:bg-black/10 flex flex-col items-center justify-center gap-12">
            <div className="flex flex-col items-center gap-8">
              <BrandLogo className="w-24 h-24" />
              <div className="flex items-center gap-3">
                <BrandLogo className="w-16 h-16" />
                <span className="font-sans font-bold text-3xl tracking-tighter">
                  Mirror Factory
                </span>
              </div>
            </div>
            <div className="flex gap-8 items-center">
              <div className="text-center">
                <BrandLogo className="w-12 h-12 mx-auto mb-2" />
                <p className="text-xs text-zinc-500">Large</p>
              </div>
              <div className="text-center">
                <BrandLogo className="w-8 h-8 mx-auto mb-2" />
                <p className="text-xs text-zinc-500">Medium</p>
              </div>
              <div className="text-center">
                <BrandLogo className="w-6 h-6 mx-auto mb-2" />
                <p className="text-xs text-zinc-500">Small</p>
              </div>
            </div>
          </div>
          <p className="text-sm text-zinc-500 mt-4">
            The logo features two chevrons with a breathing animation that pulls outward, symbolizing reflection and expansion.
          </p>
        </section>

        {/* Color Palette */}
        <section className="mb-24">
          <h2 className="font-serif text-4xl font-medium mb-8">Color Palette</h2>

          <h3 className="font-serif text-2xl font-medium mb-6 mt-12">Primary Colors</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {colors.map((color) => (
              <div key={color.name} className="border border-zinc-200 dark:border-zinc-800/50 rounded-lg overflow-hidden">
                <div
                  className="h-32 w-full cursor-pointer relative group"
                  style={{ backgroundColor: color.hex }}
                  onClick={() => copyToClipboard(color.hex, color.name)}
                >
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                    {copiedColor === color.name ? (
                      <Check size={24} className="text-white" />
                    ) : (
                      <Copy size={24} className="text-white" />
                    )}
                  </div>
                </div>
                <div className="p-4">
                  <p className="font-medium text-sm mb-1">{color.name}</p>
                  <p className="text-xs text-zinc-500 font-mono">{color.hex}</p>
                  <p className="text-xs text-zinc-400 font-mono mt-1">{color.variable}</p>
                </div>
              </div>
            ))}
          </div>

          <h3 className="font-serif text-2xl font-medium mb-6 mt-12">Background & Neutral Colors</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {backgroundColors.map((color) => (
              <div key={color.name} className="border border-zinc-200 dark:border-zinc-800/50 rounded-lg overflow-hidden">
                <div
                  className="h-32 w-full cursor-pointer relative group border-b border-zinc-200 dark:border-zinc-800"
                  style={{ backgroundColor: color.hex }}
                  onClick={() => copyToClipboard(color.hex, color.name)}
                >
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                    {copiedColor === color.name ? (
                      <Check size={24} className="text-white" />
                    ) : (
                      <Copy size={24} className="text-white" />
                    )}
                  </div>
                </div>
                <div className="p-4">
                  <p className="font-medium text-sm mb-1">{color.name}</p>
                  <p className="text-xs text-zinc-500 font-mono break-all">{color.hex}</p>
                  <p className="text-xs text-zinc-400 font-mono mt-1">{color.variable}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Typography */}
        <section className="mb-24">
          <h2 className="font-serif text-4xl font-medium mb-8">Typography</h2>

          <div className="space-y-12">
            <div>
              <h3 className="font-serif text-2xl font-medium mb-4">Playfair Display (Serif)</h3>
              <p className="text-sm text-zinc-500 mb-6">Used for headings and emphasis</p>
              <div className="space-y-4">
                <p className="font-serif text-6xl">The quick brown fox</p>
                <p className="font-serif text-4xl">The quick brown fox</p>
                <p className="font-serif text-2xl">The quick brown fox jumps over the lazy dog</p>
                <p className="font-serif text-xl italic">The quick brown fox jumps over the lazy dog (Italic)</p>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-2xl font-medium mb-4">Inter (Sans-Serif)</h3>
              <p className="text-sm text-zinc-500 mb-6">Used for body text and UI elements</p>
              <div className="space-y-4">
                <p className="font-sans text-4xl font-bold">The quick brown fox</p>
                <p className="font-sans text-2xl font-medium">The quick brown fox jumps over</p>
                <p className="font-sans text-xl font-normal">The quick brown fox jumps over the lazy dog</p>
                <p className="font-sans text-base font-light">The quick brown fox jumps over the lazy dog</p>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-2xl font-medium mb-4">JetBrains Mono (Monospace)</h3>
              <p className="text-sm text-zinc-500 mb-6">Used for labels, tags, and technical content</p>
              <div className="space-y-4">
                <p className="font-mono text-lg uppercase tracking-widest">Human Factors Research</p>
                <p className="font-mono text-sm">THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG</p>
                <p className="font-mono text-xs opacity-60">#3EB489 | rgba(62, 180, 137, 1.0)</p>
              </div>
            </div>
          </div>
        </section>

        {/* SVG Illustrations */}
        <section className="mb-24">
          <h2 className="font-serif text-4xl font-medium mb-8">SVG Illustrations</h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-12 max-w-2xl">
            Custom animated illustrations representing key concepts of human-AI interaction and context management.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            <div className="border border-zinc-200 dark:border-zinc-800/50 rounded-lg p-8">
              <h3 className="font-serif text-xl font-medium mb-2">Symmetry Mirror</h3>
              <p className="text-sm text-zinc-500 mb-6">Perfect Human/AI Coexistence</p>
              <div className="bg-white/5 dark:bg-black/10 rounded p-6">
                <SymmetryMirrorSVG isDarkMode={isDarkMode} />
              </div>
            </div>

            <div className="border border-zinc-200 dark:border-zinc-800/50 rounded-lg p-8">
              <h3 className="font-serif text-xl font-medium mb-2">The Sieve</h3>
              <p className="text-sm text-zinc-500 mb-6">Filtering the noise</p>
              <div className="bg-white/5 dark:bg-black/10 rounded p-6">
                <TheSieveSVG isDarkMode={isDarkMode} />
              </div>
            </div>

            <div className="border border-zinc-200 dark:border-zinc-800/50 rounded-lg p-8">
              <h3 className="font-serif text-xl font-medium mb-2">Thought Weaver</h3>
              <p className="text-sm text-zinc-500 mb-6">Cognitive Harmony with AI</p>
              <div className="bg-white/5 dark:bg-black/10 rounded p-6">
                <ThoughtWeaverSVG isDarkMode={isDarkMode} />
              </div>
            </div>

            <div className="border border-zinc-200 dark:border-zinc-800/50 rounded-lg p-8">
              <h3 className="font-serif text-xl font-medium mb-2">Environmental Sync</h3>
              <p className="text-sm text-zinc-500 mb-6">Contextual Understanding</p>
              <div className="bg-white/5 dark:bg-black/10 rounded p-6">
                <EnvironmentalSyncSVG isDarkMode={isDarkMode} />
              </div>
            </div>

            <div className="border border-zinc-200 dark:border-zinc-800/50 rounded-lg p-8">
              <h3 className="font-serif text-xl font-medium mb-2">Contextual Layers</h3>
              <p className="text-sm text-zinc-500 mb-6">Deep state mapping</p>
              <div className="bg-white/5 dark:bg-black/10 rounded p-6">
                <ContextualLayersSVG isDarkMode={isDarkMode} />
              </div>
            </div>

            <div className="border border-zinc-200 dark:border-zinc-800/50 rounded-lg p-8">
              <h3 className="font-serif text-xl font-medium mb-2">Shared Context</h3>
              <p className="text-sm text-zinc-500 mb-6">Context sharing between people</p>
              <div className="bg-white/5 dark:bg-black/10 rounded p-6">
                <SharedContextSVG isDarkMode={isDarkMode} />
              </div>
            </div>

          </div>
        </section>

        {/* UI Components */}
        <section className="mb-24">
          <h2 className="font-serif text-4xl font-medium mb-8">UI Components</h2>

          <div className="space-y-12">

            {/* Buttons */}
            <div>
              <h3 className="font-serif text-2xl font-medium mb-6">Buttons</h3>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 mint-bg text-white rounded font-medium hover:bg-[#32906E] transition-colors">
                  Primary Button
                </button>
                <button className="px-6 py-3 border mint-border text-[#3EB489] rounded font-medium hover:bg-[#3EB489]/10 transition-colors">
                  Secondary Button
                </button>
                <button className="px-6 py-3 border border-zinc-200 dark:border-zinc-800 rounded font-medium hover:border-[#3EB489] transition-colors">
                  Ghost Button
                </button>
                <button className="px-6 py-3 bg-zinc-100 dark:bg-zinc-900 rounded font-medium hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors">
                  Neutral Button
                </button>
              </div>
            </div>

            {/* Badges */}
            <div>
              <h3 className="font-serif text-2xl font-medium mb-6">Badges & Tags</h3>
              <div className="flex flex-wrap gap-4">
                <span className="px-3 py-1 border mint-border text-[#3EB489] text-xs font-mono uppercase tracking-widest rounded-full bg-[#3EB489]/10">
                  Coming Soon
                </span>
                <span className="px-3 py-1 mint-bg text-white text-xs font-mono uppercase tracking-widest rounded-full">
                  Active
                </span>
                <span className="px-3 py-1 border border-zinc-200 dark:border-zinc-800 text-xs font-mono uppercase tracking-widest rounded-full">
                  Research
                </span>
                <span className="px-3 py-1 bg-sky-500/10 border border-sky-500 text-sky-500 text-xs font-mono uppercase tracking-widest rounded-full">
                  Innovation
                </span>
              </div>
            </div>

            {/* Cards */}
            <div>
              <h3 className="font-serif text-2xl font-medium mb-6">Cards</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-zinc-200 dark:border-zinc-800/50 p-8 rounded-lg hover:border-[#3EB489]/50 transition-all">
                  <h4 className="font-serif text-2xl mb-3">Standard Card</h4>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                    A simple card component with border and hover effect.
                  </p>
                </div>
                <div className="border mint-border p-8 rounded-lg bg-[#3EB489]/5">
                  <h4 className="font-serif text-2xl mb-3">Highlighted Card</h4>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                    A card with mint accent for featured content.
                  </p>
                </div>
              </div>
            </div>

            {/* Icons */}
            <div>
              <h3 className="font-serif text-2xl font-medium mb-6">Icons</h3>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <Twitter size={20} className="mint-text" />
                  <span className="text-sm">Twitter</span>
                </div>
                <div className="flex items-center gap-2">
                  <Github size={20} className="mint-text" />
                  <span className="text-sm">Github</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={20} className="mint-text" />
                  <span className="text-sm">Mail</span>
                </div>
                <div className="flex items-center gap-2">
                  <ArrowRight size={20} className="mint-text" />
                  <span className="text-sm">Arrow</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sun size={20} className="mint-text" />
                  <span className="text-sm">Sun</span>
                </div>
                <div className="flex items-center gap-2">
                  <Moon size={20} className="mint-text" />
                  <span className="text-sm">Moon</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Grid System */}
        <section className="mb-24">
          <h2 className="font-serif text-4xl font-medium mb-8">Grid System</h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-12 max-w-2xl">
            The site uses a 12-column grid system with vertical dividers for visual structure.
          </p>
          <div className="border border-zinc-200 dark:border-zinc-800/50 rounded-lg overflow-hidden">
            <div className="grid grid-cols-12 divide-x divide-zinc-200 dark:divide-zinc-800/50">
              {Array(12).fill(0).map((_, i) => (
                <div key={i} className="h-32 flex items-center justify-center text-xs font-mono opacity-40">
                  {i + 1}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Animations */}
        <section className="mb-24">
          <h2 className="font-serif text-4xl font-medium mb-8">Animations</h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl">
            Subtle animations enhance the user experience without being distracting.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-zinc-200 dark:border-zinc-800/50 rounded-lg p-8 flex flex-col items-center justify-center h-48">
              <div className="w-12 h-12 mint-bg rounded-full animate-pulse mb-4" />
              <p className="text-sm font-mono">Pulse</p>
            </div>
            <div className="border border-zinc-200 dark:border-zinc-800/50 rounded-lg p-8 flex flex-col items-center justify-center h-48">
              <div className="fade-in">
                <div className="w-12 h-12 mint-bg rounded" />
              </div>
              <p className="text-sm font-mono mt-4">Fade In</p>
            </div>
            <div className="border border-zinc-200 dark:border-zinc-800/50 rounded-lg p-8 flex flex-col items-center justify-center h-48">
              <ArrowRight className="mint-text hover:translate-x-2 transition-transform" size={32} />
              <p className="text-sm font-mono mt-4">Hover Transform</p>
            </div>
          </div>
        </section>

        {/* Back to Home */}
        <div className="text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 mint-bg text-white rounded font-medium hover:bg-[#32906E] transition-colors"
          >
            Back to Home
          </Link>
        </div>

      </main>
    </div>
  )
}
