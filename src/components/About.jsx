import React, { useState, useEffect } from "react";
import {
  ShieldCheck,
  Users,
  Award,
  TrendingUp,
  Target,
  Eye,
  CheckCircle2,
  ArrowRight,
  X,
} from "lucide-react";
import ContactModal from "../modal/ContactModal";

/* ------------------------------------------------------------------
  Same design system as the rest of the site:
  --ink-950 #071A34   --blue-600 #2E63E8   --sky-100 #E9F1FE
  --ink-800 #0E2A52   --blue-500 #3B82F6   --amber-400 #F2B134
  Display: Fraunces · Body: Inter · Data: IBM Plex Mono

  Note: the original used green/purple accents for two of the three
  "why choose us" icons. Folded those into the single blue system —
  a third stray hue reads as unstyled rather than intentional once
  the rest of the site commits to one accent family.
------------------------------------------------------------------- */

const FONT_IMPORT_URL =
  "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500;600&display=swap";

const features = [
  {
    icon: ShieldCheck,
    title: "Trusted & secure",
    description:
      "We follow industry-standard security practices to keep your financial information safe.",
  },
  {
    icon: TrendingUp,
    title: "Competitive interest rates",
    description:
      "Affordable loan solutions with flexible repayment options tailored to your needs.",
  },
  {
    icon: Users,
    title: "Dedicated support",
    description:
      "Our experienced financial advisors are here to assist you throughout your loan journey.",
  },
];

const stats = [
  ["50K+", "Happy Customers"],
  ["₹500Cr+", "Loans Disbursed"],
  ["15+", "Years of Experience"],
  ["98%", "Customer Satisfaction"],
];

const team = [
  { name: "Rahul Sharma", role: "Chief Executive Officer" },
  { name: "Priya Patel", role: "Head of Finance" },
  { name: "Amit Verma", role: "Customer Success Manager" },
];



