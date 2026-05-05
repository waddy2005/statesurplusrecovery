import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "./icons";

const ITEMS: string[] = [
  "Your home was sold at a foreclosure auction.",
  "Your property was sold at a county tax sale.",
  'You got a letter mentioning "excess proceeds" or "surplus funds."',
  "You're the heir of someone whose property was sold at auction.",
  "Your property sold for more than what you owed on the mortgage or tax debt.",
  "A county office told you there might be leftover money but you didn't know how to get it.",
];

function CheckMark() {
  return (
    <svg
      viewBox="0 0 40 40"
      width="40"
      height="40"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="20" cy="20" r="18" fill="var(--crimson)" />
      <circle
        cx="20"
        cy="20"
        r="18"
        fill="none"
        stroke="rgba(255,255,255,0.18)"
        strokeWidth="1"
      />
      <path
        d="M12 20.5 L17.6 26 L28 15"
        fill="none"
        stroke="#FAFAF8"
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function QualifiesChecklist() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [revealedCount, setRevealedCount] = useState(0);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            ITEMS.forEach((_, i) => {
              window.setTimeout(() => {
                setRevealedCount((c) => Math.max(c, i + 1));
              }, i * 110);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section qualifies" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">A Quick Self-Check</span>
          <h2>Think you might have surplus funds?</h2>
          <p>
            Run through this list. If anything sounds like your situation, it's
            worth a conversation.
          </p>
        </div>

        <ul className="qualifies__grid" aria-label="Common qualifying situations">
          {ITEMS.map((text, i) => (
            <li
              key={i}
              className={`qualifies__item ${i < revealedCount ? "is-revealed" : ""}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <span className="qualifies__check">
                <CheckMark />
              </span>
              <span className="qualifies__text">{text}</span>
            </li>
          ))}
        </ul>

        <div className="qualifies__cta">
          <p>
            If any of these sound familiar, there's a good chance a county
            somewhere is holding money that belongs to you. We can check for
            free.
          </p>
          <Link to="/contact" className="btn btn--crimson">
            Find Out in 2 Minutes <ArrowRightIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}
