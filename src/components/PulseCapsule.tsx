import { ReactNode } from "react";

type Props = { children: ReactNode; className?: string };

// Clean eyebrow tag — small dash + uppercase label, no dot, no pill.
export default function PulseCapsule({ children, className = "" }: Props) {
  return <span className={`eyebrow ${className}`}>{children}</span>;
}
