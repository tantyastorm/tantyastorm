import type { HTMLAttributes, ReactNode } from "react";

type GlassPanelProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  interactive?: boolean;
};

export function GlassPanel({
  children,
  className = "",
  interactive = false,
  ...props
}: GlassPanelProps) {
  return (
    <div
      className={`v2-glass-panel${interactive ? " v2-glass-panel--interactive" : ""} ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
}
