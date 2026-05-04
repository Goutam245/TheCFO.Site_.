import { ServiceTemplate } from "@/components/site/ServiceTemplate";

export default function FractionalCFO() {
  return (
    <ServiceTemplate
      data={{
        slug: "fractional-cfo",
        overline: "Service · Senior Leadership",
        title: "Fractional",
        accent: "CFO",
        subtitle:
          "Full C-suite financial leadership — embedded in your weekly operating cadence — at roughly a third the cost of a full-time hire.",
        whatItIs:
          "A Fractional CFO is a senior finance executive who owns the financial strategy, capital plan, and board cadence of your business — typically 2 to 5 days a month. You get the same caliber of leadership a $250K+ hire would bring, without carrying the full salary, benefits, equity, and recruiting risk.",
        whatWeDo: [
          "Own the monthly financial close, management reporting, and forecast cycle as the senior reviewer.",
          "Build and present quarterly board materials and lead the board finance discussion.",
          "Run capital strategy — debt structuring, equity raises, lender relations, and investor reporting.",
          "Sit at the leadership table for hiring, pricing, M&A, exit, and major operational decisions.",
        ],
        extra: {
          heading: "Cost comparison",
          items: [
            { title: "Full-time CFO", body: "$250K base + 25% benefits + recruiting + equity = $400K+ all-in, plus 18-month average tenure risk." },
            { title: "Fractional CFO", body: "$5K–$10K/month with a senior team behind one named partner — typically $60K–$120K all-in." },
            { title: "Annual savings", body: "Most clients save $200K–$300K per year while gaining cross-industry experience." },
          ],
        },
        deliverables: [
          "Weekly leadership office hours",
          "Monthly close review and report sign-off",
          "Quarterly board package and presentation",
          "Capital strategy roadmap",
          "On-call advisory for major decisions",
        ],
        whoFor: [
          "Service firms $3M–$30M not yet ready for a full-time CFO",
          "Founders preparing for a raise, acquisition, or exit",
          "Companies between CFOs needing interim leadership",
          "Leadership teams wanting a senior financial partner",
        ],
        pricing: {
          from: "$5,000 / month",
          note: "Engagement scope flexes from 2 to 8 days per month. Most CFO engagements run 24+ months as the firm scales.",
        },
        testimonial: {
          quote:
            "Having a CFO at the table changed how we made decisions. Our raise closed 4 months faster than we expected.",
          name: "James Whitford",
          role: "Founder & CEO, Lattice Health",
        },
        ctaTitle: "Wondering if a fractional CFO fits",
        ctaAccent: "your stage?",
        ctaBody:
          "30-minute discovery call — we'll tell you honestly whether it's the right move right now.",
      }}
    />
  );
}