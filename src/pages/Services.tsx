import { Link } from "react-router-dom";
import {
  ArrowRight, Database, ClipboardList, FileBarChart, LineChart, Sparkles,
  ShieldCheck, Briefcase, Scale, Wallet, Check,
} from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";

const Overline = ({ children }: { children: React.ReactNode }) => (
  <p className="overline mb-4">{children}</p>
);

const phases = [
  { icon: Database, name: "Data Capture & Foundation", body: "AR, AP, Dext, Hubdoc, Plooto, expense categorization, payment automation." },
  { icon: ClipboardList, name: "Monthly Close & Compliance", body: "Bank reconciliations, accruals, journal entries, month-end close, financial statement preparation." },
  { icon: FileBarChart, name: "Reporting & Insights", body: "Monthly management reports, Power BI dashboards, KPI tracking, variance analysis, job- and employee-level metrics." },
  { icon: LineChart, name: "FP&A / Budgeting / Forecasting", body: "Annual budgets, rolling forecasts, scenario modeling, cash flow projections, revenue forecasting." },
  { icon: Sparkles, name: "Strategic Advisory", body: "Board guidance, growth strategy, exit planning, M&A, capital raising, negotiations." },
];

const services = [
  { icon: Wallet, title: "Accounts Receivable & Payable", body: "Automated invoicing, vendor payments, and aging visibility — keeping cash moving in and out predictably.", deliverables: ["Plooto / bill.com workflows", "Aging reports & collections", "Vendor payment scheduling"] },
  { icon: ClipboardList, title: "Bookkeeping & Month-End Close", body: "A fast, accurate close so leadership has the real numbers within days of month-end.", deliverables: ["Bank & credit card reconciliations", "Journal entries and accruals", "Trial balance review"] },
  { icon: FileBarChart, title: "Financial Reporting", body: "Management reports and Power BI dashboards built around the metrics that matter to your firm.", deliverables: ["Monthly P&L, BS, CF", "Power BI KPI dashboards", "Variance & trend analysis"] },
  { icon: LineChart, title: "FP&A / Budgeting / Forecasting", body: "Build the model that makes every major decision easier — staffing, pricing, capital allocation.", deliverables: ["Annual budgets", "Rolling 12-month forecasts", "13-week cash flow"] },
  { icon: ShieldCheck, title: "Controllership Services", body: "Process controls, audit support, and policy design for businesses scaling beyond the founder.", deliverables: ["Internal controls", "Audit / review prep", "GAAP technical accounting"] },
  { icon: Sparkles, title: "Strategic Advisory", body: "A partner at the table for the decisions that change the trajectory of your business.", deliverables: ["Board reporting", "Growth & exit strategy", "Pricing & unit economics"] },
  { icon: Scale, title: "Negotiation & Litigation Support", body: "Financial expertise during disputes, partnership transitions, and high-stakes negotiations.", deliverables: ["Forensic analysis", "Settlement modeling", "Expert witness support"] },
  { icon: Briefcase, title: "Fractional CFO", body: "Senior CFO leadership at a fraction of the cost — embedded in your weekly operating cadence.", deliverables: ["Capital strategy", "Investor & lender relations", "Quarterly board cycle"] },
];

export default function Services() {
  return (
    <>
      {/* HERO */}
      <section className="bg-canvas pt-36 lg:pt-40 pb-16 lg:pb-20">
        <div className="container-page max-w-4xl">
          <Reveal><Overline>Our Services</Overline></Reveal>
          <Reveal delay={0.05}>
            <h1 className="h1">
              Building Financial <span className="accent-word">Infrastructure</span>, Layer by Layer
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lead mt-6 max-w-2xl">
              We start with clean data and build upward — through close, reporting, planning, and strategy —
              so every layer of your finance function rests on the one below it.
            </p>
          </Reveal>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="bg-white section-pad">
        <div className="container-page">
          <Reveal><Overline>The 5 Phases</Overline></Reveal>
          <Reveal delay={0.05}>
            <h2 className="h2 max-w-3xl">From <span className="accent-word">Data</span> to <span className="accent-word">Strategy</span> — a Repeatable Stack</h2>
          </Reveal>

          <div className="mt-14 space-y-4">
            {phases.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.05}>
                <div
                  className="card-warm p-6 lg:p-8 flex flex-col lg:flex-row gap-6 lg:items-center transition-all hover:border-amber/30"
                  style={{ marginLeft: `${i * 24}px` }}
                >
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-amber/10 text-amber flex items-center justify-center shrink-0">
                      <p.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="overline mb-1">Phase {i + 1}</p>
                      <h3 className="text-xl font-extrabold text-navy tracking-tight">{p.name}</h3>
                    </div>
                  </div>
                  <p className="lg:ml-auto lg:max-w-xl text-sm leading-relaxed">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE CARDS */}
      <section className="bg-canvas section-pad">
        <div className="container-page">
          <div className="max-w-3xl">
            <Reveal><Overline>Individual Services</Overline></Reveal>
            <Reveal delay={0.05}>
              <h2 className="h2">All Eight, <span className="accent-word">Mix and Match</span></h2>
            </Reveal>
          </div>
          <Stagger className="mt-12 grid md:grid-cols-2 gap-6">
            {services.map((s) => (
              <StaggerItem key={s.title}>
                <div className="card-warm card-hover p-7 h-full flex flex-col">
                  <div className="icon-tile mb-5"><s.icon className="w-5 h-5" /></div>
                  <h3 className="h3 mb-2">{s.title}</h3>
                  <p className="text-sm leading-relaxed mb-5">{s.body}</p>
                  <ul className="space-y-2 mb-5">
                    {s.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-amber mt-0.5 shrink-0" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="amber-link mt-auto">Learn More <ArrowRight className="w-3.5 h-3.5" /></Link>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white section-pad">
        <div className="container-page">
          <div className="bg-navy rounded-2xl p-10 lg:p-14 text-center">
            <Reveal><p className="overline mb-3 !text-amber">Not Sure Where to Start?</p></Reveal>
            <Reveal delay={0.05}>
              <h2 className="h2 text-white max-w-2xl mx-auto">
                That's exactly what our <span className="accent-word">free discovery call</span> is for.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-white/75 max-w-xl mx-auto leading-relaxed">
                Tell us where your firm is today and we'll map out the services that move the needle.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <Link to="/contact" className="btn-on-dark mt-8">Book a Free Call <ArrowRight className="w-4 h-4" /></Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
