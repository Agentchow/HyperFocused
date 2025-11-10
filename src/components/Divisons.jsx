import React from "react";
import TitleCard from "./TitleCard";
import Modal from "./Modal";

import {
  CapitalSvg,
  VentureSvg2,
  MediaSvg,
  VentureSvg,
} from "../../helpers/icons";
import TagLine from "./TagLine";
import { ForecastChart } from "./ForecastChart";
import { ForecastHistogram } from "./ForecastHistogram";

export default function Divisons() {
  const divisionsData = [
    {
      division: "Capital",
      revenueStreams: "Equity appreciation, cash flow from acquisitions",
      targetMargin: "25–40% ROI",
    },
    {
      division: "Media",
      revenueStreams:
        "Course sales, ad revenue, sponsorships, affiliate marketing",
      targetMargin: "60–80%",
    },
    {
      division: "Ventures",
      revenueStreams: "SaaS subscriptions, AI tools, productized services",
      targetMargin: "50–70%",
    },
  ];

  const trends = [
    {
      title: "$10T+ Asset Transfer",
      description:
        "Mass retirement of small-business owners creating unprecedented acquisition opportunities by 2030.",
    },
    {
      title: "Gen Z Trades Boom",
      description:
        "Large influx of Gen Z entering trades, creating a favorable employers market.",
    },
    {
      title: "Content-Driven Growth",
      description:
        "Community-driven brands now outperform paid ads by 5-10x in conversion rates.",
    },
    {
      title: "AI Automation",
      description:
        "AI-assisted deal sourcing enables lean teams to operate diversified portfolios efficiently.",
    },
  ];
  const divisons = [
    {
      title: "HyperFocused Capital",
      description:
        "Small business acquisitions, equity stakes, and angel investments.",
      Icon: <CapitalSvg />,
      content: (
        <section className="w-full">
          <h3 className="text-lg font-Regular text-white/80 mb-6">
            Acquisition Criteria
            <span className="text-white/50">(for Capital Division)</span>
          </h3>

          <div className="overflow-hidden rounded-xl border border-white/10 bg-[#111111]">
            <table className="min-w-full border-collapse text-left text-white/70">
              <tbody>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-6 font-medium text-white/90 w-1/3">
                    Annual Cash Flow
                  </td>
                  <td className="py-4 px-6">$250K–$2M</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-6 font-medium text-white/90">Owner</td>
                  <td className="py-4 px-6">Retiring or motivated to exit</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-6 font-medium text-white/90">
                    Tech Adaptation
                  </td>
                  <td className="py-4 px-6">
                    Minimal (ripe for systemization)
                  </td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-6 font-medium text-white/90">
                    Revenue Model
                  </td>
                  <td className="py-4 px-6">Strong recurring revenue</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-white/90">
                    Target Industries
                  </td>
                  <td className="py-4 px-6">
                    Auto, trades, marketing, and niche B2B services with
                    fragmented competition
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      ),
    },
    {
      title: "HyperFocused Media",
      description:
        "Brand and community ecosystem built around modern entrepreneurs and ADHD-driven achievement",
      Icon: <MediaSvg />,
      content: (
        <section className="w-full">
          <h3 className="text-lg font-Regular text-white/80 mb-6">
            Media Growth Model
            <span className="text-white/50"> (for Media Division)</span>
          </h3>
          <div className="grid gap-4">
            {[
              { k: "Channels", v: "YouTube, newsletter, podcast, social" },
              { k: "Monetization", v: "Sponsorships, ads, courses, affiliates" },
              { k: "Target Audience", v: "18–35 entrepreneurs & operators" },
              { k: "North-Star KPIs", v: "Audience growth, LTV, CAC payback" },
            ].map((row, i) => (
              <div key={i} className="flex items-center justify-between border-b border-white/10 py-3">
                <p className="text-white/90">{row.k}</p>
                <p className="text-white/60">{row.v}</p>
              </div>
            ))}
          </div>
        </section>
      ),
    },
    {
      title: "HyperFocused Ventures",
      description:
        "Incubator for in-house startups in AI, SaaS, e-commerce, and automotive sectors.",
      Icon: <VentureSvg2 />,
      content: (
        <section className="w-full">
          <h3 className="text-lg font-Regular text-white/80 mb-6">
            Venture Incubation
            <span className="text-white/50"> (for Ventures Division)</span>
          </h3>
          <div className="grid gap-4">
            {[
              { k: "Focus", v: "B2B SaaS, AI tools, productized services" },
              { k: "Stage", v: "0→1 incubation; spin-outs to stand-alone P&Ls" },
              { k: "Model", v: "Shared infra (brand, ops, GTM, engineering)" },
              { k: "Validation", v: "Pre-sell, payback < 6 months target" },
            ].map((row, i) => (
              <div key={i} className="flex items-center justify-between border-b border-white/10 py-3">
                <p className="text-white/90">{row.k}</p>
                <p className="text-white/60">{row.v}</p>
              </div>
            ))}
          </div>
        </section>
      ),
    },
  ];
  return (
    <div className="bg-c-black rounded-t-3xl text-white ">
      <div>
        <section>
          <TitleCard
            className="border-white/10  mt-16 md:mt-32"
            titleClassName="opacity-60"
            descriptionClassName="opacity-40"
            underline
            title="Our Divisions"
            description="Each business unit operates independently but synergizes through shared marketing, technology, and operations infrastructure."
            tagline="MULTI-VERTICAL STRUCTURE"
          />
          <section className="grid-system">
            <div className="col-span-full grid grid-cols-3 grid-rows-3 lg:grid-rows-1 2xl:col-start-2 2xl:col-end-6 gap-6 mt-24 mx-auto">
              {divisons.map((division, i) => (
                <Modal
                  key={i}
                  {...division}
                  className={`col-span-full lg:col-span-1 grid grid-rows-[auto_1fr_auto] ${
                    i == 0
                      ? "lg:col-start-1 row-start-1 row-end-2 lg:row-auto"
                      : i == 1
                      ? "lg:col-start-2 row-start-2 row-end-3 lg:row-auto"
                      : i == 2
                      ? "lg:col-start-3 row-start-3 row-end-4 lg:row-auto"
                      : ""
                  }`}
                ></Modal>
              ))}
            </div>
          </section>
        </section>
      </div>
      <TitleCard
        title="Market Opportunity"
        description="We're positioned at the intersection of multiple macro trends creating unprecedented opportunities for growth."
        titleClassName="text-white/60"
        descriptionClassName="text-white/40"
      />
      <div className="relative grid-system">
        {/* CARD */}
        <div className="col-span-full w-full px-8 py-6 bg-[#111111] rounded-xl 2xl:col-start-2 2xl:col-end-4 h-fit lg:sticky lg:top-5 lg:col-start-1 lg:col-end-4">
          <TagLine text="Target Market" className="ml-auto w-fit" />
          <div className="flex gap-2 items-center mt-8">
            <VentureSvg className="w-auto h-3" />
            <p className="text-xs  text-c-orange text-nowrap">
              Business Acquisitions
            </p>
          </div>
          <p className="mt-1 text-2xl text-white/50 lg:max-w-[30ch]">
            $200K–$2M EBITDA small businesses with retiring owners in fragmented
            markets
          </p>
          <div className="flex gap-2 items-center mt-16">
            <VentureSvg className="w-auto h-3" />
            <p className="text-xs  text-c-orange text-nowrap">
              Business Acquisitions
            </p>
          </div>
          <p className="mt-1 text-2xl text-white/50 lg:max-w-[30ch]">
            Ambitious young men aged 18–30 in tech and business
          </p>
        </div>
        {/* TABLE */}
        <div className="col-span-full  2xl:col-start-4 2xl:col-end-6 lg:col-start-4 lg:col-end-7">
          <TagLine text="Macro Trends" className="ml-auto w-fit" />
          <div className="">
            {trends.map((trend, i) => {
              return (
                <div
                  key={i}
                  className="py-6 border-b border-white/20   lg:mt-16"
                >
                  <h3 className="text-4xl text-white/60">{trend.title}</h3>
                  <p className="text-white/40 mt-6">{trend.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <TitleCard
        title="Business Model"
        titleClassName="text-white/60"
        description="Diversified revenue streams across three core divisions with high-margin potential."
        descriptionClassName="text-white/40"
      />
      <section className="grid-system mt-8 lg:mt-16">
        <div className="grid col-span-full grid-cols-3 w-full lg:col-start-2 lg:col-end-6">
          <p className=" text-sm text-white/20 font-semibold">DIVISION</p>
          <p className="justify-self-center text-sm text-white/20 font-semibold">
            REVENUE STREAMS
          </p>
          <p className="justify-self-end text-sm text-white/20 font-semibold">
            TARGET MARGIN
          </p>
        </div>

        {divisionsData.map(({ division, revenueStreams, targetMargin }, i) => {
          return (
            <div
              key={i}
              className="grid col-span-full text-white/60 grid-cols-3 w-full lg:col-start-2 lg:col-end-6 pb-10 border-b border-white/20 mt-8"
            >
              <p className=" lg:text-2xl ">{division}</p>
              <p className="justify-self-center lg:justify-self-start ">
                {revenueStreams}
              </p>
              <p className="justify-self-end lg:text-2xl ">{targetMargin}</p>
            </div>
          );
        })}
      </section>

      <section>
        <TitleCard
          title="Financial Forecast"
          titleClassName="text-white/60"
          description="Aggressive yet achievable growth targets backed by diversified revenue streams and systematic execution."
          descriptionClassName="text-white/40"
          underline={true}
          tagline={"3-YEAR PROJECTION"}
        />
      </section>
      <section className="grid-system mt-12">
        <div className="col-span-full lg:col-start-2 lg:col-end-6 gap-4 grid lg:grid-cols-2">
          <ForecastChart />
          <ForecastHistogram />
        </div>
      </section>
      <section className="grid-system mt-4">
        <div className="col-span-full lg:col-start-2 lg:col-end-6">
          <p className="text-xs text-white/40">
            Forward-looking statements are inherently uncertain and subject to risks and assumptions. Figures shown are illustrative mock values and do not guarantee future performance.
          </p>
        </div>
      </section>
      <section className="grid-system mt-16">
        <div className="col-span-full gap-4 grid lg:grid-cols-3 lg:col-start-1 lg:col-end-7 2xl:col-start-2 2xl:col-end-6">
          {[
            {
              year: "2025",
              revenue: "$500K",
              margin: "35%",
              milestones: [
                "Launch holdings structure",
                "Grow media to 50K audience",
                "Establish deal flow pipeline",
              ],
            },
            {
              year: "2026",
              revenue: "$2.5M",
              margin: "40%",
              milestones: [
                "Acquire first 1-2 small businesses",
                "Expand AI SaaS offerings",
                "Scale content production",
              ],
            },
            {
              year: "2027",
              revenue: "$7M+",
              margin: "45%",
              milestones: [
                "Build full internal M&A team",
                "Establish HQ fund",
                "Multi-sector portfolio",
              ],
            },
          ].map((item, i) => (
            <div key={i} className="bg-[#111111] rounded-xl p-6">
              <div className="flex items-center justify-between mb-8">
                <div className="bg-[#1a1a1a] px-3 py-1 rounded text-sm text-[rgba(255,255,255,0.4)]">
                  {item.year}
                </div>
                <div className="text-right">
                  <p className="text-sm text-[rgba(255,255,255,0.4)]">
                    Net Margin
                  </p>
                  <p className="text-base text-[orangered]">{item.margin}</p>
                </div>
              </div>
              <div className="mb-12">
                <p className="text-3xl md:text-4xl text-[rgba(255,255,255,0.6)] mb-1">
                  {item.revenue}
                </p>
                <p className="text-sm text-[rgba(255,255,255,0.4)]">
                  Revenue Target
                </p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <p className="text-sm text-[orangered]">Key Milestones</p>
                </div>
                <div className="space-y-1 text-sm md:text-base text-[rgba(255,255,255,0.6)]">
                  {item.milestones.map((m, j) => (
                    <p key={j}>
                      0{j + 1} {m}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
