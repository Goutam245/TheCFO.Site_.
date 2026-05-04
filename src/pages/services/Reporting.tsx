import { ServiceTemplate } from "@/components/site/ServiceTemplate";

export default function Reporting() {
  return (
    <ServiceTemplate
      data={{
        slug: "reporting",
        overline: "Service · Phase 3",
        title: "Financial Reporting &",
        accent: "KPI Dashboards",
        subtitle:
          "Power BI dashboards and management reports built around the metrics that actually drive your firm — refreshed automatically, reviewed monthly.",
        whatItIs:
          "Reporting is where raw accounting data becomes leadership signal. We design Power BI dashboards and monthly management reports that give your team the same clarity a public-company finance org has — without the headcount.",
        whatWeDo: [
          "Design a custom KPI tree mapped to your business model — gross margin per client, utilization, AR days, cash runway, and the metrics specific to your vertical.",
          "Build refreshable Power BI dashboards connected to QuickBooks, your billing system, and operational data sources.",
          "Issue a monthly management report pack with P&L, BS, CF, KPI dashboard, and written variance commentary.",
          "Run a 60-minute monthly review with leadership to walk through the numbers and decisions that follow.",
        ],
        extra: {
          heading: "What we typically build",
          items: [
            { title: "Executive Dashboard", body: "Single-screen view of revenue, margin, cash, and pipeline health." },
            { title: "Profitability by Client/Project", body: "True margin after labor allocation and direct costs — drill-down ready." },
            { title: "Cash & Working Capital", body: "Live AR aging, AP commitments, and 13-week cash position." },
          ],
        },
        deliverables: [
          "Monthly management report pack (PDF + live dashboard)",
          "Power BI workspace with role-based access",
          "Variance commentary vs budget and prior period",
          "KPI definitions document for the leadership team",
          "Monthly 60-min review meeting",
        ],
        whoFor: [
          "Firms making decisions on stale or partial data",
          "Leadership teams wanting one source of truth",
          "Boards and investors expecting professional reporting",
          "Operators tracking KPIs in 6 different spreadsheets",
        ],
        pricing: {
          from: "$2,500 / month",
          note: "Includes dashboard build, monthly reporting cycle, and review meeting. One-time setup typically $5K–$10K depending on data sources.",
        },
        testimonial: {
          quote:
            "The dashboard is the first thing I open every morning. I haven't opened QuickBooks in months.",
          name: "Priya Chen",
          role: "CEO, Northwind Marketing",
        },
        ctaTitle: "Want a dashboard your team will",
        ctaAccent: "actually use?",
        ctaBody: "We'll show you a live demo built on the metrics that matter to your firm.",
      }}
    />
  );
}