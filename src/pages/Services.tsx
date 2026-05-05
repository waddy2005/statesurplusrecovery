import { Link } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";
import PulseCapsule from "../components/PulseCapsule";
import {
  HouseIcon,
  GavelIcon,
  HeirsIcon,
  MapIcon,
  CheckIcon,
  PhoneIcon,
  ArrowRightIcon,
} from "../components/icons";

const SERVICES = [
  {
    icon: <HouseIcon size={22} />,
    title: "Foreclosure Surplus Recovery",
    body: "When a foreclosure auction brings in more than the unpaid mortgage balance plus fees, the difference belongs to the former owner. Most homeowners are never told. We find the records, identify the rightful claimant, and file what's needed to release the funds.",
    bullets: [
      "Bank-initiated and judicial foreclosures",
      "Sheriff sale and trustee sale overages",
      "Bid-up auction surpluses",
    ],
  },
  {
    icon: <GavelIcon size={22} />,
    title: "Tax Sale Surplus Recovery",
    body: "Tax sales work like foreclosures. The county sells the property to recover what's owed. If the sale brings in more than the back taxes and costs, the leftover is yours. Counties don't usually go out of their way to find you. We do.",
    bullets: [
      "Tax deed sale overages",
      "Tax lien certificate redemption surpluses",
      "Multi-year claim tracking",
    ],
  },
  {
    icon: <HeirsIcon size={22} />,
    title: "Heir Recovery",
    body: "If the original owner has passed away, the surplus passes to their legal heirs. We help families locate the funds, gather the documents the court will ask for, and file the claim through probate or the equivalent process in your state.",
    bullets: [
      "Heir identification and confirmation",
      "Probate-coordinated filings",
      "Multi-heir claims and splits",
    ],
  },
  {
    icon: <MapIcon size={22} />,
    title: "Multi-State Coverage",
    body: "Every state runs its surplus funds process differently. Some states require a court order. Others are clerk-handled. We've worked across enough jurisdictions to know which forms each county uses and what each one tends to push back on.",
    bullets: [
      "State-specific filing expertise",
      "Cross-jurisdictional claim handling",
      "Coordination with local counsel where required",
    ],
  },
];

export default function Services() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <div className="page-header__inner fade-up">
            <PulseCapsule>Services</PulseCapsule>
            <h1>What we do.</h1>
            <p>
              We recover four kinds of money that counties tend to hold
              onto after property sales. If your situation falls into one
              of these, we can probably help.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="services-grid">
            {SERVICES.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 100}>
                <article className="service-card">
                  <span className="service-card__icon">{s.icon}</span>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                  <ul>
                    {s.bullets.map((b) => (
                      <li key={b}>
                        <CheckIcon size={14} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft section--tight">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="eyebrow">A Note on Fees</span>
              <h2 style={{ fontSize: "1.85rem" }}>
                You don't pay until the money's in your account.
              </h2>
              <p>
                Our fee is a fixed percentage of what we recover, agreed to
                in writing before we file anything. If the claim doesn't
                go through, you owe us nothing. No retainer, no hourly rate,
                no hidden costs.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <ScrollReveal>
            <div className="cta-band__inner">
              <div className="cta-band__copy">
                <span className="eyebrow">Talk to Us</span>
                <h2>Not sure if you qualify? Call us.</h2>
                <p>It costs nothing to find out.</p>
              </div>
              <div className="cta-band__action">
                <span className="cta-band__phone-label">Direct Line</span>
                <a href="tel:+18776004919" className="cta-band__phone">
                  (877) 600-4919
                </a>
                <Link to="/contact" className="cta-band__sublink">
                  or send a message <ArrowRightIcon size={14} />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