const About = () => {
  const [openContact, setOpenContact] = useState(false);
  const [openModal, setOpenModal] = useState();

  useEffect(() => {
    if (document.getElementById("ab-font-import")) return;
    const link = document.createElement("link");
    link.id = "ab-font-import";
    link.rel = "stylesheet";
    link.href = FONT_IMPORT_URL;
    document.head.appendChild(link);
  }, []);

  return (
    <div className="ab-root">
      <style>{`
        .ab-root {
          --ink-950:#071A34; --ink-800:#0E2A52; --ink-600:#3A5478;
          --blue-600:#2E63E8; --blue-500:#3B82F6;
          --sky-100:#E9F1FE; --ice-50:#F6F9FF; --amber-400:#F2B134;
          --line: rgba(7,26,52,0.08);
          font-family:'Inter', sans-serif;
          background:var(--ice-50);
          color:var(--ink-950);
          -webkit-font-smoothing:antialiased;
        }
        .ab-root h1, .ab-root h2, .ab-root h3 { font-family:'Fraunces', serif; letter-spacing:-0.01em; }
        .ab-mono { font-family:'IBM Plex Mono', monospace; }

        .ab-btn {
          display:inline-flex; align-items:center; gap:0.55rem;
          padding:0.9rem 1.9rem; border-radius:0.6rem; font-weight:600; font-size:0.96rem;
          cursor:pointer; border:none; transition:all .18s ease;
        }
        .ab-btn:focus-visible { outline:2px solid var(--amber-400); outline-offset:2px; }
        .ab-btn-primary { background:#fff; color:var(--blue-600); }
        .ab-btn-primary:hover { background:var(--sky-100); transform:translateY(-1px); }
        .ab-btn-solid { background:var(--blue-600); color:#fff; }
        .ab-btn-solid:hover { background:var(--ink-950); }
        .ab-btn-block { width:100%; justify-content:center; }

        /* Hero */
        .ab-hero { background:radial-gradient(120% 150% at 50% 0%, #123B7C 0%, var(--ink-950) 60%); color:#fff; text-align:center; }
        .ab-hero-inner { max-width:46rem; margin:0 auto; padding:5.5rem 1.5rem; }
        .ab-eyebrow { text-transform:uppercase; letter-spacing:0.18em; font-size:0.78rem; font-weight:600; color:#9CC0FF; margin:0 0 1rem; }
        .ab-hero h1 { font-size:clamp(2.4rem,5vw,3.4rem); font-weight:600; margin:0; }
        .ab-hero p { margin:1.2rem 0 0; color:#C9DBFC; font-size:1.06rem; line-height:1.65; }

        .ab-section { max-width:1180px; margin:0 auto; padding:5.5rem 1.5rem; }
        .ab-section-head { text-align:center; max-width:36rem; margin:0 auto 3.2rem; }
        .ab-section-head h2 { font-size:clamp(1.85rem,3.2vw,2.4rem); font-weight:600; }

        /* Story */
        .ab-story { display:grid; gap:3rem; align-items:center; }
        @media (min-width:1024px){ .ab-story{ grid-template-columns:1fr 1fr; } }
        .ab-story img { width:100%; border-radius:1.25rem; box-shadow:0 30px 60px -20px rgba(7,26,52,0.3); display:block; }
        .ab-kicker { color:var(--blue-600); font-weight:700; text-transform:uppercase; letter-spacing:0.1em; font-size:0.8rem; }
        .ab-story h2 { font-size:clamp(1.9rem,3.4vw,2.5rem); font-weight:600; margin:0.6rem 0 0; }
        .ab-story p { color:var(--ink-600); margin-top:1.3rem; line-height:1.75; font-size:1rem; }

        .ab-grid { display:grid; gap:1.75rem; }
        @media (min-width:768px){ .ab-grid-2{ grid-template-columns:repeat(2,1fr);} .ab-grid-3{ grid-template-columns:repeat(3,1fr);} }
        @media (min-width:1024px){ .ab-grid-4{ grid-template-columns:repeat(4,1fr);} }

        .ab-panel { background:#fff; }

        /* Mission / Vision */
        .ab-mv-card { border-radius:1.25rem; padding:2.4rem; }
        .ab-mv-card.mission { background:var(--sky-100); }
        .ab-mv-card.vision { background:var(--ink-950); color:#fff; }
        .ab-mv-icon { width:3.2rem; height:3.2rem; border-radius:0.85rem; display:flex; align-items:center; justify-content:center; }
        .ab-mv-card.mission .ab-mv-icon { background:#fff; color:var(--blue-600); }
        .ab-mv-card.vision .ab-mv-icon { background:rgba(255,255,255,0.12); color:var(--amber-400); }
        .ab-mv-card h3 { font-size:1.7rem; font-weight:600; margin:1.3rem 0 0; }
        .ab-mv-card p { margin-top:1rem; line-height:1.7; font-size:0.98rem; }
        .ab-mv-card.mission p { color:var(--ink-600); }
        .ab-mv-card.vision p { color:#C9DBFC; }

        /* Feature cards */
        .ab-card { background:#fff; border:1px solid var(--line); border-radius:1rem; padding:2.2rem; transition:box-shadow .2s ease, transform .2s ease; }
        .ab-card:hover { box-shadow:0 18px 40px -22px rgba(7,26,52,0.28); transform:translateY(-2px); }
        .ab-card-icon { width:3.1rem; height:3.1rem; border-radius:0.75rem; background:var(--sky-100); color:var(--blue-600); display:flex; align-items:center; justify-content:center; margin-bottom:1.25rem; }
        .ab-card h3 { font-size:1.3rem; font-weight:600; margin:0 0 0.6rem; }
        .ab-card p { color:var(--ink-600); font-size:0.95rem; line-height:1.6; margin:0; }

        /* Stats */
        .ab-stats { background:var(--ink-950); color:#fff; }
        .ab-stats-grid { display:grid; gap:2rem; text-align:center; }
        @media (min-width:768px){ .ab-stats-grid{ grid-template-columns:repeat(4,1fr);} }
        .ab-stats-grid h2 { font-family:'IBM Plex Mono', monospace; font-size:2.6rem; font-weight:600; color:var(--amber-400); margin:0; }
        .ab-stats-grid p { margin:0.4rem 0 0; color:#C9DBFC; font-size:0.92rem; }

        /* Team */
        .ab-team-card { background:#fff; border:1px solid var(--line); border-radius:1.1rem; overflow:hidden; transition:box-shadow .2s ease, transform .2s ease; }
        .ab-team-card:hover { box-shadow:0 18px 40px -22px rgba(7,26,52,0.28); transform:translateY(-2px); }
        .ab-team-card img { width:100%; height:18rem; object-fit:cover; display:block; }
        .ab-team-info { padding:1.6rem; text-align:center; }
        .ab-team-info h3 { font-size:1.35rem; font-weight:600; margin:0; }
        .ab-team-info p { color:var(--blue-600); margin:0.5rem 0 0; font-weight:600; font-size:0.9rem; }

        /* CTA */
        .ab-cta { background:linear-gradient(120deg, var(--ink-950), #123B7C); color:#fff; text-align:center; }
        .ab-cta-inner { max-width:40rem; margin:0 auto; padding:5rem 1.5rem; }
        .ab-cta-icon { width:3.6rem; height:3.6rem; border-radius:1rem; background:rgba(255,255,255,0.1); display:flex; align-items:center; justify-content:center; margin:0 auto 1.5rem; color:var(--amber-400); }
        .ab-cta h2 { font-size:clamp(1.85rem,3.4vw,2.5rem); font-weight:600; }
        .ab-cta p { margin:1rem 0 2.2rem; color:#C9DBFC; font-size:1.05rem; }

        /* Modal */
        .ab-overlay { position:fixed; inset:0; background:rgba(7,26,52,0.55); backdrop-filter:blur(2px); display:flex; align-items:center; justify-content:center; padding:1.25rem; z-index:50; }
        .ab-modal { background:#fff; border-radius:1rem; padding:2.4rem; width:100%; max-width:26rem; position:relative; box-shadow:0 30px 60px -20px rgba(7,26,52,0.4); }
        .ab-modal-close { position:absolute; top:1rem; right:1rem; background:var(--sky-100); border:none; width:2.2rem; height:2.2rem; border-radius:50%; display:flex; align-items:center; justify-content:center; cursor:pointer; color:var(--ink-800); }
        .ab-modal-eyebrow { text-transform:uppercase; letter-spacing:0.14em; font-size:0.72rem; font-weight:700; color:var(--blue-600); margin:0 0 0.5rem; }
        .ab-modal-title { font-size:1.3rem; font-weight:600; margin:0 0 1.5rem; }
        .ab-modal form { display:flex; flex-direction:column; gap:1.1rem; }
        .ab-modal label { display:flex; flex-direction:column; gap:0.4rem; font-size:0.85rem; font-weight:600; color:var(--ink-800); }
        .ab-modal input { border:1px solid var(--line); border-radius:0.55rem; padding:0.7rem 0.85rem; font-size:0.95rem; font-family:'Inter', sans-serif; }
        .ab-modal input:focus-visible { outline:2px solid var(--blue-600); outline-offset:1px; }
        .ab-modal-success { text-align:center; }
        .ab-modal-success svg { color:var(--blue-600); margin-bottom:0.75rem; }
        .ab-modal-success h3 { margin:0 0 0.4rem; font-size:1.2rem; }
        .ab-modal-success p { color:var(--ink-600); margin:0; font-size:0.92rem; }
      `}</style>

      {/* Hero */}
      <section className="ab-hero">
        <div className="ab-hero-inner">
          <p className="ab-eyebrow">About LoanHub</p>
          <h1>Financial goals, made reachable</h1>
          <p>
            Helping individuals and businesses achieve their financial goals
            through fast, transparent, and affordable loan solutions.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="ab-section">
        <div className="ab-story">
          <img
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900"
            alt="Finance team"
          />
          <div>
            <span className="ab-kicker">Our story</span>
            <h2>Making loans simple, fast &amp; transparent</h2>
            <p>
              Since our inception, LoanHub has been committed to simplifying
              the borrowing process. We provide personal, home, business,
              education, and vehicle loans with minimal documentation and
              quick approvals.
            </p>
            <p>
              Our technology-driven approach ensures a seamless experience
              while maintaining the highest standards of transparency and
              customer service.
            </p>
            <button className="ab-btn ab-btn-solid" onClick={()=>setOpenModal(true)} style={{ marginTop: "2rem" }} onClick={() => setOpenContact(true)}>
              Apply now <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="ab-panel">
        <div className="ab-section">
          <div className="ab-grid ab-grid-2">
            <div className="ab-mv-card mission">
              <div className="ab-mv-icon">
                <Target size={24} />
              </div>
              <h3>Our mission</h3>
              <p>
                To empower individuals and businesses with accessible
                financial solutions through innovative technology,
                transparent processes, and excellent customer service.
              </p>
            </div>
            <div className="ab-mv-card vision">
              <div className="ab-mv-icon">
                <Eye size={24} />
              </div>
              <h3>Our vision</h3>
              <p>
                To become the most trusted digital lending platform by
                delivering secure, affordable, and customer-centric
                financial services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="ab-section">
        <div className="ab-section-head">
          <h2>Why choose LoanHub?</h2>
        </div>
        <div className="ab-grid ab-grid-3">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div className="ab-card" key={item.title}>
                <div className="ab-card-icon">
                  <Icon size={24} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Statistics */}
      <section className="ab-stats">
        <div className="ab-section">
          <div className="ab-stats-grid">
            {stats.map(([value, label]) => (
              <div key={label}>
                <h2>{value}</h2>
                <p>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="ab-section">
        <div className="ab-section-head">
          <h2>Meet our leadership</h2>
        </div>
        <div className="ab-grid ab-grid-3">
          {team.map((member) => (
            <div className="ab-team-card" key={member.name}>
              <img
                src={`https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=2E63E8&color=fff&size=300`}
                alt={member.name}
              />
              <div className="ab-team-info">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="ab-cta">
        <div className="ab-cta-inner">
          <div className="ab-cta-icon">
            <Award size={26} />
          </div>
          <h2>Ready to achieve your financial goals?</h2>
          <p>
            Apply online today and receive quick approval with transparent
            terms and competitive interest rates.
          </p>
          <button onClick={()=>setOpenModal(true)} className="ab-btn ab-btn-primary" onClick={() => setOpenContact(true)}>
            Apply for a loan <ArrowRight size={18} />
          </button>
        </div>
      </section>

      <ContactModal isOpen={openContact} onClose={() => setOpenContact(false)} />
    </div>
  );
};

export default About;