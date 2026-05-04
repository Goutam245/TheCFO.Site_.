import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, GraduationCap, DollarSign, Users, ChevronDown, ArrowRight, MapPin } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";

const benefits = [
  { icon: Globe, title: "100% Remote", body: "Work from anywhere. We've been remote since day one." },
  { icon: GraduationCap, title: "Growth-First", body: "Certifications paid for, mentorship built into your week." },
  { icon: DollarSign, title: "Competitive Pay", body: "Market-rate compensation with profit-sharing for senior roles." },
  { icon: Users, title: "Variety", body: "Work with 10+ industries — never get bored." },
];

const jobs = [
  { title: "Senior CFO Advisor", level: "Senior", loc: "Remote", pay: "$100K–$140K", desc: "Lead client engagements end-to-end. Own board reporting, strategic forecasting, and quarterly business reviews for 4–6 mid-market service firms." },
  { title: "Controller", level: "Senior", loc: "Remote", pay: "$75K–$95K", desc: "Run monthly close cycles, technical accounting, and team management for a portfolio of clients. CPA preferred." },
  { title: "Senior Bookkeeper", level: "Mid", loc: "Remote", pay: "$45K–$65K", desc: "Own day-to-day ledger work, AP/AR cycles, and bank reconciliations for assigned client portfolio." },
  { title: "Power BI Analyst", level: "Mid", loc: "Remote", pay: "$55K–$80K", desc: "Build and maintain client dashboards. Translate financial data into operator-grade visualizations." },
];

const Job = ({ j }: { j: typeof jobs[0] }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="card-warm">
      <button onClick={() => setOpen((v) => !v)} className="w-full flex items-center gap-4 p-6 text-left">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-navy">{j.title}</h3>
          <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-bodytext">
            <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {j.loc}</span>
            <span>•</span>
            <span className="font-semibold text-amber">{j.pay}</span>
            <span>•</span>
            <span className="px-2 py-0.5 rounded-md bg-secondarywarm text-navy font-semibold">{j.level}</span>
          </div>
        </div>
        <ChevronDown className={`w-5 h-5 text-amber transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
            <div className="px-6 pb-6">
              <p className="text-sm leading-relaxed mb-5">{j.desc}</p>
              <button className="btn-primary">Apply Now <ArrowRight className="w-4 h-4" /></button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Careers() {
  const [filter, setFilter] = useState<"All" | "Senior" | "Mid" | "Entry">("All");
  const filtered = filter === "All" ? jobs : jobs.filter((j) => j.level === filter);

  return (
    <>
      {/* HERO — only this page allows navy hero per spec */}
      <section className="bg-navy text-white pt-36 lg:pt-40 pb-20 lg:pb-24">
        <div className="container-page max-w-4xl">
          <Reveal><p className="overline mb-4">Join Us</p></Reveal>
          <Reveal delay={0.05}>
            <h1 className="h1 text-white">
              Join a Team That's Redefining <span className="accent-word">Financial Leadership</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-white/75 mt-6 max-w-2xl text-lg leading-relaxed">
              Senior finance work, fully remote, with the variety only fractional work can offer.
            </p>
          </Reveal>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-canvas section-pad">
        <div className="container-page">
          <Reveal><p className="overline mb-4">Why Join Us</p></Reveal>
          <Reveal delay={0.05}><h2 className="h2 mb-12">A Better Way to <span className="accent-word">Practice Finance</span></h2></Reveal>
          <Stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <StaggerItem key={b.title}>
                <div className="card-warm card-hover p-7 h-full">
                  <div className="icon-tile mb-5"><b.icon className="w-5 h-5" /></div>
                  <h3 className="h3 mb-2">{b.title}</h3>
                  <p className="text-sm leading-relaxed">{b.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* OPEN POSITIONS */}
      <section className="bg-white section-pad">
        <div className="container-page">
          <Reveal><p className="overline mb-4">Open Positions</p></Reveal>
          <Reveal delay={0.05}><h2 className="h2 mb-8">Currently <span className="accent-word">Hiring</span></h2></Reveal>

          <div className="flex gap-2 mb-8 overflow-x-auto">
            {(["All", "Senior", "Mid", "Entry"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                  filter === f ? "bg-navy text-white" : "bg-secondarywarm text-navy hover:bg-amber/10"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="space-y-3">
            {filtered.length === 0 ? (
              <p className="text-sm text-bodytext">No openings in this category right now — apply below to be considered for future roles.</p>
            ) : filtered.map((j) => <Job key={j.title} j={j} />)}
          </div>
        </div>
      </section>

      {/* GENERAL APPLICATION */}
      <section className="bg-canvas section-pad">
        <div className="container-page max-w-2xl">
          <Reveal><p className="overline mb-4">General Application</p></Reveal>
          <Reveal delay={0.05}><h2 className="h2 mb-3">Don't See Your <span className="accent-word">Role?</span></h2></Reveal>
          <Reveal delay={0.1}><p className="lead mb-10">Tell us about yourself. We're always looking for senior finance talent.</p></Reveal>

          <Reveal delay={0.15}>
            <form
              onSubmit={(e) => { e.preventDefault(); alert("Application submitted — thanks!"); }}
              className="card-warm p-8 space-y-5"
            >
              {[
                { label: "Full Name", type: "text", req: true },
                { label: "Email", type: "email", req: true },
                { label: "Role of Interest", type: "text", req: false },
                { label: "LinkedIn URL", type: "url", req: false },
              ].map((f) => (
                <div key={f.label}>
                  <label className="block text-sm font-semibold text-navy mb-2">{f.label}{f.req && <span className="text-amber"> *</span>}</label>
                  <input
                    type={f.type} required={f.req}
                    className="w-full px-4 py-3 rounded-lg border border-[hsl(var(--border-warm))] bg-white focus:outline-none focus:border-amber"
                  />
                </div>
              ))}
              <div>
                <label className="block text-sm font-semibold text-navy mb-2">Resume</label>
                <input type="file" className="w-full text-sm" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-navy mb-2">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-[hsl(var(--border-warm))] bg-white focus:outline-none focus:border-amber resize-none" />
              </div>
              <button className="btn-primary w-full">Submit Application <ArrowRight className="w-4 h-4" /></button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
