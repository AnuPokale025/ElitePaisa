import React, { useState, useEffect } from "react";
import {
  Search,
  ChevronDown,
  HelpCircle,
  Phone,
  Mail,
  MessageCircle,
  X,
  CheckCircle2,
} from "lucide-react";
import ContactModal from "../modal/ContactModal";

/* ------------------------------------------------------------------
  Same design system as the rest of the site:
  --ink-950 #071A34   --blue-600 #2E63E8   --sky-100 #E9F1FE
  --ink-800 #0E2A52   --blue-500 #3B82F6   --amber-400 #F2B134
  Display: Fraunces · Body: Inter · Data: IBM Plex Mono
------------------------------------------------------------------- */

const FONT_IMPORT_URL =
  "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500;600&display=swap";

const faqData = [
  {
    question: "How do I apply for a loan?",
    answer:
      "Click on the Apply Now button, complete the online application form, upload the required documents, and submit your application.",
  },
  {
    question: "What documents are required for a loan?",
    answer:
      "Generally, you need identity proof, address proof, PAN card, Aadhaar card, income proof, and recent bank statements.",
  },
  {
    question: "How long does loan approval take?",
    answer: "Most loan applications are approved within 24 hours after successful document verification.",
  },
  {
    question: "Can I prepay my loan?",
    answer:
      "Yes. You can prepay your loan before the tenure ends. Prepayment charges may apply depending on your loan agreement.",
  },
  {
    question: "How is EMI calculated?",
    answer:
      "EMI depends on the loan amount, interest rate, and loan tenure. Use our EMI Calculator to estimate your monthly payment.",
  },
  {
    question: "What is the minimum CIBIL score required?",
    answer: "A CIBIL score of 700 or above generally improves your chances of loan approval.",
  },
  {
    question: "Do you provide business loans?",
    answer: "Yes. We provide Personal, Home, Business, Education, Gold, and Vehicle Loans.",
  },
  {
    question: "Can I track my loan application?",
    answer: "Yes. After submitting your application, you can log in to your account and check the application status.",
  },
];

const helpChannels = [
  { icon: Phone, title: "Call us", detail: "+91 98765 43210" },
  { icon: Mail, title: "Email support", detail: "support@loanhub.com" },
  { icon: MessageCircle, title: "Live chat", detail: "Available 24×7" },
];

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div className={`fq-faq ${isOpen ? "open" : ""}`}>
      <button className="fq-faq-q" onClick={onToggle} aria-expanded={isOpen}>
        <span>{item.question}</span>
        <ChevronDown size={18} className={`fq-faq-chev ${isOpen ? "open" : ""}`} />
      </button>
      <div className="fq-faq-a-wrap">
        <p className="fq-faq-a">{item.answer}</p>
      </div>
    </div>
  );
}



