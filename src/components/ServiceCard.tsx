import { ReactNode } from "react";
import ScrollReveal from "./ScrollReveal";

type Props = {
  title: string;
  body: string;
  icon: ReactNode;
  delay?: number;
};

export default function ServiceCard({ title, body, icon, delay = 0 }: Props) {
  return (
    <ScrollReveal delay={delay}>
      <article className="service-card">
        <div className="service-card__head">
          <div className="service-card__icon">{icon}</div>
          <h3>{title}</h3>
        </div>
        <p>{body}</p>
      </article>
    </ScrollReveal>
  );
}
