import { ReactNode } from "react";
import ScrollReveal from "./ScrollReveal";

export type TimelineStep = {
  num: string;
  title: string;
  body: string;
  icon: ReactNode;
};

type Props = { steps: TimelineStep[] };

export default function Timeline({ steps }: Props) {
  return (
    <div className="timeline__inner">
      <div className="timeline-spine" aria-hidden="true" />

      {steps.map((step, i) => {
        const side = i % 2 === 0 ? "left" : "right";
        return (
          <ScrollReveal key={step.num} delay={i * 90}>
            <div className={`timeline-row timeline-row--${side}`}>
              <div className="timeline-row__connector" aria-hidden="true" />
              <article className="timeline-card">
                <div className="timeline-card__head">
                  <span className="timeline-card__step">Step {step.num}</span>
                  <span className="timeline-card__icon">{step.icon}</span>
                </div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
              <div className="timeline-row__node" aria-hidden="true">
                <span className="timeline-halo" />
              </div>
            </div>
          </ScrollReveal>
        );
      })}
    </div>
  );
}