const FAQ = () => {
  const [active, setActive] = useState(null);
  const [search, setSearch] = useState("");
  const [openContact, setOpenContact] = useState(false);

  useEffect(() => {
    if (document.getElementById("fq-font-import")) return;
    const link = document.createElement("link");
    link.id = "fq-font-import";
    link.rel = "stylesheet";
    link.href = FONT_IMPORT_URL;
    document.head.appendChild(link);
  }, []);

  const filteredFAQ = faqData.filter((item) =>
    item.question.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="fq-root">
      <style>{`
        .fq-root {
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
        .fq-root h1, .fq-root h2, .fq-root h3 { font-family:'Fraunces', serif; letter-spacing:-0.01em; }

        .fq-btn {
          display:inline-flex; align-items:center; gap:0.55rem;
          padding:0.9rem 1.9rem; border-radius:0.6rem; font-weight:600; font-size:0.96rem;
          cursor:pointer; border:none; transition:all .18s ease;
        }
        .fq-btn:focus-visible { outline:2px solid var(--amber-400); outline-offset:2px; }
        .fq-btn-primary { background:#fff; color:var(--blue-600); }
        .fq-btn-primary:hover { background:var(--sky-100); transform:translateY(-1px); }
        .fq-btn-solid { background:var(--blue-600); color:#fff; }
        .fq-btn-solid:hover { background:var(--ink-950); }
        .fq-btn-block { width:100%; justify-content:center; }

        /* Hero */
        .fq-hero { background:radial-gradient(120% 150% at 50% 0%, #123B7C 0%, var(--ink-950) 60%); color:#fff; text-align:center; padding-bottom:4.5rem; }
        .fq-hero-inner { max-width:46rem; margin:0 auto; padding:5rem 1.5rem 0; }
        .fq-hero-icon { width:3.8rem; height:3.8rem; border-radius:1rem; background:rgba(255,255,255,0.1); display:flex; align-items:center; justify-content:center; margin:0 auto 1.5rem; color:var(--amber-400); }
        .fq-hero h1 { font-size:clamp(2.3rem,4.6vw,3.1rem); font-weight:600; margin:0; }
        .fq-hero p { margin:1.1rem 0 0; color:#C9DBFC; font-size:1.05rem; line-height:1.6; }

        /* Search — floats over the hero/body boundary */
        .fq-search-wrap { max-width:42rem; margin:0 auto; padding:0 1.5rem; transform:translateY(-2.4rem); }
        .fq-search { background:#fff; border-radius:1rem; box-shadow:0 24px 50px -20px rgba(7,26,52,0.35); padding:0.4rem 0.4rem 0.4rem 1.3rem; display:flex; align-items:center; gap:0.85rem; border:1px solid var(--line); }
        .fq-search svg { color:var(--ink-600); flex-shrink:0; }
        .fq-search input { flex:1; border:none; outline:none; font-size:1rem; padding:0.85rem 0; font-family:'Inter', sans-serif; color:var(--ink-950); background:transparent; }
        .fq-search input::placeholder { color:var(--ink-600); opacity:0.7; }
        .fq-search-count { padding:0.55rem 0.9rem; background:var(--sky-100); color:var(--blue-600); border-radius:0.6rem; font-size:0.78rem; font-weight:700; white-space:nowrap; }

        .fq-section { max-width:52rem; margin:0 auto; padding:1.5rem 1.5rem 5.5rem; }
        .fq-empty { text-align:center; color:var(--ink-600); padding:3rem 0; }

        .fq-faq { border:1px solid var(--line); border-radius:0.9rem; background:#fff; overflow:hidden; }
        .fq-faq + .fq-faq { margin-top:0.9rem; }
        .fq-faq-q {
          width:100%; text-align:left; background:none; border:none; cursor:pointer;
          padding:1.35rem 1.6rem; display:flex; align-items:center; justify-content:space-between; gap:1rem;
          font-family:'Fraunces', serif; font-weight:600; font-size:1.05rem; color:var(--ink-950);
        }
        .fq-faq-q:focus-visible { outline:2px solid var(--blue-600); outline-offset:-2px; }
        .fq-faq-chev { color:var(--blue-600); transition:transform .2s ease; flex-shrink:0; }
        .fq-faq-chev.open { transform:rotate(180deg); }
        .fq-faq-a-wrap { max-height:0; overflow:hidden; transition:max-height .25s ease; }
        .fq-faq.open .fq-faq-a-wrap { max-height:12rem; }
        .fq-faq-a { margin:0; padding:0 1.6rem 1.4rem; color:var(--ink-600); font-size:0.95rem; line-height:1.65; }

        /* Help */
        .fq-help { background:#fff; }
        .fq-help-inner { max-width:1180px; margin:0 auto; padding:5.5rem 1.5rem; }
        .fq-help-head { text-align:center; max-width:34rem; margin:0 auto 3rem; }
        .fq-help-head h2 { font-size:clamp(1.85rem,3.2vw,2.4rem); font-weight:600; }
        .fq-help-head p { color:var(--ink-600); margin-top:0.7rem; }
        .fq-help-grid { display:grid; gap:1.75rem; }
        @media (min-width:768px){ .fq-help-grid{ grid-template-columns:repeat(3,1fr); } }
        .fq-help-card {
          background:var(--ice-50); border:1px solid var(--line); border-radius:1rem; padding:2.2rem;
          text-align:center; transition:box-shadow .2s ease, transform .2s ease, border-color .2s ease;
        }
        .fq-help-card:hover { box-shadow:0 18px 40px -22px rgba(7,26,52,0.28); transform:translateY(-2px); border-color:var(--blue-600); }
        .fq-help-icon { width:3.1rem; height:3.1rem; border-radius:0.75rem; background:#fff; color:var(--blue-600); display:flex; align-items:center; justify-content:center; margin:0 auto 1.2rem; box-shadow:0 6px 16px -8px rgba(7,26,52,0.2); }
        .fq-help-card h3 { font-size:1.2rem; font-weight:600; margin:0 0 0.5rem; }
        .fq-help-card p { color:var(--ink-600); font-size:0.94rem; margin:0; }

        /* CTA */
        .fq-cta { background:linear-gradient(120deg, var(--ink-950), #123B7C); color:#fff; text-align:center; }
        .fq-cta-inner { max-width:40rem; margin:0 auto; padding:5rem 1.5rem; }
        .fq-cta h2 { font-size:clamp(1.85rem,3.4vw,2.5rem); font-weight:600; }
        .fq-cta p { margin:1rem 0 2.2rem; color:#C9DBFC; font-size:1.05rem; }

        /* Modal */
        .fq-overlay { position:fixed; inset:0; background:rgba(7,26,52,0.55); backdrop-filter:blur(2px); display:flex; align-items:center; justify-content:center; padding:1.25rem; z-index:50; }
        .fq-modal { background:#fff; border-radius:1rem; padding:2.4rem; width:100%; max-width:26rem; position:relative; box-shadow:0 30px 60px -20px rgba(7,26,52,0.4); }
        .fq-modal-close { position:absolute; top:1rem; right:1rem; background:var(--sky-100); border:none; width:2.2rem; height:2.2rem; border-radius:50%; display:flex; align-items:center; justify-content:center; cursor:pointer; color:var(--ink-800); }
        .fq-modal-eyebrow { text-transform:uppercase; letter-spacing:0.14em; font-size:0.72rem; font-weight:700; color:var(--blue-600); margin:0 0 0.5rem; }
        .fq-modal-title { font-size:1.3rem; font-weight:600; margin:0 0 1.5rem; }
        .fq-modal form { display:flex; flex-direction:column; gap:1.1rem; }
        .fq-modal label { display:flex; flex-direction:column; gap:0.4rem; font-size:0.85rem; font-weight:600; color:var(--ink-800); }
        .fq-modal input { border:1px solid var(--line); border-radius:0.55rem; padding:0.7rem 0.85rem; font-size:0.95rem; font-family:'Inter', sans-serif; }
        .fq-modal input:focus-visible { outline:2px solid var(--blue-600); outline-offset:1px; }
        .fq-modal-success { text-align:center; }
        .fq-modal-success svg { color:var(--blue-600); margin-bottom:0.75rem; }
        .fq-modal-success h3 { margin:0 0 0.4rem; font-size:1.2rem; }
        .fq-modal-success p { color:var(--ink-600); margin:0; font-size:0.92rem; }
      `}</style>

      {/* Hero */}
      <section className="fq-hero">
        <div className="fq-hero-inner">
          <div className="fq-hero-icon">
            <HelpCircle size={28} />
          </div>
          <h1>Frequently asked questions</h1>
          <p>
            Find answers to common questions about our loans, application
            process, EMI calculation, repayments, and more.
          </p>
        </div>
      </section>

      {/* Search */}
      <div className="fq-search-wrap">
        <div className="fq-search">
          <Search size={19} />
          <input
            type="text"
            placeholder="Search your question…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {search && (
            <span className="fq-search-count">
              {filteredFAQ.length} {filteredFAQ.length === 1 ? "result" : "results"}
            </span>
          )}
        </div>
      </div>

      {/* FAQ */}
      <section className="fq-section">
        {filteredFAQ.length === 0 ? (
          <div className="fq-empty">No matching questions found.</div>
        ) : (
          <div>
            {filteredFAQ.map((item) => {
              const originalIndex = faqData.indexOf(item);
              return (
                <FaqItem
                  key={item.question}
                  item={item}
                  isOpen={active === originalIndex}
                  onToggle={() => setActive(active === originalIndex ? null : originalIndex)}
                />
              );
            })}
          </div>
        )}
      </section>

      {/* Help Cards */}
      <section className="fq-help">
        <div className="fq-help-inner">
          <div className="fq-help-head">
            <h2>Still need help?</h2>
            <p>Our support team is always ready to assist you.</p>
          </div>
          <div className="fq-help-grid">
            {helpChannels.map((c) => {
              const Icon = c.icon;
              return (
                <div className="fq-help-card" key={c.title}>
                  <div className="fq-help-icon">
                    <Icon size={22} />
                  </div>
                  <h3>{c.title}</h3>
                  <p>{c.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="fq-cta">
        <div className="fq-cta-inner">
          <h2>Ready to apply for a loan?</h2>
          <p>Get quick approval, competitive interest rates, and a hassle-free application process.</p>
          <button className="fq-btn fq-btn-primary" onClick={() => setOpenContact(true)}>
            Apply now
          </button>
        </div>
      </section>

      <ContactModal isOpen={openContact} onClose={() => setOpenContact(false)} />
    </div>
  );
};

export default FAQ;