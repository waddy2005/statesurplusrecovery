import ScrollReveal from "../components/ScrollReveal";
import PulseCapsule from "../components/PulseCapsule";

const SECTIONS = [
  { id: "agreement", title: "Agreement to These Terms" },
  { id: "services", title: "Description of Services" },
  { id: "fees", title: "Fees and Payment" },
  { id: "client-duties", title: "Client Responsibilities" },
  { id: "sms", title: "SMS Terms & Conditions" },
  { id: "no-guarantee", title: "No Guarantee of Recovery" },
  { id: "ip", title: "Intellectual Property" },
  { id: "liability", title: "Limitation of Liability" },
  { id: "termination", title: "Termination" },
  { id: "governing-law", title: "Governing Law and Disputes" },
];

export default function TermsConditions() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <div className="page-header__inner fade-up">
            <PulseCapsule>Terms &amp; Conditions</PulseCapsule>
            <h1>The rules of the road, plainly written.</h1>
            <p>
              These terms cover how we work with you, what you can expect
              from us, and what we expect from you. Read them. Ask questions
              if anything is unclear.
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
                <h3>What's in these terms</h3>
                <ol>
                  {SECTIONS.map((s) => (
                    <li key={s.id}>
                      <a href={`#${s.id}`}>{s.title}</a>
                    </li>
                  ))}
                </ol>
              </div>

              <section className="legal-section" id="agreement">
                <h2><span className="num">01</span> Agreement to These Terms</h2>
                <p>
                  When you submit a form, send us documents, or sign a
                  recovery agreement with us, you agree to these Terms and
                  Conditions. If anything in here doesn't sit right with
                  you, call us before you sign. We're happy to talk it
                  through.
                </p>
                <p>
                  These Terms apply alongside any separate written
                  recovery agreement we sign with you. If a specific term
                  in your recovery agreement conflicts with these Terms,
                  the recovery agreement controls.
                </p>
              </section>

              <section className="legal-section" id="services">
                <h2><span className="num">02</span> Description of Services</h2>
                <p>
                  State Surplus Recovery helps homeowners and their heirs
                  recover surplus funds left over after foreclosure and
                  tax sale auctions. Our work includes records research,
                  owner verification, document preparation, claim filing,
                  and follow-through with the relevant county or court.
                </p>
                <p>
                  Where a state requires attorney involvement, we engage
                  licensed attorneys barred in that jurisdiction to handle
                  the legal portions of the work.
                </p>
              </section>

              <section className="legal-section" id="fees">
                <h2><span className="num">03</span> Fees and Payment</h2>
                <p>
                  We work on a contingency basis. You pay nothing upfront.
                  Our fee is a fixed percentage of the surplus funds we
                  recover for you, agreed to in writing in your recovery
                  agreement before any work begins.
                </p>
                <p>
                  If we don't recover funds, you don't owe us a fee. We
                  may, in limited cases, recover specific out-of-pocket
                  costs (such as filing fees or court costs) if those are
                  separately disclosed and agreed to in writing in your
                  recovery agreement.
                </p>
                <p>
                  Fees are deducted from the recovered amount when the
                  county or court releases the funds. The balance is paid
                  directly to you.
                </p>
              </section>

              <section className="legal-section" id="client-duties">
                <h2><span className="num">04</span> Client Responsibilities</h2>
                <p>
                  We do most of the work, but a few things have to come
                  from you:
                </p>
                <ul>
                  <li>
                    Provide accurate information about the property and
                    sale
                  </li>
                  <li>
                    Send identifying documents we need to file the claim
                  </li>
                  <li>
                    Respond to our requests in a reasonable timeframe so
                    deadlines aren't missed
                  </li>
                  <li>
                    Tell us if your contact details change
                  </li>
                  <li>
                    Disclose if anyone else has filed or is trying to
                    file a claim on the same funds
                  </li>
                </ul>
              </section>

              <section className="legal-section" id="sms">
                <h2><span className="num">05</span> SMS Terms &amp; Conditions</h2>
                <div className="legal-highlight">
                  <h3>SMS Program Details</h3>
                  <p>
                    <strong>Opt-In:</strong> You opt into SMS messages by
                    checking the SMS consent box on our contact form, by
                    texting us first, or by giving verbal consent over
                    the phone that we then confirm in writing.
                  </p>
                  <p>
                    <strong>Message Types:</strong> Case status updates,
                    document notifications (e.g., "We need a signature"),
                    appointment reminders, and account alerts related to
                    your claim.
                  </p>
                  <p>
                    <strong>Frequency:</strong> Message frequency varies
                    based on the stage of your claim. You may receive
                    several messages in a busy week, or none for weeks
                    when your file is in queue with the county.
                  </p>
                  <p>
                    <strong>Cost:</strong> Standard message and data
                    rates may apply, depending on your wireless carrier
                    and plan.
                  </p>
                  <p>
                    <strong>Opt-Out:</strong> Reply STOP to any message
                    to opt out. You can also call us at (877) 600-4919 or
                    email team@statesurplusrecovery.com to remove your
                    number.
                  </p>
                  <p>
                    <strong>Help:</strong> Reply HELP for assistance, or
                    call (877) 600-4919.
                  </p>
                  <p>
                    <strong>Consent Not Required:</strong> SMS consent is
                    not a condition of purchase or service. You can hire
                    us and have your claim filed without ever opting into
                    text messages.
                  </p>
                  <p>
                    <strong>Carrier Disclaimer:</strong> Carriers are not
                    liable for delayed or undelivered messages.
                  </p>
                  <p>
                    <strong>Privacy:</strong> We do not sell, share, or
                    distribute your SMS opt-in data or consent
                    information to any third parties. Your number stays
                    with us.
                  </p>
                </div>
              </section>

              <section className="legal-section" id="no-guarantee">
                <h2><span className="num">06</span> No Guarantee of Recovery</h2>
                <p>
                  We don't promise a specific outcome. Surplus funds
                  cases depend on county records, court rulings, claim
                  windows, and the rights of competing claimants. We work
                  hard on every file, but we cannot guarantee that funds
                  exist for any specific property, or that a filed claim
                  will be approved.
                </p>
                <p>
                  Nothing on our website or in our communications is
                  legal advice. If you need legal counsel for a specific
                  matter, hire a licensed attorney in your state.
                </p>
              </section>

              <section className="legal-section" id="ip">
                <h2><span className="num">07</span> Intellectual Property</h2>
                <p>
                  The content on this website, including text, layouts,
                  graphics, and logos, belongs to State Surplus Recovery
                  or our licensors. You can read, print, and share pages
                  for personal, non-commercial use. You can't copy our
                  content for use on another site or in a commercial
                  product without written permission.
                </p>
              </section>

              <section className="legal-section" id="liability">
                <h2><span className="num">08</span> Limitation of Liability</h2>
                <p>
                  To the fullest extent permitted by law, our total
                  liability for any claim arising from your use of our
                  website or services is limited to the fees you've paid
                  us in connection with the matter at issue.
                </p>
                <p>
                  We're not liable for indirect, incidental, or
                  consequential damages, lost profits, or lost data,
                  even if we've been told such damages were possible.
                </p>
              </section>

              <section className="legal-section" id="termination">
                <h2><span className="num">09</span> Termination</h2>
                <p>
                  Either party can terminate the recovery agreement
                  according to the terms in that agreement. We may stop
                  work if you stop responding, if you provide false
                  information, or if continuing the work would put us in
                  a position that violates law or professional rules.
                </p>
                <p>
                  Termination doesn't waive any fees already earned for
                  work completed before the termination date, except as
                  provided in the recovery agreement.
                </p>
              </section>

              <section className="legal-section" id="governing-law">
                <h2><span className="num">10</span> Governing Law and Disputes</h2>
                <p>
                  These Terms are governed by the laws of the state where
                  State Surplus Recovery maintains its principal office,
                  without reference to conflict-of-laws rules. Any
                  dispute that can't be resolved by talking it out will
                  be brought in the state or federal courts of that
                  state, and you agree to that venue.
                </p>
                <p>
                  If any part of these Terms is found unenforceable, the
                  rest remain in effect.
                </p>
                <p>
                  Questions? Email team@statesurplusrecovery.com or call
                  (877) 600-4919.
                </p>
              </section>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
