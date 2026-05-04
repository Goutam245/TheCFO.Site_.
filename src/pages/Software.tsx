import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Check, ArrowRight, Star } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

const T1 = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=85";

const tools = [
  {
    id: "quickbooks", name: "QuickBooks Advanced", category: "Accounting & ERP", color: "#2CA01C",
    desc: ["Our core platform for larger clients needing advanced reporting, custom roles, batch invoicing, and detailed job costing.", "QBO Advanced unlocks the workflows that mid-market service firms outgrow basic ledgers for — without the complexity of legacy ERPs.", "Best for: $5M+ firms running multi-entity, multi-location, or project-heavy operations."],
    benefits: ["Custom user roles & approval workflows", "Batch invoicing & recurring billing", "Project-level job costing", "Advanced KPI tracking"],
  },
  {
    id: "xero", name: "Xero", category: "Accounting & ERP", color: "#13B5EA",
    desc: ["Cloud accounting for clients preferring a streamlined interface with strong bank feeds and multi-currency support.", "Xero shines for firms that value clean UX, fast onboarding, and a deep app marketplace.", "Best for: $2M–$10M firms, especially those operating across borders."],
    benefits: ["Beautiful, fast UX", "Multi-currency built-in", "1,000+ app integrations", "Strong bank feeds"],
  },
  {
    id: "qbotime", name: "QuickBooks Time", category: "Time Tracking", color: "#2CA01C",
    desc: ["Employee time tracking, job costing, and billable hours — critical for service firms tracking utilization.", "Direct sync into QuickBooks means no double entry and clean billable margin reporting.", "Best for: agencies, law firms, and consultancies tracking utilization."],
    benefits: ["Mobile + GPS clock-in", "Project & client allocation", "Direct QBO sync", "Approval workflows"],
  },
  {
    id: "dext", name: "Dext", category: "Receipt Capture", color: "#7C3AED",
    desc: ["Automated receipt capture and categorization, eliminating manual data entry at the source.", "Snap, email, or scan — Dext extracts and codes transactions before they hit the ledger.", "Best for: any firm with high transaction volume or expense reports."],
    benefits: ["99% accurate OCR", "Auto-categorization rules", "Mobile capture app", "QBO/Xero sync"],
  },
  {
    id: "hubdoc", name: "Hubdoc", category: "Document Management", color: "#1E88E5",
    desc: ["Fetching bills, statements, and receipts automatically from vendors and financial institutions.", "Hubdoc closes the loop on document collection so month-end isn't a scavenger hunt.", "Best for: firms with many recurring vendors and bank/credit card sources."],
    benefits: ["Auto-fetch from 700+ sources", "Document storage & search", "Native Xero integration", "Audit-ready archive"],
  },
  {
    id: "plooto", name: "Plooto", category: "Payments & AP Automation", color: "#3B82F6",
    desc: ["Automating vendor payments, approval workflows, and payment reconciliation — replacing manual cheques.", "Plooto turns AP into a controlled, auditable workflow with multi-approver paths.", "Best for: firms moving away from cheques and email-based approvals."],
    benefits: ["Multi-step approvals", "EFT, ACH & cheque", "Automatic 2-way sync", "Audit trail per payment"],
  },
  {
    id: "powerbi", name: "Microsoft Power BI", category: "Business Intelligence", color: "#F2C811",
    desc: ["Custom dashboards turning financial data into actionable insights for leadership.", "We build dashboards on top of your accounting and operational data so the leadership team sees the same numbers we do.", "Best for: every client — this is where reporting becomes real-time."],
    benefits: ["Real-time refresh", "Drill-down by client/project", "Mobile-friendly views", "Connects to QBO, Xero, SQL"],
  },
];

