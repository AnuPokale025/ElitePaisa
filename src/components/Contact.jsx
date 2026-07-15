import React, { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Headphones,
  ShieldCheck,
  ChevronDown,
  X,
  CheckCircle2,
} from "lucide-react";

/* ------------------------------------------------------------------
  Same design system as the rest of the site:
  --ink-950 #071A34   --blue-600 #2E63E8   --sky-100 #E9F1FE
  --ink-800 #0E2A52   --blue-500 #3B82F6   --amber-400 #F2B134
  Display: Fraunces · Body: Inter · Data: IBM Plex Mono

  Note: the original gave "Secure Communication" a green icon/panel
  while "24/7 Support" stayed blue. Folded both into the shared blue
  system — a lone green swatch here would be the only non-brand
  color on the entire site.
------------------------------------------------------------------- */

const FONT_IMPORT_URL =
  "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500;600&display=swap";

const contactInfo = [
  {
    icon: Phone,
    title: "Call us",
    value: "+91 98765 43210",
    description: "Available Monday to Saturday",
  },
  {
    icon: Mail,
    title: "Email us",
    value: "hello@eliteassociate.in",
    description: "Reply within 24 hours",
  },
  {
    icon: MapPin,
    title: "Visit office",
    value: "Nagpur, Maharashtra",
    description: "Corporate head office",
  },
];

const faqs = [
  {
    question: "How long does loan approval take?",
    answer: "Most applications are approved within 24 hours after document verification.",
  },
  {
    question: "What documents are required?",
    answer: "Identity proof, address proof, income proof, and bank statements are generally required.",
  },
  {
    question: "Can I repay my loan early?",
    answer: "Yes, early repayment options are available depending on your loan agreement.",
  },
];

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div className={`ct-faq ${isOpen ? "open" : ""}`}>
      <button className="ct-faq-q" onClick={onToggle} aria-expanded={isOpen}>
        <span>{item.question}</span>
        <ChevronDown size={18} className={`ct-faq-chev ${isOpen ? "open" : ""}`} />
      </button>
      <div className="ct-faq-a-wrap">
        <p className="ct-faq-a">{item.answer}</p>
      </div>
    </div>
  );
}

function ApplyModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  if (!isOpen) return null;

  return (
    <div className="ct-overlay" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="ct-modal" onClick={(e) => e.stopPropagation()}>
        <button className="ct-modal-close" onClick={onClose} aria-label="Close">
          <X size={18} />
        </button>
        {submitted ? (
          <div className="ct-modal-success">
            <CheckCircle2 size={40} />
            <h3>Request received</h3>
            <p>A loan officer will call you within 24 hours.</p>
          </div>
        ) : (
          <>
            <p className="ct-modal-eyebrow">Apply now</p>
            <h3 className="ct-modal-title">Talk to a loan officer</h3>
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
              <label>
                Full name
                <input type="text" required placeholder="Your name" />
              </label>
              <label>
                Phone number
                <input type="tel" required placeholder="10-digit mobile number" />
              </label>
              <button type="submit" className="ct-btn ct-btn-solid ct-btn-block">
                Request a callback
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

const Contact = () => {
  const [openContact, setOpenContact] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [formSent, setFormSent] = useState(false);

  useEffect(() => {
    if (document.getElementById("ct-font-import")) return;
    const link = document.createElement("link");
    link.id = "ct-font-import";
    link.rel = "stylesheet";
    link.href = FONT_IMPORT_URL;
    document.head.appendChild(link);
  }, []);

  return (
    <div className="ct-root">
      <style>{`
        .ct-root {
          --ink-950:#071A34; --ink-800:#0E2A52; --ink-600:#3A5478;
          --blue-600:#2E63E8; --blue-500:#3B82F6;
          --sky-100:#E9F1FE; --ice-50:#F6F9FF; --amber-400:#F2B134;
          --line: rgba(7,26,52,0.08);
          font-family:'Inter', sans-serif;
          background:var(--ice-50);
          color:var(--ink-950);
          -webkit-font-smoothing:antialiased;
        }
        .ct-root h1, .ct-root h2, .ct-root h3 { font-family:'Fraunces', serif; letter-spacing:-0.01em; }

        .ct-btn {
          display:inline-flex; align-items:center; justify-content:center; gap:0.55rem;
          padding:0.9rem 1.9rem; border-radius:0.6rem; font-weight:600; font-size:0.96rem;
          cursor:pointer; border:none; transition:all .18s ease;
        }
        .ct-btn:focus-visible { outline:2px solid var(--amber-400); outline-offset:2px; }
        .ct-btn-primary { background:#fff; color:var(--blue-600); }
        .ct-btn-primary:hover { background:var(--sky-100); transform:translateY(-1px); }
        .ct-btn-solid { background:var(--blue-600); color:#fff; }
        .ct-btn-solid:hover:not(:disabled) { background:var(--ink-950); }
        .ct-btn-solid:disabled { opacity:0.7; cursor:default; }
        .ct-btn-block { width:100%; }

        /* Hero */
        .ct-hero { background:radial-gradient(120% 150% at 50% 0%, #123B7C 0%, var(--ink-950) 60%); color:#fff; text-align:center; }
        .ct-hero-inner { max-width:46rem; margin:0 auto; padding:5.5rem 1.5rem; }
        .ct-hero-icon { width:3.8rem; height:3.8rem; border-radius:1rem; background:rgba(255,255,255,0.1); display:flex; align-items:center; justify-content:center; margin:0 auto 1.5rem; color:var(--amber-400); }
        .ct-hero h1 { font-size:clamp(2.4rem,5vw,3.4rem); font-weight:600; margin:0; }
        .ct-hero p { margin:1.2rem 0 0; color:#C9DBFC; font-size:1.05rem; line-height:1.65; }

        .ct-section { max-width:1180px; margin:0 auto; padding:5rem 1.5rem; }
        .ct-section-head { text-align:center; max-width:36rem; margin:0 auto 3.2rem; }
        .ct-section-head h2 { font-size:clamp(1.85rem,3.2vw,2.4rem); font-weight:600; }

        .ct-grid { display:grid; gap:1.75rem; }
        @media (min-width:768px){ .ct-grid-2{ grid-template-columns:repeat(2,1fr);} .ct-grid-3{ grid-template-columns:repeat(3,1fr);} }
        @media (min-width:1024px){ .ct-grid-lg-2{ grid-template-columns:repeat(2,1fr);} }

        /* Contact info cards */
        .ct-info-card { background:#fff; border:1px solid var(--line); border-radius:1rem; padding:2.2rem; text-align:center; transition:box-shadow .2s ease, transform .2s ease; }
        .ct-info-card:hover { box-shadow:0 18px 40px -22px rgba(7,26,52,0.28); transform:translateY(-2px); }
        .ct-info-icon { width:3.4rem; height:3.4rem; border-radius:0.85rem; background:var(--sky-100); color:var(--blue-600); display:flex; align-items:center; justify-content:center; margin:0 auto 1.2rem; }
        .ct-info-card h3 { font-size:1.2rem; font-weight:600; margin:0; }
        .ct-info-card .value { color:var(--blue-600); font-weight:700; margin-top:0.6rem; font-size:1rem; }
        .ct-info-card .desc { color:var(--ink-600); margin-top:0.4rem; font-size:0.9rem; }

        /* Form */
        .ct-panel { background:#fff; border:1px solid var(--line); border-radius:1.25rem; padding:2.4rem; }
        .ct-panel h2 { font-size:1.6rem; font-weight:600; margin:0 0 1.8rem; }
        .ct-form { display:flex; flex-direction:column; gap:1.1rem; }
        .ct-form input, .ct-form textarea {
          width:100%; border:1px solid var(--line); border-radius:0.65rem; padding:0.85rem 1.1rem;
          font-size:0.95rem; font-family:'Inter', sans-serif; color:var(--ink-950); background:var(--ice-50);
          resize:vertical; transition:border-color .15s ease, box-shadow .15s ease;
        }
        .ct-form input::placeholder, .ct-form textarea::placeholder { color:var(--ink-600); opacity:0.65; }
        .ct-form input:focus-visible, .ct-form textarea:focus-visible {
          outline:none; border-color:var(--blue-600); box-shadow:0 0 0 3px rgba(46,99,232,0.15); background:#fff;
        }
        .ct-form-success { display:flex; flex-direction:column; align-items:center; text-align:center; gap:0.6rem; padding:2rem 0; }
        .ct-form-success svg { color:var(--blue-600); }
        .ct-form-success h3 { font-size:1.2rem; font-weight:600; margin:0; }
        .ct-form-success p { color:var(--ink-600); font-size:0.92rem; margin:0; }

        /* Business hours + notices */
        .ct-hours-row { display:flex; align-items:flex-start; gap:0.85rem; padding:0.85rem 0; font-size:0.95rem; color:var(--ink-800); }
        .ct-hours-row svg { color:var(--blue-600); flex-shrink:0; margin-top:0.15rem; }
        .ct-hours-row + .ct-hours-row { border-top:1px solid var(--line); }

        .ct-notice { display:flex; gap:0.9rem; padding:1.2rem 1.3rem; border-radius:0.85rem; background:var(--sky-100); margin-top:1rem; }
        .ct-notice svg { color:var(--blue-600); flex-shrink:0; }
        .ct-notice h4 { margin:0; font-weight:600; font-size:0.98rem; color:var(--ink-950); }
        .ct-notice p { margin:0.4rem 0 0; color:var(--ink-600); font-size:0.88rem; line-height:1.5; }

        .ct-map { border-radius:1.25rem; overflow:hidden; box-shadow:0 20px 45px -25px rgba(7,26,52,0.3); margin-top:2rem; border:1px solid var(--line); }
        .ct-map iframe { width:100%; height:20rem; border:0; display:block; }

        /* FAQ */
        .ct-faq { border:1px solid var(--line); border-radius:0.9rem; background:#fff; overflow:hidden; }
        .ct-faq + .ct-faq { margin-top:0.9rem; }
        .ct-faq-q {
          width:100%; text-align:left; background:none; border:none; cursor:pointer;
          padding:1.35rem 1.6rem; display:flex; align-items:center; justify-content:space-between;
          font-family:'Fraunces', serif; font-weight:600; font-size:1.05rem; color:var(--ink-950);
        }
        .ct-faq-q:focus-visible { outline:2px solid var(--blue-600); outline-offset:-2px; }
        .ct-faq-chev { color:var(--blue-600); transition:transform .2s ease; flex-shrink:0; }
        .ct-faq-chev.open { transform:rotate(180deg); }
        .ct-faq-a-wrap { max-height:0; overflow:hidden; transition:max-height .25s ease; }
        .ct-faq.open .ct-faq-a-wrap { max-height:10rem; }
        .ct-faq-a { margin:0; padding:0 1.6rem 1.4rem; color:var(--ink-600); font-size:0.95rem; line-height:1.6; }

        .ct-panel-alt { background:#fff; }

        /* CTA */
        .ct-cta { background:linear-gradient(120deg, var(--ink-950), #123B7C); color:#fff; text-align:center; }
        .ct-cta-inner { max-width:40rem; margin:0 auto; padding:5rem 1.5rem; }
        .ct-cta h2 { font-size:clamp(1.85rem,3.4vw,2.5rem); font-weight:600; }
        .ct-cta p { margin:1rem 0 2.2rem; color:#C9DBFC; font-size:1.05rem; }

        /* Modal */
        .ct-overlay { position:fixed; inset:0; background:rgba(7,26,52,0.55); backdrop-filter:blur(2px); display:flex; align-items:center; justify-content:center; padding:1.25rem; z-index:50; }
        .ct-modal { background:#fff; border-radius:1rem; padding:2.4rem; width:100%; max-width:26rem; position:relative; box-shadow:0 30px 60px -20px rgba(7,26,52,0.4); }
        .ct-modal-close { position:absolute; top:1rem; right:1rem; background:var(--sky-100); border:none; width:2.2rem; height:2.2rem; border-radius:50%; display:flex; align-items:center; justify-content:center; cursor:pointer; color:var(--ink-800); }
        .ct-modal-eyebrow { text-transform:uppercase; letter-spacing:0.14em; font-size:0.72rem; font-weight:700; color:var(--blue-600); margin:0 0 0.5rem; }
        .ct-modal-title { font-size:1.3rem; font-weight:600; margin:0 0 1.5rem; }
        .ct-modal form { display:flex; flex-direction:column; gap:1.1rem; }
        .ct-modal label { display:flex; flex-direction:column; gap:0.4rem; font-size:0.85rem; font-weight:600; color:var(--ink-800); }
        .ct-modal input { border:1px solid var(--line); border-radius:0.55rem; padding:0.7rem 0.85rem; font-size:0.95rem; font-family:'Inter', sans-serif; }
        .ct-modal input:focus-visible { outline:2px solid var(--blue-600); outline-offset:1px; }
        .ct-modal-success { text-align:center; }
        .ct-modal-success svg { color:var(--blue-600); margin-bottom:0.75rem; }
        .ct-modal-success h3 { margin:0 0 0.4rem; font-size:1.2rem; }
        .ct-modal-success p { color:var(--ink-600); margin:0; font-size:0.92rem; }
      `}</style>

      {/* Hero */}
      <section className="ct-hero">
        <div className="ct-hero-inner">
          <div className="ct-hero-icon">
            <MessageCircle size={28} />
          </div>
          <h1>Contact us</h1>
          <p>
            Have questions about our loan services? Our experts are here to
            help you every step of the way.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="ct-section" style={{ paddingBottom: "2.5rem" }}>
        <div className="ct-grid ct-grid-3">
          {contactInfo.map((item) => {
            const Icon = item.icon;
            return (
              <div className="ct-info-card" key={item.title}>
                <div className="ct-info-icon">
                  <Icon size={24} />
                </div>
                <h3>{item.title}</h3>
                <p className="value">{item.value}</p>
                <p className="desc">{item.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Form + Office */}
      <section className="ct-section" style={{ paddingTop: 0 }}>
        <div className="ct-grid ct-grid-lg-2">
          {/* Contact Form */}
          <div className="ct-panel">
            <h2>Send us a message</h2>

            {formSent ? (
              <div className="ct-form-success">
                <CheckCircle2 size={40} />
                <h3>Message sent</h3>
                <p>Thanks for reaching out — our team will reply within 24 hours.</p>
              </div>
            ) : (
              <form className="ct-form" onSubmit={(e) => { e.preventDefault(); setFormSent(true); }}>
                <input type="text" placeholder="Full name" required />
                <input type="email" placeholder="Email address" required />
                <input type="tel" placeholder="Phone number" required />
                <input type="text" placeholder="Subject" required />
                <textarea rows="5" placeholder="Write your message…" required />
                <button type="submit" className="ct-btn ct-btn-solid ct-btn-block">
                  <Send size={18} />
                  Send message
                </button>
              </form>
            )}
          </div>

          {/* Office Details */}
          <div>
            <div className="ct-panel">
              <h2>Business hours</h2>
              <div>
                <div className="ct-hours-row">
                  <Clock size={19} />
                  <p style={{ margin: 0 }}>Monday – Friday: 9:00 AM – 6:00 PM</p>
                </div>
                <div className="ct-hours-row">
                  <Clock size={19} />
                  <p style={{ margin: 0 }}>Sunday: Closed</p>
                </div>
              </div>

              <div className="ct-notice">
                <Headphones size={20} />
                <div>
                  <h4>24/7 customer support</h4>
                  <p>Emergency support available anytime.</p>
                </div>
              </div>

              <div className="ct-notice">
                <ShieldCheck size={20} />
                <div>
                  <h4>Secure communication</h4>
                  <p>Your personal information is encrypted and protected.</p>
                </div>
              </div>
            </div>

            <div className="ct-map">
              <iframe
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.581799648856!2d79.07522787431027!3d21.169034882947674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c1dfdc6c9b43%3A0x54f93538e6888db3!2sElite%20Associate%20in%20Nagpur!5e0!3m2!1sen!2sin!4v1783933041018!5m2!1sen!2sin"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="ct-panel-alt">
        <div className="ct-section" style={{ maxWidth: "48rem" }}>
          <div className="ct-section-head">
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
      <section className="ct-cta">
        <div className="ct-cta-inner">
          <h2>Ready to apply for your loan?</h2>
          <p>Our loan experts are ready to guide you through every step of the application process.</p>
          <button className="ct-btn ct-btn-primary" onClick={() => setOpenContact(true)}>
            Apply now
          </button>
        </div>
      </section>

      <ApplyModal isOpen={openContact} onClose={() => setOpenContact(false)} />
    </div>
  );
};

export default Contact;