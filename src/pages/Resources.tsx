import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, BookOpen, Download, FileText, FileSpreadsheet, BarChart3,
  ChevronDown, Check, Calculator,
} from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";

const blogs = [
  { tag: "Metrics", title: "The 5 Financial Metrics Every Service Firm Must Track Past $2M", excerpt: "From gross margin per client to cash conversion cycles — the metrics that actually predict your next stage.", read: "6 min", date: "Apr 2026" },
  { tag: "CFO 101", title: "Why Your Bookkeeper Can't Replace a CFO", excerpt: "The clear lines between bookkeeping, controllership, and CFO work — and how to know what your firm needs.", read: "5 min", date: "Mar 2026" },
  { tag: "Cash Flow", title: "How to Build a 13-Week Cash Flow Forecast", excerpt: "A step-by-step playbook for the most important short-term planning tool growing firms can build.", read: "8 min", date: "Mar 2026" },
  { tag: "Dashboards", title: "KPI Dashboards for Agency Owners: A Complete Guide", excerpt: "What to track, how to visualize it, and the cadence to review it with your leadership team.", read: "9 min", date: "Feb 2026" },
  { tag: "Hiring", title: "When Is It Time to Hire a Fractional CFO?", excerpt: "Five inflection points when bringing in CFO-level help unlocks more value than it costs.", read: "4 min", date: "Feb 2026" },
];

const guides = [
  { icon: FileText, title: "CFO Readiness Checklist", desc: "12-page PDF", bullets: ["50-point readiness audit", "Roles & responsibilities map", "Stage-by-stage rollout plan"] },
  { icon: FileSpreadsheet, title: "Cash Flow Forecast Template", desc: "Excel workbook", bullets: ["13-week rolling model", "Scenario toggles", "Bank balance tracker"] },
  { icon: BarChart3, title: "KPI Dashboard Template", desc: "Power BI / Excel", bullets: ["Service-firm KPI library", "Drill-down by client/project", "Monthly review template"] },
];

const faqs = [
  { q: "How is TheCFO.Site different from a bookkeeper?", a: "Bookkeepers record what happened. We interpret what it means, build the systems and dashboards your leadership team needs, and partner on what to do next." },
  { q: "What does a fractional CFO actually do day-to-day?", a: "We run your monthly close cycle, deliver management reports, maintain rolling forecasts, prepare board materials, and act as the financial sounding board for major decisions." },
  { q: "How much does it cost?", a: "Engagements typically range from $2,500 to $8,000 per month depending on scope and stage. Most firms save $200K+ annually vs a full-time CFO hire." },
  { q: "How long does an engagement typically last?", a: "Our average engagement is 24+ months. We're built for long-term partnership — most clients grow with us through multiple stages." },
  { q: "What size of business do you work with?", a: "Service-based businesses scaling from $2M to $30M+ in annual revenue. That's our sweet spot." },
  { q: "How quickly can you start?", a: "Onboarding typically begins within one week of signing. Full reporting cadence is live within 30 days." },
  { q: "What accounting software do you support?", a: "QuickBooks Online, QuickBooks Advanced, and Xero. We pair them with Dext, Hubdoc, Plooto, QBO Time, and Power BI." },
  { q: "Do we need to change our current systems?", a: "Not necessarily. We do a stack review during onboarding and only recommend changes if there's clear ROI." },
];

const benchmarks: Record<string, number> = { Toronto: 185000, Vancouver: 195000, Calgary: 175000, Montreal: 165000, Other: 170000 };

