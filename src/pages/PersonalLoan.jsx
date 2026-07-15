import React, { useState, useEffect } from "react";
import {
  Wallet,
  CheckCircle2,
  FileText,
  Users,
  Clock,
  BadgeCheck,
  ArrowRight,
  IndianRupee,
  ChevronDown,
} from "lucide-react";
import ContactModal from "../modal/ContactModal";

/* ------------------------------------------------------------------
  Same design system as LoanLandingPage.jsx / Navbar.jsx:
  --ink-950 #071A34   --blue-600 #2E63E8   --sky-100 #E9F1FE
  --ink-800 #0E2A52   --blue-500 #3B82F6   --amber-400 #F2B134
  Display: Fraunces · Body: Inter · Data: IBM Plex Mono
------------------------------------------------------------------- */

const FONT_IMPORT_URL =
  "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500;600&display=swap";

const features = [
  {
    icon: IndianRupee,
    title: "Loan up to ₹50 Lakhs",
    desc: "Get instant personal loans with competitive interest rates.",
  },
  {
    icon: Clock,
    title: "24 hour approval",
    desc: "Quick verification and instant approval process.",
  },
  {
    icon: BadgeCheck,
    title: "Low interest rates",
    desc: "Affordable EMIs with flexible repayment options.",
  },
];


const eligibility = [
  "Age between 21 and 60 years",
  "Indian citizen",
  "Minimum monthly income ₹20,000",
  "Salaried or self-employed",
  "Good credit score (650+)",
];

const documents = [
  "Aadhaar card",
  "PAN card",
  "Passport-size photograph",
  "Salary slips (last 3 months)",
  "Bank statement (last 6 months)",
  "Address proof",
];

const steps = ["Fill online application", "Upload documents", "Get loan approved"];

const faqs = [
  {
    q: "How much personal loan can I get?",
    a: "You can get a personal loan up to ₹50 Lakhs depending on your eligibility.",
  },
  {
    q: "How long does approval take?",
    a: "Most applications are approved within 24 hours after verification.",
  },
  {
    q: "Can I prepay the loan?",
    a: "Yes, prepayment options are available according to the loan policy.",
  },
];

function FaqItem({ faq, isOpen, onToggle }) {
  return (
    <div className={`pl-faq ${isOpen ? "open" : ""}`}>
      <button className="pl-faq-q" onClick={onToggle} aria-expanded={isOpen}>
        <span>{faq.q}</span>
        <ChevronDown size={18} className={`pl-faq-chev ${isOpen ? "open" : ""}`} />
      </button>
      <div className="pl-faq-a-wrap">
        <p className="pl-faq-a">{faq.a}</p>
      </div>
    </div>
  );
}

