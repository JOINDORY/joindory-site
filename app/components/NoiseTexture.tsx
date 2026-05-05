export function NoiseTexture() {
  return (
    <svg
      className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.035]"
      aria-hidden="true"
    >
      <filter id="noise-filter">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.8"
          numOctaves="4"
          stitchTiles="stitch"
        />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#noise-filter)" />
    </svg>
  );
}
