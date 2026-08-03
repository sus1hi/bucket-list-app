// Shared shell for the four decorative page backgrounds. It centralises the
// contract every one of them needs -- fixed behind the content, never
// interactive, hidden from assistive tech -- so the safety-critical part is
// written once. `className` carries the per-illustration positioning.
//
// None of them masks or fades any more. Their ink opacities are tuned so the
// worst overlapping stack still clears WCAG AA for --muted text at full
// strength, which means they stay legible behind text at any viewport width
// without being hidden anywhere. See the design notes for the measurements.
export function BackgroundLayer({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed -z-10 overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
}
