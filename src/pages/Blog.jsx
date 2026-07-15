import React, { useState, useEffect } from "react";
import {
  Search,
  Calendar,
  User,
  ArrowRight,
  BookOpen,
  Clock,
  CheckCircle2,
} from "lucide-react";

/* ------------------------------------------------------------------
  Same design system as the rest of the site:
  --ink-950 #071A34   --blue-600 #2E63E8   --sky-100 #E9F1FE
  --ink-800 #0E2A52   --blue-500 #3B82F6   --amber-400 #F2B134
  Display: Fraunces · Body: Inter · Data: IBM Plex Mono
------------------------------------------------------------------- */

const FONT_IMPORT_URL =
  "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500;600&display=swap";

const blogs = [
  {
    id: 1,
    title: "How to Improve Your Credit Score Before Applying for a Loan",
    category: "Credit Score",
    author: "Admin",
    date: "10 July 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800",
    description:
      "Learn practical tips to improve your credit score and increase your chances of getting loan approval.",
  },
  {
    id: 2,
    title: "Home Loan vs Personal Loan: Which One Should You Choose?",
    category: "Home Loan",
    author: "Finance Team",
    date: "08 July 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800",
    description:
      "Understand the differences between home loans and personal loans to make an informed decision.",
  },
  {
    id: 3,
    title: "Top 10 Tips for Faster Loan Approval",
    category: "Personal Loan",
    author: "Loan Expert",
    date: "05 July 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=800",
    description:
      "Discover the best practices that can help you secure faster loan approval with minimal documentation.",
  },
  {
    id: 4,
    title: "Understanding EMI and How It Affects Your Budget",
    category: "EMI",
    author: "Finance Team",
    date: "01 July 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800",
    description:
      "Learn how EMI works, how it is calculated, and how to manage monthly repayments effectively.",
  },
];

const categories = ["All", "Personal Loan", "Home Loan", "Business Loan", "Credit Score", "EMI"];

