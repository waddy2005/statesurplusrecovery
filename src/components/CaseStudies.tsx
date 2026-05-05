import ScrollReveal from "./ScrollReveal";

type CaseStudy = {
  jurisdiction: string;
  amount: string;
  type: string;
  days: number;
  story: string;
};

const CASES: CaseStudy[] = [
  {
    jurisdiction: "Cuyahoga County, Ohio",
    amount: "$43,200",
    type: "Foreclosure Surplus",
    days: 118,
    story:
      "After a foreclosure auction sold for far more than the unpaid mortgage, the surplus sat in the county clerk's office for two years. We located the original owner who had moved out of state, prepared the affidavit, and walked the funds through the court.",
  },
  {
    jurisdiction: "Harris County, Texas",
    amount: "$76,400",
    type: "Tax Sale Overage",
    days: 156,
    story:
      "A tax sale yielded over twice what was owed in delinquent taxes. The original owner had passed away two years earlier. We identified the heirs across three states, coordinated with probate counsel, and recovered the overage in full.",
  },
  {
    jurisdiction: "Hillsborough County, Florida",
    amount: "$19,800",
    type: "Heir Recovery",
    days: 97,
    story:
      "Two siblings learned about the surplus only after we reached out. The Florida heir affidavit process required documentation tied back to the original deed. We pulled the records, prepared the filing, and split the funds equally between them.",
  },
];

export default function CaseStudies() {
  return (
    <section className="section case-studies">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="eyebrow">Recent Recoveries</span>
            <h2>What it actually looks like in practice.</h2>
            <p>
              Three claims from the past year, with the names removed but
              everything else intact. Same kind of file we'd open for you.
            </p>
          </div>
        </ScrollReveal>

        <div className="case-studies__grid">
          {CASES.map((c, i) => (
            <ScrollReveal key={c.jurisdiction} delay={i * 110}>
              <article className="case-card">
                <div className="case-card__top">
                  <span className="case-card__type">{c.type}</span>
                  <span className="case-card__juris">{c.jurisdiction}</span>
                </div>
                <div className="case-card__amount">{c.amount}</div>
                <p className="case-card__story">{c.story}</p>
                <div className="case-card__meta">
                  <span className="case-card__days">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    Recovered in {c.days} days
                  </span>
                  <span className="case-card__status">Disbursed</span>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <p className="case-studies__footnote">
            Identifying details have been removed to protect client privacy.
            County, sale type, amount, and timeline are real.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
