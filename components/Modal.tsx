"use client";

export function Modal({
  title,
  onClose,
  children,
}: {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}) {
  return (
    <div
      // Closes only when the overlay itself is clicked, not the panel.
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      className="fixed inset-0 z-10 flex items-center justify-center bg-foreground/50 p-4"
    >
      <div className="max-h-full w-full max-w-md overflow-y-auto rounded bg-surface p-4">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-lg font-bold">{title}</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="px-2 text-xl leading-none text-muted hover:text-foreground"
          >
            &times;
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
