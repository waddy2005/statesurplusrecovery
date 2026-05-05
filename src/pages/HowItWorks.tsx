import { Link } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";
import PulseCapsule from "../components/PulseCapsule";
import Timeline, { TimelineStep } from "../components/Timeline";
import {
  SearchIcon,
  HeirsIcon,
  FileIcon,
  GavelIcon,
  DollarIcon,
  InfoIcon,
  PhoneIcon,
  ArrowRightIcon,
} from "../components/icons";

const STEPS: TimelineStep[] = [
  {
    num: "01",
    title: "County Research",
    body: "We dig through court filings, auction records, and county databases. When a property sells for more than the debt owed, the difference, the surplus, belongs to the former owner. That's the trigger. We pull the file, confirm the numbers, and start figuring out who the funds should be going to.",
    icon: <SearchIcon size={22} />,
  },
  {
    num: "02",
    title: "Owner Verification",
    body: "We confirm the rightful owner or their heirs using public records and professional databases. If the original owner has passed away, we identify the heirs and walk them through what's needed. This step takes the longest because it has to be exactly right.",
    icon: <HeirsIcon size={22} />,
  },
  {
    num: "03",
    title: "Claim Filing",
    body: "We prepare and file all the legal paperwork the county or court requires. Every jurisdiction has its own forms, its own affidavits, its own filing windows. You sign once. We handle the rest.",
    icon: <FileIcon size={22} />,
  },
  {
    num: "04",
    title: "Court Advocacy",
    body: "When a state requires court approval, we work with trustees, county counsel, and licensed attorneys to push the claim through. We respond to requests, attend hearings where needed, and keep the file moving.",
    icon: <GavelIcon size={22} />,
  },
  {
    num: "05",
    title: "Fund Disbursement",
    body: "Once approved, the county releases the funds directly to you, minus our agreed-upon fee. That fee is locked in before we ever file. If the claim doesn't go through, you owe us nothing.",
    icon: <DollarIcon size={22} />,
  },
];

export default function HowItWorks() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <div className="page-header__inner fade-up">
            <PulseCapsule>The Process</PulseCapsule>
            <h1>From a name in a county ledger to a check in your hand.</h1>
            <p>
              Here's exactly what happens between the moment we find your
              name and the moment the money lands. No mystery, no jargon.
            </p>
          </div>
        </div>
      </section>

      <section className="timeline">
        <div className="container">
          <Timeline steps={STEPS} />

          <ScrollReveal>
            <div className="timeline-note">
              <InfoIcon size={22} />
              <span>
                The process typically takes anywhere from 90 to 180 days
                depending on the state and county regulations.
              </span>
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
                <h2>Want to see if your name is in those records?</h2>
                <p>
                  Tell us where the property was and roughly when the sale
                  happened. We'll take it from there.
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