const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="card-warm">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 p-6 text-left"
      >
        <span className="font-bold text-navy">{q}</span>
        <ChevronDown className={`w-5 h-5 text-amber transition-transform shrink-0 ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 text-sm leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Resources() {
  // calculator state
  const [roles, setRoles] = useState<Record<string, boolean>>({ Bookkeeper: false, Accountant: false, Controller: true, CFO: true });
  const [city, setCity] = useState("Toronto");
  const [hours, setHours] = useState(80);

  const baseSalary = benchmarks[city];
  const benefits = baseSalary * 0.25;
  const software = 8000;
  const recruiting = 18500;
  const training = 5000;
  const fullTimeTotal = baseSalary + benefits + software + recruiting + training;
  const fractionalAnnual = Math.round(hours * 50 * 12);
  const savings = fullTimeTotal - fractionalAnnual;

  return (
    <>
      {/* HERO */}
      <section className="bg-canvas pt-36 lg:pt-40 pb-16 lg:pb-20">
        <div className="container-page max-w-4xl">
          <Reveal><p className="overline mb-4">Resources</p></Reveal>
          <Reveal delay={0.05}>
            <h1 className="h1">Tools and Insights to Help You <span className="accent-word">Scale</span></h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lead mt-6 max-w-2xl">
              Articles, downloadable templates, and an interactive cost calculator — built for
              service-firm owners and operators.
            </p>
          </Reveal>
        </div>
      </section>

      {/* BLOG */}
      <section className="bg-white section-pad">
        <div className="container-page">
          <Reveal><p className="overline mb-4">Insights</p></Reveal>
          <Reveal delay={0.05}><h2 className="h2 mb-12">Latest <span className="accent-word">Articles</span></h2></Reveal>
          <Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((b) => (
              <StaggerItem key={b.title}>
                <article className="card-warm card-hover p-6 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4 text-xs">
                    <span className="px-2.5 py-1 rounded-md bg-amber/10 text-amber font-semibold uppercase tracking-wider">{b.tag}</span>
                    <span className="text-bodytext flex items-center gap-1"><BookOpen className="w-3 h-3" /> {b.read}</span>
                  </div>
                  <h3 className="text-base font-bold text-navy leading-snug mb-3">{b.title}</h3>
                  <p className="text-sm leading-relaxed flex-1">{b.excerpt}</p>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-xs text-bodytext">{b.date}</span>
                    <span className="amber-link">Read Article <ArrowRight className="w-3.5 h-3.5" /></span>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* GUIDES */}
      <section className="bg-canvas section-pad">
        <div className="container-page">
          <Reveal><p className="overline mb-4">Guides & Templates</p></Reveal>
          <Reveal delay={0.05}><h2 className="h2 mb-12">Free <span className="accent-word">Downloads</span></h2></Reveal>
          <Stagger className="grid md:grid-cols-3 gap-6">
            {guides.map((g) => (
              <StaggerItem key={g.title}>
                <div className="card-warm card-hover p-7 h-full flex flex-col">
                  <div className="aspect-[4/3] rounded-lg bg-navy/95 mb-5 flex items-center justify-center">
                    <g.icon className="w-12 h-12 text-amber" />
                  </div>
                  <h3 className="h3 mb-1">{g.title}</h3>
                  <p className="text-xs uppercase tracking-wider text-amber font-semibold mb-3">{g.desc}</p>
                  <ul className="space-y-2 mb-5 flex-1">
                    {g.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-amber mt-0.5 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => alert("Enter your email to download — feature coming soon")}
                    className="btn-primary w-full"
                  >
                    Download Free <Download className="w-4 h-4" />
                  </button>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* CALCULATOR */}
      <section id="calculator" className="bg-white section-pad scroll-mt-24">
        <div className="container-page">
          <Reveal><p className="overline mb-4">Pricing Calculator</p></Reveal>
          <Reveal delay={0.05}>
            <h2 className="h2 mb-3">See What You'd <span className="accent-word">Save</span></h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lead max-w-2xl mb-12">Compare a full-time hire to TheCFO.Site fractional model.</p>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Inputs */}
            <Reveal delay={0.15}>
              <div className="card-warm p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="icon-tile"><Calculator className="w-5 h-5" /></div>
                  <h3 className="h3">Tell Us About Your Need</h3>
                </div>

                <div className="mb-7">
                  <p className="overline mb-3">Step 1 — Roles needed</p>
                  <div className="grid grid-cols-2 gap-2">
                    {Object.keys(roles).map((r) => (
                      <label key={r} className={`flex items-center gap-2 p-3 rounded-lg border cursor-pointer transition-all ${roles[r] ? "border-amber bg-amber/5" : "border-[hsl(var(--border-warm))]"}`}>
                        <input
                          type="checkbox"
                          checked={roles[r]}
                          onChange={(e) => setRoles({ ...roles, [r]: e.target.checked })}
                          className="accent-amber"
                        />
                        <span className="text-sm font-semibold text-navy">{r}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="mb-7">
                  <p className="overline mb-3">Step 2 — Location</p>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-[hsl(var(--border-warm))] bg-white text-navy font-semibold focus:outline-none focus:border-amber"
                  >
                    {Object.keys(benchmarks).map((c) => <option key={c}>{c}</option>)}
                  </select>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <p className="overline">Step 3 — Hours / month</p>
                    <span className="text-lg font-extrabold text-navy">{hours}h</span>
                  </div>
                  <input
                    type="range" min={10} max={160} step={5}
                    value={hours}
                    onChange={(e) => setHours(Number(e.target.value))}
                    className="w-full accent-amber"
                  />
                  <div className="flex justify-between text-xs text-bodytext mt-1">
                    <span>10h</span><span>160h</span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Results */}
            <Reveal delay={0.2}>
              <div className="card-warm p-8 bg-navy text-white border-navy">
                <p className="overline !text-amber mb-3">Your Comparison</p>
                <h3 className="text-2xl font-extrabold mb-6">Annual Cost</h3>

                <div className="space-y-3 text-sm">
                  {[
                    ["Base Salary", `$${baseSalary.toLocaleString()}`, "—"],
                    ["Benefits 25%", `$${benefits.toLocaleString()}`, "Included"],
                    ["Software", `$${software.toLocaleString()}`, "Included"],
                    ["Recruiting", `$${recruiting.toLocaleString()}`, "—"],
                    ["Training", `$${training.toLocaleString()}`, "—"],
                  ].map(([l, ft, frac]) => (
                    <div key={l} className="grid grid-cols-3 gap-2 py-2 border-b border-white/10">
                      <span className="text-white/70">{l}</span>
                      <span className="text-right">{ft}</span>
                      <span className="text-right text-amber">{frac}</span>
                    </div>
                  ))}
                  <div className="grid grid-cols-3 gap-2 pt-3 font-bold">
                    <span>Total</span>
                    <span className="text-right">${fullTimeTotal.toLocaleString()}</span>
                    <span className="text-right text-amber">${fractionalAnnual.toLocaleString()}</span>
                  </div>
                </div>

                <div className="mt-7 p-5 rounded-xl bg-amber text-navy">
                  <p className="text-xs font-semibold uppercase tracking-wider opacity-70">Your Savings</p>
                  <p className="text-3xl font-extrabold tracking-tight">${Math.max(0, savings).toLocaleString()}/yr</p>
                </div>

                <p className="text-xs text-white/60 mt-5">
                  Plus, you get a team with cross-industry experience — not a single hire who may leave in 18 months.
                </p>
                <Link to="/contact" className="btn-on-dark w-full mt-6">
                  Book a Free Call <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-canvas section-pad">
        <div className="container-page max-w-3xl">
          <Reveal><p className="overline mb-4">FAQ</p></Reveal>
          <Reveal delay={0.05}><h2 className="h2 mb-10">Common <span className="accent-word">Questions</span></h2></Reveal>
          <div className="space-y-3">
            {faqs.map((f) => <Reveal key={f.q}><FAQItem {...f} /></Reveal>)}
          </div>
        </div>
      </section>
    </>
  );
}
