import ScrollReveal from "../components/ScrollReveal";
import PulseCapsule from "../components/PulseCapsule";

const SECTIONS = [
  { id: "info-we-collect", title: "Information We Collect" },
  { id: "how-we-use", title: "How We Use Your Information" },
  { id: "sms-privacy", title: "SMS and Text Message Privacy" },
  { id: "sharing", title: "How We Share Information" },
  { id: "cookies", title: "Cookies and Tracking" },
  { id: "security", title: "Data Security" },
  { id: "your-rights", title: "Your Rights and Choices" },
  { id: "retention", title: "Data Retention" },
  { id: "children", title: "Children's Privacy" },
  { id: "contact", title: "Contact Us" },
];

export default function PrivacyPolicy() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <div className="page-header__inner fade-up">
            <PulseCapsule>Privacy Policy</PulseCapsule>
            <h1>How we handle your information.</h1>
            <p>
              Plain language. No fine-print games. Here's exactly what we
              collect, why we collect it, and what we do with it.
            </p>
          </div>
        </div>
      </section>


      <section className="section legal-page">
        <div className="container">
          <ScrollReveal>
            <div className="legal-content">
              <p className="legal-meta">Effective Date: January 1, 2026</p>

              <div className="legal-toc">
                <h3>What's in this policy</h3>
                <ol>
                  {SECTIONS.map((s) => (
                    <li key={s.id}>
                      <a href={`#${s.id}`}>{s.title}</a>
                    </li>
                  ))}
                </ol>
              </div>

              <section className="legal-section" id="info-we-collect">
                <h2><span className="num">01</span> Information We Collect</h2>
                <p>
                  We only collect what we need to help you recover surplus
                  funds. That usually means your name, contact details,
                  property information, and any documents that prove your
                  connection to the property.
                </p>
                <h3>Information you give us directly</h3>
                <ul>
                  <li>Name, email address, phone number, and mailing address</li>
                  <li>Property address and details about the sale</li>
                  <li>Identifying documents you upload, like ID copies or deeds</li>
                  <li>Any messages you send us through the form, by email, or by phone</li>
                </ul>
                <h3>Information we collect automatically</h3>
                <ul>
                  <li>Basic browser and device data (browser type, operating system, IP address)</li>
                  <li>Pages you viewed on our site and the date you visited</li>
                  <li>Referring source if you arrived from another website</li>
                </ul>
              </section>

              <section className="legal-section" id="how-we-use">
                <h2><span className="num">02</span> How We Use Your Information</h2>
                <p>
                  We use your information to do the work you've asked us to
                  do. That's it. Specifically:
                </p>
                <ul>
                  <li>Verify whether surplus funds exist for your property</li>
                  <li>Communicate with you about your case status</li>
                  <li>Prepare and file claim documents on your behalf</li>
                  <li>Coordinate with attorneys, courts, and county offices when required</li>
                  <li>Send you required legal disclosures and case updates</li>
                  <li>Improve our website and respond to support requests</li>
                </ul>
                <p>
                  We don't sell your personal information. We don't rent it.
                  We don't use it to market unrelated products.
                </p>
              </section>

              <section className="legal-section" id="sms-privacy">
                <h2><span className="num">03</span> SMS and Text Message Privacy</h2>
                <div className="legal-highlight">
                  <h3>Important SMS Disclosures</h3>
                  <p>
                    <strong>
                      We do not sell, share, rent, or otherwise distribute
                      your SMS opt-in data or consent information to any
                      third parties.
                    </strong>{" "}
                    Your phone number and SMS consent stay with us, full
                    stop.
                  </p>
                  <p>
                    <strong>
                      Consent to receive SMS messages is not a condition of
                      purchasing our services.
                    </strong>{" "}
                    You can hire us, work with us, and recover funds without
                    ever signing up for text messages.
                  </p>
                </div>

                <p>
                  If you opt in to SMS messages from us, we'll send you
                  case-related texts only. That includes case status
                  updates, document notifications, appointment reminders,
                  and account alerts. Message frequency varies by the stage
                  of your claim. Message and data rates may apply depending
                  on your carrier.
                </p>
                <p>
                  You can opt out at any time by replying STOP to any
                  message we send. Reply HELP to any message for assistance,
                  or call us at (877) 600-4919. Your carrier is not liable
                  for delayed or undelivered messages.
                </p>
                <p>
                  We collect your mobile number only when you provide it
                  through one of our forms or directly to a team member. We
                  store SMS opt-in records the way our SMS provider requires
                  for compliance, separate from any marketing systems.
                </p>
              </section>

              <section className="legal-section" id="sharing">
                <h2><span className="num">04</span> How We Share Information</h2>
                <p>
                  Recovering surplus funds means working with county offices,
                  attorneys, and sometimes the court system. We share your
                  information only in these specific contexts:
                </p>
                <ul>
                  <li>
                    With county clerks, courts, and trustees, when filing
                    claims requires it
                  </li>
                  <li>
                    With licensed attorneys we've engaged to handle parts
                    of your claim
                  </li>
                  <li>
                    With service providers who run our email, hosting, and
                    document storage, under written confidentiality
                  </li>
                  <li>
                    When law requires it, like a valid subpoena or court
                    order
                  </li>
                </ul>
                <p>
                  We never share your data with advertising networks, data
                  brokers, or unrelated third parties.
                </p>
              </section>

              <section className="legal-section" id="cookies">
                <h2><span className="num">05</span> Cookies and Tracking</h2>
                <p>
                  Our site uses minimal cookies. We use a small set of
                  technical cookies to keep the site working and to count
                  page views so we can see which content is most useful. We
                  don't use cross-site advertising trackers.
                </p>
                <p>
                  You can disable cookies in your browser settings. Some
                  parts of the site may not work as smoothly if you do, but
                  the core functions will still work.
                </p>
              </section>

              <section className="legal-section" id="security">
                <h2><span className="num">06</span> Data Security</h2>
                <p>
                  We take reasonable steps to protect your information.
                  Documents you send us are stored on encrypted servers.
                  Access to client records is limited to team members who
                  need it to do their job. We review our security practices
                  on a regular basis.
                </p>
                <p>
                  No system is 100% secure. If we ever discover a breach
                  affecting your personal information, we'll notify you in
                  line with applicable law.
                </p>
              </section>

              <section className="legal-section" id="your-rights">
                <h2><span className="num">07</span> Your Rights and Choices</h2>
                <p>You can ask us to:</p>
                <ul>
                  <li>Show you what personal information we have on file for you</li>
                  <li>Correct anything that's wrong</li>
                  <li>Delete your information when we're no longer required to keep it</li>
                  <li>Stop sending you marketing or SMS messages</li>
                </ul>
                <p>
                  Email us at team@statesurplusrecovery.com or call (877)
                  600-4919 to make a request. We'll confirm your identity
                  before acting on the request, and we'll get back to you
                  within a reasonable time.
                </p>
              </section>

              <section className="legal-section" id="retention">
                <h2><span className="num">08</span> Data Retention</h2>
                <p>
                  We hold onto case records for as long as we need to do
                  the work and meet our legal obligations. Most states
                  require law and recovery firms to keep client files for
                  several years after the matter closes. Once that retention
                  window ends, we securely destroy or de-identify the
                  records.
                </p>
              </section>

              <section className="legal-section" id="children">
                <h2><span className="num">09</span> Children's Privacy</h2>
                <p>
                  Our services are for adults. We don't knowingly collect
                  information from anyone under 18. If you think a minor has
                  given us information, contact us and we'll delete it.
                </p>
              </section>

              <section className="legal-section" id="contact">
                <h2><span className="num">10</span> Contact Us</h2>
                <p>
                  Questions about this policy? Reach out.
                </p>
                <ul>
                  <li>Email: team@statesurplusrecovery.com</li>
                  <li>Phone: (877) 600-4919</li>
                  <li>Attn: Lonny Mitchell, Principal</li>
                </ul>
                <p>
                  We may update this policy as our practices change. When
                  we do, we'll post the updated date at the top of this
                  page.
                </p>
              </section>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
