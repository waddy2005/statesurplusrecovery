import ScrollReveal from "./ScrollReveal";
import { StarFilledIcon } from "./icons";

type Testimonial = {
  quote: string;
  initials: string;
  name: string;
  location: string;
};

const ITEMS: Testimonial[] = [
  {
    quote:
      "I'd given up on the house years ago. Got a letter from these folks, called the county to confirm, and a few months later there was a check. Real money, real check, real fast.",
    initials: "DM",
    name: "Darlene M.",
    location: "Cleveland, OH",
  },
  {
    quote:
      "My dad passed and we thought everything was settled. The team walked me through the heir process step by step. They never rushed me, never asked for a dime upfront. The funds came through.",
    initials: "RT",
    name: "Ricardo T.",
    location: "Houston, TX",
  },
  {
    quote:
      "I called three other recovery companies first. The other three asked for fees up front or got cagey when I asked questions. State Surplus Recovery answered everything. That mattered.",
    initials: "PG",
    name: "Patricia G.",
    location: "Tampa, FL",
  },
];

export default function Testimonials() {
  return (
    <section className="section testimonials">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="eyebrow">From the People We've Helped</span>
            <h2>Real recoveries. Real homeowners.</h2>
            <p>
              We don't pay anyone to leave a review. These are folks who
              actually got their money back.
            </p>
          </div>
        </ScrollReveal>

        <div className="testimonials__grid">
          {ITEMS.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 110}>
              <article className="testimonial">
                <div className="testimonial__stars" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <StarFilledIcon key={j} size={16} />
                  ))}
                </div>
                <p className="testimonial__quote">&ldquo;{t.quote}&rdquo;</p>
                <div className="testimonial__person">
                  <span className="testimonial__avatar" aria-hidden="true">
                    {t.initials}
                  </span>
                  <div>
                    <span className="testimonial__name">{t.name}</span>
                    <span className="testimonial__location">{t.location}</span>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
