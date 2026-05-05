import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ClockIcon, ArrowRightIcon } from "./icons";

const STORAGE_KEY = "ssr-deadline-banner-dismissed";

type Props = {
  onVisibilityChange: (visible: boolean) => void;
};

export default function DeadlineBanner({ onVisibilityChange }: Props) {
  const [visible, setVisible] = useState<boolean>(() => {
    if (typeof window === "undefined") return true;
    try {
      return window.sessionStorage.getItem(STORAGE_KEY) !== "1";
    } catch {
      return true;
    }
  });

  useEffect(() => {
    onVisibilityChange(visible);
  }, [visible, onVisibilityChange]);

  const dismiss = () => {
    try {
      window.sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* noop */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="deadline-banner" role="region" aria-label="Time-sensitive notice">
      <div className="deadline-banner__inner">
        <span className="deadline-banner__icon" aria-hidden="true">
          <ClockIcon size={15} strokeWidth={2.2} />
        </span>
        <span className="deadline-banner__label">Deadline Notice</span>
        <span className="deadline-banner__sep" aria-hidden="true" />
        <p className="deadline-banner__text">
          Most states set a deadline to claim surplus funds. Miss it, and the
          money goes back to the government.
        </p>
        <Link to="/contact" className="deadline-banner__link">
          Check eligibility <ArrowRightIcon size={12} />
        </Link>
        <button
          type="button"
          className="deadline-banner__close"
          aria-label="Dismiss notice"
          onClick={dismiss}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
    </div>
  );
}
