import React, { useState, useEffect } from "react";
import {
  Briefcase,
  IndianRupee,
  CheckCircle2,
  FileText,
  Clock,
  BadgeCheck,
  TrendingUp,
  ArrowRight,
  ChevronDown,
} from "lucide-react";

/* ------------------------------------------------------------------
  Same design system as LoanLandingPage.jsx / Navbar.jsx /
  PersonalLoan.jsx / HomeLoan.jsx:
  --ink-950 #071A34   --blue-600 #2E63E8   --sky-100 #E9F1FE
  --ink-800 #0E2A52   --blue-500 #3B82F6   --amber-400 #F2B134
  Display: Fraunces · Body: Inter · Data: IBM Plex Mono
------------------------------------------------------------------- */

const FONT_IMPORT_URL =
  "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500;600&display=swap";

const features = [
  {
    icon: IndianRupee,
    title: "Loan up to ₹2 Crore",
    desc: "Flexible funding for startups, SMEs, and growing businesses.",
  },
  {
    icon: Clock,
    title: "Fast approval",
    desc: "Get approval within 24 hours with minimal paperwork.",
  },
  {
    icon: BadgeCheck,
    title: "Competitive interest",
    desc: "Business-friendly interest rates with flexible repayment.",
  },
];

const benefits = [
  "No collateral for eligible applicants",
  "Flexible repayment up to 10 years",
  "Quick online application",
  "Minimal documentation",
  "Working capital support",
  "Business expansion financing",
];

const eligibility = [
  "Indian citizen",
  "Business operating for at least 2 years",
  "Annual turnover as per lender requirements",
  "Age between 21 and 65 years",
  "Good credit history",
];

const documents = [
  "Aadhaar card",
  "PAN card",
  "Business registration certificate",
  "GST registration",
  "Bank statements (last 6 months)",
  "IT returns",
];

const steps = ["Apply online", "Submit documents", "Business verification", "Loan disbursement"];

const plans = [
  { title: "Startup Loan", amount: "₹25 Lakhs", note: "Up to", highlight: false },
  { title: "SME Loan", amount: "₹75 Lakhs", note: "Up to", highlight: true },
  { title: "Corporate Loan", amount: "₹2 Crore", note: "Up to", highlight: false },
];

const faqs = [
  {
    question: "Who can apply for a business loan?",
    answer: "Self-employed professionals, MSMEs, startups, and registered businesses can apply.",
  },
  {
    question: "Is collateral required?",
    answer: "Many business loans are available without collateral based on eligibility.",
  },
  {
    question: "How quickly is the loan approved?",
    answer: "Most eligible applications receive approval within 24 hours.",
  },
];

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div className={`bl-faq ${isOpen ? "open" : ""}`}>
      <button className="bl-faq-q" onClick={onToggle} aria-expanded={isOpen}>
        <span>{item.question}</span>
        <ChevronDown size={18} className={`bl-faq-chev ${isOpen ? "open" : ""}`} />
      </button>
      <div className="bl-faq-a-wrap">
        <p className="bl-faq-a">{item.answer}</p>
      </div>
    </div>
  );
}

