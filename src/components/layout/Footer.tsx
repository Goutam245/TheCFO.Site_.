import { Link } from "react-router-dom";
import { Linkedin, Twitter, Mail, Phone, ArrowRight } from "lucide-react";

const services = [
  "Bookkeeping & Month-End Close",
  "Financial Reporting",
  "FP&A / Budgeting / Forecasting",
  "Controllership Services",
  "Strategic Advisory",
  "Negotiation & Litigation Support",
  "Fractional CFO",
  "Accounts Receivable & Payable",
];

export const Footer = () => (
  <footer className="bg-[hsl(var(--navy))] text-white">
    <div className="container-page py-16 lg:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <Link to="/" className="text-xl font-extrabold tracking-tight">
            TheCFO<span className="text-[hsl(var(--amber))]">.</span>Site
          </Link>
          <p className="mt-3 text-sm text-white/70 leading-relaxed">
            Financial Leadership for Growth.
          </p>
          <div className="mt-5 space-y-2 text-sm text-white/80">
            <a href="tel:+18005551234" className="flex items-center gap-2 hover:text-[hsl(var(--amber))]">
              <Phone className="w-4 h-4" /> (800) 555-1234
            </a>
            <a href="mailto:hello@thecfo.site" className="flex items-center gap-2 hover:text-[hsl(var(--amber))]">
              <Mail className="w-4 h-4" /> hello@thecfo.site
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-[hsl(var(--amber))] mb-4">
            Services
          </h4>
          <ul className="space-y-2.5 text-sm text-white/80">
            {services.map((s) => (
              <li key={s}>
                <Link to="/services" className="hover:text-[hsl(var(--amber))] transition-colors">
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-[hsl(var(--amber))] mb-4">
            Company
          </h4>
          <ul className="space-y-2.5 text-sm text-white/80">
            <li><Link to="/about" className="hover:text-[hsl(var(--amber))]">About</Link></li>
            <li><Link to="/careers" className="hover:text-[hsl(var(--amber))]">Careers</Link></li>
            <li><Link to="/software" className="hover:text-[hsl(var(--amber))]">Software</Link></li>
            <li><Link to="/resources" className="hover:text-[hsl(var(--amber))]">Resources</Link></li>
            <li><Link to="/contact" className="hover:text-[hsl(var(--amber))]">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-[hsl(var(--amber))] mb-4">
            Newsletter
          </h4>
          <p className="text-sm text-white/70 mb-4">
            Monthly insights for service-based firms scaling past $2M.
          </p>
          <form
            className="flex gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Subscribed — thanks!");
            }}
          >
            <input
              type="email"
              required
              placeholder="you@company.com"
              className="flex-1 px-3 py-2.5 rounded-lg bg-white/10 border border-white/15 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-[hsl(var(--amber))]"
            />
            <button className="w-10 h-10 inline-flex items-center justify-center rounded-lg bg-[hsl(var(--amber))] hover:bg-[hsl(var(--amber-dark))] transition-colors">
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
          <div className="mt-5 flex items-center gap-3">
            <a href="#" className="w-9 h-9 inline-flex items-center justify-center rounded-lg bg-white/10 hover:bg-[hsl(var(--amber))] transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 inline-flex items-center justify-center rounded-lg bg-white/10 hover:bg-[hsl(var(--amber))] transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/60">
        <p>© 2026 TheCFO.Site. All rights reserved.</p>
        <div className="flex items-center gap-5">
          <a href="#" className="hover:text-[hsl(var(--amber))]">Privacy</a>
          <a href="#" className="hover:text-[hsl(var(--amber))]">Terms</a>
        </div>
      </div>
    </div>
  </footer>
);
