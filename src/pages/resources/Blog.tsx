import { ArrowRight, BookOpen } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";
import { PageHero, PageCTA } from "@/components/site/PageHero";

const blogs = [
  { tag: "Metrics", title: "The 5 Financial Metrics Every Service Firm Must Track Past $2M", excerpt: "From gross margin per client to cash conversion cycles — the metrics that actually predict your next stage.", read: "6 min", date: "Apr 2026" },
  { tag: "CFO 101", title: "Why Your Bookkeeper Can't Replace a CFO", excerpt: "The clear lines between bookkeeping, controllership, and CFO work — and how to know what your firm needs.", read: "5 min", date: "Mar 2026" },
  { tag: "Cash Flow", title: "How to Build a 13-Week Cash Flow Forecast", excerpt: "A step-by-step playbook for the most important short-term planning tool growing firms can build.", read: "8 min", date: "Mar 2026" },
  { tag: "Dashboards", title: "KPI Dashboards for Agency Owners: A Complete Guide", excerpt: "What to track, how to visualize it, and the cadence to review it with your leadership team.", read: "9 min", date: "Feb 2026" },
  { tag: "Hiring", title: "When Is It Time to Hire a Fractional CFO?", excerpt: "Five inflection points when bringing in CFO-level help unlocks more value than it costs.", read: "4 min", date: "Feb 2026" },
  { tag: "Pricing", title: "Repricing Your Services Without Losing Clients", excerpt: "A four-step framework for moving prices up while strengthening — not straining — client relationships.", read: "7 min", date: "Jan 2026" },
];

export default function Blog() {
  return (
    <>
      <PageHero
        overline="Blog / Insights"
        title="Field notes on"
        accent="finance leadership"
        subtitle="Practical articles for founders and operators scaling service firms past $2M."
        crumbs={[{ label: "Home", to: "/" }, { label: "Resources", to: "/resources" }, { label: "Blog" }]}
      />
      <section className="bg-white section-pad">
        <div className="container-page">
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
                    <button className="amber-link">Read Article <ArrowRight className="w-3.5 h-3.5" /></button>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
      <Reveal><PageCTA title="Want these insights" accent="in your inbox?" body="One pragmatic article a month — no fluff, no spam." cta="Subscribe" /></Reveal>
    </>
  );
}