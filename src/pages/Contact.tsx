import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";
import PulseCapsule from "../components/PulseCapsule";
import {
  PhoneIcon,
  MailIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ClockIcon,
} from "../components/icons";

const STATES = [
  "Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut",
  "Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa",
  "Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan",
  "Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada",
  "New Hampshire","New Jersey","New Mexico","New York","North Carolina",
  "North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island",
  "South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont",
  "Virginia","Washington","West Virginia","Wisconsin","Wyoming",
];

type Errors = Partial<
  Record<"name" | "email" | "phone" | "state" | "message", string>
>;

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [consent, setConsent] = useState(false);
  const [smsConsent, setSmsConsent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const next: Errors = {};

    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const state = String(data.get("state") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name) next.name = "Please enter your name.";
    if (!email) next.email = "We'll need an email to follow up.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "That email doesn't look quite right.";
    if (phone && !/^[\d\s().+\-]{7,}$/.test(phone))
      next.phone = "Phone numbers should be 7 digits or more.";
    if (!state) next.state = "Pick the state where the property was.";
    if (!message || message.length < 10)
      next.message = "Tell us a bit more so we can help.";

    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <section className="page-header">
        <div className="container">
          <div className="page-header__inner fade-up">
            <PulseCapsule>Get in Touch</PulseCapsule>
            <h1>Tell us about the property. We'll do the digging.</h1>
            <p>
              Fill out the form or call us directly. We typically respond
              within one business day.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-split">
            <ScrollReveal className="contact-info">
              <span className="eyebrow">Reach Us Directly</span>
              <h2 style={{ marginTop: "1rem" }}>
                A real person picks up the phone.
              </h2>
              <p>
                We don't outsource the front desk. When you call during
                business hours, you'll talk to someone on the team. After
                hours, leave a message and we'll call back the next morning.
              </p>

              <div className="contact-info__row">
                <span className="contact-info__icon">
                  <PhoneIcon size={18} />
                </span>
                <div>
                  <span className="label">Phone</span>
                  <a href="tel:+18776004919" className="phone-link">
                    (877) 600-4919
                  </a>
                </div>
              </div>

              <div className="contact-info__row">
                <span className="contact-info__icon">
                  <MailIcon size={18} />
                </span>
                <div>
                  <span className="label">Email</span>
                  <a
                    href="mailto:team@statesurplusrecovery.com"
                    className="value"
                  >
                    team@statesurplusrecovery.com
                  </a>
                </div>
              </div>

              <div className="contact-info__row">
                <span className="contact-info__icon">
                  <ClockIcon size={18} />
                </span>
                <div>
                  <span className="label">Hours</span>
                  <span className="value">
                    Monday through Friday, 8 a.m. to 6 p.m. CT
                  </span>
                </div>
              </div>

            </ScrollReveal>

            <ScrollReveal delay={120}>
              <div className="contact-form-card">
                {submitted ? (
                  <div className="form-success">
                    <CheckCircleIcon size={26} />
                    <div>
                      <strong className="form-success__title">
                        Thanks. We've got your message.
                      </strong>
                      <span className="form-success__body">
                        A member of the team will reach out within one
                        business day. If you'd rather not wait, give us a
                        call at{" "}
                        <a href="tel:+18776004919" className="form-success__phone">
                          (877) 600-4919
                        </a>
                        .
                      </span>
                    </div>
                  </div>
                ) : (
                  <form className="contact-form" onSubmit={handleSubmit} noValidate>
                    <div className="contact-form__row">
                      <div className="form-field">
                        <label className="form-field__label" htmlFor="name">
                          Full Name
                        </label>
                        <input id="name" name="name" type="text" placeholder="Jane Doe" autoComplete="name" />
                        {errors.name && <span className="field-error">{errors.name}</span>}
                      </div>
                      <div className="form-field">
                        <label className="form-field__label" htmlFor="email">
                          Email
                        </label>
                        <input id="email" name="email" type="email" placeholder="you@example.com" autoComplete="email" />
                        {errors.email && <span className="field-error">{errors.email}</span>}
                      </div>
                    </div>

                    <div className="contact-form__row">
                      <div className="form-field">
                        <label className="form-field__label" htmlFor="phone">
                          Phone
                        </label>
                        <input id="phone" name="phone" type="tel" placeholder="(555) 555-5555" autoComplete="tel" />
                        {errors.phone && <span className="field-error">{errors.phone}</span>}
                      </div>
                      <div className="form-field">
                        <label className="form-field__label" htmlFor="state">
                          Property State
                        </label>
                        <select id="state" name="state" defaultValue="">
                          <option value="" disabled>Select a state</option>
                          {STATES.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                        {errors.state && <span className="field-error">{errors.state}</span>}
                      </div>
                    </div>

                    <div className="form-field">
                      <label className="form-field__label" htmlFor="address">
                        Property Address (Optional)
                      </label>
                      <input id="address" name="address" type="text" placeholder="Street, City, ZIP" autoComplete="street-address" />
                    </div>

                    <div className="form-field">
                      <label className="form-field__label" htmlFor="message">
                        Tell Us What Happened
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        placeholder="A few sentences is plenty. When was the sale? What kind? Any details that come to mind."
                      />
                      {errors.message && <span className="field-error">{errors.message}</span>}
                    </div>

                    <div className="consent-block">
                      <label className="consent-row">
                        <input
                          type="checkbox"
                          name="consent"
                          checked={consent}
                          onChange={(e) => setConsent(e.target.checked)}
                        />
                        <span className="consent-row__text">
                          I'd like a free review of my situation with no
                          obligation. State Surplus Recovery may contact me
                          regarding this inquiry.
                        </span>
                      </label>

                      <label className="consent-row">
                        <input
                          type="checkbox"
                          name="smsConsent"
                          checked={smsConsent}
                          onChange={(e) => setSmsConsent(e.target.checked)}
                        />
                        <span className="consent-row__text">
                          I agree to receive SMS messages from State Surplus
                          Recovery at the phone number provided. Messages
                          may include case updates, document notifications,
                          appointment reminders, and account alerts. Message
                          frequency varies. Msg &amp; data rates may apply.{" "}
                          <strong>
                            Consent is not a condition of purchase or
                            service.
                          </strong>{" "}
                          Reply STOP to opt out at any time. Reply HELP for
                          assistance. Carriers are not liable for delayed
                          or undelivered messages. View our{" "}
                          <Link to="/privacy-policy">Privacy Policy</Link>{" "}
                          and{" "}
                          <Link to="/terms-conditions">
                            Terms &amp; Conditions
                          </Link>
                          .
                        </span>
                      </label>
                    </div>

                    <button type="submit" className="btn btn--crimson btn--block">
                      Send Message <ArrowRightIcon size={14} />
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <div className="cta-band__inner">
            <div className="cta-band__copy">
              <span className="eyebrow">Talk to Us</span>
              <h2>Prefer to talk it through?</h2>
              <p>
                A 10-minute call usually gives us enough to start checking
                the records.
              </p>
            </div>
            <div className="cta-band__action">
              <span className="cta-band__phone-label">Direct Line</span>
              <a href="tel:+18776004919" className="cta-band__phone">
                (877) 600-4919
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
