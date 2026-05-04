import { ServiceTemplate } from "@/components/site/ServiceTemplate";

export default function Controllership() {
  return (
    <ServiceTemplate
      data={{
        slug: "controllership",
        overline: "Service · Oversight Layer",
        title: "Controllership",
        accent: "Services",
        subtitle:
          "Oversight of your accounting function — internal controls, process design, technical accounting, and audit-readiness for firms scaling beyond the founder.",
        whatItIs:
          "A Controller owns the integrity of the accounting function. Where the bookkeeper records and the CFO advises, the Controller designs and enforces the systems that make sure the numbers are right, the controls are working, and the team is operating to a standard.",
        whatWeDo: [
          "Design and document accounting policies, approval matrices, and segregation-of-duties controls.",
          "Review and approve the work of internal bookkeepers or accounting staff with monthly oversight.",
          "Manage technical accounting topics — revenue recognition, leases, deferred comp, and stock comp.",
          "Lead audit and review readiness, including PBC list management and auditor coordination.",
        ],
        deliverables: [
          "Documented accounting policy manual",
          "Internal control matrix with quarterly testing",
          "Monthly close review and sign-off",
          "Technical accounting memos as needed",
          "Audit / review preparation and coordination",
        ],
        whoFor: [
          "Firms with internal accounting staff that need oversight",
          "Companies preparing for audit, M&A, or financing",
          "Founders ready to delegate finance ownership",
          "Businesses with complex revenue or compensation structures",
        ],
        pricing: {
          from: "$3,500 / month",
          note: "Often paired with bookkeeping and reporting for a full back-office package. Standalone controllership available for firms with existing accounting staff.",
        },
        testimonial: {
          quote:
            "Our auditors finished in 6 weeks instead of 14. The PBC list was complete on day one.",
          name: "Sarah Linwood",
          role: "CFO, Atlas Industrial",
        },
        ctaTitle: "Building a finance function that",
        ctaAccent: "scales?",
        ctaBody:
          "Let's audit your current controls and design what's needed to operate at the next stage.",
      }}
    />
  );
}