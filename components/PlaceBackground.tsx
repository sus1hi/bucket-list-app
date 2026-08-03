import { BackgroundLayer } from "@/components/BackgroundLayer";

// Decorative world-map scatter for the Place category page: abstract
// landmasses, a faint graticule, and a few pins each paired with a generic
// architectural silhouette (lattice tower, pyramid, tiered roof, suspension
// bridge). The shapes are deliberately generic rather than portraits of any
// particular real structure.
//
// The landmass fill sits under the graticule and the silhouettes, so up to
// three layers coincide. That shared budget is why the ink here is lighter
// than the Activity icons, which never overlap.
export function PlaceBackground() {
  return (
    <BackgroundLayer className="inset-0">
      <svg
        viewBox="0 0 1440 900"
        className="h-full w-full"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
      >
        <defs>
          {/* Map pin: teardrop outline with an inner dot. */}
          <g id="pb-pin">
            <path d="M0 9 C -6 0 -8 -5 -8 -9 A 8 8 0 1 1 8 -9 C 8 -5 6 0 0 9 Z" />
            <circle cx="0" cy="-9" r="3" />
          </g>

          {/* Generic lattice tower: two tapering legs, tie bars, a spire. */}
          <g id="pb-tower">
            <path d="M-13 16 Q -6 0 -3 -16" />
            <path d="M13 16 Q 6 0 3 -16" />
            <path d="M-13 16 L13 16" />
            <path d="M-9 4 L9 4" />
            <path d="M-6 -6 L6 -6" />
            <path d="M0 -16 L0 -24" />
          </g>

          {/* Pyramid, with one edge line to read as a solid. */}
          <g id="pb-pyramid">
            <path d="M-16 14 L0 -16 L16 14 Z" />
            <path d="M0 -16 L5 14" />
          </g>

          {/* Tiered roofline, three flared eaves over short posts. */}
          <g id="pb-pagoda">
            <path d="M-12 -8 Q 0 -16 12 -8" />
            <path d="M-16 2 Q 0 -6 16 2" />
            <path d="M-20 12 Q 0 4 20 12" />
            <path d="M-6 -8 L-6 2" />
            <path d="M6 -8 L6 2" />
            <path d="M-9 2 L-9 12" />
            <path d="M9 2 L9 12" />
            <path d="M0 -16 L0 -21" />
          </g>

          {/* Suspension bridge: deck, two towers, main and side cables. */}
          <g id="pb-bridge">
            <path d="M-24 6 L24 6" />
            <path d="M-11 8 L-11 -15" />
            <path d="M11 8 L11 -15" />
            <path d="M-11 -15 Q 0 3 11 -15" />
            <path d="M-24 -2 Q -18 -10 -11 -15" />
            <path d="M24 -2 Q 18 -10 11 -15" />
          </g>
        </defs>

        {/* Landmasses: abstract blobs, no real coastline intended. */}
        <g fill="var(--accent)" opacity="0.05">
          <path d="M120 300 C 260 250 420 290 470 380 C 520 470 420 540 300 520 C 180 500 60 420 120 300 Z" />
          <path d="M780 180 C 960 130 1180 170 1300 260 C 1400 335 1360 470 1220 500 C 1060 535 880 470 810 370 C 760 300 740 220 780 180 Z" />
          <path d="M900 700 C 1010 660 1180 680 1260 740 C 1330 792 1300 870 1180 880 C 1040 892 920 830 900 700 Z" />
        </g>

        {/* Graticule. */}
        <g
          fill="none"
          stroke="var(--muted)"
          strokeWidth="2"
          strokeDasharray="10 12"
          opacity="0.046"
        >
          <path d="M0 200 Q 720 176 1440 200" />
          <path d="M0 380 Q 720 356 1440 380" />
          <path d="M0 560 Q 720 536 1440 560" />
          <path d="M0 740 Q 720 716 1440 740" />
          <path d="M300 0 Q 260 450 300 900" />
          <path d="M720 0 L720 900" />
          <path d="M1140 0 Q 1180 450 1140 900" />
        </g>

        {/* Landmark silhouettes. */}
        <g
          fill="none"
          stroke="var(--foreground)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.092"
        >
          <use href="#pb-pyramid" transform="translate(200 700)" />
          <use href="#pb-tower" transform="translate(700 250)" />
          <use href="#pb-pagoda" transform="translate(1010 620)" />
          <use href="#pb-bridge" transform="translate(1290 300)" />
          <use href="#pb-pyramid" transform="translate(1170 830)" />
          <use href="#pb-tower" transform="translate(950 130)" />
        </g>

        {/* Pins, one per landmark, offset up and to the side. */}
        <g
          fill="none"
          stroke="var(--secondary)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.107"
        >
          <use href="#pb-pin" transform="translate(248 652)" />
          <use href="#pb-pin" transform="translate(744 196)" />
          <use href="#pb-pin" transform="translate(1056 568)" />
          <use href="#pb-pin" transform="translate(1238 236)" />
          <use href="#pb-pin" transform="translate(1216 782)" />
          <use href="#pb-pin" transform="translate(996 80)" />
        </g>
      </svg>
    </BackgroundLayer>
  );
}
