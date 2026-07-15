import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Home,
  Briefcase,
  Car,
  GraduationCap,
  Wallet,
  Calculator,
  Clock3,
  BadgeCheck,
  ShieldCheck,
  Star,
  X,
  TrendingUp,
} from "lucide-react";

/* ------------------------------------------------------------------
  DESIGN TOKENS
  Display face  : "Fraunces"      – a serif with real financial weight,
                   used only on headlines, kept restrained.
  Body face     : "Inter"         – quiet, legible, does the reading work.
  Data face     : "IBM Plex Mono" – for rates, EMI figures, the ticker.

  Palette
  --ink-950  #071A34  deepest navy, headline color / hero bg
  --ink-800  #0E2A52  secondary navy, card headings
  --blue-600 #2E63E8  primary action blue
  --blue-500 #3B82F6  hover / secondary accent
  --sky-100  #E9F1FE  soft section background
  --ice-50   #F6F9FF  page background
  --amber-400 #F2B134 single warm accent, used ONLY on the rate ticker
                       and one highlight word — never on buttons.
------------------------------------------------------------------- */

const FONT_IMPORT_URL =
  "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500;600&display=swap";

const loans = [
  {
    title: "Personal Loan",
    rate: "10.5%",
    icon: Wallet,
    desc: "Instant approval with minimal documentation.",
  },
  {
    title: "Home Loan",
    rate: "8.2%",
    icon: Home,
    desc: "Affordable interest rates for your dream home.",
  },
  {
    title: "Business Loan",
    rate: "11.0%",
    icon: Briefcase,
    desc: "Grow your business with flexible financing.",
  },
  {
    title: "Vehicle Loan",
    rate: "9.4%",
    icon: Car,
    desc: "Drive your dream car with easy EMIs.",
  },
  {
    title: "Education Loan",
    rate: "9.9%",
    icon: GraduationCap,
    desc: "Support your education with flexible repayment.",
  },
  {
    title: "EMI Calculator",
    rate: "—",
    icon: Calculator,
    desc: "Estimate monthly installments instantly.",
  },
];

const features = [
  {
    icon: Clock3,
    title: "Quick Approval",
    desc: "Loan approval within 24 hours.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Process",
    desc: "100% encrypted and secure application.",
  },
  {
    icon: BadgeCheck,
    title: "Lowest Interest",
    desc: "Competitive interest rates for every customer.",
  },
];

const testimonials = [
  {
    name: "Rahul Sharma",
    text: "The loan process was quick and hassle-free. Highly recommended!",
  },
  {
    name: "Priya Patel",
    text: "Excellent customer service and transparent pricing.",
  },
  {
    name: "Amit Verma",
    text: "Got my business loan approved in just one day.",
  },
];

const steps = ["Fill Online Application", "Upload Documents", "Get Loan Approved"];

const stats = [
  ["50K+", "Happy Customers"],
  ["₹500Cr+", "Loans Approved"],
  ["24 Hrs", "Fast Approval"],
  ["99%", "Customer Satisfaction"],
];

/* ---------------------------- Contact Modal ---------------------------- */

