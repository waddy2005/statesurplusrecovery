import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

function formatCurrency(value: number): string {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
}

export default function SurplusCalculator() {
  const [sale, setSale] = useState("");
  const [debt, setDebt] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const run = () => {
    const s = parseFloat(sale);
    const d = parseFloat(debt);
    if (Number.isFinite(s) && Number.isFinite(d)) {
      setResult(Math.max(0, s - d));
    }
  };

  return (
    <section className="section calculator">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="eyebrow">Quick Estimate</span>
            <h2>Surplus Funds Estimator</h2>
            <p>
              Plug in what the property sold for and what was owed. We'll
              show you a rough figure of what could be sitting with the
              county.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <div className="calculator__card">
            <div className="calculator__pane">
              <span className="calculator__eyebrow">Inputs</span>
              <h3 className="calculator__title">Run the Numbers</h3>
              <p className="calculator__lead">
                These are the only two pieces of info we need to give you a
                ballpark figure.
              </p>

              <div className="calc-input">
                <label className="calc-input__label" htmlFor="calc-sale">
                  Sold Price
                </label>
                <div className="calc-input__field">
                  <span className="calc-input__prefix">$</span>
                  <input
                    id="calc-sale"
                    type="number"
                    inputMode="decimal"
                    placeholder="280,000"
                    value={sale}
                    onChange={(e) => setSale(e.target.value)}
                  />
                </div>
              </div>

              <div className="calc-input">
                <label className="calc-input__label" htmlFor="calc-debt">
                  Total Debt Owed
                </label>
                <div className="calc-input__field">
                  <span className="calc-input__prefix">$</span>
                  <input
                    id="calc-debt"
                    type="number"
                    inputMode="decimal"
                    placeholder="195,000"
                    value={debt}
                    onChange={(e) => setDebt(e.target.value)}
                  />
                </div>
              </div>

              <button
                type="button"
                className="btn btn--outline"
                onClick={run}
                style={{ marginTop: "0.7rem", alignSelf: "flex-start" }}
              >
                Run Estimate
              </button>
            </div>

            <div className="calculator__divider" aria-hidden="true" />

            <div className="calculator__pane calc-result">
              <span className="calc-result__label">Potential Surplus</span>
              <div
                className={`calc-result__value ${
                  result !== null ? "is-active" : ""
                }`}
                aria-live="polite"
              >
                {result !== null ? formatCurrency(result) : "$0"}
              </div>
              <p className="calc-result__disclaimer">
                Rough estimate only. The county takes deductions for fees and
                liens before disbursing. We'll give you an exact figure once
                we pull the records.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
