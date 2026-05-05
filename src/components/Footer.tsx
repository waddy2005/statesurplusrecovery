import { Link } from "react-router-dom";
import { PhoneIcon, MailIcon } from "./icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__col">
            <Link to="/" className="footer__brand" aria-label="State Surplus Recovery, home">
              <img src="/logo.png" alt="State Surplus Recovery" />
            </Link>
            <p>
              We help homeowners and their heirs recover surplus funds left
              over after foreclosure and tax sales. No upfront fees. We only
              get paid when you do.
            </p>
            <div className="footer__contact">
              <a href="tel:+18776004919" className="phone-link">
                <PhoneIcon size={18} /> (877) 600-4919
              </a>
              <a href="mailto:team@statesurplusrecovery.com">
                <MailIcon size={16} /> team@statesurplusrecovery.com
              </a>
            </div>
          </div>

          <div className="footer__col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/how-it-works">How It Works</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/verify-us">Verify Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Legal</h4>
            <ul>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms-conditions">Terms &amp; Conditions</Link></li>
            </ul>
            <h4 style={{ marginTop: "1.6rem" }}>Hours</h4>
            <p style={{ fontSize: "0.93rem", marginBottom: 0 }}>
              Monday through Friday<br />
              8:00 a.m. to 6:00 p.m. CT
            </p>
          </div>
        </div>

        <div className="footer__divider" />

        <p className="footer__sms">
          By submitting your information through our forms, you may receive
          SMS messages from State Surplus Recovery related to your claim.
          Message and data rates may apply. Reply STOP to opt out at any
          time. SMS consent is not a condition of service. SMS consent data
          is never shared with third parties. Read our{" "}
          <Link to="/privacy-policy">Privacy Policy</Link> and{" "}
          <Link to="/terms-conditions">Terms &amp; Conditions</Link>.
        </p>

        <div className="footer__bottom">
          <span>© {year} State Surplus Recovery. All rights reserved.</span>
          <span className="footer__credit">
            <span className="footer__credit-prefix">Enterprise design by</span>
            <span className="footer__credit-prefix-short">Designed by</span>
            <a
              href="https://surplusfundslist.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              surplusfundslist
            </a>
            <span className="footer__credit-sep" aria-hidden="true" />
            <span className="footer__credit-tagline">
              Built to higher standards
            </span>
          </span>
        </div>
      </div>
    </footer>
  );
}
