import React from "react";
import Button from "./Button";
export default function Hero() {
  return (
    <div className="min-h-screen w-full flex flex-col text-c-black pt-32">
      {/* GRID AREA */}
      <div
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent, white 20%, white 80%, transparent), linear-gradient(to top, transparent, white 20%, white 80%, transparent), linear-gradient(to right, transparent, white 20%, white 80%, transparent), linear-gradient(to left, transparent, white 20%, white 80%, transparent)",
          maskComposite: "intersect", // This will combine all the gradients
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, white 20%, white 80%, transparent), linear-gradient(to top, transparent, white 20%, white 80%, transparent), linear-gradient(to right, transparent, white 20%, white 80%, transparent), linear-gradient(to left, transparent, white 20%, white 80%, transparent)",
          WebkitMaskComposite: "intersect",
        }}
        className="absolute inset-0 opacity-70 pointer-events-none z-[-1]"
      >
        <svg className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <pattern
              id="grid"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100"
                stroke="rgba(0,0,0,0.1)"
                strokeWidth="1"
              />
              <line
                x1="0"
                y1="0"
                x2="100"
                y2="0"
                stroke="rgba(0,0,0,0.1)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      {/* <div className="w-full h-[75px] md-h-[150px] col-span-full mt-12 md:mt-24" /> */}
      <section className="flex-1 flex flex-col ">
        <div className="grow flex flex-col items-center justify-center">
          <h1 className="text-c-black text-5xl  md:text-6xl lg:text-8xl  text-center mx-auto font-medium">
            Hyperfocused
          </h1>
          <h1 className="text-c-black text-5xl  md:text-6xl lg:text-8xl  text-center mx-auto font-medium">
            Holdings
          </h1>
          <h2 className="text-center mt-4 md:mt-6 md:text-2xl max-w-xs mx-auto lg:max-w-full">
            Hyper-Focused Execution. Multi-Dimensional Growth.
          </h2>
          <Button className="mt-8 md:mt-12">View Business Plan</Button>
          <div className="grid-system mt-12">
            <p className="md:col-start-2 md:col-end-5 xl:col-end-4 col-span-full md:text-lg lg:text-2xl 2xl:text-3xl max-w-[40ch] mr-auto md:mt-16">
              Acquiring, building, and scaling high-margin digital and physical
              businesses where AI innovation handles traditional inefficiency.
            </p>
          </div>
        </div>

        <div className=" grid-system px-[16px] md:px-[32px] py-6">
          <div className=" col-start-1 col-span-full md:col-start-2 md:col-end-6 w-full flex justify-between md: text-center">
            <div className=" ">
              <p className="text-c-black text-2xl md:text-5xl mb-2">3</p>
              <p className="text-c-black opacity-60 text-sm md:text-base">
                Core Divisions
              </p>
            </div>
            <div>
              <p className="text-c-black text-2xl md:text-5xl mb-2">$7M+</p>
              <p className="text-c-black opacity-60 text-sm md:text-base">
                2027 Target
              </p>
            </div>
            <div>
              <p className="text-c-black text-2xl md:text-5xl mb-2">45%</p>
              <p className="text-c-black opacity-60 text-sm md:text-base">
                Net Margin
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
