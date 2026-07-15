import React, { useState, useEffect } from "react";
import {
  Home,
  CheckCircle2,
  FileText,
  BadgeCheck,
  Clock,
  IndianRupee,
  ArrowRight,
  Building2,
  ChevronDown,
} from "lucide-react";

/* ------------------------------------------------------------------
  Same design system as LoanLandingPage.jsx / Navbar.jsx / PersonalLoan.jsx:
  --ink-950 #071A34   --blue-600 #2E63E8   --sky-100 #E9F1FE
  --ink-800 #0E2A52   --blue-500 #3B82F6   --amber-400 #F2B134
  Display: Fraunces · Body: Inter · Data: IBM Plex Mono
------------------------------------------------------------------- */

const FONT_IMPORT_URL =
  "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500;600&display=swap";

const features = [
  {
    icon: IndianRupee,
    title: "Loan up to ₹5 Crore",
    desc: "Finance your dream home with attractive loan amounts.",
  },
  {
    icon: Clock,
    title: "Fast approval",
    desc: "Quick approval with minimal documentation.",
  },
  {
    icon: BadgeCheck,
    title: "Low interest rate",
    desc: "Interest rates starting from 8.40% per annum.",
  },
];

const benefits = [
  "Up to 30 years repayment tenure",
  "Balance transfer facility",
  "Zero hidden charges",
  "Flexible EMI options",
  "Doorstep document collection",
  "Tax benefits under applicable laws",
];

const eligibility = [
  "Indian citizen",
  "Age between 21–65 years",
  "Salaried or self-employed",
  "Stable monthly income",
  "Good credit score (700+)",
];

const documents = [
  "Aadhaar card",
  "PAN card",
  "Passport-size photo",
  "Income proof",
  "Bank statements",
  "Property documents",
];

const steps = ["Apply online", "Document verification", "Property evaluation", "Loan disbursal"];

const rateCards = [
  { title: "Salaried", value: "8.40%", note: "Starting interest rate", highlight: false },
  { title: "Self-employed", value: "8.65%", note: "Competitive interest", highlight: true },
  { title: "Processing fee", value: "0.5%", note: "Maximum ₹10,000", highlight: false },
];

const faq = [
  {
    question: "How much home loan can I get?",
    answer: "You can get up to ₹5 Crore depending on your income, eligibility, and property value.",
  },
  {
    question: "What is the repayment tenure?",
    answer: "The repayment tenure can extend up to 30 years.",
  },
  {
    question: "Can I prepay my home loan?",
    answer: "Yes. You can prepay your loan as per the lender's policy.",
  },
];

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div className={`hl-faq ${isOpen ? "open" : ""}`}>
      <button className="hl-faq-q" onClick={onToggle} aria-expanded={isOpen}>
        <span>{item.question}</span>
        <ChevronDown size={18} className={`hl-faq-chev ${isOpen ? "open" : ""}`} />
      </button>
      <div className="hl-faq-a-wrap">
        <p className="hl-faq-a">{item.answer}</p>
      </div>
    </div>
  );
}

