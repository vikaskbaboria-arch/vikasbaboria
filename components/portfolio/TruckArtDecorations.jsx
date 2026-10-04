import React from "react";

// Vibrant stylized Truck Art Lotus Flower
export function LotusFlower({ size = 48, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`truck-lotus ${className}`}
    >
      {/* Outer Glow */}
      <filter id="lotusGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000" floodOpacity="0.4" />
      </filter>
      <g filter="url(#lotusGlow)">
        {/* Green Calyx / Leaves */}
        <path d="M50 82 C38 88 20 84 15 76 C22 72 36 74 46 76 Z" fill="#00a86b" stroke="#000" strokeWidth="2" />
        <path d="M50 82 C62 88 80 84 85 76 C78 72 64 74 54 76 Z" fill="#00a86b" stroke="#000" strokeWidth="2" />
        <path d="M50 82 C46 92 54 92 50 96 C46 92 48 86 50 82 Z" fill="#007a4d" stroke="#000" strokeWidth="1.5" />

        {/* Outer Pink Petals */}
        <path d="M50 78 C25 76 10 58 14 42 C24 50 36 64 50 78 Z" fill="#ff1493" stroke="#000" strokeWidth="2" />
        <path d="M50 78 C75 76 90 58 86 42 C76 50 64 64 50 78 Z" fill="#ff1493" stroke="#000" strokeWidth="2" />

        {/* Intermediate Petals */}
        <path d="M50 78 C30 68 22 46 28 30 C38 42 46 62 50 78 Z" fill="#ff3399" stroke="#000" strokeWidth="2" />
        <path d="M50 78 C70 68 78 46 72 30 C62 42 54 62 50 78 Z" fill="#ff3399" stroke="#000" strokeWidth="2" />

        {/* Center Main Petals */}
        <path d="M50 78 C40 56 36 34 50 14 C64 34 60 56 50 78 Z" fill="#ff66b2" stroke="#000" strokeWidth="2.5" />
        <path d="M50 78 C44 60 42 40 50 24 C58 40 56 60 50 78 Z" fill="#ff99cc" />

        {/* Golden Center Core */}
        <ellipse cx="50" cy="74" rx="8" ry="4" fill="#ffd700" stroke="#000" strokeWidth="1.5" />
        <circle cx="47" cy="74" r="1" fill="#e65100" />
        <circle cx="50" cy="73" r="1" fill="#e65100" />
        <circle cx="53" cy="74" r="1" fill="#e65100" />
      </g>
    </svg>
  );
}

// Ornate Corner Flourish
export function FloralCorner({ className = "", style = {} }) {
  return (
    <svg
      width="70"
      height="70"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`truck-corner ${className}`}
      style={style}
    >
      <path
        d="M6 6 L55 6 C50 18 38 24 28 28 C24 38 18 50 6 55 Z"
        fill="#ffd700"
        stroke="#000"
        strokeWidth="3"
      />
      <path
        d="M12 12 L40 12 C36 20 28 24 20 28 C16 34 12 38 12 40 Z"
        fill="#ff1493"
        stroke="#000"
        strokeWidth="2"
      />
      <circle cx="18" cy="18" r="5" fill="#00d2ff" stroke="#000" strokeWidth="2" />
      <path
        d="M6 94 L6 6 L94 6"
        stroke="#ff6f00"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <circle cx="6" cy="6" r="4" fill="#ffffff" stroke="#000" strokeWidth="2" />
    </svg>
  );
}

