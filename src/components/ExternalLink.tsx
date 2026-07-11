import type { ReactNode } from "react";
import { isValidHttpUrl } from "../data/config";

type ExternalLinkProps = {
  href?: string;
  className?: string;
  ariaLabel?: string;
  children: ReactNode;
};

export function ExternalLink({
  href,
  className,
  ariaLabel,
  children,
}: ExternalLinkProps) {
  if (!isValidHttpUrl(href)) {
    return null;
  }

  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}
