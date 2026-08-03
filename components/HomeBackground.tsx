// Decorative "Stadt-Land-Fluss" landscape for the home page: a city skyline,
// rolling fields and a winding river, with a few activity icons scattered in.
//
// The strip is anchored to the bottom of the viewport and the skyline sits on
// the right, because the page content is a max-w-xl column on the left. That
// keeps the busiest part of the drawing away from the text.
export function HomeBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 bottom-0 -z-10 overflow-hidden"
    >
      <svg
        viewBox="0 0 1440 560"
        // Width-driven so the strip is always full-bleed and never cropped.
        className="h-auto w-full"
        focusable="false"
      >
        <defs>
          {/* The text column is max-w-xl on the left, so the drawing is faded
              out over it. This is not just taste: --muted sits at 4.81:1 on
              plain cream, so any tint above ~25% strength behind it drops the
              small labels below the 4.5:1 AA threshold. */}
          <linearGradient id="hb-fade" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" stopColor="#fff" stopOpacity="0.1" />
            <stop offset="0.42" stopColor="#fff" stopOpacity="0.2" />
            <stop offset="0.58" stopColor="#fff" stopOpacity="1" />
            <stop offset="1" stopColor="#fff" stopOpacity="1" />
          </linearGradient>
          <mask
            id="hb-mask"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="1440"
            height="560"
          >
            <rect width="1440" height="560" fill="url(#hb-fade)" />
          </mask>
        </defs>

        <g mask="url(#hb-mask)">
          {/* Countryside: two rolling bands, the far one warmer. */}
          <path
            d="M0 320 Q 240 258 480 306 Q 720 354 960 292 Q 1200 232 1440 296 L1440 560 L0 560 Z"
            fill="var(--accent)"
            opacity="0.12"
          />
          <path
            d="M0 430 Q 300 366 600 420 Q 860 466 1080 408 Q 1280 356 1440 400 L1440 560 L0 560 Z"
            fill="var(--muted)"
            opacity="0.13"
          />

          {/* City: one polygon so every building shares a baseline. */}
          <path
            d="M1000 300 L1000 232 L1044 232 L1044 262 L1080 262 L1080 196 L1126 196
               L1126 250 L1160 250 L1160 158 L1173 128 L1186 158 L1186 250 L1226 250
               L1226 210 L1280 210 L1280 264 L1318 264 L1318 224 L1364 224 L1364 300 Z"
            fill="var(--foreground)"
            opacity="0.14"
          />

          {/* Crop rows, hinting at fields between the city and the near hill. */}
          <g
            fill="none"
            stroke="var(--muted)"
            strokeWidth="3"
            strokeDasharray="16 14"
            opacity="0.22"
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
            opacity="0.2"
          />

          {/* Activity icons: hiking, boating, reading. */}
          <g
            fill="none"
            stroke="var(--foreground)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.28"
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
        </g>
      </svg>
    </div>
  );
}
