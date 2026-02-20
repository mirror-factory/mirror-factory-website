import React, { useState, useEffect } from 'react';
import { Moon, Sun, ArrowRight, Twitter, Github, Mail } from 'lucide-react';

// ============================================================================
// BRAND LOGO (Based on Uploaded Image)
// ============================================================================
function BrandLogo({ className = "w-10 h-10" }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
        {/* Left Chevron - Fixed breathing animation to pull outwards */}
        <g className="animate-logo-left">
          <path d="M 3 20 L 33 50 L 3 80 L 18 80 L 48 50 L 18 20 Z" fill="#3EB489" />
        </g>
        {/* Right Chevron - Fixed breathing animation to pull outwards */}
        <g className="animate-logo-right">
          <path d="M 97 20 L 67 50 L 97 80 L 82 80 L 52 50 L 82 20 Z" fill="#3EB489" />
        </g>
      </svg>
    </div>
  );
}

// ============================================================================
// CUSTOM SVG COMPONENTS (The "Human Factors" Series)
// ============================================================================

// 1. The Symmetry Mirror (Theme: Perfect Human/AI Coexistence)
function SymmetryMirrorSVG({ isDarkMode }) {
  return (
    <div className="w-full flex justify-center my-16 py-8 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 mint-bg rounded-full opacity-5 blur-3xl pointer-events-none" />
      <svg viewBox="0 0 400 300" className="w-full max-w-md h-auto overflow-visible" style={{ filter: isDarkMode ? 'drop-shadow(0px 0px 20px rgba(255,255,255,0.02))' : 'drop-shadow(0px 0px 20px rgba(0,0,0,0.05))' }}>
        {/* The Mirror Line */}
        <line x1="200" y1="20" x2="200" y2="280" stroke="#3EB489" strokeWidth="1.5" className="opacity-40 animate-pulse" strokeDasharray="4 4" />
        
        {/* LEFT SIDE: The Human (Moving in perfect unison, pulled back much further) */}
        <g style={{ transformOrigin: '110px 260px' }} className="animate-perfect-symmetry">
          <path d="M 50 50 C 100 50, 120 90, 120 110 L 145 135 L 130 145 C 135 150, 135 155, 130 160 C 135 170, 125 185, 110 195 C 90 210, 70 230, 40 260" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-800 dark:text-zinc-200" />
          {/* Human eye node for symmetry */}
          <circle cx="100" cy="100" r="4" fill="currentColor" className="text-zinc-800 dark:text-zinc-200 opacity-80" />
        </g>

        {/* RIGHT SIDE: The AI Reflection (Moving in perfect unison, glowing mint) */}
        <g style={{ transformOrigin: '200px 150px', transform: 'scaleX(-1)' }}>
          <g style={{ transformOrigin: '110px 260px' }} className="animate-perfect-symmetry">
            <path d="M 50 50 C 100 50, 120 90, 120 110 L 145 135 L 130 145 C 135 150, 135 155, 130 160 C 135 170, 125 185, 110 195 C 90 210, 70 230, 40 260" fill="none" stroke="#3EB489" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'drop-shadow(0 0 8px rgba(62,180,137,0.6))' }} />
            {/* The understanding node - pulsing softly */}
            <circle cx="100" cy="100" r="4" fill="#3EB489" className="animate-pulse" />
          </g>
        </g>
      </svg>
    </div>
  );
}

