import { ServiceTemplate } from "@/components/site/ServiceTemplate";

export default function Advisory() {
  return (
    <ServiceTemplate
      data={{
        slug: "advisory",
        overline: "Service · Strategic",
        title: "Strategic",
        accent: "Advisory",
        subtitle:
          "A senior partner at the table for the decisions that change the trajectory of your business — growth, profitability, M&A, and exit.",
        whatItIs:
          "Advisory is project-based or retainer work focused on the handful of decisions that disproportionately shape outcomes. We bring the financial lens, the modeling rigor, and the cross-industry pattern recognition to help you choose well and execute confidently.",
        whatWeDo: [
          "Growth strategy: market entry analysis, pricing redesign, channel economics, and capacity planning.",
          "Profitability optimization: margin teardown by client, project, or service line — and the playbook to fix it.",
          "M&A support: target screening, financial diligence, deal modeling, and integration planning.",
          "Exit planning: readiness assessment, value-driver work, banker selection, and sell-side preparation.",
        ],
        extra: {
          heading: "Engagements we run",
          items: [
            { title: "Profit Diagnostic", body: "4-week deep dive on where margin is leaking and how to recover it." },
            { title: "M&A Sprint", body: "8–12 week support through diligence, modeling, and negotiation." },
            { title: "Exit Readiness", body: "12-month roadmap to be sale-ready at a premium multiple." },
          ],
        },
        deliverables: [
          "Diagnostic report with prioritized recommendations",
          "Financial models supporting each option",
          "Board / investor presentation materials",
          "Implementation roadmap with owners and timing",
          "Ongoing advisory as you execute",
        ],
        whoFor: [
          "Founders facing a major strategic decision",
          "Firms preparing to buy, sell, or merge",
          "Leadership teams stuck on a profitability ceiling",
          "Owners 12–36 months from a planned exit",
        ],
        pricing: {
          from: "$15,000 project · $4,000 / month retainer",
          note: "Project pricing is fixed-scope. Retainers run 6–12 months for ongoing strategic partnership.",
        },
        testimonial: {
          quote:
            "Their diligence work uncovered $1.2M in synergies our deal team had completely missed.",
          name: "Elena Vasquez",
          role: "Managing Partner, Meridian Capital",
        },
        ctaTitle: "Facing a decision that",
        ctaAccent: "really matters?",
        ctaBody: "Bring us in early. The cost of getting these calls right always pays for itself.",
      }}
    />
  );
}