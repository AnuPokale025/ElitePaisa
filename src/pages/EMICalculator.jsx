import React, { useState, useMemo, useEffect } from "react";
import { Calculator, IndianRupee, Percent, Calendar, Zap, PiggyBank, GitCompare } from "lucide-react";
import ContactModal from "../modal/ContactModal";

/* ------------------------------------------------------------------
  Same design system as the rest of the site:
  --ink-950 #071A34   --blue-600 #2E63E8   --sky-100 #E9F1FE
  --ink-800 #0E2A52   --blue-500 #3B82F6   --amber-400 #F2B134
  Display: Fraunces · Body: Inter · Data: IBM Plex Mono
  (This page is the most numbers-heavy in the site, so the mono
  face gets the most real estate here — every rupee figure and the
  EMI itself.)
------------------------------------------------------------------- */

const FONT_IMPORT_URL =
  "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500;600&display=swap";

const whyUse = [
  {
    icon: Zap,
    title: "Instant results",
    desc: "Calculate your EMI in real time while adjusting loan values.",
  },
  {
    icon: PiggyBank,
    title: "Financial planning",
    desc: "Know your monthly payments before applying.",
  },
  {
    icon: GitCompare,
    title: "Easy comparison",
    desc: "Compare different loan amounts, tenures, and interest rates effortlessly.",
  },
];