// 2. The Sieve (Theme: Filtering the noise / F451 "The Sieve and the Sand")
function TheSieveSVG({ isDarkMode }) {
  return (
    <div className="w-full flex justify-center mb-10 relative h-48">
      <svg viewBox="0 0 200 200" className="w-full h-full overflow-visible">
        {/* Chaotic input lines actively wriggling */}
        <g className="animate-chaotic-flow">
          <path d="M 20 20 Q 80 50 100 100 M 50 10 Q 90 60 100 100 M 180 20 Q 120 50 100 100 M 150 10 Q 110 60 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" className="opacity-30 text-zinc-800 dark:text-zinc-200" strokeDasharray="4 6" />
        </g>
        
        {/* The Sieve / Funnel */}
        <path d="M 40 80 C 70 80 80 120 90 140 C 95 150 105 150 110 140 C 120 120 130 80 160 80" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-zinc-800 dark:text-zinc-200" />
        
        {/* Refined Context Output (Mint Signal smoothly dropping into a pool) */}
        <g>
          <circle cx="100" cy="145" r="3" fill="#3EB489" className="animate-sieve-drop drop-shadow-[0_0_5px_rgba(62,180,137,0.8)]" />
          <circle cx="100" cy="145" r="3" fill="#3EB489" className="animate-sieve-drop drop-shadow-[0_0_5px_rgba(62,180,137,0.8)]" style={{ animationDelay: '1.5s' }} />
          <circle cx="100" cy="145" r="3" fill="#3EB489" className="animate-sieve-drop drop-shadow-[0_0_5px_rgba(62,180,137,0.8)]" style={{ animationDelay: '2.5s' }} />
          
          <line x1="100" y1="150" x2="100" y2="190" stroke="#3EB489" strokeWidth="1" strokeLinecap="round" className="opacity-40" />
          <ellipse cx="100" cy="190" rx="12" ry="3" fill="#3EB489" className="animate-pulse opacity-80" />
        </g>
      </svg>
    </div>
  );
}

// 3. The Thought Weaver (Theme: Cognitive Ergonomics / Harmony with AI)
function ThoughtWeaverSVG({ isDarkMode }) {
  return (
    <div className="w-full flex justify-center mb-10 relative h-48">
      <svg viewBox="0 0 200 200" className="w-full h-full overflow-visible">
        {/* Human erratic thought path actively pulsing/flowing */}
        <path d="M 20 100 C 50 40, 100 160, 130 100 C 150 60, 180 140, 180 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="animate-human-chaos text-zinc-800 dark:text-zinc-200 opacity-50" strokeDasharray="8 6" />
        
        {/* AI guiding path smoothly weaving through */}
        <path d="M 20 100 C 50 40, 100 160, 130 100 C 150 60, 180 140, 180 100" fill="none" stroke="#3EB489" strokeWidth="2" strokeLinecap="round" className="animate-draw-weave" strokeDasharray="300" strokeDashoffset="300" />
        
        {/* Synchronization/Inspiration Nodes (No more overlapping flying balls) */}
        <circle cx="75" cy="100" r="4.5" fill="#3EB489" className="animate-pulse opacity-80" />
        <circle cx="155" cy="100" r="4.5" fill="#3EB489" className="animate-pulse opacity-80" style={{ animationDelay: '1s' }} />
      </svg>
    </div>
  );
}

// 4. Environmental Sync (Theme: Contextual Understanding of Surroundings)
function EnvironmentalSyncSVG({ isDarkMode }) {
  return (
    <div className="w-full flex justify-center mb-10 relative h-48">
      <svg viewBox="0 0 200 200" className="w-full h-full overflow-visible">
        {/* Central User Node */}
        <circle cx="100" cy="100" r="8" fill="#3EB489" className="drop-shadow-[0_0_8px_rgba(62,180,137,0.5)]" />
        
        {/* Environment Radar Rings */}
        <circle cx="100" cy="100" r="40" fill="none" stroke="#3EB489" strokeWidth="1" className="opacity-20 animate-ping-slow" />
        <circle cx="100" cy="100" r="70" fill="none" stroke="#3EB489" strokeWidth="1" className="opacity-10 animate-ping-slow" style={{ animationDelay: '1s' }} />
        
        {/* Context connections */}
        <path d="M 100 100 L 140 60 M 100 100 L 50 120 M 100 100 L 120 160" fill="none" stroke="#3EB489" strokeWidth="1.5" strokeDasharray="4 4" className="animate-scan-lines opacity-50" />
        
        {/* Surrounding Context Objects */}
        <rect x="135" y="50" width="10" height="10" className="text-zinc-800 dark:text-zinc-200 opacity-50" transform="rotate(45 140 55)" />
        <circle cx="45" cy="125" r="6" className="text-zinc-800 dark:text-zinc-200 opacity-50" />
        <polygon points="120,165 115,175 125,175" className="text-zinc-800 dark:text-zinc-200 opacity-50" />
      </svg>
    </div>
  );
}

