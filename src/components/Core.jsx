import React from "react";
import { MissionSvg, VisionSvg, CoreSvg } from "../../helpers/icons";
import LazyVideo from "./LazyVideo";
export default function Core() {
  const sections = [
    {
      title: "Mission",
      text: "Create enduring value by acquiring founder-led companies and compounding operational improvements through technology, talent, and disciplined capital allocation.",
      Icon: MissionSvg,
    },
    {
      title: "Vision",
      text: "Be the most trusted partner to owners and investors by delivering consistent, risk-adjusted returns and building durable, people-first organizations.",
      Icon: VisionSvg,
    },
    {
      title: "Core Focus",
      text: "Target $250K–$2M EBITDA, succession‑ready businesses in fragmented markets; deploy AI-driven operating systems to unlock margin expansion and growth.",
      Icon: CoreSvg,
    },
  ];

  return (
    <div>
      <section className="mt-12 grid-system">
        <h2 className="2xl:text-[64px] text-4xl md:text-5xl lg:text-6xl font-semibold col-span-full lg:col-start-2 lg:col-span-2 text-nowrap">
          Core Structure
        </h2>

        <div className="col-span-full lg:col-start-2 lg:col-end-6 flex flex-col-reverse md:flex-row w-full justify-center items-center">
          <LazyVideo />

          <p className="md:text-xl lg:text-2xl 2xl:text-3xl max-w-[30ch] mr-auto lg:mr-0">
            A new age private holding company bridging the gap between online
            intellectual capital and real-world asset ownership.
          </p>
        </div>
      </section>
      <section className="mt-8 md:mt-12 grid-system">
        {sections.map(({ title, text, Icon }, i) => (
          <div
            key={i}
            className="col-span-full md:col-start-2 md:col-end-6 py-3 border-b border-c-black"
          >
            <h3 className="text-2xl lg:text-4xl 2xl:text-5xl font-semibold">
              {title}
            </h3>

            <div className="mt-6 md:flex md:items-center md:flex-row-reverse gap-8">
              <Icon className="w-[50px] md:w-[150px] h-auto" />
              <p className="mt-3 2xl:text-2xl xl:text-xl lg:text-lg max-w-[50ch] mr-auto">
                {text}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
