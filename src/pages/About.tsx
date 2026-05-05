import { Link } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";
import PulseCapsule from "../components/PulseCapsule";
import {
  EyeIcon,
  HandCoinIcon,
  ClockIcon,
  ChatIcon,
  PhoneIcon,
  ArrowRightIcon,
} from "../components/icons";

export default function About() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <div className="page-header__inner fade-up">
            <PulseCapsule>About Us</PulseCapsule>
            <h1>
              A small team that knows the county records better than the
              counties do.
            </h1>
            <p>
              We exist because most people lose their home and never find
              out the county is holding onto money that belongs to them.
              We close that gap.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container container-narrow">
          <ScrollReveal>
            <div className="about-story">
              <span className="eyebrow">Why we started this</span>
              <h2 style={{ margin: "1rem 0 1.4rem" }}>
                The money is real. The notice rarely is.
              </h2>
              <p>
                After a foreclosure or a tax sale, properties often sell
                for more than what's owed on them. The mortgage gets paid.
                The county gets its taxes. Whatever's left is supposed to
                go back to the former owner. In practice, it rarely does.
                The notice goes to an old address. The form is buried in a
                packet of legal paperwork. The deadline passes, and the
                money sits in a county account.
              </p>
              <p>
                State Surplus Recovery was founded after watching this
                happen one too many times. The work itself isn't
                glamorous. It's records research, public-records requests,
                county clerk phone calls, and a lot of paperwork. The
                result is real money going back to families who thought
                they'd walked away with nothing.
              </p>
              <p>
                We're not a tech startup. We're not a hedge fund buying
                claims at a discount. We're a small team that does this
                work the slow, careful way, because the people we're
                helping are usually already going through the worst
                stretch of their financial lives. They deserve to be
                treated like adults, told the truth about what we found,
                and paid quickly when the money comes through.
              </p>
            </div>
          </ScrollReveal>

          <div className="about-bottom-grid">
            <ScrollReveal>
              <h3>Leadership</h3>
              <p>
                Lonny Mitchell leads the firm. Years of working through
                county clerks, probate courts, and sheriff sales gave him a
                feel for where these claims get stuck and how to push them
                through. He takes calls personally when he can.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={120}>
              <h3>Coverage</h3>
              <p>
                We work across multiple states and the list keeps growing.
                Every state runs its surplus funds process differently, so
                we pick up new jurisdictions only after we know the rules
                cold. If we don't cover your state yet, we'll tell you.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="eyebrow">What We Stand For</span>
              <h2>Four things we don't compromise on.</h2>
            </div>
          </ScrollReveal>

          <div className="about-values">
            <ScrollReveal delay={0}>
              <div className="value-card">
                <span className="value-card__icon"><EyeIcon size={20} /></span>
                <h4>Transparency</h4>
                <p>
                  You see the records. You see the amount. You see what we
                  get paid. Nothing hidden in the fine print.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="value-card">
                <span className="value-card__icon"><HandCoinIcon size={20} /></span>
                <h4>No Upfront Cost</h4>
                <p>
                  You don't pay us a dollar to start. Our fee comes out of
                  the recovery, only after the county releases the funds.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="value-card">
                <span className="value-card__icon"><ClockIcon size={20} /></span>
                <h4>Persistence</h4>
                <p>
                  Counties move at county speed. We follow up. We resubmit
                  when needed. We don't let claims fall through the cracks.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div className="value-card">
                <span className="value-card__icon"><ChatIcon size={20} /></span>
                <h4>Real Communication</h4>
                <p>
                  When you call, a person picks up. When you ask a question,
                  you get a straight answer. That's the whole policy.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <ScrollReveal>
            <div className="cta-band__inner">
              <div className="cta-band__copy">
                <span className="eyebrow">Talk to Us</span>
                <h2>Ready to find out if there's money in your name?</h2>
                <p>
                  One call. A few questions. We'll have an answer for you
                  within a business day.
                </p>
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
