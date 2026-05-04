import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calculator as CalcIcon } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { PageHero } from "@/components/site/PageHero";

const benchmarks: Record<string, number> = { Toronto: 185000, Vancouver: 195000, Calgary: 175000, Montreal: 165000, Other: 170000 };

export default function Calculator() {
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
      <PageHero
        overline="Pricing Calculator"
        title="See exactly what you'd"
        accent="save"
        subtitle="Compare a full-time finance hire to TheCFO.Site fractional model — based on your city, role mix, and monthly hours."
        crumbs={[{ label: "Home", to: "/" }, { label: "Resources", to: "/resources" }, { label: "Calculator" }]}
      />
      <section className="bg-white section-pad">
        <div className="container-page grid lg:grid-cols-2 gap-8">
          <Reveal>
            <div className="card-warm p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="icon-tile"><CalcIcon className="w-5 h-5" /></div>
                <h3 className="h3">Tell Us About Your Need</h3>
              </div>
              <div className="mb-7">
                <p className="overline mb-3">Step 1 — Roles needed</p>
                <div className="grid grid-cols-2 gap-2">
                  {Object.keys(roles).map((r) => (
                    <label key={r} className={`flex items-center gap-2 p-3 rounded-lg border cursor-pointer transition-all ${roles[r] ? "border-amber bg-amber/5" : "border-[hsl(var(--border-warm))]"}`}>
                      <input type="checkbox" checked={roles[r]} onChange={(e) => setRoles({ ...roles, [r]: e.target.checked })} className="accent-amber" />
                      <span className="text-sm font-semibold text-navy">{r}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="mb-7">
                <p className="overline mb-3">Step 2 — Location</p>
                <select value={city} onChange={(e) => setCity(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-[hsl(var(--border-warm))] bg-white text-navy font-semibold focus:outline-none focus:border-amber">
                  {Object.keys(benchmarks).map((c) => <option key={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <div className="flex items-center justify-between mb-3">
                  <p className="overline">Step 3 — Hours / month</p>
                  <span className="text-lg font-extrabold text-navy">{hours}h</span>
                </div>
                <input type="range" min={10} max={160} step={5} value={hours} onChange={(e) => setHours(Number(e.target.value))} className="w-full accent-amber" />
                <div className="flex justify-between text-xs text-bodytext mt-1"><span>10h</span><span>160h</span></div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
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
                    <span className="text-white/70">{l}</span><span className="text-right">{ft}</span><span className="text-right text-amber">{frac}</span>
                  </div>
                ))}
                <div className="grid grid-cols-3 gap-2 pt-3 font-bold">
                  <span>Total</span><span className="text-right">${fullTimeTotal.toLocaleString()}</span><span className="text-right text-amber">${fractionalAnnual.toLocaleString()}</span>
                </div>
              </div>
              <div className="mt-7 p-5 rounded-xl bg-amber text-navy">
                <p className="text-xs font-semibold uppercase tracking-wider opacity-70">Your Savings</p>
                <p className="text-3xl font-extrabold tracking-tight">${Math.max(0, savings).toLocaleString()}/yr</p>
              </div>
              <Link to="/contact" className="btn-on-dark w-full mt-6">Book a Free Call <ArrowRight className="w-4 h-4" /></Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}