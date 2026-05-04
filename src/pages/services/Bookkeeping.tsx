import { ServiceTemplate } from "@/components/site/ServiceTemplate";

export default function Bookkeeping() {
  return (
    <ServiceTemplate
      data={{
        slug: "bookkeeping",
        overline: "Service · Phase 1 + 2",
        title: "Bookkeeping &",
        accent: "Month-End Close",
        subtitle:
          "A fast, accurate close cycle so leadership has reliable numbers within 5 business days of month-end — every month, without chasing.",
        whatItIs:
          "Bookkeeping is the system of record for your business — every dollar in, every dollar out, categorized correctly. Month-end close is the disciplined cycle that turns those entries into trustworthy financial statements. Done well, it becomes invisible. Done poorly, it becomes the bottleneck for every other decision.",
        whatWeDo: [
          "Daily and weekly bank, credit card, and merchant account reconciliations across QuickBooks Online or Xero.",
          "Bill and receipt capture through Dext or Hubdoc with automated coding rules tuned to your chart of accounts.",
          "Accruals, prepaids, deferred revenue, and recurring journal entries posted with full audit trail.",
          "Standardized 5-day month-end close checklist with reviewer sign-off before reports are issued.",
        ],
        deliverables: [
          "Monthly P&L, Balance Sheet, and Cash Flow statements",
          "Reconciled GL with supporting documentation",
          "Close binder with checklist sign-off",
          "Variance commentary on material accounts",
          "Year-end file ready for your tax preparer",
        ],
        whoFor: [
          "Service firms $2M–$30M with messy or backlogged books",
          "Founders who close in week 3+ and want week 1",
          "Teams preparing for an audit, financing, or sale",
          "Companies replacing a part-time bookkeeper",
        ],
        pricing: {
          from: "$1,500 / month",
          note: "Final scope depends on transaction volume, entity count, and software stack. Most clients land between $1.5K–$3.5K/month for full close ownership.",
        },
        testimonial: {
          quote:
            "We went from a 21-day close with mistakes to a 5-day close that I trust. That alone changed how we run the business.",
          name: "Marcus Hall",
          role: "Founder, Hall Creative Group",
        },
        ctaTitle: "Ready for a close you can",
        ctaAccent: "trust?",
        ctaBody:
          "Send us your last 3 months of statements — we'll show you exactly where your close is leaking time.",
      }}
    />
  );
}