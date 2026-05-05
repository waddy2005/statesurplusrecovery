import { Link } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";
import PulseCapsule from "../components/PulseCapsule";
import { ShieldIcon, PhoneIcon, ArrowRightIcon } from "../components/icons";

const EVIDENCE: { title: string; text: string }[] = [
  {
    title: "We Never Charge Upfront",
    text: "You don't pay us a dollar until your money is recovered and in your hands. If we don't recover anything, you owe us nothing. That's in writing in every agreement we sign.",
  },
  {
    title: "We're a Registered Business",
    text: "State Surplus Recovery is a legally registered company. You can verify our standing through your state's business registry. We're happy to provide our registration details on request.",
  },
  {
    title: "We Work With Licensed Attorneys",
    text: "Every claim we file goes through proper legal channels. In states that require attorney involvement, we work with licensed attorneys who are barred in that jurisdiction.",
  },
  {
    title: "You Can Check With Your County",
    text: "Before you work with us or anyone else, call your county clerk's office. Ask if there are surplus funds from your property sale. They'll confirm whether funds exist. Then you can decide who you want helping you claim them.",
  },
  {
    title: "We Explain Everything Before You Sign",
    text: "No fine print surprises. We walk you through our agreement, our fee structure, the timeline, and what to expect at every step. If something doesn't make sense, we'll explain it again.",
  },
];

export default function VerifyUs() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <div className="page-header__inner fade-up">
            <PulseCapsule>Verify Us</PulseCapsule>
            <h1>We Know What You're Thinking.</h1>
            <p>
              You probably got a letter, looked us up, and now you're
              wondering if this is real. Good. That's exactly what a smart
              person does.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container container-narrow">
          <ScrollReveal>
            <div className="verify-block">
              <span className="accent-rule" />
              <h2>Yes, the money is real.</h2>
              <p>
                Surplus funds are not a trick. When a property sells at a
                foreclosure or tax sale for more than the debt owed, the
                extra money has to go somewhere. State laws require the
                county to hold it for the former owner. That part is public
                record. You can call your county clerk and ask. The problem
                is that most counties don't go out of their way to notify
                you. That's where we come in.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section section--ice section--tight">
        <div className="container container-narrow">
          <ScrollReveal>
            <div className="verify-block">
              <span className="accent-rule" />
              <h2>Yes, some companies are shady.</h2>
              <p>
                We're not going to pretend this industry has a spotless
                reputation. Some operators send misleading letters, charge
                fees upfront, or disappear after you sign paperwork. We
                know that, and honestly, it makes our job harder. That's
                part of why we built this page.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="eyebrow">How to Verify Us</span>
              <h2>Five things you can check before you trust us with anything.</h2>
              <p>
                Take your time. Ask hard questions. The right answer to
                all of this should be easy to confirm.
              </p>
            </div>
          </ScrollReveal>

          <div className="evidence-grid">
            {EVIDENCE.map((row, i) => (
              <ScrollReveal key={row.title} delay={i * 90}>
                <article className="evidence-row">
                  <div className="evidence-row__title">
                    <span className="evidence-row__num">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3>{row.title}</h3>
                  </div>
                  <div className="evidence-row__text">
                    <p>{row.text}</p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft section--tight">
        <div className="container container-narrow">
          <ScrollReveal>
            <div className="verify-closing">
              <span className="verify-closing__icon">
                <ShieldIcon size={26} />
              </span>
              <p>
                Still not sure? Call us at{" "}
                <a href="tel:+18776004919" className="verify-closing__phone">
                  (877) 600-4919
                </a>
                . Ask us anything. We'd rather spend 20 minutes on the
                phone answering your questions than have you walk away
                from money that belongs to you.
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
                <h2>Your money. Your decision.</h2>
                <p>Call when you're ready. No pressure, no script, no upsell.</p>
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
