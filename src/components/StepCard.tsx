import { ReactNode } from "react";
import ScrollReveal from "./ScrollReveal";

type Props = {
  number: string;
  title: string;
  body: string;
  icon: ReactNode;
  delay?: number;
};

export default function StepCard({ number, title, body, icon, delay = 0 }: Props) {
  return (
    <ScrollReveal delay={delay}>
      <article className="step-card">
        <div className="step-card__number">Step {number}</div>
        <div className="step-card__icon">{icon}</div>
        <h3>{title}</h3>
        <p>{body}</p>
      </article>
    </ScrollReveal>
  );
}
