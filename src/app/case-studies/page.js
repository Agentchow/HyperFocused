import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import TitleCard from "@/components/TitleCard";
import Section from "@/components/ui/section";
import CaseStudies from "@/components/CaseStudies";

export const metadata = {
  title: "Case Studies | HyperFocused Holdings",
  description:
    "Selected snapshots of value creation initiatives across sectors and strategies.",
};

export default function CaseStudiesPage() {
  const studies = [
    {
      slug: "industrial-roll-up",
      title: "Industrial Roll‑Up",
      metric: "2.0× MOIC, +22% EBITDA",
      time: "24 months",
      blurb: "Platform with 5 add‑ons across adjacent services.",
    },
    {
      slug: "b2b-services",
      title: "B2B Services",
      metric: "1.7× TVPI (interim), +18% CAGR",
      time: "36 months",
      blurb: "Pricing, utilization, and GTM overhaul.",
    },
    {
      slug: "saas-optimization",
      title: "SaaS Optimization",
      metric: "+12 pts gross margin",
      time: "9 months",
      blurb: "Cloud cost controls and tiered packaging.",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <Nav />
      <section className="min-h-screen flex items-center justify-center pt-32">
        <div className="grid-system">
          <div className="col-span-full md:col-start-2 md:col-end-6">
            <h1 className="2xl:text-[64px] text-4xl md:text-6xl lg:text-8xl font-semibold text-c-black">
              Case Studies
            </h1>
            <p className="mt-6 md:text-xl lg:text-2xl 2xl:text-3xl text-c-black/60 max-w-[45ch]">
              Practical, operator‑led value creation—from industrial services to software.
            </p>
          </div>
        </div>
      </section>

      <Section bgClass="bg-[#f8f8f8]" noTop>
        <TitleCard
          title="Selected Work"
          description="Representative examples of our approach and outcomes."
          tagline="PROVEN OUTCOMES"
        />
        <CaseStudies />
      </Section>
      <Footer />
    </div>
  );
}


