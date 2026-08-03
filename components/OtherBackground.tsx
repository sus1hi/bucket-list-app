import { BackgroundLayer } from "@/components/BackgroundLayer";

// Decorative night sky for the Other category page, drawn as pale warm line
// art on the cream page rather than as a dark panel. Stars are small dots, the
// moon is a stroked crescent outline, and a schematic telescope on a tripod
// points up into the sky.
//
// The earlier version used a solid dark panel, which measured 1.35:1 against
// body text and so had to be kept off to one side. Pale ink removes that
// constraint: the drawing can now cover the whole viewport and still clear AA
// where text crosses it, at any width.
export function OtherBackground() {
  return (
    <BackgroundLayer className="inset-0">
      <svg
        viewBox="0 0 1440 900"
        className="h-full w-full"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
      >
        {/* Star field. */}
        <g fill="var(--muted)" opacity="0.1">
          <circle cx="60" cy="120" r="2.2" />
          <circle cx="150" cy="80" r="1.8" />
          <circle cx="240" cy="150" r="2.6" />
          <circle cx="330" cy="95" r="2" />
          <circle cx="420" cy="170" r="1.6" />
          <circle cx="80" cy="260" r="2" />
          <circle cx="200" cy="340" r="2.4" />
          <circle cx="290" cy="255" r="1.8" />
          <circle cx="390" cy="320" r="2.2" />
          <circle cx="470" cy="255" r="1.6" />
          <circle cx="60" cy="430" r="2.6" />
          <circle cx="170" cy="470" r="1.8" />
          <circle cx="270" cy="420" r="2" />
          <circle cx="360" cy="490" r="2.4" />
          <circle cx="450" cy="430" r="1.6" />
          <circle cx="90" cy="580" r="2" />
          <circle cx="200" cy="620" r="2.2" />
          <circle cx="420" cy="600" r="1.8" />
          <circle cx="520" cy="540" r="2.6" />
          <circle cx="560" cy="650" r="2" />
          <circle cx="620" cy="470" r="1.8" />
          <circle cx="700" cy="540" r="2.2" />
          <circle cx="760" cy="410" r="2.6" />
          <circle cx="820" cy="490" r="1.8" />
          <circle cx="880" cy="560" r="2" />
          <circle cx="660" cy="120" r="2.4" />
          <circle cx="760" cy="180" r="1.8" />
          <circle cx="840" cy="110" r="2.2" />
          <circle cx="940" cy="180" r="2.6" />
          <circle cx="1020" cy="120" r="1.8" />
          <circle cx="1100" cy="300" r="2" />
          <circle cx="1180" cy="380" r="2.4" />
          <circle cx="1260" cy="240" r="1.8" />
          <circle cx="1340" cy="320" r="2.2" />
          <circle cx="1400" cy="180" r="2.6" />
          <circle cx="1150" cy="520" r="2" />
          <circle cx="1240" cy="600" r="2.4" />
          <circle cx="1330" cy="510" r="1.8" />
          <circle cx="1400" cy="650" r="2.2" />
          <circle cx="1060" cy="660" r="2" />
          <circle cx="940" cy="700" r="2.6" />
          <circle cx="760" cy="720" r="1.8" />
          <circle cx="620" cy="780" r="2.2" />
          <circle cx="500" cy="760" r="2" />
          <circle cx="280" cy="760" r="2.4" />
        </g>

        {/* A few brighter four-point sparkles for variety. */}
        <g fill="var(--accent-hover)" opacity="0.11">
          <path
            d="M0 -10 Q 1.5 -1.5 10 0 Q 1.5 1.5 0 10 Q -1.5 1.5 -10 0 Q -1.5 -1.5 0 -10 Z"
            transform="translate(410 240)"
          />
          <path
            d="M0 -10 Q 1.5 -1.5 10 0 Q 1.5 1.5 0 10 Q -1.5 1.5 -10 0 Q -1.5 -1.5 0 -10 Z"
            transform="translate(880 300)"
          />
          <path
            d="M0 -10 Q 1.5 -1.5 10 0 Q 1.5 1.5 0 10 Q -1.5 1.5 -10 0 Q -1.5 -1.5 0 -10 Z"
            transform="translate(1300 420)"
          />
          <path
            d="M0 -10 Q 1.5 -1.5 10 0 Q 1.5 1.5 0 10 Q -1.5 1.5 -10 0 Q -1.5 -1.5 0 -10 Z"
            transform="translate(640 640)"
          />
          <path
            d="M0 -10 Q 1.5 -1.5 10 0 Q 1.5 1.5 0 10 Q -1.5 1.5 -10 0 Q -1.5 -1.5 0 -10 Z"
            transform="translate(1080 220)"
          />
        </g>

        {/* Crescent moon: two arcs closing into an outline, no mask needed. */}
        <path
          d="M0 -34 A 34 34 0 1 0 0 34 A 42 42 0 0 1 0 -34 Z"
          transform="translate(1200 190)"
          fill="none"
          stroke="var(--accent-hover)"
          strokeWidth="3"
          strokeLinejoin="round"
          opacity="0.13"
        />

        {/* Constellations: joined lines, no real star pattern intended. */}
        <g
          fill="none"
          stroke="var(--muted)"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.06"
        >
          <path d="M120 300 L190 265 L245 320" />
          <path d="M190 265 L170 375" />
          <path d="M520 240 L590 205 L650 255 L710 200" />
          <path d="M650 255 L640 315" />
          <path d="M900 380 L965 415 L1020 360 L1080 405" />
          <path d="M1020 360 L1010 300" />
        </g>
        <g fill="var(--muted)" opacity="0.1">
          <circle cx="120" cy="300" r="3" />
          <circle cx="190" cy="265" r="3" />
          <circle cx="245" cy="320" r="3" />
          <circle cx="170" cy="375" r="3" />
          <circle cx="520" cy="240" r="3" />
          <circle cx="590" cy="205" r="3" />
          <circle cx="650" cy="255" r="3" />
          <circle cx="710" cy="200" r="3" />
          <circle cx="640" cy="315" r="3" />
          <circle cx="900" cy="380" r="3" />
          <circle cx="965" cy="415" r="3" />
          <circle cx="1020" cy="360" r="3" />
          <circle cx="1080" cy="405" r="3" />
          <circle cx="1010" cy="300" r="3" />
        </g>

        {/* Telescope: angled tube on a tripod, pointing up into the sky. */}
        <g
          transform="translate(300 640)"
          fill="none"
          stroke="var(--foreground)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.1"
        >
          <path d="M-22 20 L-14 32 L42 -8 L34 -20 Z" />
          <circle cx="0" cy="13" r="6" />
          <path d="M0 13 L-26 54" />
          <path d="M0 13 L26 54" />
          <path d="M0 13 L3 58" />
        </g>
      </svg>
    </BackgroundLayer>
  );
}
