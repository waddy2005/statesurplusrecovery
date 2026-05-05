import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  src?: string;
  alt?: string;
  className?: string;
};

export default function QuantumFrame({
  children,
  src,
  alt = "",
  className = "",
}: Props) {
  return (
    <div className={`quantum-frame ${className}`}>
      <span className="quantum-frame__energy" aria-hidden="true" />
      <div className="quantum-frame__inner">
        {src ? <img src={src} alt={alt} /> : children}
      </div>
    </div>
  );
}
