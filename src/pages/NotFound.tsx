import { Link } from "react-router-dom";
import { ArrowRightIcon, PhoneIcon } from "../components/icons";

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="container">
        <div className="not-found__inner fade-up">
          <span className="eyebrow">Page Not Found</span>
          <div className="not-found__code">404</div>
          <h1>This file isn't in our records.</h1>
          <p>
            The page you're looking for doesn't exist or has moved. Try one
            of the links below, or call us if you're trying to ask a real
            question.
          </p>

          <div className="not-found__actions">
            <Link to="/" className="btn btn--crimson">
              Back to Home <ArrowRightIcon size={14} />
            </Link>
            <a href="tel:+18776004919" className="btn btn--outline">
              <PhoneIcon size={14} /> (877) 600-4919
            </a>
          </div>

          <div className="not-found__links">
            <span className="not-found__links-label">Common pages</span>
            <ul>
              <li><Link to="/how-it-works">How It Works</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/verify-us">Verify Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
