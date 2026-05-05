import { useRef, useState } from "react";
import { PlusIcon } from "./icons";

export type AccordionEntry = {
  q: string;
  a: string;
};

type Props = {
  items: AccordionEntry[];
};

export default function Accordion({ items }: Props) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <div className="accordion">
      {items.map((item, i) => {
        const isOpen = openIdx === i;
        const inner = refs.current[i];
        const maxHeight = isOpen && inner ? `${inner.scrollHeight}px` : "0px";

        return (
          <div className={`accordion-item ${isOpen ? "is-open" : ""}`} key={i}>
            <button
              type="button"
              className="accordion-trigger"
              aria-expanded={isOpen}
              onClick={() => setOpenIdx(isOpen ? null : i)}
            >
              <span>{item.q}</span>
              <span className="accordion-trigger__icon" aria-hidden="true">
                <PlusIcon size={14} />
              </span>
            </button>
            <div className="accordion-content" style={{ maxHeight }}>
              <div
                className="accordion-content__inner"
                ref={(el) => {
                  refs.current[i] = el;
                }}
              >
                {item.a}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