// 5. Contextual Layers (Theme: Layers Whitepaper / Deep state mapping)
function ContextualLayersSVG({ isDarkMode }) {
  return (
    <div className="w-full flex justify-center mb-8 relative h-40">
      <svg viewBox="0 0 200 200" className="w-full h-full overflow-visible group animate-master-glow">
        {/* Layer 1 (Base) */}
        <ellipse cx="100" cy="140" rx="60" ry="20" fill="none" strokeWidth="1.5" className="animate-layer-seq-1 text-zinc-800 dark:text-zinc-200" />
        {/* Layer 2 (Mid) */}
        <ellipse cx="100" cy="110" rx="75" ry="25" fill="none" strokeWidth="1.5" className="animate-layer-seq-2 text-zinc-800 dark:text-zinc-200" />
        {/* Layer 3 (Top - The AI Context Layer turning Mint) */}
        <ellipse cx="100" cy="80" rx="90" ry="30" fill="none" strokeWidth="2" className="animate-layer-seq-3 text-zinc-800 dark:text-zinc-200" />
        
        {/* The Thread of Understanding */}
        <path d="M 100 40 L 100 160" fill="none" stroke="#3EB489" strokeWidth="2" strokeDasharray="5 5" className="animate-pulse opacity-80" />
        <circle cx="100" cy="80" r="4" fill="#3EB489" className="animate-pulse" />
        <circle cx="100" cy="110" r="3" fill="#3EB489" />
        <circle cx="100" cy="140" r="2" fill="#3EB489" />
      </svg>
    </div>
  );
}

// 6. Shared Context (Theme: Sharing context with the right people)
function SharedContextSVG({ isDarkMode }) {
  return (
    <div className="w-full flex justify-center mb-8 relative h-40">
      <svg viewBox="0 0 300 150" className="w-full h-full overflow-visible">
        {/* Person A Profile */}
        <path d="M 50 30 C 80 30, 90 60, 90 75 C 90 90, 80 120, 50 120" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-zinc-800 dark:text-zinc-200 opacity-60" />
        <circle cx="70" cy="75" r="4" fill="#3EB489" className="opacity-80 drop-shadow-[0_0_4px_rgba(62,180,137,0.8)]" />

        {/* Person B Profile (Reversed) */}
        <path d="M 250 30 C 220 30, 210 60, 210 75 C 210 90, 220 120, 250 120" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-zinc-800 dark:text-zinc-200 opacity-60" />
        {/* Recipient's node lighting up */}
        <circle cx="230" cy="75" r="4" fill="#38BDF8" className="animate-recipient-glow" />

        {/* The Context Bridge */}
        <path d="M 95 75 C 130 50, 170 100, 205 75" fill="none" stroke="#3EB489" strokeWidth="1.5" strokeDasharray="6 6" className="animate-scan-lines opacity-50" />
        
        {/* Traveling Context Packets (Mint and Blue) */}
        <circle cx="0" cy="0" r="4" fill="#3EB489" className="animate-travel-packet-1 drop-shadow-[0_0_5px_rgba(62,180,137,0.8)]">
          <animateMotion dur="4s" repeatCount="indefinite" path="M 95 75 C 130 50, 170 100, 205 75" />
        </circle>
        <circle cx="0" cy="0" r="3" fill="#38BDF8" className="animate-travel-packet-2 drop-shadow-[0_0_5px_rgba(56,189,248,0.8)]">
          <animateMotion dur="4s" begin="2s" repeatCount="indefinite" path="M 95 75 C 130 50, 170 100, 205 75" />
        </circle>
      </svg>
    </div>
  );
}