const BusinessLoan = () => {
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    if (document.getElementById("bl-font-import")) return;
    const link = document.createElement("link");
    link.id = "bl-font-import";
    link.rel = "stylesheet";
    link.href = FONT_IMPORT_URL;
    document.head.appendChild(link);
  }, []);

  return (
    <div className="bl-root">
      <style>{`
        .bl-root {
          --ink-950:#071A34; --ink-800:#0E2A52; --ink-600:#3A5478;
          --blue-600:#2E63E8; --blue-500:#3B82F6;
          --sky-100:#E9F1FE; --ice-50:#F6F9FF; --amber-400:#F2B134;
          --line: rgba(7,26,52,0.08);
          font-family:'Inter', sans-serif;
          background:var(--ice-50);
          color:var(--ink-950);
          -webkit-font-smoothing:antialiased;
        }
        .bl-root h1, .bl-root h2, .bl-root h3 { font-family:'Fraunces', serif; letter-spacing:-0.01em; }
        .bl-mono { font-family:'IBM Plex Mono', monospace; }

        .bl-btn {
          display:inline-flex; align-items:center; gap:0.55rem;
          padding:0.9rem 1.9rem; border-radius:0.6rem; font-weight:600; font-size:0.96rem;
          cursor:pointer; border:none; transition:all .18s ease;
        }
        .bl-btn:focus-visible { outline:2px solid var(--amber-400); outline-offset:2px; }
        .bl-btn-primary { background:#fff; color:var(--blue-600); }
        .bl-btn-primary:hover { background:var(--sky-100); transform:translateY(-1px); }
        .bl-btn-solid { background:var(--blue-600); color:#fff; }
        .bl-btn-solid:hover { background:var(--ink-950); }
        .bl-btn-solid-inverse { background:#fff; color:var(--blue-600); }
        .bl-btn-solid-inverse:hover { background:var(--sky-100); }
        .bl-btn-block { width:100%; justify-content:center; }

        /* Hero */
        .bl-hero { background:radial-gradient(120% 150% at 85% 0%, #123B7C 0%, var(--ink-950) 55%); color:#fff; }
        .bl-hero-inner { max-width:1180px; margin:0 auto; padding:5rem 1.5rem; display:grid; gap:3rem; align-items:center; }
        @media (min-width:1024px){ .bl-hero-inner{ grid-template-columns:1.05fr 0.95fr; } }
        .bl-eyebrow { text-transform:uppercase; letter-spacing:0.18em; font-size:0.78rem; font-weight:600; color:#9CC0FF; margin:0 0 1rem; }
        .bl-hero h1 { font-size:clamp(2.4rem,5vw,3.4rem); font-weight:600; margin:0; line-height:1.1; }
        .bl-hero p.lead { margin-top:1.3rem; font-size:1.06rem; color:#C9DBFC; max-width:32rem; line-height:1.65; }
        .bl-hero-figure { position:relative; }
        .bl-hero-figure img { width:100%; border-radius:1.25rem; box-shadow:0 30px 60px -20px rgba(0,0,0,0.5); display:block; }
        .bl-hero-badge {
          position:absolute; bottom:-1.5rem; left:-1.5rem; background:#fff; color:var(--ink-950);
          border-radius:0.9rem; padding:1.1rem 1.4rem; box-shadow:0 20px 40px -18px rgba(7,26,52,0.35);
          display:flex; align-items:center; gap:0.75rem;
        }
        .bl-hero-badge .n { font-family:'IBM Plex Mono', monospace; font-weight:600; font-size:1.4rem; color:var(--blue-600); }
        .bl-hero-badge .l { font-size:0.78rem; color:var(--ink-600); }

        .bl-section { max-width:1180px; margin:0 auto; padding:5.5rem 1.5rem; }
        .bl-section-head { text-align:center; max-width:36rem; margin:0 auto 3.2rem; }
        .bl-section-head h2 { font-size:clamp(1.85rem,3.2vw,2.4rem); font-weight:600; }

        .bl-grid { display:grid; gap:1.75rem; }
        @media (min-width:768px){ .bl-grid-2{ grid-template-columns:repeat(2,1fr);} .bl-grid-3{ grid-template-columns:repeat(3,1fr);} }
        @media (min-width:1024px){ .bl-grid-4{ grid-template-columns:repeat(4,1fr);} }

        .bl-card { background:#fff; border:1px solid var(--line); border-radius:1rem; padding:2.2rem; text-align:center; transition:box-shadow .2s ease, transform .2s ease; }
        .bl-card:hover { box-shadow:0 18px 40px -22px rgba(7,26,52,0.28); transform:translateY(-2px); }
        .bl-card-icon { width:3.1rem; height:3.1rem; border-radius:0.75rem; background:var(--sky-100); color:var(--blue-600); display:flex; align-items:center; justify-content:center; margin:0 auto 1.25rem; }
        .bl-card h3 { font-size:1.25rem; font-weight:600; margin:0 0 0.6rem; }
        .bl-card p { color:var(--ink-600); font-size:0.95rem; line-height:1.55; margin:0; }

        .bl-panel { background:#fff; }

        .bl-benefit { display:flex; align-items:center; gap:0.85rem; background:var(--ice-50); border:1px solid var(--line); border-radius:0.85rem; padding:1.15rem 1.3rem; font-size:0.94rem; color:var(--ink-800); }
        .bl-benefit svg { color:var(--blue-600); flex-shrink:0; }

        .bl-info-card { background:var(--ice-50); border:1px solid var(--line); border-radius:1rem; padding:2.2rem; }
        .bl-info-card h2 { display:flex; align-items:center; gap:0.75rem; font-size:1.5rem; font-weight:600; margin:0; }
        .bl-info-card-icon { width:2.4rem; height:2.4rem; border-radius:0.6rem; background:var(--sky-100); color:var(--blue-600); display:flex; align-items:center; justify-content:center; }
        .bl-info-list { list-style:none; margin:1.6rem 0 0; padding:0; display:flex; flex-direction:column; gap:1rem; }
        .bl-info-list li { display:flex; align-items:center; gap:0.75rem; font-size:0.96rem; color:var(--ink-800); }
        .bl-info-list svg { color:var(--blue-600); flex-shrink:0; }

        .bl-step { background:#fff; border:1px solid var(--line); border-radius:1rem; padding:2.1rem 1.6rem; text-align:center; }
        .bl-step-num { width:2.5rem; height:2.5rem; border-radius:50%; background:var(--ink-950); color:#fff; display:flex; align-items:center; justify-content:center; font-weight:700; margin:0 auto 1.1rem; font-family:'IBM Plex Mono', monospace; }
        .bl-step h3 { font-size:1rem; font-weight:600; margin:0; }

        .bl-plan { background:#fff; border:1px solid var(--line); border-radius:1rem; padding:2.6rem 2rem; text-align:center; display:flex; flex-direction:column; }
        .bl-plan-icon { width:3rem; height:3rem; border-radius:0.8rem; background:var(--sky-100); color:var(--blue-600); display:flex; align-items:center; justify-content:center; margin:0 auto 1.3rem; }
        .bl-plan h3 { font-size:1.2rem; font-weight:600; margin:0; }
        .bl-plan .note { font-size:0.8rem; color:var(--ink-600); text-transform:uppercase; letter-spacing:0.06em; margin:1.1rem 0 0.2rem; }
        .bl-plan .amount { font-family:'IBM Plex Mono', monospace; font-size:2rem; font-weight:600; color:var(--blue-600); margin:0; }
        .bl-plan .spacer { flex:1; }
        .bl-plan.highlight {
          background:linear-gradient(135deg, var(--blue-600), var(--ink-950)); color:#fff; border:none;
          transform:scale(1.03); box-shadow:0 24px 48px -20px rgba(7,26,52,0.4);
        }
        .bl-plan.highlight .bl-plan-icon { background:rgba(255,255,255,0.15); color:#fff; }
        .bl-plan.highlight .note { color:#C9DBFC; }
        .bl-plan.highlight .amount { color:var(--amber-400); }
        .bl-plan-cta { margin-top:1.6rem; }

        .bl-faq { border:1px solid var(--line); border-radius:0.9rem; background:#fff; overflow:hidden; }
        .bl-faq + .bl-faq { margin-top:0.9rem; }
        .bl-faq-q {
          width:100%; text-align:left; background:none; border:none; cursor:pointer;
          padding:1.35rem 1.6rem; display:flex; align-items:center; justify-content:space-between;
          font-family:'Fraunces', serif; font-weight:600; font-size:1.05rem; color:var(--ink-950);
        }
        .bl-faq-q:focus-visible { outline:2px solid var(--blue-600); outline-offset:-2px; }
        .bl-faq-chev { color:var(--blue-600); transition:transform .2s ease; flex-shrink:0; }
        .bl-faq-chev.open { transform:rotate(180deg); }
        .bl-faq-a-wrap { max-height:0; overflow:hidden; transition:max-height .25s ease; }
        .bl-faq.open .bl-faq-a-wrap { max-height:10rem; }
        .bl-faq-a { margin:0; padding:0 1.6rem 1.4rem; color:var(--ink-600); font-size:0.95rem; line-height:1.6; }

        .bl-cta { background:linear-gradient(120deg, var(--ink-950), #123B7C); color:#fff; text-align:center; }
        .bl-cta-inner { max-width:40rem; margin:0 auto; padding:5rem 1.5rem; }
        .bl-cta-icon { width:3.6rem; height:3.6rem; border-radius:1rem; background:rgba(255,255,255,0.1); display:flex; align-items:center; justify-content:center; margin:0 auto 1.5rem; color:var(--amber-400); }
        .bl-cta h2 { font-size:clamp(1.85rem,3.4vw,2.5rem); font-weight:600; }
        .bl-cta p { margin:1rem 0 2.2rem; color:#C9DBFC; font-size:1.05rem; }
      `}</style>

      {/* Hero */}
      <section className="bl-hero">
        <div className="bl-hero-inner">
          <div>
            <p className="bl-eyebrow">Grow · Expand · Succeed</p>
            <h1>Business loan</h1>
            <p className="lead">
              Fuel your business growth with quick approvals, low interest
              rates, and flexible repayment options.
            </p>
            <button className="bl-btn bl-btn-primary" style={{ marginTop: "2.2rem" }}>
              Apply now <ArrowRight size={17} />
            </button>
          </div>

          <div className="bl-hero-figure">
            <img
              src="https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=900"
              alt="Business loan"
            />
            <div className="bl-hero-badge">
              <IndianRupee size={20} color="#2E63E8" />
              <div>
                <div className="n">₹2Cr</div>
                <div className="l">max loan amount</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bl-section">
        <div className="bl-section-head">
          <h2>Why choose our business loan?</h2>
        </div>
        <div className="bl-grid bl-grid-3">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div className="bl-card" key={item.title}>
                <div className="bl-card-icon">
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
      <section className="bl-panel">
        <div className="bl-section">
          <div className="bl-section-head">
            <h2>Business loan benefits</h2>
          </div>
          <div className="bl-grid bl-grid-3">
            {benefits.map((item) => (
              <div className="bl-benefit" key={item}>
                <CheckCircle2 size={20} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility & Documents */}
      <section className="bl-section">
        <div className="bl-grid bl-grid-2">
          <div className="bl-info-card">
            <h2>
              <span className="bl-info-card-icon">
                <TrendingUp size={20} />
              </span>
              Eligibility
            </h2>
            <ul className="bl-info-list">
              {eligibility.map((item) => (
                <li key={item}>
                  <CheckCircle2 size={19} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bl-info-card">
            <h2>
              <span className="bl-info-card-icon">
                <FileText size={20} />
              </span>
              Required documents
            </h2>
            <ul className="bl-info-list">
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
      <section className="bl-panel">
        <div className="bl-section">
          <div className="bl-section-head">
            <h2>Loan application process</h2>
          </div>
          <div className="bl-grid bl-grid-4">
            {steps.map((step, i) => (
              <div className="bl-step" key={step}>
                <div className="bl-step-num">{i + 1}</div>
                <h3>{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Loan Plans */}
      <section className="bl-section">
        <div className="bl-section-head">
          <h2>Loan plans</h2>
        </div>
        <div className="bl-grid bl-grid-3">
          {plans.map((plan) => (
            <div className={`bl-plan ${plan.highlight ? "highlight" : ""}`} key={plan.title}>
              <div className="bl-plan-icon">
                <Briefcase size={22} />
              </div>
              <h3>{plan.title}</h3>
              <div className="spacer" />
              <p className="note">{plan.note}</p>
              <p className="amount bl-mono">{plan.amount}</p>
              <div className="bl-plan-cta">
                <button
                  className={`bl-btn bl-btn-block ${plan.highlight ? "bl-btn-solid-inverse" : "bl-btn-solid"}`}
                >
                  Apply
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bl-panel">
        <div className="bl-section" style={{ maxWidth: "48rem" }}>
          <div className="bl-section-head">
            <h2>Frequently asked questions</h2>
          </div>
          <div>
            {faqs.map((item, i) => (
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
      <section className="bl-cta">
        <div className="bl-cta-inner">
          <div className="bl-cta-icon">
            <Briefcase size={26} />
          </div>
          <h2>Ready to grow your business?</h2>
          <p>Apply today and get the financial support your business needs.</p>
          <button className="bl-btn bl-btn-primary">
            Apply now <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default BusinessLoan;