import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Download, FileText, FileSpreadsheet, BarChart3, X } from "lucide-react";
import { Stagger, StaggerItem } from "@/components/site/Reveal";
import { PageHero, PageCTA } from "@/components/site/PageHero";

const guides = [
  { icon: FileText, title: "CFO Readiness Checklist", desc: "12-page PDF", bullets: ["50-point readiness audit", "Roles & responsibilities map", "Stage-by-stage rollout plan"] },
  { icon: FileSpreadsheet, title: "Cash Flow Forecast Template", desc: "Excel workbook", bullets: ["13-week rolling model", "Scenario toggles", "Bank balance tracker"] },
  { icon: BarChart3, title: "KPI Dashboard Template", desc: "Power BI / Excel", bullets: ["Service-firm KPI library", "Drill-down by client/project", "Monthly review template"] },
];

export default function Guides() {
  const [active, setActive] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        overline="Guides & Templates"
        title="Free downloads built for"
        accent="operators"
        subtitle="Three templates we use with paying clients — yours in exchange for an email."
        crumbs={[{ label: "Home", to: "/" }, { label: "Resources", to: "/resources" }, { label: "Guides" }]}
      />
      <section className="bg-white section-pad">
        <div className="container-page">
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
                        <Check className="w-4 h-4 text-amber mt-0.5 shrink-0" /><span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <button onClick={() => { setActive(g.title); setSent(false); setEmail(""); }} className="btn-primary w-full">
                    Download Free <Download className="w-4 h-4" />
                  </button>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
      <PageCTA title="Need something" accent="more tailored?" body="We'll send a templated model adapted to your business model on request." cta="Talk to Us" />

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-navy/70 flex items-center justify-center p-4"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 20, opacity: 0 }}
              className="bg-white rounded-2xl p-8 max-w-md w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setActive(null)} className="absolute top-4 right-4 text-navy/60 hover:text-navy"><X className="w-5 h-5" /></button>
              {!sent ? (
                <>
                  <p className="overline mb-3">Almost there</p>
                  <h3 className="h2 mb-3">Get the <span className="accent-word">{active}</span></h3>
                  <p className="text-sm mb-6">Enter your email and we'll send the file straight to your inbox.</p>
                  <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-3">
                    <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@company.com"
                      className="w-full px-4 py-3 rounded-lg border border-[hsl(var(--border-warm))] bg-white text-navy focus:outline-none focus:border-amber" />
                    <button className="btn-primary w-full">Email me the download</button>
                  </form>
                </>
              ) : (
                <div className="text-center py-4">
                  <div className="w-14 h-14 rounded-full bg-amber/10 text-amber flex items-center justify-center mx-auto mb-4"><Check className="w-7 h-7" /></div>
                  <h3 className="h2 mb-2">Check your inbox</h3>
                  <p className="text-sm">We sent <span className="font-semibold text-navy">{active}</span> to <span className="font-semibold text-navy">{email}</span>.</p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}