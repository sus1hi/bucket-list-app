import { BackgroundLayer } from "@/components/BackgroundLayer";

// Decorative "Stadt-Land-Fluss" landscape for the home page: a city skyline,
// rolling fields and a winding river, with a few activity icons scattered in.
// Anchored to the bottom of the viewport, full width.
//
// This is the faintest of the four, and the reason is structural rather than
// stylistic: the two hills are filled shapes that stack, so a pixel under the
// river and the boat carries four layers at once. Coincident layers share the
// contrast budget, so a four-deep stack forces every layer down. See the
// design notes for the measured alternative.
export function HomeBackground() {
  return (
    <BackgroundLayer className="inset-x-0 bottom-0">
      <svg viewBox="0 0 1440 560" className="h-auto w-full" focusable="false">
        {/* Countryside: two rolling bands, the far one warmer. */}
        <path
          d="M0 320 Q 240 258 480 306 Q 720 354 960 292 Q 1200 232 1440 296 L1440 560 L0 560 Z"
          fill="var(--accent)"
          opacity="0.03"
        />
        <path
          d="M0 430 Q 300 366 600 420 Q 860 466 1080 408 Q 1280 356 1440 400 L1440 560 L0 560 Z"
          fill="var(--muted)"
          opacity="0.03"
        />

        {/* City: one polygon so every building shares a baseline. */}
        <path
          d="M1000 300 L1000 232 L1044 232 L1044 262 L1080 262 L1080 196 L1126 196
             L1126 250 L1160 250 L1160 158 L1173 128 L1186 158 L1186 250 L1226 250
             L1226 210 L1280 210 L1280 264 L1318 264 L1318 224 L1364 224 L1364 300 Z"
          fill="var(--foreground)"
          opacity="0.038"
        />

        {/* Crop rows, hinting at fields between the city and the near hill. */}
        <g
          fill="none"
          stroke="var(--muted)"
          strokeWidth="3"
          strokeDasharray="16 14"
          opacity="0.044"
        >
          <path d="M1010 350 Q 1160 306 1300 344" />
          <path d="M1040 384 Q 1180 342 1320 378" />
        </g>

        {/* River, from the horizon down through the fields. */}
        <path
          d="M884 296 C 852 356 916 396 856 452 C 810 494 800 528 796 560"
          fill="none"
          stroke="var(--secondary)"
          strokeWidth="22"
          strokeLinecap="round"
          opacity="0.032"
        />

        {/* Activity icons: hiking, boating, reading. */}
        <g
          fill="none"
          stroke="var(--foreground)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.09"
        >
          <path
            d="M800 320 L820 284 L832 300 L842 288 L860 320 Z"
            fill="var(--accent)"
            fillOpacity="0.5"
          />

          <g transform="translate(858 444)">
            <path d="M-18 4 Q 0 18 18 4 Z" />
            <path d="M0 4 L0 -16" />
            <path d="M3 -15 L15 2 L3 2 Z" />
          </g>

          <g transform="translate(1150 470)">
            <path d="M0 -9 Q -10 -14 -20 -10 L-20 8 Q -10 4 0 11 Z" />
            <path d="M0 -9 Q 10 -14 20 -10 L20 8 Q 10 4 0 11 Z" />
          </g>
        </g>
      </svg>
    </BackgroundLayer>
  );
}