const PersonalLoan = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const [openContact, setOpenContact] = useState(false);

  useEffect(() => {
    if (document.getElementById("pl-font-import")) return;
    const link = document.createElement("link");
    link.id = "pl-font-import";
    link.rel = "stylesheet";
    link.href = FONT_IMPORT_URL;
    document.head.appendChild(link);
  }, []);

  return (
    <div className="pl-root">
      <style>{`
        .pl-root {
          --ink-950:#071A34; --ink-800:#0E2A52; --ink-600:#3A5478;
          --blue-600:#2E63E8; --blue-500:#3B82F6;
          --sky-100:#E9F1FE; --ice-50:#F6F9FF; --amber-400:#F2B134;
          --line: rgba(7,26,52,0.08);
          font-family:'Inter', sans-serif;
          background:var(--ice-50);
          color:var(--ink-950);
          -webkit-font-smoothing:antialiased;
        }
        .pl-root h1, .pl-root h2, .pl-root h3 { font-family:'Fraunces', serif; letter-spacing:-0.01em; }
        .pl-mono { font-family:'IBM Plex Mono', monospace; }

        .pl-btn {
          display:inline-flex; align-items:center; gap:0.55rem;
          padding:0.9rem 1.9rem; border-radius:0.6rem; font-weight:600; font-size:0.96rem;
          cursor:pointer; border:none; transition:all .18s ease;
        }
        .pl-btn:focus-visible { outline:2px solid var(--amber-400); outline-offset:2px; }
        .pl-btn-primary { background:#fff; color:var(--blue-600); }
        .pl-btn-primary:hover { background:var(--sky-100); transform:translateY(-1px); }

        /* Hero */
        .pl-hero { background:radial-gradient(120% 150% at 85% 0%, #123B7C 0%, var(--ink-950) 55%); color:#fff; }
        .pl-hero-inner { max-width:1180px; margin:0 auto; padding:5.5rem 1.5rem; display:grid; gap:3rem; align-items:center; }
        @media (min-width:1024px){ .pl-hero-inner{ grid-template-columns:1.05fr 0.95fr; } }
        .pl-eyebrow { text-transform:uppercase; letter-spacing:0.18em; font-size:0.78rem; font-weight:600; color:#9CC0FF; margin:0 0 1rem; }
        .pl-hero h1 { font-size:clamp(2.4rem,5vw,3.4rem); font-weight:600; margin:0; line-height:1.1; }
        .pl-hero p.lead { margin-top:1.3rem; font-size:1.06rem; color:#C9DBFC; max-width:32rem; line-height:1.65; }
        .pl-hero-figure { position:relative; }
        .pl-hero-figure img { width:100%; border-radius:1.25rem; box-shadow:0 30px 60px -20px rgba(0,0,0,0.5); display:block; }
        .pl-hero-badge {
          position:absolute; bottom:-1.5rem; left:-1.5rem; background:#fff; color:var(--ink-950);
          border-radius:0.9rem; padding:1.1rem 1.4rem; box-shadow:0 20px 40px -18px rgba(7,26,52,0.35);
          display:flex; align-items:center; gap:0.75rem;
        }
        .pl-hero-badge .n { font-family:'IBM Plex Mono', monospace; font-weight:600; font-size:1.4rem; color:var(--blue-600); }
        .pl-hero-badge .l { font-size:0.78rem; color:var(--ink-600); }

        .pl-section { max-width:1180px; margin:0 auto; padding:5.5rem 1.5rem; }
        .pl-section-head { text-align:center; max-width:36rem; margin:0 auto 3.2rem; }
        .pl-section-head h2 { font-size:clamp(1.85rem,3.2vw,2.4rem); font-weight:600; }

        .pl-grid { display:grid; gap:1.75rem; }
        @media (min-width:768px){ .pl-grid-2{ grid-template-columns:repeat(2,1fr);} .pl-grid-3{ grid-template-columns:repeat(3,1fr);} }

        .pl-card { background:#fff; border:1px solid var(--line); border-radius:1rem; padding:2.2rem; text-align:center; transition:box-shadow .2s ease, transform .2s ease; }
        .pl-card:hover { box-shadow:0 18px 40px -22px rgba(7,26,52,0.28); transform:translateY(-2px); }
        .pl-card-icon { width:3.1rem; height:3.1rem; border-radius:0.75rem; background:var(--sky-100); color:var(--blue-600); display:flex; align-items:center; justify-content:center; margin:0 auto 1.25rem; }
        .pl-card h3 { font-size:1.25rem; font-weight:600; margin:0 0 0.6rem; }
        .pl-card p { color:var(--ink-600); font-size:0.95rem; line-height:1.55; margin:0; }

        .pl-panel { background:#fff; }
        .pl-info-card { background:var(--ice-50); border:1px solid var(--line); border-radius:1rem; padding:2.2rem; }
        .pl-info-card h2 { display:flex; align-items:center; gap:0.75rem; font-size:1.5rem; font-weight:600; margin:0; }
        .pl-info-card-icon { width:2.4rem; height:2.4rem; border-radius:0.6rem; background:var(--sky-100); color:var(--blue-600); display:flex; align-items:center; justify-content:center; }
        .pl-info-list { list-style:none; margin:1.6rem 0 0; padding:0; display:flex; flex-direction:column; gap:1rem; }
        .pl-info-list li { display:flex; align-items:center; gap:0.75rem; font-size:0.96rem; color:var(--ink-800); }
        .pl-info-list svg { color:var(--blue-600); flex-shrink:0; }

        .pl-step { background:#fff; border:1px solid var(--line); border-radius:1rem; padding:2.3rem; text-align:center; }
        .pl-step-num { width:2.6rem; height:2.6rem; border-radius:50%; background:var(--ink-950); color:#fff; display:flex; align-items:center; justify-content:center; font-weight:700; margin:0 auto 1.1rem; font-family:'IBM Plex Mono', monospace; }
        .pl-step h3 { font-size:1.08rem; font-weight:600; margin:0; }

        .pl-faq { border:1px solid var(--line); border-radius:0.9rem; background:#fff; overflow:hidden; }
        .pl-faq + .pl-faq { margin-top:0.9rem; }
        .pl-faq-q {
          width:100%; text-align:left; background:none; border:none; cursor:pointer;
          padding:1.35rem 1.6rem; display:flex; align-items:center; justify-content:space-between;
          font-family:'Fraunces', serif; font-weight:600; font-size:1.08rem; color:var(--ink-950);
        }
        .pl-faq-q:focus-visible { outline:2px solid var(--blue-600); outline-offset:-2px; }
        .pl-faq-chev { color:var(--blue-600); transition:transform .2s ease; flex-shrink:0; }
        .pl-faq-chev.open { transform:rotate(180deg); }
        .pl-faq-a-wrap { max-height:0; overflow:hidden; transition:max-height .25s ease; }
        .pl-faq.open .pl-faq-a-wrap { max-height:10rem; }
        .pl-faq-a { margin:0; padding:0 1.6rem 1.4rem; color:var(--ink-600); font-size:0.95rem; line-height:1.6; }

        .pl-cta { background:linear-gradient(120deg, var(--ink-950), #123B7C); color:#fff; text-align:center; }
        .pl-cta-inner { max-width:40rem; margin:0 auto; padding:5rem 1.5rem; }
        .pl-cta-icon { width:3.6rem; height:3.6rem; border-radius:1rem; background:rgba(255,255,255,0.1); display:flex; align-items:center; justify-content:center; margin:0 auto 1.5rem; color:var(--amber-400); }
        .pl-cta h2 { font-size:clamp(1.85rem,3.4vw,2.5rem); font-weight:600; }
        .pl-cta p { margin:1rem 0 2.2rem; color:#C9DBFC; font-size:1.05rem; }
      `}</style>

      {/* Hero */}
      <section className="pl-hero">
        <div className="pl-hero-inner">
          <div>
            <p className="pl-eyebrow">Personal loan</p>
            <h1>Personal loans, approved fast</h1>
            <p className="lead">
              Fund what matters — a wedding, a move, an emergency — with low
              interest rates, minimal documentation, and approval within a day.
            </p>
            <button className="pl-btn pl-btn-primary" onClick={()=>setOpenContact(true)} style={{ marginTop: "2.2rem" }}>
              Apply now <ArrowRight size={17} />
            </button>
          </div>

          <div className="pl-hero-figure">
            <img
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900"
              alt="Personal loan"
            />
            <div className="pl-hero-badge">
              <IndianRupee size={20} color="#2E63E8" />
              <div>
                <div className="n">₹50L</div>
                <div className="l">max loan amount</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="pl-section">
        <div className="pl-section-head">
          <h2>Why choose our personal loan?</h2>
        </div>
        <div className="pl-grid pl-grid-3">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div className="pl-card" key={item.title}>
                <div className="pl-card-icon">
                  <Icon size={24} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Eligibility & Documents */}
      <section className="pl-panel">
        <div className="pl-section" style={{ paddingTop: "0", paddingBottom: "5.5rem" }}>
          <div className="pl-grid pl-grid-2">
            <div className="pl-info-card">
              <h2>
                <span className="pl-info-card-icon">
                  <Users size={20} />
                </span>
                Eligibility
              </h2>
              <ul className="pl-info-list">
                {eligibility.map((item) => (
                  <li key={item}>
                    <CheckCircle2 size={19} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pl-info-card">
              <h2>
                <span className="pl-info-card-icon">
                  <FileText size={20} />
                </span>
                Documents required
              </h2>
              <ul className="pl-info-list">
                {documents.map((item) => (
                  <li key={item}>
                    <CheckCircle2 size={19} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="pl-section">
        <div className="pl-section-head">
          <h2>Apply in 3 easy steps</h2>
        </div>
        <div className="pl-grid pl-grid-3">
          {steps.map((step, i) => (
            <div className="pl-step" key={step}>
              <div className="pl-step-num">{i + 1}</div>
              <h3>{step}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="pl-panel">
        <div className="pl-section" style={{ maxWidth: "48rem" }}>
          <div className="pl-section-head">
            <h2>Frequently asked questions</h2>
          </div>
          <div>
            {faqs.map((faq, i) => (
              <FaqItem
                key={faq.q}
                faq={faq}
                isOpen={openFaq === i}
                onToggle={() => setOpenFaq(openFaq === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pl-cta">
        <div className="pl-cta-inner">
          <div className="pl-cta-icon">
            <Wallet size={26} />
          </div>
          <h2>Need a personal loan today?</h2>
          <p>Apply online in just a few minutes and receive approval within 24 hours.</p>
          <button onClick={()=>setOpenContact(true)} className="pl-btn pl-btn-primary">
            Apply now <ArrowRight size={18} />
          </button>
        </div>
      </section>
      <ContactModal
      isOpen={openContact}
    onClose={()=>setOpenContact(false)}
      />
    </div>
  );
};

export default PersonalLoan;