const HomeLoan = () => {
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    if (document.getElementById("hl-font-import")) return;
    const link = document.createElement("link");
    link.id = "hl-font-import";
    link.rel = "stylesheet";
    link.href = FONT_IMPORT_URL;
    document.head.appendChild(link);
  }, []);

  return (
    <div className="hl-root">
      <style>{`
        .hl-root {
          --ink-950:#071A34; --ink-800:#0E2A52; --ink-600:#3A5478;
          --blue-600:#2E63E8; --blue-500:#3B82F6;
          --sky-100:#E9F1FE; --ice-50:#F6F9FF; --amber-400:#F2B134;
          --line: rgba(7,26,52,0.08);
          font-family:'Inter', sans-serif;
          background:var(--ice-50);
          color:var(--ink-950);
          -webkit-font-smoothing:antialiased;
        }
        .hl-root h1, .hl-root h2, .hl-root h3 { font-family:'Fraunces', serif; letter-spacing:-0.01em; }
        .hl-mono { font-family:'IBM Plex Mono', monospace; }

        .hl-btn {
          display:inline-flex; align-items:center; gap:0.55rem;
          padding:0.9rem 1.9rem; border-radius:0.6rem; font-weight:600; font-size:0.96rem;
          cursor:pointer; border:none; transition:all .18s ease;
        }
        .hl-btn:focus-visible { outline:2px solid var(--amber-400); outline-offset:2px; }
        .hl-btn-primary { background:#fff; color:var(--blue-600); }
        .hl-btn-primary:hover { background:var(--sky-100); transform:translateY(-1px); }

        /* Hero */
        .hl-hero { background:radial-gradient(120% 150% at 85% 0%, #123B7C 0%, var(--ink-950) 55%); color:#fff; }
        .hl-hero-inner { max-width:1180px; margin:0 auto; padding:5rem 1.5rem; display:grid; gap:3rem; align-items:center; }
        @media (min-width:1024px){ .hl-hero-inner{ grid-template-columns:1.05fr 0.95fr; } }
        .hl-eyebrow { text-transform:uppercase; letter-spacing:0.18em; font-size:0.78rem; font-weight:600; color:#9CC0FF; margin:0 0 1rem; }
        .hl-hero h1 { font-size:clamp(2.4rem,5vw,3.4rem); font-weight:600; margin:0; line-height:1.1; }
        .hl-hero p.lead { margin-top:1.3rem; font-size:1.06rem; color:#C9DBFC; max-width:32rem; line-height:1.65; }
        .hl-hero-figure { position:relative; }
        .hl-hero-figure img { width:100%; border-radius:1.25rem; box-shadow:0 30px 60px -20px rgba(0,0,0,0.5); display:block; }
        .hl-hero-badge {
          position:absolute; bottom:-1.5rem; left:-1.5rem; background:#fff; color:var(--ink-950);
          border-radius:0.9rem; padding:1.1rem 1.4rem; box-shadow:0 20px 40px -18px rgba(7,26,52,0.35);
          display:flex; align-items:center; gap:0.75rem;
        }
        .hl-hero-badge .n { font-family:'IBM Plex Mono', monospace; font-weight:600; font-size:1.4rem; color:var(--blue-600); }
        .hl-hero-badge .l { font-size:0.78rem; color:var(--ink-600); }

        .hl-section { max-width:1180px; margin:0 auto; padding:5.5rem 1.5rem; }
        .hl-section-head { text-align:center; max-width:36rem; margin:0 auto 3.2rem; }
        .hl-section-head h2 { font-size:clamp(1.85rem,3.2vw,2.4rem); font-weight:600; }

        .hl-grid { display:grid; gap:1.75rem; }
        @media (min-width:768px){ .hl-grid-2{ grid-template-columns:repeat(2,1fr);} .hl-grid-3{ grid-template-columns:repeat(3,1fr);} }
        @media (min-width:1024px){ .hl-grid-4{ grid-template-columns:repeat(4,1fr);} }

        .hl-card { background:#fff; border:1px solid var(--line); border-radius:1rem; padding:2.2rem; text-align:center; transition:box-shadow .2s ease, transform .2s ease; }
        .hl-card:hover { box-shadow:0 18px 40px -22px rgba(7,26,52,0.28); transform:translateY(-2px); }
        .hl-card-icon { width:3.1rem; height:3.1rem; border-radius:0.75rem; background:var(--sky-100); color:var(--blue-600); display:flex; align-items:center; justify-content:center; margin:0 auto 1.25rem; }
        .hl-card h3 { font-size:1.25rem; font-weight:600; margin:0 0 0.6rem; }
        .hl-card p { color:var(--ink-600); font-size:0.95rem; line-height:1.55; margin:0; }

        .hl-panel { background:#fff; }

        .hl-benefit { display:flex; align-items:center; gap:0.85rem; background:var(--ice-50); border:1px solid var(--line); border-radius:0.85rem; padding:1.15rem 1.3rem; font-size:0.94rem; color:var(--ink-800); }
        .hl-benefit svg { color:var(--blue-600); flex-shrink:0; }

        .hl-info-card { background:var(--ice-50); border:1px solid var(--line); border-radius:1rem; padding:2.2rem; }
        .hl-info-card h2 { display:flex; align-items:center; gap:0.75rem; font-size:1.5rem; font-weight:600; margin:0; }
        .hl-info-card-icon { width:2.4rem; height:2.4rem; border-radius:0.6rem; background:var(--sky-100); color:var(--blue-600); display:flex; align-items:center; justify-content:center; }
        .hl-info-list { list-style:none; margin:1.6rem 0 0; padding:0; display:flex; flex-direction:column; gap:1rem; }
        .hl-info-list li { display:flex; align-items:center; gap:0.75rem; font-size:0.96rem; color:var(--ink-800); }
        .hl-info-list svg { color:var(--blue-600); flex-shrink:0; }

        .hl-step { background:#fff; border:1px solid var(--line); border-radius:1rem; padding:2.1rem 1.6rem; text-align:center; }
        .hl-step-num { width:2.5rem; height:2.5rem; border-radius:50%; background:var(--ink-950); color:#fff; display:flex; align-items:center; justify-content:center; font-weight:700; margin:0 auto 1.1rem; font-family:'IBM Plex Mono', monospace; }
        .hl-step h3 { font-size:1rem; font-weight:600; margin:0; }

        .hl-rate-card { background:#fff; border:1px solid var(--line); border-radius:1rem; padding:2.4rem; text-align:center; }
        .hl-rate-card h3 { font-family:'Inter', sans-serif; font-size:1.05rem; font-weight:600; margin:0; color:var(--ink-600); }
        .hl-rate-card .value { font-family:'IBM Plex Mono', monospace; font-size:2.6rem; font-weight:600; color:var(--blue-600); margin:0.9rem 0 0; }
        .hl-rate-card p.note { margin:0.6rem 0 0; color:var(--ink-600); font-size:0.9rem; }
        .hl-rate-card.highlight { background:linear-gradient(135deg, var(--blue-600), var(--ink-950)); color:#fff; border:none; }
        .hl-rate-card.highlight h3 { color:#C9DBFC; }
        .hl-rate-card.highlight .value { color:var(--amber-400); }
        .hl-rate-card.highlight p.note { color:#C9DBFC; }

        .hl-faq { border:1px solid var(--line); border-radius:0.9rem; background:#fff; overflow:hidden; }
        .hl-faq + .hl-faq { margin-top:0.9rem; }
        .hl-faq-q {
          width:100%; text-align:left; background:none; border:none; cursor:pointer;
          padding:1.35rem 1.6rem; display:flex; align-items:center; justify-content:space-between;
          font-family:'Fraunces', serif; font-weight:600; font-size:1.05rem; color:var(--ink-950);
        }
        .hl-faq-q:focus-visible { outline:2px solid var(--blue-600); outline-offset:-2px; }
        .hl-faq-chev { color:var(--blue-600); transition:transform .2s ease; flex-shrink:0; }
        .hl-faq-chev.open { transform:rotate(180deg); }
        .hl-faq-a-wrap { max-height:0; overflow:hidden; transition:max-height .25s ease; }
        .hl-faq.open .hl-faq-a-wrap { max-height:10rem; }
        .hl-faq-a { margin:0; padding:0 1.6rem 1.4rem; color:var(--ink-600); font-size:0.95rem; line-height:1.6; }

        .hl-cta { background:linear-gradient(120deg, var(--ink-950), #123B7C); color:#fff; text-align:center; }
        .hl-cta-inner { max-width:40rem; margin:0 auto; padding:5rem 1.5rem; }
        .hl-cta-icon { width:3.6rem; height:3.6rem; border-radius:1rem; background:rgba(255,255,255,0.1); display:flex; align-items:center; justify-content:center; margin:0 auto 1.5rem; color:var(--amber-400); }
        .hl-cta h2 { font-size:clamp(1.85rem,3.4vw,2.5rem); font-weight:600; }
        .hl-cta p { margin:1rem 0 2.2rem; color:#C9DBFC; font-size:1.05rem; }
      `}</style>

      {/* Hero */}
      <section className="hl-hero">
        <div className="hl-hero-inner">
          <div>
            <p className="hl-eyebrow">Affordable · Secure · Trusted</p>
            <h1>Home loan</h1>
            <p className="lead">
              Buy your dream home with flexible repayment options,
              competitive interest rates, and instant approval.
            </p>
            <button className="hl-btn hl-btn-primary" style={{ marginTop: "2.2rem" }}>
              Apply now <ArrowRight size={17} />
            </button>
          </div>

          <div className="hl-hero-figure">
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=900"
              alt="Home loan"
            />
            <div className="hl-hero-badge">
              <IndianRupee size={20} color="#2E63E8" />
              <div>
                <div className="n">₹5Cr</div>
                <div className="l">max loan amount</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="hl-section">
        <div className="hl-section-head">
          <h2>Why choose our home loan?</h2>
        </div>
        <div className="hl-grid hl-grid-3">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div className="hl-card" key={item.title}>
                <div className="hl-card-icon">
                  <Icon size={24} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Benefits */}
      <section className="hl-panel">
        <div className="hl-section">
          <div className="hl-section-head">
            <h2>Home loan benefits</h2>
          </div>
          <div className="hl-grid hl-grid-3">
            {benefits.map((item) => (
              <div className="hl-benefit" key={item}>
                <CheckCircle2 size={20} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility & Documents */}
      <section className="hl-section">
        <div className="hl-grid hl-grid-2">
          <div className="hl-info-card">
            <h2>
              <span className="hl-info-card-icon">
                <Building2 size={20} />
              </span>
              Eligibility
            </h2>
            <ul className="hl-info-list">
              {eligibility.map((item) => (
                <li key={item}>
                  <CheckCircle2 size={19} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="hl-info-card">
            <h2>
              <span className="hl-info-card-icon">
                <FileText size={20} />
              </span>
              Documents required
            </h2>
            <ul className="hl-info-list">
              {documents.map((item) => (
                <li key={item}>
                  <CheckCircle2 size={19} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="hl-panel">
        <div className="hl-section">
          <div className="hl-section-head">
            <h2>Simple loan process</h2>
          </div>
          <div className="hl-grid hl-grid-4">
            {steps.map((step, i) => (
              <div className="hl-step" key={step}>
                <div className="hl-step-num">{i + 1}</div>
                <h3>{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interest Rate */}
      <section className="hl-section">
        <div className="hl-section-head">
          <h2>Interest rate</h2>
        </div>
        <div className="hl-grid hl-grid-3">
          {rateCards.map((card) => (
            <div className={`hl-rate-card ${card.highlight ? "highlight" : ""}`} key={card.title}>
              <h3>{card.title}</h3>
              <p className="value hl-mono">{card.value}</p>
              <p className="note">{card.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="hl-panel">
        <div className="hl-section" style={{ maxWidth: "48rem" }}>
          <div className="hl-section-head">
            <h2>Frequently asked questions</h2>
          </div>
          <div>
            {faq.map((item, i) => (
              <FaqItem
                key={item.question}
                item={item}
                isOpen={openFaq === i}
                onToggle={() => setOpenFaq(openFaq === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hl-cta">
        <div className="hl-cta-inner">
          <div className="hl-cta-icon">
            <Home size={26} />
          </div>
          <h2>Ready to own your dream home?</h2>
          <p>Apply online today and get instant approval with flexible EMI options.</p>
          <button className="hl-btn hl-btn-primary">
            Apply now <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomeLoan;