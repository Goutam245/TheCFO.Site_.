import { Link } from "react-router-dom";
import { ArrowRight, Target, Zap, Handshake, TrendingUp, Check, Minus, Linkedin, User } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";

const TEAM_IMG = "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1000&q=85";

const steps = [
  { n: "01", title: "Free Discovery Call", body: "30-minute conversation about your business, goals, and where finance fits in." },
  { n: "02", title: "Financial Assessment & Proposal", body: "We review your numbers, identify gaps, and scope the right engagement." },
  { n: "03", title: "Onboarding & System Setup", body: "Week 1–2: stack review, process mapping, dashboard build." },
  { n: "04", title: "Monthly Close & Reporting Begins", body: "Live reporting cadence within 30 days. You see your numbers in real time." },
  { n: "05", title: "Ongoing CFO Partnership", body: "Quarterly strategy, board prep, scenario modeling — every step of growth." },
];

const values = [
  { icon: Target, title: "Transparency", body: "No surprises, no jargon. You always know what we're doing and why." },
  { icon: Zap, title: "Precision", body: "Every number tells a story — and we make sure it's the right one." },
  { icon: Handshake, title: "Partnership", body: "We grow when you grow. Your wins are the only metric that matters." },
  { icon: TrendingUp, title: "Growth-Minded", body: "Always looking forward. We model what's next, not just what was." },
];

const team: { name: string; role: string; photo?: string; linkedin: string }[] = [
  { name: "Ankit B, CPA, CA (Ontario & Quebec)", role: "Partner / Founder, CEO", photo: "https://i0.wp.com/thecfo.site/wp-content/uploads/2022/09/Ankit-1-Profile-Pic.png?resize=768%2C768&ssl=1", linkedin: "https://www.linkedin.com/in/ankitbh/" },
  { name: "Mark F, CPA, CA", role: "Partner, COO", photo: "https://i0.wp.com/thecfo.site/wp-content/uploads/2022/09/1647460201218.jpg?resize=768%2C768&ssl=1", linkedin: "https://www.linkedin.com/in/f-mark/" },
  { name: "Mahendra B, CA (India)", role: "Partner, CGO", photo: "https://i0.wp.com/thecfo.site/wp-content/uploads/2022/09/1581103984852.jpg?w=375&ssl=1", linkedin: "https://www.linkedin.com/in/mahendrabhandari/" },
  { name: "Allan F, CPA (Quebec)", role: "Partner, Quebec", photo: "https://i0.wp.com/thecfo.site/wp-content/uploads/2023/07/Allan-F.jpg?w=213&ssl=1", linkedin: "https://www.linkedin.com/in/allanfefergrad/" },
  { name: "Ashok K, CPA, CA, CPA (Co)", role: "Partner", photo: "https://i0.wp.com/thecfo.site/wp-content/uploads/2023/04/Ashok-Profile-Pic-400x400-1.jpg?w=400&ssl=1", linkedin: "https://www.linkedin.com/in/ashok-khandelwal-463b8425/" },
  { name: "Paul B, CPA", role: "Fractional CFO", photo: "https://i0.wp.com/thecfo.site/wp-content/uploads/2025/06/Paul-B.jpg?resize=768%2C768&ssl=1", linkedin: "https://www.linkedin.com/in/paul-bretton-cpa-cga-8a753858/" },
  { name: "Westphal J. P.", role: "Director of Strategy & Operations", linkedin: "https://www.linkedin.com/in/westphal-j-2212a921/" },
];