function formatINR(n) {
  return "₹" + Number(n).toLocaleString("en-IN");
}

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [interestRate, setInterestRate] = useState(10);
  const [tenure, setTenure] = useState(5);
  const [openModal, setOpenModal] = useState();

  useEffect(() => {
    if (document.getElementById("ec-font-import")) return;
    const link = document.createElement("link");
    link.id = "ec-font-import";
    link.rel = "stylesheet";
    link.href = FONT_IMPORT_URL;
    document.head.appendChild(link);
  }, []);

  const { emi, totalPayment, totalInterest, principalPct } = useMemo(() => {
    const monthlyRate = interestRate / 12 / 100;
    const months = tenure * 12;

    const emiVal =
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);

    const totalPaymentVal = emiVal * months;
    const totalInterestVal = totalPaymentVal - loanAmount;

    return {
      emi: emiVal.toFixed(0),
      totalPayment: totalPaymentVal.toFixed(0),
      totalInterest: totalInterestVal.toFixed(0),
      principalPct: Math.round((loanAmount / totalPaymentVal) * 100),
    };
  }, [loanAmount, interestRate, tenure]);

  const amountPct = ((loanAmount - 50000) / (5000000 - 50000)) * 100;
  const ratePct = ((interestRate - 5) / (20 - 5)) * 100;
  const tenurePct = ((tenure - 1) / (30 - 1)) * 100;

  return (
    <div className="ec-root">
      <style>{`
        .ec-root {
          --ink-950:#071A34; --ink-800:#0E2A52; --ink-600:#3A5478;
          --blue-600:#2E63E8; --blue-500:#3B82F6;
          --sky-100:#E9F1FE; --ice-50:#F6F9FF; --amber-400:#F2B134;
          --line: rgba(7,26,52,0.08);
          font-family:'Inter', sans-serif;
          background:var(--ice-50);
          color:var(--ink-950);
          min-height:100vh;
          -webkit-font-smoothing:antialiased;
        }
        .ec-root h1, .ec-root h2, .ec-root h3 { font-family:'Fraunces', serif; letter-spacing:-0.01em; }
        .ec-mono { font-family:'IBM Plex Mono', monospace; }

        /* Hero */
        .ec-hero { background:radial-gradient(120% 150% at 50% 0%, #123B7C 0%, var(--ink-950) 60%); color:#fff; text-align:center; }
        .ec-hero-inner { max-width:44rem; margin:0 auto; padding:5rem 1.5rem 4rem; }
        .ec-hero-icon { width:3.8rem; height:3.8rem; border-radius:1rem; background:rgba(255,255,255,0.1); display:flex; align-items:center; justify-content:center; margin:0 auto 1.5rem; color:var(--amber-400); }
        .ec-hero h1 { font-size:clamp(2.3rem,4.6vw,3.1rem); font-weight:600; margin:0; }
        .ec-hero p { margin:1.1rem 0 0; color:#C9DBFC; font-size:1.05rem; line-height:1.6; }

        .ec-section { max-width:1180px; margin:0 auto; padding:4rem 1.5rem 5.5rem; }
        .ec-calc-grid { display:grid; gap:1.75rem; }
        @media (min-width:1024px){ .ec-calc-grid{ grid-template-columns:1fr 1fr; align-items:start; } }

        .ec-panel { background:#fff; border:1px solid var(--line); border-radius:1.25rem; padding:2.4rem; }
        .ec-panel h2 { font-size:1.5rem; font-weight:600; margin:0 0 2rem; }

        .ec-field { margin-bottom:2.1rem; }
        .ec-field:last-child { margin-bottom:0; }
        .ec-field-head { display:flex; justify-content:space-between; align-items:center; margin-bottom:0.9rem; }
        .ec-field-label { display:flex; align-items:center; gap:0.55rem; font-weight:600; font-size:0.94rem; color:var(--ink-800); }
        .ec-field-label svg { color:var(--blue-600); }
        .ec-field-value { font-family:'IBM Plex Mono', monospace; font-weight:600; color:var(--blue-600); font-size:1.02rem; }

        /* Custom slider */
        .ec-slider { position:relative; height:1.5rem; display:flex; align-items:center; }
        .ec-slider-track { position:absolute; left:0; right:0; height:6px; border-radius:999px; background:var(--sky-100); }
        .ec-slider-fill { position:absolute; left:0; height:6px; border-radius:999px; background:linear-gradient(90deg, var(--blue-600), var(--blue-500)); }
        .ec-slider input[type="range"] {
          position:relative; width:100%; margin:0; appearance:none; -webkit-appearance:none;
          background:transparent; cursor:pointer; height:1.5rem;
        }
        .ec-slider input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance:none; appearance:none; width:20px; height:20px; border-radius:50%;
          background:#fff; border:3px solid var(--blue-600); box-shadow:0 2px 8px rgba(7,26,52,0.25); cursor:pointer;
        }
        .ec-slider input[type="range"]::-moz-range-thumb {
          width:20px; height:20px; border-radius:50%; background:#fff; border:3px solid var(--blue-600);
          box-shadow:0 2px 8px rgba(7,26,52,0.25); cursor:pointer;
        }
        .ec-slider input[type="range"]:focus-visible::-webkit-slider-thumb { outline:2px solid var(--amber-400); outline-offset:2px; }
        .ec-slider-range { display:flex; justify-content:space-between; margin-top:0.5rem; font-size:0.76rem; color:var(--ink-600); }

        /* Summary panel */
        .ec-summary { background:linear-gradient(135deg, var(--ink-950), #123B7C); border-radius:1.25rem; padding:2.4rem; color:#fff; }
        .ec-summary h2 { font-size:1.5rem; font-weight:600; margin:0 0 1.8rem; color:#fff; }
        .ec-summary-hero { background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.14); border-radius:1rem; padding:1.6rem 1.8rem; margin-bottom:1.1rem; }
        .ec-summary-hero p { margin:0; color:#9CC0FF; font-size:0.85rem; font-weight:600; text-transform:uppercase; letter-spacing:0.06em; }
        .ec-summary-hero h3 { font-family:'IBM Plex Mono', monospace; font-size:2.6rem; font-weight:600; margin:0.5rem 0 0; color:var(--amber-400); }
        .ec-summary-row { display:flex; justify-content:space-between; align-items:center; background:rgba(255,255,255,0.06); border-radius:0.85rem; padding:1.1rem 1.4rem; margin-bottom:0.9rem; }
        .ec-summary-row p { margin:0; color:#C9DBFC; font-size:0.92rem; }
        .ec-summary-row span { font-family:'IBM Plex Mono', monospace; font-weight:600; font-size:1.15rem; }

        .ec-bar { height:10px; border-radius:999px; overflow:hidden; display:flex; margin:1.4rem 0 0.6rem; background:rgba(255,255,255,0.1); }
        .ec-bar-principal { height:100%; background:var(--amber-400); }
        .ec-bar-interest { height:100%; background:#9CC0FF; }
        .ec-bar-legend { display:flex; justify-content:space-between; font-size:0.78rem; color:#C9DBFC; }
        .ec-bar-legend span { display:inline-flex; align-items:center; gap:0.4rem; }
        .ec-dot { width:8px; height:8px; border-radius:50%; display:inline-block; }

        .ec-cta-btn {
          width:100%; margin-top:1.6rem; background:#fff; color:var(--blue-600); border:none;
          padding:1rem; border-radius:0.65rem; font-weight:600; font-size:0.98rem; cursor:pointer; transition:all .18s ease;
        }
        .ec-cta-btn:hover { background:var(--sky-100); transform:translateY(-1px); }
        .ec-cta-btn:focus-visible { outline:2px solid var(--amber-400); outline-offset:2px; }

        /* Why use */
        .ec-why-head { text-align:center; max-width:36rem; margin:0 auto 3.2rem; }
        .ec-why-head h2 { font-size:clamp(1.85rem,3.2vw,2.4rem); font-weight:600; }
        .ec-why-grid { display:grid; gap:1.75rem; }
        @media (min-width:768px){ .ec-why-grid{ grid-template-columns:repeat(3,1fr);} }
        .ec-why-card { background:#fff; border:1px solid var(--line); border-radius:1rem; padding:2.2rem; }
        .ec-why-icon { width:3rem; height:3rem; border-radius:0.75rem; background:var(--sky-100); color:var(--blue-600); display:flex; align-items:center; justify-content:center; margin-bottom:1.2rem; }
        .ec-why-card h3 { font-size:1.2rem; font-weight:600; margin:0 0 0.6rem; }
        .ec-why-card p { color:var(--ink-600); font-size:0.95rem; line-height:1.55; margin:0; }
      `}</style>

      {/* Hero */}
      <section className="ec-hero">
        <div className="ec-hero-inner">
          <div className="ec-hero-icon">
            <Calculator size={28} />
          </div>
          <h1>EMI calculator</h1>
          <p>
            Calculate your monthly EMI instantly and plan your finances
            before applying for a loan.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="ec-section">
        <div className="ec-calc-grid">
          {/* Left — inputs */}
          <div className="ec-panel">
            <h2>Loan details</h2>

            <div className="ec-field">
              <div className="ec-field-head">
                <span className="ec-field-label">
                  <IndianRupee size={17} />
                  Loan amount
                </span>
                <span className="ec-field-value">{formatINR(loanAmount)}</span>
              </div>
              <div className="ec-slider">
                <div className="ec-slider-track" />
                <div className="ec-slider-fill" style={{ width: `${amountPct}%` }} />
                <input
                  type="range"
                  min="50000"
                  max="5000000"
                  step="10000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  aria-label="Loan amount"
                />
              </div>
              <div className="ec-slider-range">
                <span>₹50K</span>
                <span>₹50L</span>
              </div>
            </div>

            <div className="ec-field">
              <div className="ec-field-head">
                <span className="ec-field-label">
                  <Percent size={17} />
                  Interest rate
                </span>
                <span className="ec-field-value">{interestRate}%</span>
              </div>
              <div className="ec-slider">
                <div className="ec-slider-track" />
                <div className="ec-slider-fill" style={{ width: `${ratePct}%` }} />
                <input
                  type="range"
                  min="5"
                  max="20"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  aria-label="Interest rate"
                />
              </div>
              <div className="ec-slider-range">
                <span>5%</span>
                <span>20%</span>
              </div>
            </div>

            <div className="ec-field">
              <div className="ec-field-head">
                <span className="ec-field-label">
                  <Calendar size={17} />
                  Loan tenure
                </span>
                <span className="ec-field-value">{tenure} yrs</span>
              </div>
              <div className="ec-slider">
                <div className="ec-slider-track" />
                <div className="ec-slider-fill" style={{ width: `${tenurePct}%` }} />
                <input
                  type="range"
                  min="1"
                  max="30"
                  value={tenure}
                  onChange={(e) => setTenure(Number(e.target.value))}
                  aria-label="Loan tenure"
                />
              </div>
              <div className="ec-slider-range">
                <span>1 yr</span>
                <span>30 yrs</span>
              </div>
            </div>
          </div>

          {/* Right — summary */}
          <div className="ec-summary">
            <h2>EMI summary</h2>

            <div className="ec-summary-hero">
              <p>Monthly EMI</p>
              <h3 className="ec-mono">{formatINR(emi)}</h3>
            </div>

            <div className="ec-summary-row">
              <p>Total interest</p>
              <span>{formatINR(totalInterest)}</span>
            </div>
            <div className="ec-summary-row">
              <p>Total payment</p>
              <span>{formatINR(totalPayment)}</span>
            </div>

            <div className="ec-bar">
              <div className="ec-bar-principal" style={{ width: `${principalPct}%` }} />
              <div className="ec-bar-interest" style={{ width: `${100 - principalPct}%` }} />
            </div>
            <div className="ec-bar-legend">
              <span><span className="ec-dot" style={{ background: "var(--amber-400)" }} />Principal {principalPct}%</span>
              <span><span className="ec-dot" style={{ background: "#9CC0FF" }} />Interest {100 - principalPct}%</span>
            </div>

            <button onClick={() => setOpenModal(true)} className="ec-cta-btn">Apply for loan</button>
          </div>
        </div>
      </section>

      {/* Why use */}
      <section className="ec-section" style={{ paddingTop: 0 }}>
        <div className="ec-why-head">
          <h2>Why use our EMI calculator?</h2>
        </div>
        <div className="ec-why-grid">
          {whyUse.map((item) => {
            const Icon = item.icon;
            return (
              <div className="ec-why-card" key={item.title}>
                <div className="ec-why-icon">
                  <Icon size={22} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>
      <ContactModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      />
    </div>
  );
};

export default EMICalculator;