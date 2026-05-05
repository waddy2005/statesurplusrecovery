import { useEffect, useRef, useState } from "react";
import ScrollReveal from "./ScrollReveal";

type Stat = {
  prefix?: string;
  target: number;
  suffix?: string;
  decimals?: number;
  label: string;
  caption: string;
  format?: "currency" | "plain";
};

const STATS: Stat[] = [
  {
    prefix: "$",
    target: 8.6,
    suffix: "M+",
    decimals: 1,
    label: "Recovered for clients",
    caption: "Cumulative surplus funds returned to former owners and heirs.",
  },
  {
    target: 640,
    suffix: "+",
    label: "Families helped",
    caption: "Individual claims successfully filed and disbursed since founding.",
  },
  {
    target: 18,
    label: "Active states",
    caption: "Jurisdictions where we currently file claims, and growing.",
  },
];

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

function CountUp({ stat, run }: { stat: Stat; run: boolean }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!run) return;
    const duration = 1600;
    const start = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const elapsed = now - start;
      const t = Math.min(1, elapsed / duration);
      setValue(stat.target * easeOutCubic(t));
      if (t < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, stat.target]);

  const display = stat.decimals
    ? value.toFixed(stat.decimals)
    : Math.round(value).toLocaleString("en-US");

  return (
    <>
      {stat.prefix}
      {display}
      {stat.suffix}
    </>
  );
}

export default function RecoveriesSnapshot() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [run, setRun] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRun(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.35 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section snapshot" ref={sectionRef}>
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="eyebrow">By the Numbers</span>
            <h2>Real money returned to real owners.</h2>
            <p>
              Every figure here represents a specific filing, a specific
              county, and a specific check that landed in someone's account.
            </p>
          </div>
        </ScrollReveal>

        <div className="snapshot__grid">
          {STATS.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 110}>
              <div className="snapshot-stat">
                <div className="snapshot-stat__value" aria-live="polite">
                  <CountUp stat={stat} run={run} />
                </div>
                <div className="snapshot-stat__label">{stat.label}</div>
                <p className="snapshot-stat__caption">{stat.caption}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