export default function Software() {
  const [active, setActive] = useState(tools[0].id);

  useEffect(() => {
    const onScroll = () => {
      for (const t of tools) {
        const el = document.getElementById(t.id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top < 200 && rect.bottom > 200) {
          setActive(t.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="bg-canvas pt-36 lg:pt-40 pb-16 lg:pb-20">
        <div className="container-page max-w-4xl">
          <Reveal><p className="overline mb-4">Our Tech Stack</p></Reveal>
          <Reveal delay={0.05}>
            <h1 className="h1">The Tools We've <span className="accent-word">Built Our Practice</span> Around</h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lead mt-6 max-w-2xl">
              We believe the right tools eliminate busywork and surface insights faster. Each tool is
              chosen for reliability, integration capabilities, and value to service-based businesses.
            </p>
          </Reveal>
        </div>
      </section>

      {/* JUMP-TO BAR */}
      <div className="sticky top-[72px] z-30 bg-cardwarm/85 backdrop-blur-md border-y border-[hsl(var(--border-warm))]">
        <div className="container-page py-3 flex gap-2 overflow-x-auto">
          {tools.map((t) => (
            <a
              key={t.id}
              href={`#${t.id}`}
              className={`shrink-0 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                active === t.id
                  ? "bg-navy text-white"
                  : "text-bodytext hover:text-navy hover:bg-secondarywarm"
              }`}
            >
              {t.name.split(" ")[0]}
            </a>
          ))}
        </div>
      </div>

      {/* TOOL SECTIONS */}
      {tools.map((tool, idx) => (
        <section
          key={tool.id}
          id={tool.id}
          className={`${idx % 2 === 0 ? "bg-white" : "bg-canvas"} section-pad scroll-mt-32`}
        >
          <div className="container-page grid lg:grid-cols-12 gap-10 items-center">
            <Reveal className={`lg:col-span-5 ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
              <div className="card-warm p-10 flex items-center justify-center aspect-square max-w-sm mx-auto">
                <div className="text-center">
                  <div
                    className="w-24 h-24 rounded-2xl mx-auto flex items-center justify-center text-white text-3xl font-extrabold mb-4"
                    style={{ backgroundColor: tool.color }}
                  >
                    {tool.name.charAt(0)}
                  </div>
                  <p className="text-2xl font-extrabold text-navy tracking-tight">{tool.name}</p>
                  <p className="text-xs uppercase tracking-wider text-amber font-semibold mt-2">{tool.category}</p>
                </div>
              </div>
            </Reveal>
            <div className={`lg:col-span-7 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
              <Reveal>
                <span className="inline-block px-3 py-1 rounded-md bg-amber/10 text-amber text-xs font-semibold uppercase tracking-wider mb-4">
                  {tool.category}
                </span>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="h2 mb-5">{tool.name}</h2>
              </Reveal>
              <div className="space-y-4 mb-7">
                {tool.desc.map((p, i) => (
                  <Reveal key={i} delay={0.1 + i * 0.05}>
                    <p className="text-sm leading-relaxed">{p}</p>
                  </Reveal>
                ))}
              </div>
              <Reveal delay={0.25}>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {tool.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-amber mt-0.5 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>
      ))}

      {/* DATA FLOW */}
      <section className="bg-white section-pad">
        <div className="container-page">
          <div className="max-w-3xl mb-10">
            <Reveal><p className="overline mb-4">How It All Connects</p></Reveal>
            <Reveal delay={0.05}>
              <h2 className="h2">One <span className="accent-word">Integrated</span> Flow</h2>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="card-warm p-8 lg:p-12">
              <div className="grid md:grid-cols-5 gap-4 items-center text-center">
                {[
                  { name: "Dext / Hubdoc", sub: "Capture" },
                  { name: "→", sub: "" },
                  { name: "QBO / Xero", sub: "Ledger" },
                  { name: "→", sub: "" },
                  { name: "Power BI", sub: "Insights" },
                ].map((n, i) => (
                  <div key={i}>
                    {n.name === "→" ? (
                      <ArrowRight className="w-6 h-6 text-amber mx-auto rotate-90 md:rotate-0" />
                    ) : (
                      <div className="card-warm p-4 bg-white">
                        <p className="font-bold text-navy">{n.name}</p>
                        <p className="text-xs text-amber uppercase tracking-wider font-semibold mt-1">{n.sub}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <p className="text-center text-sm text-bodytext mt-8 max-w-xl mx-auto">
                With Plooto handling outflows and QuickBooks Time feeding job costing — every dollar
                in and out is captured, coded, and reportable.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-14 max-w-2xl mx-auto card-warm p-8 text-center">
              <div className="flex items-center justify-center gap-1 text-amber mb-4">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="italic text-bodytext leading-relaxed">
                "We didn't realize how much time we were losing to data entry until they migrated us
                onto this stack. Month-end went from 12 days to 3."
              </p>
              <div className="mt-5 flex items-center justify-center gap-3">
                <img src={T1} alt="" loading="lazy" className="w-10 h-10 rounded-full object-cover" />
                <p className="text-sm font-semibold text-navy">Sarah Mitchell <span className="text-bodytext font-normal">— Mitchell Law Group</span></p>
              </div>
            </div>
          </Reveal>

          <div className="text-center mt-10">
            <Link to="/contact" className="btn-primary">
              Book a Free Stack Review <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
