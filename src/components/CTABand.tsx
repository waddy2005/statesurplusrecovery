import { Link } from "react-router-dom";
import { PhoneIcon, ArrowRightIcon } from "./icons";
import ScrollReveal from "./ScrollReveal";

type Props = {
  heading?: string;
  text?: string;
};

export default function CTABand({
  heading = "Not sure if you qualify? Call us.",
  text = "It costs nothing to find out. We'll check the records, walk you through what we see, and tell you whether there's money waiting in your name.",
}: Props) {
  return (
    <section className="cta-band">
      <div className="container">
        <ScrollReveal>
          <div className="cta-band__inner">
            <div className="cta-band__text">
              <h2>{heading}</h2>
              <p>{text}</p>
            </div>
            <div className="cta-band__actions">
              <a href="tel:+18776004919" className="cta-band__phone">
                <PhoneIcon size={22} />
                (877) 600-4919
              </a>
              <Link to="/contact" className="btn btn--crimson">
                Start a Free Check <ArrowRightIcon />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
