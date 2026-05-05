import { ShieldIcon, BadgeIcon, HandCoinIcon, StarIcon } from "./icons";
import ScrollReveal from "./ScrollReveal";

const ITEMS = [
  {
    icon: <HandCoinIcon size={20} />,
    title: "No Upfront Fees",
    sub: "We get paid when you do",
  },
  {
    icon: <ShieldIcon size={20} />,
    title: "Licensed & Bonded",
    sub: "Across every state we serve",
  },
  {
    icon: <BadgeIcon size={20} />,
    title: "Millions Recovered",
    sub: "For homeowners and heirs",
  },
  {
    icon: <StarIcon size={20} />,
    title: "BBB Accredited",
    sub: "Transparent practices",
  },
];

export default function TrustBar() {
  return (
    <div className="trust-bar">
      <div className="container">
        <ScrollReveal>
          <div className="trust-bar__inner">
            {ITEMS.map((item, i) => (
              <div className="trust-item" key={i}>
                <div className="trust-item__icon">{item.icon}</div>
                <div className="trust-item__text">
                  <strong>{item.title}</strong>
                  <span>{item.sub}</span>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
