import { Link } from "react-router-dom";
import {
  ArrowRightIcon,
  SearchIcon,
  FileIcon,
  DollarIcon,
  ShieldIcon,
  ClockIcon,
  EyeIcon,
  ChatIcon,
  PhoneIcon,
} from "../components/icons";
import ScrollReveal from "../components/ScrollReveal";
import PulseCapsule from "../components/PulseCapsule";
import QualifiesChecklist from "../components/QualifiesChecklist";
import SurplusCalculator from "../components/SurplusCalculator";
import Testimonials from "../components/Testimonials";
import RecoveriesSnapshot from "../components/RecoveriesSnapshot";
import CaseStudies from "../components/CaseStudies";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero__inner">
            <div className="fade-up">
              <PulseCapsule>Surplus Funds Recovery</PulseCapsule>
            </div>

            <h1 className="hero__title fade-up fade-up--d1">
              You may be owed money after
              <br />
              your <em>property sale.</em>
            </h1>

            <p className="hero__subtitle fade-up fade-up--d2">
              When a home is sold at a foreclosure auction or tax sale for
              more than what's owed, the leftover money belongs to the
              former owner. Counties hold onto it. Most people never find
              out it's there. We do the work to get it back.
            </p>

            <div className="hero__actions fade-up fade-up--d3">
              <Link to="/contact" className="btn btn--crimson">
                Check If You Have Funds <ArrowRightIcon size={14} />
              </Link>
              <Link to="/how-it-works" className="btn btn--outline-light">
                How It Works
              </Link>
            </div>

            <div className="hero__stats fade-up fade-up--d4">
              <div className="hero-stat">
                <span className="hero-stat__value">$0</span>
                <span className="hero-stat__label">Upfront Cost</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat__value">100%</span>
                <span className="hero-stat__label">Contingency</span>
              </div>
              <div className="hero-stat">
                <a
                  href="tel:+18776004919"
                  className="hero-stat__value hero-stat__value--phone"
                >
                  (877) 600-4919
                </a>
                <span className="hero-stat__label">Call Anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <QualifiesChecklist />

      <section className="section section--soft">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="eyebrow">A Simple Process</span>
              <h2>Three steps. No paperwork on your end.</h2>
              <p>
                We handle the research, the filings, and the back-and-forth
                with the county. You answer a few questions, sign when
                needed, and wait for the check.
              </p>
            </div>
          </ScrollReveal>

          <div className="steps-grid">
            <ScrollReveal delay={0}>
              <article className="step-card">
                <span className="step-card__icon">
                  <SearchIcon />
                </span>
                <span className="step-card__step">Step 01</span>
                <h3>We Research the Records</h3>
                <p>
                  We monitor foreclosure and tax sale records across multiple
                  states to find homes that sold for more than was owed. If
                  your name comes up, we reach out.
                </p>
              </article>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <article className="step-card">
                <span className="step-card__icon">
                  <FileIcon />
                </span>
                <span className="step-card__step">Step 02</span>
                <h3>We Verify Your Claim</h3>
                <p>
                  We confirm the sale, pull the supporting documents, and
                  walk you through what we found. You'll see the numbers
                  before any paperwork is signed.
                </p>
              </article>
            </ScrollReveal>

            <ScrollReveal delay={240}>
              <article className="step-card">
                <span className="step-card__icon">
                  <DollarIcon />
                </span>
                <span className="step-card__step">Step 03</span>
                <h3>You Receive Your Funds</h3>
                <p>
                  We file with the county or court, follow it through
                  approval, and the money comes to you. Most claims close
                  in 90 to 180 days.
                </p>
              </article>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SurplusCalculator />

      <RecoveriesSnapshot />

      <CaseStudies />

      <Testimonials />

      <section className="section why">
        <div className="container">
          <ScrollReveal>
            <div className="why__intro">
              <span className="eyebrow">Why Work With Us</span>
              <h2>We do the legwork. You keep the money.</h2>
              <p>
                Recovering surplus funds isn't complicated, but it is
                tedious. Every county has its own forms, its own filing
                windows, and its own quirks. We've spent years learning
                them so you don't have to.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="why__features">
              <div className="why__feature">
                <span className="why__feature-icon">
                  <ShieldIcon size={20} />
                </span>
                <div>
                  <h4>Nothing out of pocket</h4>
                  <p>
                    You don't pay us anything to start. We only collect a
                    fee when the funds land in your account, and the
                    percentage is agreed to in writing before we begin.
                  </p>
                </div>
              </div>

              <div className="why__feature">
                <span className="why__feature-icon">
                  <EyeIcon size={20} />
                </span>
                <div>
                  <h4>You see everything</h4>
                  <p>
                    We send you the records we pulled, the amount being
                    held, and a copy of every filing. If something looks
                    wrong, we stop and explain it.
                  </p>
                </div>
              </div>

              <div className="why__feature">
                <span className="why__feature-icon">
                  <ClockIcon size={20} />
                </span>
                <div>
                  <h4>We follow it through</h4>
                  <p>
                    County processing windows can drag on. We stay on it,
                    respond to requests as they come in, and keep you
                    posted on where things stand.
                  </p>
                </div>
              </div>

              <div className="why__feature">
                <span className="why__feature-icon">
                  <ChatIcon size={20} />
                </span>
                <div>
                  <h4>Real conversations</h4>
                  <p>
                    A person picks up when you call. You'll get a straight
                    answer to a straight question. That's the whole policy.
                  </p>
                </div>
              </div>
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
                <h2>It costs nothing to find out.</h2>
                <p>
                  Tell us where the property was and roughly when it sold.
                  We'll check the records and call you back with what we
                  see. No pressure to sign anything.
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
