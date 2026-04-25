import { useMemo, useState } from "react";
import logo from "../logo.jpg";

const services = [
  {
    title: "Business Strategy to Digital Execution",
    description: "Turn raw ideas into clear offers, positioning, and implementation roadmaps.",
  },
  {
    title: "Brand and Experience Systems",
    description: "Craft memorable brand presence across website, content, and customer touchpoints.",
  },
  {
    title: "Web Platforms and Growth Funnels",
    description: "Build conversion-focused websites and funnels that support sales and trust.",
  },
  {
    title: "Innovation and AI Integration",
    description: "Use practical AI workflows and automation to improve speed, decisions, and scale.",
  },
];

const processSteps = [
  "Discover business intent, audience needs, and growth opportunities",
  "Shape idea into strategy, brand narrative, and product direction",
  "Execute with design, technology, and scalable systems",
  "Launch, measure impact, and optimize for continuous growth",
];

const blogHighlights = [
  {
    title: "I Let an Autonomous Agent Refactor My Legacy Codebase",
    url: "https://medium.com/towards-artificial-intelligence/i-let-an-autonomous-agent-refactor-my-legacy-codebase-the-result-was-terrifying-c0a60aee468e",
  },
  {
    title: "The Transformer Architecture Is Being Replaced",
    url: "https://medium.com/towards-artificial-intelligence/the-transformer-architecture-is-being-replaced-what-47-000-hours-of-training-data-revealed-e483c5ad7c6c",
  },
  {
    title: "I Deleted the Admin Panel. And I'm Never Going Back.",
    url: "https://medium.com/towards-artificial-intelligence/i-deleted-the-admin-panel-and-im-never-going-back-a0d2b3c4a38c",
  },
  {
    title: "Anthropic Promised Claude Opus 4.7 Would Change Everything",
    url: "https://medium.com/p/66d0602ae94d",
  },
];

const impactStats = [
  { value: "60+", label: "Ideas Transformed" },
  { value: "30+", label: "Brands Empowered" },
  { value: "4x", label: "Faster Execution Cycles" },
  { value: "360°", label: "Business + Tech Thinking" },
];

const whoWeHelp = [
  "Startup founders building from scratch",
  "Small businesses scaling to digital-first operations",
  "Creators and coaches launching authority brands",
  "Agencies needing execution partners for delivery",
];

const outcomes = [
  "Clear brand positioning and offer structure",
  "High-trust digital presence that converts",
  "Simpler internal workflows with automation",
  "Data-backed growth experiments and iteration",
];

const featuredWork = [
  {
    title: "AI Coaching Brand Launch",
    summary: "Designed full brand + website funnel with lead magnet and booking workflow.",
    impact: "2.8x increase in qualified consultations in 8 weeks.",
  },
  {
    title: "Service Business Revamp",
    summary: "Rebuilt messaging architecture, service pages, and conversion flow for local business.",
    impact: "41% lower drop-offs and stronger inquiry quality.",
  },
  {
    title: "Innovation Studio Presence",
    summary: "Created authority-focused content system linked with insights and thought leadership.",
    impact: "Doubled repeat visitors and improved inbound trust.",
  },
];

const testimonials = [
  {
    quote:
      "ADI helped us move from confusion to clarity. We now have a brand and platform that actually tells our story.",
    author: "Founder, Early-stage SaaS",
  },
  {
    quote:
      "The team understood both business and design. It felt like strategy consulting plus execution in one place.",
    author: "Director, Growth Services Firm",
  },
];

