import type { HTMLAttributes, ReactNode } from "react";

type SectionContainerProps = HTMLAttributes<HTMLDivElement> & { children: ReactNode };

export function SectionContainer({ children, className = "", ...props }: SectionContainerProps) {
  return <div className={`v2-section-container ${className}`.trim()} {...props}>{children}</div>;
}
