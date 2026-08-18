"use client";

interface LogoProps {
  size?: number;
  showText?: boolean;
  subtitle?: string;
  className?: string;
}

export function Logo({
  size = 32,
  showText = true,
  subtitle = "Software & Technology Studio",
  className = "",
}: LogoProps) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <rect width="200" height="200" rx="44" fill="#161B22" />
        <rect
          x="1"
          y="1"
          width="198"
          height="198"
          rx="43"
          stroke="rgba(240, 246, 252, 0.08)"
          strokeWidth="2"
        />
        <path d="M142 54H164L100 156L82 128L142 54Z" fill="#2563EB" />
        <path
          d="M142 54L128 58L82 128L100 156L142 54Z"
          fill="#1D4ED8"
          opacity="0.85"
        />
        <path d="M36 54H64L100 156L72 156L36 54Z" fill="#00A3FF" />
        <path
          d="M64 54L100 156L94 156L58 54H64Z"
          fill="#BAE6FD"
          opacity="0.65"
        />
        <circle cx="164" cy="54" r="7.5" fill="#38BDF8" />
      </svg>

      {showText && (
        <div className="flex flex-col justify-center leading-none">
          <span className="font-extrabold text-[#F0F6FC] tracking-[0.14em] text-sm">
            VORTO
          </span>
          {subtitle && (
            <span className="text-[9px] text-[#8B949E] font-mono tracking-tight mt-1">
              {subtitle}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