// Cutting Chai Glass with Toast / Good Vibes
export function CuttingChai({ size = 52, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`truck-chai ${className}`}
    >
      <filter id="chaiShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="3" stdDeviation="2" floodColor="#000" floodOpacity="0.4" />
      </filter>
      <g filter="url(#chaiShadow)">
        {/* Steam */}
        <path d="M42 20 Q46 12 42 6" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
        <path d="M52 22 Q56 14 50 8" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
        <path d="M60 20 Q64 12 60 6" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />

        {/* Glass Body */}
        <path
          d="M32 26 L68 26 L60 84 L40 84 Z"
          fill="#ffedd5"
          stroke="#000"
          strokeWidth="3"
        />
        {/* Chai Liquid */}
        <path
          d="M34 38 L66 38 L59 82 L41 82 Z"
          fill="#c25e00"
          stroke="#000"
          strokeWidth="1.5"
        />
        {/* Chai highlight & tea froth */}
        <ellipse cx="50" cy="38" rx="16" ry="3" fill="#e07a1e" />
        <ellipse cx="50" cy="40" rx="14" ry="2" fill="#ffd199" opacity="0.7" />

        {/* Glass Flutes */}
        <line x1="44" y1="42" x2="46" y2="78" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
        <line x1="56" y1="42" x2="54" y2="78" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" opacity="0.6" />

        {/* Glass Base & Rim */}
        <rect x="30" y="24" width="40" height="4" rx="2" fill="#e0f2fe" stroke="#000" strokeWidth="2" />
        <rect x="38" y="83" width="24" height="5" rx="2" fill="#e0f2fe" stroke="#000" strokeWidth="2" />
      </g>
    </svg>
  );
}

// Starburst Saw / Badge (directly inspired by the saw explosions in the Sabrina poster!)
export function StarburstSaw({ text = "HIT", sub = "", color = "#ffd200", edgeColor = "#e60026", size = 90, className = "" }) {
  return (
    <div
      className={`starburst-saw ${className}`}
      style={{
        width: size,
        height: size,
        position: "relative",
        display: "inline-grid",
        placeItems: "center",
      }}
    >
      <svg
        viewBox="0 0 100 100"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          filter: "drop-shadow(3px 4px 0 #000)",
        }}
      >
        {/* 16-point burst */}
        <polygon
          points="50,2 62,22 84,10 82,34 100,44 87,62 96,82 74,83 66,100 48,90 32,100 24,82 2,80 12,60 0,42 18,32 14,10 36,20"
          fill={color}
          stroke={edgeColor}
          strokeWidth="3.5"
          strokeLinejoin="round"
        />
        {/* Inner ring */}
        <circle cx="50" cy="50" r="32" fill="#fff" stroke="#000" strokeWidth="2.5" />
      </svg>
      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          fontWeight: 900,
          color: "#000",
          lineHeight: 1,
          textTransform: "uppercase",
          transform: "rotate(-6deg)",
        }}
      >
        <div style={{ fontSize: size * 0.2, letterSpacing: "-0.04em", color: edgeColor }}>{text}</div>
        {sub && <div style={{ fontSize: size * 0.12, marginTop: 2, color: "#111" }}>{sub}</div>}
      </div>
    </div>
  );
}

// Nimbu Mirchi Charm (Anti-Bug / Anti-Evil Eye Indian Truck Charm)
export function NimbuMirchi({ size = 50, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`truck-nimbu ${className}`}
    >
      <filter id="nimbuShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="2" stdDeviation="2" floodColor="#000" floodOpacity="0.4" />
      </filter>
      <g filter="url(#nimbuShadow)">
        {/* Black Thread hanging */}
        <line x1="50" y1="2" x2="50" y2="28" stroke="#111" strokeWidth="2.5" />

        {/* Yellow Lemon (Nimbu) */}
        <circle cx="50" cy="36" r="14" fill="#ffd700" stroke="#000" strokeWidth="2.5" />
        <ellipse cx="46" cy="33" rx="3" ry="1.5" fill="#fff" opacity="0.8" />
        <circle cx="50" cy="22" r="2" fill="#2d6a4f" />

        {/* Green chillies hanging */}
        {/* Left chilli */}
        <path
          d="M44 48 C36 56 30 70 38 86 C40 86 42 74 46 54 Z"
          fill="#00a86b"
          stroke="#000"
          strokeWidth="2"
        />
        {/* Center chilli */}
        <path
          d="M50 48 C48 60 52 74 50 92 C54 74 54 60 52 48 Z"
          fill="#10b981"
          stroke="#000"
          strokeWidth="2"
        />
        {/* Right chilli */}
        <path
          d="M56 48 C64 56 70 70 62 86 C60 86 58 74 54 54 Z"
          fill="#059669"
          stroke="#000"
          strokeWidth="2"
        />

        {/* Charcoal bead / protection knot */}
        <circle cx="50" cy="28" r="4" fill="#000" />
      </g>
    </svg>
  );
}

