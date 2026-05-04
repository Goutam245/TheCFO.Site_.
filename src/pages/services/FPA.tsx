import { ServiceTemplate } from "@/components/site/ServiceTemplate";

export default function FPA() {
  return (
    <ServiceTemplate
      data={{
        slug: "fpa",
        overline: "Service · Phase 4",
        title: "FP&A —",
        accent: "Budgeting & Forecasting"
        ,
        subtitle:
          "Annual budgets, rolling 12-month forecasts, scenario models, and a 13-week cash flow — the planning stack that makes every major decision easier.",
        whatItIs:
          "FP&A is the discipline of looking forward with the same rigor you look backward. Budgets set the baseline. Forecasts adjust to reality. Scenarios stress-test the plan. Cash flow tells you whether the plan is even survivable.",
        whatWeDo: [
          "Build a driver-based annual budget tied to revenue assumptions, headcount plans, and capex.",
          "Maintain a rolling 12-month forecast updated monthly with actuals and re-projection.",
          "Run scenario models — best, base, downside — for hiring, pricing, and growth investment decisions.",
          "Operate a 13-week cash flow model that ties to AR, AP, payroll, and known commitments.",
        ],
        extra: {
          heading: "Models we build",
          items: [
            { title: "Revenue Forecast", body: "Pipeline-weighted, cohort-aware, and tied to capacity." },
            { title: "Hiring Plan", body: "Headcount ramp matched to bookings and utilization targets." },
            { title: "13-Week Cash", body: "Weekly cash position with AR collections and AP timing." },
          ],
        },
        deliverables: [
          "Annual budget approved by leadership",
          "Rolling 12-month forecast (refreshed monthly)",
          "13-week cash flow model",
          "Scenario comparison decks",
          "Quarterly re-forecast workshop",
        ],
        whoFor: [
          "Firms making big decisions on gut + spreadsheets",
          "Teams raising capital or pursuing acquisitions",
          "Founders who need to see cash 90 days out",
          "Boards expecting variance-to-plan reporting",
        ],
        pricing: {
          from: "$3,000 / month",
          note: "Includes model build, monthly refresh, and quarterly re-forecast. Initial build runs 4–6 weeks.",
        },
        testimonial: {
          quote:
            "We made a $400K hiring decision in 30 minutes because the model showed us exactly what we'd believe at year end.",
          name: "Daniel Okafor",
          role: "COO, Bridgewater Studios",
        },
        ctaTitle: "Need a model you can",
        ctaAccent: "actually trust?",
        ctaBody: "We'll review your current forecast and show you what's missing — for free.",
      }}
    />
  );
}