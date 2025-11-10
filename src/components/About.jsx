import React from "react";
import Image from "next/image";
import { VentureSvg, VisionSvg } from "../../helpers/icons";
import TitleCard from "./TitleCard";
import Button from "./Button";
import LazyVideo from "./LazyVideo";

export default function About() {
  const divisionsOverview = [
    {
      title: "5 Sector Presence",
      description:
        "Holdings across digital, automotive, software, service, and real estate.",
    },
    {
      title: "$100M+ Portfolio",
      description:
        "Build a diversified portfolio exceeding $100M in total value.",
    },
    {
      title: "Automated Systems",
      description:
        "Fully automated community-driven capital flow infrastructure.",
    },
    {
      title: "New Private Equity",
      description:
        "Become the 'New Age Berkshire Hathaway' for modern entrepreneurs.",
    },
  ];
  return (
    <section className="bg-white py-16 rounded-t-3xl">
      <div className="grid-system">
        <div className="col-span-full md:col-start-2 md:col-span-4">
          <h2 className="text-3xl md:text-5xl lg:text-[64px] text-c-black mb-12 font-semibold">
            Meet The Founder
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-xl">
            <div className="space-y-8 flex flex-col ">
              <Image
                src="/agentchow.webp"
                alt="Charles Chow"
                width={500}
                height={500}
                className="w-full lg:max-w-sm aspect-square object-cover rounded-lg mx-auto lg:mx-0"
              />
              <div>
                <h3 className="text-2xl md:text-3xl text-c-black font-semibold">
                  Charles Chow
                </h3>
                <p className="text-base md:text-lg text-[rgba(11,11,11,0.6)]">
                  Founder & CEO
                </p>
              </div>
              <p className="text-lg md:text-3xl text-c-black max-w-[35ch]">
                Leading HyperFocused Holdings with a unique blend of technical
                excellence, operational execution, and entrepreneurial vision.
              </p>
              <div className="mt-auto">
                <div className="flex gap-2 items-center mb-3">
                  <VentureSvg className="w-auto h-3" />
                  <p className="text-xs  text-c-orange text-nowrap">
                    Business Acquisitions
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  {[
                    "Visionary thinking",
                    "Tech automation",
                    "Brand development",
                    "Deal analysis",
                  ].map((strength, i) => (
                    <div key={i} className="flex items-center gap-2 w-fit">
                      <div className="bg-c-black size-2.5" />
                      <span className="text-sm text-c-black">{strength}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6 flex flex-col ">
              <LazyVideo />
              <div className="mt-auto">
                <p className="text-base md:text-lg text-c-black text-right mb-4 font-medium">
                  Background & Achievements
                </p>
                <div className="space-y-3">
                  {[
                    "Senior Software Engineer at Uber",
                    "DIV I NCAA scholarship Student-Athlete",
                    "Serial entrepreneur",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="text-right text-xl md:text-2xl text-[rgba(11,11,11,0.6)] pb-3 border-b border-[rgba(11,11,11,0.6)]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TitleCard
        title={"Foresight"}
        description={
          "Building the foundation today for tomorrow's leading holding company."
        }
        descriptionClassName="text-c-black/60"
        tagline={"2030 VISION"}
      />
      <div className="grid-system ">
        <div className="grid  md:col-start-2 md:col-end-6 gap-8 xl:grid-cols-2">
          {divisionsOverview.map(({ title, description }, i) => {
            return (
              <div key={i} className="">
                <div className="flex gap-2 xl:gap-4 items-center">
                  <VisionSvg className="size-5 xl:size-8" />
                  <h3 className=" text-2xl xl:text-[32px]">{title}</h3>
                </div>
                <p className=" max-w-[55ch] mt-2 text-c-black/60 ">
                  {description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="grid-system mt-12 md:mt-24">
        <div className="flex flex-col items-center col-span-full md:col-start-2 md:col-end-6 py-6 px-8 bg-[#f8f8f8] rounded-2xl">
          <h1 className="2xl:text-[64px] text-4xl">2023</h1>
          <h1 className="2xl:text-5xl text-2xl text-center">
            The Future of Private Holdings
          </h1>
          <h3 className="2xl:text-2xl  text-lg text-center text-black/60 py-6 max-w-[60ch]">
            A fully integrated ecosystem where community, capital, and
            innovation converge to create unprecedented value across multiple
            sectors.
          </h3>
          <Button className="mt-12">Join Our Community</Button>
        </div>
      </div>
    </section>
  );
}
