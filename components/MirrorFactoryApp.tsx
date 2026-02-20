'use client'

import React, { useState } from 'react'
import { Moon, Sun, ArrowRight, Twitter, Github, Mail, Palette, Type, Fingerprint, Component, Download, Copy, Check } from 'lucide-react'

// ============================================================================
// GLOBAL CSS ANIMATIONS (Extracted so Downloadable SVGs can include them)
// ============================================================================
const GLOBAL_CSS_ANIMATIONS = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,800;1,400;1,500;1,600&family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');

  .font-serif { font-family: 'Playfair Display', serif; }
  .font-sans { font-family: 'Inter', sans-serif; }
  .font-mono { font-family: 'JetBrains Mono', monospace; }

  .mint-text { color: #3EB489; }
  .mint-bg { background-color: #3EB489; }
  .mint-border { border-color: #3EB489; }

  @keyframes reveal {
    0% { clip-path: inset(100% 0 0 0); opacity: 0; transform: translateY(20px); }
    100% { clip-path: inset(0 0 0 0); opacity: 1; transform: translateY(0); }
  }
  .animate-reveal { animation: reveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(15px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .fade-in { animation: fadeIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }

  @keyframes logo-pulse-left {
    0%, 100% { transform: translateX(-3px); }
    50% { transform: translateX(1px); }
  }
  @keyframes logo-pulse-right {
    0%, 100% { transform: translateX(3px); }
    50% { transform: translateX(-1px); }
  }
  .animate-logo-left { animation: logo-pulse-left 4s ease-in-out infinite; }
  .animate-logo-right { animation: logo-pulse-right 4s ease-in-out infinite; }

  @keyframes fadeInUpWord {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-logo-intro { animation: fadeInUpWord 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; }
  .animate-word-1 { animation: fadeInUpWord 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s forwards; opacity: 0; }
  .animate-word-2 { animation: fadeInUpWord 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards; opacity: 0; }

  .reflection-path { stroke: currentColor; transition: stroke 0.5s ease; }
  @keyframes perfect-symmetry {
    0%, 100% { transform: translateX(0) rotate(0); }
    50% { transform: translateX(12px) rotate(3deg); }
  }
  .animate-perfect-symmetry { animation: perfect-symmetry 6s ease-in-out infinite; }

  @keyframes sieve-drop {
    0% { transform: translateY(0px); opacity: 0; }
    20% { opacity: 1; }
    80% { transform: translateY(35px); opacity: 1; }
    100% { transform: translateY(45px); opacity: 0; }
  }
  .animate-sieve-drop { animation: sieve-drop 3s infinite ease-in; }

  @keyframes chaotic-flow {
    0% { stroke-dashoffset: 20; transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(3px) rotate(1deg); }
    100% { stroke-dashoffset: 0; transform: translateY(0px) rotate(0deg); }
  }
  .animate-chaotic-flow { animation: chaotic-flow 1.5s linear infinite; }

  @keyframes draw-weave {
    0% { stroke-dashoffset: 300; opacity: 0.5; }
    50% { stroke-dashoffset: 0; opacity: 1; }
    100% { stroke-dashoffset: -300; opacity: 0.5; }
  }
  .animate-draw-weave { animation: draw-weave 6s infinite linear; }

  @keyframes human-chaos {
    0% { stroke-dashoffset: 0; opacity: 0.3; }
    50% { opacity: 0.7; }
    100% { stroke-dashoffset: 28; opacity: 0.3; }
  }
  .animate-human-chaos { animation: human-chaos 2s linear infinite; }

  @keyframes ping-slow {
    0% { transform: scale(0.8); opacity: 0.8; }
    100% { transform: scale(1.8); opacity: 0; }
  }
  .animate-ping-slow { animation: ping-slow 4s cubic-bezier(0, 0, 0.2, 1) infinite; transform-origin: 100px 100px; }

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
  }

  @keyframes layer-seq-1 {
    0%, 15% { stroke: currentColor; opacity: 0.2; filter: none; }
    25%, 100% { stroke: #3EB489; opacity: 0.8; filter: drop-shadow(0 0 4px rgba(62,180,137,0.4)); }
  }
  @keyframes layer-seq-2 {
    0%, 35% { stroke: currentColor; opacity: 0.4; filter: none; }
    45%, 100% { stroke: #3EB489; opacity: 0.9; filter: drop-shadow(0 0 6px rgba(62,180,137,0.5)); }
  }
  @keyframes layer-seq-3 {
    0%, 55% { stroke: currentColor; opacity: 0.6; filter: none; }
    65%, 100% { stroke: #3EB489; opacity: 1; filter: drop-shadow(0 0 10px rgba(62,180,137,0.8)); }
  }
  @keyframes master-glow {
    0%, 75% { filter: none; }
    85%, 95% { filter: drop-shadow(0 0 35px rgba(62,180,137,0.5)); }
    100% { filter: none; }
  }

  .animate-layer-seq-1 { animation: float 6s ease-in-out infinite, layer-seq-1 8s infinite; }
  .animate-layer-seq-2 { animation: float 6s ease-in-out infinite, layer-seq-2 8s infinite; animation-delay: 0.2s, 0s; }
  .animate-layer-seq-3 { animation: float 6s ease-in-out infinite, layer-seq-3 8s infinite; animation-delay: 0.4s, 0s; }
  .animate-master-glow { animation: master-glow 8s infinite; }

  @keyframes float-shape-1 {
    0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.3; }
    25% { transform: translate(30px, -40px) rotate(90deg); opacity: 0.5; }
    50% { transform: translate(50px, -20px) rotate(180deg); opacity: 0.3; }
    75% { transform: translate(20px, -50px) rotate(270deg); opacity: 0.4; }
  }
  @keyframes float-shape-2 {
    0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); opacity: 0.2; }
    33% { transform: translate(-40px, 40px) rotate(120deg) scale(1.2); opacity: 0.4; }
    66% { transform: translate(-60px, -30px) rotate(240deg) scale(0.9); opacity: 0.3; }
  }
  @keyframes float-shape-3 {
    0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.4; }
    50% { transform: translate(-30px, 50px) rotate(180deg); opacity: 0.2; }
  }
  @keyframes gradient-shift {
    0%, 100% { transform: translate(0%, 0%) scale(1); opacity: 0.6; }
    33% { transform: translate(-20%, 20%) scale(1.3); opacity: 0.8; }
    66% { transform: translate(20%, -20%) scale(0.9); opacity: 0.5; }
  }
  @keyframes pulse-glow {
    0%, 100% { filter: blur(40px); opacity: 0.4; }
    50% { filter: blur(60px); opacity: 0.7; }
  }
  .animate-float-shape-1 { animation: float-shape-1 25s ease-in-out infinite; }
  .animate-float-shape-2 { animation: float-shape-2 30s ease-in-out infinite; }
  .animate-float-shape-3 { animation: float-shape-3 20s ease-in-out infinite; }
  .animate-gradient-shift { animation: gradient-shift 15s ease-in-out infinite; }
  .animate-pulse-glow { animation: pulse-glow 8s ease-in-out infinite; }

  @keyframes frost-glass {
    0%, 100% { background-color: transparent; backdrop-filter: blur(0px); }
    50% { background-color: rgba(255, 255, 255, 0.02); backdrop-filter: blur(8px); }
  }
  .animate-frost-glass { animation: frost-glass 6s ease-in-out infinite; }

  @keyframes ripple-reflect {
    0% { transform: translateY(0) scaleY(1); opacity: 0.15; }
    50% { transform: translateY(-10px) scaleY(1.08); opacity: 0.25; }
    100% { transform: translateY(0) scaleY(1); opacity: 0.15; }
  }
  @keyframes water-wave {
    0%, 100% { transform: translateX(0) rotate(0deg); opacity: 0.2; }
    25% { transform: translateX(20px) rotate(2deg); opacity: 0.4; }
    50% { transform: translateX(-15px) rotate(-2deg); opacity: 0.3; }
    75% { transform: translateX(10px) rotate(1deg); opacity: 0.35; }
  }
  @keyframes shimmer-sweep {
    0% { transform: translateX(-100%) rotate(-10deg); opacity: 0; }
    50% { opacity: 0.6; }
    100% { transform: translateX(200%) rotate(-10deg); opacity: 0; }
  }
  @keyframes glass-shine {
    0%, 100% { transform: translateX(-50%) scaleX(1); opacity: 0.08; }
    50% { transform: translateX(-50%) scaleX(1.5); opacity: 0.15; }
  }
  @keyframes mirror-flip {
    0%, 100% { transform: rotateY(0deg) translateX(0); opacity: 0.2; }
    25% { transform: rotateY(180deg) translateX(10px); opacity: 0.4; }
    50% { transform: rotateY(360deg) translateX(0); opacity: 0.3; }
    75% { transform: rotateY(180deg) translateX(-10px); opacity: 0.35; }
  }
  @keyframes symmetric-pulse {
    0%, 100% { transform: scaleX(1); opacity: 0.15; }
    50% { transform: scaleX(-1); opacity: 0.25; }
  }
  .animate-ripple-reflect { animation: ripple-reflect 6s ease-in-out infinite; }
  .animate-water-wave { animation: water-wave 12s ease-in-out infinite; }
  .animate-shimmer-sweep { animation: shimmer-sweep 8s ease-in-out infinite; }
  .animate-glass-shine { animation: glass-shine 10s ease-in-out infinite; }
  .animate-mirror-flip { animation: mirror-flip 15s ease-in-out infinite; }
  .animate-symmetric-pulse { animation: symmetric-pulse 8s ease-in-out infinite; }

  @keyframes ripple-ring {
    0% { transform: scale(0.8); opacity: 0.4; }
    50% { transform: scale(1.5); opacity: 0.2; }
    100% { transform: scale(2); opacity: 0; }
  }
  @keyframes light-beam {
    0% { transform: translateX(-150%) rotate(45deg); opacity: 0; }
    50% { opacity: 0.3; }
    100% { transform: translateX(150%) rotate(45deg); opacity: 0; }
  }
  @keyframes diagonal-sweep {
    0%, 100% { transform: translate(-100%, -100%) rotate(45deg); opacity: 0; }
    50% { transform: translate(50%, 50%) rotate(45deg); opacity: 0.2; }
  }
  @keyframes reflect-bounce {
    0%, 100% { transform: translateX(0) scaleX(1); opacity: 0.3; }
    50% { transform: translateX(20px) scaleX(-1); opacity: 0.5; }
  }
  .animate-ripple-ring { animation: ripple-ring 4s ease-out infinite; }
  .animate-light-beam { animation: light-beam 12s ease-in-out infinite; }
  .animate-diagonal-sweep { animation: diagonal-sweep 15s ease-in-out infinite; }
  .animate-reflect-bounce { animation: reflect-bounce 8s ease-in-out infinite; }

  @keyframes glow-pulse {
    0%, 100% { filter: drop-shadow(0 0 8px rgba(62, 180, 137, 0.4)); }
    50% { filter: drop-shadow(0 0 20px rgba(62, 180, 137, 0.8)); }
  }
  .animate-glow-pulse { animation: glow-pulse 3s ease-in-out infinite; }

  @keyframes slide-up-fade {
    0% { opacity: 0; transform: translateY(30px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  .animate-slide-up { animation: slide-up-fade 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; }
  .delay-100 { animation-delay: 0.1s; }
  .delay-200 { animation-delay: 0.2s; }
  .delay-300 { animation-delay: 0.3s; }
  .delay-400 { animation-delay: 0.4s; }
  .delay-500 { animation-delay: 0.5s; }
  .delay-600 { animation-delay: 0.6s; }

  @keyframes scan-lines {
    0% { stroke-dashoffset: 0; }
    100% { stroke-dashoffset: 20; }
  }
  .animate-scan-lines { animation: scan-lines 2s linear infinite; }

  @keyframes recipient-glow {
    0%, 45% { opacity: 0.3; filter: none; transform: scale(1); }
    50%, 60% { opacity: 1; filter: drop-shadow(0 0 8px rgba(37,99,235,0.8)); transform: scale(1.3); }
    100% { opacity: 0.3; filter: none; transform: scale(1); }
  }
  .animate-recipient-glow { animation: recipient-glow 4s infinite; transform-origin: 230px 75px; }

  @keyframes fast-dash {
    0% { stroke-dashoffset: 8; opacity: 0.2; }
    50% { opacity: 0.6; }
    100% { stroke-dashoffset: 0; opacity: 0.2; }
  }
  .animate-fast-dash { animation: fast-dash 0.5s linear infinite; }

  @keyframes shield-pulse {
    0%, 100% { opacity: 0.6; transform: scaleY(1); }
    50% { opacity: 1; transform: scaleY(1.05); }
  }
  .animate-shield-pulse { animation: shield-pulse 2s ease-in-out infinite; transform-origin: 90px 100px; }

  @keyframes smooth-flow {
    0% { stroke-dashoffset: 100; opacity: 0.2; }
    50% { opacity: 1; }
    100% { stroke-dashoffset: 0; opacity: 0.2; }
  }
  .animate-smooth-flow { animation: smooth-flow 3s linear infinite; }

  @keyframes float-node {
    0%, 100% { transform: translateY(0) scale(1); }
    50% { transform: translateY(-8px) scale(1.1); }
  }
  .animate-float-node-1 { animation: float-node 4s ease-in-out infinite; }
  .animate-float-node-2 { animation: float-node 5s ease-in-out infinite; animation-delay: 1s; }
  .animate-float-node-3 { animation: float-node 4.5s ease-in-out infinite; animation-delay: 2s; }

  @keyframes tether-pull {
    0% { stroke-dashoffset: 8; }
    100% { stroke-dashoffset: 0; }
  }
  .animate-tether-pull { animation: tether-pull 1s linear infinite; }

  @keyframes empathy-pulse {
    0%, 100% { opacity: 0.2; transform: scale(0.95); }
    50% { opacity: 0.7; transform: scale(1.05); }
  }
  .animate-empathy-pulse { animation: empathy-pulse 4s ease-in-out infinite; transform-origin: 100px 100px; }

  @keyframes block-fade {
    0%, 100% { opacity: 0.1; transform: translateX(0); }
    50% { opacity: 0.6; transform: translateX(5px); }
  }
  .animate-block-fade { animation: block-fade 2s ease-in-out infinite; }

  @keyframes spin-slow {
    100% { transform: rotate(360deg); }
  }
  .animate-spin-slow { animation: spin-slow 8s linear infinite; transform-origin: 80px 104px; }

  @keyframes insight-curve {
    0% { stroke-dashoffset: 120; opacity: 0.3; }
    50% { opacity: 1; }
    100% { stroke-dashoffset: 0; opacity: 0.3; }
  }
  .animate-insight-curve { animation: insight-curve 4s ease-in-out infinite; }

  @keyframes radar-sweep {
    0% { transform: rotate(0deg); opacity: 0.1; }
    50% { opacity: 0.3; }
    100% { transform: rotate(360deg); opacity: 0.1; }
  }
  .animate-radar-sweep { animation: radar-sweep 6s linear infinite; transform-origin: 100px 100px; }

  @keyframes temporal-node {
    0%, 100% { opacity: 0.3; filter: none; }
    10% { opacity: 1; filter: drop-shadow(0 0 6px rgba(62,180,137,0.8)); }
    30% { opacity: 0.3; filter: none; }
  }
  .animate-temporal-node { animation: temporal-node 6s linear infinite; }

  @keyframes boundary-breathe {
    0%, 100% { transform: scale(1); opacity: 0.2; }
    50% { transform: scale(1.05); opacity: 0.5; }
  }
  .animate-boundary-breathe { animation: boundary-breathe 4s ease-in-out infinite; transform-origin: 100px 100px; }

  @keyframes system-bounce {
    0%, 100% { transform: translate(0,0); opacity: 0.3; }
    50% { transform: translate(10px, 0); opacity: 0.8; }
  }
  .animate-system-bounce-1 { animation: system-bounce 3s ease-in-out infinite; }
  .animate-system-bounce-2 { animation: system-bounce 4s ease-in-out infinite; animation-delay: 1s; }
  .animate-system-bounce-3 { animation: system-bounce 3.5s ease-in-out infinite; animation-delay: 2s; }

  html { scroll-behavior: smooth; }
  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { background: transparent; }
  ::-webkit-scrollbar-thumb { background: #3EB489; border-radius: 10px; opacity: 0.5; }
`;

// ============================================================================
// BRAND & UI UTILITY COMPONENTS
// ============================================================================

interface CopyButtonProps {
  text: string
  label?: string
}

function CopyButton({ text, label }: CopyButtonProps) {
  const [copied, setCopied] = useState(false)
  const handleCopy = () => {
     const textArea = document.createElement("textarea")
     textArea.value = text
     document.body.appendChild(textArea)
     textArea.select()
     try { document.execCommand('copy') } catch(err) {}
     document.body.removeChild(textArea)
     setCopied(true)
     setTimeout(() => setCopied(false), 2000)
  }
  return (
     <button onClick={handleCopy} className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-500 hover:text-[#3EB489] transition-colors mt-3">
        {copied ? <Check size={14} className="text-[#3EB489]"/> : <Copy size={14} />}
        {copied ? 'Copied!' : label || 'Copy'}
     </button>
  )
}

interface DownloadSVGButtonProps {
  targetId: string
  filename: string
  isDarkMode: boolean
}

function DownloadSVGButton({ targetId, filename, isDarkMode }: DownloadSVGButtonProps) {
  const handleDownload = () => {
    const wrapper = document.getElementById(targetId)
    if(!wrapper) return
    const svgNode = wrapper.querySelector('svg')
    if(!svgNode) return

    const serializer = new XMLSerializer()
    let source = serializer.serializeToString(svgNode)

    if(!source.match(/^<svg[^>]+xmlns="http\:\/\/www\.w3\.org\/2000\/svg"/)){
        source = source.replace(/^<svg/, '<svg xmlns="http://www.w3.org/2000/svg"')
    }

    // Replace 'currentColor' with the hardcoded dark or light mode color so it exports correctly
    const fallbackColor = isDarkMode ? '#ffffff' : '#09090b'
    source = source.replace(/currentColor/g, fallbackColor)

    // Inject the CSS animations block into the SVG so it animates standalone
    const styleBlock = `<style>${GLOBAL_CSS_ANIMATIONS}</style>`
    source = source.replace(/(<svg[^>]*>)/, `$1${styleBlock}`)

    const blob = new Blob([source], {type: "image/svg+xml;charset=utf-8"})
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = filename + ".svg"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <button onClick={handleDownload} className="flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-widest hover:text-[#3EB489] hover:border-[#3EB489] transition-colors mt-6 border border-zinc-800 px-5 py-3 rounded-full w-full max-w-[200px] mx-auto bg-white/5 dark:bg-black/20">
       <Download size={14} /> Download SVG
    </button>
  )
}

interface BrandLogoProps {
  className?: string
}

function BrandLogo({ className = "w-10 h-10" }: BrandLogoProps) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
        <g className="animate-logo-left">
          <path d="M 3 20 L 33 50 L 3 80 L 18 80 L 48 50 L 18 20 Z" fill="#3EB489" />
        </g>
        <g className="animate-logo-right">
          <path d="M 97 20 L 67 50 L 97 80 L 82 80 L 52 50 L 82 20 Z" fill="#3EB489" />
        </g>
      </svg>
    </div>
  )
}

// Generates true SVG pure-vector files for the variations so they can be downloaded cleanly
interface LogoVariationSVGProps {
  variant: string
  color: string
}

function LogoVariationSVG({ variant, color }: LogoVariationSVGProps) {
  const fill = color === 'white' ? '#ffffff' : color === 'mint' ? '#3EB489' : '#09090b'

  const iconGroup = (
     <g>
        <path d="M 3 20 L 33 50 L 3 80 L 18 80 L 48 50 L 18 20 Z" fill="#3EB489" />
        <path d="M 97 20 L 67 50 L 97 80 L 82 80 L 52 50 L 82 20 Z" fill="#3EB489" />
     </g>
  )

  if (variant === 'horizontal') {
    return (
      <svg viewBox="0 0 350 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full max-h-16">
        <g transform="translate(0, 10) scale(0.8)">{iconGroup}</g>
        <text x="95" y="62" fontFamily="Inter, sans-serif" fontWeight="bold" fontSize="42" letterSpacing="-1.5" fill={fill}>Mirror Factory</text>
      </svg>
    )
  }
  if (variant === 'tall') {
    return (
      <svg viewBox="0 0 200 220" xmlns="http://www.w3.org/2000/svg" className="w-full h-full max-h-32">
        <g transform="translate(50, 0)">{iconGroup}</g>
        <text x="100" y="145" fontFamily="Inter, sans-serif" fontWeight="bold" fontSize="38" letterSpacing="-1" textAnchor="middle" fill={fill}>MIRROR</text>
        <text x="100" y="185" fontFamily="Inter, sans-serif" fontWeight="bold" fontSize="38" letterSpacing="-1" textAnchor="middle" fill={fill}>FACTORY</text>
      </svg>
    )
  }
  if (variant === 'mf') {
    return (
      <svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full max-h-16">
        <g transform="translate(0, 10) scale(0.8)">{iconGroup}</g>
        <text x="95" y="65" fontFamily="Inter, sans-serif" fontWeight="bold" fontSize="52" letterSpacing="-3" fill={fill}>MF</text>
      </svg>
    )
  }
  if (variant === 'icon') {
    return (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full max-h-16">
        {iconGroup}
      </svg>
    )
  }
  if (variant === 'horizontal-subtitle') {
    return (
      <svg viewBox="0 0 350 130" xmlns="http://www.w3.org/2000/svg" className="w-full h-full max-h-20">
        <g transform="translate(0, 10) scale(0.8)">{iconGroup}</g>
        <text x="95" y="55" fontFamily="Inter, sans-serif" fontWeight="bold" fontSize="42" letterSpacing="-1.5" fill={fill}>Mirror Factory</text>
        <text x="95" y="85" fontFamily="'Playfair Display', serif" fontWeight="400" fontSize="16" letterSpacing="0.5" fill={fill} opacity="0.7">Human Factors AI Research</text>
      </svg>
    )
  }
  if (variant === 'tall-subtitle') {
    return (
      <svg viewBox="0 0 200 250" xmlns="http://www.w3.org/2000/svg" className="w-full h-full max-h-36">
        <g transform="translate(50, 0)">{iconGroup}</g>
        <text x="100" y="135" fontFamily="Inter, sans-serif" fontWeight="bold" fontSize="38" letterSpacing="-1" textAnchor="middle" fill={fill}>MIRROR</text>
        <text x="100" y="170" fontFamily="Inter, sans-serif" fontWeight="bold" fontSize="38" letterSpacing="-1" textAnchor="middle" fill={fill}>FACTORY</text>
        <text x="100" y="200" fontFamily="'Playfair Display', serif" fontWeight="400" fontSize="14" letterSpacing="0.5" textAnchor="middle" fill={fill} opacity="0.7">Human Factors AI Research</text>
      </svg>
    )
  }
  return null
}

// ============================================================================
// ILLUSTRATIVE SVG COMPONENTS
// ============================================================================

interface SVGComponentProps {
  isDarkMode: boolean
}

function SymmetryMirrorSVG({ isDarkMode }: SVGComponentProps) {
  return (
    <div className="w-full flex justify-center my-16 py-8 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 mint-bg rounded-full opacity-5 blur-3xl pointer-events-none" />
      <svg viewBox="0 0 400 300" className="w-full max-w-md h-auto overflow-visible" style={{ filter: isDarkMode ? 'drop-shadow(0px 0px 20px rgba(255,255,255,0.02))' : 'drop-shadow(0px 0px 20px rgba(0,0,0,0.05))' }}>
        <line x1="200" y1="20" x2="200" y2="280" stroke="#3EB489" strokeWidth="1.5" className="opacity-40 animate-pulse" strokeDasharray="4 4" />
        <g style={{ transformOrigin: '110px 260px' }} className="animate-perfect-symmetry">
          <path d="M 50 50 C 100 50, 120 90, 120 110 L 145 135 L 130 145 C 135 150, 135 155, 130 160 C 135 170, 125 185, 110 195 C 90 210, 70 230, 40 260" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-950 dark:text-zinc-200" />
          <circle cx="100" cy="100" r="4" fill="currentColor" className="text-zinc-950 dark:text-zinc-200 opacity-80" />
        </g>
        <g style={{ transformOrigin: '200px 150px', transform: 'scaleX(-1)' }}>
          <g style={{ transformOrigin: '110px 260px' }} className="animate-perfect-symmetry">
            <path d="M 50 50 C 100 50, 120 90, 120 110 L 145 135 L 130 145 C 135 150, 135 155, 130 160 C 135 170, 125 185, 110 195 C 90 210, 70 230, 40 260" fill="none" stroke="#3EB489" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'drop-shadow(0 0 8px rgba(62,180,137,0.6))' }} />
            <circle cx="100" cy="100" r="4" fill="#3EB489" className="animate-pulse" />
          </g>
        </g>
      </svg>
    </div>
  )
}

function TheSieveSVG({ isDarkMode }: SVGComponentProps) {
  return (
    <div className="w-full flex justify-center mb-10 relative h-48">
      <svg viewBox="0 0 200 200" className="w-full h-full overflow-visible">
        <g className="animate-chaotic-flow">
          <path d="M 20 20 Q 80 50 100 100 M 50 10 Q 90 60 100 100 M 180 20 Q 120 50 100 100 M 150 10 Q 110 60 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" className="opacity-60 dark:opacity-30 text-zinc-950 dark:text-zinc-200" strokeDasharray="4 6" />
        </g>
        <path d="M 40 80 C 70 80 80 120 90 140 C 95 150 105 150 110 140 C 120 120 130 80 160 80" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-zinc-950 dark:text-zinc-200" />
        <g>
          <circle cx="100" cy="145" r="3" fill="#3EB489" className="animate-sieve-drop drop-shadow-[0_0_5px_rgba(62,180,137,0.8)]" />
          <circle cx="100" cy="145" r="3" fill="#3EB489" className="animate-sieve-drop drop-shadow-[0_0_5px_rgba(62,180,137,0.8)]" style={{ animationDelay: '1.5s' }} />
          <circle cx="100" cy="145" r="3" fill="#3EB489" className="animate-sieve-drop drop-shadow-[0_0_5px_rgba(62,180,137,0.8)]" style={{ animationDelay: '2.5s' }} />
          <line x1="100" y1="150" x2="100" y2="190" stroke="#3EB489" strokeWidth="1" strokeLinecap="round" className="opacity-40" />
          <ellipse cx="100" cy="190" rx="12" ry="3" fill="#3EB489" className="animate-pulse opacity-80" />
        </g>
      </svg>
    </div>
  )
}

function ThoughtWeaverSVG({ isDarkMode }: SVGComponentProps) {
  return (
    <div className="w-full flex justify-center mb-10 relative h-48">
      <svg viewBox="0 0 200 200" className="w-full h-full overflow-visible">
        <path d="M 20 100 C 50 40, 100 160, 130 100 C 150 60, 180 140, 180 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="animate-human-chaos text-zinc-950 dark:text-zinc-200 opacity-70 dark:opacity-50" strokeDasharray="8 6" />
        <path d="M 20 100 C 50 40, 100 160, 130 100 C 150 60, 180 140, 180 100" fill="none" stroke="#3EB489" strokeWidth="2" strokeLinecap="round" className="animate-draw-weave" strokeDasharray="300" strokeDashoffset="300" />
        <circle cx="75" cy="100" r="4.5" fill="#3EB489" className="animate-pulse opacity-80" />
        <circle cx="155" cy="100" r="4.5" fill="#3EB489" className="animate-pulse opacity-80" style={{ animationDelay: '1s' }} />
      </svg>
    </div>
  )
}

function EnvironmentalSyncSVG({ isDarkMode }: SVGComponentProps) {
  return (
    <div className="w-full flex justify-center mb-10 relative h-48">
      <svg viewBox="0 0 200 200" className="w-full h-full overflow-visible">
        <circle cx="100" cy="100" r="8" fill="#3EB489" className="drop-shadow-[0_0_8px_rgba(62,180,137,0.5)]" />
        <circle cx="100" cy="100" r="40" fill="none" stroke="#3EB489" strokeWidth="1" className="opacity-20 animate-ping-slow" />
        <circle cx="100" cy="100" r="70" fill="none" stroke="#3EB489" strokeWidth="1" className="opacity-10 animate-ping-slow" style={{ animationDelay: '1s' }} />
        <path d="M 100 100 L 140 60 M 100 100 L 50 120 M 100 100 L 120 160" fill="none" stroke="#3EB489" strokeWidth="1.5" strokeDasharray="4 4" className="animate-scan-lines opacity-70 dark:opacity-50" />
        <rect x="135" y="50" width="10" height="10" className="text-zinc-950 dark:text-zinc-200 opacity-80 dark:opacity-50" transform="rotate(45 140 55)" />
        <circle cx="45" cy="125" r="6" className="text-zinc-950 dark:text-zinc-200 opacity-80 dark:opacity-50" />
        <polygon points="120,165 115,175 125,175" className="text-zinc-950 dark:text-zinc-200 opacity-80 dark:opacity-50" />
      </svg>
    </div>
  )
}

function ContextualLayersSVG({ isDarkMode }: SVGComponentProps) {
  return (
    <div className="w-full flex justify-center mb-8 relative h-40">
      <svg viewBox="0 0 200 200" className="w-full h-full overflow-visible group animate-master-glow">
        <ellipse cx="100" cy="140" rx="60" ry="20" fill="none" strokeWidth="1.5" className="animate-layer-seq-1 text-zinc-950 dark:text-zinc-200" />
        <ellipse cx="100" cy="110" rx="75" ry="25" fill="none" strokeWidth="1.5" className="animate-layer-seq-2 text-zinc-950 dark:text-zinc-200" />
        <ellipse cx="100" cy="80" rx="90" ry="30" fill="none" strokeWidth="2" className="animate-layer-seq-3 text-zinc-950 dark:text-zinc-200" />
        <path d="M 100 40 L 100 160" fill="none" stroke="#3EB489" strokeWidth="2" strokeDasharray="5 5" className="animate-pulse opacity-80" />
        <circle cx="100" cy="80" r="4" fill="#3EB489" className="animate-pulse" />
        <circle cx="100" cy="110" r="3" fill="#3EB489" />
        <circle cx="100" cy="140" r="2" fill="#3EB489" />
      </svg>
    </div>
  )
}

function SharedContextSVG({ isDarkMode }: SVGComponentProps) {
  return (
    <div className="w-full flex justify-center mb-8 relative h-40">
      <svg viewBox="0 0 300 150" className="w-full h-full overflow-visible">
        <path d="M 50 30 C 80 30, 90 60, 90 75 C 90 90, 80 120, 50 120" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-zinc-950 dark:text-zinc-200 opacity-80 dark:opacity-60" />
        <circle cx="70" cy="75" r="4" fill="#3EB489" className="opacity-80 drop-shadow-[0_0_4px_rgba(62,180,137,0.8)]" />
        <path d="M 250 30 C 220 30, 210 60, 210 75 C 210 90, 220 120, 250 120" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-zinc-950 dark:text-zinc-200 opacity-80 dark:opacity-60" />
        <circle cx="230" cy="75" r="4" fill="#2563EB" className="animate-recipient-glow" />
        <path d="M 95 75 C 130 50, 170 100, 205 75" fill="none" stroke="#3EB489" strokeWidth="1.5" strokeDasharray="6 6" className="animate-scan-lines opacity-70 dark:opacity-50" />
        <circle cx="0" cy="0" r="4" fill="#3EB489" className="animate-travel-packet-1 drop-shadow-[0_0_5px_rgba(62,180,137,0.8)]">
          <animateMotion dur="4s" repeatCount="indefinite" path="M 95 75 C 130 50, 170 100, 205 75" />
        </circle>
        <circle cx="0" cy="0" r="3" fill="#2563EB" className="animate-travel-packet-2 drop-shadow-[0_0_5px_rgba(37,99,235,0.8)]">
          <animateMotion dur="4s" begin="2s" repeatCount="indefinite" path="M 95 75 C 130 50, 170 100, 205 75" />
        </circle>
      </svg>
    </div>
  )
}

function ContextBufferSVG({ isDarkMode }: SVGComponentProps) {
  return (
    <div className="w-full flex justify-center mb-8 relative h-40">
      <svg viewBox="0 0 200 200" className="w-full h-full overflow-visible">
        <path d="M 10 50 L 70 80 M 10 100 L 70 100 M 10 150 L 70 120" stroke="currentColor" strokeWidth="1.5" className="opacity-60 dark:opacity-30 text-zinc-950 dark:text-zinc-200 animate-pulse" strokeDasharray="4 4"/>
        <path d="M 20 70 L 60 90 M 20 130 L 60 110" stroke="#3EB489" strokeWidth="1.5" className="opacity-70 dark:opacity-50 animate-fast-dash" strokeDasharray="4 4"/>
        <path d="M 90 40 Q 120 100 90 160" fill="none" stroke="#3EB489" strokeWidth="4" strokeLinecap="round" className="drop-shadow-[0_0_8px_rgba(62,180,137,0.6)] animate-shield-pulse" />
        <path d="M 115 100 L 190 100" fill="none" stroke="#3EB489" strokeWidth="2.5" strokeLinecap="round" className="animate-smooth-flow" strokeDasharray="100" strokeDashoffset="100" />
      </svg>
    </div>
  )
}

function HumanAgencySVG({ isDarkMode }: SVGComponentProps) {
  return (
    <div className="w-full flex justify-center mb-8 relative h-40">
      <svg viewBox="0 0 200 200" className="w-full h-full overflow-visible">
        <circle cx="40" cy="60" r="6" fill="#3EB489" className="animate-float-node-1 drop-shadow-[0_0_4px_rgba(62,180,137,0.5)]" />
        <circle cx="160" cy="70" r="5" fill="#3EB489" className="animate-float-node-2 drop-shadow-[0_0_4px_rgba(62,180,137,0.5)]" />
        <circle cx="100" cy="40" r="7" fill="#3EB489" className="animate-float-node-3 drop-shadow-[0_0_4px_rgba(62,180,137,0.5)]" />
        <path d="M 100 150 Q 70 100 40 60" fill="none" stroke="#3EB489" strokeWidth="1.5" className="opacity-60 dark:opacity-40 animate-tether-pull" strokeDasharray="4 4" />
        <path d="M 100 150 Q 130 110 160 70" fill="none" stroke="#3EB489" strokeWidth="1.5" className="opacity-60 dark:opacity-40 animate-tether-pull" strokeDasharray="4 4" style={{animationDelay: '0.5s'}}/>
        <path d="M 100 150 L 100 40" fill="none" stroke="#3EB489" strokeWidth="1.5" className="opacity-60 dark:opacity-40 animate-tether-pull" strokeDasharray="4 4" style={{animationDelay: '1s'}}/>
        <circle cx="100" cy="150" r="10" fill="currentColor" className="text-zinc-950 dark:text-zinc-200 z-10 relative" />
        <circle cx="100" cy="150" r="16" fill="none" stroke="currentColor" strokeWidth="1" className="text-zinc-950 dark:text-zinc-200 opacity-20 animate-ping-slow" />
      </svg>
    </div>
  )
}

function EmpathyEngineSVG({ isDarkMode }: SVGComponentProps) {
  return (
    <div className="w-full flex justify-center mb-8 relative h-40">
      <svg viewBox="0 0 200 200" className="w-full h-full overflow-visible">
        <circle cx="80" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="2" className="text-zinc-950 dark:text-zinc-200 opacity-70 dark:opacity-50" />
        <circle cx="120" cy="100" r="40" fill="none" stroke="#3EB489" strokeWidth="2" className="opacity-70 dark:opacity-50" />
        <path d="M 100 65 A 40 40 0 0 0 100 135 A 40 40 0 0 0 100 65" fill="#3EB489" className="animate-empathy-pulse mix-blend-screen" />
        <circle cx="100" cy="100" r="8" fill="currentColor" className="text-zinc-900 dark:text-zinc-50 z-10" />
      </svg>
    </div>
  )
}

function DataRefinerySVG({ isDarkMode }: SVGComponentProps) {
  return (
    <div className="w-full flex justify-center mb-8 relative h-40">
      <svg viewBox="0 0 200 200" className="w-full h-full overflow-visible">
        <rect x="20" y="60" width="8" height="8" fill="currentColor" className="text-zinc-950 dark:text-zinc-200 opacity-70 dark:opacity-40 animate-block-fade" />
        <rect x="40" y="80" width="8" height="8" fill="currentColor" className="text-zinc-950 dark:text-zinc-200 opacity-70 dark:opacity-40 animate-block-fade" style={{animationDelay: '0.2s'}} />
        <rect x="20" y="100" width="8" height="8" fill="currentColor" className="text-zinc-950 dark:text-zinc-200 opacity-70 dark:opacity-40 animate-block-fade" style={{animationDelay: '0.4s'}} />
        <rect x="40" y="120" width="8" height="8" fill="currentColor" className="text-zinc-950 dark:text-zinc-200 opacity-70 dark:opacity-40 animate-block-fade" style={{animationDelay: '0.6s'}} />
        <rect x="20" y="140" width="8" height="8" fill="currentColor" className="text-zinc-950 dark:text-zinc-200 opacity-70 dark:opacity-40 animate-block-fade" style={{animationDelay: '0.8s'}} />
        <circle cx="80" cy="104" r="15" fill="none" stroke="#3EB489" strokeWidth="2" className="animate-spin-slow" strokeDasharray="10 10" />
        <circle cx="80" cy="104" r="4" fill="#3EB489" />
        <path d="M 95 104 C 130 104, 140 60, 180 60" fill="none" stroke="#3EB489" strokeWidth="3" strokeLinecap="round" className="animate-insight-curve drop-shadow-[0_0_6px_rgba(62,180,137,0.6)]" strokeDasharray="120" strokeDashoffset="120" />
      </svg>
    </div>
  )
}

function TemporalSyncSVG({ isDarkMode }: SVGComponentProps) {
  return (
    <div className="w-full flex justify-center mb-8 relative h-40">
      <svg viewBox="0 0 200 200" className="w-full h-full overflow-visible">
        <circle cx="100" cy="100" r="30" fill="none" stroke="currentColor" strokeWidth="1" className="text-zinc-950 dark:text-zinc-200 opacity-40 dark:opacity-20" />
        <circle cx="100" cy="100" r="55" fill="none" stroke="currentColor" strokeWidth="1" className="text-zinc-950 dark:text-zinc-200 opacity-40 dark:opacity-20" />
        <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="1" className="text-zinc-950 dark:text-zinc-200 opacity-40 dark:opacity-20" />
        <path d="M 100 100 L 100 20 A 80 80 0 0 1 180 100 Z" fill="#3EB489" className="opacity-10 animate-radar-sweep" />
        <circle cx="100" cy="70" r="4" fill="#3EB489" className="animate-temporal-node" />
        <circle cx="100" cy="45" r="5" fill="#3EB489" className="animate-temporal-node" style={{animationDelay: '0.5s'}} />
        <circle cx="100" cy="20" r="6" fill="#3EB489" className="animate-temporal-node" style={{animationDelay: '1s'}} />
        <circle cx="100" cy="100" r="6" fill="currentColor" className="text-zinc-950 dark:text-zinc-200" />
      </svg>
    </div>
  )
}

function SovereignMindSVG({ isDarkMode }: SVGComponentProps) {
  return (
    <div className="w-full flex justify-center mb-8 relative h-40">
      <svg viewBox="0 0 200 200" className="w-full h-full overflow-visible">
        <circle cx="100" cy="100" r="50" fill="none" stroke="currentColor" strokeWidth="2" className="text-zinc-950 dark:text-zinc-200 opacity-80" />
        <circle cx="100" cy="100" r="55" fill="none" stroke="#3EB489" strokeWidth="1" className="opacity-50 dark:opacity-30 animate-boundary-breathe" />
        <path d="M 85 100 C 85 80, 115 80, 115 100 C 115 120, 85 120, 85 100" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-zinc-950 dark:text-zinc-200 animate-pulse" />
        <circle cx="100" cy="100" r="3" fill="currentColor" className="text-zinc-950 dark:text-zinc-200" />
        <circle cx="30" cy="100" r="4" fill="#3EB489" className="animate-system-bounce-1" />
        <circle cx="170" cy="70" r="3" fill="#3EB489" className="animate-system-bounce-2" />
        <circle cx="150" cy="160" r="5" fill="#3EB489" className="animate-system-bounce-3" />
      </svg>
    </div>
  )
}

// ============================================================================
// MAIN APP COMPONENT
// ============================================================================
export default function MirrorFactoryApp() {
  const [heroVariation, setHeroVariation] = useState(1) // 1-4 for different hero animations
  const [currentPage, setCurrentPage] = useState(() => {
    // Check if URL has /brand-guide to show brand guide on load
    if (typeof window !== 'undefined') {
      return window.location.pathname.includes('brand-guide') ? 'brand-guide' : 'home'
    }
    return 'home'
  })

  // Array of Logo Variations for the Brand Guide
  const logoVariations = [
    { id: 'logo-horiz-dark', name: 'Primary Horizontal', variant: 'horizontal', color: 'white', bg: 'bg-[#09090b] border-zinc-800' },
    { id: 'logo-horiz-light', name: 'Primary Horizontal', variant: 'horizontal', color: 'black', bg: 'bg-[#fafafa] border-zinc-200' },
    { id: 'logo-horiz-subtitle-dark', name: 'Horizontal with Subtitle', variant: 'horizontal-subtitle', color: 'white', bg: 'bg-[#09090b] border-zinc-800' },
    { id: 'logo-horiz-subtitle-light', name: 'Horizontal with Subtitle', variant: 'horizontal-subtitle', color: 'black', bg: 'bg-[#fafafa] border-zinc-200' },
    { id: 'logo-tall-dark', name: 'Stacked / Tall', variant: 'tall', color: 'white', bg: 'bg-[#09090b] border-zinc-800' },
    { id: 'logo-tall-light', name: 'Stacked / Tall', variant: 'tall', color: 'black', bg: 'bg-[#fafafa] border-zinc-200' },
    { id: 'logo-tall-subtitle-dark', name: 'Stacked with Subtitle', variant: 'tall-subtitle', color: 'white', bg: 'bg-[#09090b] border-zinc-800' },
    { id: 'logo-tall-subtitle-light', name: 'Stacked with Subtitle', variant: 'tall-subtitle', color: 'black', bg: 'bg-[#fafafa] border-zinc-200' },
    { id: 'logo-mf-dark', name: 'Monogram (MF)', variant: 'mf', color: 'white', bg: 'bg-[#09090b] border-zinc-800' },
    { id: 'logo-mf-light', name: 'Monogram (MF)', variant: 'mf', color: 'black', bg: 'bg-[#fafafa] border-zinc-200' },
    { id: 'logo-icon-mint', name: 'Icon Mark (Mint)', variant: 'icon', color: 'mint', bg: 'bg-[#09090b] border-zinc-800' },
    { id: 'logo-icon-white', name: 'Icon Mark (White)', variant: 'icon', color: 'white', bg: 'bg-[#09090b] border-zinc-800' },
  ]

  return (
    <div className="min-h-screen w-full transition-colors duration-700 font-sans bg-[#09090b] text-zinc-50 dark">

      <style dangerouslySetInnerHTML={{ __html: GLOBAL_CSS_ANIMATIONS }} />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/20 border-b border-zinc-800/80 transition-colors">
        <div className="max-w-[90rem] mx-auto w-full flex justify-between items-center px-6 md:px-8 py-4 md:py-5 border-x border-zinc-800/30">
        <button
          onClick={() => setCurrentPage('home')}
          className="flex items-center gap-2 md:gap-3 cursor-pointer group hover:opacity-80 transition-opacity"
        >
          <BrandLogo className="w-10 h-10 md:w-12 md:h-12 animate-logo-intro" />
          <div className="flex flex-col gap-0 leading-none">
            <span className="font-sans font-bold text-lg md:text-xl tracking-tighter leading-none pt-1 flex gap-1 md:gap-1.5 text-zinc-50">
              <span className="animate-word-1 inline-block">Mirror</span>
              <span className="animate-word-2 inline-block">Factory</span>
            </span>
            <span className="font-serif text-[10px] text-zinc-400 mt-0 tracking-wide">Human Factors AI Research</span>
          </div>
        </button>

        <div className="hidden md:flex items-center gap-6 text-xs font-serif opacity-60 ml-8 mr-auto">
          {currentPage === 'home' ? (
            <>
              <a href="#mandate" className="hover:text-[#EA580C] transition-colors">Who We Are</a>
              <a href="#methodology" className="hover:text-[#EA580C] transition-colors">Methodology</a>
              <a href="#initiatives" className="hover:text-[#EA580C] transition-colors">Initiatives</a>
            </>
          ) : (
            <button
              onClick={() => setCurrentPage('home')}
              className="transition-colors text-[#EA580C] opacity-100"
            >
              ← Back to Site
            </button>
          )}
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          <a
            href="mailto:hello@mirrorfactory.com"
            className="text-xs font-mono tracking-wider opacity-70 hover:opacity-100 hover:text-[#EA580C] transition-all hidden sm:flex items-center gap-2 text-zinc-300"
          >
            <Mail size={14} />
            <span>hello@mirrorfactory.com</span>
          </a>
        </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="pt-20 min-h-screen relative">
        <div className="fixed inset-0 pointer-events-none grid grid-cols-1 md:grid-cols-12 divide-x divide-zinc-800/30 z-0">
          {Array(12).fill(0).map((_, i) => <div key={i} className="h-full hidden md:block" />)}
        </div>

        <div className="flex-grow grid grid-cols-1 md:grid-cols-12 max-w-[90rem] mx-auto w-full border-x border-zinc-800/30 relative z-10 bg-transparent">

          {currentPage === 'home' ? (
            // =========================================================
            // HOME PAGE CONTENT
            // =========================================================
            <>
              {/* HERO */}
              <div className="md:col-span-12 border-b border-zinc-800/50 p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col items-center justify-center min-h-[85vh] relative overflow-hidden">
                {/* Frosted glass grid overlay - Hero only */}
                <div className="absolute inset-0 pointer-events-none grid grid-cols-1 md:grid-cols-12 divide-x divide-transparent">
                  {Array(12).fill(0).map((_, i) => {
                    const frostPanels = [2, 5, 7, 10];
                    const isFrostPanel = frostPanels.includes(i);
                    const animationDelay = frostPanels.indexOf(i) * 1.5;
                    return (
                      <div
                        key={i}
                        className={`h-full hidden md:block ${isFrostPanel ? 'animate-frost-glass' : ''}`}
                        style={isFrostPanel ? { animationDelay: `${animationDelay}s` } : {}}
                      />
                    );
                  })}
                </div>

                {/* Subtle blurred mint and orange background gradients */}
                <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-gradient-to-br from-[#3EB489]/8 to-transparent rounded-full blur-3xl opacity-40 pointer-events-none" />
                <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-gradient-to-bl from-[#EA580C]/6 to-transparent rounded-full blur-3xl opacity-30 pointer-events-none" />
                <div className="absolute bottom-1/4 left-1/3 w-[450px] h-[450px] bg-gradient-to-tr from-[#3EB489]/5 to-transparent rounded-full blur-3xl opacity-35 pointer-events-none" />

                <div className="relative z-10 w-full max-w-5xl text-center">
                  <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6 md:mb-8 opacity-70 animate-slide-up delay-200">
                    <span className="w-2 h-2 rounded-full bg-[#EA580C] animate-pulse"/>
                    <span className="text-xs sm:text-sm md:text-base font-mono uppercase tracking-widest text-zinc-300">Human Factors AI Research</span>
                  </div>

                  <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[6.5rem] font-medium leading-[1.05] sm:leading-[1] md:leading-[0.95] mb-6 sm:mb-8 md:mb-10 lg:mb-12 tracking-tight text-zinc-50 animate-slide-up delay-400">
                    Intelligence <br className="hidden sm:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3EB489] to-teal-700 italic pr-2 sm:pr-4 animate-glow-pulse">Requires</span> <br className="hidden sm:block" />
                    Reflection.
                  </h1>

                  <div className="mb-12 sm:mb-16 md:mb-20 py-2 animate-slide-up delay-600 mx-auto max-w-3xl text-center">
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-serif text-zinc-400 leading-relaxed font-extralight">
                      We conduct research and build tools to ensure the machinery of tomorrow doesn&apos;t overwrite the humanity of today.
                    </p>
                  </div>

                  {/* Quote - Centered and Wide */}
                  <div className="max-w-4xl mx-auto mt-8 md:mt-12 animate-slide-up delay-800">
                    <div className="w-12 h-[2px] mint-bg mb-6 mx-auto" />
                    <p className="text-sm sm:text-base md:text-lg opacity-70 mb-4 font-serif italic leading-relaxed text-zinc-400">
                      &ldquo;Come, let&apos;s build a mirror factory first and put out nothing but mirrors for the next year and take a long look in them.&rdquo;
                    </p>
                    <p className="text-xs sm:text-sm font-mono uppercase tracking-widest opacity-50 text-zinc-400">— Ray Bradbury, Fahrenheit 451</p>
                  </div>
                </div>
              </div>

              {/* SECTION 1: THE MANDATE / WHO WE ARE */}
              <div id="mandate" className="md:col-span-3 border-b md:border-b-0 border-r-0 md:border-r border-zinc-800/50 p-6 sm:p-8 hidden md:block">
                 <div className="sticky top-32 opacity-40">
                   <span className="font-mono text-xs uppercase tracking-widest transform -rotate-90 inline-block origin-top-left translate-y-24">01 — Who We Are</span>
                 </div>
              </div>

              <div className="md:col-span-9 p-6 sm:p-8 md:p-16 lg:px-24 lg:py-32 border-b border-zinc-800/50 relative overflow-hidden">
                {/* Reflection Background Variation 1: Water Ripple Effect */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-[#3EB489]/10 to-transparent rounded-full blur-3xl animate-ripple-reflect pointer-events-none" />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-tl from-teal-500/10 to-transparent rounded-full blur-3xl animate-water-wave pointer-events-none" />
                <div className="absolute top-1/3 right-1/3 w-64 h-64 border border-[#3EB489]/10 rounded-full animate-water-wave pointer-events-none" style={{ animationDelay: '2s' }} />
                <div className="absolute bottom-1/3 left-1/3 w-48 h-48 bg-[#3EB489]/5 rounded-full animate-ripple-reflect pointer-events-none" style={{ animationDelay: '4s' }} />

                <div className="max-w-3xl fade-in delay-100 mx-auto text-center md:text-left relative z-10">
                  <h2 className="font-serif text-4xl md:text-5xl font-medium mb-12 text-zinc-50">Who We Are</h2>
                  <div className="prose prose-lg md:prose-xl dark:prose-invert font-sans font-light leading-relaxed text-zinc-300">
                    <p>
                      We are a human-centered research laboratory and product studio. We do not just build AI; we explore the profound connection between people and artificial intelligence.
                    </p>

                    <SymmetryMirrorSVG isDarkMode={true} />

                    <p className="font-serif italic text-2xl md:text-3xl text-white pl-6 md:pl-8 border-l-2 mint-border leading-snug my-16">
                      Our core thesis is exploration and harmony. We are not trying to merge human and machine into a single synced system; we seek to understand how we can best work with AI to make our lives deeply better.
                    </p>

                    <p>
                      We want to understand deeply—not just what statistically proves we can produce more—but what provides the profound feeling of relief. How do we eliminate context overload? How do we stop the endless context switching that drains our daily energy?
                    </p>

                    <p>
                      We are researching how to build systems that grant us superpowers while giving us back our lives, allowing us to focus more on the humanities of this earth. To <em>be</em>, instead of just to <em>do</em>. To still have the energy and space to create.
                    </p>

                    <h3 className="font-serif text-3xl font-medium mt-16 mb-6 text-white">The Foundation</h3>
                    <p>
                      The foundation of this mission is built by three partners: Kyle Morrand, Bobby Torres, and Alfonso Morales.
                    </p>
                    <p>
                      With a shared background in simulation and mixed reality, our focus has always been on the human experience within digital spaces. This perspective drives our desire to answer the practical questions of the AI age: What is worth our time? What is worth handing off? How do we use deep context to build out an entire campaign or brand, without losing the human soul behind it?
                    </p>

                    <h3 className="font-serif text-3xl font-medium mt-16 mb-6 text-white">Validated Research & Real-World Integration</h3>
                    <p>
                      To find these answers, we partner heavily with higher education and universities to conduct validated studies and publish our findings. Simultaneously, we actively help companies bring these AI ecosystems into their own teams. This real-world integration continuously deepens our understanding of human-AI partnership, allowing us to bridge the gap between academic theory and daily human utility.
                    </p>
                  </div>
                </div>
              </div>

              {/* SECTION 2: METHODOLOGY */}
              <div id="methodology" className="md:col-span-3 border-b md:border-b-0 border-r-0 md:border-r border-zinc-800/50 p-6 sm:p-8 hidden md:block">
                 <div className="sticky top-32 opacity-40">
                   <span className="font-mono text-xs uppercase tracking-widest transform -rotate-90 inline-block origin-top-left translate-y-28">02 — Methodology</span>
                 </div>
              </div>

              <div className="md:col-span-9 p-6 sm:p-8 md:p-16 lg:px-24 lg:py-24 border-b border-zinc-800/50 relative overflow-hidden">
                {/* Reflection Background Variation 2: Glass Shimmer Effect (Slower & Subtler) */}
                <div className="absolute top-0 left-1/2 w-[800px] h-full bg-gradient-to-b from-[#3EB489]/3 via-transparent to-[#3EB489]/3 animate-glass-shine pointer-events-none opacity-50" style={{ animationDuration: '18s' }} />
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className="absolute top-0 -left-1/4 w-[200%] h-32 bg-gradient-to-r from-transparent via-white/4 dark:via-white/2 to-transparent -rotate-12 animate-shimmer-sweep pointer-events-none opacity-40" style={{ animationDuration: '16s' }} />
                  <div className="absolute bottom-1/3 -left-1/4 w-[200%] h-24 bg-gradient-to-r from-transparent via-teal-400/4 to-transparent -rotate-12 animate-shimmer-sweep pointer-events-none opacity-40" style={{ animationDelay: '8s', animationDuration: '16s' }} />
                </div>

                <h2 className="font-serif text-4xl font-medium mb-12 md:mb-20 text-center md:text-left relative z-10 text-zinc-50">The Architecture of Study</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
                  <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <TheSieveSVG isDarkMode={true} />
                    <h3 className="font-serif text-2xl font-medium mb-4 mt-4 text-zinc-50">The Sieve & The Signal</h3>
                    <p className="font-light text-zinc-400 leading-relaxed text-sm">
                      In an era of overwhelming digital noise, we explore how to preserve the true human signal. We study how our authentic voice, creativity, and storytelling can thrive, rather than be washed away, when co-creating with AI.
                    </p>
                  </div>

                  <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <ThoughtWeaverSVG isDarkMode={true} />
                    <h3 className="font-serif text-2xl font-medium mb-4 mt-4 text-zinc-50">Cognitive Harmony</h3>
                    <p className="font-light text-zinc-400 leading-relaxed text-sm">
                      Prolonged interaction with AI shapes how we process the world. We focus on designing experiences that weave artificial intelligence naturally into our own human thought patterns, ensuring that we guide the technology, rather than the technology guiding us.
                    </p>
                  </div>

                  <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <EnvironmentalSyncSVG isDarkMode={true} />
                    <h3 className="font-serif text-2xl font-medium mb-4 mt-4 text-zinc-50">Contextual Sync</h3>
                    <p className="font-light text-zinc-400 leading-relaxed text-sm">
                      True understanding requires holding multiple realities at once. We explore how AI can map to the different layers of our minds—from our professional jobs, to our personal lives, to raw ideation—so we don&apos;t have to constantly explain who we are.
                    </p>
                  </div>
                </div>
              </div>

              {/* SECTION 3: INITIATIVES */}
              <div id="initiatives" className="md:col-span-3 border-r-0 md:border-r border-zinc-800/50 p-6 sm:p-8 hidden md:block">
                 <div className="sticky top-32 opacity-40">
                   <span className="font-mono text-xs uppercase tracking-widest transform -rotate-90 inline-block origin-top-left translate-y-24">03 — The Work</span>
                 </div>
              </div>

              <div className="md:col-span-9 p-6 sm:p-8 md:p-16 lg:px-24 lg:py-24 border-b border-zinc-800/50 relative overflow-hidden">
                {/* Reflection Background Variation 3: Mirror Symmetry Effect */}
                <div className="absolute top-1/4 left-0 w-64 h-full bg-gradient-to-r from-[#3EB489]/10 to-transparent animate-symmetric-pulse pointer-events-none" />
                <div className="absolute top-1/4 right-0 w-64 h-full bg-gradient-to-l from-teal-500/10 to-transparent animate-symmetric-pulse pointer-events-none" style={{ animationDelay: '4s' }} />
                <div className="absolute top-1/3 left-1/3 w-32 h-32 border-2 border-[#3EB489]/20 rounded-lg animate-mirror-flip pointer-events-none" />
                <div className="absolute bottom-1/3 right-1/4 w-40 h-40 border border-teal-500/20 rounded-full animate-mirror-flip pointer-events-none" style={{ animationDelay: '5s', animationDuration: '18s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-[#3EB489]/5 to-transparent rounded-full blur-3xl animate-symmetric-pulse pointer-events-none" style={{ animationDelay: '2s' }} />

                <h2 className="font-serif text-4xl font-medium mb-12 md:mb-16 relative z-10 text-zinc-50">Active Initiatives</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                  <div className="p-8 lg:p-12 border border-zinc-800 hover:border-[#3EB489]/50 transition-all duration-500 group flex flex-col h-full bg-white/5">
                    <ContextualLayersSVG isDarkMode={true} />
                    <h3 className="font-serif text-3xl font-medium mb-4 text-zinc-50">Layers Whitepaper</h3>
                    <div className="inline-block px-3 py-1 border mint-border text-[#3EB489] text-[10px] font-mono uppercase tracking-widest mb-6 w-max rounded-full bg-[#3EB489]/10">
                      Coming Soon
                    </div>
                    <p className="text-zinc-400 font-light mb-8 flex-grow leading-relaxed">
                      An initial research concept focused entirely on managing context. This paper explores systems that can hold the different layers of your life simultaneously—from deep professional work to spontaneous ideation. We envision AI that acts as a buffer against context overload, honoring your complex mental state so you can spend less time managing tasks and more time actually living.
                    </p>
                    <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest mt-auto opacity-50">
                      Research pending publication
                    </div>
                  </div>

                  <a href="https://moonshotsandmagic.com" target="_blank" rel="noopener noreferrer" className="p-6 sm:p-8 lg:p-12 border mint-border bg-[#3EB489]/5 transition-all duration-500 group cursor-pointer flex flex-col h-full relative overflow-hidden shadow-lg shadow-[#3EB489]/5">
                    <div className="absolute -right-12 -top-12 w-48 h-48 bg-[#3EB489]/8 rounded-full blur-3xl group-hover:bg-[#3EB489]/15 group-hover:scale-125 transition-all duration-700 pointer-events-none" />
                    <SharedContextSVG isDarkMode={true} />
                    <h3 className="font-serif italic text-2xl md:text-3xl font-medium mb-4 relative z-10 text-zinc-950 dark:text-white">Moonshots & Magic:<br/>Digital Twin</h3>
                    <p className="text-zinc-300 font-light mb-12 flex-grow relative z-10 leading-relaxed text-sm md:text-base">
                      A living digital twin map system currently being developed for Central Florida. It serves as an initial demo of our contextual understanding framework, using AI to help others grasp a wide variety of contexts through a unique visualization. Acting as a digital second representation in its early stages, it is rooted in the historical context of our region—a place where Kennedy sparked a technological moonshot and Walt Disney built a world of imagination in the exact same decade.
                    </p>
                    <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest mt-auto mint-text relative z-10">
                      Enter The Map System <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                    </div>
                  </a>
                </div>
              </div>

              {/* FOOTER */}
              <div className="md:col-span-12 p-6 sm:p-8 md:p-16 lg:px-24 flex flex-col md:flex-row justify-between items-start md:items-center gap-12 bg-white dark:bg-zinc-900/20 border-t border-zinc-800/30">
                <div className="flex flex-col items-start gap-4">
                  <BrandLogo className="w-16 h-16" />
                  <h2 className="font-sans text-4xl font-bold tracking-tighter leading-[0.9] text-zinc-950 dark:text-zinc-300 uppercase">
                    Mirror<br/>Factory
                  </h2>
                  <p className="text-sm opacity-60 font-light max-w-sm leading-relaxed mt-2 text-zinc-400">
                    Building the reflective layer for the algorithmic age. <br/>
                    Based globally. Operating thoughtfully.
                  </p>
                </div>

                <div className="flex flex-col items-start md:items-end gap-6">
                  <div className="flex flex-col items-start md:items-end gap-4 opacity-80">
                    <a href="mailto:hello@mirrorfactory.com" className="hover:text-[#EA580C] transition-colors flex items-center gap-2 text-sm font-medium text-zinc-300"><Mail size={18} /> Contact — hello@mirrorfactory.com</a>
                    <button
                      onClick={() => setCurrentPage('brand-guide')}
                      className="hover:text-[#EA580C] transition-colors flex items-center gap-2 text-sm font-medium text-zinc-300"
                    >
                      <Palette size={18} /> Brand Guide
                    </button>
                  </div>
                  <p className="text-xs font-mono opacity-40 uppercase tracking-widest text-zinc-400">
                    © {new Date().getFullYear()} Mirror Factory. All rights reserved.
                  </p>
                </div>
              </div>
            </>

          ) : (

            // =========================================================
            // BRAND GUIDE PAGE CONTENT
            // =========================================================
            <>
              {/* BRAND GUIDE HERO */}
              <div className="md:col-span-12 p-6 sm:p-8 md:p-16 lg:px-24 lg:py-32 border-b border-zinc-800/50 bg-gradient-to-br from-zinc-50 to-white dark:from-zinc-900/10 dark:to-transparent fade-in">
                <div className="max-w-5xl mx-auto">
                  <div className="flex items-center gap-3 mb-6 sm:mb-8 opacity-60">
                    <Palette size={18} className="mint-text" />
                    <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-zinc-400">Visual Identity & Design System</span>
                  </div>
                  <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-medium leading-[0.95] mb-8 tracking-tight text-zinc-50">
                    Brand <span className="italic mint-text">Guide.</span>
                  </h1>
                  <p className="text-xl sm:text-2xl font-light text-zinc-400 max-w-2xl leading-relaxed">
                    The visual language of Mirror Factory. An editorial, high-contrast system designed to reflect intellect, research, and perfect symmetry between human and machine.
                  </p>
                </div>
              </div>

              {/* SECTION 1: LOGO SYSTEM */}
              <div className="md:col-span-12 p-6 sm:p-8 md:p-16 lg:px-24 lg:py-20 border-b border-zinc-800/50">
                <div className="max-w-6xl mx-auto">
                  <div className="flex items-center gap-3 mb-10">
                    <Fingerprint size={20} className="mint-text" />
                    <h2 className="font-serif text-3xl md:text-4xl font-medium text-zinc-50">Logo System</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {logoVariations.map((logo) => (
                      <div key={logo.id} className="flex flex-col border border-zinc-800 rounded-lg overflow-hidden">
                        <div id={logo.id} className={`h-48 flex items-center justify-center p-8 ${logo.bg}`}>
                          <LogoVariationSVG variant={logo.variant} color={logo.color} />
                        </div>
                        <div className="p-6 bg-white dark:bg-zinc-900/50">
                          <p className="font-sans font-medium text-sm mb-2 text-zinc-50">{logo.name}</p>
                          <p className="text-xs text-zinc-500 mb-3">{logo.variant} • {logo.color}</p>
                          <DownloadSVGButton targetId={logo.id} filename={`mirror-factory-${logo.variant}-${logo.color}`} isDarkMode={true} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* SECTION 2: COLOR PALETTE */}
              <div className="md:col-span-12 p-6 sm:p-8 md:p-16 lg:px-24 lg:py-20 border-b border-zinc-800/50">
                <div className="max-w-6xl mx-auto">
                  <div className="flex items-center gap-3 mb-10">
                    <Palette size={20} className="mint-text" />
                    <h2 className="font-serif text-3xl md:text-4xl font-medium text-zinc-50">Color Palette</h2>
                  </div>

                  <h3 className="font-serif text-2xl font-medium mb-6 text-zinc-50">Primary Colors</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                    <div className="flex flex-col">
                      <div className="h-32 rounded-lg mint-bg mb-4 shadow-lg"></div>
                      <p className="font-mono text-xs mb-1 text-zinc-50">Mint Primary</p>
                      <p className="font-mono text-xs text-zinc-500">#3EB489</p>
                      <CopyButton text="#3EB489" label="Copy" />
                    </div>
                    <div className="flex flex-col">
                      <div className="h-32 rounded-lg bg-teal-700 mb-4 shadow-lg"></div>
                      <p className="font-mono text-xs mb-1 text-zinc-50">Teal Accent</p>
                      <p className="font-mono text-xs text-zinc-500">#0F766E</p>
                      <CopyButton text="#0F766E" label="Copy" />
                    </div>
                    <div className="flex flex-col">
                      <div className="h-32 rounded-lg bg-[#2563EB] mb-4 shadow-lg"></div>
                      <p className="font-mono text-xs mb-1 text-zinc-50">Traditional Blue</p>
                      <p className="font-mono text-xs text-zinc-500">#2563EB</p>
                      <CopyButton text="#2563EB" label="Copy" />
                    </div>
                    <div className="flex flex-col">
                      <div className="h-32 rounded-lg bg-zinc-950 dark:bg-zinc-50 mb-4 shadow-lg border border-zinc-800"></div>
                      <p className="font-mono text-xs mb-1 text-zinc-50">Text Primary</p>
                      <p className="font-mono text-xs text-zinc-500">#09090B / #FAFAFA</p>
                      <CopyButton text="#09090B" label="Copy" />
                    </div>
                  </div>
                </div>
              </div>

              {/* SECTION 3: TYPOGRAPHY */}
              <div className="md:col-span-12 p-6 sm:p-8 md:p-16 lg:px-24 lg:py-20 border-b border-zinc-800/50">
                <div className="max-w-6xl mx-auto">
                  <div className="flex items-center gap-3 mb-10">
                    <Type size={20} className="mint-text" />
                    <h2 className="font-serif text-3xl md:text-4xl font-medium text-zinc-50">Typography</h2>
                  </div>

                  <div className="space-y-12">
                    <div>
                      <h3 className="font-serif text-2xl font-medium mb-6 text-zinc-50">Playfair Display (Serif)</h3>
                      <p className="text-sm text-zinc-500 mb-8">Used for headings and emphasis</p>
                      <div className="space-y-6">
                        <p className="font-serif text-6xl text-zinc-50">Intelligence Requires Reflection</p>
                        <p className="font-serif text-4xl text-zinc-50">The Mirror Factory</p>
                        <p className="font-serif text-2xl italic text-zinc-700 dark:text-zinc-300">Human-centered AI research</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-serif text-2xl font-medium mb-6 text-zinc-50">Inter (Sans-Serif)</h3>
                      <p className="text-sm text-zinc-500 mb-8">Used for body text and UI elements</p>
                      <div className="space-y-4">
                        <p className="font-sans text-3xl font-bold text-zinc-50">Mirror Factory</p>
                        <p className="font-sans text-xl font-medium text-zinc-800 dark:text-zinc-200">Building the reflective layer</p>
                        <p className="font-sans text-base text-zinc-400">We conduct research and build tools to ensure the machinery of tomorrow doesn't overwrite the humanity of today.</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-serif text-2xl font-medium mb-6 text-zinc-50">JetBrains Mono (Monospace)</h3>
                      <p className="text-sm text-zinc-500 mb-8">Used for labels and technical content</p>
                      <div className="space-y-4">
                        <p className="font-mono text-sm uppercase tracking-widest text-zinc-500">Human Factors Research</p>
                        <p className="font-mono text-xs text-zinc-400">#3EB489 • rgba(62, 180, 137, 1.0)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* SECTION 4: SVG ILLUSTRATIONS */}
              <div className="md:col-span-12 p-6 sm:p-8 md:p-16 lg:px-24 lg:py-20 border-b border-zinc-800/50">
                <div className="max-w-6xl mx-auto">
                  <div className="flex items-center gap-3 mb-10">
                    <Component size={20} className="mint-text" />
                    <h2 className="font-serif text-3xl md:text-4xl font-medium text-zinc-50">Animated Illustrations</h2>
                  </div>

                  <p className="text-zinc-400 mb-12 max-w-2xl">
                    Custom animated SVG components representing key concepts of human-AI interaction and context management.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div id="svg-symmetry" className="border border-zinc-800 rounded-lg p-8 bg-white dark:bg-zinc-900/30">
                      <h3 className="font-serif text-xl font-medium mb-2 text-zinc-50">Symmetry Mirror</h3>
                      <p className="text-sm text-zinc-500 mb-6">Perfect Human/AI Coexistence</p>
                      <SymmetryMirrorSVG isDarkMode={true} />
                      <DownloadSVGButton targetId="svg-symmetry" filename="symmetry-mirror" isDarkMode={true} />
                    </div>

                    <div id="svg-sieve" className="border border-zinc-800 rounded-lg p-8 bg-white dark:bg-zinc-900/30">
                      <h3 className="font-serif text-xl font-medium mb-2 text-zinc-50">The Sieve</h3>
                      <p className="text-sm text-zinc-500 mb-6">Filtering the noise</p>
                      <TheSieveSVG isDarkMode={true} />
                      <DownloadSVGButton targetId="svg-sieve" filename="the-sieve" isDarkMode={true} />
                    </div>

                    <div id="svg-weaver" className="border border-zinc-800 rounded-lg p-8 bg-white dark:bg-zinc-900/30">
                      <h3 className="font-serif text-xl font-medium mb-2 text-zinc-50">Thought Weaver</h3>
                      <p className="text-sm text-zinc-500 mb-6">Cognitive harmony with AI</p>
                      <ThoughtWeaverSVG isDarkMode={true} />
                      <DownloadSVGButton targetId="svg-weaver" filename="thought-weaver" isDarkMode={true} />
                    </div>

                    <div id="svg-envsync" className="border border-zinc-800 rounded-lg p-8 bg-white dark:bg-zinc-900/30">
                      <h3 className="font-serif text-xl font-medium mb-2 text-zinc-50">Environmental Sync</h3>
                      <p className="text-sm text-zinc-500 mb-6">Contextual understanding</p>
                      <EnvironmentalSyncSVG isDarkMode={true} />
                      <DownloadSVGButton targetId="svg-envsync" filename="environmental-sync" isDarkMode={true} />
                    </div>

                    <div id="svg-layers" className="border border-zinc-800 rounded-lg p-8 bg-white dark:bg-zinc-900/30">
                      <h3 className="font-serif text-xl font-medium mb-2 text-zinc-50">Contextual Layers</h3>
                      <p className="text-sm text-zinc-500 mb-6">Deep state mapping</p>
                      <ContextualLayersSVG isDarkMode={true} />
                      <DownloadSVGButton targetId="svg-layers" filename="contextual-layers" isDarkMode={true} />
                    </div>

                    <div id="svg-shared" className="border border-zinc-800 rounded-lg p-8 bg-white dark:bg-zinc-900/30">
                      <h3 className="font-serif text-xl font-medium mb-2 text-zinc-50">Shared Context</h3>
                      <p className="text-sm text-zinc-500 mb-6">Context sharing between people</p>
                      <SharedContextSVG isDarkMode={true} />
                      <DownloadSVGButton targetId="svg-shared" filename="shared-context" isDarkMode={true} />
                    </div>

                    <div id="svg-buffer" className="border border-zinc-800 rounded-lg p-8 bg-white dark:bg-zinc-900/30">
                      <h3 className="font-serif text-xl font-medium mb-2 text-zinc-50">Context Buffer</h3>
                      <p className="text-sm text-zinc-500 mb-6">Protection from overload</p>
                      <ContextBufferSVG isDarkMode={true} />
                      <DownloadSVGButton targetId="svg-buffer" filename="context-buffer" isDarkMode={true} />
                    </div>

                    <div id="svg-agency" className="border border-zinc-800 rounded-lg p-8 bg-white dark:bg-zinc-900/30">
                      <h3 className="font-serif text-xl font-medium mb-2 text-zinc-50">Human Agency</h3>
                      <p className="text-sm text-zinc-500 mb-6">Maintaining human control</p>
                      <HumanAgencySVG isDarkMode={true} />
                      <DownloadSVGButton targetId="svg-agency" filename="human-agency" isDarkMode={true} />
                    </div>

                    <div id="svg-empathy" className="border border-zinc-800 rounded-lg p-8 bg-white dark:bg-zinc-900/30">
                      <h3 className="font-serif text-xl font-medium mb-2 text-zinc-50">Empathy Engine</h3>
                      <p className="text-sm text-zinc-500 mb-6">Human-AI understanding</p>
                      <EmpathyEngineSVG isDarkMode={true} />
                      <DownloadSVGButton targetId="svg-empathy" filename="empathy-engine" isDarkMode={true} />
                    </div>

                    <div id="svg-refinery" className="border border-zinc-800 rounded-lg p-8 bg-white dark:bg-zinc-900/30">
                      <h3 className="font-serif text-xl font-medium mb-2 text-zinc-50">Data Refinery</h3>
                      <p className="text-sm text-zinc-500 mb-6">Processing and insights</p>
                      <DataRefinerySVG isDarkMode={true} />
                      <DownloadSVGButton targetId="svg-refinery" filename="data-refinery" isDarkMode={true} />
                    </div>

                    <div id="svg-temporal" className="border border-zinc-800 rounded-lg p-8 bg-white dark:bg-zinc-900/30">
                      <h3 className="font-serif text-xl font-medium mb-2 text-zinc-50">Temporal Sync</h3>
                      <p className="text-sm text-zinc-500 mb-6">Time-aware context</p>
                      <TemporalSyncSVG isDarkMode={true} />
                      <DownloadSVGButton targetId="svg-temporal" filename="temporal-sync" isDarkMode={true} />
                    </div>

                    <div id="svg-sovereign" className="border border-zinc-800 rounded-lg p-8 bg-white dark:bg-zinc-900/30">
                      <h3 className="font-serif text-xl font-medium mb-2 text-zinc-50">Sovereign Mind</h3>
                      <p className="text-sm text-zinc-500 mb-6">Personal autonomy</p>
                      <SovereignMindSVG isDarkMode={true} />
                      <DownloadSVGButton targetId="svg-sovereign" filename="sovereign-mind" isDarkMode={true} />
                    </div>
                  </div>
                </div>
              </div>

              {/* FOOTER */}
              <div className="md:col-span-12 p-6 sm:p-8 md:p-16 lg:px-24 flex flex-col items-center gap-8 bg-white dark:bg-zinc-900/20 text-center border-t border-zinc-800/30">
                <BrandLogo className="w-16 h-16" />
                <p className="text-sm text-zinc-400 max-w-md">
                  Mirror Factory Brand Guide • All assets and guidelines are proprietary
                </p>
                <p className="text-xs font-mono opacity-40 uppercase tracking-widest text-zinc-400">
                  © {new Date().getFullYear()} Mirror Factory
                </p>
              </div>
            </>
          )}

        </div>
      </main>
    </div>
  )
}