function ContactModal({ isOpen, onClose, context }) {
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  return (
    <div
      className="lp-overlay"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div className="lp-modal" onClick={(e) => e.stopPropagation()}>
        <button className="lp-modal-close" onClick={onClose} aria-label="Close">
          <X size={18} />
        </button>

        {submitted ? (
          <div className="lp-modal-success">
            <CheckCircle2 size={40} />
            <h3>Request received</h3>
            <p>A loan officer will call you within 24 hours.</p>
          </div>
        ) : (
          <>
            <p className="lp-modal-eyebrow">Apply now</p>
            <h3 className="lp-modal-title">
              {context ? context : "Talk to a loan officer"}
            </h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <label>
                Full name
                <input type="text" required placeholder="Your name" />
              </label>
              <label>
                Phone number
                <input type="tel" required placeholder="10-digit mobile number" />
              </label>
              <button type="submit" className="lp-btn lp-btn-primary lp-btn-block">
                Request a callback
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

/* ------------------------------- Ticker -------------------------------- */

function RateTicker() {
  const tape = [...loans.filter((l) => l.rate !== "—"), ...loans.filter((l) => l.rate !== "—")];
  return (
    <div className="lp-ticker" aria-hidden="true">
      <div className="lp-ticker-track">
        {tape.map((l, i) => (
          <span className="lp-ticker-item" key={i}>
            <TrendingUp size={14} />
            {l.title.replace(" Loan", "")}
            <b>{l.rate} p.a.</b>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ----------------------------- Main Page -------------------------------- */

const LoanLandingPage = () => {
  const [openContact, setOpenContact] = useState(false);
  const [modalContext, setModalContext] = useState("");

  useEffect(() => {
    if (document.getElementById("lp-font-import")) return;
    const link = document.createElement("link");
    link.id = "lp-font-import";
    link.rel = "stylesheet";
    link.href = FONT_IMPORT_URL;
    document.head.appendChild(link);
  }, []);

  const openFor = (title) => {
    setModalContext(title ? `Get in touch about your ${title}` : "");
    setOpenContact(true);
  };

  return (
    <div className="lp-root">
      <style>{`
        .lp-root {
          --ink-950:#071A34;
          --ink-800:#0E2A52;
          --ink-600:#3A5478;
          --blue-600:#2E63E8;
          --blue-500:#3B82F6;
          --sky-100:#E9F1FE;
          --ice-50:#F6F9FF;
          --amber-400:#F2B134;
          --line: rgba(7,26,52,0.08);
          font-family:'Inter', sans-serif;
          background:var(--ice-50);
          color:var(--ink-950);
          -webkit-font-smoothing:antialiased;
        }
        .lp-root h1, .lp-root h2, .lp-root h3 {
          font-family:'Fraunces', serif;
          letter-spacing:-0.01em;
        }
        .lp-mono { font-family:'IBM Plex Mono', monospace; }

        .lp-btn {
          display:inline-flex; align-items:center; gap:0.5rem;
          padding:0.85rem 1.75rem; border-radius:0.6rem;
          font-weight:600; font-size:0.95rem; cursor:pointer;
          border:1px solid transparent; transition:all .18s ease;
        }
        .lp-btn:focus-visible { outline:2px solid var(--amber-400); outline-offset:2px; }
        .lp-btn-primary { background:#fff; color:var(--blue-600); }
        .lp-btn-primary:hover { background:var(--sky-100); transform:translateY(-1px); }
        .lp-btn-outline { border-color:rgba(255,255,255,0.55); color:#fff; }
        .lp-btn-outline:hover { background:rgba(255,255,255,0.12); }
        .lp-btn-solid { background:var(--blue-600); color:#fff; }
        .lp-btn-solid:hover { background:var(--blue-500); transform:translateY(-1px); }
        .lp-btn-block { width:100%; justify-content:center; }

        /* Hero */
        .lp-hero {
          background:radial-gradient(120% 140% at 15% 0%, #123B7C 0%, var(--ink-950) 55%);
          color:#fff; position:relative; overflow:hidden;
        }
        .lp-hero::after{
          content:''; position:absolute; inset:0;
          background:
            linear-gradient(180deg, rgba(46,99,232,0) 0%, rgba(46,99,232,0.18) 100%);
          pointer-events:none;
        }
        .lp-hero-inner {
          max-width:1180px; margin:0 auto; padding:5.5rem 1.5rem 3.5rem;
          display:grid; gap:3rem; align-items:center;
        }
        @media (min-width:1024px){ .lp-hero-inner{ grid-template-columns:1.1fr 0.9fr; } }
        .lp-eyebrow {
          text-transform:uppercase; letter-spacing:0.18em; font-size:0.78rem;
          font-weight:600; color:#9CC0FF; margin:0 0 1rem;
        }
        .lp-hero h1 { font-size:clamp(2.4rem, 5vw, 3.6rem); line-height:1.08; font-weight:600; margin:0; }
        .lp-hero h1 em { font-style:normal; color:var(--amber-400); }
        .lp-hero p.lead { margin-top:1.4rem; font-size:1.08rem; color:#C9DBFC; max-width:34rem; line-height:1.6; }
        .lp-hero-actions { display:flex; flex-wrap:wrap; gap:1rem; margin-top:2.2rem; }
        .lp-hero-card {
          background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.14);
          border-radius:1rem; padding:1.75rem; backdrop-filter:blur(6px);
        }
        .lp-hero-card-row { display:flex; justify-content:space-between; padding:0.65rem 0; border-bottom:1px solid rgba(255,255,255,0.1); font-size:0.92rem; }
        .lp-hero-card-row:last-child { border-bottom:none; }
        .lp-hero-card-row b { color:var(--amber-400); }

        /* Ticker — signature element */
        .lp-ticker { background:var(--ink-800); overflow:hidden; border-top:1px solid rgba(255,255,255,0.08); }
        .lp-ticker-track { display:flex; width:max-content; gap:2.5rem; padding:0.6rem 0; animation:lp-scroll 26s linear infinite; }
        .lp-ticker-item { display:flex; align-items:center; gap:0.5rem; color:#BFD6FF; font-family:'IBM Plex Mono', monospace; font-size:0.82rem; white-space:nowrap; }
        .lp-ticker-item svg { color:var(--amber-400); }
        .lp-ticker-item b { color:#fff; margin-left:0.15rem; }
        @keyframes lp-scroll { from{ transform:translateX(0);} to{ transform:translateX(-50%);} }
        @media (prefers-reduced-motion: reduce) { .lp-ticker-track{ animation:none; } }

        .lp-section { max-width:1180px; margin:0 auto; padding:5.5rem 1.5rem; }
        .lp-section-head { text-align:center; max-width:38rem; margin:0 auto 3.2rem; }
        .lp-section-head h2 { font-size:clamp(1.9rem,3.4vw,2.5rem); font-weight:600; }
        .lp-section-head p { color:var(--ink-600); margin-top:0.75rem; font-size:1.02rem; }

        .lp-grid { display:grid; gap:1.75rem; }
        @media (min-width:768px){ .lp-grid-2{ grid-template-columns:repeat(2,1fr);} }
        @media (min-width:1024px){ .lp-grid-3{ grid-template-columns:repeat(3,1fr);} }

        .lp-card {
          background:#fff; border:1px solid var(--line); border-radius:1rem;
          padding:2rem; transition:box-shadow .2s ease, transform .2s ease;
        }
        .lp-card:hover { box-shadow:0 18px 40px -22px rgba(7,26,52,0.28); transform:translateY(-2px); }
        .lp-card-icon {
          width:3.1rem; height:3.1rem; border-radius:0.75rem;
          background:var(--sky-100); color:var(--blue-600);
          display:flex; align-items:center; justify-content:center; margin-bottom:1.25rem;
        }
        .lp-card h3 { font-size:1.3rem; font-weight:600; margin:0 0 0.5rem; color:var(--ink-950); }
        .lp-card-rate { font-family:'IBM Plex Mono', monospace; font-size:0.8rem; color:var(--blue-600); font-weight:600; margin-bottom:0.6rem; display:block; }
        .lp-card p { color:var(--ink-600); font-size:0.95rem; line-height:1.55; margin:0; }
        .lp-card-link {
          margin-top:1.4rem; background:none; border:none; padding:0; cursor:pointer;
          display:flex; align-items:center; gap:0.4rem; color:var(--blue-600); font-weight:600; font-size:0.92rem;
        }
        .lp-card-link:hover { color:var(--ink-950); }

        .lp-panel { background:#fff; }
        .lp-feature { text-align:center; background:var(--sky-100); border-radius:1rem; padding:2.4rem 1.75rem; }
        .lp-feature .lp-card-icon { margin:0 auto 1.1rem; background:#fff; }

        .lp-step { background:#fff; border:1px solid var(--line); border-radius:1rem; padding:2.2rem; text-align:center; position:relative; }
        .lp-step-num {
          width:2.6rem; height:2.6rem; border-radius:50%; background:var(--ink-950); color:#fff;
          display:flex; align-items:center; justify-content:center; font-weight:700; margin:0 auto 1.1rem;
          font-family:'IBM Plex Mono', monospace;
        }
        .lp-step h3 { font-size:1.05rem; font-weight:600; margin:0 0 0.9rem; color:var(--ink-950); }

        .lp-stats { background:var(--ink-950); color:#fff; }
        .lp-stats-grid { display:grid; gap:2rem; text-align:center; }
        @media (min-width:768px){ .lp-stats-grid{ grid-template-columns:repeat(4,1fr);} }
        .lp-stats-grid h2 { font-family:'IBM Plex Mono', monospace; font-size:2.6rem; font-weight:600; color:var(--amber-400); margin:0; }
        .lp-stats-grid p { margin:0.4rem 0 0; color:#C9DBFC; font-size:0.92rem; }

        .lp-testimonial { background:#fff; border:1px solid var(--line); border-radius:1rem; padding:2.2rem; }
        .lp-stars { display:flex; gap:0.2rem; color:var(--amber-400); }
        .lp-testimonial p.quote { color:var(--ink-800); margin:1.2rem 0 0; font-size:0.98rem; line-height:1.6; }
        .lp-testimonial h4 { margin:1.5rem 0 0; font-weight:600; font-size:0.92rem; color:var(--ink-600); }

        .lp-cta { background:linear-gradient(120deg, var(--ink-950), #123B7C); color:#fff; text-align:center; }
        .lp-cta-inner { max-width:44rem; margin:0 auto; padding:5rem 1.5rem; }
        .lp-cta h2 { font-size:clamp(1.9rem,3.6vw,2.6rem); font-weight:600; }
        .lp-cta p { margin:1rem 0 2.2rem; color:#C9DBFC; }

        .lp-overlay {
          position:fixed; inset:0; background:rgba(7,26,52,0.55); backdrop-filter:blur(2px);
          display:flex; align-items:center; justify-content:center; padding:1.25rem; z-index:50;
        }
        .lp-modal {
          background:#fff; border-radius:1rem; padding:2.4rem; width:100%; max-width:26rem;
          position:relative; box-shadow:0 30px 60px -20px rgba(7,26,52,0.4);
        }
        .lp-modal-close {
          position:absolute; top:1rem; right:1rem; background:var(--sky-100); border:none;
          width:2.2rem; height:2.2rem; border-radius:50%; display:flex; align-items:center; justify-content:center;
          cursor:pointer; color:var(--ink-800);
        }
        .lp-modal-eyebrow { text-transform:uppercase; letter-spacing:0.14em; font-size:0.72rem; font-weight:700; color:var(--blue-600); margin:0 0 0.5rem; }
        .lp-modal-title { font-size:1.3rem; font-weight:600; margin:0 0 1.5rem; color:var(--ink-950); }
        .lp-modal form { display:flex; flex-direction:column; gap:1.1rem; }
        .lp-modal label { display:flex; flex-direction:column; gap:0.4rem; font-size:0.85rem; font-weight:600; color:var(--ink-800); }
        .lp-modal input {
          border:1px solid var(--line); border-radius:0.55rem; padding:0.7rem 0.85rem;
          font-size:0.95rem; font-family:'Inter', sans-serif;
        }
        .lp-modal input:focus-visible { outline:2px solid var(--blue-600); outline-offset:1px; }
        .lp-modal-success { text-align:center; color:var(--ink-950); }
        .lp-modal-success svg { color:var(--blue-600); margin-bottom:0.75rem; }
        .lp-modal-success h3 { margin:0 0 0.4rem; font-size:1.2rem; }
        .lp-modal-success p { color:var(--ink-600); margin:0; font-size:0.92rem; }
      `}</style>

      {/* Hero */}
      <section className="lp-hero">
        <div className="lp-hero-inner">
          <div>
            <p className="lp-eyebrow">Fast · Secure · Trusted</p>
            <h1>
              Get your dream loan
              <br />
              approved in <em>24 hours</em>
            </h1>
            <p className="lead">
              Personal, home, business, education and vehicle loans — with
              transparent rates and minimal paperwork, from application to
              disbursal.
            </p>
            <div className="lp-hero-actions">
              <button className="lp-btn lp-btn-primary" onClick={() => openFor("")}>
                Apply now <ArrowRight size={17} />
              </button>
              <button className="lp-btn lp-btn-outline">Learn more</button>
            </div>
          </div>

          <div className="lp-hero-card">
            <p style={{ margin: "0 0 1rem", color: "#9CC0FF", fontSize: "0.82rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em" }}>
              Today's starting rates
            </p>
            {loans
              .filter((l) => l.rate !== "—")
              .slice(0, 4)
              .map((l) => (
                <div className="lp-hero-card-row" key={l.title}>
                  <span>{l.title}</span>
                  <b className="lp-mono">{l.rate} p.a.</b>
                </div>
              ))}
          </div>
        </div>
        <RateTicker />
      </section>

      {/* Loan Categories */}
      <section className="lp-section">
        <div className="lp-section-head">
          <h2>Our loan services</h2>
          <p>Choose the loan that best suits your needs.</p>
        </div>

        <div className="lp-grid lp-grid-2 lp-grid-3">
          {loans.map((loan) => {
            const Icon = loan.icon;
            return (
              <div className="lp-card" key={loan.title}>
                <div className="lp-card-icon">
                  <Icon size={24} />
                </div>
                {loan.rate !== "—" && (
                  <span className="lp-card-rate">From {loan.rate} p.a.</span>
                )}
                <h3>{loan.title}</h3>
                <p>{loan.desc}</p>
                <button className="lp-card-link" onClick={() => openFor(loan.title)}>
                  Read more <ArrowRight size={16} />
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="lp-panel">
        <div className="lp-section">
          <div className="lp-section-head">
            <h2>Why choose us?</h2>
          </div>
          <div className="lp-grid lp-grid-3">
            {features.map((item) => {
              const Icon = item.icon;
              return (
                <div className="lp-feature" key={item.title}>
                  <div className="lp-card-icon">
                    <Icon size={24} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="lp-section">
        <div className="lp-section-head">
          <h2>Apply in 3 easy steps</h2>
        </div>
        <div className="lp-grid lp-grid-3">
          {steps.map((step, i) => (
            <div className="lp-step" key={step}>
              <div className="lp-step-num">{i + 1}</div>
              <h3>{step}</h3>
              <CheckCircle2 size={22} color="#2E63E8" style={{ margin: "0 auto" }} />
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="lp-stats">
        <div className="lp-section">
          <div className="lp-stats-grid">
            {stats.map(([value, label]) => (
              <div key={label}>
                <h2>{value}</h2>
                <p>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="lp-section">
        <div className="lp-section-head">
          <h2>What our customers say</h2>
        </div>
        <div className="lp-grid lp-grid-3">
          {testimonials.map((item) => (
            <div className="lp-testimonial" key={item.name}>
              <div className="lp-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} fill="currentColor" size={16} />
                ))}
              </div>
              <p className="quote">"{item.text}"</p>
              <h4>{item.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="lp-cta">
        <div className="lp-cta-inner">
          <h2>Ready to apply for your loan?</h2>
          <p>Get instant approval with low interest rates and easy repayment options.</p>
          <button className="lp-btn lp-btn-solid" onClick={() => openFor("")}>
            Apply now <ArrowRight size={17} />
          </button>
        </div>
      </section>

      <ContactModal
        isOpen={openContact}
        onClose={() => setOpenContact(false)}
        context={modalContext}
      />
    </div>
  );
};

export default LoanLandingPage;