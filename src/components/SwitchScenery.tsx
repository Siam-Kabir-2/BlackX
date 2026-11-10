import type { CSSProperties } from "react";

type Building = { x: number; y: number; width: number; height: number; columns: number; rows: number };

const buildings: Building[] = [
  { x: 0, y: 248, width: 103, height: 272, columns: 5, rows: 12 },
  { x: 109, y: 200, width: 87, height: 320, columns: 4, rows: 14 },
  { x: 202, y: 281, width: 108, height: 239, columns: 5, rows: 10 },
  { x: 316, y: 150, width: 100, height: 370, columns: 4, rows: 16 },
  { x: 422, y: 226, width: 93, height: 294, columns: 4, rows: 13 },
  { x: 522, y: 171, width: 111, height: 349, columns: 5, rows: 15 },
  { x: 640, y: 255, width: 82, height: 265, columns: 4, rows: 11 },
  { x: 728, y: 219, width: 112, height: 301, columns: 5, rows: 13 },
  { x: 847, y: 129, width: 96, height: 391, columns: 4, rows: 17 },
  { x: 950, y: 252, width: 105, height: 268, columns: 5, rows: 11 },
  { x: 1062, y: 191, width: 138, height: 329, columns: 6, rows: 14 },
];

function Windows({ building, index }: { building: Building; index: number }) {
  const xStep = building.width / (building.columns + 1);
  const yStep = building.height / (building.rows + 1);

  return <g>
    {Array.from({ length: building.rows * building.columns }, (_, cell) => {
      const row = Math.floor(cell / building.columns);
      const column = cell % building.columns;
      const lit = (row * 7 + column * 11 + index * 3) % 9 < 6;
      const signal = (row * 3 + column * 5 + index) % 5 < 2;
      return <rect
        key={cell}
        className={`city-window${lit ? " city-window--lit" : ""}${signal ? " city-window--signal" : ""}`}
        x={building.x + xStep * (column + 1) - 3}
        y={building.y + yStep * (row + 1) - 4}
        width="6"
        height="8"
        rx=".6"
        style={{ "--district-delay": `${index * 65}ms`, "--signal-delay": `${Math.abs(index - 8) * 65 + row * 15}ms` } as CSSProperties}
      />;
    })}
  </g>;
}

function Billboard({ x, y, variant }: { x: number; y: number; variant: "desktop" | "mobile" }) {
  return <g className={`city-billboard city-billboard--${variant}`} transform={`translate(${x} ${y})`}>
    <path d="M15 126v92m188-92v92" stroke="#202c39" strokeWidth="6" />
    <rect x="-8" y="-8" width="234" height="140" rx="5" fill="#02060b" stroke="#657d91" strokeWidth="2" />
    <rect width="218" height="124" rx="2" fill="#0b1622" stroke="#4d6072" strokeWidth="1" />
    <rect className="billboard-outline" x="-8" y="-8" width="234" height="140" rx="5" fill="none" stroke="#b9ecff" strokeWidth="2" pathLength="1" />
    <path className="billboard-boot" d="M18 62h182" stroke="#d3f2ff" strokeWidth="2" pathLength="1" />
    <path d="M10 12h198M10 111h198" stroke="#8ba4b8" strokeOpacity=".18" />
    <g className="billboard-online">
      <text x="18" y="43" fill="#8fa5b7" fontSize="12" fontFamily="monospace" letterSpacing="2">METRO GRID</text>
      <text x="16" y="93" fill="#d9e4ec" fontSize="36" fontWeight="650" fontFamily="Arial, sans-serif" letterSpacing="-1">ONLINE</text>
    </g>
    <g className="billboard-signal">
      <text x="109" y="23" textAnchor="middle" fill="#9ec7e0" fontSize="9" fontFamily="monospace" letterSpacing="2">XRP SIGNAL</text>
      <text x="109" y="99" textAnchor="middle" fill="#f1faff" fontSize="83" fontWeight="750" fontFamily="Arial, sans-serif" letterSpacing="-7">589</text>
    </g>
  </g>;
}

