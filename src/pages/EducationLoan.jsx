import React, { useState, useEffect } from "react";
import {
  GraduationCap,
  IndianRupee,
  CheckCircle2,
  FileText,
  Globe,
  Clock,
  BadgeCheck,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import ContactModal from "../modal/ContactModal";

/* ------------------------------------------------------------------
  Same design system as LoanLandingPage.jsx / Navbar.jsx /
  PersonalLoan.jsx / HomeLoan.jsx / BusinessLoan.jsx:
  --ink-950 #071A34   --blue-600 #2E63E8   --sky-100 #E9F1FE
  --ink-800 #0E2A52   --blue-500 #3B82F6   --amber-400 #F2B134
  Display: Fraunces · Body: Inter · Data: IBM Plex Mono
------------------------------------------------------------------- */

const FONT_IMPORT_URL =
  "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500;600&display=swap";

const highlights = [
  {
    icon: IndianRupee,
    title: "Loan up to ₹1.5 Crore",
    desc: "Finance higher education in India and abroad.",
  },
  {
    icon: Clock,
    title: "Quick approval",
    desc: "Fast processing with minimal paperwork.",
  },
  {
    icon: BadgeCheck,
    title: "Affordable interest",
    desc: "Low interest rates with flexible repayment options.",
  },
];

const benefits = [
  "100% tuition fee coverage",
  "Living & hostel expenses",
  "Books & laptop expenses",
  "Travel expenses for overseas study",
  "Flexible repayment up to 15 years",
  "Moratorium during course period",
];

const eligibility = [
  "Indian citizen",
  "Admission to a recognized institution",
  "Age between 18–35 years",
  "Co-applicant (parent/guardian)",
  "Good academic record",
];

const documents = [
  "Aadhaar card",
  "PAN card",
  "Admission letter",
  "Academic mark sheets",
  "Passport (for overseas studies)",
  "Income proof of co-applicant",
];

const steps = ["Apply online", "Upload documents", "Verification", "Loan sanction"];

const destinations = ["India", "USA", "Canada", "United Kingdom", "Australia", "Germany"];

const faqs = [
  {
    question: "What expenses are covered?",
    answer:
      "Tuition fees, hostel fees, books, laptops, travel expenses, and other education-related costs.",
  },
  {
    question: "Can I apply for overseas education?",
    answer: "Yes. We provide education loans for universities in India and abroad.",
  },
  {
    question: "When does repayment begin?",
    answer:
      "Repayment usually starts after the course completion plus the applicable moratorium period.",
  },
];

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div className={`el-faq ${isOpen ? "open" : ""}`}>
      <button className="el-faq-q" onClick={onToggle} aria-expanded={isOpen}>
        <span>{item.question}</span>
        <ChevronDown size={18} className={`el-faq-chev ${isOpen ? "open" : ""}`} />
      </button>
      <div className="el-faq-a-wrap">
        <p className="el-faq-a">{item.answer}</p>
      </div>
    </div>
  );
}