// ============================================================================
// MAIN APP COMPONENT
// ============================================================================
export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Injecting custom fonts and animation keyframes
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,800;1,400;1,500;1,600&family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');
      
      .font-serif { font-family: 'Playfair Display', serif; }
      .font-sans { font-family: 'Inter', sans-serif; }
      .font-mono { font-family: 'JetBrains Mono', monospace; }
      
      .mint-text { color: #3EB489; }
      .mint-bg { background-color: #3EB489; }
      .mint-border { border-color: #3EB489; }
      
      /* Base UI Animations */
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
      .delay-100 { animation-delay: 0.1s; opacity: 0; }
      .delay-200 { animation-delay: 0.2s; opacity: 0; }

      /* Brand Logo Breathing Animations & Intro */
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

      /* 1. Symmetry Mirror SVG Animations */
      .reflection-path { stroke: currentColor; transition: stroke 0.5s ease; }
      @keyframes perfect-symmetry {
        0%, 100% { transform: translateX(0) rotate(0); }
        50% { transform: translateX(12px) rotate(3deg); }
      }
      .animate-perfect-symmetry { animation: perfect-symmetry 6s ease-in-out infinite; }

      /* 2. Sieve Animations (Upgraded for smooth falling) */
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

      /* 3. Thought Weaver Animations (Upgraded) */
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

      /* 4. Environmental Sync Animations */
      @keyframes ping-slow {
        0% { transform: scale(0.8); opacity: 0.8; }
        100% { transform: scale(1.8); opacity: 0; }
      }
      .animate-ping-slow { animation: ping-slow 4s cubic-bezier(0, 0, 0.2, 1) infinite; transform-origin: 100px 100px; }
      
      /* 5. Contextual Layers Animations */
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

      /* 6. Shared Context Animations */
      @keyframes scan-lines {
        0% { stroke-dashoffset: 0; }
        100% { stroke-dashoffset: 20; }
      }
      .animate-scan-lines { animation: scan-lines 2s linear infinite; }
      
      @keyframes recipient-glow {
        0%, 45% { opacity: 0.3; filter: none; transform: scale(1); }
        50%, 60% { opacity: 1; filter: drop-shadow(0 0 8px rgba(56,189,248,0.8)); transform: scale(1.3); }
        100% { opacity: 0.3; filter: none; transform: scale(1); }
      }
      .animate-recipient-glow { animation: recipient-glow 4s infinite; transform-origin: 230px 75px; }

      html { scroll-behavior: smooth; }
      ::-webkit-scrollbar { width: 6px; }
      ::-webkit-scrollbar-track { background: transparent; }
      ::-webkit-scrollbar-thumb { background: #3EB489; border-radius: 10px; opacity: 0.5; }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <div className={`min-h-screen w-full transition-colors duration-700 font-sans ${isDarkMode ? 'bg-[#09090b] text-zinc-50 dark' : 'bg-[#fafafa] text-zinc-900'}`}>
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-8 py-4 md:py-5 backdrop-blur-md bg-white/5 dark:bg-black/20 border-b border-zinc-200 dark:border-zinc-800/80 transition-colors">
        <div className="flex items-center gap-2 md:gap-3">
          <BrandLogo className="w-7 h-7 md:w-8 md:h-8 animate-logo-intro" />
          <span className="font-sans font-bold text-lg md:text-xl tracking-tighter leading-none pt-1 flex gap-1 md:gap-1.5">
            <span className="animate-word-1 inline-block">Mirror</span>
            <span className="animate-word-2 inline-block">Factory</span>
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-6 text-sm font-sans font-medium opacity-60 ml-8 mr-auto">
          <a href="#mandate" className="hover:text-[#3EB489] transition-colors">Who We Are</a>
          <a href="#methodology" className="hover:text-[#3EB489] transition-colors">Methodology</a>
          <a href="#initiatives" className="hover:text-[#3EB489] transition-colors">Initiatives</a>
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          <span className="text-xs font-mono uppercase tracking-widest opacity-40 hidden sm:block border-r border-zinc-300 dark:border-zinc-700 pr-6">Human Factors Research</span>
          <button onClick={() => setIsDarkMode(!isDarkMode)} className="p-2 rounded-full border border-zinc-200 dark:border-zinc-800 hover:border-[#3EB489] dark:hover:border-[#3EB489] transition-all group">
            {isDarkMode ? <Sun size={16} className="group-hover:text-[#3EB489] transition-colors" /> : <Moon size={16} className="group-hover:text-[#3EB489] transition-colors" />}
          </button>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="pt-20 min-h-screen relative">
        <div className={`fixed inset-0 pointer-events-none grid grid-cols-1 md:grid-cols-12 ${isDarkMode ? 'divide-x divide-zinc-800/30' : 'divide-x divide-zinc-200/50'} z-0`}>
          {Array(12).fill(0).map((_, i) => <div key={i} className="h-full hidden md:block" />)}
        </div>

        <div className="flex-grow grid grid-cols-1 md:grid-cols-12 max-w-[90rem] mx-auto w-full border-x border-zinc-200 dark:border-zinc-800/30 relative z-10 bg-transparent">
          
          {/* ================= HERO ================= */}
          <div className="md:col-span-3 border-b border-r-0 md:border-r border-zinc-200 dark:border-zinc-800/50 p-6 sm:p-8 flex flex-col justify-end pb-12 sm:pb-16 fade-in relative min-h-[35vh] md:min-h-[85vh]">
             <div className="w-12 h-[2px] mint-bg mb-6 sm:mb-8" />
             <p className="text-xs sm:text-sm opacity-70 mb-4 font-serif italic leading-relaxed text-zinc-600 dark:text-zinc-400">
               "Come, let's build a mirror factory first and put out nothing but mirrors for the next year and take a long look in them."
             </p>
             <p className="text-[10px] sm:text-xs font-mono uppercase tracking-widest opacity-50">— Ray Bradbury, Fahrenheit 451</p>
          </div>

          <div className="md:col-span-9 p-6 sm:p-8 md:p-16 lg:p-24 flex flex-col justify-center min-h-[50vh] md:min-h-[85vh] animate-reveal border-b border-zinc-200 dark:border-zinc-800/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#3EB489]/10 to-transparent rounded-full blur-3xl opacity-50 pointer-events-none" />
            
            <div className="max-w-4xl relative z-10">
              <div className="flex items-center gap-3 mb-6 sm:mb-8 opacity-60">
                <span className="w-2 h-2 rounded-full mint-bg animate-pulse"/>
                <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest">Human Factors AI Research</span>
              </div>

              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] font-medium leading-[0.95] mb-8 md:mb-12 tracking-tight">
                Intelligence <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3EB489] to-teal-700 italic pr-4">Requires</span> <br />
                Reflection.
              </h1>
              
              <div className="border-l border-[#3EB489]/50 pl-6 sm:pl-8 mb-12 sm:mb-16 py-2">
                <p className="text-xl sm:text-2xl lg:text-3xl font-serif text-zinc-600 dark:text-zinc-400 leading-snug font-light max-w-2xl">
                  We conduct research and build tools to ensure the machinery of tomorrow doesn't overwrite the humanity of today.
                </p>
              </div>
            </div>
          </div>

          {/* ================= SECTION 1: THE MANDATE / WHO WE ARE ================= */}
          <div id="mandate" className="md:col-span-3 border-b md:border-b-0 border-r-0 md:border-r border-zinc-200 dark:border-zinc-800/50 p-6 sm:p-8 hidden md:block">
             <div className="sticky top-32 opacity-40">
               <span className="font-mono text-xs uppercase tracking-widest transform -rotate-90 inline-block origin-top-left translate-y-24">01 — Who We Are</span>
             </div>
          </div>

          <div className="md:col-span-9 p-6 sm:p-8 md:p-16 lg:px-24 lg:py-32 border-b border-zinc-200 dark:border-zinc-800/50">
            <div className="max-w-3xl fade-in delay-100 mx-auto text-center md:text-left">
              <h2 className="font-serif text-4xl md:text-5xl font-medium mb-12">Who We Are</h2>
              <div className="prose prose-lg md:prose-xl dark:prose-invert font-sans font-light leading-relaxed text-zinc-600 dark:text-zinc-300">
                <p>
                  We are a human-centered research laboratory and product studio. We do not just build AI; we explore the profound connection between people and artificial intelligence.
                </p>
                
                {/* SVG 1 - The Symmetry Mirror */}
                <SymmetryMirrorSVG isDarkMode={isDarkMode} />

                <p className="font-serif italic text-2xl md:text-3xl text-zinc-900 dark:text-white pl-6 md:pl-8 border-l-2 mint-border leading-snug my-16">
                  Our core thesis is exploration and harmony. We are not trying to merge human and machine into a single synced system; we seek to understand how we can best work with AI to make our lives deeply better.
                </p>
                
                <p>
                  We want to understand deeply—not just what statistically proves we can produce more—but what provides the profound feeling of relief. How do we eliminate context overload? How do we stop the endless context switching that drains our daily energy? 
                </p>

                <p>
                  We are researching how to build systems that grant us superpowers while giving us back our lives, allowing us to focus more on the humanities of this earth. To <em>be</em>, instead of just to <em>do</em>. To still have the energy and space to create.
                </p>

                <h3 className="font-serif text-3xl font-medium mt-16 mb-6 text-zinc-900 dark:text-white">The Foundation</h3>
                <p>
                  The foundation of this mission is built by three partners: Kyle Morrand, Bobby Torres, and Alfonso Morales. 
                </p>
                <p>
                  With a shared background in simulation and mixed reality, our focus has always been on the human experience within digital spaces. This perspective drives our desire to answer the practical questions of the AI age: What is worth our time? What is worth handing off? How do we use deep context to build out an entire campaign or brand, without losing the human soul behind it?
                </p>

                <h3 className="font-serif text-3xl font-medium mt-16 mb-6 text-zinc-900 dark:text-white">Validated Research & Real-World Integration</h3>
                <p>
                  To find these answers, we partner heavily with higher education and universities to conduct validated studies and publish our findings. Simultaneously, we actively help companies bring these AI ecosystems into their own teams. This real-world integration continuously deepens our understanding of human-AI partnership, allowing us to bridge the gap between academic theory and daily human utility.
                </p>

              </div>
            </div>
          </div>

          {/* ================= SECTION 2: METHODOLOGY ================= */}
          <div id="methodology" className="md:col-span-3 border-b md:border-b-0 border-r-0 md:border-r border-zinc-200 dark:border-zinc-800/50 p-6 sm:p-8 hidden md:block">
             <div className="sticky top-32 opacity-40">
               <span className="font-mono text-xs uppercase tracking-widest transform -rotate-90 inline-block origin-top-left translate-y-28">02 — Methodology</span>
             </div>
          </div>

          <div className="md:col-span-9 p-6 sm:p-8 md:p-16 lg:px-24 lg:py-24 border-b border-zinc-200 dark:border-zinc-800/50">
            <h2 className="font-serif text-4xl font-medium mb-12 md:mb-20 text-center md:text-left">The Architecture of Study</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
              
              {/* Phase 1 */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <TheSieveSVG isDarkMode={isDarkMode} />
                <h3 className="font-serif text-2xl font-medium mb-4 mt-4">The Sieve & The Signal</h3>
                <p className="font-light text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
                  In an era of overwhelming digital noise, we explore how to preserve the true human signal. We study how our authentic voice, creativity, and storytelling can thrive, rather than be washed away, when co-creating with AI.
                </p>
              </div>

              {/* Phase 2 */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <ThoughtWeaverSVG isDarkMode={isDarkMode} />
                <h3 className="font-serif text-2xl font-medium mb-4 mt-4">Cognitive Harmony</h3>
                <p className="font-light text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
                  Prolonged interaction with AI shapes how we process the world. We focus on designing experiences that weave artificial intelligence naturally into our own human thought patterns, ensuring that we guide the technology, rather than the technology guiding us.
                </p>
              </div>

              {/* Phase 3 */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <EnvironmentalSyncSVG isDarkMode={isDarkMode} />
                <h3 className="font-serif text-2xl font-medium mb-4 mt-4">Contextual Sync</h3>
                <p className="font-light text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
                  True understanding requires holding multiple realities at once. We explore how AI can map to the different layers of our minds—from our professional jobs, to our personal lives, to raw ideation—so we don't have to constantly explain who we are.
                </p>
              </div>

            </div>
          </div>

          {/* ================= SECTION 3: INITIATIVES (Layers & Moonshots) ================= */}
          <div id="initiatives" className="md:col-span-3 border-r-0 md:border-r border-zinc-200 dark:border-zinc-800/50 p-6 sm:p-8 hidden md:block">
             <div className="sticky top-32 opacity-40">
               <span className="font-mono text-xs uppercase tracking-widest transform -rotate-90 inline-block origin-top-left translate-y-24">03 — The Work</span>
             </div>
          </div>

          <div className="md:col-span-9 p-6 sm:p-8 md:p-16 lg:px-24 lg:py-24 border-b border-zinc-200 dark:border-zinc-800/50">
            <h2 className="font-serif text-4xl font-medium mb-12 md:mb-16">Active Initiatives</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              
              {/* Project 1: Layers Whitepaper */}
              <div className={`p-8 lg:p-12 border ${isDarkMode ? 'border-zinc-800 hover:border-[#3EB489]/50' : 'border-zinc-200 hover:border-[#3EB489]/50'} transition-all duration-500 group flex flex-col h-full bg-white/5`}>
                <ContextualLayersSVG isDarkMode={isDarkMode} />
                
                <h3 className="font-serif text-3xl font-medium mb-4">Layers Whitepaper</h3>
                <div className="inline-block px-3 py-1 border mint-border text-[#3EB489] text-[10px] font-mono uppercase tracking-widest mb-6 w-max rounded-full bg-[#3EB489]/10">
                  Coming Soon
                </div>
                
                <p className="text-zinc-600 dark:text-zinc-400 font-light mb-8 flex-grow leading-relaxed">
                  An initial research concept focused entirely on managing context. This paper explores systems that can hold the different layers of your life simultaneously—from deep professional work to spontaneous ideation. We envision AI that acts as a buffer against context overload, honoring your complex mental state so you can spend less time managing tasks and more time actually living.
                </p>
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest mt-auto opacity-50">
                  Research pending publication
                </div>
              </div>

              {/* Project 2: Moonshots & Magic -> Digital Twin Map System */}
              <div className={`p-6 sm:p-8 lg:p-12 border mint-border ${isDarkMode ? 'bg-[#3EB489]/5' : 'bg-[#3EB489]/10'} transition-all duration-500 group cursor-pointer flex flex-col h-full relative overflow-hidden shadow-lg shadow-[#3EB489]/5`}>
                <div className="absolute -right-12 -top-12 w-48 h-48 bg-[#3EB489]/20 rounded-full blur-3xl group-hover:bg-[#3EB489]/40 group-hover:scale-150 transition-all duration-700 pointer-events-none" />
                
                <SharedContextSVG isDarkMode={isDarkMode} />
                
                <h3 className="font-serif italic text-2xl md:text-3xl font-medium mb-4 relative z-10 text-zinc-900 dark:text-white">Moonshots & Magic:<br/>Digital Twin</h3>
                
                <p className="text-zinc-700 dark:text-zinc-300 font-light mb-12 flex-grow relative z-10 leading-relaxed text-sm md:text-base">
                  A living digital twin map system currently being developed for Central Florida. It serves as an initial demo of our contextual understanding framework, using AI to help others grasp a wide variety of contexts through a unique visualization. Acting as a digital second representation in its early stages, it is rooted in the historical context of our region—a place where Kennedy sparked a technological moonshot and Walt Disney built a world of imagination in the exact same decade.
                </p>
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest mt-auto mint-text relative z-10">
                  Enter The Map System <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                </div>
              </div>

            </div>
          </div>

          {/* ================= SECTION 4: FOOTER ================= */}
          <div className="md:col-span-12 p-6 sm:p-8 md:p-16 lg:px-24 flex flex-col md:flex-row justify-between items-start md:items-center gap-12 bg-zinc-100/50 dark:bg-zinc-900/20">
            <div className="flex flex-col items-start gap-4">
              <BrandLogo className="w-16 h-16" />
              <h2 className="font-sans text-4xl font-bold tracking-tighter leading-[0.9] text-zinc-700 dark:text-zinc-300 uppercase">
                Mirror<br/>Factory
              </h2>
              <p className="text-sm opacity-60 font-light max-w-sm leading-relaxed mt-2">
                Building the reflective layer for the algorithmic age. <br/>
                Based globally. Operating thoughtfully.
              </p>
            </div>
            
            <div className="flex flex-col items-start md:items-end gap-6">
              <div className="flex gap-6 opacity-80">
                <a href="#" className="hover:text-[#3EB489] transition-colors flex items-center gap-2 text-sm font-medium"><Twitter size={18} /> Twitter</a>
                <a href="#" className="hover:text-[#3EB489] transition-colors flex items-center gap-2 text-sm font-medium"><Github size={18} /> Github</a>
                <a href="#" className="hover:text-[#3EB489] transition-colors flex items-center gap-2 text-sm font-medium"><Mail size={18} /> Contact</a>
              </div>
              <p className="text-xs font-mono opacity-40 uppercase tracking-widest">
                © {new Date().getFullYear()} Mirror Factory. All rights reserved.
              </p>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}