import React, { useState, useEffect } from "react";
import {
  Truck,
  Bike,
  Car,
  Tractor,
  BatteryCharging,
  IndianRupee,
  CheckCircle2,
  FileText,
  ShieldCheck,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import ContactModal from "../modal/ContactModal";

/* ------------------------------------------------------------------
  Same design system as LoanLandingPage.jsx / Navbar.jsx /
  PersonalLoan.jsx / HomeLoan.jsx / BusinessLoan.jsx / EducationLoan.jsx:
  --ink-950 #071A34   --blue-600 #2E63E8   --sky-100 #E9F1FE
  --ink-800 #0E2A52   --blue-500 #3B82F6   --amber-400 #F2B134
  Display: Fraunces · Body: Inter · Data: IBM Plex Mono
------------------------------------------------------------------- */

const FONT_IMPORT_URL =
  "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500;600&display=swap";

const vehicleTypes = [
  {
    icon: Car,
    title: "Car Loan",
    desc: "Finance new and used cars with affordable EMIs.",
  },
  {
    icon: Bike,
    title: "Bike Loan",
    desc: "Own your dream bike with quick approvals.",
  },
  {
    icon: Truck,
    title: "Commercial Vehicle",
    desc: "Loans for trucks, buses and transport vehicles.",
  },
  {
    icon: Tractor,
    title: "Tractor Loan",
    desc: "Flexible loans for farmers and agriculture needs.",
  },
  {
    icon: BatteryCharging,
    title: "Electric Vehicle",
    desc: "Special financing for electric vehicles.",
  },
  {
    icon: IndianRupee,
    title: "Up to 100% Finance",
    desc: "Finance almost the entire vehicle cost.",
  },
];

const benefits = [
  "Loan up to 100% vehicle value",
  "Interest rates starting from 8.5%",
  "Flexible repayment up to 7 years",
  "Fast online approval",
  "Minimal documentation",
  "No hidden charges",
];

const eligibility = [
  "Indian citizen",
  "Age 21 to 65 years",
  "Salaried or self-employed",
  "Minimum monthly income ₹20,000",
  "Good credit score",
];

const documents = [
  "Aadhaar card",
  "PAN card",
  "Driving license",
  "Passport-size photo",
  "Salary slip / income proof",
  "Bank statement",
];

const steps = ["Apply online", "Upload documents", "Verification", "Loan approval"];

const faqs = [
  {
    q: "Can I finance a used vehicle?",
    a: "Yes. We provide loans for both new and used vehicles.",
  },
  {
    q: "How much loan can I get?",
    a: "Eligible customers can receive up to 100% of the vehicle value.",
  },
  {
    q: "How quickly is the loan approved?",
    a: "Most applications are approved within 24 hours.",
  },
];

function FaqItem({ faq, isOpen, onToggle }) {
  return (
    <div className={`vl-faq ${isOpen ? "open" : ""}`}>
      <button className="vl-faq-q" onClick={onToggle} aria-expanded={isOpen}>
        <span>{faq.q}</span>
        <ChevronDown size={18} className={`vl-faq-chev ${isOpen ? "open" : ""}`} />
      </button>
      <div className="vl-faq-a-wrap">
        <p className="vl-faq-a">{faq.a}</p>
      </div>
    </div>
  );
}

const VehicleLoan = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const [openModal, setOpenModal] = useState();

  useEffect(() => {
    if (document.getElementById("vl-font-import")) return;
    const link = document.createElement("link");
    link.id = "vl-font-import";
    link.rel = "stylesheet";
    link.href = FONT_IMPORT_URL;
    document.head.appendChild(link);
  }, []);

  return (
    <div className="vl-root">
      <style>{`
        .vl-root {
          --ink-950:#071A34; --ink-800:#0E2A52; --ink-600:#3A5478;
          --blue-600:#2E63E8; --blue-500:#3B82F6;
          --sky-100:#E9F1FE; --ice-50:#F6F9FF; --amber-400:#F2B134;
          --line: rgba(7,26,52,0.08);
          font-family:'Inter', sans-serif;
          background:var(--ice-50);
          color:var(--ink-950);
          -webkit-font-smoothing:antialiased;
        }
        .vl-root h1, .vl-root h2, .vl-root h3 { font-family:'Fraunces', serif; letter-spacing:-0.01em; }
        .vl-mono { font-family:'IBM Plex Mono', monospace; }

        .vl-btn {
          display:inline-flex; align-items:center; gap:0.55rem;
          padding:0.9rem 1.9rem; border-radius:0.6rem; font-weight:600; font-size:0.96rem;
          cursor:pointer; border:none; transition:all .18s ease;
        }
        .vl-btn:focus-visible { outline:2px solid var(--amber-400); outline-offset:2px; }
        .vl-btn-primary { background:#fff; color:var(--blue-600); }
        .vl-btn-primary:hover { background:var(--sky-100); transform:translateY(-1px); }

        /* Hero */
        .vl-hero { background:radial-gradient(120% 150% at 85% 0%, #123B7C 0%, var(--ink-950) 55%); color:#fff; }
        .vl-hero-inner { max-width:1180px; margin:0 auto; padding:5rem 1.5rem; display:grid; gap:3rem; align-items:center; }
        @media (min-width:1024px){ .vl-hero-inner{ grid-template-columns:1.05fr 0.95fr; } }
        .vl-eyebrow { text-transform:uppercase; letter-spacing:0.18em; font-size:0.78rem; font-weight:600; color:#9CC0FF; margin:0 0 1rem; }
        .vl-hero h1 { font-size:clamp(2.4rem,5vw,3.4rem); font-weight:600; margin:0; line-height:1.1; }
        .vl-hero p.lead { margin-top:1.3rem; font-size:1.06rem; color:#C9DBFC; max-width:32rem; line-height:1.65; }
        .vl-hero-figure { position:relative; }
        .vl-hero-figure img { width:100%; border-radius:1.25rem; box-shadow:0 30px 60px -20px rgba(0,0,0,0.5); display:block; }
        .vl-hero-badge {
          position:absolute; bottom:-1.5rem; left:-1.5rem; background:#fff; color:var(--ink-950);
          border-radius:0.9rem; padding:1.1rem 1.4rem; box-shadow:0 20px 40px -18px rgba(7,26,52,0.35);
          display:flex; align-items:center; gap:0.75rem;
        }
        .vl-hero-badge .n { font-family:'IBM Plex Mono', monospace; font-weight:600; font-size:1.4rem; color:var(--blue-600); }
        .vl-hero-badge .l { font-size:0.78rem; color:var(--ink-600); }

        .vl-section { max-width:1180px; margin:0 auto; padding:5.5rem 1.5rem; }
        .vl-section-head { text-align:center; max-width:36rem; margin:0 auto 3.2rem; }
        .vl-section-head h2 { font-size:clamp(1.85rem,3.2vw,2.4rem); font-weight:600; }

        .vl-grid { display:grid; gap:1.75rem; }
        @media (min-width:768px){ .vl-grid-2{ grid-template-columns:repeat(2,1fr);} .vl-grid-3{ grid-template-columns:repeat(3,1fr);} }
        @media (min-width:1024px){ .vl-grid-4{ grid-template-columns:repeat(4,1fr);} }

        /* Vehicle type cards — left-aligned, like a spec sheet rather than a centered feature tile */
        .vl-type-card { background:#fff; border:1px solid var(--line); border-radius:1rem; padding:2rem; transition:box-shadow .2s ease, transform .2s ease; }
        .vl-type-card:hover { box-shadow:0 18px 40px -22px rgba(7,26,52,0.28); transform:translateY(-2px); }
        .vl-type-icon { width:3.1rem; height:3.1rem; border-radius:0.75rem; background:var(--sky-100); color:var(--blue-600); display:flex; align-items:center; justify-content:center; margin-bottom:1.25rem; }
        .vl-type-card h3 { font-size:1.3rem; font-weight:600; margin:0 0 0.5rem; }
        .vl-type-card p { color:var(--ink-600); font-size:0.95rem; line-height:1.55; margin:0; }

        .vl-panel { background:#fff; }
        .vl-benefit { display:flex; align-items:center; gap:0.85rem; background:var(--ice-50); border:1px solid var(--line); border-radius:0.85rem; padding:1.15rem 1.3rem; font-size:0.94rem; color:var(--ink-800); }
        .vl-benefit svg { color:var(--blue-600); flex-shrink:0; }

        .vl-info-card { background:var(--ice-50); border:1px solid var(--line); border-radius:1rem; padding:2.2rem; }
        .vl-info-card h2 { display:flex; align-items:center; gap:0.75rem; font-size:1.5rem; font-weight:600; margin:0; }
        .vl-info-card-icon { width:2.4rem; height:2.4rem; border-radius:0.6rem; background:var(--sky-100); color:var(--blue-600); display:flex; align-items:center; justify-content:center; }
        .vl-info-list { list-style:none; margin:1.6rem 0 0; padding:0; display:flex; flex-direction:column; gap:1rem; }
        .vl-info-list li { display:flex; align-items:center; gap:0.75rem; font-size:0.96rem; color:var(--ink-800); }
        .vl-info-list svg { color:var(--blue-600); flex-shrink:0; }

        .vl-step { background:#fff; border:1px solid var(--line); border-radius:1rem; padding:2.1rem 1.6rem; text-align:center; }
        .vl-step-num { width:2.5rem; height:2.5rem; border-radius:50%; background:var(--ink-950); color:#fff; display:flex; align-items:center; justify-content:center; font-weight:700; margin:0 auto 1.1rem; font-family:'IBM Plex Mono', monospace; }
        .vl-step h3 { font-size:1rem; font-weight:600; margin:0; }

        .vl-faq { border:1px solid var(--line); border-radius:0.9rem; background:#fff; overflow:hidden; }
        .vl-faq + .vl-faq { margin-top:0.9rem; }
        .vl-faq-q {
          width:100%; text-align:left; background:none; border:none; cursor:pointer;
          padding:1.35rem 1.6rem; display:flex; align-items:center; justify-content:space-between;
          font-family:'Fraunces', serif; font-weight:600; font-size:1.05rem; color:var(--ink-950);
        }
        .vl-faq-q:focus-visible { outline:2px solid var(--blue-600); outline-offset:-2px; }
        .vl-faq-chev { color:var(--blue-600); transition:transform .2s ease; flex-shrink:0; }
        .vl-faq-chev.open { transform:rotate(180deg); }
        .vl-faq-a-wrap { max-height:0; overflow:hidden; transition:max-height .25s ease; }
        .vl-faq.open .vl-faq-a-wrap { max-height:10rem; }
        .vl-faq-a { margin:0; padding:0 1.6rem 1.4rem; color:var(--ink-600); font-size:0.95rem; line-height:1.6; }

        .vl-cta { background:linear-gradient(120deg, var(--ink-950), #123B7C); color:#fff; text-align:center; }
        .vl-cta-inner { max-width:40rem; margin:0 auto; padding:5rem 1.5rem; }
        .vl-cta-icon { width:3.6rem; height:3.6rem; border-radius:1rem; background:rgba(255,255,255,0.1); display:flex; align-items:center; justify-content:center; margin:0 auto 1.5rem; color:var(--amber-400); }
        .vl-cta h2 { font-size:clamp(1.85rem,3.4vw,2.5rem); font-weight:600; }
        .vl-cta p { margin:1rem 0 2.2rem; color:#C9DBFC; font-size:1.05rem; }
      `}</style>

      {/* Hero */}
      <section className="vl-hero">
        <div className="vl-hero-inner">
          <div>
            <p className="vl-eyebrow">Fast · Secure · Affordable</p>
            <h1>Vehicle loan</h1>
            <p className="lead">
              Finance your dream vehicle with quick approval, attractive
              interest rates and flexible repayment.
            </p>
            <button onClick={() => setOpenModal(true)} className="vl-btn vl-btn-primary" style={{ marginTop: "2.2rem" }}>
              Apply now <ArrowRight size={17} />
            </button>
          </div>

          <div className="vl-hero-figure">
            <img
              src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=900"
              alt="Vehicle loan"
            />
            <div className="vl-hero-badge">
              <IndianRupee size={20} color="#2E63E8" />
              <div>
                <div className="n">100%</div>
                <div className="l">vehicle value financed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Types */}
      <section className="vl-section">
        <div className="vl-section-head">
          <h2>Vehicle loans we offer</h2>
        </div>
        <div className="vl-grid vl-grid-3">
          {vehicleTypes.map((item) => {
            const Icon = item.icon;
            return (
              <div className="vl-type-card" key={item.title}>
                <div className="vl-type-icon">
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
      <section className="vl-panel">
        <div className="vl-section">
          <div className="vl-section-head">
            <h2>Loan benefits</h2>
          </div>
          <div className="vl-grid vl-grid-3">
            {benefits.map((item) => (
              <div className="vl-benefit" key={item}>
                <CheckCircle2 size={20} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility & Documents */}
      <section className="vl-section">
        <div className="vl-grid vl-grid-2">
          <div className="vl-info-card">
            <h2>
              <span className="vl-info-card-icon">
                <ShieldCheck size={20} />
              </span>
              Eligibility
            </h2>
            <ul className="vl-info-list">
              {eligibility.map((item) => (
                <li key={item}>
                  <CheckCircle2 size={19} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="vl-info-card">
            <h2>
              <span className="vl-info-card-icon">
                <FileText size={20} />
              </span>
              Documents required
            </h2>
            <ul className="vl-info-list">
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
      <section className="vl-panel">
        <div className="vl-section">
          <div className="vl-section-head">
            <h2>Loan process</h2>
          </div>
          <div className="vl-grid vl-grid-4">
            {steps.map((step, i) => (
              <div className="vl-step" key={step}>
                <div className="vl-step-num">{i + 1}</div>
                <h3>{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="vl-section" style={{ maxWidth: "48rem" }}>
        <div className="vl-section-head">
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
      </section>

      {/* CTA */}
      <section className="vl-cta">
        <div className="vl-cta-inner">
          <div className="vl-cta-icon">
            <Truck size={26} />
          </div>
          <h2>Ready to finance your vehicle?</h2>
          <p>Apply today and get quick approval with flexible EMI options.</p>
          <button onClick={() => setOpenModal(true)} className="vl-btn vl-btn-primary">
            Apply now <ArrowRight size={18} />
          </button>
        </div>
      </section>
      <ContactModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      />
    </div>
  );
};

export default VehicleLoan;