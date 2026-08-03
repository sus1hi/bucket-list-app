// Decorative scatter of activity icons for the Activity category page.
//
// Same legibility rules as HomeBackground: --muted text sits at 4.81:1 on
// cream and only clears AA while whatever is behind it stays under roughly
// 25% strength, so the drawing is faded out across the max-w-xl text column
// on the left. Icons are drawn everywhere, but the ones on the left are
// deliberately ghosted rather than omitted.
export function ActivityBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <svg
        viewBox="0 0 1440 900"
        className="h-full w-full"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
      >
        <defs>
          {/* Icon shapes, each drawn centred on the origin so a single
              translate/scale/rotate is enough to place one. */}
          <g id="ab-mountain">
            <path d="M-22 14 L-6 -14 L4 0 L11 -10 L22 14 Z" />
          </g>
          <g id="ab-tent">
            <path d="M-20 14 L0 -15 L20 14 Z" />
            <path d="M-7 14 L0 -1 L7 14" />
          </g>
          <g id="ab-bicycle">
            <circle cx="-14" cy="7" r="8" />
            <circle cx="14" cy="7" r="8" />
            <path d="M-14 7 L0 7 L8 -7 L14 7" />
            <path d="M0 7 L-3 -7 L5 -7" />
          </g>
          <g id="ab-swimmer">
            <circle cx="-4" cy="-9" r="4" />
            <path d="M-16 0 Q -4 -7 8 -2 L17 -9" />
            <path d="M-20 9 Q -14 4 -8 9 Q -2 14 4 9 Q 10 4 16 9" />
          </g>
          <g id="ab-brush">
            <path d="M-15 14 L1 -2" />
            <path d="M1 -2 L7 4 L15 -4 L9 -10 Z" />
            <path d="M15 -4 L19 -8" />
          </g>
          <g id="ab-camera">
            <rect x="-18" y="-7" width="36" height="21" rx="4" />
            <circle cx="0" cy="3" r="7" />
            <path d="M-9 -7 L-6 -13 L6 -13 L9 -7" />
          </g>
          <g id="ab-runner">
            <circle cx="5" cy="-14" r="4" />
            <path d="M2 -9 L-2 -1" />
            <path d="M-10 -7 L1 -6 L11 -11" />
            <path d="M-2 -1 L-9 6 L-7 15" />
            <path d="M-2 -1 L6 3 L10 12" />
          </g>

          {/* Held at or below 15% across the text column, full strength past
              60% of the width. Tighter than the home page fade because these
              are dark outline strokes rather than a pale wash. */}
          <linearGradient id="ab-fade" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" stopColor="#fff" stopOpacity="0.08" />
            <stop offset="0.45" stopColor="#fff" stopOpacity="0.15" />
            <stop offset="0.6" stopColor="#fff" stopOpacity="1" />
            <stop offset="1" stopColor="#fff" stopOpacity="1" />
          </linearGradient>
          <mask
            id="ab-mask"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="1440"
            height="900"
          >
            <rect width="1440" height="900" fill="url(#ab-fade)" />
          </mask>
        </defs>

        <g
          mask="url(#ab-mask)"
          fill="none"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <g stroke="var(--foreground)" opacity="0.2">
            <use href="#ab-tent" transform="translate(150 690) rotate(-6)" />
            <use href="#ab-runner" transform="translate(700 520)" />
            <use href="#ab-mountain" transform="translate(940 300)" />
            <use href="#ab-mountain" transform="translate(1250 95)" />
            <use href="#ab-tent" transform="translate(1330 210) rotate(5)" />
          </g>

          <g stroke="var(--secondary)" opacity="0.22">
            <use href="#ab-brush" transform="translate(540 800) rotate(-10)" />
            <use href="#ab-swimmer" transform="translate(1080 660) rotate(-4)" />
            <use href="#ab-brush" transform="translate(1340 760) rotate(12)" />
          </g>

          <g stroke="var(--accent-hover)" opacity="0.3">
            <use href="#ab-bicycle" transform="translate(340 250) rotate(4)" />
            <use href="#ab-camera" transform="translate(800 140) rotate(-8)" />
            <use href="#ab-bicycle" transform="translate(1180 430) rotate(-5)" />
            <use href="#ab-camera" transform="translate(900 830) rotate(6)" />
          </g>
        </g>
      </svg>
    </div>
  );
}