const faqs = [
  {
    question: "Do you only build websites?",
    answer:
      "No. We work across strategy, brand, positioning, digital systems, and execution so your business can scale with direction.",
  },
  {
    question: "Can you help if our idea is still raw?",
    answer:
      "Yes. We specialize in idea shaping and turning early concepts into a clear roadmap and launchable digital experience.",
  },
  {
    question: "Do you support after launch?",
    answer:
      "Absolutely. We stay involved for optimization, analytics, and growth improvements after go-live.",
  },
];

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const year = useMemo(() => new Date().getFullYear(), []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus("Thanks! Your request is saved. I can connect this form to email/WhatsApp next.");
    setForm({ name: "", email: "", company: "", message: "" });
  };

  return (
    <div className="app">
      <div className="bg-orb orb-one" aria-hidden="true" />
      <div className="bg-orb orb-two" aria-hidden="true" />
      <div className="bg-orb orb-three" aria-hidden="true" />
      <header className="site-header">
        <div className="container nav-wrap">
          <a href="#home" className="brand">
            <img src={logo} alt="ADI Insights & Innovations logo" />
            <span>ADI Insights & Innovations</span>
          </a>

          <button
            className="menu-toggle"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? "Close" : "Menu"}
          </button>

          <nav className={`menu ${mobileMenuOpen ? "open" : ""}`}>
            <a href="#services" onClick={() => setMobileMenuOpen(false)}>
              Capabilities
            </a>
            <a href="#work" onClick={() => setMobileMenuOpen(false)}>
              Work
            </a>
            <a href="#results" onClick={() => setMobileMenuOpen(false)}>
              Results
            </a>
            <a href="#process" onClick={() => setMobileMenuOpen(false)}>
              Process
            </a>
            <a href="#blog" onClick={() => setMobileMenuOpen(false)}>
              Blog
            </a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </a>
          </nav>
          <a className="btn small desktop-cta" href="#contact">
            Let's Build Together
          </a>
        </div>
      </header>

      <main id="home">
        <section className="hero section">
          <div className="container hero-grid">
            <div>
              <p className="tag">Business Growth + Innovation + Digital Execution</p>
              <h1>We Empower Ideas into Scalable Businesses, Brands, and Platforms</h1>
              <p className="lead">
                ADI Insights & Innovations partners with founders, creators, and teams to turn bold ideas into
                meaningful impact through strategy, technology, storytelling, and execution.
              </p>
              <div className="actions">
                <a className="btn" href="#contact">
                  Start Your Growth Journey
                </a>
                <a className="btn ghost" href="https://medium.com/@adiinsightsinnovations" target="_blank" rel="noreferrer">
                  View Medium
                </a>
              </div>
            </div>
            <aside className="hero-card">
              <h3>Why Work With ADI</h3>
              <ul>
                <li>We move from idea clarity to market-ready digital execution.</li>
                <li>We combine business thinking, design, and engineering in one flow.</li>
                <li>We build for long-term outcomes, not one-time delivery.</li>
              </ul>
            </aside>
          </div>
          <div className="container">
            <div className="impact-strip">
              {impactStats.map((stat) => (
                <article key={stat.label} className="impact-pill">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="section alt">
          <div className="container">
            <h2>Capabilities</h2>
            <p className="section-intro">
              Beyond website building, we help shape strategy, unlock business potential, and bring ideas to life.
            </p>
            <div className="grid cards">
              {services.map((item) => (
                <article key={item.title} className="card">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>Who We Empower</h2>
            <p className="section-intro">We collaborate with teams that want clarity, momentum, and meaningful digital growth.</p>
            <div className="grid who-grid">
              {whoWeHelp.map((audience) => (
                <article key={audience} className="mini-card">
                  <p>{audience}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="section alt">
          <div className="container">
            <h2>Featured Work Snapshots</h2>
            <p className="section-intro">
              A few examples of how ideas were translated into real outcomes across strategy, design, and execution.
            </p>
            <div className="grid work-grid">
              {featuredWork.map((item) => (
                <article key={item.title} className="work-card">
                  <h3>{item.title}</h3>
                  <p>{item.summary}</p>
                  <div className="impact-line">{item.impact}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="results" className="section">
          <div className="container">
            <h2>Outcomes We Focus On</h2>
            <div className="grid outcomes-grid">
              {outcomes.map((outcome) => (
                <article key={outcome} className="outcome-card">
                  <span className="check">✓</span>
                  <p>{outcome}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="section">
          <div className="container">
            <h2>How We Build Impact</h2>
            <div className="grid timeline">
              {processSteps.map((step, index) => (
                <article key={step} className="step">
                  <strong>Step {index + 1}</strong>
                  <span>{step}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="blog" className="section alt">
          <div className="container">
            <h2>Insights and Ideas</h2>
            <p className="section-intro">
              Our articles reflect how we think about AI, product decisions, business systems, and future-ready growth.
            </p>
            <div className="grid cards">
              {blogHighlights.map((post) => (
                <article key={post.title} className="card">
                  <h3>
                    <a className="post-link" href={post.url} target="_blank" rel="noreferrer">
                      {post.title}
                    </a>
                  </h3>
                  <p>Read this on your Medium profile to learn more about your insights and style.</p>
                  <a className="btn small" href={post.url} target="_blank" rel="noreferrer">
                    Read on Medium
                  </a>
                </article>
              ))}
            </div>
            <div className="blog-cta">
              <a className="btn ghost" href="https://medium.com/@adiinsightsinnovations" target="_blank" rel="noreferrer">
                Visit Full Medium Blog
              </a>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>What Clients Say</h2>
            <div className="grid testimonial-grid">
              {testimonials.map((item) => (
                <article key={item.author} className="quote-card">
                  <p>"{item.quote}"</p>
                  <span>{item.author}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section alt">
          <div className="container">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-list">
              {faqs.map((faq) => (
                <article key={faq.question} className="faq-item">
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section accent">
          <div className="container contact-layout">
            <div className="contact-copy">
              <h2>Contact Us</h2>
              <p>Tell us your vision, challenge, or idea, and we will help shape it into a focused growth plan.</p>
              <p className="contact-placeholder">
                Email:{" "}
                <a href="mailto:adiinsightsandinnovations@gmail.com">adiinsightsandinnovations@gmail.com</a>
              </p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <label>
                Name
                <input name="name" value={form.name} onChange={handleChange} required />
              </label>
              <label>
                Email
                <input name="email" type="email" value={form.email} onChange={handleChange} required />
              </label>
              <label>
                Company
                <input name="company" value={form.company} onChange={handleChange} />
              </label>
              <label>
                Project Brief
                <textarea name="message" rows="4" value={form.message} onChange={handleChange} required />
              </label>
              <button className="btn" type="submit">
                Send Request
              </button>
              {status && <p className="status">{status}</p>}
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>© {year} ADI Insights & Innovations. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