export function SwitchScenery() {
  return <div className="scene-art" aria-hidden="true">
    <svg className="scene-town" viewBox="0 0 1200 640" preserveAspectRatio="xMidYMid slice" focusable="false">
      <defs>
        <linearGradient id="city-sky" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#121d2e" />
          <stop offset=".6" stopColor="#2c3e50" />
          <stop offset="1" stopColor="#17212d" />
        </linearGradient>
        <linearGradient id="city-ground" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#202b34" />
          <stop offset="1" stopColor="#05080d" />
        </linearGradient>
        <linearGradient id="city-facade" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#243443" /><stop offset=".5" stopColor="#152330" /><stop offset="1" stopColor="#0c1723" />
        </linearGradient>
        <linearGradient id="city-haze" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#7998ac" stopOpacity="0" /><stop offset="1" stopColor="#7998ac" stopOpacity=".1" />
        </linearGradient>
        <linearGradient id="city-lamp-cone" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#f0ce96" stopOpacity=".12" /><stop offset="1" stopColor="#f0ce96" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="city-halo"><stop stopColor="#d4bfa5" stopOpacity=".3" /><stop offset="1" stopColor="#d4bfa5" stopOpacity="0" /></radialGradient>
        <radialGradient id="city-signal-halo"><stop stopColor="#8bcff5" stopOpacity=".45" /><stop offset="1" stopColor="#8bcff5" stopOpacity="0" /></radialGradient>
        <filter id="city-glow"><feGaussianBlur stdDeviation="7" /></filter>
      </defs>
      <rect width="1200" height="640" fill="url(#city-sky)" />
      <rect className="city-dark-sky" width="1200" height="640" fill="#030711" />
      <circle className="city-signal-halo" cx="865" cy="305" r="340" fill="url(#city-signal-halo)" />
      <circle cx="1040" cy="103" r="134" fill="url(#city-halo)" />
      <circle cx="1040" cy="103" r="17" fill="#d8e0e6" opacity=".65" />
      <g className="city-clouds" fill="#a8bfd1" opacity=".065">
        <path d="M40 121q54-32 111-9 29-41 89-17 62-23 110 26Z" />
        <path d="M650 73q40-21 81-9 36-28 83-5 58-17 95 14Z" />
        <path d="M410 189q57-31 114-10 53-26 91 10Z" />
      </g>
      <g className="city-birds" fill="none" stroke="#a2b5c8" strokeWidth="1.6" opacity=".65">
        {[0, 1, 2, 3, 4].map((i) => <g key={i} transform={`translate(${390 + i * 34} ${106 + (i % 3) * 15})`}>
          <path className="city-bird-wing" d="M-9-3Q-4-7 0 0Q4-7 9-3" style={{ animationDelay: `${i * -0.2}s` }} />
        </g>)}
      </g>
      {Array.from({ length: 48 }, (_, i) => <circle key={i} className="city-star" cx={(i * 197 + 61) % 1200} cy={(i * 73 + 17) % 370} r={i % 7 === 0 ? 1.25 : .7} fill="#d8e9f5" opacity={i % 3 === 0 ? .45 : .2} />)}
      <path d="M0 421 83 381 165 401 255 349 332 368 400 339 509 363 603 332 695 359 783 326 883 358 983 333 1080 360 1200 329V530H0Z" fill="#142233" opacity=".84" />
      <g className="city-distant" fill="#2d4052" opacity=".3">
        {Array.from({ length: 19 }, (_, i) => {
          const x = i * 69 - 15;
          const y = 210 + (i * 43) % 155;
          return <g key={i}>
            <rect x={x} y={y} width={35 + (i % 3) * 12} height={490 - y} />
            <path d={`M${x + 6} ${y}v-8h23v8`} fill="#334858" />
          </g>;
        })}
      </g>
      <g className="city-building-group">
        {buildings.map((building, index) => <g key={building.x}>
          <rect x={building.x} y={building.y} width={building.width} height={building.height} fill="url(#city-facade)" stroke="#3c4e5c" strokeWidth=".7" />
          <rect x={building.x + building.width - 9} y={building.y + 5} width="8" height={building.height - 5} fill="#07121e" opacity=".55" />
          <path d={`M${building.x + 7} ${building.y + 10}v${building.height - 10}`} stroke="#728b9b" strokeOpacity=".13" />
          {index % 2 === 0 && <g>
            <rect x={building.x + 14} y={building.y - 12} width="27" height="12" fill="#182735" stroke="#4a5e6d" strokeWidth=".6" />
            <path d={`M${building.x + 19} ${building.y - 9}h17m-17 3h17`} stroke="#6d8291" strokeOpacity=".4" />
          </g>}
          <rect x={building.x + 4} y={building.y + 3} width={building.width - 8} height="3" fill="#5d6f7b" opacity=".55" />
          <Windows building={building} index={index} />
        </g>)}
        <path d="M365 150v-45m-8 26h16M893 129V75m-8 27h16" stroke="#708090" strokeWidth="2" />
        <circle className="city-beacon" cx="365" cy="105" r="3" fill="#f0c591" />
        <circle className="city-beacon" cx="893" cy="75" r="3" fill="#f0c591" />
      </g>

      <rect x="0" y="330" width="1200" height="190" fill="url(#city-haze)" />

      <g className="city-storefronts">
        {Array.from({ length: 9 }, (_, i) => {
          const x = i * 145 - 20;
          return <g key={i}>
            <rect x={x} y={i % 3 === 0 ? 445 : 462} width="139" height="75" fill="#1e2a36" stroke="#4a5b68" />
            <rect x={x + 5} y="477" width="129" height="4" fill="#667889" opacity=".6" />
            <rect className="city-shop-light" x={x + 13} y="488" width="33" height="23" fill="#c4a579" opacity=".5" />
            <rect className="city-shop-light" x={x + 53} y="488" width="33" height="23" fill="#c4a579" opacity=".32" />
            <rect className="city-shop-light" x={x + 93} y="488" width="33" height="23" fill="#c4a579" opacity=".5" />
            <path d={`M${x + 51} 487v25m40-25v25`} stroke="#26394b" strokeWidth="2" />
          </g>;
        })}
      </g>

      <g className="city-cables" fill="none" stroke="#293747" strokeWidth="2">
        <path d="M-30 343Q135 387 290 350T610 350T940 345T1230 347" />
        <path d="M-30 354Q135 398 290 361T610 361T940 356T1230 358" strokeWidth="1.3" />
        <path d="M-30 364Q135 408 290 371T610 371T940 366T1230 368" strokeWidth="1.1" />
      </g>
      <path className="city-cable-pulse" d="M-30 343Q135 387 290 350T610 350T940 345T1230 347" fill="none" stroke="#c4edff" strokeWidth="2" pathLength="1" />
      {[76, 351, 672, 990].map((x) => <g key={x} className="city-pole">
        <path d={`M${x} 524V337m-23 17h46`} stroke="#1b2632" strokeWidth="7" />
        <path d={`M${x - 23} 354h46`} stroke="#647788" strokeWidth="2" />
        <circle cx={x - 17} cy="354" r="4" fill="#8799a7" /><circle cx={x + 17} cy="354" r="4" fill="#8799a7" />
      </g>)}

      <Billboard x={850} y={284} variant="desktop" />
      <Billboard x={488} y={279} variant="mobile" />

      <rect y="520" width="1200" height="120" fill="url(#city-ground)" />
      <ellipse className="city-board-reflection city-billboard--desktop" cx="959" cy="558" rx="120" ry="28" fill="url(#city-signal-halo)" />
      <ellipse className="city-board-reflection city-billboard--mobile" cx="597" cy="558" rx="120" ry="28" fill="url(#city-signal-halo)" />
      <g className="city-wet-reflections" stroke="#c1a77f" strokeWidth="2" opacity=".2">
        {Array.from({ length: 16 }, (_, i) => <path key={i} d={`M${i * 79 + 10} ${536 + (i % 4) * 24}h${14 + (i % 3) * 13}`} />)}
      </g>
      <path d="M0 523h1200M0 571h1200" stroke="#8393a0" strokeOpacity=".3" strokeWidth="2" />
      <path d="m0 640 470-120m730 120L740 520" stroke="#8a9aa7" strokeOpacity=".3" strokeWidth="2" />
      <path className="city-road-lights" d="M602 536v14m0 15v19m0 19v25" stroke="#e0c79f" strokeWidth="4" strokeDasharray="14 16" />
      {[121, 329, 731, 1050].map((x) => <g key={x}>
        <path d={`M${x} 525v-90h24`} stroke="#748596" strokeWidth="3" fill="none" />
        <g className="city-lamp">
        <path d={`M${x + 24} 437 ${x - 38} 525h124Z`} fill="url(#city-lamp-cone)" />
        <ellipse cx={x + 24} cy="530" rx="46" ry="7" fill="#e8bc7d" opacity=".08" />
        <circle cx={x + 24} cy="436" r="32" fill="#e8bc7d" opacity=".48" filter="url(#city-glow)" />
        <circle cx={x + 24} cy="436" r="4" fill="#f4d49e" />
        </g>
      </g>)}
      <g className="city-car city-car--one">
        <rect x="0" y="563" width="124" height="22" rx="8" fill="#384b5d" />
        <path d="M22 563 40 544h60l17 19Z" fill="#3d5367" /><path d="M43 547h52l14 15H29Z" fill="#182f40" />
        <circle cx="25" cy="585" r="11" fill="#070d13" /><circle cx="100" cy="585" r="11" fill="#070d13" />
        <rect className="city-car-light" x="118" y="569" width="7" height="7" rx="2" fill="#fff1c7" />
      </g>
      <g className="city-car city-car--two">
        <rect x="0" y="606" width="112" height="20" rx="7" fill="#27394a" />
        <path d="M20 606 36 589h54l16 17Z" fill="#324759" /><path d="M38 592h48l13 13H26Z" fill="#162a3b" />
        <circle cx="24" cy="626" r="10" fill="#070d13" /><circle cx="90" cy="626" r="10" fill="#070d13" />
        <rect className="city-car-light" x="105" y="612" width="7" height="7" rx="2" fill="#fff1c7" />
      </g>
    </svg>
  </div>;
}