const EducationLoan = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const [openModal, setOpenModal] = useState();

  useEffect(() => {
    if (document.getElementById("el-font-import")) return;
    const link = document.createElement("link");
    link.id = "el-font-import";
    link.rel = "stylesheet";
    link.href = FONT_IMPORT_URL;
    document.head.appendChild(link);
  }, []);

  return (
    <div className="el-root">
      <style>{`
        .el-root {
          --ink-950:#071A34; --ink-800:#0E2A52; --ink-600:#3A5478;
          --blue-600:#2E63E8; --blue-500:#3B82F6;
          --sky-100:#E9F1FE; --ice-50:#F6F9FF; --amber-400:#F2B134;
          --line: rgba(7,26,52,0.08);
          font-family:'Inter', sans-serif;
          background:var(--ice-50);
          color:var(--ink-950);
          -webkit-font-smoothing:antialiased;
        }
        .el-root h1, .el-root h2, .el-root h3 { font-family:'Fraunces', serif; letter-spacing:-0.01em; }
        .el-mono { font-family:'IBM Plex Mono', monospace; }

        .el-btn {
          display:inline-flex; align-items:center; gap:0.55rem;
          padding:0.9rem 1.9rem; border-radius:0.6rem; font-weight:600; font-size:0.96rem;
          cursor:pointer; border:none; transition:all .18s ease;
        }
        .el-btn:focus-visible { outline:2px solid var(--amber-400); outline-offset:2px; }
        .el-btn-primary { background:#fff; color:var(--blue-600); }
        .el-btn-primary:hover { background:var(--sky-100); transform:translateY(-1px); }

        /* Hero */
        .el-hero { background:radial-gradient(120% 150% at 85% 0%, #123B7C 0%, var(--ink-950) 55%); color:#fff; }
        .el-hero-inner { max-width:1180px; margin:0 auto; padding:5rem 1.5rem; display:grid; gap:3rem; align-items:center; }
        @media (min-width:1024px){ .el-hero-inner{ grid-template-columns:1.05fr 0.95fr; } }
        .el-eyebrow { text-transform:uppercase; letter-spacing:0.18em; font-size:0.78rem; font-weight:600; color:#9CC0FF; margin:0 0 1rem; }
        .el-hero h1 { font-size:clamp(2.4rem,5vw,3.4rem); font-weight:600; margin:0; line-height:1.1; }
        .el-hero p.lead { margin-top:1.3rem; font-size:1.06rem; color:#C9DBFC; max-width:32rem; line-height:1.65; }
        .el-hero-figure { position:relative; }
        .el-hero-figure img { width:100%; border-radius:1.25rem; box-shadow:0 30px 60px -20px rgba(0,0,0,0.5); display:block; }
        .el-hero-badge {
          position:absolute; bottom:-1.5rem; left:-1.5rem; background:#fff; color:var(--ink-950);
          border-radius:0.9rem; padding:1.1rem 1.4rem; box-shadow:0 20px 40px -18px rgba(7,26,52,0.35);
          display:flex; align-items:center; gap:0.75rem;
        }
        .el-hero-badge .n { font-family:'IBM Plex Mono', monospace; font-weight:600; font-size:1.4rem; color:var(--blue-600); }
        .el-hero-badge .l { font-size:0.78rem; color:var(--ink-600); }

        .el-section { max-width:1180px; margin:0 auto; padding:5.5rem 1.5rem; }
        .el-section-head { text-align:center; max-width:36rem; margin:0 auto 3.2rem; }
        .el-section-head h2 { font-size:clamp(1.85rem,3.2vw,2.4rem); font-weight:600; }

        .el-grid { display:grid; gap:1.75rem; }
        @media (min-width:768px){ .el-grid-2{ grid-template-columns:repeat(2,1fr);} .el-grid-3{ grid-template-columns:repeat(3,1fr);} }
        @media (min-width:1024px){ .el-grid-4{ grid-template-columns:repeat(4,1fr);} }
        @media (min-width:640px){ .el-grid-dest{ grid-template-columns:repeat(3,1fr);} }
        .el-grid-dest { display:grid; grid-template-columns:repeat(2,1fr); gap:1.5rem; }

        .el-card { background:#fff; border:1px solid var(--line); border-radius:1rem; padding:2.2rem; text-align:center; transition:box-shadow .2s ease, transform .2s ease; }
        .el-card:hover { box-shadow:0 18px 40px -22px rgba(7,26,52,0.28); transform:translateY(-2px); }
        .el-card-icon { width:3.1rem; height:3.1rem; border-radius:0.75rem; background:var(--sky-100); color:var(--blue-600); display:flex; align-items:center; justify-content:center; margin:0 auto 1.25rem; }
        .el-card h3 { font-size:1.25rem; font-weight:600; margin:0 0 0.6rem; }
        .el-card p { color:var(--ink-600); font-size:0.95rem; line-height:1.55; margin:0; }

        .el-panel { background:#fff; }

        .el-benefit { display:flex; align-items:center; gap:0.85rem; background:var(--ice-50); border:1px solid var(--line); border-radius:0.85rem; padding:1.15rem 1.3rem; font-size:0.94rem; color:var(--ink-800); }
        .el-benefit svg { color:var(--blue-600); flex-shrink:0; }

        .el-info-card { background:var(--ice-50); border:1px solid var(--line); border-radius:1rem; padding:2.2rem; }
        .el-info-card h2 { font-size:1.5rem; font-weight:600; margin:0 0 1.6rem; }
        .el-info-list { list-style:none; margin:0; padding:0; display:flex; flex-direction:column; gap:1rem; }
        .el-info-list li { display:flex; align-items:center; gap:0.75rem; font-size:0.96rem; color:var(--ink-800); }
        .el-info-list svg { color:var(--blue-600); flex-shrink:0; }

        .el-step { background:#fff; border:1px solid var(--line); border-radius:1rem; padding:2.1rem 1.6rem; text-align:center; }
        .el-step-num { width:2.5rem; height:2.5rem; border-radius:50%; background:var(--ink-950); color:#fff; display:flex; align-items:center; justify-content:center; font-weight:700; margin:0 auto 1.1rem; font-family:'IBM Plex Mono', monospace; }
        .el-step h3 { font-size:1rem; font-weight:600; margin:0; }

        .el-dest {
          background:#fff; border:1px solid var(--line); border-radius:1rem; padding:1.9rem 1.2rem;
          text-align:center; transition:box-shadow .2s ease, transform .2s ease, border-color .2s ease;
          display:flex; flex-direction:column; align-items:center; gap:0.9rem;
        }
        .el-dest:hover { box-shadow:0 18px 36px -20px rgba(7,26,52,0.26); transform:translateY(-2px); border-color:var(--blue-600); }
        .el-dest-icon { width:2.9rem; height:2.9rem; border-radius:0.7rem; background:var(--sky-100); color:var(--blue-600); display:flex; align-items:center; justify-content:center; }
        .el-dest h3 { font-size:1.05rem; font-weight:600; margin:0; }

        .el-faq { border:1px solid var(--line); border-radius:0.9rem; background:#fff; overflow:hidden; }
        .el-faq + .el-faq { margin-top:0.9rem; }
        .el-faq-q {
          width:100%; text-align:left; background:none; border:none; cursor:pointer;
          padding:1.35rem 1.6rem; display:flex; align-items:center; justify-content:space-between;
          font-family:'Fraunces', serif; font-weight:600; font-size:1.05rem; color:var(--ink-950);
        }
        .el-faq-q:focus-visible { outline:2px solid var(--blue-600); outline-offset:-2px; }
        .el-faq-chev { color:var(--blue-600); transition:transform .2s ease; flex-shrink:0; }
        .el-faq-chev.open { transform:rotate(180deg); }
        .el-faq-a-wrap { max-height:0; overflow:hidden; transition:max-height .25s ease; }
        .el-faq.open .el-faq-a-wrap { max-height:10rem; }
        .el-faq-a { margin:0; padding:0 1.6rem 1.4rem; color:var(--ink-600); font-size:0.95rem; line-height:1.6; }

        .el-cta { background:linear-gradient(120deg, var(--ink-950), #123B7C); color:#fff; text-align:center; }
        .el-cta-inner { max-width:40rem; margin:0 auto; padding:5rem 1.5rem; }
        .el-cta-icon { width:3.6rem; height:3.6rem; border-radius:1rem; background:rgba(255,255,255,0.1); display:flex; align-items:center; justify-content:center; margin:0 auto 1.5rem; color:var(--amber-400); }
        .el-cta h2 { font-size:clamp(1.85rem,3.4vw,2.5rem); font-weight:600; }
        .el-cta p { margin:1rem 0 2.2rem; color:#C9DBFC; font-size:1.05rem; }
      `}</style>

      {/* Hero */}
      <section className="el-hero">
        <div className="el-hero-inner">
          <div>
            <p className="el-eyebrow">Learn · Grow · Achieve</p>
            <h1>Education loan</h1>
            <p className="lead">
              Achieve your academic dreams with affordable education loans
              for studies in India and abroad.
            </p>
            <button onClick={() => setOpenModal(true)} className="el-btn el-btn-primary" style={{ marginTop: "2.2rem" }}>
              Apply now <ArrowRight size={17} />
            </button>
          </div>

          <div className="el-hero-figure">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=900"
              alt="Education loan"
            />
            <div className="el-hero-badge">
              <IndianRupee size={20} color="#2E63E8" />
              <div>
                <div className="n">₹1.5Cr</div>
                <div className="l">max loan amount</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="el-section">
        <div className="el-section-head">
          <h2>Why choose our education loan?</h2>
        </div>
        <div className="el-grid el-grid-3">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div className="el-card" key={item.title}>
                <div className="el-card-icon">
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
      <section className="el-panel">
        <div className="el-section">
          <div className="el-section-head">
            <h2>Loan benefits</h2>
          </div>
          <div className="el-grid el-grid-3">
            {benefits.map((item) => (
              <div className="el-benefit" key={item}>
                <CheckCircle2 size={20} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility & Documents */}
      <section className="el-section">
        <div className="el-grid el-grid-2">
          <div className="el-info-card">
            <h2>Eligibility</h2>
            <ul className="el-info-list">
              {eligibility.map((item) => (
                <li key={item}>
                  <CheckCircle2 size={19} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="el-info-card">
            <h2>Documents required</h2>
            <ul className="el-info-list">
              {documents.map((item) => (
                <li key={item}>
                  <FileText size={19} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="el-panel">
        <div className="el-section">
          <div className="el-section-head">
            <h2>Application process</h2>
          </div>
          <div className="el-grid el-grid-4">
            {steps.map((step, i) => (
              <div className="el-step" key={step}>
                <div className="el-step-num">{i + 1}</div>
                <h3>{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Study Destinations */}
      <section className="el-section">
        <div className="el-section-head">
          <h2>Popular study destinations</h2>
        </div>
        <div className="el-grid-dest">
          {destinations.map((country) => (
            <div className="el-dest" key={country}>
              <div className="el-dest-icon">
                <Globe size={22} />
              </div>
              <h3>{country}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="el-panel">
        <div className="el-section" style={{ maxWidth: "48rem" }}>
          <div className="el-section-head">
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
      <section className="el-cta">
        <div className="el-cta-inner">
          <div className="el-cta-icon">
            <GraduationCap size={26} />
          </div>
          <h2>Invest in your future</h2>
          <p>Start your education journey today with flexible education loans.</p>
          <button onClick={() => setOpenModal(true)} className="el-btn el-btn-primary">
            Apply now <ArrowRight size={18} />
          </button>
        </div>
      </section>
      <ContactModal
        isOpen={openModal}
        onClose={() => setOpenModal}
      />
    </div>
  );
};

export default EducationLoan;