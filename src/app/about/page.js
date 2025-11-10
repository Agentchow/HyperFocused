import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import Image from "next/image";
import { VisionSvg, VentureSvg } from "../../../helpers/icons";
import TitleCard from "@/components/TitleCard";
import Section from "@/components/ui/section";

export const metadata = {
  title: "About | Hyperfocused Holdings",
  description: "Learn about HyperFocused Holdings and our mission to build the future of private holdings.",
};

export default function AboutPage() {
  const milestones = [
    {
      year: "2023",
      title: "Foundation",
      description: "HyperFocused Holdings was established with a vision to revolutionize private equity.",
    },
    {
      year: "2024",
      title: "First Acquisitions",
      description: "Successfully acquired and integrated our first portfolio companies across digital and physical sectors.",
    },
    {
      year: "2025",
      title: "Expansion",
      description: "Expanding operations across 5 key sectors with focus on AI-driven optimization.",
    },
    {
      year: "2027",
      title: "Target Achievement",
      description: "Targeting $7M+ portfolio value with 45% net margin across all divisions.",
    },
  ];

  const values = [
    {
      title: "Innovation First",
      description: "We leverage cutting-edge AI and automation to eliminate inefficiencies and maximize value.",
    },
    {
      title: "Hyper-Focused Execution",
      description: "Our concentrated approach ensures excellence in every business we acquire and build.",
    },
    {
      title: "Multi-Dimensional Growth",
      description: "Diversified portfolio across digital, automotive, software, service, and real estate sectors.",
    },
    {
      title: "Community-Driven",
      description: "Building a thriving community of entrepreneurs, investors, and innovators.",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <Nav />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-32">
        <div className="grid-system">
          <div className="col-span-full md:col-start-2 md:col-end-6">
            <h1 className="2xl:text-[64px] text-4xl md:text-6xl lg:text-8xl font-semibold text-c-black">
              About Us
            </h1>
            <p className="mt-6 md:text-xl lg:text-2xl 2xl:text-3xl text-c-black/60 max-w-[40ch]">
              Building the next generation holding company through hyper-focused execution and AI-driven innovation.
            </p>
            <Button className="mt-12">View Business Plan</Button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <Section bgClass="bg-c-black text-white rounded-t-3xl" noTop>
        <TitleCard
          title="Our Mission"
          titleClassName="text-white/60"
          description="Creating a fully integrated ecosystem where community, capital, and innovation converge."
          descriptionClassName="text-white/40"
          tagline="THE FUTURE"
        />
        {/* Firm Highlights */}
        <div className="grid-system mt-6">
          <div className="col-span-full md:col-start-2 md:col-end-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "AUM", value: "$120M" },
              { label: "Platforms / Add-ons", value: "12 / 34" },
              { label: "Net IRR (Fund I)", value: "19.4%" },
              { label: "TVPI (Fund I)", value: "1.90×" },
            ].map((s, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-[#0f0f0f] p-6">
                <div className="text-2xl md:text-4xl text-white font-semibold">{s.value}</div>
                <div className="text-white/60 text-sm mt-2">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="col-span-full md:col-start-2 md:col-end-6 mt-3">
            <p className="text-xs text-white/40">
              Past performance is not indicative of future results. Metrics shown are illustrative mock values.
            </p>
          </div>
        </div>
        <div className="grid-system mt-8 md:mt-12 pb-16 md:pb-32">
          <div className="col-span-full md:col-start-2 md:col-end-6">
            <div className="flex gap-2 items-center mb-6">
              <VisionSvg className="w-auto h-3" />
              <p className="text-xs text-c-orange text-nowrap">
                Business Philosophy
              </p>
            </div>
            <p className="text-2xl lg:text-3xl 2xl:text-4xl text-white/80 max-w-[55ch] leading-relaxed">
              We acquire, build, and scale high-margin businesses where AI innovation replaces traditional inefficiency. 
              Our goal is to generate unprecedented value across multiple sectors through systematic execution.
            </p>
          </div>
        </div>
      </Section>

      {/* Values Section */}
      <Section bgClass="bg-white" noTop>
        <TitleCard
          title="Our Values"
          description="The principles that guide every decision and action we take."
          tagline="WHAT WE BELIEVE"
        />
        <div className="grid-system mt-12 md:mt-16">
          <div className="col-span-full md:col-start-2 md:col-end-6 grid gap-12 lg:grid-cols-2">
            {values.map((value, index) => (
              <div key={index} className="border-t-2 border-c-orange pt-6">
                <h3 className="text-2xl lg:text-3xl 2xl:text-4xl font-semibold text-c-black mb-4">
                  {value.title}
                </h3>
                <p className="2xl:text-2xl xl:text-xl lg:text-lg text-c-black/60 max-w-[50ch]">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Timeline Section */}
      <Section bgClass="bg-[#f8f8f8]" noTop>
        <TitleCard
          title="Our Journey"
          description="Key milestones in building the future of private holdings."
          tagline="TIMELINE"
        />
        <div className="grid-system mt-12 md:mt-16">
          <div className="col-span-full md:col-start-2 md:col-end-6 space-y-12 lg:space-y-16">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-6 md:gap-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-c-orange flex items-center justify-center">
                    <span className="text-white font-semibold text-base md:text-lg">{milestone.year}</span>
                  </div>
                </div>
                <div className="pt-2">
                  <h3 className="text-2xl lg:text-3xl 2xl:text-4xl font-semibold text-c-black mb-3">
                    {milestone.title}
                  </h3>
                  <p className="2xl:text-2xl xl:text-xl lg:text-lg text-c-black/60 max-w-[55ch]">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}

