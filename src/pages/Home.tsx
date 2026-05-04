import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight, Database, FileBarChart, LineChart, Target, Sparkles,
  CheckCircle2, TrendingUp, Wallet, Users, Scale, Megaphone, BarChart3,
  Star, BookOpen, Calendar, Briefcase, ShieldCheck, ClipboardList,
} from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";
import { AnimatedNumber } from "@/components/site/AnimatedNumber";

const HERO_IMG = "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=85";
const CTA_IMG = "https://images.unsplash.com/photo-1497366754035-f200968a5db4?w=1400&q=80";
const T1 = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=85";
const T2 = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=85";
const T3 = "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=85";

const Overline = ({ children }: { children: React.ReactNode }) => (
  <p className="overline mb-4">{children}</p>
);

export default function Home() {
  return (
    <>
      {/* SECTION 1 — HERO */}
      <section className="bg-canvas pt-36 lg:pt-40 pb-20 lg:pb-28 overflow-hidden">
        <div className="container-page grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          <div className="lg:col-span-6">
            <Reveal>
              <Overline>Fractional CFO Services</Overline>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="h1 text-navy">
                Financial Leadership for <span className="accent-word">Growth</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="lead mt-6 max-w-xl">
                We embed senior financial leadership into service-based businesses scaling
                from $2M to $30M+ — delivering the clarity, systems, and strategy your
                next stage demands.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/contact" className="btn-primary">
                  Book a Free Consultation <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/services" className="btn-outline">See How We Work</Link>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 text-sm text-bodytext flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber" />
                Trusted by 40+ firms across Canada
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-6 relative">
            <Reveal delay={0.1}>
              <div className="relative">
                <img
                  src={HERO_IMG}
                  alt="Modern bright workspace with natural light"
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover rounded-2xl"
                />
                {/* floating card */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6, ease: [0.25,0.46,0.45,0.94] }}
                  className="absolute -bottom-8 -left-4 sm:-left-8 bg-cardwarm border border-[hsl(var(--border-warm))] rounded-2xl shadow-2xl p-5 w-[260px]"
                >
                  <p className="overline mb-3">Cash Position</p>
                  <p className="text-3xl font-extrabold text-navy tracking-tight">
                    $<AnimatedNumber value={2.4} decimals={1} />M
                  </p>
                  <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-emerald-700">
                    <TrendingUp className="w-3.5 h-3.5" />
                    +18.2% MoM
                  </div>
                  <div className="mt-4 flex items-end gap-1.5 h-12">
                    {[40,55,38,72,60,85,68,92].map((h,i)=>(
                      <motion.div key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ delay: 0.6 + i*0.06, duration: 0.5, ease: "easeOut" }}
                        className="flex-1 rounded-sm bg-amber/80"
                      />
                    ))}
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: -16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="absolute -top-4 -right-2 sm:-right-6 bg-navy text-white rounded-2xl shadow-xl p-4 w-[200px]"
                >
                  <p className="text-[11px] uppercase tracking-wider text-amber font-semibold">Runway</p>
                  <p className="text-2xl font-extrabold mt-1">
                    <AnimatedNumber value={18} /> mo
                  </p>
                  <p className="text-xs text-white/60 mt-1">+6mo from Q1</p>
                </motion.div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 2 — TRUST BAR */}
      <section className="bg-white border-y border-[hsl(var(--border-warm))]">
        <div className="container-page py-10">
          <p className="text-center text-sm text-bodytext mb-6">
            Trusted by growing firms across Canada and the US
          </p>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 items-center">
            {["Mitchell Law", "Apex Comms", "Northwind Agency", "Brightside PR", "Helix Partners", "Vantage Studio"].map((n) => (
              <div key={n} className="text-center font-bold text-navy/40 tracking-tight text-sm md:text-base">
                {n}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — PROBLEM */}
      <section className="bg-canvas section-pad">
        <div className="container-page">
          <div className="max-w-3xl">
            <Reveal><Overline>Sound Familiar?</Overline></Reveal>
            <Reveal delay={0.05}>
              <h2 className="h2">
                You have a bookkeeper. But no one's telling you what the
                <span className="accent-word"> numbers actually mean</span>.
              </h2>
            </Reveal>
          </div>
          <Stagger className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              { icon: Wallet, title: "Unpredictable Cash Flow", body: "Your books are clean but your cash flow is unpredictable — you never know what's coming." },
              { icon: Target, title: "Decisions Without a Model", body: "You're making major decisions without a financial model to validate them." },
              { icon: Users, title: "No Seat at the Table", body: "You need a CFO seat at the table but can't justify a $200K+ full-time salary." },
            ].map((c) => (
              <StaggerItem key={c.title}>
                <div className="card-warm card-hover p-7 h-full">
                  <div className="icon-tile mb-5"><c.icon className="w-5 h-5" /></div>
                  <h3 className="h3 mb-2">{c.title}</h3>
                  <p className="text-sm leading-relaxed">{c.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* SECTION 4 — WORKFLOW STAIRCASE */}
      <section className="bg-white section-pad">
        <div className="container-page">
          <div className="max-w-3xl">
            <Reveal><Overline>How We Work</Overline></Reveal>
            <Reveal delay={0.05}>
              <h2 className="h2">
                We Build Your Financial <span className="accent-word">Infrastructure</span> from the Ground Up
              </h2>
            </Reveal>
          </div>

          <div className="mt-14 relative">
            {/* connecting line on desktop */}
            <div className="hidden lg:block absolute top-7 left-0 right-0 h-px bg-[hsl(var(--border-warm))]" />
            <Stagger className="grid lg:grid-cols-5 gap-6">
              {[
                { icon: Database, title: "Data Capture & Foundation", body: "AR, AP, expense categorization, Dext/Hubdoc, Plooto." },
                { icon: ClipboardList, title: "Monthly Close & Compliance", body: "Bank recs, accruals, journal entries, financial statements." },
                { icon: FileBarChart, title: "Reporting & Insights", body: "Management reports, Power BI dashboards, KPI tracking." },
                { icon: LineChart, title: "FP&A & Forecasting", body: "Annual budgets, rolling forecasts, scenario modeling." },
                { icon: Sparkles, title: "Strategic Advisory", body: "Board guidance, growth strategy, M&A, capital raising." },
              ].map((p, i) => (
                <StaggerItem key={p.title}>
                  <div className="relative">
                    <div className="relative z-10 w-14 h-14 rounded-2xl bg-cardwarm border border-[hsl(var(--border-warm))] flex items-center justify-center text-amber mb-4 shadow-sm">
                      <p.icon className="w-6 h-6" />
                    </div>
                    <p className="overline mb-1">Phase {i+1}</p>
                    <h3 className="h3 mb-2 leading-snug">{p.title}</h3>
                    <p className="text-sm leading-relaxed">{p.body}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* SECTION 5 — SERVICES OVERVIEW */}
      <section className="bg-canvas section-pad">
        <div className="container-page">
          <div className="max-w-3xl">
            <Reveal><Overline>What We Do</Overline></Reveal>
            <Reveal delay={0.05}>
              <h2 className="h2">
                Senior Finance Leadership, <span className="accent-word">Tailored to Your Stage</span>
              </h2>
            </Reveal>
          </div>
          <Stagger className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: ClipboardList, title: "Bookkeeping & Month-End Close", body: "Bank reconciliations, journal entries, and a fast, accurate monthly close you can rely on." },
              { icon: FileBarChart, title: "Financial Reporting & KPI Dashboards", body: "Power BI dashboards, monthly management reports, and the KPIs that move your business." },
              { icon: LineChart, title: "FP&A / Budgeting / Forecasting", body: "Annual budgets, rolling forecasts, scenario models, and 13-week cash flow." },
              { icon: ShieldCheck, title: "Controllership Services", body: "Process controls, audit prep, technical accounting, and team management." },
              { icon: Briefcase, title: "Fractional CFO", body: "Strategic finance partner — board reporting, capital strategy, and growth planning." },
            ].map((c) => (
              <StaggerItem key={c.title}>
                <div className="card-warm card-hover p-7 h-full flex flex-col">
                  <div className="icon-tile mb-5"><c.icon className="w-5 h-5" /></div>
                  <h3 className="h3 mb-2">{c.title}</h3>
                  <p className="text-sm leading-relaxed flex-1">{c.body}</p>
                  <Link to="/services" className="amber-link mt-5">Learn More <ArrowRight className="w-3.5 h-3.5" /></Link>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* SECTION 6 — WHO WE WORK WITH */}
      <section className="bg-white section-pad">
        <div className="container-page">
          <div className="max-w-3xl">
            <Reveal><Overline>Who We Serve</Overline></Reveal>
            <Reveal delay={0.05}>
              <h2 className="h2">
                Built for <span className="accent-word">Service-Based Businesses</span> Scaling Past $2M
              </h2>
            </Reveal>
          </div>
          <Stagger className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              { icon: Scale, title: "Law Firms", body: "Track billable hours, manage trust accounts, and understand profitability by practice area." },
              { icon: Megaphone, title: "PR & Communications Firms", body: "Forecast retainer revenue, manage contractor costs, and understand campaign profitability." },
              { icon: BarChart3, title: "Marketing Agencies", body: "Track project margins, manage burn rate, and forecast growth with confidence." },
            ].map((c) => (
              <StaggerItem key={c.title}>
                <div className="card-warm card-hover p-7 h-full">
                  <div className="icon-tile mb-5"><c.icon className="w-5 h-5" /></div>
                  <h3 className="h3 mb-2">{c.title}</h3>
                  <p className="text-sm leading-relaxed">{c.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal delay={0.2}>
            <p className="mt-10 text-center text-sm text-bodytext max-w-2xl mx-auto">
              We also partner with businesses in broadcasting, healthcare, education, and other sectors.
              If you need financial clarity to scale, we can help.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SECTION 7 — STATS */}
      <section className="bg-canvas section-pad">
        <div className="container-page">
          <div className="max-w-3xl">
            <Reveal><Overline>Our Impact</Overline></Reveal>
            <Reveal delay={0.05}>
              <h2 className="h2">The Numbers <span className="accent-word">Behind the Work</span></h2>
            </Reveal>
          </div>
          <Stagger className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { v: 50, prefix: "$", suffix: "M+", label: "in client revenue managed" },
              { v: 40, suffix: "%", label: "average cost savings vs full-time hire" },
              { v: 98, suffix: "%", label: "client retention rate" },
              { v: 10, suffix: "+", label: "years of senior finance experience" },
            ].map((s) => (
              <StaggerItem key={s.label}>
                <p className="text-4xl lg:text-5xl font-extrabold text-navy tracking-tight">
                  <AnimatedNumber value={s.v} prefix={s.prefix} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-sm text-bodytext">{s.label}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* SECTION 8 — TESTIMONIALS */}
      <section className="bg-white section-pad">
        <div className="container-page">
          <div className="max-w-3xl">
            <Reveal><Overline>Client Stories</Overline></Reveal>
            <Reveal delay={0.05}>
              <h2 className="h2">What Our <span className="accent-word">Clients</span> Are Saying</h2>
            </Reveal>
          </div>
          <Stagger className="mt-12 grid md:grid-cols-2 gap-6">
            {[
              {
                photo: T1,
                quote: "TheCFO.Site transformed how we run our firm. We finally have dashboards that show us profitability by client, not just total revenue. Our decisions are completely different now.",
                name: "Sarah Mitchell", title: "Managing Partner, Mitchell Law Group",
              },
              {
                photo: T2,
                quote: "We were growing fast but flying blind financially. Within 60 days they had our close down to 3 days and built a forecast model that's been spot-on for two quarters straight.",
                name: "Marcus Webb", title: "CEO, Apex Communications",
              },
            ].map((t) => (
              <StaggerItem key={t.name}>
                <div className="card-warm p-7 h-full">
                  <div className="flex items-center gap-1 mb-4 text-amber">
                    {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="italic text-bodytext leading-relaxed">"{t.quote}"</p>
                  <div className="mt-6 flex items-center gap-3">
                    <img src={t.photo} alt={t.name} loading="lazy" className="w-12 h-12 rounded-full object-cover" />
                    <div>
                      <p className="text-sm font-semibold text-navy">{t.name}</p>
                      <p className="text-xs text-bodytext">{t.title}</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* SECTION 9 — RESOURCES PREVIEW */}
      <section className="bg-canvas section-pad">
        <div className="container-page">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <Reveal><Overline>Insights & Tools</Overline></Reveal>
              <Reveal delay={0.05}>
                <h2 className="h2">Built to Help You <span className="accent-word">Scale Smarter</span></h2>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <Link to="/resources" className="amber-link">All Resources <ArrowRight className="w-4 h-4" /></Link>
            </Reveal>
          </div>
          <Stagger className="grid md:grid-cols-3 gap-6">
            {[
              { tag: "Metrics", title: "The 5 Financial Metrics Every Service Firm Must Track Past $2M", excerpt: "From gross margin per client to cash conversion cycles — the metrics that actually predict your next stage.", read: "6 min" },
              { tag: "CFO 101", title: "Why Your Bookkeeper Can't Replace a CFO (And When You Need Both)", excerpt: "The clear lines between bookkeeping, controllership, and CFO work — and how to know what your firm needs.", read: "5 min" },
              { tag: "Cash Flow", title: "How to Build a 13-Week Cash Flow Forecast for Your Agency", excerpt: "A step-by-step playbook for the most important short-term planning tool growing firms can build.", read: "8 min" },
            ].map((p) => (
              <StaggerItem key={p.title}>
                <article className="card-warm card-hover p-6 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4 text-xs">
                    <span className="px-2.5 py-1 rounded-md bg-amber/10 text-amber font-semibold uppercase tracking-wider">{p.tag}</span>
                    <span className="text-bodytext flex items-center gap-1"><BookOpen className="w-3 h-3" /> {p.read}</span>
                  </div>
                  <h3 className="text-base font-bold text-navy leading-snug mb-3">{p.title}</h3>
                  <p className="text-sm leading-relaxed flex-1">{p.excerpt}</p>
                  <Link to="/resources" className="amber-link mt-5">Read More <ArrowRight className="w-3.5 h-3.5" /></Link>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* SECTION 10 — FINAL CTA */}
      <section className="relative section-pad overflow-hidden">
        <div className="absolute inset-0 bg-navy">
          <img src={CTA_IMG} alt="" loading="lazy" className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-navy/85" />
        </div>
        <div className="relative container-page text-white">
          <div className="max-w-3xl mx-auto text-center">
            <Reveal><p className="overline mb-4">Ready to Scale?</p></Reveal>
            <Reveal delay={0.05}>
              <h2 className="h2 text-white">Let's Build Your <span className="accent-word">Financial Foundation</span></h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-white/80 leading-relaxed text-lg">
                Book a free 30-minute discovery call. We'll discuss your challenges,
                where you want to go, and whether we're the right fit. No obligation, no pressure.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-9 flex flex-wrap gap-3 justify-center">
                <Link to="/contact" className="btn-on-dark">
                  Book a Free Consultation <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/services" className="btn-ghost-dark">See How We Work</Link>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-12 max-w-xl mx-auto pt-8 border-t border-white/15 text-center">
                <p className="italic text-white/85 leading-relaxed">
                  "Working with TheCFO.Site was the best decision we made for our firm's growth."
                </p>
                <div className="mt-4 flex items-center justify-center gap-3">
                  <img src={T3} alt="Jennifer Park" loading="lazy" className="w-10 h-10 rounded-full object-cover" />
                  <p className="text-sm font-semibold">Jennifer Park <span className="text-white/60 font-normal">— COO</span></p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
