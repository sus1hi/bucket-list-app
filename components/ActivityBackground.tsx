import { BackgroundLayer } from "@/components/BackgroundLayer";

// Decorative scatter of activity icons for the Activity category page.
//
// This is the strongest of the four, because it is pure line art: no two icons
// overlap, so each one has the whole contrast budget to itself rather than
// sharing it with layers underneath. With the fade gone, the icons are spread
// evenly across the full canvas instead of being ghosted on the left.
export function ActivityBackground() {
  return (
    <BackgroundLayer className="inset-0">
      <svg
        viewBox="0 0 1440 900"
        className="h-full w-full"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
      >
        <defs>
          {/* Icon shapes, each drawn centred on the origin so a single
              translate/rotate is enough to place one. */}
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
        </defs>

        <g
          fill="none"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <g stroke="var(--foreground)" opacity="0.14">
            <use href="#ab-tent" transform="translate(140 700) rotate(-6)" />
            <use href="#ab-mountain" transform="translate(660 300)" />
            <use href="#ab-runner" transform="translate(760 600)" />
            <use href="#ab-mountain" transform="translate(1250 120)" />
            <use href="#ab-tent" transform="translate(1300 640) rotate(5)" />
          </g>

          <g stroke="var(--secondary)" opacity="0.17">
            <use href="#ab-brush" transform="translate(520 790) rotate(-10)" />
            <use href="#ab-swimmer" transform="translate(1010 700) rotate(-4)" />
            <use href="#ab-brush" transform="translate(1390 300) rotate(12)" />
          </g>

          <g stroke="var(--accent-hover)" opacity="0.24">
            <use href="#ab-bicycle" transform="translate(330 230) rotate(4)" />
            <use href="#ab-camera" transform="translate(430 430) rotate(-8)" />
            <use href="#ab-camera" transform="translate(880 150) rotate(6)" />
            <use href="#ab-bicycle" transform="translate(1130 380) rotate(-5)" />
          </g>
        </g>
      </svg>
    </BackgroundLayer>
  );
}