const Blog = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    if (document.getElementById("bg-font-import")) return;
    const link = document.createElement("link");
    link.id = "bg-font-import";
    link.rel = "stylesheet";
    link.href = FONT_IMPORT_URL;
    document.head.appendChild(link);
  }, []);

  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch = blog.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === "All" || blog.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featured = filteredBlogs[0];
  // The rest of the grid excludes the featured post so the same
  // article never appears twice on the page at once.
  const restBlogs = filteredBlogs.slice(1);

  return (
    <div className="bg-root">
      <style>{`
        .bg-root {
          --ink-950:#071A34; --ink-800:#0E2A52; --ink-600:#3A5478;
          --blue-600:#2E63E8; --blue-500:#3B82F6;
          --sky-100:#E9F1FE; --ice-50:#F6F9FF; --amber-400:#F2B134;
          --line: rgba(7,26,52,0.08);
          font-family:'Inter', sans-serif;
          background:var(--ice-50);
          color:var(--ink-950);
          -webkit-font-smoothing:antialiased;
        }
        .bg-root h1, .bg-root h2, .bg-root h3 { font-family:'Fraunces', serif; letter-spacing:-0.01em; }

        .bg-btn {
          display:inline-flex; align-items:center; gap:0.55rem;
          padding:0.85rem 1.7rem; border-radius:0.6rem; font-weight:600; font-size:0.94rem;
          cursor:pointer; border:none; transition:all .18s ease;
        }
        .bg-btn:focus-visible { outline:2px solid var(--amber-400); outline-offset:2px; }
        .bg-btn-primary { background:#fff; color:var(--blue-600); }
        .bg-btn-primary:hover { background:var(--sky-100); transform:translateY(-1px); }
        .bg-btn-solid { background:var(--blue-600); color:#fff; }
        .bg-btn-solid:hover { background:var(--ink-950); }
        .bg-btn-text { background:none; color:var(--blue-600); padding:0; }
        .bg-btn-text:hover { color:var(--ink-950); }

        /* Hero */
        .bg-hero { background:radial-gradient(120% 150% at 50% 0%, #123B7C 0%, var(--ink-950) 60%); color:#fff; text-align:center; padding-bottom:4.5rem; }
        .bg-hero-inner { max-width:46rem; margin:0 auto; padding:5rem 1.5rem 0; }
        .bg-hero-icon { width:3.8rem; height:3.8rem; border-radius:1rem; background:rgba(255,255,255,0.1); display:flex; align-items:center; justify-content:center; margin:0 auto 1.5rem; color:var(--amber-400); }
        .bg-hero h1 { font-size:clamp(2.3rem,4.6vw,3.1rem); font-weight:600; margin:0; }
        .bg-hero p { margin:1.1rem 0 0; color:#C9DBFC; font-size:1.05rem; line-height:1.6; }

        /* Search */
        .bg-search-wrap { max-width:44rem; margin:0 auto; padding:0 1.5rem; transform:translateY(-2.2rem); }
        .bg-search { background:#fff; border-radius:1rem; box-shadow:0 24px 50px -20px rgba(7,26,52,0.35); padding:0.4rem 0.4rem 0.4rem 1.3rem; display:flex; align-items:center; gap:0.85rem; border:1px solid var(--line); }
        .bg-search svg { color:var(--ink-600); flex-shrink:0; }
        .bg-search input { flex:1; border:none; outline:none; font-size:1rem; padding:0.85rem 0; font-family:'Inter', sans-serif; color:var(--ink-950); background:transparent; }
        .bg-search input::placeholder { color:var(--ink-600); opacity:0.7; }

        /* Categories */
        .bg-cats { max-width:1180px; margin:0 auto; padding:1.5rem 1.5rem 0; display:flex; flex-wrap:wrap; gap:0.7rem; }
        .bg-cat { padding:0.55rem 1.2rem; border-radius:999px; font-size:0.88rem; font-weight:600; cursor:pointer; border:1px solid var(--line); background:#fff; color:var(--ink-800); transition:all .16s ease; }
        .bg-cat:hover { border-color:var(--blue-600); color:var(--blue-600); }
        .bg-cat.active { background:var(--blue-600); border-color:var(--blue-600); color:#fff; }
        .bg-cat:focus-visible { outline:2px solid var(--amber-400); outline-offset:2px; }

        .bg-section { max-width:1180px; margin:0 auto; padding:2.5rem 1.5rem 0; }
        .bg-section:last-of-type { padding-bottom:5.5rem; }

        /* Featured */
        .bg-featured { display:grid; background:#fff; border:1px solid var(--line); border-radius:1.25rem; overflow:hidden; box-shadow:0 20px 50px -30px rgba(7,26,52,0.3); }
        @media (min-width:1024px){ .bg-featured{ grid-template-columns:1fr 1fr; } }
        .bg-featured img { width:100%; height:100%; min-height:16rem; object-fit:cover; display:block; }
        .bg-featured-body { padding:2.8rem; display:flex; flex-direction:column; }
        .bg-tag { display:inline-flex; align-self:flex-start; background:var(--sky-100); color:var(--blue-600); padding:0.4rem 1rem; border-radius:999px; font-size:0.78rem; font-weight:700; text-transform:uppercase; letter-spacing:0.05em; }
        .bg-featured-body h2 { font-size:clamp(1.6rem,3vw,2.1rem); font-weight:600; margin:1.2rem 0 0; line-height:1.25; }
        .bg-featured-body p.desc { color:var(--ink-600); margin-top:1rem; line-height:1.7; font-size:0.98rem; }
        .bg-meta { display:flex; flex-wrap:wrap; gap:1.5rem; margin-top:1.6rem; color:var(--ink-600); font-size:0.88rem; }
        .bg-meta span { display:flex; align-items:center; gap:0.45rem; }
        .bg-meta svg { color:var(--blue-600); }

        /* Grid */
        .bg-grid-head { display:flex; align-items:baseline; justify-content:space-between; margin-bottom:2rem; }
        .bg-grid-head h2 { font-size:clamp(1.8rem,3vw,2.2rem); font-weight:600; margin:0; }
        .bg-grid { display:grid; gap:1.75rem; }
        @media (min-width:768px){ .bg-grid{ grid-template-columns:repeat(2,1fr); } }
        @media (min-width:1024px){ .bg-grid{ grid-template-columns:repeat(3,1fr); } }

        .bg-card { background:#fff; border:1px solid var(--line); border-radius:1rem; overflow:hidden; transition:box-shadow .2s ease, transform .2s ease; display:flex; flex-direction:column; }
        .bg-card:hover { box-shadow:0 18px 40px -22px rgba(7,26,52,0.28); transform:translateY(-2px); }
        .bg-card img { width:100%; height:12rem; object-fit:cover; display:block; }
        .bg-card-body { padding:1.7rem; display:flex; flex-direction:column; flex:1; }
        .bg-card-cat { color:var(--blue-600); font-size:0.78rem; font-weight:700; text-transform:uppercase; letter-spacing:0.05em; }
        .bg-card h3 { font-size:1.25rem; font-weight:600; margin:0.7rem 0 0; line-height:1.35; }
        .bg-card p.desc { color:var(--ink-600); font-size:0.92rem; margin-top:0.8rem; line-height:1.55; flex:1; }
        .bg-card-meta { display:flex; justify-content:space-between; font-size:0.8rem; color:var(--ink-600); margin-top:1.3rem; padding-top:1.1rem; border-top:1px solid var(--line); }
        .bg-card-read { margin-top:1rem; font-weight:600; font-size:0.9rem; display:inline-flex; align-items:center; gap:0.4rem; }

        .bg-empty { text-align:center; color:var(--ink-600); padding:3rem 0; }

        /* Newsletter */
        .bg-newsletter { background:linear-gradient(120deg, var(--ink-950), #123B7C); color:#fff; text-align:center; }
        .bg-newsletter-inner { max-width:36rem; margin:0 auto; padding:5rem 1.5rem; }
        .bg-newsletter h2 { font-size:clamp(1.85rem,3.4vw,2.5rem); font-weight:600; }
        .bg-newsletter p { margin:1rem 0 2.2rem; color:#C9DBFC; font-size:1.02rem; }
        .bg-newsletter-form { display:flex; flex-direction:column; gap:0.9rem; max-width:26rem; margin:0 auto; }
        @media (min-width:480px){ .bg-newsletter-form{ flex-direction:row; } }
        .bg-newsletter-form input {
          flex:1; padding:1rem 1.2rem; border-radius:0.6rem; border:1px solid rgba(255,255,255,0.2);
          font-size:0.95rem; font-family:'Inter', sans-serif; outline:none; background:rgba(255,255,255,0.08); color:#fff;
        }
        .bg-newsletter-form input::placeholder { color:#9CC0FF; }
        .bg-newsletter-form input:focus-visible { outline:2px solid var(--amber-400); }
        .bg-newsletter-success { display:flex; align-items:center; justify-content:center; gap:0.6rem; color:var(--amber-400); font-weight:600; }
      `}</style>

      {/* Hero */}
      <section className="bg-hero">
        <div className="bg-hero-inner">
          <div className="bg-hero-icon">
            <BookOpen size={28} />
          </div>
          <h1>LoanHub blog</h1>
          <p>
            Stay informed with expert financial advice, loan guides, credit
            score tips, EMI planning, and personal finance articles.
          </p>
        </div>
      </section>

      {/* Search */}
      <div className="bg-search-wrap">
        <div className="bg-search">
          <Search size={19} />
          <input
            type="text"
            placeholder="Search articles…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Categories */}
      <div className="bg-cats">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`bg-cat ${selectedCategory === category ? "active" : ""}`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Featured */}
      {featured && (
        <section className="bg-section">
          <div className="bg-featured">
            <img src={featured.image} alt={featured.title} />
            <div className="bg-featured-body">
              <span className="bg-tag">Featured</span>
              <h2>{featured.title}</h2>
              <p className="desc">{featured.description}</p>
              <div className="bg-meta">
                <span><User size={16} />{featured.author}</span>
                <span><Calendar size={16} />{featured.date}</span>
                <span><Clock size={16} />{featured.readTime}</span>
              </div>
              <button className="bg-btn bg-btn-solid" style={{ marginTop: "1.8rem", alignSelf: "flex-start" }}>
                Read more <ArrowRight size={17} />
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="bg-section">
        <div className="bg-grid-head">
          <h2>Latest articles</h2>
        </div>

        {filteredBlogs.length === 0 ? (
          <div className="bg-empty">No matching articles found.</div>
        ) : restBlogs.length === 0 ? (
          <div className="bg-empty">You're all caught up — that's the only match.</div>
        ) : (
          <div className="bg-grid">
            {restBlogs.map((blog) => (
              <div className="bg-card" key={blog.id}>
                <img src={blog.image} alt={blog.title} />
                <div className="bg-card-body">
                  <span className="bg-card-cat">{blog.category}</span>
                  <h3>{blog.title}</h3>
                  <p className="desc">{blog.description}</p>
                  <div className="bg-card-meta">
                    <span>{blog.author}</span>
                    <span>{blog.date}</span>
                  </div>
                  <button className="bg-btn bg-btn-text bg-card-read">
                    Read article <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Newsletter */}
      <section className="bg-newsletter">
        <div className="bg-newsletter-inner">
          <h2>Subscribe to our newsletter</h2>
          <p>Receive the latest finance tips, loan updates, and exclusive offers directly in your inbox.</p>

          {subscribed ? (
            <div className="bg-newsletter-success">
              <CheckCircle2 size={20} />
              You're subscribed — welcome aboard.
            </div>
          ) : (
            <form
              className="bg-newsletter-form"
              onSubmit={(e) => { e.preventDefault(); setSubscribed(true); }}
            >
              <input type="email" required placeholder="Enter your email" />
              <button type="submit" className="bg-btn bg-btn-primary">
                Subscribe
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;