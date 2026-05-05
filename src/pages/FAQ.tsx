import { Link } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";
import PulseCapsule from "../components/PulseCapsule";
import Accordion, { AccordionEntry } from "../components/Accordion";
import { PhoneIcon, ArrowRightIcon } from "../components/icons";

const FAQS: AccordionEntry[] = [
  {
    q: "What are surplus funds?",
    a: "When a property is sold at a foreclosure or tax sale, the buyer often pays more than what's owed on the home. After the lender or county takes its share, the leftover money is called surplus funds. By law, that money belongs to the former owner. The catch is that counties don't always make it easy to claim.",
  },
  {
    q: "How do I know if I have surplus funds?",
    a: "If you lost a property to foreclosure or a tax sale in the last few years, there's a real chance funds are sitting with the county. The amount depends on what the property sold for compared to what was owed. Give us a call and we'll check the records for free.",
  },
  {
    q: "Is this a scam?",
    a: "It's a fair question. There are bad actors in this space, and we understand the skepticism. We're a registered, licensed, and bonded recovery firm. We don't ask for money up front. Every fee is in writing before any paperwork gets filed. If anything we say doesn't add up, walk away.",
  },
  {
    q: "Do I have to pay anything upfront?",
    a: "No. You pay nothing to get started. Our fee is a percentage of what we recover, taken from the funds when they arrive. If the claim falls through, you don't owe us a dollar.",
  },
  {
    q: "How long does the process take?",
    a: "The process typically takes anywhere from 90 to 180 days depending on the state and county regulations. Some counties move faster. A few require court hearings that push timelines out. We'll give you a realistic window during your first call based on the specific county and type of sale.",
  },
  {
    q: "What states do you cover?",
    a: "We work across multiple states and the list keeps growing. The rules and forms vary, so we focus on jurisdictions where we know the process inside and out. When you call, just tell us where the property was and we'll let you know whether it's one we handle.",
  },
  {
    q: "What if the original owner passed away?",
    a: "The surplus funds transfer to the legal heirs. We help families locate the funds, identify all eligible heirs, and work through probate or the equivalent process in that state. It takes a bit longer than a standard claim, but the funds are still recoverable.",
  },
  {
    q: "How much do you charge?",
    a: "Our fee is a fixed percentage of the recovered amount, agreed in writing before we begin. Rates vary slightly based on the complexity of the claim, the state, and whether heir recovery is involved. Whatever the number is, you'll see it before signing anything.",
  },
  {
    q: "What documents do I need?",
    a: "Usually a government-issued ID and something that ties you to the property, like a copy of the deed, an old mortgage statement, or a tax bill. For heir claims, we'll also need a death certificate and proof of relationship. We'll tell you exactly what's needed once we know the specifics.",
  },
  {
    q: "Can I do this myself?",
    a: "Yes, in most states you can. Some people do. The reason most don't is that the paperwork is dense, the deadlines are easy to miss, and counties tend to reject claims for small filing errors. If you'd rather handle it yourself, we'll point you to the right office. If you'd rather have someone who does this every day take care of it, that's why we're here.",
  },
];

export default function FAQ() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <div className="page-header__inner fade-up">
            <PulseCapsule>Frequently Asked</PulseCapsule>
            <h1>Questions we hear all the time, answered straight.</h1>
            <p>
              If something on this list isn't covered, give us a call. We'd
              rather spend ten minutes on the phone than have you wondering.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="faq-layout">
            <ScrollReveal className="faq-layout__intro">
              <span className="accent-rule" />
              <h2>Still have questions?</h2>
              <p>
                We're a small team. When you call, you'll talk to someone
                who can actually answer. No phone tree. No script.
              </p>
              <a href="tel:+18776004919" className="phone-link" style={{ fontSize: "1.4rem" }}>
                <PhoneIcon size={20} /> (877) 600-4919
              </a>
              <div style={{ marginTop: "1.4rem" }}>
                <Link to="/contact" className="btn btn--navy">
                  Send a Message <ArrowRightIcon size={14} />
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <Accordion items={FAQS} />
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
                <h2>Ready to talk it through?</h2>
                <p>
                  A 10-minute call usually gives us enough to start
                  checking the records.
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
