// ============================================================================
// CUSTOM SVG COMPONENTS (The "Human Factors" Series)
// ============================================================================

// 1. The Symmetry Mirror (Theme: Perfect Human/AI Coexistence)
export function SymmetryMirrorSVG({ isDarkMode }: { isDarkMode: boolean }) {
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
export function TheSieveSVG({ isDarkMode }: { isDarkMode: boolean }) {
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
export function ThoughtWeaverSVG({ isDarkMode }: { isDarkMode: boolean }) {
  return (
    <div className="w-full flex justify-center mb-10 relative h-48">
      <svg viewBox="0 0 200 200" className="w-full h-full overflow-visible">
        {/* Human erratic thought path actively pulsing/flowing */}
        <path d="M 20 100 C 50 40, 100 160, 130 100 C 150 60, 180 140, 180 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="animate-human-chaos text-zinc-800 dark:text-zinc-200 opacity-50" strokeDasharray="8 6" />

        {/* AI guiding path smoothly weaving through */}
        <path d="M 20 100 C 50 40, 100 160, 130 100 C 150 60, 180 140, 180 100" fill="none" stroke="#3EB489" strokeWidth="2" strokeLinecap="round" className="animate-draw-weave" strokeDasharray="300" strokeDashoffset="300" />

        {/* Synchronization/Inspiration Nodes */}
        <circle cx="75" cy="100" r="4.5" fill="#3EB489" className="animate-pulse opacity-80" />
        <circle cx="155" cy="100" r="4.5" fill="#3EB489" className="animate-pulse opacity-80" style={{ animationDelay: '1s' }} />
      </svg>
    </div>
  );
}

// 4. Environmental Sync (Theme: Contextual Understanding of Surroundings)
export function EnvironmentalSyncSVG({ isDarkMode }: { isDarkMode: boolean }) {
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
export function ContextualLayersSVG({ isDarkMode }: { isDarkMode: boolean }) {
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
export function SharedContextSVG({ isDarkMode }: { isDarkMode: boolean }) {
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
        <circle cx="0" cy="0" r="4" fill="#3EB489" className="drop-shadow-[0_0_5px_rgba(62,180,137,0.8)]">
          <animateMotion dur="4s" repeatCount="indefinite" path="M 95 75 C 130 50, 170 100, 205 75" />
        </circle>
        <circle cx="0" cy="0" r="3" fill="#38BDF8" className="drop-shadow-[0_0_5px_rgba(56,189,248,0.8)]">
          <animateMotion dur="4s" begin="2s" repeatCount="indefinite" path="M 95 75 C 130 50, 170 100, 205 75" />
        </circle>
      </svg>
    </div>
  );
}