// Truck Chevron Hazard Banner Strip
export function ChevronStrip({ direction = "horizontal", height = 16, className = "" }) {
  return (
    <div
      className={`truck-chevron-strip ${className}`}
      style={{
        height: direction === "horizontal" ? `${height}px` : "100%",
        width: direction === "horizontal" ? "100%" : `${height}px`,
        backgroundImage:
          "repeating-linear-gradient(45deg, #ffd700, #ffd700 12px, #111827 12px, #111827 24px)",
        borderTop: "2px solid #000",
        borderBottom: "2px solid #000",
        boxShadow: "0 2px 4px rgba(0,0,0,0.3)",
      }}
    />
  );
}

// Truck Art Slogan Badge (e.g. HORN OK PLEASE, DEKHO MAGAR PYAAR SE)
export function SloganBadge({
  hindi = "देखो मगर प्यार से",
  english = "DEKHO MAGAR PYAAR SE",
  theme = "yellow",
  tilt = 0,
}) {
  const bgColors = {
    yellow: { bg: "#ffd700", text: "#000", border: "#e60026", accent: "#ff0055" },
    red: { bg: "#d81e05", text: "#fff", border: "#ffd700", accent: "#ffd700" },
    blue: { bg: "#0f3cb5", text: "#fff", border: "#ffd700", accent: "#00f0ff" },
    green: { bg: "#008744", text: "#fff", border: "#ffd700", accent: "#ffffff" },
  };
  const c = bgColors[theme] || bgColors.yellow;

  return (
    <div
      className="truck-slogan-badge"
      style={{
        transform: `rotate(${tilt}deg)`,
        backgroundColor: c.bg,
        color: c.text,
        border: `3px solid ${c.border}`,
        borderRadius: "8px",
        padding: "6px 14px",
        boxShadow: "3px 4px 0 #000, 0 6px 12px rgba(0,0,0,0.25)",
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textTransform: "uppercase",
        userSelect: "none",
        transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
        cursor: "default",
      }}
    >
      <span
        style={{
          fontFamily: "'Yatra One', cursive, system-ui",
          fontSize: "14px",
          lineHeight: 1.1,
          letterSpacing: "0.02em",
          color: c.accent,
          textShadow: c.theme === "red" || c.theme === "blue" ? "1px 1px 0 #000" : "none",
        }}
      >
        {hindi}
      </span>
      <span
        style={{
          fontWeight: 900,
          fontSize: "11px",
          letterSpacing: "0.1em",
          lineHeight: 1.2,
        }}
      >
        {english}
      </span>
    </div>
  );
}

// Ornate Truck Scallop Frame (Top & Bottom borders)
export function ScallopBorder({ color = "#ffd700", flip = false }) {
  return (
    <svg
      width="100%"
      height="18"
      viewBox="0 0 400 18"
      preserveAspectRatio="none"
      style={{
        display: "block",
        transform: flip ? "rotate(180deg)" : "none",
      }}
    >
      <path
        d="M0 0 C20 16 30 16 50 0 C70 16 80 16 100 0 C120 16 130 16 150 0 C170 16 180 16 200 0 C220 16 230 16 250 0 C270 16 280 16 300 0 C320 16 330 16 350 0 C370 16 380 16 400 0 L400 18 L0 18 Z"
        fill={color}
      />
    </svg>
  );
}
