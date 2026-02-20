export function BrandLogo({ className = "w-10 h-10" }: { className?: string }) {
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