export default function About() {
  return (
    <>
      <section className="bg-canvas pt-36 lg:pt-40 pb-16 lg:pb-20">
        <div className="container-page max-w-4xl">
          <Reveal><p className="overline mb-4">Our Story</p></Reveal>
          <Reveal delay={0.05}>
            <h1 className="h1">
              Built for the Businesses That Didn't Have a Seat at the <span className="accent-word">CFO Table</span>
            </h1>
          </Reveal>
        </div>
      </section>

      {/* STORY */}
      <section className="bg-white section-pad">
        <div className="container-page grid lg:grid-cols-12 gap-10 items-center">
          <Reveal className="lg:col-span-5">
            <img src={TEAM_IMG} alt="Team collaborating in a bright office" loading="lazy" className="w-full aspect-[4/5] object-cover rounded-2xl" />
          </Reveal>
          <div className="lg:col-span-7">
            <Reveal><p className="overline mb-4">Why We Exist</p></Reveal>
            <Reveal delay={0.05}><h2 className="h2 mb-6">A Gap We Lived <span className="accent-word">Through</span></h2></Reveal>
            <div className="space-y-5 text-base leading-relaxed">
              <Reveal delay={0.1}>
                <p>TheCFO.Site was founded by senior finance operators who spent careers inside venture-backed and bootstrapped service firms. We watched founders crossing $2M, then $5M, then $10M — and falling into the same trap: clean books, but no one translating them into decisions.</p>
              </Reveal>
              <Reveal delay={0.15}>
                <p>The traditional options were broken. Hiring a full-time CFO at $200K+ before $20M in revenue rarely made sense. Outsourced controllership stopped at compliance. Big-firm consultants showed up for projects, not partnership.</p>
              </Reveal>
              <Reveal delay={0.2}>
                <p>We built TheCFO.Site to be the third path: senior, embedded, and tuned specifically to how service businesses make money. The team you would hire if you were ready — available now, at a stage you can afford.</p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="bg-canvas section-pad">
        <div className="container-page">
          <Reveal><p className="overline mb-4">Our Approach</p></Reveal>
          <Reveal delay={0.05}><h2 className="h2 mb-12 max-w-3xl">How an <span className="accent-word">Engagement</span> Unfolds</h2></Reveal>
          <Stagger className="space-y-4">
            {steps.map((s) => (
              <StaggerItem key={s.n}>
                <div className="card-warm p-7 flex gap-6 items-start">
                  <div className="text-3xl font-extrabold text-amber tracking-tight shrink-0">{s.n}</div>
                  <div>
                    <h3 className="h3 mb-2">{s.title}</h3>
                    <p className="text-sm leading-relaxed">{s.body}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-white section-pad">
        <div className="container-page">
          <Reveal><p className="overline mb-4">Our Values</p></Reveal>
          <Reveal delay={0.05}><h2 className="h2 mb-12">What We <span className="accent-word">Stand For</span></h2></Reveal>
          <Stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <div className="card-warm card-hover p-7 h-full">
                  <div className="icon-tile mb-5"><v.icon className="w-5 h-5" /></div>
                  <h3 className="h3 mb-2">{v.title}</h3>
                  <p className="text-sm leading-relaxed">{v.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-white section-pad">
        <div className="container-page">
          <Reveal><p className="overline mb-4 text-center">Our Team</p></Reveal>
          <Reveal delay={0.05}><h2 className="h2 mb-12 text-center">Our <span className="accent-word">Team</span></h2></Reveal>
          <Stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((m) => (
              <StaggerItem key={m.name}>
                <div className="flex flex-col items-center text-center">
                  {m.photo ? (
                    <img
                      src={m.photo}
                      alt={m.name}
                      loading="lazy"
                      className="w-40 h-40 rounded-full object-cover mb-5 ring-1 ring-[hsl(var(--border-warm))]"
                    />
                  ) : (
                    <div
                      className="w-40 h-40 rounded-full mb-5 flex items-center justify-center ring-1 ring-[hsl(var(--border-warm))]"
                      style={{ backgroundColor: "#EEEAE3" }}
                    >
                      <User className="w-16 h-16" style={{ color: "#5D524A" }} />
                    </div>
                  )}
                  <p className="overline mb-2">{m.role}</p>
                  <p className="font-bold text-navy text-lg leading-tight mb-3">{m.name}</p>
                  <a
                    href={m.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View LinkedIn Profile"
                    aria-label={`View LinkedIn profile of ${m.name}`}
                    className="inline-flex transition-all duration-200 hover:opacity-70 hover:-translate-y-0.5"
                  >
                    <Linkedin size={18} style={{ color: "#B9832B" }} />
                  </a>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="bg-canvas section-pad">
        <div className="container-page">
          <Reveal><p className="overline mb-4">Why Us</p></Reveal>
          <Reveal delay={0.05}><h2 className="h2 mb-12 max-w-3xl">Compared to the <span className="accent-word">Alternatives</span></h2></Reveal>
          <Reveal delay={0.1}>
            <div className="card-warm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-secondarywarm">
                      <th className="text-left p-5 font-bold text-navy"></th>
                      <th className="text-left p-5 font-bold text-amber">TheCFO.Site</th>
                      <th className="text-left p-5 font-bold text-navy">Full-Time CFO</th>
                      <th className="text-left p-5 font-bold text-navy">Traditional Firm</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Cost / month", "$2,500–$8K", "$15K–$25K", "$1K–$3K"],
                      ["Seniority", "C-Suite", "Varies", "Staff level"],
                      ["Start time", "1 week", "3–6 months", "2–4 weeks"],
                      ["Scalability", "Flexible", "Fixed", "Limited"],
                      ["Strategic input", <Check className="w-4 h-4 text-amber" key="1" />, <Check className="w-4 h-4 text-amber" key="2" />, <Minus className="w-4 h-4 text-bodytext/50" key="3" />],
                      ["Tech stack included", <Check className="w-4 h-4 text-amber" key="1" />, <Minus className="w-4 h-4 text-bodytext/50" key="2" />, <Minus className="w-4 h-4 text-bodytext/50" key="3" />],
                    ].map((row, i) => (
                      <tr key={i} className="border-t border-[hsl(var(--border-warm))]">
                        <td className="p-5 font-semibold text-navy">{row[0]}</td>
                        <td className="p-5 text-navy font-semibold">{row[1]}</td>
                        <td className="p-5">{row[2]}</td>
                        <td className="p-5">{row[3]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>
          <div className="text-center mt-10">
            <Link to="/contact" className="btn-primary">Book a Free Call <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
